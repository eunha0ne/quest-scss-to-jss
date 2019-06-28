import React from 'react';
import injectSheet from 'react-jss';
import { createUseStyles } from 'react-jss'
import style from './StairsLoaderStyle.js';

const Bar = () => {
  const MAX_UNIT = 5;
  const list = Array.from({ length: MAX_UNIT }, (v, i) => i);

  return list.map((node, idx) => {
    const id = `loaderBar${idx}`;

    return (
      <div key={id} className=""></div>
    );
  });
};



const StairsLoader = ({ classes, children }) => {
  return (
    <div className={classes.loader}>
      <Bar />
      <div className={classes.loader__ball}></div>
    </div>
  )
};

export default injectSheet(style)(StairsLoader);
