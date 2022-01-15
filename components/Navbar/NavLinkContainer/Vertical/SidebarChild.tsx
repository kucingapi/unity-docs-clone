import { SidebarSlide } from "./SidebarSlide";

interface dropdown {
  title: string;
  link: string;
}

interface SidebarChildProps{
	id: number;
	title: string;
	link: string;
  sidebar?: number
}

export const SidebarChild = ({id, title, link, sidebar}: SidebarChildProps) => (
  <SidebarSlide
    number={sidebar}
    id={id}
  >
  <h1>Test</h1>

  </SidebarSlide>

)