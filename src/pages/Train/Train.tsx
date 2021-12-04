import React, { useRef } from 'react';
import IframeResizer from 'iframe-resizer-react';

const Train = () => {
  const iframeRef = useRef(null);
  return (
    <div className="mx-6 md:mx-0">
      <div className="flex justify-center md:justify-start text-3xl">
        <h1>Тренажер</h1>
      </div>

      <div className="mt-4">
        <IframeResizer
          forwardRef={iframeRef}
          heightCalculationMethod="lowestElement"
          className="border-none"
          src="https://digital.protsenko.dev/train/index.html"
          style={{ width: '100%', height: '90vh' }}
        />
      </div>
    </div>
  );
};

export default Train;
