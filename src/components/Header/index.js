import React from "react";

import { Container } from "./style";

import { BsTwitter } from "react-icons/bs";

const Header = () => {
  return (
    <Container>
      <section className="section--tittle">
        <img src="img/logo.png" alt="Logo" />
      </section>
      <section className="section--topics">
        <a>Game</a>
        <a>About us</a>
        <a>RoadMap</a>
        <a>Contact Us</a>

        <a className="container--circle" href="https://twitter.com">
          <BsTwitter color="white" size={20} />
        </a>
        <a className="container--circle" href="https://etherscan.com">
          <img
            src="img/etherscan.png"
            alt="etherscan logo"
            className="container--etherscan"
          />
        </a>
        <a className="container--circle" href="https://opensea.com">
          <img
            src="img/opensea.png"
            alt="opensea logo"
            className="container--opensea"
          />
        </a>
      </section>
    </Container>
  );
};

export { Header };
