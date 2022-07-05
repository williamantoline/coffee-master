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

  const setCartItems = (e) => {
    setCartItem(e);
  };

  return (
    <>
      <Header cartItem={cartItem}></Header>
      <Hero></Hero>
      <Order setCartItem={setCartItems}></Order>
      <Stores></Stores>
      <Tutorial></Tutorial>
      <Faq></Faq>
      <Modal></Modal>
      <Footer></Footer>
    </>
  );
}
