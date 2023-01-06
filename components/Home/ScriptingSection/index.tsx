import { FC } from 'react';
import { CardGroup } from '../CardGroup';
import { CardSection } from './CardSection';

export const ScriptingSection: FC = () => {
  return (
    <>
      <CardGroup
        title="Unity Editor & Scripting"
        description="Learn how to use and get the most from the Unity Editor."
        started={{
          description:
            'Learn the basics. Explore topics like understanding the Unity Editor interface, adding menu items, using assets, creating scenes, and publishing builds.',
          link: 'https://docs.unity3d.com/Manual/UnityOverview.html',
          linkText: 'Learn More',
        }}
      >
        <CardSection />
      </CardGroup>
    </>
  );
};
