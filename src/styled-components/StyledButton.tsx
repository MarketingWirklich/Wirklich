import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledButton = styled(Link) `


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



`