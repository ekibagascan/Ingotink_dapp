import React from "react";
import "./style.css";
import styled from "styled-components";

const HeroContainer = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 870px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 600px;
  }
  @media screen and (max-width: 480px) {
    height: 400px;
  }
`;

const Roadmap = () => {
  return (
    <HeroContainer id="timeline">
      <div class="tl-item">
        <div
          class="tl-bg"
          style={{
            "background-image": "url(./images/3.jpg)",
          }}
        ></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">10%</p>
        </div>

        <div class="tl-content">
          <h1>Lorem ipsum dolor sit</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div class="tl-item">
        <div
          class="tl-bg"
          style={{
            "background-image": "url(./images/4.jpg)",
          }}
        ></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">20%</p>
        </div>

        <div class="tl-content">
          <h1 class="f3 text--accent ttu">Vestibulum laoreet lorem</h1>
          <p>
            Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan
            risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas.
          </p>
        </div>
      </div>

      <div class="tl-item">
        <div
          class="tl-bg"
          style={{
            "background-image": "url(./images/5.jpg)",
          }}
        ></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">40%</p>
        </div>

        <div class="tl-content">
          <h1 class="f3 text--accent ttu">Phasellus mauris elit</h1>
          <p>
            Mauris cursus magna at libero lobortis tempor. Suspendisse potenti.
            Aliquam interdum vulputate neque sit amet varius. Maecenas ac
            pulvinar nisi.
          </p>
        </div>
      </div>

      <div class="tl-item">
        <div
          class="tl-bg"
          style={{
            "background-image": "url(./images/8.jpg)",
          }}
        ></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">60%</p>
        </div>

        <div class="tl-content">
          <h1 class="f3 text--accent ttu">Mauris vitae nunc elem</h1>
          <p>
            Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare
            purus non euismod. Donec vestibulum efficitur tortor, eget efficitur
            enim facilisis consequat.
          </p>
        </div>
      </div>

      <div class="tl-item">
        <div
          class="tl-bg"
          style={{
            "background-image": "url(./images/13.jpg)",
          }}
        ></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">80%</p>
        </div>

        <div class="tl-content">
          <h1 class="f3 text--accent ttu">Mauris vitae nunc elem</h1>
          <p>
            Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare
            purus non euismod. Donec vestibulum efficitur tortor, eget efficitur
            enim facilisis consequat.
          </p>
        </div>
      </div>

      <div class="tl-item">
        <div
          class="tl-bg"
          style={{
            "background-image": "url(./images/15.jpg)",
          }}
        ></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">100%</p>
        </div>

        <div class="tl-content">
          <h1 class="f3 text--accent ttu">Mauris vitae nunc elem</h1>
          <p>
            Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare
            purus non euismod. Donec vestibulum efficitur tortor, eget efficitur
            enim facilisis consequat.
          </p>
        </div>
      </div>
    </HeroContainer>
  );
};

export default Roadmap;
