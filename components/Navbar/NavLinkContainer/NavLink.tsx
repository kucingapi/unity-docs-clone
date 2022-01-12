import Link from "next/link";

interface NavlinkProps {
  title: string;
  link: string;
  active: boolean;
}


export const NavLink = ({ link, title, active }: NavlinkProps) => {
  return (
    <Link href={link}>
      <a
        className={
          (active && 'navlink-active') +
          ' hover:text-blue-500 hover:underline transition-all duration-200 ease-out w-11/12 px-2 whitespace-nowrap'
        }
      >
        {title}
      </a>
    </Link>
  );
};