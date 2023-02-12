import styled from "styled-components";

const fontfamily = "Anton, sans-serif";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  background-color: #ea6630;

  flex-direction: column;

  .text-end {
    font-size: 1rem;
    color: white;
    font-family: ${fontfamily};
    margin-top: 1rem;
  }
`;
export const SectionImages = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  .logo {
    width: 10rem;
    height: 100px;
  }

  .doxd {
    width: 10rem;
    height: 100px;
  }
`;

export const SectionIcons = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin-top: 2rem;

  .container--circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 1px solid white;
    margin-left: 20px;

    .container--twitter {
      height: 20px;
      width: 20px;
    }
    .container--opensea {
      height: 20px;
      width: 20px;
    }
    .container--etherscan {
      width: 20px;
      height: 20px;
    }
  }
  .container--circle:hover {
    border: 1px solid #b6cfd0;
  }
`;
