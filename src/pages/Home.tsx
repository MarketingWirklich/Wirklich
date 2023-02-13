import { useEffect, useRef, useState } from "react";

import { Box, Modal, Skeleton } from "@mui/material";
import Navbar from "../components/Navbar";
import { Container } from "../styled-components/Container";
import { StyledH1, StyledH2, StyledH3 } from "../styled-components/StyledH1";
import { StyledP } from "../styled-components/StyledP";
import { StyledSpan } from "../styled-components/StyledSpan";
import { StyledButton, StyledButtonForm } from "../styled-components/StyledButton";
import { StyledBox } from "../styled-components/StyledBox";
import { Link } from "react-router-dom";
import { StyledInput } from "../styled-components/StyledInput";
import { FooterBanner } from "../components/FooterBanner";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
 
import { Player, DefaultUi, Youtube, Video } from '@vime/react';
import '@vime/core/themes/default.css';

{/* Import de SVG's */}
import ExperienceProfessional from "../Static/svg/ExperienceProfessional";
import QualityPrecision from "../Static/svg/QualityPrecision";
import Solutions from "../Static/svg/Solutions";
import LightBulb from "../Static/svg/LightBulb";
import Leaf from "../Static/svg/Leaf";
import Check from "../Static/svg/Check";
import LongArrow from "../Static/svg/LongArrow";
import ArrowSlide from "../Static/svg/ArrowSlide";
import YoutubePlayer from "../Static/svg/YoutubePlayer";
import SlideArrow from "../Static/svg/SlideArrow";

import { BsLink45Deg } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { FaWeightHanging, FaRecycle } from 'react-icons/fa'
import { RiShieldCheckFill, RiOilFill } from 'react-icons/ri'
import { GiAnvilImpact } from 'react-icons/gi'



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper";
import { useDrawerContext } from "../Contexts/MainContext";
import BlogSlider from "../components/BlogSlider";

const baseImageUrlHome = "../static/img/page_home/"

