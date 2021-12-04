import React from 'react';
import { useBoolean } from 'ahooks';
// @ts-ignore
import Tour from 'reactour';

const steps = [
  {
    selector: '#train',
    content: 'Здесь вы будете оттачивать свои навыки управления БПЛА',
  },
  {
    selector: '#map',
    content:
      'Здесь сможете изучить траекторию полёта, маршрут и другие показатели',
  },
  {
    selector: '#exam',
    content: 'Здесь вы сможете сдать экзамен, как будете готовы',
  },
  {
    selector: '#train',
    content: 'Давайте начнём!',
  },
];

const Home = () => {
  const [isTourOpen, { setTrue: openTour, setFalse: closeTour }] =
    useBoolean(false);

  return (
    <div className="mx-6 md:mx-0">
      <Tour
        className="text-black"
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={() => closeTour()}
        disableKeyboardNavigation={['esc']}
        rounded={5}
      />
      <div className="flex flex-col h-80 justify-center items-center">
        <div className="flex justify-center text-5xl">
          <h1>Добро пожаловать!</h1>
        </div>

        <div className="flex justify-center mt-14">
          <button className="btn" onClick={() => openTour()}>
            Начать знакомоство с платформой
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
