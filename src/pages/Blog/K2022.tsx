import { Box, Container } from "@mui/material"
import { BlogBanner } from "../../components/BlogBanner"
import BlogSlider from "../../components/BlogSlider"
import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { StyledBox } from "../../styled-components/StyledBox"
import { StyledH2 } from "../../styled-components/StyledH1"
import { StyledP } from "../../styled-components/StyledP"
import { StyledSpan } from "../../styled-components/StyledSpan"

export const K2022 = () => {
    return (
        <div>
            <Navbar />
            <BlogBanner image='/static/img/page_blog/k2022.png'/>
            <Box className="pt-36 pb-12">
            <Container>
                <StyledBox>
                        <Box className="lg:w-[100%]">
                            <StyledH2>
                                K 2022 - A maior feira de plástico e borracha do mundo
                            </StyledH2>
                        </Box>
                </StyledBox>

                <Box className="mt-20 flex flex-col gap-8">
                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    A Feira K é a maior feira de plástico e borracha do mundo. A edição de 2022 foi realizada em Düsseldorf, Alemanha, de 19 a 26 de outubro.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    A Feira K 2022 é uma oportunidade única para atualização das mais diversas evoluções das matérias primas do segmento, conhecer as últimas tendências e inovações tecnológicas em processos e equipamentos, bem como estabelecer novos contatos comerciais.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Segundo o Diretor Executivo da Messe Düsseldorf, Erhard Wienkamp, este ano a feira contou com mais de 3000 estandes.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Lá estão todas as melhores e maiores empresas da cadeia produtiva de plásticos e borracha, apresentando as mais diversas e inovadoras soluções, desde a matéria prima, passando pelo ferramental, automação, processos produtivos, máquinas e periféricos.
                    </StyledP>

                    <StyledP color="#000" fontFamily="Myriad Regular" fontSize="1.625rem">
                    Principais assuntos
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    A feira é uma ótima oportunidade para empresas do setor se atualizarem com as últimas tendências e tecnologias.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Além disso, também é possível fazer networking, expandir os negócios e conhecer novos fornecedores. 
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Este ano, os principais assuntos abordados foram a economia circular, a digitalização e a proteção do clima, com as melhores tecnologias.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    A economia circular tem como objetivo principal otimizar o uso dos recursos naturais e minimizar o impacto ambiental.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    A digitalização está cada vez mais presente em nosso dia a dia e traz consigo inúmeras vantagens, como maior agilidade e eficiência nos processos.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Por fim, a proteção do clima é um tema cada vez mais relevante, uma vez que o aquecimento global está causando sérios problemas ambientais em todo o mundo.
                    </StyledP>

                    <StyledP color="#000" fontFamily="Myriad Regular" fontSize="1.625rem">
                    Wirklich Presente
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    A Wirklich esteve presente na K 2022, para trazer as melhores tecnologias e inovações do setor para solo brasileiro, oferecendo o melhor aos seus clientes.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Inovação é a palavra que define o setor de plástico e borracha. A cada ano, surgem novas tecnologias e materiais que tornam os produtos mais eficientes, seguros e sustentáveis.
                    </StyledP>

                </Box>
                <BlogSlider />
            </Container>
        </Box>
        <Footer />
            
        </div>
    )
}