import { createContext } from 'react';

const cardData = {
  title: '',
  description: '',
  className: '',
  topics: [''],
};

export const CardContext = createContext(cardData);
