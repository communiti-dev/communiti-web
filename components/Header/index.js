import Link from "next/link";
import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

import Community from "../../assets/communiti.svg";
import { Anchor, Paragraph } from "../common/global";
import { useCurrentWidth } from "../../src/hooks/getWidth";
<script
  id="luma-checkout"
  src="https://embed.lu.ma/checkout-button.js"
></script>;

const Header = () => {
  const isMobileView = useCurrentWidth() <= 768 ? true : false;
  return (
    <>
      <Paragraph
        fontSize="18px"
        color="#fff"
        padding=".3rem 1rem"
        backgroundColor="linear-gradient( 88.5deg, #3e57fe 8.97%, #fe5d8a 44.45%, #fe9567 73.75%, #fed03e 98.03% )"
        fontWeight="600"
        margin="0"
        textAlign="center"
        fontSizeMobile="13px"
        paddingMobile=".6rem 1rem"
        style={{ position: "fixed", top: "0px", width: "100%", zIndex: "10" }}
      >
        🚀 Solana Batch starts from 5th March &nbsp;
        <a
          href="https://build.communiti.dev/store/Solana-Bootcamp-7c0mmeuaxy0e"
          target="_blank"
          className="highlight"
        >
          Apply Now &nbsp;
        </a>
        | &nbsp; Solana Unlocked @ 21st Feb &nbsp;
        <a
          href="https://lu.ma/event/evt-81LsHD1X9zssMJu"
          target="_blank"
          className="highlight"
        >
          Register for Event
        </a>
      </Paragraph>
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0}
          sx={{
            position: "fixed",
            top: "37px",
            zIndex: "10",
            background: "#fff",
          }}
        >
          <Grid item xs={4} sm={3} md={2}>
            <Link href="/">
              <Image
                className="cursor-pointer"
                loading="lazy"
                src={Community}
                width={isMobileView ? "150px" : "210px"}
                alt="communiti"
              />
            </Link>
          </Grid>
          <Grid item xs={1} sm={3} md={4}></Grid>
          <Grid item xs={2} sm={2} md={2} className="text-ul">
            <Link href="/faq">FAQs</Link>
          </Grid>

          <Grid item xs={3} sm={2} md={1} className="text-ul">
            <Link href="/team">Our Team</Link>
          </Grid>
          <Grid item xs={0} sm={0} md={1}></Grid>
          <Grid item xs={2} sm={2} md={1}>
            <Anchor
              color="white"
              height="42px"
              backgroundColor="#3E57FE"
              padding={isMobileView ? "8px" : "12px 18px"}
              borderRadius="8px"
              fontSize={isMobileView ? "14px" : ""}
              href="https://www.notion.so/Blockchain-Course-3b89152dd1c04a3396207cf5c88803c4"
              target="_blank"
            >
              Courses
            </Anchor>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Header;
