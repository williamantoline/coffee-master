import React from "react";

import Button from "../components/Button";

export default function Faq(props) {
  return (
    <section className="container-fluid faq" id="faq">
      <div className="row">
        <h1 className="fs-48 fw-700">Frequently Asked Questions</h1>
        <div className="col">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  When will Coffee Master available in my city?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <strong>ASAP. </strong>
                  We came with our first store at first, and now we are already
                  has 9 branch across Indonesia. We will try our best to fulfill
                  your dream to join us.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  How can I order the products?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body">
                  <strong>There are 2 ways. Dine In and Take Away</strong>
                  If you want to came and sit in the restaurant without spending
                  extra time onsite choosing the menu, you can book a
                  reservation and make a preorder for the dish. If you want to
                  eat it somewhere else, choose take away and you can take it by
                  yourself, or choosing a delivery to deliver it to you. For
                  detail, please check the{" "}
                  <a
                    style={{ color: "blue", textDecoration: "underline" }}
                    href="#tutorial"
                  >
                    tutorial section
                  </a>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  How can I get the newest information about new stores, new
                  menu, offers, and etc.?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body">
                  <strong>Subscribe to our email</strong>
                  By creating an account, you will be notified information about
                  us. You can cancel it anytime.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
