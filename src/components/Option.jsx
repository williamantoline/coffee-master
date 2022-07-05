import React from "react";

export default function Option(props) {
  const classNames = [];

  return (
    <>
      <input
        type="radio"
        class="btn-check _btn-select"
        name={props.name}
        id={props.id}
        defaultChecked={props.defaultChecked}
        onChange={props.onChange}
      />
      <label
        class="_btn _btn-sm _btn-primary btn btn-outline-success _btn-select"
        for={props.id}
        style={{ marginRight: "16px" }}
      >
        {props.label}
      </label>
    </>
  );
}
