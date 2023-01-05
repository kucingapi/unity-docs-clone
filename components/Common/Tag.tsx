import { FC } from 'react';

export const Tag: FC = ({ children }) => {
  return (
    <div className="rounded-sm cursor-pointer bg-blue-100 hover:bg-blue-300 underline text-sm w-fit">
      {children}
    </div>
  );
};
