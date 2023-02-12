import styled from "styled-components";

const fontfamily = "Anton, sans-serif";

export const Container = styled.main`
  display: flex;
  width: 100%;

  flex-direction: column;

  background-image: url(https://mutantmusks.com/wp-content/bg.png);
  background-position: top center;
  background-size: 100%;
  background-repeat: no-repeat;
  overflow-x: hidden;
`;

export const MintArea = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  width: 100%;

  margin-top: 4rem;

  iframe {
    border: 2px solid #6da29d;
    border-radius: 0.5rem;
  }
`;

export const Card = styled.div`
  width: 400px;
  height: 350px;
  border: 2px solid #6da29d;
  border-radius: 0.5rem;
  background: #ffffff1f;

  gap: 1.5rem;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const CardTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;

  text-transform: uppercase;
  font-family: ${fontfamily};

  margin-top: 2rem;

  color: white;
`;

export const CardDate = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const CardDay = styled.div`
  width: 70px;
  height: 80px;
  border: 1px solid #016d66;
  background: #016d66;
  color: black;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextTime = styled.p`
  font-size: 1.5rem;
  color: white;

  font-family: ${fontfamily};
`;

export const TextSubTime = styled.p`
  font-size: 1rem;
  color: white;

  font-family: ${fontfamily};
`;

export const TextPrice = styled.p`
  font-size: 1rem;
  color: white;
  font-family: ${fontfamily};
`;

export const ButtonMint = styled.button`
  width: 100px;
  height: 50px;

  background: #fc6927;
  border: 1px solid #fc6927;
  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-family: ${fontfamily};
  border-radius: 0.5rem;
  transform: 1s;

  &:hover {
    filter: brightness(0.92);
  }
`;

export const NFTImages = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  justify-content: center;
  align-items: center;
  width: 100%;

  margin-top: 4rem;
`;

export const NFTImage = styled.img`
  width: 25rem;
  height: 25rem;

  border: 1px solid #6da29d;
  border-radius: 0.5rem;
`;
export const ArrowImage = styled.img`
  width: 5rem;
  height: 30px;
`;

export const TextAfterImages = styled.p`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-top: 4rem;

  text-transform: uppercase;
  font-size: 1.5rem;
  color: white;

  font-family: ${fontfamily};
  text-shadow: 0 0 1rem black;
`;

export const VideoAfterTextImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;

  iframe {
    border: 2px solid #6da29d;
    border-radius: 0.5rem;
  }
`;

export const ContainerAfterVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #339770;
  border: none;
  box-shadow: 0 0 5rem #339770;
  position: relative;
  padding: 4rem 0;

  margin-top: 4rem;

  gap: 3rem;

  .image--gif {
    width: 30rem;
    height: 30rem;

    border: 2px solid #6da29d;
    border-radius: 0.5rem;
  }

  .group-58 {
    position: absolute;

    left: 7rem;
    top: 28rem;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;

  width: 30rem;

  position: relative;

  .group-90 {
    width: 8rem;
    height: 8rem;

    position: absolute;
    top: -6rem;
    left: 7rem;
  }

  .text--top {
    font-size: 1rem;
    color: white;
    font-family: ${fontfamily};
  }
  .text--middle {
    font-size: 2rem;
    color: white;
    font-family: ${fontfamily};
    text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
      1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
  }
  .text--bottom {
    font-size: 1rem;
    color: white;
    font-family: ${fontfamily};
  }
`;

export const ContainerAsSeenOn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: transparent;

  margin-top: 6rem;
`;

export const TextTitle = styled.p`
  font-size: 2rem;
  color: white;
  font-family: ${fontfamily};
  text-shadow: 1px 0 black, -1px 0 black, 0 1px black, 0 -1px black,
    1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
`;

export const ContainerCardAsSeenOn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  grid-gap: 1rem;
  margin-top: 6rem;

  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const CardAsSeenOn = styled.div`
  width: 400px;
  height: 150px;

  display: flex;
  justify-content: center;
  background: #ffffff9e;
  border-radius: 20px 20px 20px 20px;
  align-items: center;
`;

export const ContainerRoadMap = styled.section`
  width: 100%;
  display: flex;
  position: relative;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 6rem 0;

  background-image: url(https://mutantmusks.com/wp-content/uploads/2022/07/spave.png);
  background-repeat: no-repeat;
  background-size: 120% 120%;
  background-position: -9rem 0;
  overflow-x: hidden;
`;

export const ImageRoadMap = styled.img`
  margin-top: 4rem;

  position: relative;
`;

export const CardRoadMap = styled.div`
  position: absolute;
  top: 18rem;
  right: 25rem;

  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: white;
  font-family: ${fontfamily};
`;
export const CardRoadMapTitle = styled.p`
  font-size: 2rem;
  color: white;
  font-family: ${fontfamily};
  text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
    1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
`;
