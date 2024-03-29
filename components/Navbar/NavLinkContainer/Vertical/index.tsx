import { Transition } from '@headlessui/react';
import { useContext } from 'react';
import {
  SidebarContext,
  SidebarProvider,
} from '../../../../contexts/navbarContext/sidebarContext';
import { sidebarState } from '../../../../functions/sidebarReducer/sidebarReducer';
import { ButtonLink } from './ButtonLink';
import { ButtonLinkDropdown } from './ButtonLinkDropdown';

interface NavlinkContainerProps {
  navLinks: Array<Object>;
}

export const NavLinkContainerVertical = ({
  navLinks,
}: NavlinkContainerProps) => {
  const sidebarContext = useContext(SidebarContext);
  const {slide} = useContext(SidebarContext);
  const {NONACTIVE} = sidebarState;
  
  return (
    <>
      <Transition
        show={sidebarContext.slide !== sidebarState.NONACTIVE}
        enter="transition-translate-x duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-translate-x duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        className="flex z-10 flex-col absolute gap-3 h-screen w-96 bg-black opacity-90 top-20 left-0 p-1 px-3"
      >
        {navLinks.map((navLink: any, index) => {
          if (!navLink.dropdowns) {
            return (
              <ButtonLink
                link={navLink.link}
                title={navLink.title}
                key={index}
              />
            );
          } else {
            return (
              <ButtonLinkDropdown
                link={navLink.link}
                title={navLink.title}
                id={index + 1}
                dropdowns={navLink.dropdowns}
                key={index}
              />
            );
          }
        })}
      </Transition>
      <Transition
        show={slide != NONACTIVE}
        className="flex flex-col absolute gap-3 h-screen w-full z-0 bg-black opacity-40 top-20 right-0 p-1 px-3"
      />
    </>
  );
};
