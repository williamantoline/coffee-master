import React from "react";

import Button from "../components/Button";

export default function Hero(props) {
  return (
    <section className="container-fluid hero">
      <div className="row">
        <div className="col-6 left">
          <h1 className="hero-title fs-54 fw-800">Good Food for Good Mood</h1>
          <p className="hero-desc fs-20 fw-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <Button
            type="button"
            text="Order Now"
            hasIcon
            icon="assets/icons/ic_cart.svg"
            hasShadow
            isLarge
            isSecondary
          />
        </div>
        <div className="col-6 right">
          <img src="assets/images/hero.png" />
        </div>
      </div>
    </section>
  );
}
