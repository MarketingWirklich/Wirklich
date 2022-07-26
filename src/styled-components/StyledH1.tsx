import styled, { css } from 'styled-components'

type Props = {

    white?: boolean
    semiTitle?: boolean
    semiTitleMyriad?: boolean
    fontFamily?: string
}

export const StyledH1 = styled.h1 `

    color: #FFF;
    font-size: 2.625rem;
    font-family: 'Made Light';

    @media screen and (max-width: 1024px) {
        
        font-size: 2.225rem;
    }

    @media screen and (max-width: 540px) {
        
        font-size: 1.7rem;
    }

`

export const StyledH2 = styled.h2<Props> `

    color: #002137;
    font-size: 2.25rem;
    font-family: 'Made Light';
    line-height: 1.65;
    margin-bottom: 1rem;

    ${props => props.white && css`
    color: #FFF;
    margin-bottom: 0;
    `
    }

   

`

export const StyledH3 = styled.h3<Props> `

    color: #002137;
    font-size: 1.5rem;
    font-family: ${props => props.fontFamily? props.fontFamily : 'Made Light'};
    line-height: 1.65;
    margin-bottom: 1rem;

    ${props => props.semiTitle && css`
        font-size: 1.375rem;
    `
    }

    ${props => props.semiTitleMyriad && css `
    
    font-size: 1.375rem;
    font-family: 'Myriad SemiBold';
    
    `
    
    }

   

`