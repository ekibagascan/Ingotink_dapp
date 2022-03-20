import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./InfoElements";
import Fade from "react-reveal/Fade";

const Info = ({ lightBg, imgStart, headline, description, alt, img }) => {
  return (
    <InfoContainer lightBg={lightBg} id="about">
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <Fade top>
                <Heading>{headline}</Heading>
              </Fade>
              <Fade left>
                <Subtitle>{description}</Subtitle>
              </Fade>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Fade right>
                <Img src={img} alt={alt} />
              </Fade>
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Info;
