import styled from "styled-components";
import tw from "twin.macro";

type ButtonProps = {
  props: any;
}

const Button = styled.a<ButtonProps>`
  ${tw`
    py-2
    px-3
    border border-[#E5E7EB]
    rounded-md
    text-base
    font-medium
    transition
    cursor-pointer
    hover:text-blue-400
  `}
`

export const CustomButton: React.FC<ButtonProps> = ({
  props,
  children,
}) => (
  <Button target="_blank" {...props}>
    {children}
  </Button>
)