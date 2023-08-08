import React from 'react'

import "./cooperationProcedure.scss";

import handshake from "./handshake.png";

const CooperationProcedure = () => {
  return (
    <div className="cooperation-procedure">
      <div className="container cooperation-procedure-content">
        <div className="cooperation-procedure-info">
          <h2>Cooperation Procedure</h2>
          <div className="cooperation-procedure-text">
            <p >
              You provide us with necessary information for test execution
              (requirements, URL for test environment, accounts, test results
              estimates, documentation, etc.). Right away we start verification
              process.
            </p>
            <p >
              In same time, we communicate with you to find all additional
              information will need, provide full scope of tests with test plan
              and costs. We report issues right away they were found in any form
              will be required (bug tracking system or else).
            </p>
            <p >
              All fixed issues will be verified with necessary regression. After
              verification process completed, you will be provided with test
              report, that includes bug report and full test documentation was
              used.
            </p>
          </div>
        </div>
        <div>
          <img src={handshake} alt="handshake" />
        </div>
      </div>
    </div>
  );
};

export default CooperationProcedure;
