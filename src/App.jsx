import React from "react";

import Header from "./Components/static/Header.jsx";

import Section from "./Components/Section.jsx";

import Footer from "./Components/static/Footer.jsx";
import "./Style.scss";

const App = () => {
  return (
    <div className="__container">
      <Header />
      <Section />
      <Footer />
    </div>
  );
};

export default App;
