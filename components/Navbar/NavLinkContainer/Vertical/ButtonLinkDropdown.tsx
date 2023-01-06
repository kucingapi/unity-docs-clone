import { useContext } from 'react';
import { SidebarContext } from '../../../../contexts/navbarContext/sidebarContext';
import { sidebarState } from '../../../../functions/sidebarReducer/sidebarReducer';
import Chevron from '../../../../public/chevron.svg';
import { SidebarChild } from './SidebarChild';
interface dropdown {
  title: string;
  link: string;
}
interface ButtonLinkDropdownProps {
  title: string;
  link: string;
  className?: string;
  id: number;
  dropdowns: dropdown[];
}

export const ButtonLinkDropdown = ({
  title,
  link,
  className,
  id,
  dropdowns,
}: ButtonLinkDropdownProps) => {
  const { action, slide } = useContext(SidebarContext);
  const { NONACTIVE } = sidebarState;

  return (
    <>
      <div
        onClick={() => {
          action({type: 'change', value: id})
        }}
        className={
          'cursor-pointer w-full flex justify-between items-center text-sm text-white p-3 ' +
          className
        }
      >
        <a href={link}>{title}</a>
        <Chevron />
      </div>
      <SidebarChild
        title={title}
        dropdowns={dropdowns}
        id={id}
      />
    </>
  );
};
