import React from "react";

import Button from "../components/Button";

export default function Store(props) {
  return (
    <section className="container-fluid stores" id="stores">
      <div className="row">
        <h1 className="fw-700 fs-48">Our Stores</h1>
        <div className="col-3 withImage">
          <img src="assets/images/stores.png" />
        </div>
        <div className="col-3">
          <div className="stores-region">
            <p className="stores-region-name fs-24 fw-600">JAKARTA</p>
            <div className="stores-region-place">
              <p className="fs-18 fw-500">
                Jl. Jenderal Sudirman no. 23-25 Jakarta Utara, Jakarta 20120
                <br />
                (061) 23112311
              </p>
              <p className="fs-18 fw-500">
                Jl. Jenderal Sudirman no. 23-25 Jakarta Utara, Jakarta 20120
                <br />
                (061) 23112311
              </p>
              <p className="fs-18 fw-500">
                Jl. Jenderal Sudirman no. 23-25 Jakarta Utara, Jakarta 20120
                <br />
                (061) 23112311
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="stores-region">
            <p className="stores-region-name fs-24 fw-600">MEDAN</p>
            <div className="stores-region-place">
              <p className="fs-18 fw-500">
                Jl. Jenderal Sudirman no. 23-25 Jakarta Utara, Jakarta 20120
                <br />
                (061) 23112311
              </p>
              <p className="fs-18 fw-500">
                Jl. Jenderal Sudirman no. 23-25 Jakarta Utara, Jakarta 20120
                <br />
                (061) 23112311
              </p>
            </div>
          </div>
          <div className="stores-region">
            <p className="stores-region-name fs-24 fw-600">MEDAN</p>
            <div className="stores-region-place">
              <p className="fs-18 fw-500">
                Jl. Jenderal Sudirman no. 23-25 Jakarta Utara, Jakarta 20120
                <br />
                (061) 23112311
              </p>
              <p className="fs-18 fw-500">
                Jl. Jenderal Sudirman no. 23-25 Jakarta Utara, Jakarta 20120
                <br />
                (061) 23112311
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="stores-region">
            <p className="stores-region-name fs-24 fw-600">MEDAN</p>
            <div className="stores-region-place">
              <p className="fs-18 fw-500">
                Jl. Jenderal Sudirman no. 23-25 Jakarta Utara, Jakarta 20120
                <br />
                (061) 23112311
              </p>
            </div>
          </div>
          <div className="stores-region">
            <p className="stores-region-name fs-24 fw-600">MEDAN</p>
            <div className="stores-region-place">
              <p className="fs-18 fw-500">
                Jl. Jenderal Sudirman no. 23-25 Jakarta Utara, Jakarta 20120
                <br />
                (061) 23112311
              </p>
            </div>
          </div>
          <div className="stores-region">
            <p className="stores-region-name fs-24 fw-600">MEDAN</p>
            <div className="stores-region-place">
              <p className="fs-18 fw-500">
                Jl. Jenderal Sudirman no. 23-25 Jakarta Utara, Jakarta 20120
                <br />
                (061) 23112311
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
