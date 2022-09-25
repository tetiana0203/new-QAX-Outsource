import React from "react";
import "./index.css";
import arrow from "./arrow.svg";
export default function Main(props) {
  return (
    <div id="content">
        <div id="hero-block">
            <h1>Quality Assurance Experts</h1>
            <p> We provide our clients with qualified assistance during product development and support </p>
        </div>



        <div id="our-services">
            <h2>Our Services</h2>
            <hr />
            <div id="our-services-text">
                <div>
                    <h3>Full Testing Cycle</h3>
                    <p>High quality of a product can be guaranteed only by verifying it veryaccurately. Our team can provide full range of test services. Mobile testing will beperformed on most popular iOs and Android devices (tablets and phones), and Windows mobile if needed. Desktop applications and Web services will be verified on any required OS and browser.</p>
                </div>
                <div>
                    <h3>Test Process Optimization</h3>
                    <p>To guarantee product quality, it should be verified very clearly. But it  require a lot of time and resources, and you still getting issues from production that costs a lot to fix. We can help you to solve this problem. Our optimized approaches to testing process will allow you to increase product quality, reduce overall testing time and number of issues from production. As result you will get valuable profit and great product quality.</p>
                </div>
            </div>
            <div>
                <img src={arrow} alt=""/>
                <img src={arrow} alt=""/>
            </div>
        </div>  


        <div id="our-services-orange">
            <div>
                <ul>
                    <li>Desktop, Web and Mobile testing</li>
                    <li>Functional testing</li>
                    <li>Configuration testing</li>
                    <li>Requirements testing</li>
                    <li>Usability testing</li>
                    <li>Localization / translation testing</li>
                </ul>
            </div>
            <div>
                <p>First, we analyze existing test process of a company and define its weaknesses. Then, based on research results, we make suggestions about optimization and reorganization of testing strategies. Implementation of new test processes is essential part of our activities in this case.</p>
            </div>

        </div>  

        <div id="cooperation-offer">
            <h2>Cooperation Offer</h2>
            <p>QAX company suggests you three main cooperation options</p>
            <hr/>
            <div className="cooperation-offer-blocks">
                <h3>Fixed Price</h3>
                <div>
                    <p>With this approach we define with you a project testing scope, discuss all specifications, testing environments and other details. Then we agree project verification cost and deadline. The option will be more suitable for you, if there is no big amount of objects to test at current project stage.</p>
                    <h5>Advantages</h5>
                    <ul>
                        <li>You can perform short-term project without involving QA for a full-work day. It will save your money</li>
                        <li>You can smooth test load peaks with our outsource QA. As result there is no need for you to have many QA staff or hire/fire additional QA resources</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="cooperation-offer-blocks">
                <h3>Time & Material</h3>
                <div>
                    <p>"Hourly paid” model is the most suitable, when it’s hard or impossible to estimate the project testing scope and terms. Only actual QA spent time will costs with this model. Such services are paid on a monthly basis or after the work is finished in case if the cooperation terms are not more than a month, and you receive comprehensive reports on the progress, as well as statements of the time-consuming.</p>
                    <h5>Advantages</h5>
                    <ul>
                        <li>You can minimize your product costs, by minimize QA expenses</li>
                        <li>You will not pay for sick, vacation or tea-breaks, only actual working hours should be paid</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="cooperation-offer-blocks">
                <h3>Outstaff </h3>
                <div>
                    <p>If you have few projects or / and long terms cooperation plans with our company, then we can provide you a QA team (including QA Team lead , if needed). With this model, we assign QA sources, based on your requirements. In future, you can change number of QA(s), depending of test load.</p>
                    <h5>Advantages</h5>
                    <ul>
                        <li>This is the easiest way to plan your budget. You just hire the number of QA you will need for your project</li>
                        <li>You will always have a professional QA staff in state, without need to search, interview, train QAs and rent office. Also you can easily reduce or increase number of QA(s) depending of test load on you project. That way you can minimize your product costs </li>
                        <li>A team accumulates knowledge about your products and processes and requires less time expenses</li>
                        <li>TA team can carry out multiple projects simultaneously, you are able to change the priority of tasks, stop tasks and assign new tasks</li>

                    </ul>
                </div>
            </div>
        </div> 
        <div id="non-disclosure">
            <div>
                <div>
                    <h3>
                        Non-Disclosure
                    </h3>
                    <hr />
                    <p>Confidence is one of the most important principles of our company. We can guarantee full confidence and security for any information that will be provided to us from our clients.</p>
                </div>
                <div>
                    <img src={require("./non-disc.svg").default} alt=""/>
                </div>
            </div>
            <div>
                <div>
                    <img src={require("./outsource.svg").default} alt=""/>
                </div>
                <div>
                    <h3>
                        Non-Disclosure
                    </h3>
                    <hr />
                    <p>Confidence is one of the most important principles of our company. We can guarantee full confidence and security for any information that will be provided to us from our clients.</p>
                </div>
            </div>
        </div> 
        <div id="our-support">
            <h2>Our Support</h2>
            <p>Do you need help to decide which model is more convenient for you project? Please contact our managers and they will help you to find the best solution. For more convenient and based on your suggestions, all cooperation conditions can be additionally reviewed and changed, to provide maximum efficiency.</p>
            <button>
                Contact us
            </button>
        </div>
        <div id="about-us">
            <h2>Our Support</h2>
            <hr />
            <p>IT world evolves very fast, that’s why each of existing companies needs to update its product regularly to stay on wave. Winning in competition is really important, so quality of a product should be the best! And we will be glad to assist you with this. Years of experience will help us.</p>
            <p>Our purpose is to evolve with you! You have a new interesting startup, some modifications, updates or re-work, and you are not sure in your product quality - then you’ve come to the right place! Each of our clients and projects won't stay without attention and will be accurately verified.</p>

            <img />
            <div>
                <div>Our specialists are experts with more than 5 years of experience and great practice. Each of us has been working for a long period of time in IT product and outsource companies.</div>
                <div>We are always heads up with all new test approaches and worldwide trends in IT development, so we apply only best practices to our clients.</div>
            </div>
            <p>Product Quality has the highest priority for us. So we do our best to satisfy our сlients and customers! During the work we use most popular and effective test approaches and testing tools, so verification process becomes really clear and qualitative. As result we achieve required quality level in shortest terms.</p>
            <img />
        </div>
        <div id="why-us">
            <div>
                <img />
                <p>We are a proud team of QA's. It's our philosophy and way of life.</p>
            </div>
            <div>
                <img />
                <p>Within the QA space we have many team leads and managers who have worked on a wide range of successful products. Most team members have between 3 and 12 years of experience.</p>
            </div>
            <div>
                <img />
                <p>We are a proud team of QA's. It's our philosophy and way of life.</p>
            </div>
            <div>
                <img />
                <p>We are a proud team of QA's. It's our philosophy and way of life.</p>
            </div>
            <div>
                <img />
                <p>We are a proud team of QA's. It's our philosophy and way of life.</p>
            </div>
            <div>
                <img />
                <p>We are a proud team of QA's. It's our philosophy and way of life.</p>
            </div>
            <div>
                <img />
                <p>We are a proud team of QA's. It's our philosophy and way of life.</p>
            </div>
        </div>
        <div id="cooperation-procedure">
            <div>
                <h2>Cooperation Procedure</h2>
                <p></p>
            </div>
            <div>
                <img />
            </div>
        </div>
    </div>
    
  );
}
