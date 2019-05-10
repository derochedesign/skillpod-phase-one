import React from "react";
import { Link } from "react-router-dom";

import logo from "img/logos/skillpod-logo-head.svg";

const { useState, useRef } = React;

const LoginPage = props => {
  
  return (
    <main class="layout no-toolbar">
      <div class="tile blank">
        <div class="bio-grid">
          <img alt="skillpod logo" src={logo} />
          <div>
            <h1>Login</h1>
            <h5>Please signup to access the rest of Skillpod.</h5>
          </div>
        </div>
      </div>
      <div class="tile blank">
      <form>
        <input type="text" placeholder="E-mail / Username" />
        <input type="text" placeholder="Password" />
      </form>
        <Link to="/dashboard" class="button">
          Login
        </Link>
      </div>
    </main>
  );
}

export default LoginPage;
