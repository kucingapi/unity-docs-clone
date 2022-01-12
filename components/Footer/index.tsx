
export const Footer = () => {
	return (
    <div className=" xs:flex-col lg:flex-row gap-5 px-5 items-start flex text-sm justify-between min-w-full pt-9 pb-16 bg-black text-white sticky top-0">
      <a href="./" className="lg:w-3/12 flex items-center text-l gap-2 text-gray-300 font-semibold">
        <img className="xs:w-4/12 lg:w-3/12" src="/unity_logo.svg" alt="" />
        <h1 className="text-base">Documentation</h1>
      </a>
      <div className="lg:w-9/12">
        <div>Copyright © 2021 Unity Technologies</div>
        <div className="flex gap-3 text-gray-600">
          <a href="/">Legal</a>
          <a href="/">Privacy</a>
          <a href="/">Terms of Use</a>
        </div>
        <div>"Unity", Unity logos, and other Unity trademarks are trademarks or registered trademarks of Unity Technologies or its affiliates in the U.S. and elsewhere (<a href="/" className="inline text-gray-600">more info here</a>). Other names or brands are trademarks of their respective owners.</div>
      </div>
    </div>
	)
}