import React from "react";

export default function Option(props) {
  const classNames = [];

  return (
    <>
      <input type="radio" class="btn-check" name={props.name} id={props.id} />
      <label class="btn btn-outline-success" for={props.id}>
        {props.label}
      </label>
    </>
  );
}
