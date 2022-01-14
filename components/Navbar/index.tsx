import { ViewListIcon } from '@heroicons/react/solid';
import { NavLinkContainer } from './NavLinkContainer';
import DropdownIcon from './NavLinkContainer/DropdownIcon';

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
    <div className='bg-black sticky top-0'>
      <nav className="px-1 items-center flex justify-between w-full py-5 text-white lg:max-w-6xl m-auto">
        <NavLinkContainer
          navLinks={navLinks}
          horizontal={false}
          active={0}
        />
        <a href="./" className="flex items-center text-xl gap-2">
          <ViewListIcon
            className='w-6 lg:hidden'
          />
          <img className="w-4/12" src="/unity_logo.svg" alt="" />
          <h1>Documentation</h1>
        </a>
        <NavLinkContainer
          navLinks={navLinks}
          horizontal={true}
          active={0}
        />
        <div className='lg:hidden'>
          <DropdownIcon />
        </div>
      </nav>
    </div>
  );
};
