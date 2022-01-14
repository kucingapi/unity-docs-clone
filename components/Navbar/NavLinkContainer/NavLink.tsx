import Link from "next/link";

interface NavlinkProps {
  title: string;
  link: string;
  className?: string;
  active?: boolean;
}


export const NavLink = ({ link, title, active, className}: NavlinkProps) => {
  return (
    <Link href={link}>
      <a
        className={
          (active && 'navlink-active') +
          ' hover:text-secondary hover:underline transition-all duration-200 ease-out px-2 whitespace-nowrap py-1 ' +
          (!!className && className)
        }
      >
        {title}
      </a>
    </Link>
  );
};