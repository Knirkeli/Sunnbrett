"use client";

import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { MenuSquareIcon } from 'lucide-react';


const links = [
  {name: 'Hjem', href: '/'},
  {name: 'Om oss', href: '/Om-oss'},
  {name: 'Våre spel', href: '/Spel'},
  {name: 'Nyhende', href: '/Nyhende'},
  {name: 'Bidragsytare', href: '/Bidragsytare'},
  
]

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={`${styles.header} mb-8 border-b relative`}>
        <div className='flex items-center justify-start max-w-full px-4 sm:px-6 lg:max-w-7xl pl-15'>
          <div>
          <Link href="/">
              <Image className="w-40 h-40 md:w-64 md:h-64" src="/tempmedia/logo.png" alt="Sunnbrett" width={200} height={200} />
          </Link>
          </div>
          <div className='ml-9'>
              <h1 className="text-white text-3xl">Spel for alle</h1>
          </div>
        </div>
        <div className='absolute md:bottom-5 bottom-1 right-0 flex items-end justify-end mx-auto max-w-2xl py-5 sm:px-6 lg:max-w-7xl'>
          <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
            {links.map((link, idx) => (
              <div key={idx}>
                {pathname === link.href ? (
                  <Link className='text-gray-600 text-lg font-semibold' href={link.href}>{link.name}</Link>
                ) : (
                  <Link className='text-white text-lg font-semibold hover:text-gray-600 transition duration-100 hover:text-grey-600' href={link.href}>{link.name}</Link>
                )}                
                </div>
                
            ))}
          </nav>
          <div className='flex items-center sm:py-auto sm:px-6'>
            <Button className={`${styles.header} lg:hidden flex flex-col gap-y-1.5 h-12 w-12 sm:h20 sm:w-20`}>
              <MenuSquareIcon />
            </Button>
          </div>
        </div>
    </header>
  );
}