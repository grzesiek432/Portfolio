import React, { Component } from "react";
import "./../css/home.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default class HomePage extends Component {
  render() {
    return (
      <div className="container-sm">
        <div className="fly-squares">
          <ul className="squares">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <a href="#about" className="more-details"></a>
        </div>

        <div className="context">
          <h1 className="class1">
            <span>"HELLO,</span> <span>I'M GRZEGORZ CHOJNACKI</span>
          </h1>

          <div className="title">
            <p className="class2">I want to become a Java Developer </p>
          </div>
        </div>
      </div>
    );
  }
}
