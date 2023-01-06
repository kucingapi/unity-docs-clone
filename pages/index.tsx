import { MainTitle } from '../components/Home/MainTitle';
import { PremiumSection } from '../components/Home/PremiumSection';
import { RealtimeSection } from '../components/Home/RealtimeSection';
import { ScriptingSection } from '../components/Home/ScriptingSection';
import { ServiceSection } from '../components/Home/ServiceSection';
import { SideBar } from '../components/Home/SideBar';

export default function Home() {
  return (
    <>
      <main className="w-full p-14 flex-col-reverse flex lg:flex-row">
        <article
          className="lg:w-9/12 p-2"
          itemType="https://schema.org/documentation"
        >
          <MainTitle />
          <ScriptingSection />
          <RealtimeSection />
          <ServiceSection />
          <PremiumSection />
        </article>
        <div className="lg:w-3/12 p-2">
          <SideBar />
        </div>
      </main>
    </>
  );
}
