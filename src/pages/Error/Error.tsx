import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="m-auto mt-12 prose prose-xl text-center">
      <h1>Произошла ошибка</h1>

      <Link to="/">
        <button className="px-8 py-1 mt-12 text-white bg-green-500 rounded-lg shadow-lg">
          На главную
        </button>
      </Link>
    </div>
  );
};

export default Error;
