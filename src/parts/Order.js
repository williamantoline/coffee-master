import React from "react";

import Button from "../components/Button";
import OptionGroup from "../components/OptionGroup";

export default function Order(props) {
  return (
    <section className="container-fluid order">
      <h1 className="fs-48 fw-700">Order</h1>
      <div className="row">
        <div className="col-4">
          <h2>Menu</h2>
        </div>
        <div className="col-4">
          <div className="store-option">
            Store:
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
      <div className="row">
        <div className="col-4">
          <OptionGroup name="product-option" />
        </div>
        <div className="col-4"></div>
        <div className="col-4">
          <OptionGroup name="order-type" />
        </div>
      </div>
    </section>
  );
}
