import React from 'react'

import "./nonDisclosure.scss"

import people from "./people.png"
import hands from "./hands.png" 


const NonDisclosure = () => {
  return (
    <div className="non-disclosure">
      <div className="container non-disc-info">
        <div className="non-disc-block">
          <div >
            <h3>Non-Disclosure</h3>
            <p>
              Confidence is one of the most important principles of our company.
              We can guarantee full confidence and security for any information
              that will be provided to us from our clients.
            </p>
          </div>
            <img src={people} alt="people" />
        </div>
        
        <div className="non-disc-block">
            <img src={hands} alt="people" />
          <div>
            <h3>Outsource</h3>
            <p>
              Our company is located in Kyiv, Ukraine. For many years we provide
              a lot of QA/QC services to different clients as outsource. We have
              impressive experience in work with countries such as Canada, USA,
              Great Britain, Sweden, Poland, Malta, India, and others… We can
              set and apply effective communication process with our client
              regardless of time difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonDisclosure;
