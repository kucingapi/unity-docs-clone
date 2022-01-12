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
    <nav className="px-1 items-center flex justify-between min-w-full py-5 bg-black text-white sticky top-0">
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
