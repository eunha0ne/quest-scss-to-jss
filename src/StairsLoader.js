import React from 'react';
import './StairsLoader.scss';

const Bar = () => {
  return (
    < >
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
    </>
  );
};

const StairsLoader = () => {
  return (
    <div className="loader">
      <Bar />
      <div className="loader__ball"></div>
    </div>
  )
};

export default StairsLoader;
