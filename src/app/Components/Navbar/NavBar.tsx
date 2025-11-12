"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen)

  return (
    <nav className="w-full bg-neutral-900 border-b border-border sticky top-0 z-50 ">
      {/* --- Desktop Navbar --- */}
      <div className="hidden md:flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">Home</Link>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-2 text-white ">
           

           
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/About">About</Link>

              </NavigationMenuLink>
            </NavigationMenuItem>

              <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/Skills">Skills</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

              <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/Projects">Projects</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

           
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* --- Mobile Navbar --- */}
      <div className="flex md:hidden items-center justify-between p-4">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">Home</Link>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md text-gray-700 hover:bg-muted"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* --- Mobile Drawer --- */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-md animate-in fade-in slide-in-from-top-2">
          <ul className="flex flex-col p-4 gap-4 text-white">
          
          
            <MobileLink href="/About" text="About" />
            <MobileLink href="/Skills" text="Skills" />
            <MobileLink href="/Projects" text="Projects" />
          
          </ul>
        </div>
      )}
    </nav>
  )
}

/* --- Reusable Components --- */
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-md p-2 hover:bg-muted/30 transition"
        >
          <div className="text-sm font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-xs">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

function MenuLinkWithIcon({
  Icon,
  text,
  href,
}: {
  Icon: React.ElementType
  text: string
  href: string
}) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="flex items-center gap-2 text-sm font-medium hover:text-primary transition"
      >
        <Icon className="h-4 w-4" />
        {text}
      </Link>
    </NavigationMenuLink>
  )
}

function MobileLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="block text-lg font-medium hover:text-blue-600 transition"
    >
      {text}
    </Link>
  )
}
