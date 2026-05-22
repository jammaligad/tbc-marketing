"use client";

import Link from "next/link";

import { siteConfig } from "@/config/site";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

interface NavigationProps {
  menuItems?: { title: string; href: string }[];
}

export default function Navigation({
  menuItems = [
    { title: "Menu", href: siteConfig.menuUrl },
    { title: "About", href: siteConfig.aboutUrl },
    { title: "Visit", href: siteConfig.visitUrl },
  ],
}: NavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <Link href={item.href}>{item.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
