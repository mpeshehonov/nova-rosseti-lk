import React from 'react';
import { Link } from 'react-router-dom';

import {
  FlagIcon,
  HomeIcon,
  CogIcon,
  MapIcon,
  PuzzleIcon,
} from '@heroicons/react/outline';

import DropdownMenu, { MenuOptions } from '@shared/components/DropdownMenu';
import Logo from '@shared/components/Logo';

const Header = () => {
  const menuOptions: MenuOptions[] = [
    {
      title: 'Профиль',
      action: () => {},
    },
    {
      title: 'Достижения',
      action: () => {},
    },
  ];

  const userPhotoUrl = 'https://avatars.dicebear.com/api/initials/RS.svg';

  return (
    <div className="items-center w-full mb-2 shadow-lg navbar bg-light-400 text-dark-content">
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <Link to="/">
          <Logo className="h-12 object-contain" />
        </Link>
      </div>
      <div className="flex-1 px-2 mx-2 justify-around">
        <div className="items-stretch hidden lg:flex">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
            <HomeIcon className="w-5 h-5 mr-2" />
            На главную
          </Link>

          <a
            href="http://46.253.143.61:3000/?orgId=1"
            className="btn btn-ghost btn-sm rounded-btn"
          >
            <CogIcon className="w-5 h-5 mr-2" />
            Админ-панель
          </a>

          <Link
            id="train"
            to="/train"
            className="btn btn-ghost btn-sm rounded-btn"
          >
            <PuzzleIcon className="w-5 h-5 mr-2" />
            Тренажер
          </Link>

          <Link id="map" to="/map" className="btn btn-ghost btn-sm rounded-btn">
            <MapIcon className="w-5 h-5 mr-2" />
            Маршрут
          </Link>

          <button id="exam" className="btn btn-ghost btn-sm rounded-btn">
            <FlagIcon className="w-5 h-5 mr-2" />
            Экзамен
          </button>
        </div>
      </div>

      <div className="flex-none mx-2">
        <DropdownMenu
          options={menuOptions}
          title={
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
                <img src={userPhotoUrl} alt="Россети" />
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Header;
