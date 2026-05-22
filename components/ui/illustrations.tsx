import * as React from "react";

import { cn } from "@/lib/utils";

type SVGProps = React.SVGProps<SVGSVGElement>;

export function PieIllustration({ className, ...props }: SVGProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      {...props}
    >
      <ellipse
        cx="100"
        cy="135"
        rx="78"
        ry="14"
        fill="currentColor"
        opacity="0.18"
      />
      <ellipse cx="100" cy="125" rx="78" ry="20" fill="currentColor" />
      <path
        d="M22 125 C22 80 56 50 100 50 C144 50 178 80 178 125 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M22 125 C50 110 150 110 178 125"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M36 105 L 60 78 L 88 95 L 110 70 L 136 92 L 164 75"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="70" cy="95" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="120" cy="85" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="150" cy="100" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function CakeIllustration({ className, ...props }: SVGProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      {...props}
    >
      <ellipse
        cx="100"
        cy="170"
        rx="85"
        ry="10"
        fill="currentColor"
        opacity="0.15"
      />
      <rect x="34" y="100" width="132" height="60" rx="4" fill="currentColor" />
      <path
        d="M34 110 C40 100 70 105 100 100 C130 95 160 105 166 100 L166 115 L34 115 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <rect
        x="34"
        y="110"
        width="132"
        height="6"
        fill="currentColor"
        opacity="0.5"
      />
      <rect x="46" y="70" width="108" height="30" rx="4" fill="currentColor" />
      <path
        d="M46 78 C52 70 75 75 100 72 C125 69 148 78 154 72 L154 85 L46 85 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <rect x="68" y="48" width="64" height="20" rx="4" fill="currentColor" />
      <rect
        x="92"
        y="20"
        width="4"
        height="22"
        fill="currentColor"
        opacity="0.7"
      />
      <rect
        x="106"
        y="28"
        width="4"
        height="14"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M94 18 C94 16 92 14 90 16 C92 12 96 14 94 18 Z"
        fill="currentColor"
        opacity="0.4"
      />
      <path
        d="M108 26 C108 24 106 22 104 24 C106 20 110 22 108 26 Z"
        fill="currentColor"
        opacity="0.4"
      />
      <circle cx="60" cy="135" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="100" cy="135" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="140" cy="135" r="3" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function CoffeeIllustration({ className, ...props }: SVGProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      {...props}
    >
      <ellipse
        cx="100"
        cy="172"
        rx="60"
        ry="6"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M50 80 L150 80 L142 165 C141 170 138 172 134 172 L66 172 C62 172 59 170 58 165 Z"
        fill="currentColor"
      />
      <ellipse
        cx="100"
        cy="80"
        rx="50"
        ry="6"
        fill="currentColor"
        opacity="0.85"
      />
      <ellipse
        cx="100"
        cy="82"
        rx="44"
        ry="4"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M150 100 C170 100 178 115 178 130 C178 145 170 158 150 158"
        stroke="currentColor"
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M82 50 C82 40 78 36 78 28 C78 22 82 18 82 12"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M100 56 C100 46 96 42 96 34 C96 28 100 24 100 18"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M118 50 C118 40 114 36 114 28 C114 22 118 18 118 12"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

export function CroissantIllustration({ className, ...props }: SVGProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      {...props}
    >
      <ellipse
        cx="100"
        cy="155"
        rx="80"
        ry="10"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M30 130 C30 90 60 60 100 60 C140 60 170 90 170 130 C170 145 158 152 142 148 C130 145 122 138 118 128 C115 138 108 145 100 145 C92 145 85 138 82 128 C78 138 70 145 58 148 C42 152 30 145 30 130 Z"
        fill="currentColor"
      />
      <path
        d="M58 110 C58 100 64 92 74 92"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M86 105 C86 96 92 88 100 88"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M114 105 C114 96 120 88 128 88"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M142 110 C142 100 148 92 158 92"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sparkle({ className, ...props }: SVGProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 2 L13.5 9 L20 10.5 L13.5 12 L12 19 L10.5 12 L4 10.5 L10.5 9 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WheatSprig({ className, ...props }: SVGProps) {
  return (
    <svg
      viewBox="0 0 60 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      {...props}
    >
      <line
        x1="30"
        y1="20"
        x2="30"
        y2="190"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {[40, 55, 70, 85, 100, 115, 130, 145].map((y, i) => (
        <g key={y}>
          <ellipse
            cx={i % 2 === 0 ? 18 : 42}
            cy={y}
            rx="9"
            ry="5"
            fill="currentColor"
            transform={`rotate(${i % 2 === 0 ? -25 : 25} ${
              i % 2 === 0 ? 18 : 42
            } ${y})`}
          />
          <line
            x1="30"
            y1={y + 2}
            x2={i % 2 === 0 ? 22 : 38}
            y2={y}
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </g>
      ))}
      <ellipse cx="30" cy="22" rx="6" ry="10" fill="currentColor" />
    </svg>
  );
}

export function DividerOrnament({ className, ...props }: SVGProps) {
  return (
    <svg
      viewBox="0 0 400 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      {...props}
    >
      <line
        x1="0"
        y1="12"
        x2="170"
        y2="12"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M200 4 L202 10 L208 12 L202 14 L200 20 L198 14 L192 12 L198 10 Z"
        fill="currentColor"
      />
      <circle cx="185" cy="12" r="2" fill="currentColor" />
      <circle cx="215" cy="12" r="2" fill="currentColor" />
      <line
        x1="230"
        y1="12"
        x2="400"
        y2="12"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export function StampSeal({
  className,
  label = "EST. 2020",
  ...props
}: SVGProps & { label?: string }) {
  const id = React.useId();
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <path
          id={`circle-${id}`}
          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
        />
      </defs>
      <circle
        cx="100"
        cy="100"
        r="92"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeDasharray="2 4"
      />
      <circle
        cx="100"
        cy="100"
        r="82"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <text
        fill="currentColor"
        fontSize="13"
        fontFamily="var(--font-sans), sans-serif"
        fontWeight="600"
        letterSpacing="2"
      >
        <textPath href={`#circle-${id}`} startOffset="0">
          · HANDMADE · FRESH DAILY · SMALL BATCH · BAKED WITH LOVE
        </textPath>
      </text>
      <text
        x="100"
        y="92"
        textAnchor="middle"
        fill="currentColor"
        fontSize="20"
        fontFamily="var(--font-serif), serif"
        fontStyle="italic"
        fontWeight="500"
      >
        The
      </text>
      <text
        x="100"
        y="116"
        textAnchor="middle"
        fill="currentColor"
        fontSize="22"
        fontFamily="var(--font-serif), serif"
        fontWeight="700"
        letterSpacing="1"
      >
        BURP CO.
      </text>
      <text
        x="100"
        y="135"
        textAnchor="middle"
        fill="currentColor"
        fontSize="10"
        fontFamily="var(--font-sans), sans-serif"
        fontWeight="600"
        letterSpacing="3"
      >
        {label}
      </text>
    </svg>
  );
}

export function SteamLines({ className, ...props }: SVGProps) {
  return (
    <svg
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M15 70 C15 55 10 50 10 40 C10 30 15 25 15 15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
        style={{ animation: "steam 3s ease-in-out infinite" }}
      />
      <path
        d="M30 70 C30 55 25 50 25 40 C25 30 30 25 30 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
        style={{ animation: "steam 3s ease-in-out infinite 0.5s" }}
      />
      <path
        d="M45 70 C45 55 40 50 40 40 C40 30 45 25 45 15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
        style={{ animation: "steam 3s ease-in-out infinite 1s" }}
      />
    </svg>
  );
}
