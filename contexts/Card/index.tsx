import { createContext } from 'react';

interface CardData {
  title: string;
  description: string;
  className: string;
  topics?: string[];
  ghostButton?: string[]
}

const cardData = {
  title: '',
  description: '',
  className: '',
  topics: [''],
  ghostButton: [''],
};

export const CardContext = createContext<CardData>(cardData);
