import React from 'react'

import "./whyUs.scss";

import lamp from "./lamp.svg"
import comp from "./comp.svg"
import people from "./people.svg"
import gadgets from "./gadgets.svg"
import note from "./note.svg"

const WhyUs = () => {
  return (
    <div className="why-us">
      <div className="container">
        <h2>Why Us</h2>
        <div className="why-us-content">
          <div className="info-row">
            <div className="why-us-text">
              <img src={lamp} alt="lamp" />
              <p>
                We are a proud team of QA's. It's our philosophy and way of
                life.
              </p>
            </div>
            <div className="why-us-text">
              <img src={comp}  alt="comp" />
              <p>
                We provide full QA support during product lifecycle and our
                customers know we are the best place to find QA resources.
              </p>
            </div>
          </div>

          <div className="info-row">
            <div className="why-us-text">
              <img src={people}  alt="people" />
              <p>
                Within the QA space we have many team leads and managers who
                have worked on a wide range of successful products. Most team
                members have between 3 and 12 years of experience.
              </p>
            </div>
            <div className="why-us-text">
              <img src={gadgets}  alt="gadgets" />
              <p>
                We have a lot of work experience with Agile and Waterfall
                development methodologies.
              </p>
            </div>
          </div>

          <div className="info-row">
            <div className="why-us-text">
              <img src={note} alt="note" />
              <p>
                We can develop and provide full test documentation to you to
                improve your product.
              </p>
            </div>
            <div className="why-us-text " id="why-us-orange">
              <p>
                QAX is a professional Quality Assurance and Quality Control team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
