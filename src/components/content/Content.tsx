import React from "react";

import Hero from "./hero/Hero";
import OurServices from "./ourServices/OurServices";
import OrangeOurServices from "./orangeOurServices/OrangeOurServices";
import CooperationOffers from "./cooperationOffer/CooperationsOffer";
import NonDisclosure from "./nonDisclosure/NonDisclosure";
import OurSupport from "./ourSupport/OurSupport";
import AboutUs from "./aboutUs/AboutUs";
import WhyUs from "./whyUs/WhyUs";
import CooperationProcedure from "./cooperationProcedure/CooperationProcedure";
import ContactUs from "./contactUs/ContactUs";

const Content = () => {
    return (
        <div>
            <Hero />
            <OurServices />
            <OrangeOurServices />
            <CooperationOffers />
            <NonDisclosure />
            <OurSupport />
            <AboutUs />
            <WhyUs />
            <CooperationProcedure />
            <ContactUs />
        </div>
    )
}

export default Content;