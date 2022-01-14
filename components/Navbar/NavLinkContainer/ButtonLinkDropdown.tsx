interface ButtonLinkDropdownProps{
	title: string;
	link: string;
	className?: string;
  }
  
export const ButtonLinkDropdown = ({title, link, className}: ButtonLinkDropdownProps) => (
	<div className={"w-full text-sm text-white p-3 " + className}>
		<a href={link}>{title}</a>
	</div>
)