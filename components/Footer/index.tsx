
export const Footer = () => {
	return (
    <div className="md:justify-start xs:flex-col sm:flex-col lg:flex-row gap-16 px-11 items-start flex text-sm justify-between min-w-full pt-9 pb-40 bg-black text-white ">
      <a href="./" className="flex items-center text-l gap-2 text-gray-300 font-semibold">
        <img className="h-[30px]" src="/unity_logo.svg" alt="" />
        <h1 className="text-base">Documentation</h1>
      </a>
      <div className="lg:w-9/12">
        <div>Copyright © 2021 Unity Technologies</div>
        <div className="flex gap-3 text-gray-400">
          <a href="/">Legal</a>
          <a href="/">Privacy</a>
          <a href="/">Terms of Use</a>
          <a href="/">Cookies</a>
          <a href="/">Do Not Sell My Personal Information</a>
          <a href="/">Cookies Settings</a>
        </div>
        <div className="mt-4">"Unity", Unity logos, and other Unity trademarks are trademarks or registered trademarks of Unity Technologies or its affiliates in the U.S. and elsewhere (<a href="/" className="inline text-gray-400">more info here</a>). Other names or brands are trademarks of their respective owners.</div>
      </div>
    </div>
	)
}