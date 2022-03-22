import React from "react";
import { Grid, Typography } from "@mui/material";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { team_details } from "../../Data/Team_Details";
import squad from "../../Data/Team";
import { TeamH1, TeamWrapper, TeamCard, TeamIcon } from "./TeamElements";
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
      <Fade top>
        <TeamH1>{team_details.heading}</TeamH1>
        <Subtitle
          variant="subtitle1"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            margin: "10px 30px 20px",
            textAlign: "center",
          }}
        >
          {team_details.descriptions}
        </Subtitle>
      </Fade>
      <TeamWrapper>
        {squad.map((sq) => (
          <Grid key={sq._id}>
            <Fade top>
              <TeamCard>
                <TeamIcon src={sq.image} />
              </TeamCard>
            </Fade>
            <Grid
              alignItems="center"
              justifyContent="space-between"
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <Fade top>
                <Typography variant="h5" sx={{ color: "#fff" }}>
                  {sq.name}
                </Typography>
              </Fade>
              <NavMenu>
                <SocialIconLink
                  href={sq.insta}
                  target="_blank"
                  arial-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href={sq.twitter}
                  target="_blank"
                  arial-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
              </NavMenu>
            </Grid>
          </Grid>
        ))}
      </TeamWrapper>
    </HeroContainer>
  );
};

export default Team;
