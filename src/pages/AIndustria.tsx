import { Box } from "@mui/material";
import { BlogBanner } from "../components/BlogBanner";
import BlogSlider from "../components/BlogSlider";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Container } from "../styled-components/Container";
import { StyledBox } from "../styled-components/StyledBox";
import { StyledH2 } from "../styled-components/StyledH1";
import { StyledP } from "../styled-components/StyledP";
import { StyledSpan } from "../styled-components/StyledSpan";

export function AIndustria() {
    return (
        <>
        <Navbar />
        <BlogBanner/>
        <Box className="py-36">
            <Container>
                <StyledBox>
                        <Box className="lg:w-[35%]">
                            <StyledSpan className="block mb-1" color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                                31/01/2019
                            </StyledSpan>

                            <StyledH2>
                                A Indústria e o ecossistema de inovação
                            </StyledH2>

                            <StyledSpan className="block mt-10" color="#002137" fontFamily="Made Light" fontSize="1.125rem">
                                Sede da empresa instalada no Feevale Techpark cresce para abrigar robôs importados da Alemanha
                            </StyledSpan>
                        </Box>

                        <Box>
                            <img src="https://ik.imagekit.io/g3qvlxsens/revolucao-40-inspira-ampliacao-da-wirklich_MOQ0UgZjO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659104397953" alt="" />
                        </Box>
                </StyledBox>

                <Box className="mt-20 flex flex-col gap-8">
                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                        A Wirklich, empresa instalada na unidade de Campo Bom do Feevale Techpark, está ampliando a sua sede para aumentar a capacidade produtiva e se conectar com a realidade da Revolução 4.0
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                        A obra começou em novembro passado, com previsão de término em março, representando um crescimento de 400 m² na área do prédio, que passará a ter 1.590 m². A aquisição de novas máquinas provenientes da Alemanha permitirá um incremento de 20% na produção. O investimento é de R$ 2 milhões, e mais quatro funcionários serão contratados, chegando a 32. 
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Fundada em 2005, a Wirklich desenvolve produtos injetados em polímeros para aplicações diferenciadas, como substituir a aplicação de metal e borracha por plástico. A transferência para o parque tecnológico da universidade ocorreu em 2010. Conforme o diretor da Wirklich, Marcelo Sperb, isso provocou um impacto muito positivo. “A universidade direciona competências para atender a nossas demandas, e alunos de mestrado pesquisam dentro da empresa”, conta. 
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    As máquinas injetoras adquiridas agora operam com robôs, e esse era um dos principais objetivos do investimento, afirma Sperb: “Com esses equipamentos mais modernos, queremos gradativamente transformar a empresa para os desafios da Revolução 4.0”.
                    </StyledP>
                </Box>

                <StyledBox className="mt-12">
                    <Box>
                        <img src="https://ik.imagekit.io/g3qvlxsens/9f043dcc-b2c3-4dfe-9148-530d04fcf43e_HZob-STQP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659103401239" alt="" />
                    </Box>

                    <Box className="lg:w-[50%]">
                        <Box className="flex flex-col gap-8">
                        <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            O marco da primeira revolução industrial, em torno de 1780, foi a invenção do motor a vapor. Com a segunda, em torno de 1870, a utilização da energia elétrica impactou a produção. A terceira, em torno de 1970, representou a automação dos processos industriais.
                        </StyledP>

                        <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                        A quarta revolução industrial, ou Revolução 4.0, se encontra em curso e integra tecnologias que combinam componentes físicos e digitais: internet das coisas, big data, robótica avançada, computação em nuvem, impressão 3D (manufatura aditiva), manufatura híbrida, inteligência artificial, sistema de conexão máquina-máquina, sensores e atuadores, sistemas de simulação, novos materiais e infraestrutura de comunicação. Os primeiros robôs adquiridos pela Wirklich sintonizam a empresa com esses novos desafios.
                        </StyledP>
                        </Box>
                    </Box>
                </StyledBox>

                <Box className="mt-12">
                <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                Matéria divulgada em <a className="text-blue-400 hover:text-blue-700" target='_blank' href="ttps://www.feevale.br/acontece/noticias/revolucao-40-inspira-ampliacao-da-wirklich">https://www.feevale.br/acontece/noticias/revolucao-40-inspira-ampliacao-da-wirklich</a> 
                </StyledP> 
                </Box>

                <BlogSlider />
            </Container>
        </Box>
        <Footer />
        </>
    )
}