export default function Home() {

    
    const {
        scrollToTop, 
        moveToAgro,
        moveToFerroviario,
        moveToAutomotivo,
        moveToFrigorifico,
        moveToMeioAmbiente,
        moveToEnergiaSolar,
        moveToServicoDeTerceirizacao,
        isEnglish,
        isPortuguese,
        isSpanish,
    
    } = useDrawerContext()

    const [modalOpen, setModalOpen] = useState(false)
    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const [ isLoading, setIsLoading ] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [])
   

    const carousel = useRef<any>()
    const carousel2 = useRef<any>()
    const slide = useRef<any>()
    const slide2 = useRef<any>()
    const margin = 40


    const slidePrev = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        carousel.current.scrollLeft -= slide.current.offsetWidth + margin
    }
   
    const slideNext = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        carousel.current.scrollLeft += slide.current.offsetWidth + margin
    }

    const slidePrev2 = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        carousel2.current.scrollLeft -= slide2.current.offsetWidth + margin
    }
   
    const slideNext2 = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        carousel2.current.scrollLeft += slide2.current.offsetWidth + margin
    }



   

    if (isPortuguese) {
        return (
                <div>
                <Navbar />
                <Swiper navigation={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                  }}
                pagination={true}
                  
                modules={[Navigation, Autoplay, Pagination]} className="mySwiper">
                <SwiperSlide className="w-full slide-1 h-[550px] sm:h-[700px]">
                    <Container className="h-full">
                        <Box className="flex flex-col justify-center h-full">
                        <Box className="lg:w-[55%] xl:w-[45%] mb-10">
                            <StyledH1>
                                Soluções tecnológicas e sustentáveis em polímeros de engenharia
                            </StyledH1>
                        </Box>
        
                        <Box className="lg:w-[44%]">
                            <StyledP color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                                A Wirklich é movida pelo desafio de encontrar <StyledSpan fontFamily="Myriad Bold">soluções criativas</StyledSpan> e eficientes para substituir a aplicação de materiais, como o metal e a borracha, pelo plástico.
                            </StyledP>
                        </Box>
                        </Box>
                    </Container>
                </SwiperSlide>
                <SwiperSlide className="w-full slide-2 h-[550px] sm:h-[700px]">
                <Container className="h-full">
                        <Box className="flex flex-col justify-center h-full">
                        <Box className="lg:w-[55%] xl:w-[65%] mb-10">
                            <StyledH1>
                                Tecnologia de ponta na transformação de peças metálicas em peças de polímeros
                            </StyledH1>
                        </Box>
        
                        <Box className="lg:w-[44%]">
                            <StyledP color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                                A Wirklich é movida pelo desafio de encontrar <StyledSpan fontFamily="Myriad Bold">soluções criativas</StyledSpan> e eficientes para substituir a aplicação de materiais, como o metal e a borracha, pelo plástico.
                            </StyledP>
                        </Box>
                        </Box>
                    </Container>
                </SwiperSlide>
                <SwiperSlide className="w-full slide-3 h-[550px] sm:h-[700px]">
                <Container className="h-full">
                        <Box className="flex flex-col justify-center h-full">
                        <Box className="lg:w-[55%] xl:w-[65%] mb-10">
                            <StyledH1>
                                Qualidade e precisão na injeção de polímeros de engenharia
                            </StyledH1>
                        </Box>
        
                        <Box className="lg:w-[44%]">
                            <StyledP color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                                A Wirklich é movida pelo desafio de encontrar <StyledSpan fontFamily="Myriad Bold">soluções criativas</StyledSpan> e eficientes para substituir a aplicação de materiais, como o metal e a borracha, pelo plástico.
                            </StyledP>
                        </Box>
                        </Box>
                    </Container>
                </SwiperSlide>
              </Swiper>
        
        
                <Container>
                    <Box className="-translate-y-[60px] shadow-md flex-col sm:flex-row sm:items-center px-10 justify-between py-16 sm:py-10 z-30 relative" display='flex' bgcolor='#FFF' borderRadius={2} width='100%'>
                      <Box className="overflow-x-auto w-full sm:w-[50%] lg:w-[75%] gap-8 pb-3 xl:pb-0 styled-scrollbar" display='flex'>
                        <Box display='flex' gap={2} alignItems='center' flex='none'>
                            <ExperienceProfessional className="text-sm"/>
                            <Box display='flex' flexDirection='column'>
                            <StyledSpan color='#616161' fontSize="1.375rem" fontFamily="Myriad SemiBold">
                            Profissionais experientes
                            </StyledSpan>
        
                            <StyledSpan color="#8A8A8A" fontSize="1.125rem" fontFamily="Myriad Regular">
                            com conhecimento técnico apurado
                            </StyledSpan>
                            </Box>
                        </Box>
        
                        <Box display='flex' gap={2} alignItems='center' flex='none'>
                            <QualityPrecision className="w-[2.688rem]"/>
                            <Box display='flex' flexDirection='column'>
                            <StyledSpan color='#616161' fontSize="1.375rem" fontFamily="Myriad SemiBold">
                            Qualidade e precisão
                            </StyledSpan>
        
                            <StyledSpan color="#8A8A8A" fontSize="1.125rem" fontFamily="Myriad Regular">
                            Em peças injetadas
                            </StyledSpan>
                            </Box>
                        </Box>
        
                        <Box display='flex' gap={2} alignItems='center' flex='none'>
                            <Solutions className="w-[2.688rem]"/>
                            <Box display='flex' flexDirection='column'>
                            <StyledSpan color='#616161' fontSize="1.375rem" fontFamily="Myriad SemiBold">
                            Soluções personalizadas
                            </StyledSpan>
        
                            <StyledSpan color="#8A8A8A" fontSize="1.125rem" fontFamily="Myriad Regular">
                            Para necessidade de cada cliente
                            </StyledSpan>
                            </Box>
                        </Box>
                     </Box>
        
                     <Box className="mt-10 sm:mt-0">
                        <StyledButton onClick={scrollToTop} to='/contato'>
                            Entrar em contato
                        </StyledButton>
                     </Box>
        
                    </Box>
        
        
                    <StyledBox className="py-36">
                        <div
                            className="w-full lg:w-[48%] xl:w-[42%]">
        
                            <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                            SOBRE NÓS
                            </StyledSpan>
                            <StyledH2>
                            Desde 2005 em constante evolução na transformação de termoplásticos
                            </StyledH2>
                            <StyledP className="mb-8" color="#707070" fontFamily="Myriad Regular">
                            A Wirklich iniciou a sua trajetória de sucesso no ano de <strong className="text-black">2005</strong>, para atender um mercado exigente, que se ressentia da falta de empresas preparadas para desenvolver e processar <strong className="text-black">produtos injetados</strong> em polímeros de engenharia de alta e ultra performance.
                            </StyledP>
                            <StyledButton onClick={scrollToTop} to='/empresa'>
                                Conheça a Wirklich
                            </StyledButton>
        
                        </div>
        
                        <div
                            className="lg:w-[40%] xl:w-[50%]">
                            <Box className="bg-modal h-[300px] sm:h-[400px] xl:w-[40.625rem] xl:h-[27.188rem] flex justify-center items-center rounded-3xl xl:rounded-none">
                                <YoutubePlayer onClick={handleOpenModal} className="cursor-pointer hover:scale-105 duration-300"/>
                            </Box>
                        </div>
                    </StyledBox>
        
        
        
                  
                   <StyledBox centerRow className="lg:items-center flex-wrap lg:flex-row">
                        <Box className="w-full lg:w-[38%]">
                            <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                                SEGMENTOS
                            </StyledSpan>
                            <StyledH2>
                                Segmentos de mercado
                            </StyledH2>
                        </Box>
        
                        <Box className="w-full sm:w-[70%] lg:w-[30%]">
                            <StyledP color='#707070' fontFamily="Myriad Regular">
                                Buscamos através da inovação, desenvolver e produzir produtos em polímeros para aplicações diferenciadas.
                            </StyledP>
                        </Box>
        
                        <Box className="w-full sm:w-[24%] md:w-[26%] lg:w-[22%] sm:justify-end lg:relative flex" gap={1}>
                            <SlideArrow onClick={slidePrev2} className="rotate-180 cursor-pointer"/>
                            <SlideArrow onClick={slideNext2} className="cursor-pointer"/>
                        </Box>
                    </StyledBox>
        
                    <Box ref={carousel2} className="flex gap-10 overflow-x-auto h-[560px] mt-12 carousel">
        
                    <Box className="w-[27.5rem] flex flex-col justify-between flex-none h-[560px] border rounded-xl">
                            <Box className="h-[255px]">
                                <img src="/static/img/page_home/trilhos.png" alt="" />
                            </Box>
                            <Box className="mt-8 h-[15px]">
                                <StyledSpan className="px-7" color="#002137" fontFamily="Myriad SemiBold" fontSize="1.375rem">
                                    Ferroviário
                                </StyledSpan>
                            </Box>
                            <Box className="mt-1 h-[120px]">
                                <StyledP className="px-7" color="#8A8A8A" fontFamily="Myriad Light" fontSize="1.125rem">
                                    Produção de peças para aplicação em ferrovias, como isoladores, palmilhas, buchas, placas entre outros produtos.
                                </StyledP>
                            </Box>
        
                            <Box className="flex justify-center items-center h-[58px] border-t">
                                <Link onClick={moveToFerroviario} to='/solu%C3%A7%C3%B5es' className="group">
                                    <StyledSpan className="flex items-center gap-3 duration-700 group-hover:text-[#000]" color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                        Quero saber mais
                                        <Box className="mt-1">
                                            <ArrowSlide className="rotate-180 duration-700 stroke-[#0089e7] group-hover:fill-black group-hover:stroke-black" color="#000"/>
                                        </Box>
                                    </StyledSpan>
                                </Link>
                            </Box>
                        </Box>
        
        
                        <Box ref={slide2} className="w-[27.5rem] flex flex-col justify-between flex-none h-[560px] border rounded-xl">
                            <Box className="h-[255px]">
                                <img src="https://uploaddeimagens.com.br/images/003/946/527/full/Interse%C3%A7%C3%A3o_29.png?1658171048" alt="" />
                            </Box>
                            <Box className="mt-8 h-[15px]">
                                <StyledSpan className="px-8" color="#002137" fontFamily="Myriad SemiBold" fontSize="1.375rem">
                                    Agro
                                </StyledSpan>
                            </Box>
                            <Box className="mt-1 h-[120px]">
                                <StyledP className="px-8 w-[98%]" color="#8A8A8A" fontFamily="Myriad Light" fontSize="1.125rem">
                                Substituição de peças de metal por plástico de alta performance, reduzindo consideravelmente o peso das peças e mantendo as propriedades de aplicação.
                                </StyledP>
                            </Box>
        
                            <Box className="flex justify-center items-center h-[58px] border-t">
                                <Link onClick={moveToAgro} to='/solu%C3%A7%C3%B5es' className="group">
                                    <StyledSpan className="flex items-center gap-3 duration-700 group-hover:text-[#000]" color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                        Quero saber mais
                                        <Box className="mt-1">
                                            <ArrowSlide className="rotate-180 duration-700 stroke-[#0089e7] group-hover:fill-black group-hover:stroke-black" color="#000"/>
                                        </Box>
                                    </StyledSpan>
                                </Link>
                            </Box>
                        </Box>
        
                        <Box className="w-[27.5rem] flex flex-col justify-between flex-none h-[560px] border rounded-xl">
                            <Box className="h-[255px]">
                                <img src={`/static/img/page_home/frigorifico.png`} alt="" />
                            </Box>
                            <Box className="mt-8 h-[15px]">
                                <StyledSpan className="px-8" color="#002137" fontFamily="Myriad SemiBold" fontSize="1.375rem">
                                    Frigorífico
                                </StyledSpan>
                            </Box>
                            <Box className="mt-1 h-[120px]">
                                <StyledP className="px-8 w-[98%]" color="#8A8A8A" fontFamily="Myriad Light" fontSize="1.125rem">
                                    Produtos em polímeros para diversas aplicações nos  frigoríficos, principalmente na substituição de aço inox.
                                </StyledP>
                            </Box>
        
                            <Box className="flex justify-center items-center h-[58px] border-t">
                                <Link onClick={moveToFrigorifico} to='/solu%C3%A7%C3%B5es' className="group">
                                    <StyledSpan className="flex items-center gap-3 duration-700 group-hover:text-[#000]" color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                        Quero saber mais
                                        <Box className="mt-1">
                                            <ArrowSlide className="rotate-180 duration-700 stroke-[#0089e7] group-hover:fill-black group-hover:stroke-black" color="#000"/>
                                        </Box>
                                    </StyledSpan>
                                </Link>
                            </Box>
                        </Box>
        
                        
        
                        <Box className="w-[27.5rem] flex flex-col justify-between flex-none h-[560px] border rounded-xl">
                            <Box className="h-[255px]">
                                <img src="/static/img/page_home/placassolares.png" alt="" />
                            </Box>
                            <Box className="mt-8 h-[15px]">
                                <StyledSpan className="px-7" color="#002137" fontFamily="Myriad SemiBold" fontSize="1.375rem">
                                    Energia solar
                                </StyledSpan>
                            </Box>
                            <Box className="mt-1 h-[120px]">
                                <StyledP className="px-7 w-[91%]" color="#8A8A8A" fontFamily="Myriad Light" fontSize="1.125rem">
                                A Wirklich está presente no mercado de energia solar através da produção de peças em polímeros utilizados na movimentação e fixação de placas fotovoltaicas.
                                </StyledP>
                            </Box>
        
                            <Box className="flex justify-center items-center h-[58px] border-t">
                                <Link onClick={moveToEnergiaSolar} to='/solu%C3%A7%C3%B5es' className="group">
                                    <StyledSpan className="flex items-center gap-3 duration-700 group-hover:text-[#000]" color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                        Quero saber mais
                                        <Box className="mt-1">
                                            <ArrowSlide className="rotate-180 duration-700 stroke-[#0089e7] group-hover:fill-black group-hover:stroke-black" color="#000"/>
                                        </Box>
                                    </StyledSpan>
                                </Link>
                            </Box>
                        </Box>
        
                        <Box className="w-[27.5rem] flex flex-col justify-between flex-none h-[560px] border rounded-xl">
                            <Box className="h-[255px]">
                                <img src="https://uploaddeimagens.com.br/images/003/947/203/full/Ret%C3%A2ngulo_893.png?1658226655" alt="" />
                            </Box>
                            <Box className="mt-8 h-[15px]">
                                <StyledSpan className="px-7" color="#002137" fontFamily="Myriad SemiBold" fontSize="1.375rem">
                                    Meio ambiente
                                </StyledSpan>
                            </Box>
                            <Box className="mt-1 h-[120px]">
                                <StyledP className="px-7 w-[91%]" color="#8A8A8A" fontFamily="Myriad Light" fontSize="1.125rem">
                                A Wirklich vem atuando diretamente em prol do meio ambiente, principalmente no tratamento de recursos hídricos. 
                                </StyledP>
                            </Box>
        
                            <Box className="flex justify-center items-center h-[58px] border-t">
                                <Link onClick={moveToMeioAmbiente} to='/solu%C3%A7%C3%B5es' className="group">
                                    <StyledSpan className="flex items-center gap-3 duration-700 group-hover:text-[#000]" color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                        Quero saber mais
                                        <Box className="mt-1">
                                            <ArrowSlide className="rotate-180 duration-700 stroke-[#0089e7] group-hover:fill-black group-hover:stroke-black" color="#000"/>
                                        </Box>
                                    </StyledSpan>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                  
        
                    
                   
        
                    <StyledBox className="py-36" id="tecnologia">
                        <div
                            className="w-full lg:w-[50%] xl:w-[42%] 2xl:w-[38%]">
                            <StyledH2>
                                Tecnologia de ponta em peças especiais
                            </StyledH2>
                            <Box className="mt-10">
                                <Box className="flex justify-center items-center w-full h-[350px]  rounded-xl overflow-hidden">
                                    {isLoading? (
                                        <Skeleton width={532} height={570} />
                                    ) : 
                                    
                                    (
                                    
                                    <img src="/static/img/page_home/gifrobo.gif" alt="" />
        
                                    )}
                                </Box>
                            </Box>
                        </div>
        
                
                        
                        <div
                            className="w-full lg:w-[40%] xl:w-[43%] 2xl:w-[46%]">
                            <StyledP className="lg:w-[100%] leading-loose" color="#002137" fontFamily="Made Light">
                                Desde seu início, a Wirklich alia os mais sólidos princípios da tradição, com o poder transformador da inovação, para trabalhar ativamente no desenvolvimento e na produção de peças de qualidade em plástico
                            </StyledP>
        
                            <StyledP className="mt-8 border-b pb-8 border-gray-300" color="#707070" fontFamily="Myriad Regular">
                                Atuando no mercado de <StyledSpan color="#002137" fontFamily="Myriad Bold">peças técnicas injetadas</StyledSpan>, o grande desafio da empresa é desenvolver soluções criativas e eficientes para substituir a aplicação de materiais, como o metal e a borracha, pelo plástico, proporcionando diversas vantagens, principalmente no que diz respeito à redução de peso e de custos das peças.
                            </StyledP>
        
                            <Box className="mt-10">
                            <StyledButton onClick={scrollToTop} to='/empresa'>
                                Conheça a Wirklich
                            </StyledButton>
                            </Box>
                        </div>
                     
        
                    </StyledBox>
        
                    <StyledBox id="inovação">
                        <Box className="w-full lg:w-[40%]">
                            <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                                TERCEIRIZAÇÃO
                            </StyledSpan>
        
                            <StyledH2 className="w-[90%]">
                                Serviço de terceirização
                            </StyledH2>
        
                            <StyledP className="mb-8 mt-8" color="#707070" fontFamily="Myriad Regular">
                            Com máquinas de precisão, uma empresa de engenharia qualificada e experiente, processos mapeados e consolidados no controle de produção e qualidade, e um conhecimento técnico de vanguarda na elaboração de compostos poliméricos conseguimos implementar tanto no desenvolvimento de produtos quanto no serviço de terceirização de produção, consistência, repetibilidade e qualidade consolidadas. 
                            </StyledP>
        
        
                            <StyledButton onClick={scrollToTop} to='/contato'>
                                Entrar em contato
                            </StyledButton>
                        </Box>
        
                        <Box className="w-full lg:w-[45%] block md:flex lg:block md:justify-between">
                                <Box className="flex justify-center items-center w-full md:w-[50%] lg:w-full h-[335px] rounded-xl overflow-hidden">
                                {isLoading? (
                                        <Skeleton width={532} height={570} />
                                    ) : 
                                    
                                    (
                                    
                                    <img src="/static/img/page_home/gif_guindaste.gif" alt="" />
        
                                    )}
                                </Box>
                            <Box className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-5 lg:items-center mt-12 w-full lg:justify-between md:w-[40%] lg:w-full">
                                <LightBulb className="sm:w-[25%] lg:w-[30%] xl:w-[20%]"/>
                                <StyledP color="#707070" fontFamily="Myriad Regular">
                                    Traga-nos a sua <StyledSpan color="#002137" fontFamily="Myriad Bold">necessidade</StyledSpan>, vamos avaliá-la e propor a solução mais adequada. Tudo isso com o máximo de qualidade, agilidade e precisão.
                                </StyledP>
                            </Box>
                        </Box>
                    </StyledBox>
        
                </Container>
        
                <Box className="py-16 mt-36 bg-connections">
                    <Container>
                        <StyledBox center>
                            <Box>
                                <StyledH2 white>
                                    Soluções personalizadas
                                </StyledH2>
        
                                <StyledSpan className="mt-5 sm:mt-0 block w-[65%] sm:w-full" color="#FFF" fontFamily="Made Light" fontSize="1.375rem">
                                    Para a necessidade de cada cliente
                                </StyledSpan>
                            </Box>
        
                            <Box className="w-full lg:w-[45%]">
                                <StyledP color="#CBCBCB" fontFamily="Myriad Regular">
                                    A injeção de <StyledSpan  color="#FFF" fontFamily="Myriad Bold">plásticos de engenharia</StyledSpan> e alta performance, permite que os projetos desenvolvidos para nossos clientes tenham diversos benefícios tais como:
                                </StyledP>
                            </Box>
                        </StyledBox>
        
                        <Box className="flex sm:flex-wrap overflow-x-auto styled-scrollbar pb-10 sm:pb-0 sm:justify-center gap-5 lg:gap-7 2xl:gap-5 mt-16">
                            <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                                <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                    <FaWeightHanging color='#C42623' size={20}/>
                                </Box>
                                <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                                    Redução de peso
                                </StyledSpan>
                            </Box>
        
                            <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                                <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                    <BsLink45Deg color='#C42623' size={30}/>
                                </Box>
                                <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                                    Alta resistência mecânica e termica
                                </StyledSpan>
                            </Box>
        
                            <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                                <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                    <RiShieldCheckFill color='#C42623' size={25}/>
                                </Box>
                                <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                                    Maior durabilidade
                                </StyledSpan>
                            </Box>
        
                            <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                                <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                    <FaRecycle color='#C42623' size={25}/>
                                </Box>
                                <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                                    Materiais recicláveis
                                </StyledSpan>
                            </Box>
        
                            <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                                <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                    <RiOilFill color='#C42623' size={25}/>
                                </Box>
                                <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                                    Eliminação de agentes lubrificantes
                                </StyledSpan>
                            </Box>
        
                            <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                                <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                    <GiAnvilImpact color='#C42623' size={25}/>
                                </Box>
                                <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                                    Alta resistência ao impacto
                                </StyledSpan>
                            </Box>
                        </Box>
        
                    </Container>
                </Box>
        
                <Box className="bg-[#F8F8FA] py-36 lg:py-0 lg:pt-24 lg:h-[750px]">
                <Container>
                    <StyledBox>
                        <Box className="w-full lg:w-[35%]">
                            <StyledSpan color="#009E15" fontSize="1.125rem" fontFamily="Myriad Regular">
                                RESPONSABILIDADE
                            </StyledSpan>
        
                            <StyledH2>
                                Compromisso com o meio-ambiente
                            </StyledH2>
        
                            <Box className="relative"> 
                                <img src={`${baseImageUrlHome}wirklich-filtro-verde.png`} alt="" />
                                <Box className="absolute sm:top-20 bg-white rounded-lg w-[260px] h-[70px] flex items-center justify-center shadow-lg right-2/4 translate-x-2/4 sm:translate-x-0 -bottom-10 sm:bottom-0 sm:right-36 lg:-right-4">
                                <Leaf/>
                                </Box>
                            </Box>
                        </Box>
        
                        <Box className="relative hidden lg:flex w-[15%] justify-center items-center">
                            <LongArrow className="lg:mb-12 xl:mb-24"/>
                        </Box>
        
                        <Box className="w-full lg:w-[50%]">
                            <StyledH3 semiTitle>
                                A Wirklich conseguiu aliar-se ao meio-ambiente através do planejamento de suas instalações
                            </StyledH3>
        
                            <StyledP color="#707070" fontFamily="Myriad Regular">
                            A empresa possui um tanque para <StyledSpan color="#009E15" fontFamily="Myriad Bold">retenção da água da chuva</StyledSpan>, que é <StyledSpan color="#009E15" fontFamily="Myriad Bold">reaproveitada</StyledSpan> para irrigação externa. O prédio possui entrada de ventilação e iluminação natural, o que resulta na diminuição do consumo de energia.
                            </StyledP>
        
                            <Box className="bg-white px-7 py-12 rounded-xl shadow-sm flex flex-col gap-7 mt-10 mb-16">
                                <Box className="flex items-center gap-3 justify-between sm:justify-start">
                                    <Check className="w-[15%] sm:w-auto"/>
                                    <StyledSpan className="w-[80%] sm:w-auto" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                        Somos uma empresa altamente sustententável
                                    </StyledSpan>
                                </Box>
                                <Box className="flex items-center gap-3 justify-between sm:justify-start">
                                    <Check className="w-[15%] sm:w-auto"/>
                                    <StyledSpan className="w-[80%] sm:w-auto" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                        15% da nossa energia é geração solar
                                    </StyledSpan>
                                </Box>
                                <Box className="flex items-center gap-3 justify-between sm:justify-start">
                                    <Check className="w-[15%] sm:w-auto"/>
                                    <StyledSpan className="w-[80%] sm:w-auto" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                        Acreditamos na sustentabilidade e em fontes de energia renováveis
                                    </StyledSpan>
                                </Box>
        
                                <Box className="flex items-center gap-3 justify-between sm:justify-start">
                                    <Check className="w-[15%] sm:w-auto"/>
                                    <StyledSpan className="w-[80%] sm:w-auto" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                        Reduzimos a emissão de CO2
                                    </StyledSpan>
                                </Box>
                            </Box> 
        
                            <StyledButton onClick={scrollToTop} green to="/meio-ambiente">
                                Conheça a tecnologia Werde
                            </StyledButton>
                        </Box>
                    </StyledBox>
                </Container>
                </Box>
        
                <Container>
                <BlogSlider />
        
                <StyledBox center>
                    <Box className="flex items-center gap-5">
                        <HiOutlineMail color="#0089E7" size={30}/>
                        <StyledSpan color="#002137" fontSize="1.375rem" fontFamily="Myriad Regular">
                            Cadastre-se e receba nossas novidades por e-mail
                        </StyledSpan>
                    </Box>
        
                    <Box>
                        <form action="">
                         <Box className="flex flex-col sm:flex-row gap-10 sm:items-center">
                          <Box className="flex sm:w-auto flex-col sm:flex-row items-center gap-7">
                            <Box>
                                <StyledInput placeholder="Nome"/>
                            </Box>
                            <Box>
                                <StyledInput placeholder="e-mail@exemplo.com.br"/>
                            </Box>
                          </Box>
        
                          <Box className="mb-7">
                             <StyledButtonForm to=''>
                                Cadastrar
                             </StyledButtonForm>
                          </Box>
                         </Box>
                        </form>
                    </Box>
                </StyledBox>
        
        
                </Container>
        
                <FooterBanner onClick={scrollToTop}/>
        
                <Footer />
                    
        
                <Modal 
                open={modalOpen}
                onClose={handleCloseModal}
                >
                <Box className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[95%] lg:w-[60%]">
                <Player>
                <Youtube videoId="ak-c0y9NkZA" />
            
        
                <DefaultUi noClickToPlay>
                </DefaultUi>
                </Player>
                </Box>
                </Modal>
                <ScrollToTop />
                </div>
            )
    } else if (isEnglish) {
        return (
            <div>
            <Navbar />
            <Swiper navigation={true}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
            pagination={true}
              
            modules={[Navigation, Autoplay, Pagination]} className="mySwiper">
            <SwiperSlide className="w-full slide-1 h-[550px] sm:h-[700px]">
                <Container className="h-full">
                    <Box className="flex flex-col justify-center h-full">
                    <Box className="lg:w-[55%] xl:w-[45%] mb-10">
                        <StyledH1>
                            Technological and sustainable solutions in engineering polymers
                        </StyledH1>
                    </Box>
    
                    <Box className="lg:w-[44%]">
                        <StyledP color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">            
                            Wirklich is driven by the challenge of finding <StyledSpan fontFamily="Myriad Bold">creative solutions</StyledSpan> and efficient to replace the application of materials, such as metal and rubber, with plastic.
                        </StyledP>
                    </Box>
                    </Box>
                </Container>
            </SwiperSlide>
            <SwiperSlide className="w-full slide-2 h-[550px] sm:h-[700px]">
            <Container className="h-full">
                    <Box className="flex flex-col justify-center h-full">
                    <Box className="lg:w-[55%] xl:w-[65%] mb-10">
                        <StyledH1>
                            State-of-the-art technology in the transformation of metal parts into polymer parts
                        </StyledH1>
                    </Box>
    
                    <Box className="lg:w-[44%]">
                        <StyledP color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">            
                            Wirklich is driven by the challenge of finding <StyledSpan fontFamily="Myriad Bold">creative solutions</StyledSpan> and efficient to replace the application of materials, such as metal and rubber, with plastic.
                        </StyledP>
                    </Box>
                    </Box>
                </Container>
            </SwiperSlide>
            <SwiperSlide className="w-full slide-3 h-[550px] sm:h-[700px]">
            <Container className="h-full">
                    <Box className="flex flex-col justify-center h-full">
                    <Box className="lg:w-[55%] xl:w-[65%] mb-10">
                        <StyledH1>
                            Quality and precision in the injection of engineering polymers
                        </StyledH1>
                    </Box>
    
                    <Box className="lg:w-[44%]">
                        <StyledP color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">            
                            Wirklich is driven by the challenge of finding <StyledSpan fontFamily="Myriad Bold">creative solutions</StyledSpan> and efficient to replace the application of materials, such as metal and rubber, with plastic.
                        </StyledP>
                    </Box>
                    </Box>
                </Container>
            </SwiperSlide>
          </Swiper>
    
    
            <Container>
                <Box className="-translate-y-[60px] shadow-md flex-col sm:flex-row sm:items-center px-10 justify-between py-16 sm:py-10 z-30 relative" display='flex' bgcolor='#FFF' borderRadius={2} width='100%'>
                  <Box className="overflow-x-auto w-full sm:w-[50%] lg:w-[70%] gap-8 pb-3 xl:pb-0 styled-scrollbar" display='flex'>
                    <Box display='flex' gap={2} alignItems='center' flex='none'>
                        <ExperienceProfessional className="text-sm"/>
                        <Box display='flex' flexDirection='column'>
                        <StyledSpan color='#616161' fontSize="1.375rem" fontFamily="Myriad SemiBold">
                        Experienced professionals
                        </StyledSpan>
    
                        <StyledSpan color="#8A8A8A" fontSize="1.125rem" fontFamily="Myriad Regular">
                        with deep technical knowledge
                        </StyledSpan>
                        </Box>
                    </Box>
    
                    <Box display='flex' gap={2} alignItems='center' flex='none'>
                        <QualityPrecision className="w-[2.688rem]"/>
                        <Box display='flex' flexDirection='column'>
                        <StyledSpan color='#616161' fontSize="1.375rem" fontFamily="Myriad SemiBold">
                        Quality and precision
                        </StyledSpan>
    
                        <StyledSpan color="#8A8A8A" fontSize="1.125rem" fontFamily="Myriad Regular">
                        in injected parts
                        </StyledSpan>
                        </Box>
                    </Box>
    
                    <Box display='flex' gap={2} alignItems='center' flex='none'>
                        <Solutions className="w-[2.688rem]"/>
                        <Box display='flex' flexDirection='column'>
                        <StyledSpan color='#616161' fontSize="1.375rem" fontFamily="Myriad SemiBold">
                        Customized Solutions
                        </StyledSpan>
    
                        <StyledSpan color="#8A8A8A" fontSize="1.125rem" fontFamily="Myriad Regular">
                        for every customer's need
                        </StyledSpan>
                        </Box>
                    </Box>
                 </Box>
    
                 <Box className="mt-10 sm:mt-0">
                    <StyledButton onClick={scrollToTop} to='/contato'>
                        Contact Us
                    </StyledButton>
                 </Box>
    
                </Box>
    
    
                <StyledBox className="py-36">
                    <div
                        className="w-full lg:w-[48%] xl:w-[42%]">
    
                        <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                        ABOUT US
                        </StyledSpan>
                        <StyledH2>
                        Since 2005 in constant evolution in the transformation of thermoplastics
                        </StyledH2>
                        <StyledP className="mb-8" color="#707070" fontFamily="Myriad Regular">
                        Wirklich began its successful trajectory in the year <strong className="text-black">2005</strong>, to meet a demanding market, which felt the lack of companies prepared to develop and process <strong className="text-black">injected products</strong> in high and ultra performance engineering polymers.
                        </StyledP>
                        <StyledButton onClick={scrollToTop} to='/empresa'>
                            Get to know Wirklich
                        </StyledButton>
    
                    </div>
    
                    <div
                        className="lg:w-[40%] xl:w-[50%]">
                        <Box className="bg-modal h-[300px] sm:h-[400px] xl:w-[40.625rem] xl:h-[27.188rem] flex justify-center items-center rounded-3xl xl:rounded-none">
                            <YoutubePlayer onClick={handleOpenModal} className="cursor-pointer hover:scale-105 duration-300"/>
                        </Box>
                    </div>
                </StyledBox>
    
    
    
              
               <StyledBox centerRow className="lg:items-center flex-wrap lg:flex-row">
                    <Box className="w-full lg:w-[38%]">
                        <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                            SEGMENTS
                        </StyledSpan>
                        <StyledH2>
                            Market segments
                        </StyledH2>
                    </Box>
    
                    <Box className="w-full sm:w-[70%] lg:w-[30%]">
                        <StyledP color='#707070' fontFamily="Myriad Regular">
                            Through innovation, we seek to develop and produce polymer products for different applications.
                        </StyledP>
                    </Box>
    
                    <Box className="w-full sm:w-[24%] md:w-[26%] lg:w-[22%] sm:justify-end lg:relative flex" gap={1}>
                        <SlideArrow onClick={slidePrev2} className="rotate-180 cursor-pointer"/>
                        <SlideArrow onClick={slideNext2} className="cursor-pointer"/>
                    </Box>
                </StyledBox>
    
                <Box ref={carousel2} className="flex gap-10 overflow-x-auto h-[560px] mt-12 carousel">
    
                <Box className="w-[27.5rem] flex flex-col justify-between flex-none h-[560px] border rounded-xl">
                        <Box className="h-[255px]">
                            <img src="/static/img/page_home/trilhos.png" alt="" />
                        </Box>
                        <Box className="mt-8 h-[15px]">
                            <StyledSpan className="px-7" color="#002137" fontFamily="Myriad SemiBold" fontSize="1.375rem">
                                Rail
                            </StyledSpan>
                        </Box>
                        <Box className="mt-1 h-[120px]">
                            <StyledP className="px-7" color="#8A8A8A" fontFamily="Myriad Light" fontSize="1.125rem">
                                Production of parts for application in railways, such as insulators, insoles, bushings, plates and other products.
                            </StyledP>
                        </Box>
    
                        <Box className="flex justify-center items-center h-[58px] border-t">
                            <Link onClick={moveToFerroviario} to='/solu%C3%A7%C3%B5es' className="group">
                                <StyledSpan className="flex items-center gap-3 duration-700 group-hover:text-[#000]" color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                    Know more
                                    <Box className="mt-1">
                                        <ArrowSlide className="rotate-180 duration-700 stroke-[#0089e7] group-hover:fill-black group-hover:stroke-black" color="#000"/>
                                    </Box>
                                </StyledSpan>
                            </Link>
                        </Box>
                    </Box>
    
    
                    <Box ref={slide2} className="w-[27.5rem] flex flex-col justify-between flex-none h-[560px] border rounded-xl">
                        <Box className="h-[255px]">
                            <img src="https://uploaddeimagens.com.br/images/003/946/527/full/Interse%C3%A7%C3%A3o_29.png?1658171048" alt="" />
                        </Box>
                        <Box className="mt-8 h-[15px]">
                            <StyledSpan className="px-8" color="#002137" fontFamily="Myriad SemiBold" fontSize="1.375rem">
                                Agro
                            </StyledSpan>
                        </Box>
                        <Box className="mt-1 h-[120px]">
                            <StyledP className="px-8 w-[98%]" color="#8A8A8A" fontFamily="Myriad Light" fontSize="1.125rem">
                            Replacement of metal parts with high-performance plastic, considerably reducing the weight of the parts and maintaining application properties.                            </StyledP>
                        </Box>
    
                        <Box className="flex justify-center items-center h-[58px] border-t">
                            <Link onClick={moveToAgro} to='/solu%C3%A7%C3%B5es' className="group">
                                <StyledSpan className="flex items-center gap-3 duration-700 group-hover:text-[#000]" color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                    Know more
                                    <Box className="mt-1">
                                        <ArrowSlide className="rotate-180 duration-700 stroke-[#0089e7] group-hover:fill-black group-hover:stroke-black" color="#000"/>
                                    </Box>
                                </StyledSpan>
                            </Link>
                        </Box>
                    </Box>
    
                    <Box className="w-[27.5rem] flex flex-col justify-between flex-none h-[560px] border rounded-xl">
                        <Box className="h-[255px]">
                            <img src={`/static/img/page_home/frigorifico.png`} alt="" />
                        </Box>
                        <Box className="mt-8 h-[15px]">
                            <StyledSpan className="px-8" color="#002137" fontFamily="Myriad SemiBold" fontSize="1.375rem">
                                Fridge
                            </StyledSpan>
                        </Box>
                        <Box className="mt-1 h-[120px]">
                            <StyledP className="px-8 w-[98%]" color="#8A8A8A" fontFamily="Myriad Light" fontSize="1.125rem">
                            Polymer products for various applications in refrigerators, mainly to replace stainless steel.
                            </StyledP>
                        </Box>
    
                        <Box className="flex justify-center items-center h-[58px] border-t">
                            <Link onClick={moveToFrigorifico} to='/solu%C3%A7%C3%B5es' className="group">
                                <StyledSpan className="flex items-center gap-3 duration-700 group-hover:text-[#000]" color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                    Know more
                                    <Box className="mt-1">
                                        <ArrowSlide className="rotate-180 duration-700 stroke-[#0089e7] group-hover:fill-black group-hover:stroke-black" color="#000"/>
                                    </Box>
                                </StyledSpan>
                            </Link>
                        </Box>
                    </Box>
    
                    
    
                    <Box className="w-[27.5rem] flex flex-col justify-between flex-none h-[560px] border rounded-xl">
                        <Box className="h-[255px]">
                            <img src="/static/img/page_home/placassolares.png" alt="" />
                        </Box>
                        <Box className="mt-8 h-[15px]">
                            <StyledSpan className="px-7" color="#002137" fontFamily="Myriad SemiBold" fontSize="1.375rem">
                            Solar energy
                            </StyledSpan>
                        </Box>
                        <Box className="mt-1 h-[120px]">
                            <StyledP className="px-7 w-[91%]" color="#8A8A8A" fontFamily="Myriad Light" fontSize="1.125rem">
                            Wirklich is present in the solar energy market through the production of parts in polymers used in moving and fixing photovoltaic panels.
                            </StyledP>
                        </Box>
    
                        <Box className="flex justify-center items-center h-[58px] border-t">
                            <Link onClick={moveToEnergiaSolar} to='/solu%C3%A7%C3%B5es' className="group">
                                <StyledSpan className="flex items-center gap-3 duration-700 group-hover:text-[#000]" color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                    Know more
                                    <Box className="mt-1">
                                        <ArrowSlide className="rotate-180 duration-700 stroke-[#0089e7] group-hover:fill-black group-hover:stroke-black" color="#000"/>
                                    </Box>
                                </StyledSpan>
                            </Link>
                        </Box>
                    </Box>
    
                    <Box className="w-[27.5rem] flex flex-col justify-between flex-none h-[560px] border rounded-xl">
                        <Box className="h-[255px]">
                            <img src="https://uploaddeimagens.com.br/images/003/947/203/full/Ret%C3%A2ngulo_893.png?1658226655" alt="" />
                        </Box>
                        <Box className="mt-8 h-[15px]">
                            <StyledSpan className="px-7" color="#002137" fontFamily="Myriad SemiBold" fontSize="1.375rem">
                            Environment
                            </StyledSpan>
                        </Box>
                        <Box className="mt-1 h-[120px]">
                            <StyledP className="px-7 w-[91%]" color="#8A8A8A" fontFamily="Myriad Light" fontSize="1.125rem">
                            Wirklich has been acting directly in favor of the environment, mainly in the treatment of water resources.
                            </StyledP>
                        </Box>
    
                        <Box className="flex justify-center items-center h-[58px] border-t">
                            <Link onClick={moveToMeioAmbiente} to='/solu%C3%A7%C3%B5es' className="group">
                                <StyledSpan className="flex items-center gap-3 duration-700 group-hover:text-[#000]" color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                    Know more
                                    <Box className="mt-1">
                                        <ArrowSlide className="rotate-180 duration-700 stroke-[#0089e7] group-hover:fill-black group-hover:stroke-black" color="#000"/>
                                    </Box>
                                </StyledSpan>
                            </Link>
                        </Box>
                    </Box>
                </Box>
              
    
                
               
    
                <StyledBox className="py-36" id="tecnologia">
                    <div
                        className="w-full lg:w-[50%] xl:w-[42%] 2xl:w-[38%]">
                        <StyledH2>
                            State-of-the-art technology in special parts
                        </StyledH2>
                        <Box className="mt-10">
                            <Box className="flex justify-center items-center w-full h-[350px]  rounded-xl overflow-hidden">
                                {isLoading? (
                                    <Skeleton width={532} height={570} />
                                ) : 
                                
                                (
                                
                                <img src="/static/img/page_home/gifrobo.gif" alt="" />
    
                                )}
                            </Box>
                        </Box>
                    </div>
    
            
                    
                    <div
                        className="w-full lg:w-[40%] xl:w-[43%] 2xl:w-[46%]">
                        <StyledP className="lg:w-[100%] leading-loose" color="#002137" fontFamily="Made Light">
                        Since its inception, Wirklich has combined the most solid principles of tradition with the transforming power of innovation, to work actively in the development and production of quality plastic parts.
                        </StyledP>
    
                        <StyledP className="mt-8 border-b pb-8 border-gray-300" color="#707070" fontFamily="Myriad Regular">
                            Operating in the <StyledSpan color="#002137" fontFamily="Myriad Bold">injected technical parts</StyledSpan> market, the company's great challenge is to develop creative and efficient solutions to replace the application of materials, such as metal and rubber, with plastic, providing several advantages, mainly with regard to weight reduction and parts costs.
                        </StyledP>
    
                        <Box className="mt-10">
                        <StyledButton onClick={scrollToTop} to='/empresa'>
                            Get to know Wirklich
                        </StyledButton>
                        </Box>
                    </div>
                 
    
                </StyledBox>
    
                <StyledBox id="inovação">
                    <Box className="w-full lg:w-[40%]">
                        <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                            OUTSOURCING
                        </StyledSpan>
    
                        <StyledH2 className="w-[90%]">
                            Outsourcing service
                        </StyledH2>
    
                        <StyledP className="mb-8 mt-8" color="#707070" fontFamily="Myriad Regular">
                        With precision machines, a qualified and experienced engineering company, processes mapped and consolidated in production and quality control, and cutting-edge technical knowledge in the elaboration of polymeric compounds, we were able to implement both in product development and in the production outsourcing service, consolidated consistency, repeatability and quality.
                        </StyledP>
    
    
                        <StyledButton onClick={scrollToTop} to='/contato'>
                            Contact Us
                        </StyledButton>
                    </Box>
    
                    <Box className="w-full lg:w-[45%] block md:flex lg:block md:justify-between">
                            <Box className="flex justify-center items-center w-full md:w-[50%] lg:w-full h-[335px] rounded-xl overflow-hidden">
                            {isLoading? (
                                    <Skeleton width={532} height={570} />
                                ) : 
                                
                                (
                                
                                <img src="/static/img/page_home/gif_guindaste.gif" alt="" />
    
                                )}
                            </Box>
                        <Box className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-5 lg:items-center mt-12 w-full lg:justify-between md:w-[40%] lg:w-full">
                            <LightBulb className="sm:w-[25%] lg:w-[30%] xl:w-[20%]"/>
                            <StyledP color="#707070" fontFamily="Myriad Regular">
                                Bring us your <StyledSpan color="#002137" fontFamily="Myriad Bold">need</StyledSpan>, we will evaluate it and propose the most appropriate solution. All this with maximum quality, agility and precision.
                            </StyledP>
                        </Box>
                    </Box>
                </StyledBox>
    
            </Container>
    
            <Box className="py-16 mt-36 bg-connections">
                <Container>
                    <StyledBox center>
                        <Box>
                            <StyledH2 white>
                                Customized Solutions
                            </StyledH2>
    
                            <StyledSpan className="mt-5 sm:mt-0 block w-[65%] sm:w-full" color="#FFF" fontFamily="Made Light" fontSize="1.375rem">
                                For every customer's need
                            </StyledSpan>
                        </Box>
    
                        <Box className="w-full lg:w-[45%]">
                            <StyledP color="#CBCBCB" fontFamily="Myriad Regular">
                                The injection of <StyledSpan  color="#FFF" fontFamily="Myriad Bold">engineering plastics</StyledSpan> and high performance, allows the projects developed for our customers to have several benefits such as:
                            </StyledP>
                        </Box>
                    </StyledBox>
    
                    <Box className="flex sm:flex-wrap overflow-x-auto styled-scrollbar pb-10 sm:pb-0 sm:justify-center gap-5 lg:gap-7 2xl:gap-5 mt-16">
                        <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                            <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                <FaWeightHanging color='#C42623' size={20}/>
                            </Box>
                            <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Weight reduction
                            </StyledSpan>
                        </Box>
    
                        <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                            <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                <BsLink45Deg color='#C42623' size={30}/>
                            </Box>
                            <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                                High mechanical and thermal resistance
                            </StyledSpan>
                        </Box>
    
                        <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                            <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                <RiShieldCheckFill color='#C42623' size={25}/>
                            </Box>
                            <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Greater durability
                            </StyledSpan>
                        </Box>
    
                        <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                            <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                <FaRecycle color='#C42623' size={25}/>
                            </Box>
                            <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                                Recyclable materials
                            </StyledSpan>
                        </Box>
    
                        <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                            <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                <RiOilFill color='#C42623' size={25}/>
                            </Box>
                            <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                                Elimination of lubricating agents
                            </StyledSpan>
                        </Box>
    
                        <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                            <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                <GiAnvilImpact color='#C42623' size={25}/>
                            </Box>
                            <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                                High impact resistance
                            </StyledSpan>
                        </Box>
                    </Box>
    
                </Container>
            </Box>
    
            <Box className="bg-[#F8F8FA] py-36 lg:py-0 lg:pt-24 lg:h-[750px]">
            <Container>
                <StyledBox>
                    <Box className="w-full lg:w-[35%]">
                        <StyledSpan color="#009E15" fontSize="1.125rem" fontFamily="Myriad Regular">
                            RESPONSIBILITY
                        </StyledSpan>
    
                        <StyledH2>
                            Commitment to the environment
                        </StyledH2>
    
                        <Box className="relative"> 
                            <img src={`${baseImageUrlHome}wirklich-filtro-verde.png`} alt="" />
                            <Box className="absolute sm:top-20 bg-white rounded-lg w-[260px] h-[70px] flex items-center justify-center shadow-lg right-2/4 translate-x-2/4 sm:translate-x-0 -bottom-10 sm:bottom-0 sm:right-36 lg:-right-4">
                            <Leaf/>
                            </Box>
                        </Box>
                    </Box>
    
                    <Box className="relative hidden lg:flex w-[15%] justify-center items-center">
                        <LongArrow className="lg:mb-12 xl:mb-24"/>
                    </Box>
    
                    <Box className="w-full lg:w-[50%]">
                        <StyledH3 semiTitle>
                            Wirklich managed to ally itself with the environment through the planning of its installations
                        </StyledH3>
    
                        <StyledP color="#707070" fontFamily="Myriad Regular">
                        The company has a tank to <StyledSpan color="#009E15" fontFamily="Myriad Bold">retain rainwater</StyledSpan>, which is <StyledSpan color="#009E15" fontFamily="Myriad Bold">reused</StyledSpan> for external irrigation. The building has ventilation entrance and natural lighting, which results in a decrease in energy consumption.
                        </StyledP>
    
                        <Box className="bg-white px-7 py-12 rounded-xl shadow-sm flex flex-col gap-7 mt-10 mb-16">
                            <Box className="flex items-center gap-3 justify-between sm:justify-start">
                                <Check className="w-[15%] sm:w-auto"/>
                                <StyledSpan className="w-[80%] sm:w-auto" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    We are a highly sustainable company
                                </StyledSpan>
                            </Box>
                            <Box className="flex items-center gap-3 justify-between sm:justify-start">
                                <Check className="w-[15%] sm:w-auto"/>
                                <StyledSpan className="w-[80%] sm:w-auto" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                   15% of our energy is solar generation
                                </StyledSpan>
                            </Box>
                            <Box className="flex items-center gap-3 justify-between sm:justify-start">
                                <Check className="w-[15%] sm:w-auto"/>
                                <StyledSpan className="w-[80%] sm:w-auto" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    We believe in sustainability and renewable energy sources
                                </StyledSpan>
                            </Box>
    
                            <Box className="flex items-center gap-3 justify-between sm:justify-start">
                                <Check className="w-[15%] sm:w-auto"/>
                                <StyledSpan className="w-[80%] sm:w-auto" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    We reduce CO2 emissions
                                </StyledSpan>
                            </Box>
                        </Box> 
    
                        <StyledButton onClick={scrollToTop} green to="/meio-ambiente">
                            Get to know Werde technology
                        </StyledButton>
                    </Box>
                </StyledBox>
            </Container>
            </Box>
    
            <Container>
            <BlogSlider />
    
            <StyledBox center>
                <Box className="flex items-center gap-5">
                    <HiOutlineMail color="#0089E7" size={30}/>
                    <StyledSpan color="#002137" fontSize="1.375rem" fontFamily="Myriad Regular">
                        Sign up and receive our news by email
                    </StyledSpan>
                </Box>
    
                <Box>
                    <form action="">
                     <Box className="flex flex-col sm:flex-row gap-10 sm:items-center">
                      <Box className="flex sm:w-auto flex-col sm:flex-row items-center gap-7">
                        <Box>
                            <StyledInput placeholder="Name"/>
                        </Box>
                        <Box>
                            <StyledInput placeholder="e-mail@example.com"/>
                        </Box>
                      </Box>
    
                      <Box className="mb-7">
                         <StyledButtonForm to=''>
                            Register
                         </StyledButtonForm>
                      </Box>
                     </Box>
                    </form>
                </Box>
            </StyledBox>
    
    
            </Container>
    
            <FooterBanner onClick={scrollToTop}/>
    
            <Footer />
                
    
            <Modal 
            open={modalOpen}
            onClose={handleCloseModal}
            >
            <Box className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[95%] lg:w-[60%]">
            <Player>
            <Youtube videoId="ak-c0y9NkZA" />
        
    
            <DefaultUi noClickToPlay>
            </DefaultUi>
            </Player>
            </Box>
            </Modal>
            <ScrollToTop />
            </div>
        )
    } else if (isSpanish) {
        return (
            <div>
            <Navbar />
            <Swiper navigation={true}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
            pagination={true}
              
            modules={[Navigation, Autoplay, Pagination]} className="mySwiper">
            <SwiperSlide className="w-full slide-1 h-[550px] sm:h-[700px]">
                <Container className="h-full">
                    <Box className="flex flex-col justify-center h-full">
                    <Box className="lg:w-[55%] xl:w-[45%] mb-10">
                        <StyledH1>
                        Soluciones tecnológicas y sostenibles en polímeros de ingeniería
                        </StyledH1>
                    </Box>
    
                    <Box className="lg:w-[44%]">
                        <StyledP color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                        Wirklich está motivado por el desafío de encontrar <StyledSpan fontFamily="Myriad Bold">soluciones creativas y eficientes</StyledSpan> para reemplazar la aplicación de materiales, como el metal y el caucho, con plástico.
                        </StyledP>
                    </Box>
                    </Box>
                </Container>
            </SwiperSlide>
            <SwiperSlide className="w-full slide-2 h-[550px] sm:h-[700px]">
            <Container className="h-full">
                    <Box className="flex flex-col justify-center h-full">
                    <Box className="lg:w-[55%] xl:w-[65%] mb-10">
                        <StyledH1>
                        Tecnología de punta en la transformación de piezas metálicas en piezas poliméricas
                        </StyledH1>
                    </Box>
    
                    <Box className="lg:w-[44%]">
                        <StyledP color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                        Wirklich está motivado por el desafío de encontrar <StyledSpan fontFamily="Myriad Bold">soluciones creativas y eficientes</StyledSpan> para reemplazar la aplicación de materiales, como el metal y el caucho, con plástico.
                        </StyledP>
                    </Box>
                    </Box>
                </Container>
            </SwiperSlide>
            <SwiperSlide className="w-full slide-3 h-[550px] sm:h-[700px]">
            <Container className="h-full">
                    <Box className="flex flex-col justify-center h-full">
                    <Box className="lg:w-[55%] xl:w-[65%] mb-10">
                        <StyledH1>
                        Calidad y precisión en la inyección de polímeros de ingeniería
                        </StyledH1>
                    </Box>
    
                    <Box className="lg:w-[44%]">
                        <StyledP color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                        Wirklich está motivado por el desafío de encontrar <StyledSpan fontFamily="Myriad Bold">soluciones creativas y eficientes</StyledSpan> para reemplazar la aplicación de materiales, como el metal y el caucho, con plástico.
                        </StyledP>
                    </Box>
                    </Box>
                </Container>
            </SwiperSlide>
          </Swiper>
    
    
            <Container>
                <Box className="-translate-y-[60px] shadow-md flex-col sm:flex-row sm:items-center px-10 justify-between py-16 sm:py-10 z-30 relative" display='flex' bgcolor='#FFF' borderRadius={2} width='100%'>
                  <Box className="overflow-x-auto w-full sm:w-[50%] lg:w-[75%] gap-8 pb-3 xl:pb-0 styled-scrollbar" display='flex'>
                    <Box display='flex' gap={2} alignItems='center' flex='none'>
                        <ExperienceProfessional className="text-sm"/>
                        <Box display='flex' flexDirection='column'>
                        <StyledSpan color='#616161' fontSize="1.375rem" fontFamily="Myriad SemiBold">
                        Profesionales con experiencia
                        </StyledSpan>
    
                        <StyledSpan color="#8A8A8A" fontSize="1.125rem" fontFamily="Myriad Regular">
                        con profundo conocimiento técnico
                        </StyledSpan>
                        </Box>
                    </Box>
    
                    <Box display='flex' gap={2} alignItems='center' flex='none'>
                        <QualityPrecision className="w-[2.688rem]"/>
                        <Box display='flex' flexDirection='column'>
                        <StyledSpan color='#616161' fontSize="1.375rem" fontFamily="Myriad SemiBold">
                        calidad y precisión
                        </StyledSpan>
    
                        <StyledSpan color="#8A8A8A" fontSize="1.125rem" fontFamily="Myriad Regular">
                        En piezas inyectadas
                        </StyledSpan>
                        </Box>
                    </Box>
    
                    <Box display='flex' gap={2} alignItems='center' flex='none'>
                        <Solutions className="w-[2.688rem]"/>
                        <Box display='flex' flexDirection='column'>
                        <StyledSpan color='#616161' fontSize="1.375rem" fontFamily="Myriad SemiBold">
                        Soluciones personalizadas
                        </StyledSpan>
    
                        <StyledSpan color="#8A8A8A" fontSize="1.125rem" fontFamily="Myriad Regular">
                        Para la necesidad de cada cliente
                        </StyledSpan>
                        </Box>
                    </Box>
                 </Box>
    
                 <Box className="mt-10 sm:mt-0">
                    <StyledButton onClick={scrollToTop} to='/contato'>
                    Entrar en contacto
                    </StyledButton>
                 </Box>
    
                </Box>
    
    
                <StyledBox className="py-36">
                    <div
                        className="w-full lg:w-[48%] xl:w-[42%]">
    
                        <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                        SOBRE NOSOTROS
                        </StyledSpan>
                        <StyledH2>
                        Desde 2005 en constante evolución en la transformación de termoplásticos
                        </StyledH2>
                        <StyledP className="mb-8" color="#707070" fontFamily="Myriad Regular">
                        Wirklich inició su exitosa trayectoria en el año <strong className="text-black">2005</strong>, para atender un mercado exigente, que padecía la falta de empresas preparadas para desarrollar y procesar <strong className="text-black">productos inyectados</strong> en polímeros de ingeniería de alto y ultra rendimiento.
                        </StyledP>
                        <StyledButton onClick={scrollToTop} to='/empresa'>
                        Conoce Wirklich
                        </StyledButton>
    
                    </div>
    
                    <div
                        className="lg:w-[40%] xl:w-[50%]">
                        <Box className="bg-modal h-[300px] sm:h-[400px] xl:w-[40.625rem] xl:h-[27.188rem] flex justify-center items-center rounded-3xl xl:rounded-none">
                            <YoutubePlayer onClick={handleOpenModal} className="cursor-pointer hover:scale-105 duration-300"/>
                        </Box>
                    </div>
                </StyledBox>
    
    
    
              
               <StyledBox centerRow className="lg:items-center flex-wrap lg:flex-row">
                    <Box className="w-full lg:w-[38%]">
                        <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                        SEGMENTOS
                        </StyledSpan>
                        <StyledH2>
                        Segmentos de mercado
                        </StyledH2>
                    </Box>
    
                    <Box className="w-full sm:w-[70%] lg:w-[30%]">
                        <StyledP color='#707070' fontFamily="Myriad Regular">
                        A través de la innovación, buscamos desarrollar y producir productos poliméricos para diferentes aplicaciones.
                        </StyledP>
                    </Box>
    
                    <Box className="w-full sm:w-[24%] md:w-[26%] lg:w-[22%] sm:justify-end lg:relative flex" gap={1}>
                        <SlideArrow onClick={slidePrev2} className="rotate-180 cursor-pointer"/>
                        <SlideArrow onClick={slideNext2} className="cursor-pointer"/>
                    </Box>
                </StyledBox>
    
                <Box ref={carousel2} className="flex gap-10 overflow-x-auto h-[560px] mt-12 carousel">
    
                <Box className="w-[27.5rem] flex flex-col justify-between flex-none h-[560px] border rounded-xl">
                        <Box className="h-[255px]">
                            <img src="/static/img/page_home/trilhos.png" alt="" />
                        </Box>
                        <Box className="mt-8 h-[15px]">
                            <StyledSpan className="px-7" color="#002137" fontFamily="Myriad SemiBold" fontSize="1.375rem">
                            Carril
                            </StyledSpan>
                        </Box>
                        <Box className="mt-1 h-[120px]">
                            <StyledP className="px-7" color="#8A8A8A" fontFamily="Myriad Light" fontSize="1.125rem">
                            Producción de piezas para aplicación en vías férreas, tales como aisladores, plantillas, bujes, placas y otros productos.
                            </StyledP>
                        </Box>
    
                        <Box className="flex justify-center items-center h-[58px] border-t">
                            <Link onClick={moveToFerroviario} to='/solu%C3%A7%C3%B5es' className="group">
                                <StyledSpan className="flex items-center gap-3 duration-700 group-hover:text-[#000]" color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                Quiero saber más
                                    <Box className="mt-1">
                                        <ArrowSlide className="rotate-180 duration-700 stroke-[#0089e7] group-hover:fill-black group-hover:stroke-black" color="#000"/>
                                    </Box>
                                </StyledSpan>
                            </Link>
                        </Box>
                    </Box>
    
    
                    <Box ref={slide2} className="w-[27.5rem] flex flex-col justify-between flex-none h-[560px] border rounded-xl">
                        <Box className="h-[255px]">
                            <img src="https://uploaddeimagens.com.br/images/003/946/527/full/Interse%C3%A7%C3%A3o_29.png?1658171048" alt="" />
                        </Box>
                        <Box className="mt-8 h-[15px]">
                            <StyledSpan className="px-8" color="#002137" fontFamily="Myriad SemiBold" fontSize="1.375rem">
                                Agro
                            </StyledSpan>
                        </Box>
                        <Box className="mt-1 h-[120px]">
                            <StyledP className="px-8 w-[98%]" color="#8A8A8A" fontFamily="Myriad Light" fontSize="1.125rem">
                            Sustitución de piezas metálicas por plástico de altas prestaciones, reduciendo considerablemente el peso de las piezas y manteniendo las propiedades de aplicación.
                            </StyledP>
                        </Box>
    
                        <Box className="flex justify-center items-center h-[58px] border-t">
                            <Link onClick={moveToAgro} to='/solu%C3%A7%C3%B5es' className="group">
                                <StyledSpan className="flex items-center gap-3 duration-700 group-hover:text-[#000]" color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                Quiero saber más
                                    <Box className="mt-1">
                                        <ArrowSlide className="rotate-180 duration-700 stroke-[#0089e7] group-hover:fill-black group-hover:stroke-black" color="#000"/>
                                    </Box>
                                </StyledSpan>
                            </Link>
                        </Box>
                    </Box>
    
                    <Box className="w-[27.5rem] flex flex-col justify-between flex-none h-[560px] border rounded-xl">
                        <Box className="h-[255px]">
                            <img src={`/static/img/page_home/frigorifico.png`} alt="" />
                        </Box>
                        <Box className="mt-8 h-[15px]">
                            <StyledSpan className="px-8" color="#002137" fontFamily="Myriad SemiBold" fontSize="1.375rem">
                            Refrigerador
                            </StyledSpan>
                        </Box>
                        <Box className="mt-1 h-[120px]">
                            <StyledP className="px-8 w-[98%]" color="#8A8A8A" fontFamily="Myriad Light" fontSize="1.125rem">
                            Productos poliméricos para diversas aplicaciones en frigoríficos, principalmente en sustitución del acero inoxidable.
                            </StyledP>
                        </Box>
    
                        <Box className="flex justify-center items-center h-[58px] border-t">
                            <Link onClick={moveToFrigorifico} to='/solu%C3%A7%C3%B5es' className="group">
                                <StyledSpan className="flex items-center gap-3 duration-700 group-hover:text-[#000]" color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                Quiero saber más
                                    <Box className="mt-1">
                                        <ArrowSlide className="rotate-180 duration-700 stroke-[#0089e7] group-hover:fill-black group-hover:stroke-black" color="#000"/>
                                    </Box>
                                </StyledSpan>
                            </Link>
                        </Box>
                    </Box>
    
                    
    
                    <Box className="w-[27.5rem] flex flex-col justify-between flex-none h-[560px] border rounded-xl">
                        <Box className="h-[255px]">
                            <img src="/static/img/page_home/placassolares.png" alt="" />
                        </Box>
                        <Box className="mt-8 h-[15px]">
                            <StyledSpan className="px-7" color="#002137" fontFamily="Myriad SemiBold" fontSize="1.375rem">
                            Energía solar
                            </StyledSpan>
                        </Box>
                        <Box className="mt-1 h-[120px]">
                            <StyledP className="px-7 w-[91%]" color="#8A8A8A" fontFamily="Myriad Light" fontSize="1.125rem">
                            Wirklich está presente en el mercado de la energía solar a través de la producción de piezas en polímeros utilizados en el movimiento y fijación de paneles fotovoltaicos.
                            </StyledP>
                        </Box>
    
                        <Box className="flex justify-center items-center h-[58px] border-t">
                            <Link onClick={moveToEnergiaSolar} to='/solu%C3%A7%C3%B5es' className="group">
                                <StyledSpan className="flex items-center gap-3 duration-700 group-hover:text-[#000]" color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                Quiero saber más
                                    <Box className="mt-1">
                                        <ArrowSlide className="rotate-180 duration-700 stroke-[#0089e7] group-hover:fill-black group-hover:stroke-black" color="#000"/>
                                    </Box>
                                </StyledSpan>
                            </Link>
                        </Box>
                    </Box>
    
                    <Box className="w-[27.5rem] flex flex-col justify-between flex-none h-[560px] border rounded-xl">
                        <Box className="h-[255px]">
                            <img src="https://uploaddeimagens.com.br/images/003/947/203/full/Ret%C3%A2ngulo_893.png?1658226655" alt="" />
                        </Box>
                        <Box className="mt-8 h-[15px]">
                            <StyledSpan className="px-7" color="#002137" fontFamily="Myriad SemiBold" fontSize="1.375rem">
                            Medio ambiente
                            </StyledSpan>
                        </Box>
                        <Box className="mt-1 h-[120px]">
                            <StyledP className="px-7 w-[91%]" color="#8A8A8A" fontFamily="Myriad Light" fontSize="1.125rem">
                            Wirklich viene actuando directamente a favor del medio ambiente, principalmente en el tratamiento de los recursos hídricos.
                            </StyledP>
                        </Box>
    
                        <Box className="flex justify-center items-center h-[58px] border-t">
                            <Link onClick={moveToMeioAmbiente} to='/solu%C3%A7%C3%B5es' className="group">
                                <StyledSpan className="flex items-center gap-3 duration-700 group-hover:text-[#000]" color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                Quiero saber más
                                    <Box className="mt-1">
                                        <ArrowSlide className="rotate-180 duration-700 stroke-[#0089e7] group-hover:fill-black group-hover:stroke-black" color="#000"/>
                                    </Box>
                                </StyledSpan>
                            </Link>
                        </Box>
                    </Box>
                </Box>
              
    
                
               
    
                <StyledBox className="py-36" id="tecnologia">
                    <div
                        className="w-full lg:w-[50%] xl:w-[42%] 2xl:w-[38%]">
                        <StyledH2>
                        Tecnología de punta en partes especiales
                        </StyledH2>
                        <Box className="mt-10">
                            <Box className="flex justify-center items-center w-full h-[350px]  rounded-xl overflow-hidden">
                                {isLoading? (
                                    <Skeleton width={532} height={570} />
                                ) : 
                                
                                (
                                
                                <img src="/static/img/page_home/gifrobo.gif" alt="" />
    
                                )}
                            </Box>
                        </Box>
                    </div>
    
            
                    
                    <div
                        className="w-full lg:w-[40%] xl:w-[43%] 2xl:w-[46%]">
                        <StyledP className="lg:w-[100%] leading-loose" color="#002137" fontFamily="Made Light">
                        Desde sus inicios, Wirklich ha combinado los más sólidos principios de la tradición con el poder transformador de la innovación, para trabajar activamente en el desarrollo y producción de piezas plásticas de calidad.
                        </StyledP>
    
                        <StyledP className="mt-8 border-b pb-8 border-gray-300" color="#707070" fontFamily="Myriad Regular">

                        Operando en el mercado de <StyledSpan color="#002137" fontFamily="Myriad Bold">piezas técnicas inyectadas</StyledSpan>, el gran desafío de la empresa es desarrollar soluciones creativas y eficientes para reemplazar la aplicación de materiales, como el metal y el caucho. , para plástico, aportando varias ventajas, principalmente en lo que se refiere a la reducción de peso y coste de las piezas.                        </StyledP>
    
                        <Box className="mt-10">
                        <StyledButton onClick={scrollToTop} to='/empresa'>
                        Conoce Wirklich
                        </StyledButton>
                        </Box>
                    </div>
                 
    
                </StyledBox>
    
                <StyledBox id="inovação">
                    <Box className="w-full lg:w-[40%]">
                        <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                        TERCERIZACIÓN
                        </StyledSpan>
    
                        <StyledH2 className="w-[90%]">
                        Servicio de externalización
                        </StyledH2>
    
                        <StyledP className="mb-8 mt-8" color="#707070" fontFamily="Myriad Regular">
                        Con máquinas de precisión, una ingeniería calificada y experimentada, procesos mapeados y consolidados en producción y control de calidad, y conocimientos técnicos de punta en la elaboración de compuestos poliméricos, logramos implementar tanto en el desarrollo de productos como en el servicio de outsourcing de producción, consistencia, repetibilidad y calidad consolidadas.
                        </StyledP>
    
    
                        <StyledButton onClick={scrollToTop} to='/contato'>
                        Entrar en contacto
                        </StyledButton>
                    </Box>
    
                    <Box className="w-full lg:w-[45%] block md:flex lg:block md:justify-between">
                            <Box className="flex justify-center items-center w-full md:w-[50%] lg:w-full h-[335px] rounded-xl overflow-hidden">
                            {isLoading? (
                                    <Skeleton width={532} height={570} />
                                ) : 
                                
                                (
                                
                                <img src="/static/img/page_home/gif_guindaste.gif" alt="" />
    
                                )}
                            </Box>
                        <Box className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-5 lg:items-center mt-12 w-full lg:justify-between md:w-[40%] lg:w-full">
                            <LightBulb className="sm:w-[25%] lg:w-[30%] xl:w-[20%]"/>
                            <StyledP color="#707070" fontFamily="Myriad Regular">
                            Tráenos tu <StyledSpan color="#002137" fontFamily="Myriad Bold">necesidad</StyledSpan>, la evaluaremos y propondremos la solución más adecuada. Todo ello con la máxima calidad, agilidad y precisión.                            </StyledP>
                        </Box>
                    </Box>
                </StyledBox>
    
            </Container>
    
            <Box className="py-16 mt-36 bg-connections">
                <Container>
                    <StyledBox center>
                        <Box>
                            <StyledH2 white>
                            Soluciones personalizadas
                            </StyledH2>
    
                            <StyledSpan className="mt-5 sm:mt-0 block w-[65%] sm:w-full" color="#FFF" fontFamily="Made Light" fontSize="1.375rem">
                            Para la necesidad de cada cliente
                            </StyledSpan>
                        </Box>
    
                        <Box className="w-full lg:w-[45%]">
                            <StyledP color="#CBCBCB" fontFamily="Myriad Regular">
                            La inyección de <StyledSpan color="#FFF" fontFamily="Myriad Bold">plásticos de ingeniería</StyledSpan> y de alto rendimiento, permite que los proyectos desarrollados para nuestros clientes tengan varios beneficios como:
                            </StyledP>
                        </Box>
                    </StyledBox>
    
                    <Box className="flex sm:flex-wrap overflow-x-auto styled-scrollbar pb-10 sm:pb-0 sm:justify-center gap-5 lg:gap-7 2xl:gap-5 mt-16">
                        <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                            <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                <FaWeightHanging color='#C42623' size={20}/>
                            </Box>
                            <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Reducción de peso
                            </StyledSpan>
                        </Box>
    
                        <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                            <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                <BsLink45Deg color='#C42623' size={30}/>
                            </Box>
                            <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Alta resistencia mecánica y térmica
                            </StyledSpan>
                        </Box>
    
                        <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                            <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                <RiShieldCheckFill color='#C42623' size={25}/>
                            </Box>
                            <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Mayor durabilidad
                            </StyledSpan>
                        </Box>
    
                        <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                            <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                <FaRecycle color='#C42623' size={25}/>
                            </Box>
                            <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Materiales reciclables
                            </StyledSpan>
                        </Box>
    
                        <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                            <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                <RiOilFill color='#C42623' size={25}/>
                            </Box>
                            <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Eliminación de agentes lubricantes
                            </StyledSpan>
                        </Box>
    
                        <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[40px] lg:px-[10px] w-[18rem] sm:w-[19rem] lg:w-[13.25rem] 2xl:px-[10px] py-6 rounded-xl">
                            <Box className="w-[40px] h-[40px] flex justify-center items-center bg-[#F5DADA] rounded animation-bounce">
                                <GiAnvilImpact color='#C42623' size={25}/>
                            </Box>
                            <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Alta resistencia al impacto
                            </StyledSpan>
                        </Box>
                    </Box>
    
                </Container>
            </Box>
    
            <Box className="bg-[#F8F8FA] py-36 lg:py-0 lg:pt-24 lg:h-[750px]">
            <Container>
                <StyledBox>
                    <Box className="w-full lg:w-[35%]">
                        <StyledSpan color="#009E15" fontSize="1.125rem" fontFamily="Myriad Regular">
                        RESPONSABILIDAD
                        </StyledSpan>
    
                        <StyledH2>
                        Compromiso con el medio ambiente
                        </StyledH2>
    
                        <Box className="relative"> 
                            <img src={`${baseImageUrlHome}wirklich-filtro-verde.png`} alt="" />
                            <Box className="absolute sm:top-20 bg-white rounded-lg w-[260px] h-[70px] flex items-center justify-center shadow-lg right-2/4 translate-x-2/4 sm:translate-x-0 -bottom-10 sm:bottom-0 sm:right-36 lg:-right-4">
                            <Leaf/>
                            </Box>
                        </Box>
                    </Box>
    
                    <Box className="relative hidden lg:flex w-[15%] justify-center items-center">
                        <LongArrow className="lg:mb-12 xl:mb-24"/>
                    </Box>
    
                    <Box className="w-full lg:w-[50%]">
                        <StyledH3 semiTitle>
                        Wirklich consiguió aliarse con el entorno a través de la planificación de sus instalaciones
                        </StyledH3>
    
                        <StyledP color="#707070" fontFamily="Myriad Regular">
                        La empresa dispone de un depósito para <StyledSpan color="#009E15" fontFamily="Myriad Bold">retención de agua de lluvia</StyledSpan>, que es <StyledSpan color="#009E15" fontFamily="Myriad Bold">reutilizado</StyledSpan> para riego externo. El edificio cuenta con entrada de ventilación e iluminación natural, lo que se traduce en una disminución del consumo energético.
                        </StyledP>
    
                        <Box className="bg-white px-7 py-12 rounded-xl shadow-sm flex flex-col gap-7 mt-10 mb-16">
                            <Box className="flex items-center gap-3 justify-between sm:justify-start">
                                <Check className="w-[15%] sm:w-auto"/>
                                <StyledSpan className="w-[80%] sm:w-auto" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Somos una empresa altamente sustentable
                                </StyledSpan>
                            </Box>
                            <Box className="flex items-center gap-3 justify-between sm:justify-start">
                                <Check className="w-[15%] sm:w-auto"/>
                                <StyledSpan className="w-[80%] sm:w-auto" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                El 15% de nuestra energía es generación solar
                                </StyledSpan>
                            </Box>
                            <Box className="flex items-center gap-3 justify-between sm:justify-start">
                                <Check className="w-[15%] sm:w-auto"/>
                                <StyledSpan className="w-[80%] sm:w-auto" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Creemos en la sostenibilidad y las energías renovables
                                </StyledSpan>
                            </Box>
    
                            <Box className="flex items-center gap-3 justify-between sm:justify-start">
                                <Check className="w-[15%] sm:w-auto"/>
                                <StyledSpan className="w-[80%] sm:w-auto" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Reducimos las emisiones de CO2
                                </StyledSpan>
                            </Box>
                        </Box> 
    
                        <StyledButton onClick={scrollToTop} green to="/meio-ambiente">
                        Conozca la tecnología Werde
                        </StyledButton>
                    </Box>
                </StyledBox>
            </Container>
            </Box>
    
            <Container>
            <BlogSlider />
    
            <StyledBox center>
                <Box className="flex items-center gap-5">
                    <HiOutlineMail color="#0089E7" size={30}/>
                    <StyledSpan color="#002137" fontSize="1.375rem" fontFamily="Myriad Regular">
                    Suscríbete y recibe nuestras novedades por email
                    </StyledSpan>
                </Box>
    
                <Box>
                    <form action="">
                     <Box className="flex flex-col sm:flex-row gap-10 sm:items-center">
                      <Box className="flex sm:w-auto flex-col sm:flex-row items-center gap-7">
                        <Box>
                            <StyledInput placeholder="Nome"/>
                        </Box>
                        <Box>
                            <StyledInput placeholder="e-mail@exemplo.com.br"/>
                        </Box>
                      </Box>
    
                      <Box className="mb-7">
                         <StyledButtonForm to=''>
                         Registrar
                         </StyledButtonForm>
                      </Box>
                     </Box>
                    </form>
                </Box>
            </StyledBox>
    
    
            </Container>
    
            <FooterBanner onClick={scrollToTop}/>
    
            <Footer />
                
    
            <Modal 
            open={modalOpen}
            onClose={handleCloseModal}
            >
            <Box className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[95%] lg:w-[60%]">
            <Player>
            <Youtube videoId="ak-c0y9NkZA" />
        
    
            <DefaultUi noClickToPlay>
            </DefaultUi>
            </Player>
            </Box>
            </Modal>
            <ScrollToTop />
            </div>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

