import React, { Component } from "react";

import Header from "../parts/Header";
import Hero from "../parts/Hero";
import Stores from "../parts/Stores";
import Footer from "../parts/Footer";
import Order from "../parts/Order";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header></Header>
        <Hero></Hero>
        <Order></Order>
        <Stores></Stores>
        <Footer></Footer>
      </>
    );
  }
}
