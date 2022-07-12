import styled from 'styled-components'

type Props = {

    color: string
    fontFamily?: string | 'Myriad Regular'
}

export const StyledP = styled.p<Props> `

    color: ${props => props.color};
    font-family: ${props => props.fontFamily};
    font-size: 1.125rem;

    @media screen and (max-width: 540px) {
        
        font-size: 1rem;
    }

`