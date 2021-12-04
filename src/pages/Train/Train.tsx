import React from 'react';
import Iframe from 'react-iframe';

const Train = () => {
  return (
    <div className="mx-6 md:mx-0">
      <div className="flex justify-center md:justify-start text-3xl">
        <h1>Тренажер</h1>
      </div>

      <div className="mt-4">
        <Iframe
          className="border-none"
          url="https://digital.protsenko.dev/train/index.html"
          width="100%"
          height="900px"
          display="block"
          position="relative"
        />
      </div>
    </div>
  );
};

export default Train;
