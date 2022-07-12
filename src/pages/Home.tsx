import { Typography, Box, Modal } from "@mui/material";
import { BackgroundHeader } from "../components/BackgroundHeader";
import { Navbar } from "../components/Navbar";
import { Container } from "../styled-components/Container";
import { StyledH1, StyledH2, StyledH3 } from "../styled-components/StyledH1";
import { StyledP } from "../styled-components/StyledP";

import { Player, Video, DefaultUi } from '@vime/react';
import '@vime/core/themes/default.css';

{/* Import de SVG's */}
import ExperienceProfessional from "../Static/svg/ExperienceProfessional";
import QualityPrecision from "../Static/svg/QualityPrecision";
import Solutions from "../Static/svg/Solutions";
import { StyledSpan } from "../styled-components/StyledSpan";
import { StyledButton } from "../styled-components/StyledButton";
import { StyledBox } from "../styled-components/StyledBox";
import YoutubePlayer from "../Static/svg/YoutubePlayer";
import { useState } from "react";
import SlideArrow from "../Static/svg/SlideArrow";
import BlogSlider from "../components/BlogSlider";

type Props = {

    setModalOpen: () => {}
}

export function Home() {

    const [modalOpen, setModalOpen] = useState(false)
    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);


    
    
    

    

    return (
        <>
        <Navbar />
        <BackgroundHeader imageSource="../src/assets/images/home/bg-hero.png" heightSize={80}>
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
          

            
            <BlogSlider />

            <StyledBox className="py-36">
                <Box className="w-full lg:w-[50%] xl:w-[42%] 2xl:w-[38%]">
                    <StyledH2>
                        Tecnologia de ponta em peças especiais
                    </StyledH2>
                    <Box className="mt-10">
                        <Box className="flex justify-between md:w-[70%] lg:w-full">
                        <img src="../src/assets/images/home/foto_das_maquinas.png" alt="" />
                        <Box className="relative">
                        <img className="w-[140px] max-w-[140px] sm:w-[180px] sm:max-w-[180px] h-[160px] sm:h-[261px] absolute sm:static right-0 -top-5" src="../src/assets/images/home/foto_das_maquinas2.png" alt="" />
                        <img className="absolute w-[250px] max-w-[250px] right-0 bottom-6" src="../src/assets/images/home/tecnologia.png" alt="" />
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
                <Box>
                    <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                        INOVAÇÃO
                    </StyledSpan>

                    <StyledH2>
                        O novo caminho da inovação
                    </StyledH2>

                    <StyledP className="mb-8" color="#707070" fontFamily="Myriad Regular">
                    Movidos pelo desafio de desenvolver soluções sustentáveis e tecnológicas, temos o <StyledSpan color="#002137" fontFamily="Myriad Bold">poder da inovação</StyledSpan>, somos reconhecidos principalmente pelo mercado ferroviário, por desenvolver produtos em <StyledSpan color="#002137" fontFamily="Myriad Bold">polímero</StyledSpan>para substituir a aplicação de outros materiais.
                    </StyledP>

                    <StyledP className="mb-7" color="#707070" fontFamily="Myriad Regular">
                    Para inovar cada vez mais, a empresa está sempre em busca de novos campos de aplicação para o <StyledSpan color="#002137" fontFamily="Myriad Bold">plástico</StyledSpan>, contando com Know-how diferenciado e foco permanente nas necessidades de cada cliente.
                    </StyledP>

                    <StyledButton to='/contato'>
                        Entrar em contato
                    </StyledButton>
                </Box>

                <Box>
                    
                </Box>
            </StyledBox>
            



        </Container>

        <Modal 
        open={modalOpen}
        onClose={handleCloseModal}
        >
        <Box className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[95%] lg:w-[60%]">
        <Player>
        <Video crossOrigin="">
        {/* These are passed directly to the underlying HTML5 `<video>` element. */}
        {/* Why `data-src`? Lazy loading, you can always use `src` if you prefer.  */}
        <source
          data-src="../src/assets/video/modalVideo.mp4"
          type="video/mp4"
        />
        
      </Video>

        <DefaultUi noClickToPlay>
        {/* We can place our own UI components here to extend the default UI. */}
        </DefaultUi>
        </Player>
        </Box>
        </Modal>
        </>
    )
}

