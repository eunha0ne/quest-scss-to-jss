import React from 'react';
import injectSheet from 'react-jss';
import style from './StairsLoaderStyle.js';

const Bar = () => {
  const MAX_UNIT = 5;
  const list = Array.from({ length: MAX_UNIT + 1 }, (v, i) => i);

  return list.map((node, idx) => {
    const id = `loaderBar${idx}`;
    const Item = ({ classes }) => <div className={classes.loader__bar}></div>;
    const StyledItem = injectSheet(style)(Item);

    return <StyledItem key={id} idx={idx} />
  });
};

const StairsLoader = ({ classes }) => (
  <div className={classes.loader}>
    <Bar />
    <div className={classes.loader__ball}></div>
  </div>
);

export default injectSheet(style)(StairsLoader);
