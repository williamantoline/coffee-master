import React, { useState } from "react";

export default function ProductCard(props) {
  const classNames = [];

  let [qty, setQty] = useState(0);

  const handleChangeQty = (e) => {
    setQty(e.target.value);
  };

  // let addBtn = document.getElementById("addBtn" + props.data.code);
  // let subBtn = document.getElementById("subBtn" + props.data.code);
  let qtyInput = document.getElementById(props.data.code);

  const handleAddQty = () => {
    let newQty = Math.max(qty + 1, 0);
    setQty(newQty);
    props.setMenuQty([newQty, props.data.code]);
    qtyInput.value = newQty;
    // console.log(newQty);
  };

  const handleSubQty = () => {
    let newQty = Math.max(qty - 1, 0);
    setQty(newQty);
    props.setMenuQty([newQty, props.data.code]);
    qtyInput.value = newQty;
    // console.log(newQty);
  };

  // qtyInput.value = qty;
  return (
    <>
      <div class="card" style={{ width: "280px", height: "420px" }}>
        <img
          src={
            props.data.image ? props.data.image : "/assets/images/product-1.png"
          }
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
                  <button
                    class="btn"
                    type="button"
                    onClick={handleAddQty}
                    id={`addBtn${props.data.code}`}
                  >
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
                  <button
                    class="btn btn"
                    type="button"
                    onClick={handleSubQty}
                    id={`subBtn${props.data.code}`}
                  >
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
