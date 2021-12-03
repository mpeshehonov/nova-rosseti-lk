import React, { ReactNode } from 'react';
import clsx from 'clsx';

type DropdownTrigger = 'click' | 'hover';

interface Props {
  title: ReactNode;
  children: ReactNode;
  trigger?: DropdownTrigger;
}

const Dropdown = ({ title, children, trigger = 'click' }: Props) => {
  return (
    <>
      <div
        className={clsx(
          'dropdown dropdown-end',
          trigger === 'hover' && 'dropdown-hover',
        )}
      >
        <div tabIndex={0} className="flex cursor-pointer">
          {title}
        </div>
        <div
          tabIndex={0}
          className="text-base-content p-2 shadow w-96 dropdown-content compact bg-base-100 rounded-box"
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
