import Link from 'next/link';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

import Community from '../../assets/communiti.svg';
import { Anchor, Paragraph } from '../common/global';

const Header = () => {
  return (
    <>
    <Paragraph 
          fontSize="20px"
          color="#fff"
          padding=".3rem 1rem"
          backgroundColor="linear-gradient( 88.5deg, #3e57fe 8.97%, #fe5d8a 44.45%, #fe9567 73.75%, #fed03e 98.03% )"
          fontWeight="600"
          margin="0"
          textAlign='center'
        >
          Our Batch will start from 21<sup>st</sup> september 2022 &lt;&gt; learn @ zero cost
      </Paragraph>    
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Image loading="lazy" src={Community} width="210px" alt="communiti" />
        <Link href="/join">
          <Anchor
            color="white"
            height="42px"
            backgroundColor="#3E57FE"
            margin="20px"
            padding="12px 20px"
            borderRadius="8px"
            href='https://www.notion.so/Blockchain-Course-3b89152dd1c04a3396207cf5c88803c4'
            target="_blank"
          >
            Courses
          </Anchor>
        </Link>
      </Box>
    </Container>
    </>
  );
};

export default Header;
