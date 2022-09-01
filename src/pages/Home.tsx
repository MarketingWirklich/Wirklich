import { useRef, useState } from "react";

import { Box, Modal } from "@mui/material";
import { Navbar } from "../components/Navbar";
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
 
import { Player, DefaultUi, Youtube } from '@vime/react';
import '@vime/core/themes/default.css';

{/* Import de SVG's */}
import ExperienceProfessional from "../Static/svg/ExperienceProfessional";
import QualityPrecision from "../Static/svg/QualityPrecision";
import Solutions from "../Static/svg/Solutions";
import LightBulb from "../Static/svg/LightBulb";
import WeightReduce from "../Static/svg/WeightReduce";
import HighResistence from "../Static/svg/HighResistence";
import MoreDurability from "../Static/svg/MoreDurability";
import ImpactResistence from "../Static/svg/ImpactResistence";
import Material from "../Static/svg/Material";
import Leaf from "../Static/svg/Leaf";
import Check from "../Static/svg/Check";
import LongArrow from "../Static/svg/LongArrow";
import ArrowSlide from "../Static/svg/ArrowSlide";
import YoutubePlayer from "../Static/svg/YoutubePlayer";
import SlideArrow from "../Static/svg/SlideArrow";
import { AiOutlineArrowRight } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper";
import { WhatsappButton } from "../components/WhatsappButton";
import { useDrawerContext } from "../Contexts/MainContext";

const baseImageUrlHome = "../static/img/page_home/"

export function Home() {

    
    const {
        scrollToTop, 
        moveToAgro,
        moveToFerroviario,
        moveToAutomotivo,
        moveToFrigorifico,
        moveToMeioAmbiente,
        moveToEnergiaSolar,
        moveToServicoDeTerceirizacao
    
    } = useDrawerContext()

    const [modalOpen, setModalOpen] = useState(false)
    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

   

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
                        Substituição de peças de metal por plástico de alta performance, reduzindo consideravelmente o peso das peças.
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
                        <img src={`${baseImageUrlHome}frigorifico.png`} alt="" />
                    </Box>
                    <Box className="mt-8 h-[15px]">
                        <StyledSpan className="px-8" color="#002137" fontFamily="Myriad SemiBold" fontSize="1.375rem">
                            Frigorífico
                        </StyledSpan>
                    </Box>
                    <Box className="mt-1 h-[120px]">
                        <StyledP className="px-8 w-[98%]" color="#8A8A8A" fontFamily="Myriad Light" fontSize="1.125rem">
                            Produtos de poliuretano termoplástico, resistente à hidrólise, e com uma durabilidade três vezes maior.
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
                        <img src="https://uploaddeimagens.com.br/images/003/947/196/full/Ret%C3%A2ngulo_893.png?1658225280" alt="" />
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
                        A Wirklich vem atuando diretamente em prol do meio ambiente.
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
                        <Box className="flex justify-center items-center w-full h-[350px] border border-gray-300 bg-blue-100 rounded-xl">
                           VÍDEO DO ROBÔ
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quo, recusandae sequi hic voluptas vero, fuga nulla doloribus provident nihil modi sed necessitatibus ducimus expedita harum ipsum placeat asperiores veniam.
                    </StyledP>

                    <StyledP className="mb-7" color="#707070" fontFamily="Myriad Regular">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repellendus voluptas laboriosam neque quo ullam tempore animi quisquam eaque, nihil nam architecto accusamus hic eum ipsam libero. Quo, ut neque!
                    </StyledP>

                    <StyledButton onClick={scrollToTop} to='/contato'>
                        Entrar em contato
                    </StyledButton>
                </Box>

                <Box className="w-full lg:w-[45%] block md:flex lg:block md:justify-between">
                        <Box className="flex justify-center items-center w-full md:w-[50%] lg:w-full h-[350px] border border-gray-300 bg-blue-100 rounded-xl">
                           GIF DO GUINDASTE
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
                    <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[50px] lg:w-[16.25rem] 2xl:px-[40px] py-6 rounded-xl">
                        <WeightReduce className="animation-bounce"/>
                        <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Redução de peso
                        </StyledSpan>
                    </Box>

                    <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[50px] lg:w-[16.25rem] 2xl:px-[40px] py-6 rounded-xl">
                        <HighResistence  className="animation-bounce"/>
                        <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Alta resistência
                        </StyledSpan>
                    </Box>

                    <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[50px] lg:w-[16.25rem] 2xl:px-[40px] py-6 rounded-xl">
                        <MoreDurability  className="animation-bounce"/>
                        <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Maior durabilidade
                        </StyledSpan>
                    </Box>

                    <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[50px] lg:w-[16.25rem] 2xl:px-[40px] py-6 rounded-xl">
                        <ImpactResistence  className="animation-bounce"/>
                        <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Resistência a impacto
                        </StyledSpan>
                    </Box>

                    <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[50px] lg:w-[16.25rem] 2xl:px-[40px] py-6 rounded-xl">
                        <Material  className="animation-bounce"/>
                        <StyledSpan className="text-center" color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Materiais recicláveis
                        </StyledSpan>
                    </Box>
                </Box>

            </Container>
        </Box>

        <Box className="bg-[#F8F8FA]  py-36 lg:py-0 lg:pt-24 lg:h-[750px]">
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
                    A empresa possui um tanque para <StyledSpan color="#009E15" fontFamily="Myriad Bold">retenção da água da chuva</StyledSpan>, que é <StyledSpan color="#009E15" fontFamily="Myriad Bold">reaproveitada</StyledSpan> para irrigação externa. O prédio possui entrada de ventilação e iluminação natural, o que ocasiona diminuição do consumo de energia elétrica.
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
            <StyledBox center className="pt-52 pb-16" id="noticias">
                <Box>
                    <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                        NOTÍCIAS
                    </StyledSpan>

                    <StyledH2>
                        Notícias do mercado do plástico
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
                        <Link onClick={scrollToTop} to='/blog/revolucao-40-inspira-ampliacao-da-wirklich'>
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
                        <Link onClick={scrollToTop} to=''>
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
                        <Link onClick={scrollToTop} to=''>
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
                        <Link onClick={scrollToTop} to=''>
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
                        <Link onClick={scrollToTop} to=''>
                            <StyledSpan className="flex items-center gap-2 group" color="#0089E7" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                Ler mais
                                <AiOutlineArrowRight className="mt-[2px] duration-300 group-hover"/>
                            </StyledSpan>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>

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
        <WhatsappButton />
        </div>
    )
}

