import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { FooterBanner } from "../components/FooterBanner";
import Navbar from "../components/Navbar";
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

    const {scrollToTop, isEnglish, isPortuguese, isSpanish} = useDrawerContext()

    if (isPortuguese) {
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
                                        <img className="w-full h-full" src="/static/img/page_home/gifrobo.gif" alt="" />
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
    } else if (isEnglish) {
        return (
            <>
            <Navbar />
            <Box className="bg-solucao">
            <Container>
                <Box>
                    <StyledH1>
                    Customized Solutions
                    </StyledH1>
                    <StyledSpan color="#FFF" fontFamily="Made Light" fontSize="1.5rem">
                    for every customer's need
                    </StyledSpan>
                </Box>
    
                
            </Container>
            </Box>
    
            <Box className="py-40">
                <Container>
                <StyledBox>
                    <Box className="w-full lg:w-[55%] xl:w-[50%]">
                        <StyledH2 className="sm:w-[60%] lg:w-[90%]">
                        We have the right technology for your project
                        </StyledH2>
    
                        <StyledP className="sm:w-[70%] lg:w-[70%] mt-5" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                        The injection of high/ultra performance engineering plastics allows the projects developed for our customers to have, in their applications, several benefits, such as:
                        </StyledP>
    
                        <Box className="flex justify-between mt-12">
                            <Box className="flex flex-col gap-3 lg:w-[49%] xl:w-[50%]">
                            <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4">
                                <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                    <FaWeightHanging color='#C42623' size={20}/>
                                </Box>
                                <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Weight reduction
                                </StyledSpan>
                            </StyledSpan>
    
                            <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4">
                                <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                    <RiShieldCheckFill color='#C42623' size={25}/>
                                </Box>
                                <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Greater durability
                                </StyledSpan>
                            </StyledSpan>
    
                            <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4">
                                <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                    <RiOilFill color='#C42623' size={25}/>
                                </Box>
                                <StyledSpan className="text-center sm:text-start" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Elimination of lubricating agents
                                </StyledSpan>
                            </StyledSpan>
                            </Box>
    
                            <Box className="flex flex-col gap-3 lg:w-[49%] xl:w-[50%]">
                            <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4 xl:w-auto">
                                <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                    <BsLink45Deg color='#C42623' size={30}/>
                                </Box>
                                <StyledSpan className="text-center sm:text-start" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                High mechanical and thermal resistance
                                </StyledSpan>
                            </StyledSpan>
    
                            <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4">
                                <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                    <FaRecycle color='#C42623' size={25}/>
                                </Box>
                                <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Recyclable materials
                                </StyledSpan>
                            </StyledSpan>
    
                            <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4">
                                <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                    <GiAnvilImpact color='#C42623' size={25}/>
                                </Box>
                                <StyledSpan className="text-center sm:text-start" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                High impact resistance
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
                            Talk to our team of experts
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
                            Market segments
                            </StyledH2>
                        </Box>
    
                        <Box className="md:w-[60%] lg:w-[43%] xl:w-[36%]">
                            <Box className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
                            <Box>
                                <Inovation />
                            </Box>
    
                            <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            Through <StyledSpan fontFamily="Myriad Bold">innovation</StyledSpan>, we seek to develop and produce polymer products for different applications.
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
                                    Rail
                                    </StyledSpan>
    
                                    <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Wirklich has recognized its success in the national and international railway market through the production of parts for the most diverse applications.
                                    </StyledP>
                                </Box>
    
                                <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                    <StyledSpan id="frigorifico" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Fridge
                                    </StyledSpan>
    
                                    <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    We produce and develop several items for the segment, mainly in the handling of poultry, pork and cattle carcasses.
                                    </StyledP>
                                </Box>
    
                                <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                    <StyledSpan id="agro" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                        Agro
                                    </StyledSpan>
    
                                    <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Wirklich has broken a paradigm in the agricultural market, by replacing important metal parts with high-performance plastic parts, considerably reducing the weight of the parts and maintaining the necessary mechanical resistance properties.
                                    </StyledP>
                                </Box>
    
                                <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                    <StyledSpan id="meio-ambiente" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Environment
                                    </StyledSpan>
    
                                    <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Wirklich has been acting directly in favor of the environment, developing products that integrate ecology and technology to revitalize the water quality of streams, rivers, lakes and ponds (artificial or natural), as well as in the treatment of effluents. Through its own patented product <Link className="text-green-700" to='/meio-environment'>WERDE PHYTO</Link>, with national and international application
                                    </StyledP>
                                </Box>
    
                                <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                    <StyledSpan id="energia-solar" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Solar energy
                                    </StyledSpan>
    
                                    <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Wirklich is present in the solar energy market through the production of parts in polymers used in moving and fixing photovoltaic panels.
                                    </StyledP>
                                </Box>
    
                                <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                    <StyledSpan id="servico-de-terceirizacao" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Outsourcing service
                                    </StyledSpan>
    
                                    <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    We offer a customized production outsourcing service through a park of machines and equipment of the highest quality and precision available to our customers.
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
                            State-of-the-art technology in special parts
                            </StyledH2>
    
                            <StyledP className="lg:w-[90%] mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            Since its inception, Wirklich has combined principles with the transforming power of innovation to work actively in the development and production of quality parts in polymers.
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
                                        <img className="w-full h-full" src="/static/img/page_home/gifrobo.gif" alt="" />
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
    } else if (isSpanish) {
        return (
            <>
            <Navbar />
            <Box className="bg-solucao">
            <Container>
                <Box>
                    <StyledH1>
                    Soluciones personalizadas
                    </StyledH1>
                    <StyledSpan color="#FFF" fontFamily="Made Light" fontSize="1.5rem">
                    para la necesidad de cada cliente
                    </StyledSpan>
                </Box>
    
                
            </Container>
            </Box>
    
            <Box className="py-40">
                <Container>
                <StyledBox>
                    <Box className="w-full lg:w-[55%] xl:w-[50%]">
                        <StyledH2 className="sm:w-[60%] lg:w-[90%]">
                        Tenemos la tecnología adecuada para tu proyecto
                        </StyledH2>
    
                        <StyledP className="sm:w-[70%] lg:w-[70%] mt-5" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                        La inyección de plásticos de ingeniería de alto/ultra desempeño permite que los proyectos desarrollados para nuestros clientes tengan, en sus aplicaciones, diversos beneficios, tales como:
                        </StyledP>
    
                        <Box className="flex justify-between mt-12">
                            <Box className="flex flex-col gap-3 lg:w-[49%] xl:w-[50%]">
                            <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4">
                                <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                    <FaWeightHanging color='#C42623' size={20}/>
                                </Box>
                                <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Reducción de peso
                                </StyledSpan>
                            </StyledSpan>
    
                            <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4">
                                <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                    <RiShieldCheckFill color='#C42623' size={25}/>
                                </Box>
                                <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Mayor durabilidad
                                </StyledSpan>
                            </StyledSpan>
    
                            <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4">
                                <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                    <RiOilFill color='#C42623' size={25}/>
                                </Box>
                                <StyledSpan className="text-center sm:text-start" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Eliminación de agentes lubricantes
                                </StyledSpan>
                            </StyledSpan>
                            </Box>
    
                            <Box className="flex flex-col gap-3 lg:w-[49%] xl:w-[50%]">
                            <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4 xl:w-auto">
                                <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                    <BsLink45Deg color='#C42623' size={30}/>
                                </Box>
                                <StyledSpan className="text-center sm:text-start" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Alta resistencia mecánica y térmica
                                </StyledSpan>
                            </StyledSpan>
    
                            <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4">
                                <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                    <FaRecycle color='#C42623' size={25}/>
                                </Box>
                                <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Materiales reciclables
                                </StyledSpan>
                            </StyledSpan>
    
                            <StyledSpan className="w-full h-[102px] sm:h-auto md:w-auto flex flex-col sm:flex-row items-center gap-4">
                                <Box className='border border-[#EEC3C2] w-[43px] h-[43px] rounded-lg flex justify-center items-center'>
                                    <GiAnvilImpact color='#C42623' size={25}/>
                                </Box>
                                <StyledSpan className="text-center sm:text-start" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Alta resistencia al impacto
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
                            Habla con nuestro equipo de expertos
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
                            A través de la <StyledSpan fontFamily="Myriad Bold">innovación</StyledSpan>, buscamos desarrollar y producir productos poliméricos para diferentes aplicaciones.
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
                                    Carril
                                    </StyledSpan>
    
                                    <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Wirklich ha reconocido su éxito en el mercado ferroviario nacional e internacional a través de la producción de piezas para las más diversas aplicaciones.
                                    </StyledP>
                                </Box>
    
                                <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                    <StyledSpan id="frigorifico" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Refrigerador
                                    </StyledSpan>
    
                                    <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Producimos y desarrollamos varios artículos para el segmento, principalmente en el manejo de canales de aves, cerdos y bovinos.
                                    </StyledP>
                                </Box>
    
                                <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                    <StyledSpan id="agro" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                        Agro
                                    </StyledSpan>
    
                                    <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Wirklich ha roto un paradigma en el mercado agrícola, al sustituir importantes piezas metálicas por piezas de plástico de altas prestaciones, reduciendo considerablemente el peso de las piezas y manteniendo las propiedades de resistencia mecánica necesarias.
                                    </StyledP>
                                </Box>
    
                                <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                    <StyledSpan id="meio-ambiente" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Medio ambiente
                                    </StyledSpan>
    
                                    <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Wirklich viene actuando directamente a favor del medio ambiente, desarrollando productos que integran ecología y tecnología para revitalizar la calidad del agua de arroyos, ríos, lagos y estanques (artificiales o naturales), así como en el tratamiento de efluentes. A través de su propio producto patentado <Link className="text-green-700" to='/meio-environment'>WERDE PHYTO</Link>, con aplicación nacional e internacional
                                    </StyledP>
                                </Box>
    
                                <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                    <StyledSpan id="energia-solar" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Energía solar
                                    </StyledSpan>
    
                                    <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Wirklich está presente en el mercado de la energía solar a través de la producción de piezas en polímeros utilizados en el movimiento y fijación de paneles fotovoltaicos.
                                    </StyledP>
                                </Box>
    
                                <Box className="flex-none w-[100%] shadow-lg lg:shadow-none md:w-[40%] lg:w-auto border border-gray-400 p-5 lg:p-0 rounded-xl lg:rounded-none lg:border-none lg:flex-auto">
                                    <StyledSpan id="servico-de-terceirizacao" color="#002137" fontFamily="Made Light" fontSize="1.375rem">
                                    Servicio de externalización
                                    </StyledSpan>
    
                                    <StyledP className="mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Ofrecemos un servicio personalizado de subcontratación de la producción a través de un parque de máquinas y equipos de la más alta calidad y precisión a disposición de nuestros clientes.
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
                            Tecnología de punta en partes especiales
                            </StyledH2>
    
                            <StyledP className="lg:w-[90%] mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            Desde sus inicios, Wirklich ha combinado principios con el poder transformador de la innovación para trabajar activamente en el desarrollo y producción de piezas de calidad en polímeros.
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
                                        <img className="w-full h-full" src="/static/img/page_home/gifrobo.gif" alt="" />
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
    } else {
        return (
            <>
            </>
        )
    }


}