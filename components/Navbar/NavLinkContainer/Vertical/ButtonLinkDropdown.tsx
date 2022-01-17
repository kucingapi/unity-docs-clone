import { log } from 'console';
import { useContext } from 'react';
import { SidebarContext } from '../../../../contexts/navbarContext/sidebarContext';
import Chevron from '../../../../public/chevron.svg'
import { SidebarChild } from './SidebarChild';
interface dropdown {
  title: string;
  link: string;
}
interface ButtonLinkDropdownProps{
	title: string;
	link: string;
	className?: string;
	id: number;
	sidebarHandler?:any;
  dropdowns: dropdown[]
  sidebar?: number;
}
  
export const ButtonLinkDropdown = ({ title, link, className, id, sidebarHandler, dropdowns, sidebar }: ButtonLinkDropdownProps) => {
  const context = useContext(SidebarContext);
  
  return (
    <>
      <div onClick={() => {
        sidebarHandler(id);
        }} className={'cursor-pointer w-full flex justify-between items-center text-sm text-white p-3 ' + className}>
        <a href={link}>{title}</a>
        <Chevron />
      </div>
      <SidebarChild
        title={title}
        link='test'
        dropdowns={dropdowns}
        sidebar={sidebar}
        id={id}
        sidebarHandler={sidebarHandler}
      />
      
    </>
  );
};