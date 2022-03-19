import styled from "styled-components";

export const TeamContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
export const TeamWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 35px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const TeamCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0;
  max-height: 512px;
  padding: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const TeamIcon = styled.img`
  height: 330px;
  width: 300px;
`;
export const TeamH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const TeamH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const TeamP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
