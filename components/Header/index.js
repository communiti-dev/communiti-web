import Link from "next/link";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

import Community from "../../assets/communiti.svg";
import { Anchor, Paragraph } from "../common/global";

const Header = () => {
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
      >
        🚀 Our Batch will start from 21<sup>st</sup> september 2022 &lt;&gt; learn
        @ zero cost
      </Paragraph>
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
            <Grid item xs={12} sm={12} md={3}>
              <Link href="/">
                <Image className="cursor-pointer" loading="lazy" src={Community} width="210px" alt="communiti" />
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={4}></Grid>
            <Grid item xs={12} sm={12} md={2} className="text-ul">
              <Link href="/faq">
                  FAQs
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={1} className="text-ul">
              <Link href="/team">
                Our Team
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={1}></Grid>
            <Grid item xs={12} sm={12} md={1}>
              <Anchor
                color="white"
                height="42px"
                backgroundColor="#3E57FE"
                margin="20px"
                padding="12px 20px"
                borderRadius="8px"
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
