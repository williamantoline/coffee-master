import React from "react";

import Option from "./Option";

export default function OptionGroup(props) {
  const classNames = [];

  const options = props.options.map();

  return (
    <>
      <div className="product-categories">
        {props.options.map((i, key) => {
          <Option id="option-bread" name={props.name} label="Breads" />;
        })}
      </div>
    </>
  );
}
