import React, { FC, useContext } from 'react';
import { CardTitle } from './CardTitle';
import { CardContext } from '../../../contexts/Card';

export const Card: FC = ({ children }) => {
  const cardData = useContext(CardContext);
  const { className } = cardData;

  return (
    <div className={`w-full ${className}`}>
      <CardTitle />
      {children}
    </div>
  );
};
