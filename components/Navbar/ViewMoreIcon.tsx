
interface ViewMoreIconProps{
	active: Boolean
	onChange: any
}
interface LineProps{
	className?: String
}

const Line = ({className} : LineProps) => (
	<div className={"w-6 relative rounded-lg bg-white h-[3px] transition-all delay-100 "  + className}></div>
)
export const ViewMoreIcon = ({active, onChange}: ViewMoreIconProps) => (
	<div onClick={onChange} className={("flex flex-col gap-1 w-6 mr-5 transition-all delay-300 ") + (active && "hover:rotate-180 ease-in-out" )}>
		<Line 
			className={active && "rotate-45 translate-y-full"}
		/>	
		<Line 
			className={active && "hidden"}
		/>	
		<Line 
			className={active && "-rotate-45 -translate-y-full"}
		/>	
	</div>
)