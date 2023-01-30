import styled from "styled-components";
import tw from "twin.macro";

const LogoContainer = styled.div`
  ${tw`
    font-family["Qwitcher Grypen"]
    font-black
    text-4xl
    sm:text-5xl
    text-white
  `}
`

export function Logo() {
  return (
    <LogoContainer>
      <a href="/">jrgraff</a>
    </LogoContainer>
  )
}