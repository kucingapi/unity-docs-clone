import { Transition } from "@headlessui/react";

interface SidebarSideProps {
  number?: number;
  children: any;
  id: number;
}

export const SidebarSlide = ({id,number,children}: SidebarSideProps) =>{ 
	return (
	<Transition
		show={number == id}
		enter="transition-translate-x duration-300"
		enterFrom="-translate-x-full"
		enterTo="translate-x-0"
		leave="transition-translate-x duration-300"
		leaveFrom="translate-x-0"
		leaveTo="-translate-x-full"
		className='flex flex-col absolute gap-3 h-screen w-full bg-black left-0 top-0'
	>
		{children}
	</Transition>
)
}