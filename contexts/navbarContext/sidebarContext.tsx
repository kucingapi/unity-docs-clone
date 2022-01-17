import { createContext, ReactNode, useReducer } from 'react';
import { initialState, sidebarReducer, sidebarState } from '../../functions/sidebarReducer/sidebarReducer';

interface SidebarProvideProps {
  children: ReactNode;
}

const sidebar:any = {
  slide: sidebarState.NONACTIVE,
  sidebarAction: () => {}
}

const SidebarContext = createContext(sidebar)

const SidebarProvider = ({children}: SidebarProvideProps) => {
  const [state, dispatch] = useReducer(sidebarReducer, initialState);
  return (
    <SidebarContext.Provider value={{slide: state.slide, action: dispatch }}>
      {children}
    </SidebarContext.Provider>
  )
}

export { SidebarProvider, SidebarContext };