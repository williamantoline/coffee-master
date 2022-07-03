import React from "react";

import Logo from "../components/Logo";

export default function Footer(props) {
  return (
    <section className="container-fluid footer">
      <div className="row">
        <div className="col-4">
          <Logo isLight />
          <div className="footer-social-media-group">
            <a>
              <img src="assets/icons/ic_instagram.svg" />
            </a>
            <a>
              <img src="assets/icons/ic_twitter.svg" />
            </a>
            <a>
              <img src="assets/icons/ic_tiktok.svg" />
            </a>
          </div>
          <p className="fs-14 footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div className="col-4">
          <div className="footer-menu-group">
            <a href="">
              <div>About Us</div>
            </a>
            <a href="">
              <div>Frequently Asked Questions</div>
            </a>
            <a href="">
              <div>Stores</div>
            </a>
            <a href="">
              <div>How to Order</div>
            </a>
          </div>
        </div>
        <div className="col-4">
          <div className="footer-text-card">
            <p className="title fs-16 fw-600">Headquarters</p>
            <p className="description fs-13 fw-500">
              Jl. Jenderal Sudirman no. 23-25 Jakarta Utara, DKI Jakarta 20120
            </p>
          </div>
          <div className="footer-text-card">
            <p className="title fs-16 fw-600">Contact Us</p>
            <p className="description fs-13 fw-500">(061) 23112311</p>
            <p className="description fs-13 fw-500">0812 1234 1234</p>
            <p className="description fs-13 fw-500">cs@coffeemaster.com</p>
          </div>
          <div className="copyright fs-16">
            © 2022 Coffee Master | All Rights Reserved
          </div>
        </div>
      </div>
    </section>
  );
}
