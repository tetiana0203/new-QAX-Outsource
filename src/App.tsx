import React from "react";

import Header from "./layouts/header/Header";
import Hero from "./components/hero/hero";
import OurServices from "./components/ourServices/ourServices";
import OrangeOurServices from "./components/orangeOurServices/orangeOurServices";
import CooperationOffers from "./components/cooperationOffer/cooperationsOffer";
import NonDisclosure from "./components/nonDisclosure/nonDisclosure";
import OurSupport from "./components/ourSupport/ourSupport";
import AboutUs from "./components/aboutUs/aboutUs";
import WhyUs from "./components/whyUs/whyUs";
import CooperationProcedure from "./components/cooperationProcedure/cooperationProcedure";
import ContactUs from "./components/contactUs/contactUs";
import Footer from "./layouts/footer/Footer";
import BtnScrollUp from "./components/BtnScrollUp"

import "./reset.scss"

const App = () => {
  return (
    <div className="App">
        <Header />
        <Hero/>
        <OurServices/>
        <OrangeOurServices/>
        <CooperationOffers/>
        <NonDisclosure/>
        <OurSupport/>
        <AboutUs/>
        <WhyUs/>
        <CooperationProcedure/>
        <ContactUs/>
        <Footer  />
        <BtnScrollUp />
    </div>
  );
}

export default App;
