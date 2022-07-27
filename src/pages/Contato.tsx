import { Box, Modal } from "@mui/material";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { FooterBanner } from "../components/FooterBanner";
import { Navbar } from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";
import { WhatsappButton } from "../components/WhatsappButton";
import { Container } from "../styled-components/Container";
import { StyledBox } from "../styled-components/StyledBox";
import { StyledH1, StyledH2, StyledH3 } from "../styled-components/StyledH1";
import { StyledP } from "../styled-components/StyledP";
import { StyledSpan } from "../styled-components/StyledSpan";

import Techpark from "../Static/svg/Techpark";

import SmartphoneWithBg from '../Static/svg/SmartphoneWithBg'
import Save from '../Static/svg/Save'
import Heart from '../Static/svg/Heart'
import Pin from "../Static/svg/Pin";

import FacebookIcon from '../Static/svg/FacebookIcon'
import InstagramIcon from '../Static/svg/InstagramIcon'
import LinkedinIcon from '../Static/svg/LinkedinIcon'
import YoutubeIcon from '../Static/svg/YoutubeIcon'
import RocketWhite from '../Static/svg/RocketWhite'
import { ContactForm } from "../components/ContactForm";
import { StyledButtonForm } from "../styled-components/StyledButton";

import { FiHeart } from 'react-icons/fi'
import { useState } from "react";
import { useDrawerContext } from "../Contexts/MainContext";

const style = {
    transform: 'translate(-50%, -50%)',
    transition: '800ms',
    boxShadow: 24,
  };




