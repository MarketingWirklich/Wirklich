import styled, { css } from 'styled-components'

type Props = {
    center?: boolean
}


export const StyledInput = styled.input<Props>`

    width: 18.75rem;
    border-bottom: 1px #707070 solid;
    font-size: 1rem;
    font-family: 'Myriad Regular';

    @media screen and (max-width: 768px) {

        width: 13rem;
    }

    @media screen and (max-width: 640px) {

        width: 20rem;
    }



`