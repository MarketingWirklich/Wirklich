import { Box, Container } from "@mui/material";
import { StyledButton } from "../styled-components/StyledButton";
import { StyledH2 } from "../styled-components/StyledH1";
import { StyledP } from "../styled-components/StyledP";

import { AiOutlineArrowDown } from 'react-icons/ai'
import { useDrawerContext } from "../Contexts/MainContext";

type Props = {

    onClick?: () => void;
}

export function FooterBanner({onClick}: Props) {

    const { isEnglish, isPortuguese, isSpanish } = useDrawerContext()

    if (isPortuguese) {
        return (

            <Box className="bg-footerbanner mt-44">
                <Container>
                <Box>
                    <Box className="flex justify-center w-full">
                    <StyledH2 white className="text-center lg:w-[55%] 2xl:w-[65%]">
                        O que é impossível para os outros, para nós só leva mais tempo!
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
    } else if (isEnglish) {
        return (

            <Box className="bg-footerbanner mt-44">
                <Container>
                <Box>
                    <Box className="flex justify-center w-full">
                    <StyledH2 white className="text-center lg:w-[55%] 2xl:w-[65%]">
                    What is impossible for others, for us it just takes more time!
                    </StyledH2>
                    </Box>
                    <Box className="flex justify-center w-full">
                    <StyledP className="text-center lg:w-[55%] 2xl:w-[55%] mt-5 mb-12" color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Wirklich is driven by the challenge of finding creative and efficient solutions to replace the application of materials, such as metal and rubber, with plastic.
                    </StyledP>
                    </Box>
    
                    <Box className="flex justify-center w-full mb-5">
                        <AiOutlineArrowDown color="#FFF" size={30}/>
                    </Box>
    
                    <Box className="flex justify-center w-full">
                        <StyledButton onClick={onClick} to='/contato'>
                        Talk to our team
                        </StyledButton>
                    </Box>
                </Box>
                </Container>
            </Box>
        )
    } else if (isSpanish) {
        return (

            <Box className="bg-footerbanner mt-44">
                <Container>
                <Box>
                    <Box className="flex justify-center w-full">
                    <StyledH2 white className="text-center lg:w-[55%] 2xl:w-[65%]">
                    Lo que es imposible para otros, para nosotros solo lleva más tiempo!
                    </StyledH2>
                    </Box>
                    <Box className="flex justify-center w-full">
                    <StyledP className="text-center lg:w-[55%] 2xl:w-[55%] mt-5 mb-12" color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Wirklich está motivado por el desafío de encontrar soluciones creativas y eficientes para reemplazar la aplicación de materiales, como el metal y el caucho, con plástico.
                    </StyledP>
                    </Box>
    
                    <Box className="flex justify-center w-full mb-5">
                        <AiOutlineArrowDown color="#FFF" size={30}/>
                    </Box>
    
                    <Box className="flex justify-center w-full">
                        <StyledButton onClick={onClick} to='/contato'>
                        Habla con nuestro equipo
                        </StyledButton>
                    </Box>
                </Box>
                </Container>
            </Box>
        )
    } else {
        return (
            <>
            </>
        )
    }

    
}