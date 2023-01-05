import React, { FC } from 'react';
import { Card } from '.';
import { CardContext } from '../../../contexts/Card';

interface CardProps {
  title: string;
  description: string;
  className: string;
  topics: [string];
}

export const CardButtonTopics: FC<CardProps> = ({
  title,
  description,
  className,
  topics,
}) => {
  return (
    <CardContext.Provider value={{ title, description, className }}>
      <Card></Card>
    </CardContext.Provider>
  );
};
