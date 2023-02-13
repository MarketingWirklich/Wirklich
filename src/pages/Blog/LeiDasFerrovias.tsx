import { Box, Container } from "@mui/material"
import { BlogBanner } from "../../components/BlogBanner"
import BlogSlider from "../../components/BlogSlider"
import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { StyledBox } from "../../styled-components/StyledBox"
import { StyledH2 } from "../../styled-components/StyledH1"
import { StyledP } from "../../styled-components/StyledP"

export const LeiDasFerrovias = () => {
    return (
        <div>
            <Navbar />
            <BlogBanner image='/static/img/page_blog/lei-das-ferrovias.png'/>
            <Box className="pt-36 pb-12">
            <Container>
                <StyledBox>
                        <Box className="lg:w-[100%]">
                            <StyledH2>
                                Decreto que regulamenta a Lei das Ferrovias é assinado
                            </StyledH2>
                        </Box>
                </StyledBox>

                <Box className="mt-20 flex flex-col gap-8">
                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    O presidente Jair Bolsonaro assinou o Decreto que regulamenta a Lei das Ferrovias. O texto, que ainda será publicado no Diário Oficial da União, deve viabilizar investimentos privados na construção de ferrovias, no aproveitamento de trechos ociosos e na prestação do serviço de transporte ferroviário, segundo a Secretaria Geral da Presidência da República.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Conforme noticiou nesta quinta, 20, o Broadcast, sistema de notícias em tempo real do Grupo Estado, o ministro da Infraestrutura, Marcelo Sampaio, informou que o governo prevê assinar na próxima terça-feira, 25, novos contratos de autorizações ferroviárias – modelo de operação de ferrovia em que a iniciativa para construção do trecho parte do setor privado. Para isso, é preciso que esse decreto, que regulamenta o marco legal das ferrovias, esteja publicado, porque ele que vai permitir esse tipo de contrato.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    O governo já assinou autorizações ferroviárias no passado, baseadas na Medida Provisória editada em agosto de 2021. Quando o tema foi aprovado pelo Congresso, no entanto, algumas regras foram alteradas, demandando a nova regulamentação do Ministério.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    “A medida ora editada dispõe também sobre as condições para a habilitação e atuação do usuário investidor e do investidor associado em ferrovias exploradas sob o regime público, além de instituir o Programa de Desenvolvimento Ferroviário, que tem por objetivo articular com o setor produtivo para priorização, planejamento, supervisão e oferta de segmentos ferroviários; promover a realização de investimentos privados no setor ferroviário por meio de outorgas; e apoiar e fomentar o desenvolvimento tecnológico, a preservação da memória ferroviária, a competitividade, a inovação, a segurança, a proteção ao meio ambiente, a eficiência energética e a qualidade do serviço de transporte ferroviário”, diz a nota divulgada pela Secretaria Geral.
                    </StyledP>
                </Box>
                <Box className="mt-10">
                <StyledP color="#000" fontFamily="Myriad Regular" fontSize="1.125rem">
                Fonte: Decreto que regulamenta a Lei das Ferrovias é assinado. Info Money. 2022. Disponível em:  
                </StyledP>
                <StyledP color="text-blue-500" fontFamily="Myriad Regular" fontSize='1.125rem'>
                <a className="text-blue-500 overflow-hidden w-[100%] flex" target='_blank' href="https://www.infomoney.com.br/economia/decreto-que-regulamenta-a-lei-das-ferrovias-e-assinado/">https://www.infomoney.com.br/economia/decreto-que-regulamenta-a-lei-das-ferrovias-e-assinado/</a>
                </StyledP>
                </Box>
                <BlogSlider />
            </Container>
        </Box>
        <Footer />
            
        </div>
    )
}