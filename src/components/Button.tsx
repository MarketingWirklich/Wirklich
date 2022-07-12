import { StyledButton } from "../styled-components/StyledButton"


type Props = {

    to: string
    children: React.ReactNode
}

export const Button = ({to, children}: Props) => {

    <StyledButton to={to}>{children}</StyledButton>
}