import React from "react";
import { Anchor, Heading, Paragraph } from "./common/global";
import { Grid } from "@mui/material";
import Image from "next/image";
import TwitterIcon from "../assets/twitter.svg";
import TelegramIcon from "../assets/telegram.svg";
import DiscordIcon from "../assets/discord_big.svg";
import LinkedinIcon from "../assets/linkedIn.svg.webp";

const Footer = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      sx={{ background: "#000", minHeight: "250px" }}
    >
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={10}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={5} md={5} className="center-sm">
          <Heading
            fontWeight="900"
            fontSize="32px"
            lineHeight="40px"
            color="#fff"
            margin="4px auto"
            fontSizeMobile="24px"
          >
            🌈 Communiti.dev
          </Heading>
          {/* <Paragraph
            fontSize="16px"
            lineHeight="19px"
            color="#666"
            margin="4px 0"
            padding="10px 4px"
          ></Paragraph> */}
        </Grid>
        <Grid item sm={4} md={4}></Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Anchor
            href="https://www.linkedin.com/company/communiti-dev"
            target="_blank"
          >
            <Image
              alt="TwitterIcon"
              src={LinkedinIcon}
              height="40px"
              width="40px"
            />
          </Anchor>
          <Anchor href="https://twitter.com/0xcommuniti" target="_blank">
            <Image
              alt="TwitterIcon"
              src={TwitterIcon}
              height="40px"
              width="40px"
            />
          </Anchor>
          <Anchor href="https://discord.gg/VnKnC9kD4K" target="_blank">
            <Image
              alt="DiscordIcon"
              src={DiscordIcon}
              height="40px"
              width="40px"
            />
          </Anchor>
          <Anchor href="https://t.me/+jHDcjX55zWw5NzNl" target="_blank">
            <Image
              alt="TelegramIcon"
              src={TelegramIcon}
              height="40px"
              width="40px"
            />
          </Anchor>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            background: "#4D4D4D",
            paddingBottom: "2px",
            marginTop: "2rem",
          }}
        ></Grid>
        <Grid
          item
          md={12}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Paragraph
            fontSize="16px"
            lineHeight="19px"
            color="#666"
            fontWeight="500"
            margin="16px auto"
          >
            Copyright © 2022 BlockC School - All Rights Reserved.
          </Paragraph>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
