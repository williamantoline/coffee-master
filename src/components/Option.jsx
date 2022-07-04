import React from "react";

export default function Option(props) {
  const classNames = [];

  return (
    <>
      <input
        type="radio"
        class="btn-check"
        name={props.name}
        id={props.id}
        onChange={props.onChange}
      />
      <label
        class="_btn _btn-sm _btn-primary btn btn-outline-success"
        for={props.id}
        defaultChecked={props.defaultChecked}
        style={{ marginRight: "16px" }}
      >
        {props.label}
      </label>
    </>
  );
}
