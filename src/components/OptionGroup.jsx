import React from "react";

import Option from "./Option";

export default function OptionGroup(props) {
  const classNames = [];

  return (
    <>
      <div className="product-categories">
        <Option id="option-bread" name={props.name} label="Breads" />
        <Option id="option-coffee" name={props.name} label="Coffee" />
        <Option id="option-beverage" name={props.name} label="Beverage" />
        <Option id="option-food" name={props.name} label="Food" />
      </div>
    </>
  );
}
