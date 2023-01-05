import React, { FC } from 'react';
import { CardButtonTopics } from '../../Common/Card/CardButtonTopics';

export const CardSection: FC = () => {
  return (
    <div className="flex flex-col gap-8 mt-11">
      <div className="flex lg:flex-row flex-col gap-8">
        <CardButtonTopics
          title="Unity Editor Manual"
          description="Use the Unity Editor to create 2D and 3D games, apps, and experiences."
          className=""
          topics={['']}
        />
        <CardButtonTopics
          title="Unity Editor Manual"
          description="Use the Unity Editor to create 2D and 3D games, apps, and experiences."
          className=""
          topics={['']}
        />
      </div>
      <CardButtonTopics
        title="Unity Editor Manual"
        description="Use the Unity Editor to create 2D and 3D games, apps, and experiences."
        className="lg:w-1/2"
        topics={['']}
      />
    </div>
  );
};
