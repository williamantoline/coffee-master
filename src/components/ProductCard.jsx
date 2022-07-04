import React, { useState } from "react";

export default function ProductCard(props) {
  const classNames = [];

  let [qty, setQty] = useState(0);

  const handleChangeQty = (e) => {
    setQty(e.target.value);
  };

  let qtyInput = document.getElementById(props.data.code);

  const handleAddQty = () => {
    let newQty = qty + 1;
    setQty(newQty);
    qtyInput.value = newQty;
    console.log(newQty);
  };

  const handleSubQty = () => {
    let newQty = qty - 1;
    setQty(newQty);
    qtyInput.value = newQty;
    console.log(newQty);
  };

  // qtyInput.value = qty;
  return (
    <>
      <div class="card" style={{ width: "280px", height: "420px" }}>
        <img
          src="/assets/images/product-1.png"
          class="card-img-top"
          alt="..."
          style={{ height: "260px" }}
        />
        <div class="card-body">
          <div className="card-content">
            <div className="left">
              <p className="product-name fs-20 fw-600">{props.data.name}</p>
              <p className="product-price fs-16 fw-500">{props.data.price}</p>
              <p className="product-desc fs-13 fw-500 cl-grey">
                {props.data.description}
              </p>
            </div>
            <div className="right">
              <div className="counter">
                <div class="input-group mb-3">
                  <button class="btn" type="button" onClick={handleAddQty}>
                    +
                  </button>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    aria-label="Example text with two button addons"
                    id={props.data.code}
                    // value="0"
                    value={qty}
                    onChange={handleChangeQty}
                  />
                  <button class="btn btn" type="button" onClick={handleSubQty}>
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
