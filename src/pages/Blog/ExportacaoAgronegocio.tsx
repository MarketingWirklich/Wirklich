import { Box, Container } from "@mui/material"
import { BlogBanner } from "../../components/BlogBanner"
import BlogSlider from "../../components/BlogSlider"
import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { StyledBox } from "../../styled-components/StyledBox"
import { StyledH2 } from "../../styled-components/StyledH1"
import { StyledP } from "../../styled-components/StyledP"
import { StyledSpan } from "../../styled-components/StyledSpan"

export const ExportacaoAgronegocio = () => {
    return (
        <div>
            <Navbar />
            <BlogBanner image='/static/img/page_blog/exportacao-agronegocio.png'/>
            <Box className="pt-36 pb-12">
            <Container>
                <StyledBox>
                        <Box className="lg:w-[100%]">
                            <StyledH2>
                                Exportações do agronegócio em setembro chegam a US$ 13,9 bilhões, com aumento de 38,4%
                            </StyledH2>
                        </Box>
                </StyledBox>

                <Box className="mt-20 flex flex-col gap-8">
                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    As exportações do agronegócio brasileiro chegaram a US$ 13,97 bilhões em setembro de 2022. O valor é recorde para os meses de setembro, com elevação de 38,4% em comparação com o que foi exportado no mesmo mês de 2021. 
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Além do aumento dos preços, que subiu 17,2% na comparação entre setembro de 2022 e setembro de 2021, a quantidade exportada subiu 18,1%.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    No período acumulado entre janeiro e setembro de 2022, as exportações brasileiras do agronegócio somaram US$ 122,07 bilhões, o que representou um incremento de 30,5% na comparação com o mesmo período em 2021.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Já as importações brasileiras de produtos agropecuários subiram de US$ 1,25 bilhão em setembro de 2021 para US$ 1,60 em setembro de 2022 (+27,8%). Também no caso das importações houve aumento do índice de preço e quantum, 14,3% e 11,8%, respectivamente.
                    </StyledP>

                    <StyledP color="#000" fontFamily="Myriad Regular" fontSize="1.625rem">
                    Setores
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    O complexo soja, principal setor exportador do agronegócio brasileiro, exportou US$ 3,95 bilhões em setembro de 2022 (+24,2%). Os preços elevados dos produtos do setor foram o principal fator responsável pelo incremento do valor exportado.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    As vendas externas de carnes tiveram um registro recorde para os meses de setembro, US$ 2,43 bilhões, com elevação de 11,2% nos preços médios de exportação e queda de 1,3% na quantidade exportada. 
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    O setor de cereais, farinhas e preparações teve aumento chegou a US$ 2,04 bilhões em vendas externas. O cereal responsável por essa elevação foi o milho, que teve volume recorde de 6,8 milhões de toneladas para o mês de setembro, quase 5 milhões de toneladas superior ao volume exportado em setembro de 2021.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    As vendas externas de produtos florestais foram de US$ 1,50 bilhão (+30,2%). A celulose é o principal produto de exportação do setor e registrou um valor recorde de exportação para os meses de setembro: US$ 861,52 milhões (+68,9%).
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    O complexo sucroalcooleiro ficou na quinta posição entre os principais setores exportadores do agronegócio brasileiro, com embarques de US$ 1,48 bilhão (+52,4%). O açúcar foi responsável pela maior parte do valor exportado pelo setor, atingindo US$ 1,24 bilhão em exportações (+44,9%).
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Além dos produtos agropecuários importados, houve incremento na importação de vários insumos utilizados na produção agropecuária. O Brasil adquiriu US$ 2,05 bilhões em fertilizantes em setembro de 2022. O valor foi 14,1% maior quando comparado com o mesmo mês de setembro de 2021. O volume, todavia, teve uma redução de 22,6%.
                    </StyledP>

                    <StyledP color="#000" fontFamily="Myriad Regular" fontSize="1.625rem">
                    Países
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    A Ásia continua sendo a principal região geográfica importadora dos produtos do agronegócio brasileiro, tendo adquirido US$ 6,39 bilhões em setembro de 2022. O maior país importador dos produtos do agronegócio brasileiro, a China, aumentou as importações de produtos do agronegócio brasileiro para US$ 3,69 bilhões em setembro de 2022, o que significou um crescimento de 13,1% nas aquisições na comparação com o que foi importado no mesmo mês de 2021. Dois países registraram crescimento da participação nas importações dos produtos do agronegócio acima de um ponto percentual: Irã (+2,8 pontos) e Indonésia (+1,03%).
                    </StyledP>

                </Box>
                <Box className="mt-10">
                <StyledP color="#000" fontFamily="Myriad Regular" fontSize="1.125rem">
                Fonte: Exportações do agronegócio em setembro chegam a US$ 13,9 bilhões, com aumento de 38,4%. Gov. 2022. Disponível em: 
                </StyledP>
                <StyledP color="text-blue-500" fontFamily="Myriad Regular" fontSize='1.125rem'>
                <a className="text-blue-500 overflow-hidden w-[100%] flex" target='_blank' href="https://www.gov.br/pt-br/noticias/agricultura-e-pecuaria/2022/10/exportacoes-do-agronegocio-em-setembro-chegam-a-us-13-9-bilhoes-com-aumento-de-38-4">https://www.gov.br/pt-br/noticias/agricultura-e-pecuaria/2022/10/exportacoes-do-agronegocio-em-setembro-chegam-a-us-13-9-bilhoes-com-aumento-de-38-4</a>
                </StyledP>
                </Box>
                <BlogSlider />
            </Container>
        </Box>
        <Footer />
            
        </div>
    )
}