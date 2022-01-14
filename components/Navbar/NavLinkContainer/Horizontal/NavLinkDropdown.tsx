import Link from 'next/link';
import { NavLink } from './NavLink';

interface dropdown {
  title: string;
  link: string;
}
interface NavlinkDropdownProps {
  title: string;
  className?: string;
  dropdowns: dropdown[];
}

export const NavLinkDropdown = ({ dropdowns, title, className }: NavlinkDropdownProps) => {
  return (
    <div>
      <div className="group inline-block relative">
        <button className=" hover:text-secondary hover:underline transition-all duration-200 ease-out px-2 py-1 whitespace-nowrap">
          <span className="mr-1">{title}</span>
        </button>
        <ul className="absolute w-60 -translate-x-1/3 hidden group-hover:block border-gray-600 border shadow-xl">
          <li className="">
            {dropdowns.map(({ title, link }, index) => {
              return(
                <NavLink
                  className="text-left bg-black w-full pt-3 pb-3 px-4 pr-10 block whitespace-no-wrap text-sm"
                  title={title}
                  link={link}
                />
              )
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};
