import { CardGroup } from "../components/Home/CardGroup";

export default function Home() {
  return (
    <>
      <main className="w-full p-14 flex">
        <article
          className="w-9/12 p-2"
          itemType="https://schema.org/documentation"
        >
          <div className="title pb-8">
            <h1 className="text-h1 font-semibold">Documentation</h1>
            <h1 className="text-h2">
              Docs and guides to work with the Unity ecosystem.
            </h1>
          </div>
          <div>
            <CardGroup
              title="Unity Editor & Scripting"
              description="Learn how to use and get the most from the Unity Editor."
              started={{
                description:
                  'Learn the basics. Explore topics like understanding the Unity Editor interface, adding menu items, using assets, creating scenes, and publishing builds.',
                link: 'https://docs.unity3d.com/Manual/UnityOverview.html',
                linkText: 'Learn More',
              }}
            />
          </div>
        </article>
        <div className="w-3/12"></div>
      </main>
    </>
  );
}
