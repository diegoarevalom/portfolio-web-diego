'use client'

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import React, { useEffect } from 'react'

interface NavigationMenuProps {
  activeSection: string
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}



function navigation_menu({ activeSection, menuOpen, setMenuOpen }: NavigationMenuProps) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  useEffect(() => {
    console.log('activeSection', activeSection);
  }, [activeSection]);

  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex justify-between'>
          <a href="#home" className='text-2xl font-mono text-white hover:text-blue-500 transition duration-300 ease-in-out'>
            LOGO
          </a>
          <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </div>
          <NavigationMenu className='hidden md:flex items-center space-x-8'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href='#home' className={`hover:text-white transition-colors ${activeSection === "home"
                  ? " bg-gradient-to-r from-[#fef08a] to-[#86efac] bg-clip-text text-transparent"
                  : ""
                  }`}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href='#about'
                  className={`hover:text-white transition-colors ${activeSection === "about"
                    ? " bg-gradient-to-r from-[#fef08a] to-[#86efac] bg-clip-text text-transparent"
                    : ""
                    }`}>
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href='#skills' className={`hover:text-white transition-colors ${activeSection === "skills"
                  ? " bg-gradient-to-r from-[#fef08a] to-[#86efac] bg-clip-text text-transparent"
                  : ""
                  }`}>
                  Skills
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href='#projects' className={`hover:text-white transition-colors ${activeSection === "projects"
                  ? " bg-gradient-to-r from-[#fef08a] to-[#86efac] bg-clip-text text-transparent"
                  : ""
                  }`}>
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href='#contact' className={`hover:text-white transition-colors ${activeSection === "contact"
                  ? " bg-gradient-to-r from-[#fef08a] to-[#86efac] bg-clip-text text-transparent"
                  : ""
                  }`}>
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav >
  )
}

export default navigation_menu