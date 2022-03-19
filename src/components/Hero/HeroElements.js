import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  padding: 0 30px;
  position: relative;
  z-index: 1;
  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2)0%, rgba(0,0,0,0.6)100%),  
    linear-gradient(180deg, rgba(0,0,0,0.2)0%, transparent 100%)
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  type: video/mp4;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 52px;

  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: -20px;
  color: #fff;
  font-size: 22px;
  text-transform: none;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  font-weight: 800;
  font-size: 1em;
  text-transform: uppercase;
  color: #000;
  border-radius: $border-rounded;
  margin: 10px;
  padding: 1em 3em;
  background-size: 200% auto;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-image: linear-gradient(
    -72deg,
    #a1a1a1,
    #ffffff 16%,
    #dedede 21%,
    #dedede 24%,
    #dedede 27%,
    #dedede 36%,
    #dedede 45%,
    #ffffff 60%,
    #ffffff 72%,
    #ffffff 80%,
    #ffffff 84%,
    #a1a1a1
  );
  transition: 0.5s;
  &:hover {
    color: rgba(0, 0, 0, 0.5) !important;
    background-position: right center;
  }
`;
