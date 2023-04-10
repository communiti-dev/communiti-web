import React from "react";
import { Heading, Paragraph } from "./common/global";

import SolanaLogo from "../assets/solana-logo.svg";
import QuillAuditsLogo from "../assets/quillaudits.jpeg";
import SkullfullLogo from "../assets/skullfull.jpeg";
import CodemonkLogo from "../assets/codemonk.png";
import Truts from "../assets/truts.svg";
import Lumos from "../assets/lumos.png";
import Image from "next/image";
import HackVerseLogo from "../assets/hackverse.png";
import UrHackathon from "../assets/ur-hackathon.webp";
import { Grid } from "@mui/material";

const Hackathon = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      sx={{
        background:
          "linear-gradient(90.85deg, #AFB9FE 0%, #FFBBCE 34.9%, #FDC2A8 68.75%, #FFF2C9 100%)",
        minHeight: "30vh",
        height: "content-fit",
        marginTop: "5rem",
      }}
    >
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={5}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          item
          xs={8}
          sm={8}
          md={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            background: "#fff",
            borderRadius: "8px",
            margin: ".6rem 0",
            marginRight: "1rem",
          }}
        >
          <Image src={HackVerseLogo} alt="Solana" height="70px" width="200px" />
        </Grid>
        <Grid
          container
          item
          xs={8}
          sm={8}
          md={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            background: "#fff",
            borderRadius: "8px",
            margin: ".6rem 0",
            marginRight: "1rem",
            padding: "5px",
          }}
        >
          <Image
            src={UrHackathon}
            alt="Quail Audits"
            height="60px"
            width="190px"
          />
        </Grid>
        {/* <Grid
          container
          item
          xs={8}
          sm={8}
          md={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            background: "#F7F7F7",
            borderRadius: "8px",
            margin: ".6rem 0",
            marginBottom: "1rem",
            marginRight: "1rem",
            padding: "5px",
          }}
        >
          <Image
            src={SkullfullLogo}
            alt="Skullfull logo"
            height="60px"
            width="190px"
          />
        </Grid>
        <Grid
          container
          item
          xs={8}
          sm={8}
          md={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            background: "#F7F7F7",
            borderRadius: "8px",
            margin: ".6rem 0",
            marginBottom: "1rem",
            marginRight: "1rem",
            padding: "5px",
          }}
        >
          <Image
            src={CodemonkLogo}
            alt="Codemonk logo"
            height="60px"
            width="190px"
          />
        </Grid>
        <Grid
          container
          item
          xs={8}
          sm={8}
          md={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            background: "#F7F7F7",
            borderRadius: "8px",
            margin: ".6rem 0",
            marginBottom: "1rem",
            marginRight: "1rem",
            padding: "5px",
          }}
        >
          <Image src={Truts} alt="Truts logo" height="60px" width="190px" />
        </Grid>
        <Grid
          container
          item
          xs={8}
          sm={8}
          md={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            background: "#F7F7F7",
            borderRadius: "8px",
            margin: ".6rem 0",
            marginBottom: "1rem",
            marginRight: "1rem",
            padding: "5px",
          }}
        >
          <Image src={Lumos} alt="Lumos logo" height="60px" width="190px" />
        </Grid> */}
      </Grid>
      <Grid item xs={12} sm={12} md={2} />
      <Grid item xs={12} sm={12} md={3}>
        <Heading
          className="partner--title"
          fontWeight="900"
          fontSize="32px"
          lineHeight="40px"
        >
          Hackathon Partners
        </Heading>
        <Paragraph
          className="partner--sub"
          fontSize="16px"
          lineHeight="19px"
          color="#666"
        >
          We have partnerd with top Blockchain and Organaisation to Curate our
          Curriculam.
        </Paragraph>
      </Grid>
    </Grid>
  );
};

export default Hackathon;
