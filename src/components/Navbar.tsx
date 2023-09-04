'use client'

import {cn} from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from './ui/navigation-menu'
import Link from 'next/link'

type NavbarProps = {}

export default function Navbar({}: NavbarProps) {
  const navigationLinks = [
    {
      name: 'Platform',
      href: 'https://demyst.com/platform',
    },
    {
      name: 'Documentation',
      href: 'https://demystdocs.readme.io/',
    },
    {
      name: 'Customers',
      href: 'https://demyst.com/case-studies',
    },
    {
      name: 'About',
      href: 'https://demyst.com/about-us',
    },
  ]
  return (
    <div className="container">
      <NavigationMenu className="h-14 flex gap-6 items-center">
        <Link href="/">
          <div className="logo text-[#160a4c] font-bold text-2xl">Demyst Bank</div>
        </Link>
        <NavigationMenuList className={cn('flex gap-4 ')}>
          {navigationLinks.map((link, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={link.href}
                className="text-[#160a4c] hover:underline transition-colors 
              "
              >
                {link.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
