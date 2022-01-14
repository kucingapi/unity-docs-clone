interface ButtonLinkProps{
  title: string;
  link: string;
  className?: string;
}

export const ButtonLink = ({title, link, className}: ButtonLinkProps) => (
	<div className={"w-full text-sm text-white p-3 " + className}>
		<a href={link}>{title}</a>
	</div>
)