import styled from 'styled-components'


export const StyledBox = styled.div `

display: flex;
justify-content: space-between;


@media screen and (max-width: 1024px) {
    
    flex-direction: column;
    justify-content: start;
    gap: 7rem;
}


`