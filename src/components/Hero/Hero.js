import React, { useEffect, useRef } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
  Button,
} from "./HeroElements";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    };

    let handlePlay = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);

    observer.observe(videoRef.current);
  });

  return (
    <HeroContainer id="home" className="HeroCont">
      <HeroBg>
        <VideoBg ref={videoRef} muted src="./video.mp4" />
      </HeroBg>
      <HeroContent>
        <HeroBtnWrapper>
          <Button to="mint" target="_blank" rel="noopener noreferrer">
            MINT AN INGOTINK
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
