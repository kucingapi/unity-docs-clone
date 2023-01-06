import { FC } from 'react';

interface SidebarProps {
  activeList: number;
}

export const SideBar: FC<SidebarProps> = ({ activeList }) => {
  const sidebarListData = [
    'Unity Editor & Scripting',
    'Real-time 3D Creation Tools',
    'Unity Gaming Services',
    'Premium Runtimes',
  ];
  console.log(activeList);

  return (
    <div className='sticky top-28 hidden lg:block'>
      <p className="text-xs text-gray-500">CONTENT</p>
      <ul className="flex flex-col gap-2 pl-4 pt-3 text-sm font-medium text-gray-400">
        {sidebarListData.map((value, index) => (
          <SideBarList active={activeList === index}>{value}</SideBarList>
        ))}
      </ul>
    </div>
  );
};

interface SidebarList {
  active: boolean;
}

const SideBarList: FC<SidebarList> = ({ children, active }) => (
  <li
    className={`hover:text-gray-900 cursor-pointer ${
      active && 'text-gray-900'
    }`}
  >
    {children}
  </li>
);
