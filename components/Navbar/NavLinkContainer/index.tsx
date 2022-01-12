import { NavLink } from "./NavLink";

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
  return (
    <div className="flex gap-4">
      {navLinks.map((navLink: any, index) => (
        <>
          <NavLink
            link={navLink.link}
            title={navLink.title}
            active={index == active}
          />
        </>
      ))}
    </div>
  );
};