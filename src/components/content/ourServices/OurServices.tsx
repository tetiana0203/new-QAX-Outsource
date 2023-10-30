import React from 'react'

import "./OurServices.scss"

import arrow from "./arrow.svg"

const OurServices = () => {
    return (
        <div className="our-services" id="our-services">
            <div className="container">
                <h2 className="our-services__title">Our Services</h2>
                <div className="our-services__info">
                    <div className="our-services__block1">
                        <h3 className="our-services__subtitle">Full Testing Cycle</h3>
                        <p className="our-services__text">High quality of a product can be guaranteed only by verifying it veryaccurately. Our team can provide full range of test services. Mobile testing will beperformed on most popular iOs and Android devices (tablets and phones), and Windows mobile if needed. Desktop applications and Web services will be verified on any required OS and browser.</p>
                    </div>
                    <div className="our-services__block2">
                        <h3 className="our-services__subtitle">Test Process Optimization</h3>
                        <p className="our-services__text">To guarantee product quality, it should be verified very clearly. But it  require a lot of time and resources, and you still getting issues from production that costs a lot to fix. We can help you to solve this problem. Our optimized approaches to testing process will allow you to increase product quality, reduce overall testing time and number of issues from production. As result you will get valuable profit and great product quality.</p>
                    </div>
                </div>
                <div className='our-services__img'>
                    <div className='our-services__img'><img src={arrow} alt="arrow" /></div>
                    <div className='our-services__img'><img src={arrow} alt="arrow" /></div>
                </div>

              
            </div>

        </div>

    )
}
export default OurServices