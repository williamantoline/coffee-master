import React from "react";

import Button from "../components/Button";

export default function Tutorial(props) {
  return (
    <section className="container-fluid tutorial" id="tutorial">
      <h1 className="fs-48 fw-700">How to Order</h1>
      <div className="row">
        <div className="col-6">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Dine In / Make A Reservation
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  1. Choose store
                  2. Choose your food
                  3. Choose date and time
                  4. Checkout you will get the ticket
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Take Away / Delivery
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  1. Choose store
                  2. Choose your food
                  3. Choose date and time
                  4. Choose delivery (optional)
                  5. Checkout and you will get the ticket
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 desc">
          <div className="tutorial-part">
            <h2 className="fs-20 fw-600">Dine In / Make A Reservation</h2>
            <p className="fs-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="tutorial-part">
            <h2 className="fs-20 fw-600">Take Away / Delivery</h2>
            <p className="fs-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
