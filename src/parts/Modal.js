import React from "react";

import Button from "../components/Button";

export default function Modal(props) {
  const handleFormSubmit = (e) => {
    console.log(e);
  };

  console.log(props.bill);

  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <form onSubmit={handleFormSubmit} action="/">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <h5 class="modal-title fw-600" id="exampleModalLabel">
                Bills
              </h5>
              <p>No. 1234</p>
              <p className="fw-600">Take Away (Delivery)</p>
            </div>
            <div class="modal-body total">Total: {props.total}</div>
            <div class="modal-body form">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
