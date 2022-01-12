import DropdownIcon from './DropdownIcon';
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
      <div className="flex gap-4 xs:hidden sm:hidden lg:flex">
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
      <div className='absolute h-screen bg-black'>

      </div>
    )
  }
};
