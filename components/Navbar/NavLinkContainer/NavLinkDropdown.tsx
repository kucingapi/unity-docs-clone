import Link from "next/link";

interface dropdown{
  title: string;
  link: string;
}
interface NavlinkDropdownProps {
  title: string;
  dropdown: Array<dropdown>;
}


export const NavLinkDropdown = ({ dropdown, title }: NavlinkDropdownProps) => {
  return (
	<a
		className={ 
		' hover:text-blue-500 hover:underline transition-all duration-200 ease-out w-11/12 px-2 whitespace-nowrap'
		}
	>
		{title}
	</a>
};