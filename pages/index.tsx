import { useState } from 'react';
import { MainTitle } from '../components/Home/MainTitle';
import { PremiumSection } from '../components/Home/PremiumSection';
import { RealtimeSection } from '../components/Home/RealtimeSection';
import { ScriptingSection } from '../components/Home/ScriptingSection';
import { ServiceSection } from '../components/Home/ServiceSection';
import { SideBar } from '../components/Home/SideBar';
import { InView } from 'react-intersection-observer';

export default function Home() {
  const [activeComponent, setActiveComponent] = useState(0);
  const intersectionHandler = (inView: boolean, id: number) => {
    if (inView) {
      setActiveComponent(id);
    }
  };
  return (
    <>
      <main className="w-full p-14 flex-col-reverse flex lg:flex-row">
        <article
          className="lg:w-9/12 p-2"
          itemType="https://schema.org/documentation"
        >
          <MainTitle />
          <InView
            as="div"
            onChange={(inView) => intersectionHandler(inView, 0)}
          >
            <ScriptingSection />
          </InView>
          <InView
            as="div"
            onChange={(inView) => intersectionHandler(inView, 1)}
          >
            <RealtimeSection />
          </InView>
          <InView
            as="div"
            onChange={(inView) => intersectionHandler(inView, 2)}
          >
            <ServiceSection />
          </InView>
          <InView
            as="div"
            onChange={(inView) => intersectionHandler(inView, 3)}
          >
            <PremiumSection />
          </InView>
        </article>
        <div className="lg:w-3/12 p-2 -z-10 relative">
          <SideBar activeList={activeComponent}  />
        </div>
      </main>
    </>
  );
}
