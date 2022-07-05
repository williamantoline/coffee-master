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
                Jl. Jenderal Sudirman no. 23-25 Jakarta Utara, DKI Jakarta 20120
                <br />
                (061) 23112311
              </p>
              <p className="fs-18 fw-500">
                Jl. Ahmad Yani no. 101C Jakarta Barat, DKI Jakarta 20126
                <br />
                (061) 23115656
              </p>
              <p className="fs-18 fw-500">
                Jl. Kamboja no. 1-2 Jakarta Pusat, DKI Jakarta 20125
                <br />
                (061) 23122321
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="stores-region">
            <p className="stores-region-name fs-24 fw-600">MEDAN</p>
            <div className="stores-region-place">
              <p className="fs-18 fw-500">
                Jl. Yos Sudarso no. 5 Medan, Sumatera Utara 20211
                <br />
                (061) 23115954
              </p>
              <p className="fs-18 fw-500">
                Komplek Citra Graha Blok B no. 5-6 Medan, Sumatera Utara 20217
                <br />
                (061) 23115955
              </p>
            </div>
          </div>
          <div className="stores-region">
            <p className="stores-region-name fs-24 fw-600">PEKANBARU</p>
            <div className="stores-region-place">
              <p className="fs-18 fw-500">
                Jl. Harapan Raya no. 201 Pekanbaru, Riau 20418
                <br />
                (061) 23119988
              </p>
              <p className="fs-18 fw-500">
                Jl. Kopi no. 5-7 Pekanbaru, Riau 20419
                <br />
                (061) 23119987
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="stores-region">
            <p className="stores-region-name fs-24 fw-600">SURABAYA</p>
            <div className="stores-region-place">
              <p className="fs-18 fw-500">
                Jl. Thamrin no. 21A Surabaya, Jawa Timur 20621
                <br />
                (061) 23112391
              </p>
            </div>
          </div>
          <div className="stores-region">
            <p className="stores-region-name fs-24 fw-600">PALEMBANG</p>
            <div className="stores-region-place">
              <p className="fs-18 fw-500">
                Jl. Merpati no. 14-15 Jakarta Utara, Sumatera Selatan 20901
                <br />
                (061) 23112305
              </p>
            </div>
          </div>
          <div className="stores-region">
            <p className="stores-region-name fs-24 fw-600">MAKASSAR</p>
            <div className="stores-region-place">
              <p className="fs-18 fw-500">
                Komplek Asia Jakarta Blok CC no. 13-15 Makassar, Sulawesi
                Selatan 20723
                <br />
                (061) 23112115
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
