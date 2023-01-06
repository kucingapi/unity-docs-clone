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
    title="Dev Ops"
    description="Customize your project with our build and development tools."
    className="lg:w-1/2"
    ghostButton={['Cloud Builds', 'Cloud Diagnostic', 'Plastic SCM']}
  />
);
