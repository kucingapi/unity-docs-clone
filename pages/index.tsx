import { MainTitle } from '../components/Home/MainTitle';
import { RealtimeSection } from '../components/Home/RealtimeSection';
import { ScriptingSection } from '../components/Home/ScriptingSection';
import { SideBar } from '../components/Home/SideBar';

export default function Home() {
  return (
    <>
      <main className="w-full p-14 flex">
        <article
          className="w-9/12 p-2"
          itemType="https://schema.org/documentation"
        >
          <MainTitle />
          <ScriptingSection />
          <RealtimeSection />
        </article>
        <div className="w-3/12">
          <SideBar />
        </div>
      </main>
    </>
  );
}
