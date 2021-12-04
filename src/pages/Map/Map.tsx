import React, { useRef } from 'react';
import IframeResizer from 'iframe-resizer-react';

const Map = () => {
  const iframeRef = useRef(null);
  return (
    <div className="mx-6 md:mx-0">
      <div className="flex justify-center md:justify-start text-3xl">
        <h1>Построение маршрута и трекинг</h1>
      </div>

      <div className="mt-4">
        <IframeResizer
          forwardRef={iframeRef}
          heightCalculationMethod="lowestElement"
          className="border-none"
          src="https://geoapifront.herokuapp.com/"
          style={{ width: '100%', height: '75vh' }}
        />
      </div>
    </div>
  );
};

export default Map;
