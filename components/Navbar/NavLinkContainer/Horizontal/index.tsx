import { Transition } from '@headlessui/react';
import { ButtonLink } from '../Vertical/ButtonLink';
import { ButtonLinkDropdown } from '../Vertical/ButtonLinkDropdown';
import DropdownIcon from './DropdownIcon';
import { NavLink } from './NavLink';
import { NavLinkDropdown } from './NavLinkDropdown';
interface NavlinkContainerProps {
  navLinks: Array<Object>;
  active: number;
}

export const NavLinkContainerHorizontal = ({
  navLinks,
  active,
}: NavlinkContainerProps) => {
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
};
