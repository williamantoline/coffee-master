import React from "react";

import Button from "../components/Button";
import Logo from "../components/Logo";

export default function Header(props) {
  return (
    <header className="container-fluid shadow">
      <div className="row">
        <div className="col-lg-3 left">
          <Logo />
        </div>
        <div className="col-lg-3 menu">
          <a href="#order">
            <div>Order</div>
          </a>
          <a href="#stores">
            <div>Stores</div>
          </a>
          <a href="#tutorial">
            <div>
              How to Order
              {/* <img src="assets/icons/ic_down.svg"></img> */}
            </div>
          </a>
          <a href="#faq">
            <div>FAQ</div>
          </a>
        </div>
        <div className="col-lg-3 right">
          <div className="icon-24">
            <img src="assets/icons/ic_cart.svg" />
          </div>
          <Button
            type="link"
            href="/login"
            text="Sign In"
            isMedium
            isSecondary
          />
        </div>
      </div>
    </header>
  );
}
