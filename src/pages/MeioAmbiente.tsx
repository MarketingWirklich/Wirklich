import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Container } from "../styled-components/Container";
import { StyledBox } from "../styled-components/StyledBox";
import { StyledSpan } from "../styled-components/StyledSpan";

export function MeioAmbiente() {

    return (
        <>
        <Box className="bg-werde">
            <Container>
                <Box>
                    <StyledBox>
                        <Box className="werde-logo">

                        </Box>

                        <Box>
                            <Link to='/'>
                                <Box className="flex justify-center items-center">
                                    <StyledSpan>
                                        Voltar ao início
                                    </StyledSpan>
                                </Box>
                            </Link>
                        </Box>
                    </StyledBox>
                </Box>
            </Container>
        </Box>
        </>
    )
}