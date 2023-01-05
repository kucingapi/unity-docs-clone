import { FC } from 'react';
import Star from '../../../public/star.svg';

interface CardGroupProps {
  title: string;
  description: string;
  started?: { description: string; link: string; linkText: string };
}

export const CardGroup: FC<CardGroupProps> = ({
  title,
  description,
  started,
  children,
}) => {
  return (
    <div className="mt-4 pt-4 border-t-2 border-gray-300">
      <div className="text-h2 font-semibold">{title}</div>
      <div className="text-h3">{description}</div>
      {started && (
        <div className="w-full p-7 bg-aqua-spring flex mt-5">
          <div>
            <Star />
          </div>
          <div className="flex xs:flex-col xs:items-start xs:justify-start">
            <div className="ml-5 xs:ml-0">
              <h3 className="text-lg font-semibold">Getting Started</h3>
              <p className="text-xs text-gray-600 mt-2 w-9/12">
                {started.description}
              </p>
            </div>
            <div className="m-auto xs:m-0">
              <div className="pr-9 xs:pr-0">
                <a
                  href={started.link}
                  className="text-sm text-secondary font-semibold whitespace-nowrap hover:bg-aqua-spring-600"
                >
                  {started.linkText} →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};
