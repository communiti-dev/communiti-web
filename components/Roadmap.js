import React from 'react';
import {
  Heading,
  Paragraph,
  Grid,
  MasetrBox,
  Circle,
  CenterDiv,
  DottedCirclular,
} from './common/global';

import Harvesting from '../assets/Harvesting.svg';
import Roasting from '../assets/Roasting.svg';
import Grinding from '../assets/Grinding.svg';
import Brewing from '../assets/Brewing.svg';
import Drinking from '../assets/Drinking.svg';
import Image from 'next/image';
import { useCurrentWidth } from '../src/hooks/getWidth';

const Roadmap = () => {
  const bo = '1px solid #9DA9FE';
  const br = '36px';
  const isMobileView = useCurrentWidth() > 768 ? true : false;

  return (
    <div>
      <Heading
        fontSize="32px"
        fontWeight="900"
        color="black"
        lineHeight="40px"
        textAlign="center"
      >
        Roadmap to Become a Web3 Rockstar 🚀
      </Heading>
      <Paragraph
        textAlign="center"
        fontWeight="500"
        fontSize="16px"
        lineHeight="19px"
      >
        We love Coffee ☕️, Lets see how we brew our bunch of rockstars to get
        them job ready!{' '}
      </Paragraph>
      {/* now the real magic happens */}
      <div
        style={{
          margin: '60px 15px 0px 15px',
        }}
      >
        <Grid
          gridTemplateColumns="1fr 5fr 5fr 1fr"
          gridTemplateColumnsMobile="0fr 1fr 0fr 0fr"
        >
          <MasetrBox></MasetrBox>
          <MasetrBox
            borderRight={bo}
            borderBottom={bo}
            borderBottomRightRadius={br}
            marginLeft="25px"
            width="95%"
          ></MasetrBox>
          <MasetrBox height="120px"></MasetrBox>
          <MasetrBox></MasetrBox>
        </Grid>
        <Grid
          gridTemplateColumns="1fr 5fr 5fr 1fr"
          gridTemplateColumnsMobile="1fr 5fr 0fr 0fr"
        >
          <MasetrBox
            borderTop={bo}
            borderLeft={bo}
            borderBottom={bo}
            borderTopLeftRadius={br}
            borderBottomLeftRadius={br}
          ></MasetrBox>
          <MasetrBox borderBottom={bo}>
            <Heading
              fontSize="24px"
              fontWeight="900"
              lineHeight="30px"
              margin="60px 0px 20px"
            >
              Harvesting
            </Heading>
            <Paragraph
              fontWeight="500"
              fontSize="14px"
              lineHeight="146%"
              margin="0px 0px 60px"
            >
              Hand-picking the best talent out there and preparing them for this
              roller coaster ride 🚀
            </Paragraph>
            <Circle top="-12px" left="12px" hoverBackgroundColor="#3e57fe"></Circle>
            <DottedCirclular top="-22px" left="2px"></DottedCirclular>
          </MasetrBox>
          <MasetrBox 
            padding="30px 60px"
            borderBottom={bo}
            smWidth="80%"
            smMarginRight="30px"
          >
          {isMobileView && <Image src={Harvesting} alt="harvesting" />}
          </MasetrBox>
          <MasetrBox></MasetrBox>
        </Grid>
        <Grid
          gridTemplateColumns="1fr 5fr 5fr 1fr"
          gridTemplateColumnsMobile="0fr 0fr 5fr 1fr"
        >
          <MasetrBox></MasetrBox>
          <MasetrBox padding="30px 60px" borderBottom={bo} marginLeft="32px">
            {isMobileView && <Image src={Roasting} alt="Roasting"/>}
          </MasetrBox>
          <MasetrBox borderBottom={bo}>
            <Heading
              fontSize="24px"
              fontWeight="900"
              lineHeight="30px"
              margin="60px 0px 20px"
            >
              Roasting
            </Heading>
            <Paragraph
              fontWeight="500"
              fontSize="14px"
              lineHeight="146%"
              margin="0px 0px 60px"
            >
              Providing students with a well-paced and tested curriculum to
              enhance their aroma in web3 engineering aptitude and skills
            </Paragraph>
            <Circle top="-12px" left="12px" backgroundColor="white"  hoverBackgroundColor="#3e57fe"></Circle>
            <DottedCirclular top="-22px" left="2px"></DottedCirclular>
          </MasetrBox>
          <MasetrBox
            borderRight={bo}
            borderTop={bo}
            borderBottom={bo}
            borderBottomRightRadius={br}
            borderTopRightRadius={'23px'}
          ></MasetrBox>
        </Grid>
        <Grid
          gridTemplateColumns="1fr 5fr 5fr 1fr"
          gridTemplateColumnsMobile="1fr 5fr 0fr 0fr"
        >
          <MasetrBox
            borderTop={bo}
            borderLeft={bo}
            borderBottom={bo}
            borderTopLeftRadius={br}
            borderBottomLeftRadius={'23px'}
          ></MasetrBox>
          <MasetrBox borderBottom={bo}>
            <Heading
              fontSize="24px"
              fontWeight="900"
              lineHeight="30px"
              margin="60px 0px 20px"
            >
              Grinding
            </Heading>
            <Paragraph
              fontWeight="500"
              fontSize="14px"
              lineHeight="146%"
              margin="0px 0px 60px"
            >
              A mixture of Bounties, Live sessions, LMS, Hackathons, and
              One-on-One mentorship is blended well in our vetted curriculum to
              grind their Blockchain skills and bring the best out of our
              Rockstars
            </Paragraph>
            <Circle top="-12px" left="12px" backgroundColor="white" hoverBackgroundColor="#3e57fe"></Circle>
            <DottedCirclular top="-22px" left="2px"></DottedCirclular>
          </MasetrBox>
          <MasetrBox
            padding="60px 30px"
            borderBottom={bo}
            smWidth="80%"
            smMarginRight="30px"
          >
            {isMobileView && <Image src={Grinding}  alt="Grinding"/>}
          </MasetrBox>
          <MasetrBox></MasetrBox>
        </Grid>
        <Grid
          gridTemplateColumns="1fr 5fr 5fr 1fr"
          gridTemplateColumnsMobile="0fr 0fr 5fr 1fr"
        >
          <MasetrBox></MasetrBox>
          <MasetrBox padding="60px 30px">
            {isMobileView && <Image src={Brewing} alt="Brewing" />}
          </MasetrBox> 
          <MasetrBox>
            <Heading
              fontSize="24px"
              fontWeight="900"
              lineHeight="30px"
              margin="60px 0px 20px"
            >
              Brewing
            </Heading>
            <Paragraph
              fontWeight="500"
              fontSize="14px"
              lineHeight="146%"
              margin="0px 0px 60px"
            >
              Our Rockstars get dedicated in-hand training for interview
              preparation for full-stack Blockchain development to make them
              ready for all industry-standard DAOs and web3 Companies including
              the top players in the field
            </Paragraph>
            <Circle top="-12px" left="12px" backgroundColor="white" hoverBackgroundColor="#3e57fe"></Circle>
            <DottedCirclular top="-22px" left="2px"></DottedCirclular>
          </MasetrBox>
          <MasetrBox
            borderRight={bo}
            borderTop={bo}
            borderBottom={bo}
            borderBottomRightRadius={br}
            borderTopRightRadius={'23px'}
          ></MasetrBox>
        </Grid>
        <Grid gridTemplateColumns="1fr 5fr 5fr 1fr">
          <MasetrBox></MasetrBox>
          <MasetrBox></MasetrBox>
          <MasetrBox
            borderTop={bo}
            borderLeft={bo}
            borderTopLeftRadius={br}
          ></MasetrBox>
          <MasetrBox height="120px"></MasetrBox>
        </Grid>
        <div
          className='roadmap-diriking'
        >
          <CenterDiv>
            <Image src={Drinking}  alt="Drinking"/>
          </CenterDiv>
          <Heading textAlign="center">Drinking</Heading>
          <Paragraph textAlign="center">
            On basis of their top-notch web-3 skills, Rockstars are ready to be
            served <span style={{ color: '#25C125' }}>(Get Hired)</span>with
            100% Placement Assitance.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
