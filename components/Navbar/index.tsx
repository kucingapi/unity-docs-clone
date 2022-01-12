import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { NavLinkContainer } from './NavLinkContainer';


export const Navbar = () => {
  const navLinks = [
    {
      title: 'Docs Home',
      link: '/',
    },
    {
      title: 'Learning',
      link: '/learn',
    },
    {
      title: 'Learning',
      link: '/learn',
    },
  ];

  return (
    <nav className="px-1 items-center flex justify-between min-w-full py-5 bg-black text-white">
      <a href="./" className="flex items-center text-xl gap-2">
        <img className="w-4/12" src="/unity_logo.svg" alt="" />
        <h1>Documentation</h1>
      </a>
      <NavLinkContainer 
        navLinks={navLinks} 
        horizontal={true} 
        active={0} 
      />
    </nav>
  );
};
