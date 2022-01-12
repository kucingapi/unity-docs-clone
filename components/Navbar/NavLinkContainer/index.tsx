import { NavLink } from './NavLink';
import { NavLinkDropdown } from './NavLinkDropdown';

interface NavlinkContainerProps {
  navLinks: Array<Object>;
  horizontal: boolean;
  active: number;
}

export const NavLinkContainer = ({
  navLinks,
  horizontal,
  active,
}: NavlinkContainerProps) => {
  if(horizontal)
    return (
      <div className="flex gap-4">
        {navLinks.map((navLink: any, index) => {
          if(!navLink.dropdown)
            return (
              <NavLink
                link={navLink.link}
                title={navLink.title}
                active={index == active}
              />
            );
          else{
            return (
              <NavLinkDropdown 
                title={navLink.title}
                dropdown={navLink.dropdown}
              />
            )
          }
        })}
      </div>
    );
  else{
    return(
      <div>

      </div>
    )
  }
};
