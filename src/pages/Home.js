import React, { Component } from "react";

import Header from "../parts/Header";
import Hero from "../parts/Hero";
import Stores from "../parts/Stores";
import Footer from "../parts/Footer";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header></Header>
        <Hero></Hero>
        <Stores></Stores>
        <Footer></Footer>
      </>
    );
  }
}