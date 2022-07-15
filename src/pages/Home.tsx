import { Typography, Box, Modal } from "@mui/material";
import { BackgroundHeader } from "../components/BackgroundHeader";
import { Navbar } from "../components/Navbar";
import { Container } from "../styled-components/Container";
import { StyledH1, StyledH2, StyledH3 } from "../styled-components/StyledH1";
import { StyledP } from "../styled-components/StyledP";
 
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
import Leaf from "../Static/svg/Leaf";
import Check from "../Static/svg/Check";
import LongArrow from "../Static/svg/LongArrow";
import ArrowSlide from "../Static/svg/ArrowSlide";
import { StyledSpan } from "../styled-components/StyledSpan";
import { StyledButton, StyledButtonForm } from "../styled-components/StyledButton";
import { StyledBox } from "../styled-components/StyledBox";
import YoutubePlayer from "../Static/svg/YoutubePlayer";
import { useEffect, useRef, useState } from "react";
import SlideArrow from "../Static/svg/SlideArrow";
import { Link } from "react-router-dom";

import { AiOutlineArrowRight, AiOutlineMail } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { StyledInput } from "../styled-components/StyledInput";
import { FooterBanner } from "../components/FooterBanner";
import { Footer } from "../components/Footer";


export function Home() {



    const [modalOpen, setModalOpen] = useState(false)
    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

   

    const carousel = useRef<any>()
    const slide = useRef<any>()
    const margin = 40


    const slidePrev = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        carousel.current.scrollLeft -= slide.current.offsetWidth + margin
    }
   
    const slideNext = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        carousel.current.scrollLeft += slide.current.offsetWidth + margin
    }

   

    

    return (
        <div>
        <Navbar />
        <BackgroundHeader imageSource="https://uploaddeimagens.com.br/images/003/938/347/full/bg-hero.png?1657627565" heightSize={80}>
         <Container>
            <Box className="w-full lg:w-[60%] xl:w-[48%]">
            <StyledH1>
            Soluções tecnológicas e sustentáveis em polímeros de engenharia
            </StyledH1>   
            <StyledP color="#FFF" className="mt-10" fontFamily="Myriad Regular">
            A Wirklich é movida pelo desafio de encontrar soluções criativas e eficientes para substituir a aplicação de materiais, como o metal e a borracha, pelo plástico.
            </StyledP>
            </Box>
         </Container>
        </BackgroundHeader>
        <Container>
            <Box className="-translate-y-[60px] shadow-md flex-col sm:flex-row sm:items-center px-10 justify-between py-16 sm:py-10" display='flex' bgcolor='#FFF' borderRadius={2} width='100%'>
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
                <StyledButton to='/contato'>
                    Entrar em contato
                </StyledButton>
             </Box>

            </Box>


            <StyledBox className="py-36">
                <Box className="w-full lg:w-[48%] xl:w-[42%]">
                    <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                    SOBRE NÓS
                    </StyledSpan>
                    <StyledH2>
                    Desde de 2005 em constante evolução na transformação de termoplásticos
                    </StyledH2>
                    <StyledP className="mb-8" color="#707070" fontFamily="Myriad Regular">
                    A Wirklich iniciou a sua trajetória de sucesso no ano de <strong className="text-black">2005</strong>, para atender um mercado exigente, que se ressentia da falta de empresas preparadas para desenvolver e processar <strong className="text-black">produtos injetados</strong> em polímeros com engenharia de alta e ultra performance.
                    </StyledP>
                    <StyledButton to='/empresa'>
                        Conheça a Wirklich
                    </StyledButton>

                </Box>

                <Box className="lg:w-[40%] xl:w-[50%]">
                    <Box className="bg-modal h-[300px] sm:h-[400px] xl:w-[40.625rem] xl:h-[27.188rem] flex justify-center items-center rounded-3xl xl:rounded-none">
                        <YoutubePlayer onClick={handleOpenModal} className="cursor-pointer hover:scale-105 duration-300"/>
                    </Box>
                </Box>
            </StyledBox>

           <StyledBox className="items-center">
                <Box className="w-[38%]">
                    <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                        SEGMENTOS
                    </StyledSpan>
                    <StyledH2>
                        Segmentos de mercado
                    </StyledH2>
                </Box>

                <Box className="w-[30%]">
                    <StyledP color='#707070' fontFamily="Myriad Regular">
                        Buscamos através da inovação, desenvolver e produzir produtos em polímeros para aplicações diferenciadas.
                    </StyledP>
                </Box>

                <Box className="w-[22%] justify-end relative" display='flex' gap={1}>
                    <SlideArrow className="rotate-180 cursor-pointer"/>
                    <SlideArrow   className="cursor-pointer"/>
                </Box>
            </StyledBox>
          

            
           

            <StyledBox className="py-36">
                <Box className="w-full lg:w-[50%] xl:w-[42%] 2xl:w-[38%]">
                    <StyledH2>
                        Tecnologia de ponta em peças especiais
                    </StyledH2>
                    <Box className="mt-10">
                        <Box className="flex justify-between md:w-[70%] lg:w-full">
                        <img src="https://uploaddeimagens.com.br/images/003/938/357/full/foto_das_maquinas.png?1657628151" alt="" />
                        <Box className="relative">
                        <img className="w-[140px] max-w-[140px] sm:w-[180px] sm:max-w-[180px] h-[160px] sm:h-[261px] absolute sm:static right-0 -top-5" src="https://uploaddeimagens.com.br/images/003/938/358/full/foto_das_maquinas2.png?1657628173" alt="" />
                        <img className="absolute w-[250px] max-w-[250px] right-0 bottom-6" src="https://uploaddeimagens.com.br/images/003/938/361/full/tecnologia.png?1657628259" alt="" />
                        </Box>
                        </Box>

                    </Box>
                </Box>

                <Box className="w-full lg:w-[45%] xl:w-[51%] 2xl:w-[51%]">
                    <StyledP className="lg:w-[100%] leading-loose" color="#002137" fontFamily="Made Light">
                        Desde seu início, a Wirklich alia os mais sólidos princípios da tradição, com o poder transformador da inovação, para trabalhar ativamente no desenvolvimento e na produção de peças de qualidade em plástico
                    </StyledP>

                    <StyledP className="mt-8 border-b pb-8 border-gray-300" color="#707070" fontFamily="Myriad Regular">
                        Atuando no mercado de <StyledSpan color="#002137" fontFamily="Myriad Bold">peças técnicas injetadas</StyledSpan>, o grande desafio da empresa é desenvolver soluções criativas e eficientes para substituir a aplicação de materiais, como o metal e a borracha, pelo plástico, proporcionando diversas vantagens, principalmente no que diz respeito à redução de peso e de custos das peças.
                    </StyledP>

                    <StyledH3 className="mt-8">
                        Serviço de terceirização
                    </StyledH3>

                    <StyledP className="mb-12" color="#707070" fontFamily="Myriad Regular">
                        Oferecemos o serviço exclusivo de <StyledSpan color="#002137" fontFamily="Myriad Bold">terceirização de mão de obra</StyledSpan>, com máquinas e equipamentos de altíssima qualidade à disposição de nossos clientes.
                    </StyledP>

                    <StyledButton to='/empresa'>
                        Conheça a Wirklich
                    </StyledButton>
                </Box>

            </StyledBox>

            <StyledBox>
                <Box className="w-full lg:w-[40%]">
                    <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                        INOVAÇÃO
                    </StyledSpan>

                    <StyledH2 className="w-[90%]">
                        O novo caminho da inovação
                    </StyledH2>

                    <StyledP className="mb-8 mt-8" color="#707070" fontFamily="Myriad Regular">
                    Movidos pelo desafio de desenvolver soluções sustentáveis e tecnológicas, temos o <StyledSpan color="#002137" fontFamily="Myriad Bold">poder da inovação</StyledSpan>, somos reconhecidos principalmente pelo mercado ferroviário, por desenvolver produtos em <StyledSpan color="#002137" fontFamily="Myriad Bold">polímero</StyledSpan> para substituir a aplicação de outros materiais.
                    </StyledP>

                    <StyledP className="mb-7" color="#707070" fontFamily="Myriad Regular">
                    Para inovar cada vez mais, a empresa está sempre em busca de novos campos de aplicação para o <StyledSpan color="#002137" fontFamily="Myriad Bold">plástico</StyledSpan>, contando com Know-how diferenciado e foco permanente nas necessidades de cada cliente.
                    </StyledP>

                    <StyledButton to='/contato'>
                        Entrar em contato
                    </StyledButton>
                </Box>

                <Box className="w-full lg:w-[45%] block md:flex lg:block md:justify-between">
                    <Box className="relative md:w-[50%] lg:w-full">
                    <img src="https://uploaddeimagens.com.br/images/003/938/359/full/novo_caminho_da_inovacao.png?1657628211" alt="" />
                    <img className="absolute right-0 2xl:right-7 bottom-0" src="https://uploaddeimagens.com.br/images/003/938/395/full/stars.png?1657629827" alt="" />
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

        <Box className="py-16 mt-36 bg-[#002137]">
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
                    <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[50px] 2xl:px-[60px] py-6 rounded-xl">
                        <WeightReduce />
                        <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Redução de peso
                        </StyledSpan>
                    </Box>

                    <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[50px] 2xl:px-[60px] py-6 rounded-xl">
                        <HighResistence />
                        <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Alta resistência
                        </StyledSpan>
                    </Box>

                    <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[50px] 2xl:px-[60px] py-6 rounded-xl">
                        <MoreDurability />
                        <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Maior durabilidade
                        </StyledSpan>
                    </Box>

                    <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[50px] 2xl:px-[60px] py-6 rounded-xl">
                        <WeightReduce />
                        <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Redução de peso
                        </StyledSpan>
                    </Box>

                    <Box className="flex flex-none flex-col items-center justify-center gap-5 bg-white px-[50px] 2xl:px-[60px] py-6 rounded-xl">
                        <WeightReduce />
                        <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.25rem">
                            Redução de peso
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
                        <img src="https://uploaddeimagens.com.br/images/003/938/548/full/Grupo_1152.png?1657635683" alt="" />
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
                    A empresa possui um tanque para <StyledSpan color="#009E15" fontFamily="Myriad Bold">retenção da água da chuva</StyledSpan>, que pode ser <StyledSpan color="#009E15" fontFamily="Myriad Bold">reaproveitada</StyledSpan> na refrigeração industrial. O prédio possui entrada de ventilação e iluminação natural, o que ocasiona diminuição do consumo de energia elétrica..
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
                    </Box> 

                    <StyledButton green to="/meio-ambiente">
                        Conheça a tecnologia Werde
                    </StyledButton>
                </Box>
            </StyledBox>
        </Container>
        </Box>

        <Container>
            <StyledBox center className="pt-52 pb-16">
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
                        <ArrowSlide onClick={slidePrev} className="cursor-pointer"/>
                        <ArrowSlide onClick={slideNext} className="rotate-180 cursor-pointer"/>
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
                        <Link to=''>
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
                        <Link to=''>
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
                        <Link to=''>
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
                        <Link to=''>
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
                        <Link to=''>
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
                     <StyledButtonForm>
                        Cadastrar
                     </StyledButtonForm>
                  </Box>
                 </Box>
                </form>
            </Box>
        </StyledBox>


        </Container>

        <FooterBanner />

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
        </div>
    )
}

