import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { slide as Menu } from "react-burger-menu";

import { Logo } from "../Logo";
import { deviceSize } from "../../constants/deviceSize";

import { styles } from "./menuStyles";

const Container = styled.div`
  width: 70%;
  padding-left: 50%;
  ${tw`
    flex
    h-20
    pl-0
    sm:pl-6
    pr-6
    pt-4
    sm:border-b-2
    sm:border-gray-200
    sm:border-opacity-50
    items-center
    self-center
  `}
`

const NavItems = tw.ul`
  list-none
  w-full
  h-auto
  lg:h-full
  lg:ml-auto
  flex
  justify-end
  items-center
`

const NavItem = tw.li`
  lg:mr-8
  sm:mr-4
  flex
  items-center
  justify-center
  min-h-full
  text-white
  cursor-pointer
  font-medium
  text-lg
  sm:text-base
  transition-colors
  transition-duration[300ms]
  hover:text-gray-200
  box-content
  mb-2
  lg:mb-0
`

export function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile })

  const navItems = (
    <NavItems>
      <NavItem>
        <Link to="Start" smooth={"easeInOutQuad"} duration={800}>Início</Link>
      </NavItem>
      <NavItem>
        <Link to="About" smooth={"easeInOutQuad"} duration={800}>Sobre</Link>
      </NavItem>
      <NavItem>
        <Link to="Projects" smooth={"easeInOutQuad"} duration={800}>Projetos</Link>
      </NavItem>
    </NavItems>
  )

  return (
    <Container>
      <Logo />
      {isMobile ? (
        <Menu right styles={styles}>
          {navItems}
        </Menu>
      ) : navItems}
    </Container>
  )
}