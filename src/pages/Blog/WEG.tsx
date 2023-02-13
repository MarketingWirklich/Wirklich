import { Box, Container } from "@mui/material"
import { BlogBanner } from "../../components/BlogBanner"
import BlogSlider from "../../components/BlogSlider"
import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { StyledBox } from "../../styled-components/StyledBox"
import { StyledH2 } from "../../styled-components/StyledH1"
import { StyledP } from "../../styled-components/StyledP"

export const WEG = () => {
    return (
        <div>
            <Navbar />
            <BlogBanner image='/static/img/page_blog/weg.png'/>
            <Box className="pt-36 pb-12">
            <Container>
                <StyledBox>
                        <Box className="lg:w-[100%]">
                            <StyledH2>
                                WEG aponta forte crescimento do negócio de geração solar distribuída em 2022
                            </StyledH2>
                        </Box>
                </StyledBox>

                <Box className="mt-20 flex flex-col gap-8">
                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    A WEG aponta forte crescimento do negócio de geração solar distribuída (GD) no Brasil  em 2022 em relação ao ano passado. O segmento foi citado como um dos destaques do resultado financeiro do terceiro trimestre, divulgados na quarta-feira (26/10). A empresa registrou lucro líquido de R$ 1,158 bilhão, alta de 42,5% frente ao igual período de 2021.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Durante a teleconferência de resultados, realizada nesta quarta-feira (27/10), o diretor de finanças e relações com investidores da WEG, André Salgueiro, apontou que a energia solar passa por um ano positivo no mercado interno.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    “A área de GTD [geração, transmissão e distribuição] mostra crescimento em todos os segmentos, com destaque para a geração solar. Sequencialmente, a receita é estável em relação aos últimos trimestres, mas o crescimento anual é forte, quase 50%”, detalhou.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    A companhia ainda relatou avanço em GTD no mercado externo, aproveitando oportunidades na venda de transformadores para parques de geração de energia solar e eólica nos Estados Unidos. Para 2023, a empresa coloca como principal ponto de atenção as incertezas em relação ao cenário macroeconômico global.
                    </StyledP>
                </Box>
                <Box className="mt-10">
                <StyledP color="#000" fontFamily="Myriad Regular" fontSize="1.125rem">
                Fonte: CASARIN, Ricardo. WEG aponta forte crescimento do negócio de geração solar distribuída em 2022. Portal Solar. 2022. Disponível em: 
                </StyledP>
                <StyledP color="text-blue-500" fontFamily="Myriad Regular" fontSize='1.125rem'>
                <a className="text-blue-500 overflow-hidden w-[100%] flex" target='_blank' href="https://www.portalsolar.com.br/noticias/negocios/empresas/weg-aponta-forte-crescimento-do-negocio-de-geracao-solar-distribuida-em-2022">https://www.portalsolar.com.br/noticias/negocios/empresas/weg-aponta-forte-crescimento-do-negocio-de-geracao-solar-distribuida-em-2022</a>
                </StyledP>
                </Box>
                <BlogSlider />
            </Container>
        </Box>
        <Footer />
            
        </div>
    )
}