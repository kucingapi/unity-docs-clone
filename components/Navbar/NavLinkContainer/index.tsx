import { Transition } from '@headlessui/react';
import { ButtonLink } from './ButtonLink';
import DropdownIcon from './DropdownIcon';
import { NavLink } from './NavLink';
import { NavLinkDropdown } from './NavLinkDropdown';
interface NavlinkContainerProps {
  navLinks: Array<Object>;
  horizontal: boolean;
  active: number;
  sidebar?: boolean;
}

export const NavLinkContainer = ({
  navLinks,
  horizontal,
  active,
  sidebar
}: NavlinkContainerProps) => {
  
  if(horizontal)
    return (
      <div className="flex gap-4 xs:hidden sm:hidden lg:flex items-center">
        {navLinks.map((navLink: any, index) => {
          if(!navLink.dropdowns){
            return (
              <NavLink
                link={navLink.link}
                title={navLink.title}
                active={index == active}
              />
            );
          }
          else{
            return (
              <NavLinkDropdown 
                title={navLink.title}
                dropdowns={navLink.dropdowns}
              />
            )
          }
        })}
        <DropdownIcon/>
      </div>
    );
  else{
    return(
      <Transition 
        show={sidebar}
        enter="transition-translate-x duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-translate-x duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        className='flex flex-col absolute h-screen w-5/12 bg-black opacity-90 top-20 left-0 px-3'
        >
        {navLinks.map((navLink: any, index) => {
          if(!navLink.dropdowns){
            return (
              <ButtonLink
                link={navLink.link}
                title={navLink.title}

              />
            );
          }
          else{
            return (
              <ButtonLink
                link={navLink.link}
                title={navLink.title}

              />
            )
          }
        })}
      </Transition>
    )
  }
};
