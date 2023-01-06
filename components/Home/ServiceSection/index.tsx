import { FC } from 'react';
import { CardGroup } from '../CardGroup';
import { CardSection } from './CardSection';

export const ServiceSection: FC = () => {
  return (
    <>
      <CardGroup
        title="Unity Gaming Services"
        description="Scale your game development cycle with our integrated services."
        started={{
          description:
            'Connect your game to Unity Gaming Services and set up basic functionality.',
          link: 'https://docs.unity.com/ugs-overview/Content/unity-gaming-services-home.htm',
          linkText: 'Overview',
        }}
      >
        <CardSection />
      </CardGroup>
    </>
  );
};
