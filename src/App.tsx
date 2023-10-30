import React from "react";

import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Content from "./components/content/Content"
import BtnScrollUp from "./components/BtnScrollUp"

import "./reset.scss"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content/>
      <Footer />
      <BtnScrollUp />
    </div>
  );
}

export default App;
