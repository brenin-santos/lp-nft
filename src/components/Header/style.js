import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  background: #016d66;
  height: 120px;

  justify-content: center;
  gap: 10rem;
  align-items: center;

  .section--tittle {
    display: flex;

    img {
      width: 8rem;
      height: 5rem;
    }
  }
  .section--topics {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 1rem;

    a {
      color: #ddd;
      font-size: 1.5rem;
      font-family: "Anton", sans-serif;
      transition: 1s;
      cursor: pointer;
    }

    a:hover {
      font-weight: 400;
      color: #fc6227;
      cursor: pointer;
    }

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
      border: 1px solid #fc6227;
    }
  }
`;
