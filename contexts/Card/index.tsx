import { createContext } from 'react';

const cardData = {
  title: '',
  description: '',
  className: '',
};

export const CardContext = createContext(cardData);
