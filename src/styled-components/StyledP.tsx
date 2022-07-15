import styled from 'styled-components'

type Props = {

    color: string
    fontFamily?: string | 'Myriad Regular'
    fontSize?: string
}

export const StyledP = styled.p<Props> `

    color: ${props => props.color };
    font-family: ${props => props.fontFamily};
    font-size: ${props => props.fontSize? props.fontSize : '1.125rem'};
    line-height: 1.625;

    @media screen and (max-width: 540px) {
        
        font-size: 1rem;
    }

`