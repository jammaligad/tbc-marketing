import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "public/products/logo.png");

const outputs = {
  faviconIco: [
    join(root, "public/favicon.ico"),
    join(root, "app/favicon.ico"),
  ],
  appleTouchIcon: [
    join(root, "public/apple-touch-icon.png"),
    join(root, "app/apple-icon.png"),
  ],
  appIcon: join(root, "app/icon.png"),
};

const faviconSizes = [16, 32, 48];

function createIco(entries) {
  const headerSize = 6 + entries.length * 16;
  let offset = headerSize;
  const images = entries.map(({ png, size }) => {
    const image = { png, offset, size };
    offset += png.length;
    return image;
  });

  const buffer = Buffer.alloc(offset);
  buffer.writeUInt16LE(0, 0);
  buffer.writeUInt16LE(1, 2);
  buffer.writeUInt16LE(entries.length, 4);

  images.forEach(({ png, offset: dataOffset, size }, index) => {
    const entryOffset = 6 + index * 16;
    buffer.writeUInt8(size >= 256 ? 0 : size, entryOffset);
    buffer.writeUInt8(size >= 256 ? 0 : size, entryOffset + 1);
    buffer.writeUInt8(0, entryOffset + 2);
    buffer.writeUInt8(0, entryOffset + 3);
    buffer.writeUInt16LE(1, entryOffset + 4);
    buffer.writeUInt16LE(32, entryOffset + 6);
    buffer.writeUInt32LE(png.length, entryOffset + 8);
    buffer.writeUInt32LE(dataOffset, entryOffset + 12);
    png.copy(buffer, dataOffset);
  });

  return buffer;
}

mkdirSync(join(root, "app"), { recursive: true });

const icoEntries = [];
for (const size of faviconSizes) {
  const png = await sharp(src)
    .resize(size, size, { fit: "cover" })
    .ensureAlpha()
    .png({ compressionLevel: 9 })
    .toBuffer();
  icoEntries.push({ png, size });
}

const ico = createIco(icoEntries);
for (const path of outputs.faviconIco) {
  writeFileSync(path, ico);
  console.log(`Wrote ${path} (${ico.length} bytes)`);
}

const appIcon = await sharp(src)
  .resize(32, 32, { fit: "cover" })
  .ensureAlpha()
  .png({ compressionLevel: 9 })
  .toBuffer();
writeFileSync(outputs.appIcon, appIcon);
console.log(`Wrote ${outputs.appIcon} (${appIcon.length} bytes)`);

const appleIcon = await sharp(src)
  .resize(180, 180, { fit: "cover" })
  .ensureAlpha()
  .png({ compressionLevel: 9 })
  .toBuffer();
for (const path of outputs.appleTouchIcon) {
  writeFileSync(path, appleIcon);
  console.log(`Wrote ${path} (${appleIcon.length} bytes)`);
}
