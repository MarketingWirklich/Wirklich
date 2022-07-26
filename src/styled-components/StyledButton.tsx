import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

interface Props {

    green?: boolean
    form?: boolean
}

export const StyledButton = styled(Link) <Props>`


    color: #FFF;
    background: linear-gradient(90deg, #006cc9, #0074d1, #007bd9, #0083e0, #008be8, #0093f0, #009bf7, #00a3ff);
    background-size: 100%;
    padding: 1rem 2.5rem;
    font-family: 'Myriad SemiBold';
    font-size: 1.125rem;
    border-radius: .3rem;
    transition: 0.2s ease-in-out;
    display: inline-block;

    &:hover {
        background-size: 200%;
    }

    ${props => props.green && css`

    background: linear-gradient(to right, #038a16, #029f19, #00b51b, #00cb1d, #00e21e);
    transition: 0.2s ease-in-out;
    background-size: 100%;
    
    `}



`

export const StyledButtonForm = styled(Link) <Props> `

    color: #0089E7;
    border: solid #0089E7 1px;
    font-family: 'Myriad SemiBold';
    font-size: 1.125rem;
    padding: 1rem 3.438rem;
    border-radius: 5px;
    transition: .6s;


    &:hover {

        background: #0089E7;
        color: #FFF;
    }

    ${props => props.form &&`
    
    background: linear-gradient(90deg, #006cc9, #0074d1, #007bd9, #0083e0, #008be8, #0093f0, #009bf7, #00a3ff);
    color: #FFF;
    
    `}

`


