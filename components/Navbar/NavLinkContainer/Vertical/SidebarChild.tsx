import { SidebarSlide } from "./SidebarSlide";
import ArrowBack from "../../../../public/arrow_back.svg"

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
    <div className="py-10 cursor-pointer flex items-middle">
      <div className="text-xl font-semibold flex items-center gap-2">
        <ArrowBack />
        <div>{title}</div>
      </div>
    </div>
  </SidebarSlide>

)