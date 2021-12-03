import React from 'react';
import clsx from 'clsx';

import Header from '@shared/components/Layout/Header';

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />

      <div className={clsx('w-full max-w-7xl pb-24 m-auto mt-12', className)}>
        <div className="">{children}</div>
      </div>

      <footer className="mb-6">
        <div className="text-sm text-center text-gray-600">
          Версия 0.0.1 | NOVA | Россети | Все права защищены © 2021
        </div>
      </footer>
    </div>
  );
};

export default Layout;
