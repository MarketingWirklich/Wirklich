import { Box } from "@mui/material";
import { Container } from "../styled-components/Container";
import { StyledBox } from "../styled-components/StyledBox";
import { StyledH1 } from "../styled-components/StyledH1";
import { StyledSpan } from "../styled-components/StyledSpan";

type IBlogBanner = {

    title: string
}

export function BlogBanner({title}: IBlogBanner) {
    return (
        <>
        <Box className="bg-blog">
            <Container className="h-full">
                <Box className="flex items-center h-full">
                    <StyledH1 className="lg:w-[40%]">
                        {title}
                    </StyledH1>
                </Box>
            </Container>
        </Box>
        </>
    )
}