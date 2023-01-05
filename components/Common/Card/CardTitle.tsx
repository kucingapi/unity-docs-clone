import React, { FC, useContext } from 'react';
import Code from '../../../public/code.svg';
import { CardContext } from '../../../contexts/Card';

export const CardTitle: FC = () => {
  const cardData = useContext(CardContext);
  const { title, description } = cardData;
  return (
    <article>
      <div className="flex gap-2 items-center">
        <Code />
        <p className="text-h3 font-semibold">{title}</p>
      </div>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </article>
  );
};
