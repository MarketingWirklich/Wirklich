import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Container } from "../styled-components/Container";
import { StyledLink, StyledLinkMenu } from "../styled-components/StyledLink";


import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import WirklichLogo from "../static/svg/WirklichLogo";
import { useDrawerContext } from "../Contexts/MainContext";

export function Navbar() {

    const { isMenuOpen, handleMenuClick, scrollToTop, moveToTecnologia, moveToInovation, moveToNoticias } = useDrawerContext()

    return (
        <div id="navbar">
        <Box className="w-full" bgcolor="#FFF" display="flex" height={90} alignItems="center">
            <Container>
                <Box display="flex" alignItems='center'>
                    <Box flex={1}>
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

                            <Link onClick={scrollToTop} to="/meio-ambiente">
                                <StyledLink>
                                Meio Ambiente
                                </StyledLink>
                            </Link>

                            <Link onClick={moveToInovation} to="/">
                                <StyledLink>
                                Terceirização
                                </StyledLink>
                            </Link>

                            <Link onClick={moveToNoticias} to="/#noticias">
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

                    <Box className="block lg:hidden">
                    <div onClick={handleMenuClick} className="flex flex-col gap-1 cursor-pointer">
                    <span className={`block bg-black w-6 h-[0.20rem] duration-700 ${isMenuOpen? 'rotate-45 translate-y-[7px]' : 'rotate-0'}`}></span>
                    <span className={`block bg-black h-[0.20rem] duration-700 ${isMenuOpen? 'w-0 opacity-0' : 'w-6 opacity-100'}`}></span>
                    <span className={`block bg-black w-6 h-[0.20rem] duration-700 ${isMenuOpen? '-rotate-45 -translate-y-[7px]' : 'rotate-0'}`}></span>
                    </div>
                    </Box>
                </Box>
            </Container>
        </Box>

        <Box className={`absolute menu-gradiente w-full duration-700 overflow-hidden ${isMenuOpen? 'z-50 opacity-100 translate-y-0 h-screen' : 'opacity-0 translate-y-[1000px] h-0'}`}>
                <nav className="flex flex-col gap-8 items-center justify-center h-[75%] w-full">

                            <Link className={`duration-700 delay-[710ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/empresa">
                                <StyledLinkMenu onClick={handleMenuClick}>
                                Empresa
                                </StyledLinkMenu>
                            </Link>

                            <Link className={`duration-700 delay-[760ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/solu%C3%A7%C3%B5es">
                                <StyledLinkMenu onClick={handleMenuClick}>
                                Soluções
                                </StyledLinkMenu>
                            </Link>

                            <Link className={`duration-700 delay-[810ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/#tecnologia">
                                <StyledLinkMenu onClick={moveToTecnologia}>
                                Tecnologia
                                </StyledLinkMenu>
                            </Link>

                            <Link className={`duration-700 delay-[860ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/meio-ambiente">
                                <StyledLinkMenu onClick={handleMenuClick}>
                                Meio Ambiente
                                </StyledLinkMenu>
                            </Link>

                            <Link className={`duration-700 delay-[910ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/#inovacao">
                                <StyledLinkMenu onClick={moveToInovation}>
                                Terceirização
                                </StyledLinkMenu>
                            </Link>

                            <Link className={`duration-700 delay-[960ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/#noticias">
                                <StyledLinkMenu onClick={moveToNoticias}>
                                Notícias
                                </StyledLinkMenu>
                            </Link>

                            <Link className={`duration-700 delay-[1010ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/contato">
                                <StyledLinkMenu onClick={handleMenuClick}>
                                Contato
                                </StyledLinkMenu>
                            </Link>
                     </nav>

                     <div className={`flex justify-center w-full gap-3 duration-700 delay-[1300ms] mt-3 ${isMenuOpen? '-translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`}>
                     <a target='_blank' href="https://www.facebook.com/Wirklich-Ind%C3%BAstria-de-Pl%C3%A1sticos-Ltda-374390952621458"><FaFacebookF color="#FFF" size={30}/></a>  
                     <a target='_blank' href="https://www.instagram.com/wirklichwkl/"><FiInstagram color="#FFF" size={30} /></a>   
                     <a target='_blank' href="https://www.linkedin.com/company/24549153/"><FaLinkedinIn color="#FFF" size={30} /></a>   
                     <a target='_blank' href="https://www.youtube.com/channel/UC8MKBHOikTg5RdVzbuWbqSA"><FaYoutube color="#FFF" size={30} /></a>   



                     </div>
        </Box>


        </div>
    )
}