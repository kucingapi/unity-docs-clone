import { SidebarSlide } from "./SidebarSlide";
import ArrowBack from "../../../../public/arrow_back.svg"
import { ButtonLink } from "./ButtonLink";

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
  <SidebarSlide
    number={sidebar}
    id={id}
  >
    <div className="py-10 cursor-pointer flex items-middle">
      <div className="text-xl font-semibold flex items-center gap-2" onClick={()=>{sidebarHandler(0)}}>
        <ArrowBack />
        <div>{title}</div>
      </div>
    </div>
    <div>
      {dropdowns.map(({title, link})=>(
        <ButtonLink 
          title={title}
          link={link}
        />
      ))}
    </div>
  </SidebarSlide>

)