import React, { Component } from "react";

import Button from "../components/Button";

export default class Auth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const loginPart = (
      <>
        <p className="fs-36 fw-700">Welcome back</p>

        <div className="auth-form-input-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email"></input>
        </div>
        <div className="auth-form-input-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password"></input>
        </div>
        <Button
          style="margin-top: 48px;"
          type="auth"
          text="Log In"
          isTertiary
        />
        <div className="another-option">
          <p className="fs-18 fw-500">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </>
    );

    const signupPart = (
      <>
        <p className="fs-36 fw-700">Join Us</p>

        <div className="auth-form-input-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name"></input>
        </div>
        <div className="auth-form-input-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email"></input>
        </div>
        <div className="auth-form-input-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password"></input>
        </div>
        <div className="auth-form-input-group">
          <label for="cpassword">Confirm Password</label>
          <input type="password" id="cpassword" name="cpassword"></input>
        </div>
        <Button
          style="margin-top: 48px;"
          type="auth"
          text="Log In"
          isTertiary
        />
        <div className="another-option">
          <p className="fs-18 fw-500">
            Already have an account? <a href="/login">Log In</a>
          </p>
        </div>
      </>
    );

    return (
      <>
        <div className="auth">
          <div className="container-fluid">
            <div className="auth-card shadow">
              <div className="left">
                <div className="auth-content">
                  {this.props.type === "login" ? loginPart : signupPart}
                </div>
              </div>
              <div className="right">
                <img src="assets/images/auth.jpg" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
