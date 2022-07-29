import { Box } from "@mui/material"
import { Link } from "react-router-dom"
import { StyledBox } from "../styled-components/StyledBox"
import { StyledH2, StyledH3 } from "../styled-components/StyledH1"
import { StyledP } from "../styled-components/StyledP"
import { StyledSpan } from "../styled-components/StyledSpan"

import { AiOutlineArrowRight } from 'react-icons/ai'
import ArrowSlide from "../Static/svg/ArrowSlide";
import { useRef } from "react"

function BlogSlider() {

   
    const carousel = useRef<any>()
    const slide = useRef<any>()
    const margin = 40

    const slidePrev = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      carousel.current.scrollLeft -= slide.current.offsetWidth + margin
  }
 
  const slideNext = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      carousel.current.scrollLeft += slide.current.offsetWidth + margin
  }


    return (

    <>
    <StyledBox center className="pt-52 pb-16" id="noticias">
                <Box>
                    <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                        BLOG
                    </StyledSpan>

                    <StyledH2>
                        Posts mais recentes
                    </StyledH2>
                </Box>

                <Box className="flex w-full lg:w-auto justify-between lg:justify-start items-center lg:gap-3">
                    <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                        Ver outros <StyledSpan fontFamily="Myriad Bold">artigos</StyledSpan>
                    </StyledSpan>
                    <Box className="flex gap-2">
                        <ArrowSlide onClick={slidePrev} className="cursor-pointer stroke-[#0089e7]"/>
                        <ArrowSlide onClick={slideNext} className="rotate-180 cursor-pointer stroke-[#0089e7]"/>
                    </Box>
                </Box>
            </StyledBox>

        <Box className="pb-5">
            <Box ref={carousel} className="flex carousel w-full overflow-x-auto scroll-bar-off duration-700 py-10 px-2">
                <Box ref={slide} className="slide-single flex flex-col flex-none shadow-card w-[330px] sm:w-[27.1rem] h-[490px] sm:h-[560px] rounded-xl mr-[20px] duration-700">
                    <Box className="w-full">
                        <img className="w-full" src="https://uploaddeimagens.com.br/images/003/943/291/full/Interse%C3%A7%C3%A3o_6.png?1657889948" alt="" />
                    </Box>
                    <Box className="relative px-7">
                        <StyledSpan className="article-gradient py-1 px-6 rounded-full absolute -bottom-4" color="#FFF" fontFamily="Myriad SemiBold" fontSize="1rem">
                            Artigo
                        </StyledSpan>
                    </Box>
                    <Box className="px-7 mt-10">
                        <StyledH3 semiTitleMyriad className="w-[85%]">
                            Revolução 4.0 inspira ampliação da Wirklich
                        </StyledH3>
                    </Box>

                    <Box className="px-7">
                        <StyledP color="" fontFamily="" fontSize='1rem'>
                            A Wirklich, empresa instalada na unidade de Campo Bom do Feevale Techpark, está ampliando a sua sede para aumentar a capacidade produtiva e se conectar
                        </StyledP>
                    </Box>

                    <Box className="px-7 mt-10">
                        <Link to='/blog/revolucao-40-inspira-ampliacao-da-wirklich'>
                            <StyledSpan className="flex items-center gap-2 group" color="#0089E7" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                Ler mais
                                <AiOutlineArrowRight className="mt-[2px] duration-300 group-hover"/>
                            </StyledSpan>
                        </Link>
                    </Box>
                </Box>

                <Box className="slide-single flex flex-col flex-none shadow-card  w-[330px] sm:w-[27.1rem]  h-[490px] sm:h-[560px] rounded-xl mx-[20px]">
                <Box className="w-full">
                        <img className="w-full" src="https://uploaddeimagens.com.br/images/003/943/406/full/Interse%C3%A7%C3%A3o_8.png?1657894726" alt="" /> 
                    </Box>
                    <Box className="relative px-7">
                        <StyledSpan className="article-gradient py-1 px-6 rounded-full absolute -bottom-4" color="#FFF" fontFamily="Myriad SemiBold" fontSize="1rem">
                            Artigo
                        </StyledSpan>
                    </Box>
                    <Box className="px-7 mt-10">
                        <StyledH3 semiTitleMyriad className="w-[85%]">
                            A indústria e o ecossistema de inovação
                        </StyledH3>
                    </Box>

                    <Box className="px-7">
                        <StyledP color="" fontFamily="" fontSize='1rem'>
                            No dia 22 de maio, o Centro Sinplast de Inovação e Governança (CSIG) realizou uma visita técnica à indústria Wirklich, especializada em produtos 
                        </StyledP>
                    </Box>

                    <Box className="px-7 mt-10">
                        <Link to=''>
                            <StyledSpan className="flex items-center gap-2 group" color="#0089E7" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                Ler mais
                                <AiOutlineArrowRight className="mt-[2px] duration-300 group-hover"/>
                            </StyledSpan>
                        </Link>
                    </Box>
                </Box>

                <Box className="slide-single flex flex-col flex-none shadow-card  w-[330px] sm:w-[27.1rem]  h-[490px] sm:h-[560px] rounded-xl mx-[20px]">
                <Box className="w-full">
                        <img className="w-full" src="https://uploaddeimagens.com.br/images/003/943/404/full/Interse%C3%A7%C3%A3o_7.png?1657894695" alt="" />
                    </Box>
                    <Box className="relative px-7">
                        <StyledSpan className="article-gradient py-1 px-6 rounded-full absolute -bottom-4" color="#FFF" fontFamily="Myriad SemiBold" fontSize="1rem">
                            Artigo
                        </StyledSpan>
                    </Box>
                    <Box className="px-7 mt-10">
                        <StyledH3 semiTitleMyriad className="w-[85%]">
                            Certificado empresas inovadoras - Campo Bom
                        </StyledH3>
                    </Box>

                    <Box className="px-7">
                        <StyledP color="" fontFamily="" fontSize='1rem'>
                            A WIRKLICH foi reconhecida pela Prefeitura Municipal de Campo Bom como empresa destaque na área de Tecnologia em 2017.
                        </StyledP>
                    </Box>

                    <Box className="px-7 mt-10">
                        <Link to=''>
                            <StyledSpan className="flex items-center gap-2 group" color="#0089E7" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                Ler mais
                                <AiOutlineArrowRight className="mt-[2px] duration-300 group-hover"/>
                            </StyledSpan>
                        </Link>
                    </Box>
                </Box>

                <Box className="slide-single flex flex-col flex-none shadow-card  w-[330px] sm:w-[27.1rem]  h-[490px] sm:h-[560px] rounded-xl mx-[20px]">
                <Box className="w-full">
                        <img className="w-full" src="https://uploaddeimagens.com.br/images/003/943/502/full/Grupo_3335.png?1657898763" alt="" />
                    </Box>
                    <Box className="relative px-7">
                        <StyledSpan className="article-gradient py-1 px-6 rounded-full absolute -bottom-4" color="#FFF" fontFamily="Myriad SemiBold" fontSize="1rem">
                            Artigo
                        </StyledSpan>
                    </Box>
                    <Box className="px-7 mt-10">
                        <StyledH3 semiTitleMyriad className="w-[85%]">
                            Informativo do Sinplast
                        </StyledH3>
                    </Box>

                    <Box className="px-7">
                        <StyledP color="" fontFamily="" fontSize='1rem'>
                            O diretor da Wirklich, Marcelo Sperb, agora é membro da Gestão do SinplastRS para o período 2015-2018, onde coordena o Comitê Sinplast para o Segmento de Injeção.
                        </StyledP>
                    </Box>

                    <Box className="px-7 mt-10">
                        <Link to=''>
                            <StyledSpan className="flex items-center gap-2 group" color="#0089E7" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                Ler mais
                                <AiOutlineArrowRight className="mt-[2px] duration-300 group-hover"/>
                            </StyledSpan>
                        </Link>
                    </Box>
                </Box>

                <Box className="slide-single flex flex-col flex-none shadow-card  w-[330px] sm:w-[27.1rem]  h-[490px] sm:h-[560px] rounded-xl ml-[20px]">
                <Box className="w-full">
                        <img className="w-full" src="https://uploaddeimagens.com.br/images/003/943/507/full/Ret%C3%A2ngulo_776.png?1657899021" alt="" />
                    </Box>
                    <Box className="relative px-7">
                        <StyledSpan className="article-gradient py-1 px-6 rounded-full absolute -bottom-4" color="#FFF" fontFamily="Myriad SemiBold" fontSize="1rem">
                            Artigo
                        </StyledSpan>
                    </Box>
                    <Box className="px-7 mt-10">
                        <StyledH3 semiTitleMyriad className="w-[85%]">
                            Selo Braskem Labs
                        </StyledH3>
                    </Box>

                    <Box className="px-7">
                        <StyledP color="" fontFamily="" fontSize='1rem'>
                            A Wirklich recebeu, esse mês, o selo de empresa participante do Braskem Labs 2015, pela apresentação do projeto Werde Phyto
                        </StyledP>
                    </Box>

                    <Box className="px-7 mt-10">
                        <Link to=''>
                            <StyledSpan className="flex items-center gap-2 group" color="#0089E7" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                Ler mais
                                <AiOutlineArrowRight className="mt-[2px] duration-300 group-hover"/>
                            </StyledSpan>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>

    </>
    )
}

export default BlogSlider

