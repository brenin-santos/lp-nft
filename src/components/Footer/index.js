import { Container, SectionIcons, SectionImages } from "./style";

import { BsTwitter } from "react-icons/bs";

export function Footer() {
  return (
    <Container>
      <SectionImages>
        <img src="img/logo.png" alt="Logo" className="logo" />
        <img src="img/doxd.png" alt="doxd" className="doxd" />
      </SectionImages>
      <SectionIcons>
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
      </SectionIcons>
      <p className="text-end">Terms & Condintions</p>
    </Container>
  );
}
