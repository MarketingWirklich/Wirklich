import styled, { css } from 'styled-components'

type Props = {
    center?: boolean
    centerRow?: boolean
    centerRowBetween?: boolean
    centerWrap?: boolean
    reverse?: boolean
}


export const StyledBox = styled.div <Props>`

display: flex;
justify-content: space-between;

${props => props.centerRow && css`
    justify-content: space-between;
    flex-direction: row;
    gap: 2rem;

    `}

    ${props => props.centerRowBetween && css`
    justify-content: space-between;
    flex-direction: row;
    gap: 2rem;

    `}


@media screen and (max-width: 1024px) {
    
    flex-direction: column;
    justify-content: start;
    gap: 7rem;

    ${props => props.center && css`
    align-items: flex-start;
    gap: 2rem;

    `}

    ${props => props.centerRow && css`
    align-items: flex-start;
    flex-direction: row;
    gap: 2rem;

    `}

    ${props => props.centerRowBetween && css`
    justify-content: space-between;
    flex-direction: row;
    gap: 2rem;

    `}

    ${props => props.reverse && css`
    flex-direction: column-reverse;
    gap: 2rem;

    `}

    ${props => props.centerWrap && css`
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;

    `}


}

${props => props.center && css`
    align-items: center;

`}


`