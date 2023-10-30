import React from 'react'

import "./NonDisclosure.scss"

import people from "./people.png"
import hands from "./hands.png" 


const NonDisclosure = () => {
  return (
    <div className="non-disclosure">
  <div className="non-disclosure__info container">
    <div className="non-disclosure__block1">
      <div className="non-disclosure__header">
        <h3 className="non-disclosure__title">Non-Disclosure</h3>
        <p className="non-disclosure__text">
          Confidence is one of the most important principles of our company. We can guarantee full confidence and security for any information that will be provided to us from our clients.
        </p>
      </div>
      <img className="non-disclosure__image" src={people} alt="people" />
    </div>
    
    <div className="non-disclosure__block2">
      <img className="non-disclosure__image" src={hands} alt="people" />
      <div className="non-disclosure__header">
        <h3 className="non-disclosure__title">Outsource</h3>
        <p className="non-disclosure__text">
          Our company is located in Kyiv, Ukraine. For many years we provide a lot of QA/QC services to different clients as outsource. We have impressive experience in work with countries such as Canada, USA, Great Britain, Sweden, Poland, Malta, India, and others… We can set and apply effective communication process with our client regardless of time difference.
        </p>
      </div>
    </div>
  </div>
</div>
  );
};

export default NonDisclosure;
