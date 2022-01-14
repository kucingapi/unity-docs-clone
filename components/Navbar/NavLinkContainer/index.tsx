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
    const defaultSidebar = 0;
    return(
      <>
          <SidebarSlide
            number={sidebar}
            id={defaultSidebar}
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
                  <ButtonLinkDropdown
                    link={navLink.link}
                    title={navLink.title}
                    id={index + 1}
                    sidebarHandler={sidebarHandler} 
                  />
                )
              }
            })}
          </SidebarSlide>
        <Transition
          show={sidebar == defaultSidebar }
          className='flex flex-col absolute gap-3 h-screen w-7/12 bg-black opacity-40 top-20 right-0 p-1 px-3'
        />

      </>
    )
  }
};
