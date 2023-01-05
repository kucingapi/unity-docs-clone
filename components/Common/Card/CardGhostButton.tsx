import { FC } from 'react';
import { Card } from '.';
import { CardContext } from '../../../contexts/Card';
import { ButtonDefault } from '../ButtonDefault';
import { ExploreTopics } from './ExploreTopics';
import { ButtonGhost } from '../ButtonGhost';

interface CardProps {
  title: string;
  description: string;
  className: string;
  ghostButton: string[];
}

export const CardGhostButton: FC<CardProps> = ({
  title,
  description,
  className,
  ghostButton,
}) => {
  return (
    <CardContext.Provider
      value={{ title, description, className, ghostButton }}
    >
      <Card>
        <div className='mt-4'>
          {ghostButton.map((value) => (
            <ButtonGhost>{value}</ButtonGhost>
          ))}
        </div>
      </Card>
    </CardContext.Provider>
  );
};
