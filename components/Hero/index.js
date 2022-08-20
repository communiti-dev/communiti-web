import { Container } from '@mui/system';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {
  Paragraph,
  Anchor,
  CenterDiv,
} from '../common/global';
import Discord from '../../assets/Discord.svg';

const Hero = () => {
  return (
    <div className="hero">
      <Container maxWidth="lg">
        <h1 className="hero_main">Kickstart your 3.0 career with world’s best web3 builders</h1>
        <Paragraph
          fontWeight="500"
          fontSize="19px"
          fontSizeMobile="16px"
          lineHeight="146%"
          textAlign="center"
          color="#808080"
          margin="10px 50px"
          marginMobile="25px 10px"
        >
          Mastery based course to learn Blockchain and build DApps from scratch with live classes, assignments, capstone projects and many more with experienced mentorship and devoted curriculum, all at zero cost.
        </Paragraph>
        <Link
          style={{
            background: 'transparent',
          }}
          href="https://discord.gg/VnKnC9kD4K"
        >
          <CenterDiv>
            <Anchor
              color="#3E57FE"
              height="42px"
              backgroundColor="#fff"
              margin="20px"
              padding="12px 20px"
              border="1px solid #3E57FE"
              borderRadius="8px"
              target="_blank"
            >
              <Image src={Discord} alt="Discord" />
              <span style={{ marginLeft: '10px' }}>Join Discord</span>
            </Anchor>
          </CenterDiv>
        </Link>

        <Paragraph
          fontWeight="700"
          fontSize="30px"
          lineHeight="150%"
          textAlign="center"
          color="#808080"
          margin="30px 50px"
          fontSizeMobile="20px"
          marginMobile="10px"
        >
          # Anyone can start from here, If you&apos;re doing it for fun or want a good job.
        </Paragraph>

      </Container>
    </div>
  );
};

export default Hero;
