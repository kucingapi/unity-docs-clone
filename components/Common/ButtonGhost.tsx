import { FC } from 'react';
import Home from '../../public/market.svg';

export const ButtonGhost: FC = ({ children }) => {
  return (
    <button className="group px-2 py-3 text-sm hover:bg-slate-100 flex rounded-md font-semibold items-center gap-3">
      <Home />
      <p className='group-hover:underline'>{children}</p>
      <p className="hidden group-hover:inline">→</p>
    </button>
  );
};
