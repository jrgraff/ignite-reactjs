import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";

import { deviceSize } from "../../constants/deviceSize";

const FooterSection = tw.footer`
  text-center
  lg:text-left
`

const Content = styled.div`
  ${tw`
    text-gray-50
    font-semibold
    sm:text-center
    p-4
    flex
    justify-center
  `}
  background-image: url('/images/top-background.jpg'),
    linear-gradient(to left, #b1d1b148, #005b9c);
  background-size: cover;
  background-position: bottom;
  background-blend-mode: overlay;
`

const Git = tw.a`
  sm:font-light
`
const Email = tw.a`
  sm:font-light
  mr-6
`

export function Footer() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile })

  return (
    <FooterSection>
      {isMobile ? (
        <Content>
          <Email href="mailto:jacksongraff@jrgraff.com">Email</Email>
          <Git href="https://github.com/jrgraff">Github</Git>
        </Content>
      ) : (
        <Content>
          Email:&nbsp;
          <Email href="mailto:jacksongraff@jrgraff.com">jacksongraff@jrgraff.com</Email>
          Github:&nbsp;
          <Git href="https://github.com/jrgraff">Jackson Graff</Git>
        </Content>
      )}
    </FooterSection>
  )
}