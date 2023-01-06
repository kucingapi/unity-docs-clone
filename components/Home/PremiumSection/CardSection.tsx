import { FC } from 'react';
import { CardButtonTopics } from '../../Common/Card/CardButtonTopics';

export const CardSection: FC = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-8 mt-11">
      <DummyCard />
      <DummyCard />
    </div>
  );
};
const DummyCard = () => (
  <CardButtonTopics
    title="Embedded Linux"
    description="Familiarize yourself with setting up the Unity Editor for Embedded Linux."
    className="lg:w-1/2"
    topics={['PlatformSpecific', 'Add package by name']}
  />
);
