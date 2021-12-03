import React from 'react';
import Iframe from 'react-iframe';

const Map = () => {
  return (
    <div className="mx-6 md:mx-0">
      <div className="flex justify-center md:justify-start text-3xl">
        <h1>Построение маршрута и трекинг</h1>
      </div>

      <div className="mt-4">
        <Iframe
          className="border-none"
          url="https://geoapifront.herokuapp.com/"
          width="100%"
          height="600px"
          display="block"
          position="relative"
        />
      </div>
    </div>
  );
};

export default Map;
