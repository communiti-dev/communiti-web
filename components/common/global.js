import styled from 'styled-components';
const breakPoint = '768px';
const fontFamily = 'Gilroy';
export const Anchor = styled.a`
  text-decoration: none;
  margin-right: ${(props) => props.marginRight};
  cursor: pointer;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  font-family: ${fontFamily};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  height: ${(props) => props.height};
`;
export const ResponsiveFLexBox = styled.div`
  background: url(${(props) => props.backgroundImage?.src});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  position: relative;
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  align-content: ${(props) => props.alignContent};
  border-radius: ${(props) => props.borderRadius};
  height: ${(props) => props.height};
  @media (max-width: ${breakPoint}) {
    flex-direction: ${(props) => props.flexDirectionMobile};
    flex-wrap: ${(props) => props.flexWrapMobile};
    justify-content: ${(props) => props.justifyContentMobile};
    align-items: ${(props) => props.alignItemsMobile};
    align-content: ${(props) => props.alignContentMobile};
    border-radius: ${(props) => props.borderRadiusMobile};
  }
`;

export const ResponsiveBox = styled.div`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  position: ${(props) => (!props.position ? 'relative' : props.position)};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  width: 50%;
  text-align: ${(props) => props.textAlign};
  @media (max-width: ${breakPoint}) {
    left: ${(props) => props.leftMobile};
    right: ${(props) => props.rightMobile};
    top: ${(props) => props.topMobile};
    bottom: ${(props) => props.bottomMobile};
    width: 100%;
    padding: ${(props) => props.paddingMobile};
    text-align: ${(props) => props.textAlignMobile};
    width: ${(props) => props.widthMobile};
    height: auto;
  }
`;
export const Heading = styled.h1`
  font-family: ${(props) =>
    !props.fontFamily ? fontFamily : props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  line-height: ${(props) => props.lineHeight};
  size: ${(props) => props.size};
  text-align: ${(props) => props.textAlign};
  background: ${(props) => props.background};
  @media (max-width: ${breakPoint}) {
    font-size: ${(props) => props.fontSizeMobile};
    font-weight: ${(props) => props.fontWeightMobile};
    color: ${(props) => props.colorMobile};
    margin: ${(props) => props.marginMobile};
    line-height: ${(props) => props.lineHeightMobile};
    size: ${(props) => props.sizeMobile};
    text-align: center;
  }
`;
export const Paragraph = styled.p`
  font-family: ${(props) =>
    !props.fontFamily ? fontFamily : props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  line-height: ${(props) => props.lineHeight};
  size: ${(props) => props.size};
  text-align: ${(props) => props.textAlign};
  background: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  @media (max-width: ${breakPoint}) {
    font-size: ${(props) => props.fontSizeMobile};
    font-weight: ${(props) => props.fontWeightMobile};
    color: ${(props) => props.colorMobile};
    margin: ${(props) => props.marginMobile};
    line-height: ${(props) => props.lineHeightMobile};
    size: ${(props) => props.sizeMobile};
    text-align: center;
  }
`;
export const CustumButton = styled.button`
  border: ${(props) => (!props.border ? '0px' : props.border)};
  font-family: ${(props) =>
    !props.fontFamily ? fontFamily : props.fontFamily};
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  line-height: ${(props) => props.lineHeight};
  size: ${(props) => props.size};
  border-radius: ${(props) => props.borderRadius};
  @media (max-width: ${breakPoint}) {
    font-size: ${(props) => props.fontSizeMobile};
    font-weight: ${(props) => props.fontWeightMobile};
    color: ${(props) => props.colorMobile};
    margin: ${(props) => props.marginMobile};
    line-height: ${(props) => props.lineHeightMobile};
    size: ${(props) => props.sizeMobile};
    text-align: center;
    padding: ${(props) => props.paddingMobile};
    width: 90%;
    border-radius: ${(props) => props.borderRadiusMobile};
  }
`;
export const CenterAlongX = styled.div`
  @media (max-width: ${breakPoint}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;
export const Padding = styled.div`
  padding: ${(props) => props.padding};
  box-shadow: ${(props) => props.boxShadow};
  @media (max-width: ${breakPoint}) {
    padding: ${(props) => props.paddingMobile};
  }
`;
export const Bolder = styled.span`
  font-weight: bold;
  color: ${(props) => props.color};
`;

export const MasterBox = styled.span`
  width: 0%;
  borderradius: ${(props) => props.borderRadius};
  borderright: ${(props) => props.borderRight};
  borderleft: ${(props) => props.borderLeft};
  bordertop: ${(props) => props.borderTop};
  borderbottom: ${(props) => props.borderBottom};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  margin-top: -1px;
  @media (max-width: ${breakPoint}) {
    grid-template-columns: ${(props) => props.gridTemplateColumnsMobile};
  }
`;
export const MasetrBox = styled.div`
  height: ${(props) => props.height};
  position: ${(props) => (!props.position ? 'relative' : props.position)};
  border-right: ${(props) => props.borderRight};
  border-left: ${(props) => props.borderLeft};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius};
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius};
  border-top-left-radius: ${(props) => props.borderTopLeftRadius};
  border-top-right-radius: ${(props) => props.borderTopRightRadius};
  padding: ${(props) => props.padding};
  margin-left: ${(props) => props.marginLeft};
  width: ${(props) => props.width};
  @media (max-width: 770px) {
    width: ${(props) => props.smWidth};
    margin-right: ${(props) => props.smMarginRight};;
  }
`;
export const Circle = styled.span`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid #3e57fe;
  padding: 10px;
  border-radius: 50%;
  z-index: 3;
`;

export const DottedCirclular = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  padding: 20px;
  border-radius: 50%;
  border: 2px dotted #3e57fe;
  background-color: white;
  z-index: 2;
`;

// center div
export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
`;
