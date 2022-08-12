import Image from 'next/image';
import Features from '../assets/feature.svg';
import styles from '../styles/Home.module.css';
import { Box } from '@mui/material';
import {
  Heading,
  ResponsiveBox,
  ResponsiveFLexBox,
  Paragraph,
  CustumButton,
  CenterAlongX,
  Bolder,
} from '../components/common/global';
import { HomeHeroDecription } from '../src/utils/constant';
import { Container } from '@mui/system';
import Roadmap from '../components/Roadmap';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import { Slider } from '../components/Slider';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Hero />
        <Container maxWidth="lg">
          <Box>
            <ResponsiveFLexBox
              flexDirection={'row'}
              flexDirectionMobile="column"
              justifyContent={'space-around'}
              alignItemsMobile="center"
              alignItems={'center'}
              borderRadius={'33px'}
            >
              <ResponsiveBox textAlignMobile="center" widthMobile="70%">
                <Image src={Features} alt="feature" />
              </ResponsiveBox>
              <ResponsiveBox
                padding="132px 0px 132px 100px"
                paddingMobile="33px 5px"
              >
                <Heading
                  fontWeight="900"
                  fontSize="32px"
                  fontFamily="Gilroy"
                  color="black"
                  lineHeight="40px"
                >
                  {HomeHeroDecription.left.HeroHeading}
                </Heading>
                <Paragraph
                  fontFamily="Gilroy"
                  color="#808080"
                  lineHeight="146%"
                  fontSize="16px"
                  fontWeight="500"
                  margin="30px 0"
                >
                  First time in industry a curated{' '}
                  <Bolder color="#4D4D4D"> fulltime curriculam </Bolder> with{' '}
                  <Bolder color="#4D4D4D"> Live Classes, </Bolder> One on One{' '}
                  <Bolder color="#4D4D4D"> Mentorship, Bounties, </Bolder>{' '}
                  Hackathons and
                  <Bolder color="#4D4D4D"> Gauranteed Job Assistance </Bolder>
                </Paragraph>
                <Paragraph color="#808080" margin="12px 0" fontWeight="500">
                  All In One Place !
                </Paragraph>
                <CenterAlongX>
                  <CustumButton
                    borderRadius="8px"
                    padding="14px 20px"
                    fontWeight="600"
                    fontSize="14px"
                    lineHeight="17px"
                    color="white"
                    backgroundColor="#3E57FE"
                    margin="18px 0"
                    onClick={() =>
                      window.open(
                        'https://vzloajhw7wb.typeform.com/to/xLz2rsVp',
                        '_blank'
                      )
                    }
                  >
                    {HomeHeroDecription.left.HeroButton.ButtonText}
                  </CustumButton>
                </CenterAlongX>
              </ResponsiveBox>
            </ResponsiveFLexBox>
            <Roadmap />
          </Box>
        </Container>
        <Partners />
        <Slider />
        <Footer />
      </div>
    </>
  );
}
