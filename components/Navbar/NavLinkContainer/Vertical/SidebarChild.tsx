import ArrowBack from "../../../../public/arrow_back.svg"
import { ButtonLink } from "./ButtonLink";
import { Transition } from "@headlessui/react";

interface dropdown {
  title: string;
  link: string;
}

interface SidebarChildProps{
	id: number;
	title: string;
	link: string;
	sidebarHandler?:any;
  sidebar?: number;
  dropdowns: dropdown[];
}

export const SidebarChild = ({id, title, sidebar, dropdowns, sidebarHandler}: SidebarChildProps) => (
	<Transition
		show={sidebar == id}
		enter="transition-translate-x duration-300"
		enterFrom="-translate-x-full"
		enterTo="translate-x-0"
		leave="transition-translate-x duration-300"
		leaveFrom="translate-x-0"
		leaveTo="-translate-x-full"
		className='flex flex-col absolute gap-3 h-screen w-full bg-black left-0 top-0 px-8'
	>
    <div className="py-10 cursor-pointer flex items-middle">
      <div className="text-xl font-semibold flex items-center gap-2" onClick={()=>{sidebarHandler(0)}}>
        <ArrowBack />
        <div>{title}</div>
      </div>
    </div>
    <div>
      {dropdowns.map(({title, link}, index)=>(
        <ButtonLink 
          title={title}
          link={link}
          key={index}
        />
      ))}
    </div>
	</Transition>
)