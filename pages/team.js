import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import { ourTeam } from "../src/data/team";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';

const OurTeam = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={0}
    >
      <Grid item md={12}>
        <Typography component="div">
          <Box fontSize={40} fontWeight={600} textAlign="center" my={6} mb={8}>
            Meet Our Team
          </Box>
        </Typography>
      </Grid>
      <Grid item md={1} />
        {ourTeam.map((item) => (
          <Grid item md={2} sx={{marginBottom: '2rem !important', textAlign: 'center'}}>
            <img
              src={item.src}
              alt={item.name}
              className="faq-person-img"
            />
            <h4 className="faq-person-name">{item.name}</h4>
            <p className="faq-person-deg">{item.designation}</p>
            <p>
              <a href={item.linkedin} target="_blank">
                <LinkedInIcon />
              </a>
              <a className="mx-2" href={item.telegram} target="_blank">
                <TelegramIcon />
              </a>
              <a href={item.twitter} target="_blank">
                <TwitterIcon />
              </a>
            </p>
          </Grid>
        ))}
    </Grid>
  );
};

export default OurTeam;
