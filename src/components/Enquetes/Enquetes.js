import React from "react";

import Button from "../UI/Button/Button";

import "./Enquetes.scss";

const enquetes = props => {
  return (
    <div className="enquetes">
      <h1>Enquetes</h1>
      <p>
        Lorem ipsum eget porttitor orci bibendum lorem cras maecenas commodo,
        conubia maecenas proin sed habitasse id?
      </p>
      <form className="enquetes__form">
        <label className="container">
          Diam egestas purus commodo scelerisque non curae gravida.
          <input type="radio" name="option" />
          <span className="checkmark" />
        </label>
        <label className="container">
          Diam egestas purus commodo scelerisque non curae gravida.
          <input type="radio" name="option" />
          <span className="checkmark" />
        </label>
        <label className="container">
          Diam egestas purus commodo scelerisque non curae gravida.
          <input type="radio" name="option" />
          <span className="checkmark" />
        </label>
        <label className="container">
          Diam egestas purus commodo scelerisque non curae gravida.
          <input type="radio" name="option" />
          <span className="checkmark" />
        </label>
      </form>
      <div className="enquetes__buttons">
        <a href="#">
          Criar <span>&#10095;</span>
        </a>
        <Button btnClass="enquetes" type="send">
          Enviar
        </Button>
      </div>
    </div>
  );
};

export default enquetes;
