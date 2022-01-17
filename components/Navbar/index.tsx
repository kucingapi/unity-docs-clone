import { useState } from 'react';
import { SidebarProvider } from '../../contexts/navbarContext/sidebarContext';
import { NavLinkContainerHorizontal } from './NavLinkContainer/Horizontal';
import DropdownIcon from './NavLinkContainer/Horizontal/DropdownIcon';
import { NavLinkContainerVertical } from './NavLinkContainer/Vertical';
import { ViewMoreIcon } from './ViewMoreIcon';

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(-1)
  const sidebarHandler = (number: number) => {
    setSidebar(number)
  }
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
      title: 'Community',
      dropdowns: [
        {
          title:'Blogs',
          link:'blogs'
        },
        {
          title:'Forums',
          link:'forums'
        },
        {
          title:'Answers',
          link:'answer'
        },
      ]
    },
    {
      title: 'Support & Services',
      dropdowns: [
        {
          title:'Customer Service',
          link:'cs'
        },
        {
          title:'Knowladge Base',
          link:'knowladge'
        },
        {
          title:'Technical Support',
          link:'ts'
        },
        {
          title:'Consulting Services',
          link:'consulting'
        },
      ]
    },
  ];

  return (
    <SidebarProvider>
      <div className='bg-black sticky top-0'>
        <nav className="px-1 items-center flex justify-between w-full py-5 text-white xl:max-w-6xl m-auto">
          <NavLinkContainerVertical
            navLinks={navLinks}
            sidebar={sidebar}
            sidebarHandler={sidebarHandler}
          />
          <div className="flex items-center text-xl gap-2">
            <ViewMoreIcon
              active={sidebar != -1}
              onChange={sidebarHandler}
            />
            <a href="." className='flex gap-3 items-center'>
              <img className="ml-5 w-4/12" src="/unity_logo.svg" alt="" />
              <h1>Documentation</h1>
            </a>
          </div>
          <NavLinkContainerHorizontal
            navLinks={navLinks}
            active={0}
      
          />
          <div className='lg:hidden'>
            <DropdownIcon />
          </div>
        </nav>
      </div>
    </SidebarProvider>
  );
};
