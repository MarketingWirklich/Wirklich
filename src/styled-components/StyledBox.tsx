import styled, { css } from 'styled-components'

type Props = {
    center?: boolean
}


export const StyledBox = styled.div <Props>`

display: flex;
justify-content: space-between;


@media screen and (max-width: 1024px) {
    
    flex-direction: column;
    justify-content: start;
    gap: 7rem;

    ${props => props.center && css`
    align-items: flex-start;
    gap: 2rem;

`}
}

${props => props.center && css`
    align-items: center;

`}


`