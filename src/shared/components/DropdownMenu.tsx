import React, { ReactNode } from 'react';

export interface MenuOptions {
  title: string;
  action: () => void;
}

interface Props {
  title: ReactNode;
  options: MenuOptions[];
}

const DropdownMenu = ({ title, options }: Props) => {
  return (
    <>
      <div className="text-base-content dropdown dropdown-end">
        <div tabIndex={0} className="flex cursor-pointer">
          {title}
        </div>
        <ul
          tabIndex={0}
          className="p-2 shadow w-36 menu dropdown-content compact bg-base-100 rounded-box"
        >
          {options.map((option) => (
            <li key={option.title} onClick={() => option.action()}>
              <a>{option.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DropdownMenu;
