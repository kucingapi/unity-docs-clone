import React, { FC } from 'react';
import { CardButtonTopics } from '../../Common/Card/CardButtonTopics';
import { CardGhostButton } from '../../Common/Card/CardGhostButton';

export const CardSection: FC = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-8 lg:gap-1 mt-8">
      <DummyCard />
      <DummyCard />
      <DummyCard />
    </div>
  );
};
const DummyCard = () => (
  <CardGhostButton
    title="Architecture & Construction"
    description="Create immersive, interactive experiences, streamline your workflows, and lower costs."
    className="lg:w-1/2"
    ghostButton={['Unity Reflect', 'Visual Live']}
  />
);
