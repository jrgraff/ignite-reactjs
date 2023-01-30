import { Link } from "react-scroll"
import styled from "styled-components"
import tw from "twin.macro"
import { BsArrowDownCircle } from "react-icons/bs"

const Button = styled.button`
  ${tw`
    absolute
    bottom-4
    -translate-x-1/2
    text-4xl
    transition-colors
    duration-200
  `}
  margin-left: calc(50% - 18px);
`

export function ViewMoreButton({ to, color }: { to: string; color: string }) {

  return (
    <Button>
      <Link
        to={to}
        smooth={"easeInOutQuad"}
        className={`hover:text-blue-400 ${color}`}
        duration={1000}>
        <BsArrowDownCircle />
      </Link>
    </Button>
  )
}