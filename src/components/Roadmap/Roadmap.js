import React from "react";
import "./style.css";
import styled from "styled-components";
import roadmaps from "../../Data/Roadmaps";

const HeroContainer = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 870px;
  position: relative;
  z-index: 1;
`;

const Roadmap = () => {
  return (
    <HeroContainer id="timeline">
      {roadmaps.map((rm) => (
        <div key={rm._id} class="tl-item">
          <div
            class="tl-bg"
            style={{
              "background-image": rm.image,
            }}
            // "background-image": "url(./images/3.jpg)",
          ></div>

          <div class="tl-year">
            <p class="f2 heading--sanSerif">{rm.heading}</p>
          </div>

          <div class="tl-content">
            <h1>{rm.sub_heading}</h1>
            <p>{rm.descriptions}</p>
          </div>
        </div>
      ))}
    </HeroContainer>
  );
};

export default Roadmap;
