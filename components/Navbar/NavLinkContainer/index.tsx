import { Transition } from '@headlessui/react';
import { ButtonLink } from './Vertical/ButtonLink';
import { ButtonLinkDropdown } from './Vertical/ButtonLinkDropdown';
import DropdownIcon from './DropdownIcon';
import { NavLink } from './Horizontal/NavLink';
import { NavLinkDropdown } from './Horizontal/NavLinkDropdown';
import { SidebarSlide } from './Vertical/SidebarSlide';
interface NavlinkContainerProps {
  navLinks: Array<Object>;
  horizontal: boolean;
  active: number;
  sidebar?: number;
  sidebarHandler?: any;
}

export const NavLinkContainer = ({
  navLinks,
  horizontal,
  active,
  sidebar,
  sidebarHandler
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
                key={index}
              />
            );
          }
          else{
            return (
              <NavLinkDropdown 
                title={navLink.title}
                dropdowns={navLink.dropdowns}
                key={index}
              />
            )
          }
        })}
        <DropdownIcon/>
      </div>
    );
  else{
    const defaultSidebar = 0;
    return(
      <>
          <Transition
            show={sidebar != -1}
            enter="transition-translate-x duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-translate-x duration-300"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            className='flex z-10 flex-col absolute gap-3 h-screen w-96 bg-black opacity-90 top-20 left-0 p-1 px-3'
          >
            {navLinks.map((navLink: any, index) => {
              if(!navLink.dropdowns){
                return (
                  <ButtonLink
                    link={navLink.link}
                    title={navLink.title}
                    key={index}
                  />
                );
              }
              else{
                return (
                  <ButtonLinkDropdown
                    link={navLink.link}
                    title={navLink.title}
                    id={index + 1}
                    sidebarHandler={sidebarHandler} 
                    dropdowns={navLink.dropdowns}
                    sidebar={sidebar}
                    key={index}
                  />
                )
              }
            })}
          </Transition>
        <Transition
          show={sidebar != -1 }
          className='flex flex-col absolute gap-3 h-screen w-full z-0 bg-black opacity-40 top-20 right-0 p-1 px-3'
        />
      </>
    )
  }
};
