import React from 'react';

const  BtnScrollUp = () =>{
  
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
    <div className={'btn-scroll-up'} onClick={handlerScrollUp}></div>
  );
}

export default BtnScrollUp;