import React from "react";
import reactImg from "../../assets/react-core-concepts.png";
import './Header.css';
const Header = () => {
  const description = ["core", "fundamental", "crucial"];

  function randomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description[randomInt(2)]} React concepts you will need for almost
          any app you are going to build!
        </p>
      </header>
    </div>
  );
};
export default Header;
