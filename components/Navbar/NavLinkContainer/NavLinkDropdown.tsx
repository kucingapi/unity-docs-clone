import Link from 'next/link';
import { NavLink } from './NavLink';

interface dropdown {
  title: string;
  link: string;
}
interface NavlinkDropdownProps {
  title: string;
  dropdown: Array<dropdown>;
}

export const NavLinkDropdown = ({ dropdown, title }: NavlinkDropdownProps) => {
  return (
    <div>
      <div className="group inline-block relative">
        <button className=" hover:text-blue-500 hover:underline transition-all duration-200 ease-out w-11/12 px-2 whitespace-nowrap">
          <span className="mr-1">{title}</span>
        </button>
        <ul className="absolute translate-y-2 -translate-x-1/3 hidden group-hover:block border-gray-600 border shadow-xl">
          <li className="">
            <NavLink
              className="text-left bg-black w-full py-2 px-4 pr-10 block whitespace-no-wrap"
              title="something"
              link="something"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
