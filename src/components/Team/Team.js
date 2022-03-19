import React from "react";
import { Grid, Typography } from "@mui/material";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import {
  TeamContainer,
  TeamH1,
  TeamWrapper,
  TeamCard,
  TeamIcon,
} from "./TeamElements";
import styled from "styled-components";

const HeroContainer = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 600px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    height: 850px;
  }
  @media screen and (max-width: 786px) {
    height: 1600px;
  }
  @media screen and (max-width: 480px) {
    height: 1600px;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  align-items: center;
  margin-right: -22px;
`;

const Subtitle = styled(Typography)`
  @media screen and (max-width: 480px) {
    max-width: "240px";
  }
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin: 25px 20px 20px;
  background: "#a2a2a2";
`;

const Team = () => {
  return (
    <HeroContainer id="team">
      <TeamH1>Who Are We?</TeamH1>
      <Subtitle
        variant="subtitle1"
        sx={{
          color: "rgba(255, 255, 255, 0.8)",
          margin: "10px 30px 20px",
          textAlign: "center",
        }}
      >
        RSYC was created by three friends who set out <br></br> to make some
        dope roman statue, test our skills, and try to build something
        (luxurious).
      </Subtitle>
      <TeamWrapper>
        <Grid>
          <TeamCard>
            <TeamIcon src="./images/1.jpg" />
          </TeamCard>
          <Grid
            alignItems="center"
            justifyContent="space-between"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography variant="h5" sx={{ color: "#fff" }}>
              John Doe
            </Typography>
            <NavMenu>
              <SocialIconLink
                href="https://discord.gg/8TEc3XfGCM"
                target="_blank"
                arial-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/joker_punks"
                target="_blank"
                arial-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            </NavMenu>
          </Grid>
        </Grid>
        <Grid>
          <TeamCard>
            <TeamIcon src="./images/2.jpg" />
          </TeamCard>
          <Grid
            alignItems="center"
            justifyContent="space-between"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography variant="h5" sx={{ color: "#fff" }}>
              Richard Lee
            </Typography>
            <NavMenu>
              <SocialIconLink
                href="https://discord.gg/8TEc3XfGCM"
                target="_blank"
                arial-label="instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/joker_punks"
                target="_blank"
                arial-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            </NavMenu>
          </Grid>
        </Grid>
        <Grid>
          <TeamCard>
            <TeamIcon src="./images/3.jpg" />
          </TeamCard>
          <Grid
            alignItems="center"
            justifyContent="space-between"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography variant="h5" sx={{ color: "#fff" }}>
              Martin Garrix
            </Typography>
            <NavMenu>
              <SocialIconLink
                href="https://discord.gg/8TEc3XfGCM"
                target="_blank"
                arial-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/joker_punks"
                target="_blank"
                arial-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            </NavMenu>
          </Grid>
        </Grid>
      </TeamWrapper>
    </HeroContainer>
  );
};

export default Team;
