import { useContext } from 'react';
import { CardContext } from '../../../contexts/Card';
import { Tag } from '../Tag';

export const ExploreTopics = () => {
  const cardData = useContext(CardContext);
  const { topics } = cardData;

  return (
    <div className="mt-4">
      <p className="text-xs text-gray-500 font-medium">EXPLORE TOPICS</p>
      <div className="flex flex-wrap gap-x-3 gap-y-4 mt-3">
        {topics?.map((value) => (
          <Tag>{value}</Tag>
        ))}
      </div>
    </div>
  );
};
