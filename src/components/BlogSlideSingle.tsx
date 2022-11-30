import { Box } from "@mui/system"
import { Link } from "react-router-dom"
import { StyledH3 } from "../styled-components/StyledH1"
import { StyledP } from "../styled-components/StyledP"
import { StyledSpan } from "../styled-components/StyledSpan"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useDrawerContext } from "../Contexts/MainContext"

export const BlogSlideSingle = ({ref, image, title, description, link}: any) => {

    const { scrollToTop } = useDrawerContext()

    return (
        <Box ref={ref} className="slide-single flex flex-col shadow-card w-full h-[490px] sm:h-[560px] rounded-xl duration-700">
                    <Box className="w-full">
                        <img className="w-full" src={image} alt="" />
                    </Box>
                    <Box className="relative px-7">
                        <StyledSpan className="article-gradient py-1 px-6 rounded-full absolute -bottom-4" color="#FFF" fontFamily="Myriad SemiBold" fontSize="1rem">
                            Artigo
                        </StyledSpan>
                    </Box>
                    <Box className="px-7 mt-10 h-[80px]">
                        <StyledH3 semiTitleMyriad className="w-[85%] class-lines">
                            {title}
                        </StyledH3>
                    </Box>

                    <Box className="px-7">
                        <StyledP color="" fontFamily="" fontSize='1rem' className="class-lines-2">
                            {description}
                        </StyledP>
                    </Box>

                    <Box className="px-7 mt-10">
                        <Link to={link} onClick={scrollToTop}>
                            <StyledSpan className="flex items-center gap-2 group" color="#0089E7" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                Ler mais
                                <AiOutlineArrowRight className="mt-[2px] duration-300 group-hover"/>
                            </StyledSpan>
                        </Link>
                    </Box>
                </Box>
    )
}