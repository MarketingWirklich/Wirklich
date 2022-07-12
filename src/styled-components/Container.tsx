import styled from 'styled-components'

export const Container = styled.div `


    margin: 0 auto;
    max-width: 1400px;
    width: 100%;

    @media screen and (max-width: 1558px) {
        
        max-width: 1280px;
    }

    @media screen and (max-width: 1280px) {
        
        max-width: 1024px;
    }

    @media screen and (max-width: 1024px) {
        
        max-width: 768px;
    }

    @media screen and (max-width: 768px) {
        
        max-width: 540px;
    }

    @media screen and (max-width: 540px) {
        
        max-width: 90%;
    }

`