export function Contato() {

    const {scrollToTop} = useDrawerContext()

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    
    return (
        <>
        <Navbar />
        <Box className="bg-contato">
            <Container>
                <StyledH1>
                    Entre em contato
                </StyledH1>
            </Container>
        </Box>

        <Box className="pt-32">
            <Container>
                <StyledBox reverse>
                    <Box className="lg:w-[45%] xl:w-[50%]">
                        <StyledH3 fontFamily="Made Light">
                            Precisa de um atendimento urgente direcionado?
                        </StyledH3>

                        <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            Nossa equipe estará pronta pra lhe ajudar da melhor forma possível
                        </StyledP>

                        <Box className="flex flex-col sm:flex-row gap-[30px] mt-9">
                            <Box className="bg-[#F6F6F8] rounded-xl py-7 pl-8 w-[310px]">
                                <Box className="flex items-center gap-3">
                                    <SmartphoneWithBg />
                                    <StyledSpan color="#002137" fontFamily="Myriad Regular" fontSize="1.125rem">
                                        Atendimento
                                    </StyledSpan>
                                </Box>

                                <StyledSpan className="block mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Ligue: (51) 3551-0550
                                </StyledSpan>
                            </Box>

                            <Box className="bg-[#F6F6F8] rounded-xl py-7 pl-8 w-[310px]">
                                <Box className="flex items-center gap-3">
                                    <SmartphoneWithBg />
                                    <StyledSpan color="#002137" fontFamily="Myriad Regular" fontSize="1.125rem">
                                        E-mail
                                    </StyledSpan>
                                </Box>

                                <StyledSpan className="block mt-[30px]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    contato@wirklich.com.br
                                </StyledSpan>
                            </Box>
                        </Box>

                        <Box className="mt-16">
                            <StyledH3 fontFamily="Made Light">
                                Nos siga nas redes sociais:
                            </StyledH3>

                            <Box className="flex items-center gap-5 mt-5">
                                <a className="icon-hover" target='_blank' href="https://www.facebook.com/Wirklich-Ind%C3%BAstria-de-Pl%C3%A1sticos-Ltda-374390952621458">
                                    <StyledSpan>
                                        <FacebookIcon className="icon-style"/>
                                    </StyledSpan>
                                </a>

                                <a className="icon-hover" target='_blank' href="https://www.instagram.com/wirklichwkl/">
                                    <StyledSpan>
                                        <InstagramIcon className="icon-style"/>
                                    </StyledSpan>
                                </a>

                                <a className="icon-hover" target='_blank' href="https://www.linkedin.com/company/24549153/">
                                    <StyledSpan>
                                        <LinkedinIcon className="icon-style"/>
                                    </StyledSpan>
                                </a>

                                <a className="icon-hover" target='_blank' href="https://www.youtube.com/channel/UC8MKBHOikTg5RdVzbuWbqSA">
                                    <StyledSpan>
                                        <YoutubeIcon className="icon-style"/>
                                    </StyledSpan>
                                </a>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="flex justify-center lg:block">
                        <ContactForm />
                    </Box>
                </StyledBox>
            </Container>
        </Box>

        <Box>
            <Container>
                <StyledBox className='flex-wrap' centerRow>
                   <Box className="w-full lg:w-[25%] xl:w-[30%] 2xl:w-[30%] mt-20 lg:mt-0">
                      <StyledH2>
                          Já conhece nosso perfil no insta?
                      </StyledH2>
                      <StyledP className="mt-5 mb-16 w-[90%]" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                        Siga-nos pra ficar por dentro de todas as novidades do mercado do plástico.
                      </StyledP>
                      <StyledButtonForm form to='/instagram' target="_blank">
                        Siga a Wirklich
                      </StyledButtonForm>
                   </Box> 

                   <Box className="w-full sm:w-[50%] lg:w-[35%] xl:w-[40%] 2xl:w-[45%] flex relative">
                        <img src="https://uploaddeimagens.com.br/images/003/949/867/full/Grupo_3341.png?1658343365" alt="" />
                        <span className="absolute left-[55%] top-20">
                        <Save />
                        </span>
                        <span className="absolute right-9 bottom-36">
                        <FiHeart size={35} className="opacity-10"/>
                        </span>
                        <img className="absolute -right-14 sm:-right-20 xl:-right-20 2xl:-right-16" src="https://uploaddeimagens.com.br/images/003/949/873/full/Grupo_3253.png?1658343566" alt="" />
                   </Box>

                   <Box className="sm:w-[40%] sm:h-[330px] xl:h-[460px] lg:w-auto sm:flex sm:items-end">
                        <Box className="sm:w-[280px] p-7 sm:h-[165px] border border-[#006bc996] rounded-md relative">
                            <Box className="bg-white p-2 shadow-card inline-block rounded-lg absolute left-7 -top-7">
                            <span className="rotate-45 block">
                            <RocketWhite />
                            </span>
                            </Box>
                            <StyledP className="mt-4" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Tudo que você precisa saber sobre Injeção de plásticos de alta performance.
                            </StyledP>
                        </Box>
                   </Box>
                </StyledBox>
            </Container>
        </Box>

        <Box className="py-36">
            <Container>
                <StyledBox>
                    <Box className="lg:w-[48%] xl:w-[55%] relative">
                        <img src="https://uploaddeimagens.com.br/images/003/956/198/full/Grupo_3335.png?1658780712" alt="" />
                        <Box className="bg-white rounded-lg card-shadow w-[150px] sm:w-[180px] h-[110px] sm:h-[140px] absolute md:right-56 right-4 lg:right-10 xl:right-32 2xl:right-44 -bottom-20 sm:bottom-10 lg:bottom-5 xl:bottom-10 2xl:bottom-16 flex flex-col gap-2 justify-center px-5">
                            <StyledSpan>
                                <Techpark />
                            </StyledSpan>

                            <StyledSpan color="#707070" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                Feevale Techpark
                            </StyledSpan>

                            <StyledSpan color="#9B9B9B" fontFamily="Myriad Regular" fontSize="1rem">
                                Campo Bom/RS
                            </StyledSpan>
                        </Box>  
                    </Box>

                    <Box className="lg:w-[43%]">
                        <Box className="pb-10 border-b border-gray-300">
                            <StyledH2>
                                Nossa estrutura
                            </StyledH2>

                            <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Com uma estrutura pensada para o constante desenvolvimento científico, tecnológico e econômico, a Wirklich está inserida dentro do Parque Tecnológico da Feevale, em Campo Bom (RS). 
                            </StyledP>

                            <StyledP className="mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Todo esse conjunto permite à Wirklich sustentar grandes parcerias em projetos! 
                            </StyledP>
                        </Box>

                        <Box className="mt-12">
                            <StyledH3>
                                Onde estamos
                            </StyledH3>

                            <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Av. Edgar Hoffmeister, 350 - I, Campo Bom - RS, 93700-000
                            </StyledP>
                        </Box>

                        <Box className="mt-12">
                            <StyledSpan onClick={handleOpen} color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem" className="flex items-center gap-2 cursor-pointer hover:text-black group duration-300">
                                <Pin className="stroke-[#006CC9] group-hover:stroke-black"/>
                                Ver no mapa
                            </StyledSpan>
                        </Box>
                    </Box>
                </StyledBox>
            </Container>
        </Box>


        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='w-[90%] h-[60%] sm:w-[600px] sm:h-[400px] lg:w-[800px] lg:h-[600px] absolute top-2/4 left-2/4 border-none'>
        <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.2257407558864!2d-51.05295328439106!3d-29.65522312024338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951940e33b5d3a73%3A0x297e0cb2b1e2ea48!2sAv.%20Edgar%20Hoffmeister%2C%20350%20-%20I%2C%20Campo%20Bom%20-%20RS%2C%2093700-000!5e0!3m2!1spt-BR!2sbr!4v1658830162452!5m2!1spt-BR!2sbr"  loading="lazy"></iframe>
        </Box>
      </Modal>


        <ScrollToTop />
        <WhatsappButton />
        <FooterBanner onClick={scrollToTop} />
        <Footer />
        </>
    )
}