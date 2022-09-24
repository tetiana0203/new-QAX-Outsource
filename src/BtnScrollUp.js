import React from 'react';
import "./BtnScrollUp.css";

function BtnScrollUp() {
  
  const handlerScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    }
  }
  
  return (
    <div className={'btn-scroll-up'} onClick={handlerScrollUp}>&#9650;</div>
  );
}

export default BtnScrollUp;