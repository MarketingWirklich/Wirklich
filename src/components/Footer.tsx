import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import WirklichLogo from "../Static/svg/WirklichLogo";
import { Container } from "../styled-components/Container";
import { StyledLink, StyledLinkMenu } from "../styled-components/StyledLink";

import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsYoutube } from 'react-icons/bs'
import { useDrawerContext } from "../Contexts/MainContext";
import { StyledSpan } from "../styled-components/StyledSpan";
import Pin from '../Static/svg/Pin'
import Smartphone from "../Static/svg/Smartphone";
import WhatsappIcon from "../Static/svg/WhatsappIcon";
import MailIcon from "../Static/svg/MailIcon";
import ArrowScrollToTop from "../Static/svg/ArrowScrollToTop";
import EaglesLogo from "../Static/svg/EaglesLogo";

export function Footer() {



    const { isMenuOpen, handleMenuClick, scrollToTop, moveToTecnologia, moveToInovation, moveToNoticias, isPortuguese, isEnglish, isSpanish  } = useDrawerContext()


    if (isPortuguese) {
        return (
            <>
            <Box className="py-8 bg-[#F8F8FA]">
                <Container>
                    <Box className="flex items-center justify-between border-b border-gray-300 lg:pb-8">
                        <Box>
                            <Link to="/"><WirklichLogo /></Link> 
                        </Box>
    
                        <Box className="hidden lg:block">
                            <nav className="flex gap-8">
                                <Link onClick={scrollToTop} to="/empresa">
                                    <StyledLink>
                                    Empresa
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={scrollToTop} to="/solu%C3%A7%C3%B5es">
                                    <StyledLink>
                                    Soluções
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={moveToTecnologia} to="/">
                                    <StyledLink>
                                    Tecnologia
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={scrollToTop} to="/#meio-ambiente">
                                    <StyledLink>
                                    Meio Ambiente
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={moveToInovation} to="/">
                                    <StyledLink>
                                    Terceirização
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={moveToNoticias} to="/">
                                    <StyledLink>
                                    Notícias
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={scrollToTop} to="/contato">
                                    <StyledLink>
                                    Contato
                                    </StyledLink>
                                </Link>
                            </nav>
                        </Box>
    
                        <Box className="hidden xl:block">
                            <nav className="flex items-center gap-5">
                                <a target="_blank" href="https://www.facebook.com/Wirklich-Ind%C3%BAstria-de-Pl%C3%A1sticos-Ltda-374390952621458">
                                    <FaFacebookF color="#002137" size={25}/>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/wirklichwkl/">
                                    <AiOutlineInstagram color="#002137" size={30}/>
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/company/24549153/">
                                    <FaLinkedinIn color="#002137" size={30}/>
                                </a>
                                <a target="_blank" href="https://www.youtube.com/channel/UC8MKBHOikTg5RdVzbuWbqSA">
                                    <BsYoutube color="#002137" size={30}/>
                                </a>
                            </nav>
                        </Box>
    
                        <Box className="block lg:hidden">
                        <div onClick={handleMenuClick} className="flex flex-col gap-1 cursor-pointer">
                        <span className={`block bg-black w-6 h-[0.20rem] duration-700 ${isMenuOpen? 'rotate-45 translate-y-[7px]' : 'rotate-0'}`}></span>
                        <span className={`block bg-black h-[0.20rem] duration-700 ${isMenuOpen? 'w-0 opacity-0' : 'w-6 opacity-100'}`}></span>
                        <span className={`block bg-black w-6 h-[0.20rem] duration-700 ${isMenuOpen? '-rotate-45 -translate-y-[7px]' : 'rotate-0'}`}></span>
                        </div>
                        </Box>
    
                        
                    </Box>
    
                    <Box className="flex flex-col lg:flex-row lg:flex-wrap xl:flex-nowrap lg:items-center justify-between mt-10 gap-5 xl:gap-0">
                        <Box className="lg:w-[48%] xl:w-auto">
                            <a target='_blank' href="https://www.google.com.br/maps/place/Av.+Edgar+Hoffmeister,+350+-+I,+Campo+Bom+-+RS,+93700-000/@-29.6552231,-51.0529533,17z/data=!3m1!4b1!4m5!3m4!1s0x951940e33b5d3a73:0x297e0cb2b1e2ea48!8m2!3d-29.6552278!4d-51.0507646">
                            <StyledSpan color="#707070" fontSize="1.125rem" fontFamily="Myriad Regular" className="flex items-center gap-3">
                                <Box className="w-[30px] sm:w-auto">
                                <Pin className="stroke-[#002137]"/>
                                </Box>
                                Av. Edgar Hoffmeister, 350 - I, Campo Bom - RS, 93700-000
                            </StyledSpan>
                            </a>
                        </Box>
                        <Box className="lg:w-[48%] xl:w-auto flex lg:justify-end xl:block">
                            <a target='_blank' href="tel:555135510550">
                            <StyledSpan color="#707070" fontSize="1.125rem" fontFamily="Myriad Regular" className="flex items-center gap-3">
                                <Box className="w-[30px] sm:w-auto">
                                <Smartphone />
                                </Box>
                                Ligue: (51) 3551.0550
                            </StyledSpan>
                            </a>
                        </Box>
                        <Box className="lg:w-[48%] xl:w-auto">
                            <a target='_blank' href="https://wa.me/5551992705141">
                            <StyledSpan color="#707070" fontSize="1.125rem" fontFamily="Myriad Regular" className="flex items-center gap-3">
                                <Box className="w-[30px] sm:w-auto">
                                <WhatsappIcon />
                                </Box>
                                Whatsapp: (51) 99270.5141
                            </StyledSpan>
                            </a>
                        </Box>
                        <Box className="lg:w-[48%] xl:w-auto flex lg:justify-end xl:block">
                            <a target='_blank' href="mailto:wirklich@wirklich.com.br">
                            <StyledSpan color="#707070" fontSize="1.125rem" fontFamily="Myriad Regular" className="flex items-center gap-3">
                                <MailIcon />
                                wirklich@wirklich.com.br
                            </StyledSpan>
                            </a>
                        </Box>
                    </Box>
    
                    <Box className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between mt-12">
                        <Box>
                            <StyledSpan color="#002137" fontFamily="Myriad Regular" fontSize="1.125rem">
                               © 2023 Wirklich. <StyledSpan fontFamily="Myriad Light">Todos os direitos reservados.</StyledSpan>
                            </StyledSpan>
                        </Box>
    
                        <Box className="hidden lg:block">
                            <StyledSpan onClick={scrollToTop} className="cursor-pointer flex items-center" color="#002137" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Voltar ao <StyledSpan className="ml-1" fontFamily="Myriad SemiBold">topo</StyledSpan>
                                <Box className="ml-3">
                                    <ArrowScrollToTop />
                                </Box>
                            </StyledSpan>
                        </Box>
    
                        <Box className="flex items-center gap-2">
                            <StyledSpan color="#002137" fontFamily="Myriad Light" fontSize="1.125rem">
                                Desenvolvido por
                            </StyledSpan>
                            <Box className="mt-1">
                                <a target='_blank' href="https://eaglesx.com">
                                <EaglesLogo className="w-[50px]"/>
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
    </>
        )
    } else if (isEnglish) {
        return (
            <>
            <Box className="py-8 bg-[#F8F8FA]">
                <Container>
                    <Box className="flex items-center justify-between border-b border-gray-300 lg:pb-8">
                        <Box>
                            <Link to="/"><WirklichLogo /></Link> 
                        </Box>
    
                        <Box className="hidden lg:block">
                            <nav className="flex gap-8">
                                <Link onClick={scrollToTop} to="/empresa">
                                    <StyledLink>
                                    Company
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={scrollToTop} to="/solu%C3%A7%C3%B5es">
                                    <StyledLink>
                                    Solutions
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={moveToTecnologia} to="/">
                                    <StyledLink>
                                    Technology
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={scrollToTop} to="/#meio-ambiente">
                                    <StyledLink>
                                    Environment
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={moveToInovation} to="/">
                                    <StyledLink>
                                    Outsourcing
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={moveToNoticias} to="/">
                                    <StyledLink>
                                    News
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={scrollToTop} to="/contato">
                                    <StyledLink>
                                    Contact
                                    </StyledLink>
                                </Link>
                            </nav>
                        </Box>
    
                        <Box className="hidden xl:block">
                            <nav className="flex items-center gap-5">
                                <a target="_blank" href="https://www.facebook.com/Wirklich-Ind%C3%BAstria-de-Pl%C3%A1sticos-Ltda-374390952621458">
                                    <FaFacebookF color="#002137" size={25}/>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/wirklichwkl/">
                                    <AiOutlineInstagram color="#002137" size={30}/>
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/company/24549153/">
                                    <FaLinkedinIn color="#002137" size={30}/>
                                </a>
                                <a target="_blank" href="https://www.youtube.com/channel/UC8MKBHOikTg5RdVzbuWbqSA">
                                    <BsYoutube color="#002137" size={30}/>
                                </a>
                            </nav>
                        </Box>
    
                        <Box className="block lg:hidden">
                        <div onClick={handleMenuClick} className="flex flex-col gap-1 cursor-pointer">
                        <span className={`block bg-black w-6 h-[0.20rem] duration-700 ${isMenuOpen? 'rotate-45 translate-y-[7px]' : 'rotate-0'}`}></span>
                        <span className={`block bg-black h-[0.20rem] duration-700 ${isMenuOpen? 'w-0 opacity-0' : 'w-6 opacity-100'}`}></span>
                        <span className={`block bg-black w-6 h-[0.20rem] duration-700 ${isMenuOpen? '-rotate-45 -translate-y-[7px]' : 'rotate-0'}`}></span>
                        </div>
                        </Box>
    
                        
                    </Box>
    
                    <Box className="flex flex-col lg:flex-row lg:flex-wrap xl:flex-nowrap lg:items-center justify-between mt-10 gap-5 xl:gap-0">
                        <Box className="lg:w-[48%] xl:w-auto">
                            <a target='_blank' href="https://www.google.com.br/maps/place/Av.+Edgar+Hoffmeister,+350+-+I,+Campo+Bom+-+RS,+93700-000/@-29.6552231,-51.0529533,17z/data=!3m1!4b1!4m5!3m4!1s0x951940e33b5d3a73:0x297e0cb2b1e2ea48!8m2!3d-29.6552278!4d-51.0507646">
                            <StyledSpan color="#707070" fontSize="1.125rem" fontFamily="Myriad Regular" className="flex items-center gap-3">
                                <Box className="w-[30px] sm:w-auto">
                                <Pin className="stroke-[#002137]"/>
                                </Box>
                                Av. Edgar Hoffmeister, 350 - I, Campo Bom - RS, 93700-000
                            </StyledSpan>
                            </a>
                        </Box>
                        <Box className="lg:w-[48%] xl:w-auto flex lg:justify-end xl:block">
                            <a target='_blank' href="tel:555135510550">
                            <StyledSpan color="#707070" fontSize="1.125rem" fontFamily="Myriad Regular" className="flex items-center gap-3">
                                <Box className="w-[30px] sm:w-auto">
                                <Smartphone />
                                </Box>
                                Call: (51) 3551.0550
                            </StyledSpan>
                            </a>
                        </Box>
                        <Box className="lg:w-[48%] xl:w-auto">
                            <a target='_blank' href="https://wa.me/5551992705141">
                            <StyledSpan color="#707070" fontSize="1.125rem" fontFamily="Myriad Regular" className="flex items-center gap-3">
                                <Box className="w-[30px] sm:w-auto">
                                <WhatsappIcon />
                                </Box>
                                Whatsapp: (51) 99270.5141
                            </StyledSpan>
                            </a>
                        </Box>
                        <Box className="lg:w-[48%] xl:w-auto flex lg:justify-end xl:block">
                            <a target='_blank' href="mailto:wirklich@wirklich.com.br">
                            <StyledSpan color="#707070" fontSize="1.125rem" fontFamily="Myriad Regular" className="flex items-center gap-3">
                                <MailIcon />
                                wirklich@wirklich.com.br
                            </StyledSpan>
                            </a>
                        </Box>
                    </Box>
    
                    <Box className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between mt-12">
                        <Box>
                            <StyledSpan color="#002137" fontFamily="Myriad Regular" fontSize="1.125rem">
                               © 2022 Wirklich. <StyledSpan fontFamily="Myriad Light">All rights reserved.</StyledSpan>
                            </StyledSpan>
                        </Box>
    
                        <Box className="hidden lg:block">
                            <StyledSpan onClick={scrollToTop} className="cursor-pointer flex items-center" color="#002137" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Back to <StyledSpan className="ml-1" fontFamily="Myriad SemiBold">top</StyledSpan>
                                <Box className="ml-3">
                                    <ArrowScrollToTop />
                                </Box>
                            </StyledSpan>
                        </Box>
    
                        <Box className="flex items-center gap-2">
                            <StyledSpan color="#002137" fontFamily="Myriad Light" fontSize="1.125rem">
                            Developed by
                            </StyledSpan>
                            <Box className="mt-1">
                                <a target='_blank' href="https://eaglesx.com">
                                <EaglesLogo className="w-[50px]"/>
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
    </>
        )
    } else if (isSpanish) {
        return (
            <>
            <Box className="py-8 bg-[#F8F8FA]">
                <Container>
                    <Box className="flex items-center justify-between border-b border-gray-300 lg:pb-8">
                        <Box>
                            <Link to="/"><WirklichLogo /></Link> 
                        </Box>
    
                        <Box className="hidden lg:block">
                            <nav className="flex gap-8">
                                <Link onClick={scrollToTop} to="/empresa">
                                    <StyledLink>
                                    Empresa
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={scrollToTop} to="/solu%C3%A7%C3%B5es">
                                    <StyledLink>
                                    Soluciones
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={moveToTecnologia} to="/">
                                    <StyledLink>
                                    Tecnología
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={scrollToTop} to="/#meio-ambiente">
                                    <StyledLink>
                                    Medio ambiente
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={moveToInovation} to="/">
                                    <StyledLink>
                                    Externalización
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={moveToNoticias} to="/">
                                    <StyledLink>
                                    Noticias
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={scrollToTop} to="/contato">
                                    <StyledLink>
                                    Contacto
                                    </StyledLink>
                                </Link>
                            </nav>
                        </Box>
    
                        <Box className="hidden xl:block">
                            <nav className="flex items-center gap-5">
                                <a target="_blank" href="https://www.facebook.com/Wirklich-Ind%C3%BAstria-de-Pl%C3%A1sticos-Ltda-374390952621458">
                                    <FaFacebookF color="#002137" size={25}/>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/wirklichwkl/">
                                    <AiOutlineInstagram color="#002137" size={30}/>
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/company/24549153/">
                                    <FaLinkedinIn color="#002137" size={30}/>
                                </a>
                                <a target="_blank" href="https://www.youtube.com/channel/UC8MKBHOikTg5RdVzbuWbqSA">
                                    <BsYoutube color="#002137" size={30}/>
                                </a>
                            </nav>
                        </Box>
    
                        <Box className="block lg:hidden">
                        <div onClick={handleMenuClick} className="flex flex-col gap-1 cursor-pointer">
                        <span className={`block bg-black w-6 h-[0.20rem] duration-700 ${isMenuOpen? 'rotate-45 translate-y-[7px]' : 'rotate-0'}`}></span>
                        <span className={`block bg-black h-[0.20rem] duration-700 ${isMenuOpen? 'w-0 opacity-0' : 'w-6 opacity-100'}`}></span>
                        <span className={`block bg-black w-6 h-[0.20rem] duration-700 ${isMenuOpen? '-rotate-45 -translate-y-[7px]' : 'rotate-0'}`}></span>
                        </div>
                        </Box>
    
                        
                    </Box>
    
                    <Box className="flex flex-col lg:flex-row lg:flex-wrap xl:flex-nowrap lg:items-center justify-between mt-10 gap-5 xl:gap-0">
                        <Box className="lg:w-[48%] xl:w-auto">
                            <a target='_blank' href="https://www.google.com.br/maps/place/Av.+Edgar+Hoffmeister,+350+-+I,+Campo+Bom+-+RS,+93700-000/@-29.6552231,-51.0529533,17z/data=!3m1!4b1!4m5!3m4!1s0x951940e33b5d3a73:0x297e0cb2b1e2ea48!8m2!3d-29.6552278!4d-51.0507646">
                            <StyledSpan color="#707070" fontSize="1.125rem" fontFamily="Myriad Regular" className="flex items-center gap-3">
                                <Box className="w-[30px] sm:w-auto">
                                <Pin className="stroke-[#002137]"/>
                                </Box>
                                Av. Edgar Hoffmeister, 350 - I, Campo Bom - RS, 93700-000
                            </StyledSpan>
                            </a>
                        </Box>
                        <Box className="lg:w-[48%] xl:w-auto flex lg:justify-end xl:block">
                            <a target='_blank' href="tel:555135510550">
                            <StyledSpan color="#707070" fontSize="1.125rem" fontFamily="Myriad Regular" className="flex items-center gap-3">
                                <Box className="w-[30px] sm:w-auto">
                                <Smartphone />
                                </Box>
                                Llamar: (51) 3551.0550
                            </StyledSpan>
                            </a>
                        </Box>
                        <Box className="lg:w-[48%] xl:w-auto">
                            <a target='_blank' href="https://wa.me/5551992705141">
                            <StyledSpan color="#707070" fontSize="1.125rem" fontFamily="Myriad Regular" className="flex items-center gap-3">
                                <Box className="w-[30px] sm:w-auto">
                                <WhatsappIcon />
                                </Box>
                                Whatsapp: (51) 99270.5141
                            </StyledSpan>
                            </a>
                        </Box>
                        <Box className="lg:w-[48%] xl:w-auto flex lg:justify-end xl:block">
                            <a target='_blank' href="mailto:wirklich@wirklich.com.br">
                            <StyledSpan color="#707070" fontSize="1.125rem" fontFamily="Myriad Regular" className="flex items-center gap-3">
                                <MailIcon />
                                wirklich@wirklich.com.br
                            </StyledSpan>
                            </a>
                        </Box>
                    </Box>
    
                    <Box className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between mt-12">
                        <Box>
                            <StyledSpan color="#002137" fontFamily="Myriad Regular" fontSize="1.125rem">
                               © 2022 Wirklich. <StyledSpan fontFamily="Myriad Light">Todos los derechos reservados.</StyledSpan>
                            </StyledSpan>
                        </Box>
    
                        <Box className="hidden lg:block">
                            <StyledSpan onClick={scrollToTop} className="cursor-pointer flex items-center" color="#002137" fontFamily="Myriad Regular" fontSize="1.125rem">
                            Volver a <StyledSpan className="ml-1" fontFamily="Myriad SemiBold">arriba</StyledSpan>
                                <Box className="ml-3">
                                    <ArrowScrollToTop />
                                </Box>
                            </StyledSpan>
                        </Box>
    
                        <Box className="flex items-center gap-2">
                            <StyledSpan color="#002137" fontFamily="Myriad Light" fontSize="1.125rem">
                            Desarrollado por
                            </StyledSpan>
                            <Box className="mt-1">
                                <a target='_blank' href="https://eaglesx.com">
                                <EaglesLogo className="w-[50px]"/>
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
    </>
        )
    } else {
        return (
            <>
            </>
        )
    }

    
}
