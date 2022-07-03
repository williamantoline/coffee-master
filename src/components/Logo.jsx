import React from "react";

export default function Logo(props) {
  const classNames = ["logo"];

  if (props.isLight) classNames.push("logo-light");

  return (
    <>
      <a href={props.href}>
        <p className={classNames.join(" ")}>COFFEE MASTER</p>
      </a>
    </>
  );
}
