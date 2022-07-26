import { Box, Container } from "@mui/material";
import { StyledButton } from "../styled-components/StyledButton";
import { StyledH2 } from "../styled-components/StyledH1";
import { StyledP } from "../styled-components/StyledP";

import { AiOutlineArrowDown } from 'react-icons/ai'

type Props = {

    onClick?: () => void;
}

export function FooterBanner({onClick}: Props) {

    return (

        <Box className="bg-footerbanner mt-44">
            <Container>
            <Box>
                <Box className="flex justify-center w-full">
                <StyledH2 white className="text-center lg:w-[55%] 2xl:w-[65%]">
                    O que para os outros é impossível, para nós é questão de tempo
                </StyledH2>
                </Box>
                <Box className="flex justify-center w-full">
                <StyledP className="text-center lg:w-[55%] 2xl:w-[55%] mt-5 mb-12" color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                    A Wirklich é movida pelo desafio de encontrar soluções criativas e eficientes para substituir a aplicação de materiais, como o metal e a borracha, pelo plástico.
                </StyledP>
                </Box>

                <Box className="flex justify-center w-full mb-5">
                    <AiOutlineArrowDown color="#FFF" size={30}/>
                </Box>

                <Box className="flex justify-center w-full">
                    <StyledButton onClick={onClick} to='/contato'>
                        Fale com nossa equipe
                    </StyledButton>
                </Box>
            </Box>
            </Container>
        </Box>
    )
}