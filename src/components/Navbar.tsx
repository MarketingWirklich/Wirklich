import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Container } from "../styled-components/Container";
import { StyledLink, StyledLinkMenu } from "../styled-components/StyledLink";


import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import WirklichLogo from "../Static/svg/WirklichLogo";
import { useDrawerContext } from "../Contexts/MainContext";
import { Image } from "./Image";

export default function Navbar() {

    const { isMenuOpen, handleMenuClick, scrollToTop, moveToTecnologia, moveToInovation, moveToNoticias, langToPortuguese, isEnglish, langToEnglish, langToSpanish, isPortuguese, isSpanish } = useDrawerContext()


    if (isPortuguese) {
        return (
            <div id="navbar">
            <Box className="w-full" bgcolor="#FFF" display="flex" height={90} alignItems="center">
                <Container>
                    <Box display="flex" alignItems='center'>
                        <Box flex={1}>
                           <Link to="/"><WirklichLogo /></Link> 
                        </Box>
    
                        <Box className="hidden lg:block">
                            <nav className="flex gap-8 items-center">
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
    
                                <Box display='flex' gap={1}>
                                    <Box width="30px" height="20px" onClick={langToPortuguese}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/304/294/full/bandeiragrande.jpg?1674135923" />
                                    </Box>
                                    <Box width="30px" height="20px" onClick={langToEnglish}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/304/314/full/Flag_of_the_United_Kingdom_%283-5%29.svg.png?1674136179" />
                                    </Box>
                                    <Box width="30px" height="20px" onClick={langToSpanish}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/312/280/full/significado-e-origem-da-bandeira-da-espanha-1-1200x675.jpg?1674670089" />
                                    </Box>
                                </Box>
                            </nav>
                        </Box>
    
                        <Box className="block lg:hidden">
                        <div onClick={handleMenuClick} className="flex flex-col gap-1 cursor-pointer">
                        <span className={`block bg-black w-6 h-[0.20rem] duration-700 ${isMenuOpen? 'rotate-45 translate-y-[6px]' : 'rotate-0'}`}></span>
                        <span className={`block bg-black h-[0.20rem] duration-700 ${isMenuOpen? 'w-0 opacity-0' : 'w-6 opacity-100'}`}></span>
                        <span className={`block bg-black w-6 h-[0.20rem] duration-700 ${isMenuOpen? '-rotate-45 -translate-y-[7px]' : 'rotate-0'}`}></span>
                        </div>
                        </Box>
                    </Box>
                </Container>
            </Box>
    
            <Box className={`absolute menu-gradiente w-full duration-700 overflow-hidden ${isMenuOpen? 'z-50 opacity-100 translate-y-0 h-screen' : 'opacity-0 translate-y-[1000px] h-0'}`}>
                    <nav className="flex flex-col gap-5 items-center justify-center h-[75%] w-full">
    
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
    
                                <Box display='flex' gap={1} marginTop={8}>
                                    <Box width="30px" height="20px" onClick={langToPortuguese}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/304/294/full/bandeiragrande.jpg?1674135923" />
                                    </Box>
                                    <Box width="30px" height="20px" onClick={langToEnglish}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/304/314/full/Flag_of_the_United_Kingdom_%283-5%29.svg.png?1674136179" />
                                    </Box>
                                    <Box width="30px" height="20px" onClick={langToSpanish}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/312/280/full/significado-e-origem-da-bandeira-da-espanha-1-1200x675.jpg?1674670089" />
                                    </Box>
                                </Box>
                         </nav>
    
                         <div className={`flex justify-center w-full gap-3 duration-700 delay-[1300ms] mt-3 ${isMenuOpen? '-translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`}>
                         <a target='_blank' href="https://www.facebook.com/Wirklich-Ind%C3%BAstria-de-Pl%C3%A1sticos-Ltda-374390952621458"><FaFacebookF color="#FFF" size={25}/></a>  
                         <a target='_blank' href="https://www.instagram.com/wirklichwkl/"><FiInstagram color="#FFF" size={25} /></a>   
                         <a target='_blank' href="https://www.linkedin.com/company/24549153/"><FaLinkedinIn color="#FFF" size={25} /></a>   
                         <a target='_blank' href="https://www.youtube.com/channel/UC8MKBHOikTg5RdVzbuWbqSA"><FaYoutube color="#FFF" size={25} /></a>   
    
    
    
                         </div>
            </Box>
    
    
            </div>
        )
    } else if (isEnglish) {
        return (
            <div id="navbar">
            <Box className="w-full" bgcolor="#FFF" display="flex" height={90} alignItems="center">
                <Container>
                    <Box display="flex" alignItems='center'>
                        <Box flex={1}>
                           <Link to="/"><WirklichLogo /></Link> 
                        </Box>
    
                        <Box className="hidden lg:block">
                            <nav className="flex gap-8 items-center">
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
    
                                <Link onClick={scrollToTop} to="/meio-ambiente">
                                    <StyledLink>
                                    Environment
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={moveToInovation} to="/">
                                    <StyledLink>
                                    Outsourcing
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={moveToNoticias} to="/#noticias">
                                    <StyledLink>
                                    News
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={scrollToTop} to="/contato">
                                    <StyledLink>
                                    Contact
                                    </StyledLink>
                                </Link>
    
                                <Box display='flex' gap={1}>
                                    <Box width="30px" height="20px" onClick={langToPortuguese}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/304/294/full/bandeiragrande.jpg?1674135923" />
                                    </Box>
                                    <Box width="30px" height="20px" onClick={langToEnglish}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/304/314/full/Flag_of_the_United_Kingdom_%283-5%29.svg.png?1674136179" />
                                    </Box>
                                    <Box width="30px" height="20px" onClick={langToSpanish}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/312/280/full/significado-e-origem-da-bandeira-da-espanha-1-1200x675.jpg?1674670089" />
                                    </Box>
                                </Box>
                            </nav>
                        </Box>
    
                        <Box className="block lg:hidden">
                        <div onClick={handleMenuClick} className="flex flex-col gap-1 cursor-pointer">
                        <span className={`block bg-black w-6 h-[0.20rem] duration-700 ${isMenuOpen? 'rotate-45 translate-y-[6px]' : 'rotate-0'}`}></span>
                        <span className={`block bg-black h-[0.20rem] duration-700 ${isMenuOpen? 'w-0 opacity-0' : 'w-6 opacity-100'}`}></span>
                        <span className={`block bg-black w-6 h-[0.20rem] duration-700 ${isMenuOpen? '-rotate-45 -translate-y-[7px]' : 'rotate-0'}`}></span>
                        </div>
                        </Box>
                    </Box>
                </Container>
            </Box>
    
            <Box className={`absolute menu-gradiente w-full duration-700 overflow-hidden ${isMenuOpen? 'z-50 opacity-100 translate-y-0 h-screen' : 'opacity-0 translate-y-[1000px] h-0'}`}>
                    <nav className="flex flex-col gap-5 items-center justify-center h-[75%] w-full">
    
                                <Link className={`duration-700 delay-[710ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/empresa">
                                    <StyledLinkMenu onClick={handleMenuClick}>
                                    Company
                                    </StyledLinkMenu>
                                </Link>
    
                                <Link className={`duration-700 delay-[760ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/solu%C3%A7%C3%B5es">
                                    <StyledLinkMenu onClick={handleMenuClick}>
                                    Solutions
                                    </StyledLinkMenu>
                                </Link>
    
                                <Link className={`duration-700 delay-[810ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/#tecnologia">
                                    <StyledLinkMenu onClick={moveToTecnologia}>
                                    Technology
                                    </StyledLinkMenu>
                                </Link>
    
                                <Link className={`duration-700 delay-[860ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/meio-ambiente">
                                    <StyledLinkMenu onClick={handleMenuClick}>
                                    Environment
                                    </StyledLinkMenu>
                                </Link>
    
                                <Link className={`duration-700 delay-[910ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/#inovacao">
                                    <StyledLinkMenu onClick={moveToInovation}>
                                    Outsourcing
                                    </StyledLinkMenu>
                                </Link>
    
                                <Link className={`duration-700 delay-[960ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/#noticias">
                                    <StyledLinkMenu onClick={moveToNoticias}>
                                    News
                                    </StyledLinkMenu>
                                </Link>
    
                                <Link className={`duration-700 delay-[1010ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/contato">
                                    <StyledLinkMenu onClick={handleMenuClick}>
                                    Contact
                                    </StyledLinkMenu>
                                </Link>
    
                                <Box display='flex' gap={1} marginTop={8}>
                                    <Box width="30px" height="20px" onClick={langToPortuguese}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/304/294/full/bandeiragrande.jpg?1674135923" />
                                    </Box>
                                    <Box width="30px" height="20px" onClick={langToEnglish}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/304/314/full/Flag_of_the_United_Kingdom_%283-5%29.svg.png?1674136179" />
                                    </Box>
                                    <Box width="30px" height="20px" onClick={langToSpanish}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/312/280/full/significado-e-origem-da-bandeira-da-espanha-1-1200x675.jpg?1674670089" />
                                    </Box>
                                </Box>
                         </nav>
    
                         <div className={`flex justify-center w-full gap-3 duration-700 delay-[1300ms] mt-3 ${isMenuOpen? '-translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`}>
                         <a target='_blank' href="https://www.facebook.com/Wirklich-Ind%C3%BAstria-de-Pl%C3%A1sticos-Ltda-374390952621458"><FaFacebookF color="#FFF" size={25}/></a>  
                         <a target='_blank' href="https://www.instagram.com/wirklichwkl/"><FiInstagram color="#FFF" size={25} /></a>   
                         <a target='_blank' href="https://www.linkedin.com/company/24549153/"><FaLinkedinIn color="#FFF" size={25} /></a>   
                         <a target='_blank' href="https://www.youtube.com/channel/UC8MKBHOikTg5RdVzbuWbqSA"><FaYoutube color="#FFF" size={25} /></a>   
    
    
    
                         </div>
            </Box>
    
    
            </div>
        )
    } else if (isSpanish) {
        return (
            <div id="navbar">
            <Box className="w-full" bgcolor="#FFF" display="flex" height={90} alignItems="center">
                <Container>
                    <Box display="flex" alignItems='center'>
                        <Box flex={1}>
                           <Link to="/"><WirklichLogo /></Link> 
                        </Box>
    
                        <Box className="hidden lg:block">
                            <nav className="flex gap-8 items-center">
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
                                    Tecnología                                    </StyledLink>
                                </Link>
    
                                <Link onClick={scrollToTop} to="/meio-ambiente">
                                    <StyledLink>
                                    Medio Ambiente
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={moveToInovation} to="/">
                                    <StyledLink>
                                    Externalización
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={moveToNoticias} to="/#noticias">
                                    <StyledLink>
                                    Noticias
                                    </StyledLink>
                                </Link>
    
                                <Link onClick={scrollToTop} to="/contato">
                                    <StyledLink>
                                    Contacto
                                    </StyledLink>
                                </Link>
    
                                <Box display='flex' gap={1}>
                                    <Box width="30px" height="20px" onClick={langToPortuguese}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/304/294/full/bandeiragrande.jpg?1674135923" />
                                    </Box>
                                    <Box width="30px" height="20px" onClick={langToEnglish}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/304/314/full/Flag_of_the_United_Kingdom_%283-5%29.svg.png?1674136179" />
                                    </Box>
                                    <Box width="30px" height="20px" onClick={langToSpanish}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/312/280/full/significado-e-origem-da-bandeira-da-espanha-1-1200x675.jpg?1674670089" />
                                    </Box>
                                </Box>
                            </nav>
                        </Box>
    
                        <Box className="block lg:hidden">
                        <div onClick={handleMenuClick} className="flex flex-col gap-1 cursor-pointer">
                        <span className={`block bg-black w-6 h-[0.20rem] duration-700 ${isMenuOpen? 'rotate-45 translate-y-[6px]' : 'rotate-0'}`}></span>
                        <span className={`block bg-black h-[0.20rem] duration-700 ${isMenuOpen? 'w-0 opacity-0' : 'w-6 opacity-100'}`}></span>
                        <span className={`block bg-black w-6 h-[0.20rem] duration-700 ${isMenuOpen? '-rotate-45 -translate-y-[7px]' : 'rotate-0'}`}></span>
                        </div>
                        </Box>
                    </Box>
                </Container>
            </Box>
    
            <Box className={`absolute menu-gradiente w-full duration-700 overflow-hidden ${isMenuOpen? 'z-50 opacity-100 translate-y-0 h-screen' : 'opacity-0 translate-y-[1000px] h-0'}`}>
                    <nav className="flex flex-col gap-5 items-center justify-center h-[75%] w-full">
    
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
                                    Tecnología
                                    </StyledLinkMenu>
                                </Link>
    
                                <Link className={`duration-700 delay-[860ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/meio-ambiente">
                                    <StyledLinkMenu onClick={handleMenuClick}>
                                    Medio Ambiente
                                    </StyledLinkMenu>
                                </Link>
    
                                <Link className={`duration-700 delay-[910ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/#inovacao">
                                    <StyledLinkMenu onClick={moveToInovation}>
                                    Externalización
                                    </StyledLinkMenu>
                                </Link>
    
                                <Link className={`duration-700 delay-[960ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/#noticias">
                                    <StyledLinkMenu onClick={moveToNoticias}>
                                    Noticias
                                    </StyledLinkMenu>
                                </Link>
    
                                <Link className={`duration-700 delay-[1010ms] ${isMenuOpen? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/contato">
                                    <StyledLinkMenu onClick={handleMenuClick}>
                                    Contacto
                                    </StyledLinkMenu>
                                </Link>
    
                                <Box display='flex' gap={1} marginTop={8}>
                                    <Box width="30px" height="20px" onClick={langToPortuguese}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/304/294/full/bandeiragrande.jpg?1674135923" />
                                    </Box>
                                    <Box width="30px" height="20px" onClick={langToEnglish}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/304/314/full/Flag_of_the_United_Kingdom_%283-5%29.svg.png?1674136179" />
                                    </Box>
                                    <Box width="30px" height="20px" onClick={langToSpanish}>
                                        <Image classes="w-[100%] h-[100%] cursor-pointer" source="https://uploaddeimagens.com.br/images/004/312/280/full/significado-e-origem-da-bandeira-da-espanha-1-1200x675.jpg?1674670089" />
                                    </Box>
                                </Box>
                         </nav>
    
                         <div className={`flex justify-center w-full gap-3 duration-700 delay-[1300ms] mt-3 ${isMenuOpen? '-translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`}>
                         <a target='_blank' href="https://www.facebook.com/Wirklich-Ind%C3%BAstria-de-Pl%C3%A1sticos-Ltda-374390952621458"><FaFacebookF color="#FFF" size={25}/></a>  
                         <a target='_blank' href="https://www.instagram.com/wirklichwkl/"><FiInstagram color="#FFF" size={25} /></a>   
                         <a target='_blank' href="https://www.linkedin.com/company/24549153/"><FaLinkedinIn color="#FFF" size={25} /></a>   
                         <a target='_blank' href="https://www.youtube.com/channel/UC8MKBHOikTg5RdVzbuWbqSA"><FaYoutube color="#FFF" size={25} /></a>   
    
    
    
                         </div>
            </Box>
    
    
            </div>
        )
    } else {
        return (
            <>
            </>
        )
    }
}