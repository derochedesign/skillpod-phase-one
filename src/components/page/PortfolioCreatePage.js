import React, { Component } from "react";

const { useState, useRef } = React;

function PortfolioCreatePage(props) {
  return (
    <main className="layout">
      <div className="tile blank">
        <h1>Create Portfolio Piece</h1>
        <p>
          Text editor, s&q, access to leading questions, review/publish(two
          step), access to tips/reflection
        </p>
      </div>
      <div id="container" />
    </main>
  );
}
export default PortfolioCreatePage;
