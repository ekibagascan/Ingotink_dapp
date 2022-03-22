import { useState } from "react";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import "./style.css";

const HeroContainer = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  padding: 0 30px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
    height: 500px;
  }
  @media screen and (max-width: 480px) {
    height: 400px;
    margin-top: 40px;
  }
`;

// import icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// import images
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <BsArrowRight style={{ color: "#fff" }} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <BsArrowLeft style={{ color: "#fff" }} />
    </div>
  );
}
function EmptyArrow({ onClick }) {
  return <div></div>;
}

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, next) => (
      <div className={current === slideIndex ? "dot dot-active" : "dot"}></div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <EmptyArrow />,
          prevArrow: <EmptyArrow />,
        },
      },
    ],
  };

  return (
    <HeroContainer id="gallery">
      <div className="slider">
        <Fade>
          <Slider {...settings}>
            {images.map((img, index) => (
              <div
                className={
                  index === slideIndex ? "slide slide-active" : "slide"
                }
                key={index}
              >
                <img src={img} alt="" />
              </div>
            ))}
          </Slider>
        </Fade>
      </div>
    </HeroContainer>
  );
}

export default Carousel;
