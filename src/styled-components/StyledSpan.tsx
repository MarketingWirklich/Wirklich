import styled from 'styled-components'

type Props = {

    fontFamily?: string
    color?: string
    fontSize?: string
    display?: string

}

export const StyledSpan = styled.span<Props> `

    display: ${props => props.display};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};


    

`