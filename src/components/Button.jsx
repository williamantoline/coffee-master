import React from "react";

export default function Button(props) {
  const classNames = ["_btn"];

  if (props.isMedium) classNames.push("_btn-md");
  if (props.isLarge) classNames.push("_btn-lg");
  if (props.isPrimary) classNames.push("_btn-primary");
  if (props.isSecondary) classNames.push("_btn-secondary");
  if (props.isTertiary) classNames.push("_btn-tertiary c-white");
  if (props.type === "auth") classNames.push("_btn-auth");

  if (props.hasShadow) classNames.push("shadow");

  if (props.type === "link") {
    return (
      <>
        <a href={props.href}>
          <button className={classNames.join(" ")}>
            <img src={props.icon} />
            {props.text}
          </button>
        </a>
      </>
    );
  } else if (props.type === "button") {
    return (
      <>
        <button className={classNames.join(" ")}>
          <img src={props.icon} />
          {props.text}
        </button>
      </>
    );
  } else if (props.type === "auth") {
    return (
      <>
        <button
          style={{ marginTop: "48px" }}
          type="submit"
          className={classNames.join(" ")}
        >
          <img src={props.icon} />
          {props.text}
        </button>
      </>
    );
  }
}
