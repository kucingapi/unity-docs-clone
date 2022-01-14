import Chevron from '../../../../public/chevron.svg'
interface ButtonLinkDropdownProps{
	title: string;
	link: string;
	className?: string;
	id: number;
	sidebarHandler?:any;
}
  
export const ButtonLinkDropdown = ({ title, link, className, id, sidebarHandler }: ButtonLinkDropdownProps) => {
  return (
    <>
      <div onClick={() => {sidebarHandler(id)}} className={'cursor-pointer w-full flex justify-between items-center text-sm text-white p-3 ' + className}>
        <a href={link}>{title}</a>
        <Chevron />
      </div>
      
    </>
  );
};