import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface NavlinkProps {
  link: string;
  title: string;
  active: boolean;
  dropdown?: Array<Object>;
}

interface NavlinkContainerProps {
  navLinks: Array<Object>;
  horizontal: boolean;
  active: number;
}

const NavLink = ({ link, title, active }: NavlinkProps) => {
  return (
    <Link href={link}>
      <a
        className={
          (active && 'navlink-active') +
          ' hover:text-blue-500 hover:underline transition-all duration-200 ease-out w-11/12 px-2 whitespace-nowrap'
        }
      >
        {title}
      </a>
    </Link>
  );
};

const NavLinkContainer = ({
  navLinks,
  horizontal,
  active,
}: NavlinkContainerProps) => {
  return (
    <div className="flex gap-4">
      {navLinks.map((navLink: any, index) => (
        <>
          <NavLink
            link={navLink.link}
            title={navLink.title}
            active={index == active}
          />
        </>
      ))}
    </div>
  );
};

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
    <nav className="px-1 items-center flex justify-between min-w-full py-3 bg-black text-white">
      <a href="./" className="flex items-center text-xl gap-2">
        <img className="w-4/12" src="/unity_logo.svg" alt="" />
        <h1>Documentation</h1>
      </a>
      <NavLinkContainer navLinks={navLinks} horizontal={true} active={0} />
    </nav>
  );
};
