import { FC } from 'react';
import { CardGroup } from '../CardGroup';
import { CardSection } from './CardSection';

export const PremiumSection: FC = () => {
  return (
    <>
      <CardGroup
        title="Premium Runtimes"
        description="Use Premium Runtimes to run Unity projects on Embedded Linux and QNX. Contact your account manager or the Unity sales team for access."
      >
        <CardSection />
      </CardGroup>
    </>
  );
};
