import { useReducer } from 'react';

interface action {
  type: string;
  value?: number;
}

const sidebarState = {
  NONACTIVE:-1,
  MAINSLIDE:0
}

const initialState = {slide: sidebarState.NONACTIVE};

function sidebarReducer(state: any, action: action) {
  switch (action.type) {
    case 'exit':
      return { slide: sidebarState.NONACTIVE };
    case 'main':
      return { slide: sidebarState.MAINSLIDE };
    case 'change':
      return { count: action.value };
    default:
      throw new Error();
  }
}

export { initialState, sidebarState, sidebarReducer };