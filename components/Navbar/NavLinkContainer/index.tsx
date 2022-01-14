import { Transition } from '@headlessui/react';
import { ButtonLink } from './ButtonLink';
import DropdownIcon from './DropdownIcon';
import { NavLink } from './NavLink';
import { NavLinkDropdown } from './NavLinkDropdown';
import { SidebarSlide } from './SidebarSlide';
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
      <>
          <SidebarSlide
            active={sidebar}
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
          </SidebarSlide>
        <Transition
          show={sidebar}
          className='flex flex-col absolute gap-3 h-screen w-7/12 bg-black opacity-40 top-20 right-0 p-1 px-3'
        />

      </>
    )
  }
};
