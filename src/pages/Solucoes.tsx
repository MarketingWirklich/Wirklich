import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { FooterBanner } from "../components/FooterBanner";
import { Navbar } from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";
import { WhatsappButton } from "../components/WhatsappButton";
import { Container } from "../styled-components/Container";
import { StyledBox } from "../styled-components/StyledBox";
import { StyledH1, StyledH2 } from "../styled-components/StyledH1";
import { StyledP } from "../styled-components/StyledP";
import { StyledSpan } from "../styled-components/StyledSpan";

import Weight from '../Static/svg/Weight'
import Resistence from '../Static/svg/Resistence'
import Durability from '../Static/svg/Durability'
import Eco from '../Static/svg/Eco'
import Quimics from '../Static/svg/Quimics'
import Inovation from '../Static/svg/Inovation'
import { useDrawerContext } from "../Contexts/MainContext";

export function Solucoes() {

    const {scrollToTop} = useDrawerContext()

    return (
        <>
        <Navbar />
        <Box className="bg-solucao">
        <Container>
            <Box>
                <StyledH1>
                    Soluções personalizadas
                </StyledH1>
                <StyledSpan color="#FFF" fontFamily="Made Light" fontSize="1.5rem">
                    para a necessidade de cada cliente
                </StyledSpan>

                <StyledP className="mt-10 sm:w-[70%] lg:w-[45%]" color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Busca constante, através da inovação, do desenvolvimento de produtos em polímeros, para aplicações diferenciadas, com a qualidade garantida pelo sistema de gestão da qualidade, focando na satisfação dos clientes.
                </StyledP>
            </Box>

            
        </Container>
        </Box>

        <Box className="py-40">
            <Container>
            <StyledBox>
                <Box className="w-full lg:w-[55%] xl:w-[50%]">
                    <StyledH2 className="sm:w-[60%] lg:w-[90%]">
                        Temos a tecnologia correta para o seu projeto
                    </StyledH2>

                    <StyledP className="sm:w-[70%] lg:w-[70%] mt-5" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                        A injeção de plásticos de engenharia e alta performance, permite que os projetos desenvolvidos para nossos clientes tenham diversos benefícios tais como:
                    </StyledP>

                    <Box className="flex flex-wrap mt-12 gap-y-7 gap-x-20">
                        <StyledSpan className="w-full sm:w-[40%] md:w-auto flex items-center gap-4">
                            <Box>
                                <Weight />
                            </Box>
                            <StyledSpan className="w-[150px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Redução de peso
                            </StyledSpan>
                        </StyledSpan>

                        <StyledSpan className="w-full sm:w-[40%] md:w-auto flex items-center gap-4">
                            <Box>
                                <Eco />
                            </Box>
                            <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Materiais recicláveis
                            </StyledSpan>
                        </StyledSpan>

                        <StyledSpan className="w-full sm:w-[40%] md:w-auto flex items-center gap-4">
                            <Box>
                                <Resistence />
                            </Box>
                            <StyledSpan  className="w-[150px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Alta resistência
                            </StyledSpan>
                        </StyledSpan>

                        <StyledSpan className="w-full sm:w-[40%] md:w-auto flex items-center gap-4 lg:w-[40%] xl:w-auto">
                            <Box>
                                <Quimics />
                            </Box>
                            <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Eliminação de agentes químicos externos
                            </StyledSpan>
                        </StyledSpan>

                        <StyledSpan className="w-full sm:w-[40%] md:w-auto flex items-center gap-4">
                            <Box>
                                <Durability />
                            </Box>
                            <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Maior durabilidade
                            </StyledSpan>
                        </StyledSpan>
                    </Box>
                </Box>

                <Box className="flex justify-center lg:block">
                <Box className="sm:w-[600px] lg:w-[450px] xl:w-[600px] sm:h-[500px] lg:h-[400px] xl:h-[461px] card-shadow rounded-xl overflow-hidden">
                    <Box className="w-full h-[85%]">
                        <img className="w-full h-full" src="https://uploaddeimagens.com.br/images/003/948/833/full/zurich-o-que-sao-polimeros.png?1658311884" alt="" />
                    </Box>

                    <Box className="h-[15%] lg:h-[15%]">
                      <Link className="h-full" to=''>
                        <StyledSpan color="#006CC9" fontSize="1.125rem" fontFamily="Myriad SemiBold" className="flex justify-center items-center h-full">
                            Fale com nosso time de especialistas
                        </StyledSpan>
                      </Link>
                    </Box>
                </Box>
                </Box>
            </StyledBox>
            </Container>
        </Box>

        <Box>
            <Container>
                <StyledBox center>
                    <Box>
                        <StyledH2>
                            Segmentos de mercado
                        </StyledH2>
                    </Box>

                    <Box className="md:w-[60%] lg:w-[43%] xl:w-[36%]">
                        <Box className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
                        <Box>
                            <Inovation />
                        </Box>

                        <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            Buscamos através da <StyledSpan fontFamily="Myriad Bold">inovação</StyledSpan>, desenvolver e produzir produtos em polímeros para aplicações diferenciadas.
                        </StyledP>
                        </Box>
                    </Box>
                </StyledBox>

                <StyledBox id="segmentos" center className="mt-32">
                    <Box className="w-full lg:w-[40%] xl:w-[43%]">
                        <Box className="flex overflow-x-auto pb-6 lg:pb-0 styled-scrollbar lg:flex-col gap-5 sm:gap-10 lg:gap-[140px]">
                            <Box className="flex-none w-[85%] md:w-auto lg:flex-auto">
                                <img className="w-[100%] md:w-auto" src="https://uploaddeimagens.com.br/images/003/948/871/full/Interse%C3%A7%C3%A3o_31.png?1658315996" alt="" />
                            </Box>

                            <Box className="flex-none w-[85%] md:w-auto lg:flex-auto">
                                <img className="w-[100%] md:w-auto" src="https://uploaddeimagens.com.br/images/003/948/872/full/Interse%C3%A7%C3%A3o_31.png?1658316020" alt="" />
                            </Box>

                            <Box className="flex-none w-[85%] md:w-auto lg:flex-auto">
                                <img className="w-[100%] md:w-auto" src="https://uploaddeimagens.com.br/images/003/948/873/full/Interse%C3%A7%C3%A3o_31.png?1658316044" alt="" />
                            </Box>
                        </Box>
                    </Box>

                    <Box className="w-full lg:w-[50%] xl:w-[42%]">
                        <Box className="flex overflow-x-auto pb-6 lg:pb-0 styled-scrollbar lg:flex-col gap-10 lg:gap-[40px] xl:gap-[60px]">
                            <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:w-auto lg:flex-auto">
                                <StyledSpan id="ferroviario" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Ferroviário
                                </StyledSpan>

                                <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    A Wirklich tem seu sucesso reconhecido no mercado ferroviário através da produção de peças para aplicação em ferrovias, projetadas para o isolamento elétrico da linha, bem como para o amortecimento do sistema.
                                </StyledP>
                            </Box>

                            <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                <StyledSpan id="automotivo" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Automotivo
                                </StyledSpan>

                                <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    A Wirklich desenvolve produtos direcionados para o mercado automotivo, utilizando do seu setor de pesquisa e desenvolvimento para entregar para os clientes a melhor qualidade em peças em polímeros.
                                </StyledP>
                            </Box>

                            <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                <StyledSpan id="frigorifico" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Frigorifico
                                </StyledSpan>

                                <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    O Dedo Depenador de Aves é o principal produto da Wirklich no mercado avícola. É produzido com poliuretano termoplástico, o que o torna resistente à hidrólise e com uma durabilidade 3 vezes maior.
                                </StyledP>
                            </Box>

                            <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                <StyledSpan id="agro" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Agro
                                </StyledSpan>

                                <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    A Wirklich quebrou um paradigma no mercado agrícola, através da substituição de importantes peças de metal por peças de plástico de alta performance, reduzindo consideravelmente o peso das peças.
                                </StyledP>
                            </Box>

                            <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                <StyledSpan id="meio-ambiente" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Meio Ambiente
                                </StyledSpan>

                                <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    A Wirklich vem atuando diretamente em prol do meio ambiente, desenvolvendo produtos que integram ecologia e tecnologia para revitalização da qualidade de água de córregos, rios, lagos e lagoas (artificiais ou naturais).
                                </StyledP>
                            </Box>

                            <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                <StyledSpan id="energia-solar" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Energia Solar
                                </StyledSpan>

                                <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    A Wirklich está presente no mercado de energia solar através da produção de peças em polímeros utilizados na movimentação e fixação de placas fotovoltaicas.
                                </StyledP>
                            </Box>

                            <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                <StyledSpan id="servico-de-terceirizacao" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Serviço de terceirização
                                </StyledSpan>

                                <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Oferecemos o serviço exclusivo de terceirização de mão de obra, com máquinas e equipamentos de altíssima qualidade à disposição de nossos clientes.
                                </StyledP>
                            </Box>
                        </Box>
                    </Box>
                </StyledBox>
            </Container>
        </Box>

        <Box className="pt-40">
            <Container>
                <StyledBox>
                    <Box className="lg:w-[35%]">
                        <StyledH2>
                            Tecnologia de ponta em peças especiais
                        </StyledH2>

                        <StyledP className="lg:w-[90%] mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            Desde seu início, a Wirklich alia os mais sólidos princípios da tradição, com o poder transformador da inovação, para trabalhar ativamente no desenvolvimento e na produção de peças de qualidade em plástico.
                        </StyledP>
                    </Box>

                    <Box>
                        <Box className="flex flex-col sm:flex-row gap-6 h-[390px] lg:h-[350px] xl:h-[390px]">
                            <Box className="max-w-full sm:max-w-[60%] sm:w-[460px] lg:max-w-full lg:w-[340px] xl:w-[460px] h-full border border-gray-400 rounded-[20px] flex justify-center items-center">
                                PLACEHOLDER - Foto do robô
                            </Box>

                            <Box className="flex sm:flex-col justify-between">
                                <Box className="w-[48%] sm:w-[240px] sm:h-[48%] border border-gray-400 rounded-[20px] flex justify-center items-center p-10 text-center">
                                    PLACEHOLDER - Foto de produto
                                </Box>
                                <Box className="w-[48%] sm:w-[240px] sm:h-[48%] border border-gray-400 rounded-[20px] flex justify-center items-center p-10 text-center">
                                    PLACEHOLDER - Foto de produto
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </StyledBox>
            </Container>
        </Box>
        <ScrollToTop />
        <WhatsappButton />
        <FooterBanner onClick={scrollToTop}/>
        <Footer />
        </>
    )
}