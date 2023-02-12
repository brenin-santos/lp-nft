import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

import {
  Container,
  Card,
  MintArea,
  CardTitle,
  CardDate,
  CardDay,
  TextTime,
  TextSubTime,
  TextPrice,
  ButtonMint,
  NFTImages,
  NFTImage,
  ArrowImage,
  TextAfterImages,
  VideoAfterTextImages,
  ContainerAfterVideo,
  About,
  ContainerAsSeenOn,
  TextTitle,
  ContainerCardAsSeenOn,
  CardAsSeenOn,
  ContainerRoadMap,
  ImageRoadMap,
  CardRoadMap,
  CardRoadMapTitle,
} from "./styled";

const Game = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [time, setTime] = useState({});

  const countDown = useCallback(() => {
    const dateToCalculate = "09/08/2022";

    const date = new Date(dateToCalculate);

    const totalSeconds = (date - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    const timer = {
      days: days,
      hours: hours,
      mins: mins,
      seconds: seconds,
    };

    setTime(timer);
    setCurrentDate(new Date());
  }, [currentDate]);

  useEffect(() => {
    countDown();
  }, [countDown]);

  return (
    <Container>
      <MintArea>
        <iframe
          width="700"
          height="350"
          src="https://www.youtube.com/embed/WPH9vilObKg"
          title="Tyler The Creator - The Party Isn't Over (Single)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Card>
          <CardTitle>MINT IS LIVE!</CardTitle>

          <CardDate>
            <CardDay>
              <TextTime>{time.days}</TextTime>
              <TextSubTime>Days</TextSubTime>
            </CardDay>
            <CardDay>
              <TextTime>{time.hours}</TextTime>
              <TextSubTime>Hours</TextSubTime>
            </CardDay>
            <CardDay>
              <TextTime>{time.mins}</TextTime>
              <TextSubTime>Minutes</TextSubTime>
            </CardDay>
            <CardDay>
              <TextTime>{time.seconds}</TextTime>
              <TextSubTime>Seconds</TextSubTime>
            </CardDay>
          </CardDate>

          <TextPrice>PRICE: 0.1 ETH | SUPPLY: 2,500</TextPrice>
          <ButtonMint>Mint</ButtonMint>
        </Card>
      </MintArea>
      <NFTImages>
        <NFTImage src="img/NFT1.jpeg" alt="NFT" />
        <ArrowImage src="img/Group-94.png" alt="arrow" />
        <NFTImage src="img/NFT2.jpeg" alt="NFT" />
      </NFTImages>
      <TextAfterImages>Turn your nft into a playable character</TextAfterImages>
      <VideoAfterTextImages>
        <iframe
          width="700"
          height="350"
          src="https://www.youtube.com/embed/WPH9vilObKg"
          title="Tyler The Creator - The Party Isn't Over (Single)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </VideoAfterTextImages>
      <ContainerAfterVideo>
        <img src="img/Mutant-Musks-Gif.gif" alt="gif" className="image--gif" />
        <About>
          <p className="text--top">Who are we?</p>
          <p className="text--middle">Story</p>

          <p className="text--bottom">
            Elon Musk becomes the first human to step foot on Mars. The days
            there go by fast but before he leaves, some of his DNA particles get
            left behind. The red planet is mysterious and the chunks of DNA have
            mutated into 10,000 Mutant Musks. Will they fight back Elon or join
            his army? Nobody knows. We need you on this journey – to enjoy the
            best Metaverse experience, try an all-new Intergalactic Competitive
            Shooter game and save the planet Mars!
          </p>

          <img src="img/Group-90.png" alt="group-90" className="group-90" />
        </About>
        <img src="img/Group-58.png" alt="Terra" className="group-58"></img>
      </ContainerAfterVideo>
      <ContainerAsSeenOn>
        <TextTitle>As Seen On</TextTitle>
        <ContainerCardAsSeenOn>
          <CardAsSeenOn>
            <img
              src="https://mutantmusks.com/wp-content/uploads/2022/07/image-3.png"
              alt="Card As Seen On"
            />
          </CardAsSeenOn>
          <CardAsSeenOn>
            <img
              src="https://mutantmusks.com/wp-content/uploads/2022/07/image-3.png"
              alt="Card As Seen On"
            />
          </CardAsSeenOn>
          <CardAsSeenOn>
            <img
              src="https://mutantmusks.com/wp-content/uploads/2022/07/image-3.png"
              alt="Card As Seen On"
            />
          </CardAsSeenOn>
          <CardAsSeenOn>
            <img
              src="https://mutantmusks.com/wp-content/uploads/2022/07/image-3.png"
              alt="Card As Seen On"
            />
          </CardAsSeenOn>
          <CardAsSeenOn>
            <img
              src="https://mutantmusks.com/wp-content/uploads/2022/07/image-3.png"
              alt="Card As Seen On"
            />
          </CardAsSeenOn>
          <CardAsSeenOn>
            <img
              src="https://mutantmusks.com/wp-content/uploads/2022/07/image-3.png"
              alt="Card As Seen On"
            />
          </CardAsSeenOn>
          <CardAsSeenOn>
            <img
              src="https://mutantmusks.com/wp-content/uploads/2022/07/image-3.png"
              alt="Card As Seen On"
            />
          </CardAsSeenOn>
          <CardAsSeenOn>
            <img
              src="https://mutantmusks.com/wp-content/uploads/2022/07/image-3.png"
              alt="Card As Seen On"
            />
          </CardAsSeenOn>
          <CardAsSeenOn>
            <img
              src="https://mutantmusks.com/wp-content/uploads/2022/07/image-3.png"
              alt="Card As Seen On"
            />
          </CardAsSeenOn>
        </ContainerCardAsSeenOn>
      </ContainerAsSeenOn>
      <ContainerRoadMap>
        <TextTitle>RoadMap</TextTitle>
        <ImageRoadMap src="img/roadmap.png" alt="roadmap" />
        <CardRoadMap>
          <CardRoadMapTitle>JAN 2022</CardRoadMapTitle>
          <ul>
            <li>Team Development</li>
            <li> Advisory</li>
            <li>Industry Analysis</li>
            <li>Private Funding</li>
          </ul>
        </CardRoadMap>
      </ContainerRoadMap>
    </Container>
  );
};

export { Game };
