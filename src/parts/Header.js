import React, { useState } from "react";

import Button from "../components/Button";
import Logo from "../components/Logo";

export default function Header(props) {
  // let [cartItem, setCartItem] = useState(0);

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
            <div>How to Order</div>
          </a>
          <a href="#faq">
            <div>FAQ</div>
          </a>
        </div>
        <div className="col-lg-3 right">
          <div className="icon-24">
            <div
              class="position-relative"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img src="assets/icons/ic_cart.svg" />
              {props.cartItem > 0 ? (
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {props.cartItem}
                  <span class="visually-hidden">items</span>
                </span>
              ) : (
                ""
              )}
            </div>
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
