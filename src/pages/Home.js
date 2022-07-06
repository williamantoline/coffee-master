import React, { Component, useState } from "react";

import Header from "../parts/Header";
import Hero from "../parts/Hero";
import Stores from "../parts/Stores";
import Tutorial from "../parts/Tutorial";
import Footer from "../parts/Footer";
import Order from "../parts/Order";
import Faq from "../parts/Faq";
import Modal from "../parts/Modal";

export default function Home(props) {
  let [cartItem, setCartItem] = useState(0);
  let [bill, setBill] = useState(0);

  const setCartItems = (e) => {
    setCartItem(e);
  };

  const setBills = (e) => {
    setBill(e);
  };

  return (
    <>
      <Header cartItem={cartItem} bill={bill}></Header>
      <Hero></Hero>
      <Order setCartItem={setCartItems} setBill={setBills}></Order>
      <Stores></Stores>
      <Tutorial></Tutorial>
      <Faq></Faq>
      <Modal bill={bill}></Modal>
      <Footer></Footer>
    </>
  );
}
