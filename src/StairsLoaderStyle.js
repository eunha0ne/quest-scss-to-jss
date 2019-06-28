
/*
    @for $i from 1 through 5 {
       &:nth-child(#{$i}) {
         left: ($i - 1) * 15px;
         transform: scale(1,$i*.2);
         animation: barUp#{$i} 4s infinite;
        }
    }
*/


const style = {
  loader: {
    position: 'relative',
    width: '75px',
    height: '100px',
    display: 'inline-block',
  },
  loader__bar: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '10px',
    height: '50%',
    background: 'yellowgreen',
    transformOrigin: ['center', 'bottom'],
    boxShadow: '1px 1px 0 rgba(0,0,0,.2)',
  },
  loader__ball: {
    position: 'absolute',
    bottom: '10px',
    left: 0,
    width: '10px',
    height: '10px',
    background: 'yellowgreen',
    borderRadius: '50%',
    animation: 'ball 4s infinite',
  },
  '@keyframes ball': {
    '0%':   { transform: 'translate(0, 0)' },
    '5%':   { transform: 'translate(8px, -14px)' },
    '10%':  { transform: 'translate(15px, -10px)' },
    '17%':  { transform: 'translate(23px, -24px)' },
    '20%':  { transform: 'translate(30px, -20px)' },
    '27%':  { transform: 'translate(38px, -34px)' },
    '30%':  { transform: 'translate(45px, -30px)' },
    '37%':  { transform: 'translate(53px, -44px)' },
    '40%':  { transform: 'translate(60px, -40px)' },
    '50%':  { transform: 'translate(60px, 0)' },
    '57%':  { transform: 'translate(53px, -14px)' },
    '60%':  { transform: 'translate(45px, -10px)' },
    '67%':  { transform: 'translate(37px, -24px)' },
    '70%':  { transform: 'translate(30px, -20px)' },
    '77%':  { transform: 'translate(22px, -34px)' },
    '80%':  { transform: 'translate(15px, -30px)' },
    '87%':  { transform: 'translate(7px, -44px)' },
    '90%':  { transform: 'translate(0, -40px)' },
    '100%': { transform: 'translate(0, 0)' }
  }
};

export default style;
