import styled from 'styled-components';
import React from 'react'
import SolidityLogo from '../../assets/solidity.png'
import Image from 'next/image';

export const RelativeContainer = styled.div`
position: relative;
width: ${(props) => props.width};
height: ${(props) => props.height};
// display: flex;
// justify-content: center;
// align-items: center;
border: 1px solid #5C22B9;
`
export const AbsoluteBox = styled.div`
position: absolute;
top: ${(props) => props.top};
left: ${(props) => props.left};
bottom: ${(props) => props.bottom};
right: ${(props) => props.right};
`;


const Card = () => {
  return (
    <RelativeContainer width="400px" height="400px">
        <AbsoluteBox top="0" left="50%">
            <Image
             alt="solidity" 
             src={SolidityLogo.src}
             width='100px'
             height="100px"
            />
            
        </AbsoluteBox>
    </RelativeContainer>
  )
}

export default Card