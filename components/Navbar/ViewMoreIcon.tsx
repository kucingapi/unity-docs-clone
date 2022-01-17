import { useContext } from "react";
import { SidebarContext } from "../../contexts/navbarContext/sidebarContext";
import { sidebarState } from "../../functions/sidebarReducer/sidebarReducer";

interface LineProps {
  className?: String;
}

const Line = ({ className }: LineProps) => (
  <div
    className={
      'w-6 relative rounded-lg bg-white h-[3px] transition-all delay-100 ' +
      className
    }
  ></div>
);
export const ViewMoreIcon = () => {
  const {action, slide} = useContext(SidebarContext);
  const {NONACTIVE} = sidebarState;
  return (
    <div
      onClick={() => {
        if(slide != NONACTIVE)
          action({type:'exit'})
        else 
          action({type:'main'})
      }}
      className={
        'flex flex-col gap-1 w-6 transition-all delay-300 lg:hidden ' +
        (slide != NONACTIVE && 'hover:rotate-180 ease-in-out')
      }
    >
      <Line className={''+(slide != NONACTIVE && 'rotate-45 translate-y-full')} />
      <Line className={''+(slide != NONACTIVE && 'hidden')} />
      <Line className={''+(slide != NONACTIVE && '-rotate-45 -translate-y-full')} />
    </div>
  );
};
