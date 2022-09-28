import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { FooterBanner } from "../components/FooterBanner";
import { Navbar } from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";
import { Container } from "../styled-components/Container";
import { StyledBox } from "../styled-components/StyledBox";
import { StyledH1, StyledH2 } from "../styled-components/StyledH1";
import { StyledP } from "../styled-components/StyledP";
import { StyledSpan } from "../styled-components/StyledSpan";

import { BsLink45Deg } from 'react-icons/bs'
import { FaWeightHanging, FaRecycle } from 'react-icons/fa'
import { RiShieldCheckFill, RiOilFill } from 'react-icons/ri'
import { GiAnvilImpact } from 'react-icons/gi'
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
                        A injeção de plásticos de engenharia de alta/ultra performance, permite que os projetos desenvolvidos para nossos clientes tenham, em suas aplicações diversos benefícios, tais como:
                    </StyledP>

                    <Box className="flex justify-between mt-12">
                        <Box className="flex flex-col gap-3 lg:w-[49%] xl:w-[50%]">
                        <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4">
                            <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                <FaWeightHanging color='#C42623' size={20}/>
                            </Box>
                            <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Redução de peso
                            </StyledSpan>
                        </StyledSpan>

                        <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4">
                            <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                <RiShieldCheckFill color='#C42623' size={25}/>
                            </Box>
                            <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Maior durabilidade
                            </StyledSpan>
                        </StyledSpan>

                        <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4">
                            <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                <RiOilFill color='#C42623' size={25}/>
                            </Box>
                            <StyledSpan className="text-center sm:text-start" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Eliminação de agentes lubrificantes
                            </StyledSpan>
                        </StyledSpan>
                        </Box>

                        <Box className="flex flex-col gap-3 lg:w-[49%] xl:w-[50%]">
                        <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4 xl:w-auto">
                            <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                <BsLink45Deg color='#C42623' size={30}/>
                            </Box>
                            <StyledSpan className="text-center sm:text-start" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Alta resistência mecânica e termica
                            </StyledSpan>
                        </StyledSpan>

                        <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4">
                            <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                <FaRecycle color='#C42623' size={25}/>
                            </Box>
                            <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Materiais recicláveis
                            </StyledSpan>
                        </StyledSpan>

                        <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4">
                            <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                <GiAnvilImpact color='#C42623' size={25}/>
                            </Box>
                            <StyledSpan className="text-center sm:text-start" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Alta resistência ao impacto
                            </StyledSpan>
                        </StyledSpan>
                        </Box>
                    </Box>
                </Box>

                <Box className="flex justify-center lg:block">
                <Box className="sm:w-[600px] lg:w-[450px] xl:w-[600px] sm:h-[500px] lg:h-[400px] xl:h-[461px] card-shadow rounded-xl overflow-hidden">
                    <Box className="w-full h-[85%]">
                        <img className="w-full h-full" src="/static/img/page_solucoes/polimeros.gif" alt="" />
                    </Box>

                    <Box className="h-[15%] lg:h-[15%]">
                      <Link onClick={scrollToTop} className="h-full" to='/contato'>
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
                                <img className="w-[100%] md:w-auto" src="/static/img/page_solucoes/trilhos.png" alt="" />
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
                                    A Wirklich tem seu sucesso reconhecido no mercado ferroviário nacional e internacional através da produção de peças para as mais diversas aplicações.
                                </StyledP>
                            </Box>

                            <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                <StyledSpan id="frigorifico" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Frigorífico
                                </StyledSpan>

                                <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Produzimos e desenvolvemos diversos itens para o segmento, principalmente na movimentação de carcaças de aves, suínos e bovinos.
                                </StyledP>
                            </Box>

                            <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                <StyledSpan id="agro" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Agro
                                </StyledSpan>

                                <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    A Wirklich quebrou um paradigma no mercado agrícola, através da substituição de importantes peças de metal por peças de plástico de alta performance, reduzindo consideravelmente o peso das peças e mantendo as propriedades mecânicas de resistência necessárias.
                                </StyledP>
                            </Box>

                            <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                <StyledSpan id="meio-ambiente" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Meio Ambiente
                                </StyledSpan>

                                <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    A Wirklich vem atuando diretamente em prol do meio ambiente, desenvolvendo produtos que integram ecologia e tecnologia para revitalização da qualidade de água de córregos, rios, lagos e lagoas (artificiais ou naturais), bem como no tratamento de efluentes. Através de produto próprio patenteado <Link className="text-green-700" to='/meio-ambiente'>WERDE PHYTO</Link>, com aplicação nacional e internacional
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
                                    Oferecemos o serviço customizado de terceirização de produção através de um parque de máquinas e equipamentos de altíssima qualidade e precisão à disposição dos nossos clientes.
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
                            Desde seu início, a Wirklich alia princípios com o poder transformador da inovação para trabalhar ativamente no desenvolvimento e na produção de peças de qualidade em polimeros.
                        </StyledP>
                    </Box>

                    <Box>
                        <Box className="flex flex-col sm:flex-row gap-6 h-[390px] lg:h-[350px] xl:h-[390px]">
                            <Box className="max-w-full sm:max-w-[60%] sm:w-[460px] lg:max-w-full lg:w-[340px] xl:w-[460px] h-full border border-gray-400 rounded-[20px] flex justify-center items-center overflow-hidden">
                                <img src="/static/img/page_solucoes/passarela.gif" alt="" className="w-full h-full object-cover" />
                            </Box>

                            <Box className="flex sm:flex-col justify-between">
                                <Box className="w-[48%] sm:w-[240px] sm:h-[190px] rounded-[20px] overflow-hidden">
                                    <img className="w-full h-full flex-none" src="/static/img/page_solucoes/produto_werde.png" alt="" />
                                </Box>
                                <Box className="w-[48%] sm:w-[240px] sm:h-[48%] rounded-[20px] overflow-hidden">
                                    <img className="w-full h-full" src="/static/img/page_home/gif_peca.gif" alt="" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </StyledBox>
            </Container>
        </Box>
        <ScrollToTop />
        <FooterBanner onClick={scrollToTop}/>
        <Footer />
        </>
    )
}