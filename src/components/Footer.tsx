import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { StyledBox } from "../styled-components/StyledBox";
import WirklichLogo from "../Static/svg/WirklichLogo";
import { Container } from "../styled-components/Container";
import { StyledLink } from "../styled-components/StyledLink";

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsYoutube } from 'react-icons/bs'

export function Footer() {

    return (
        <Box className="py-16">
            <Container>
                <StyledBox center className="border-b">
                    <Box>
                        <Link to="/"><WirklichLogo /></Link> 
                    </Box>

                    <Box>
                        <nav className="flex gap-8">
                            <Link to="/empresa">
                                <StyledLink>
                                Empresa
                                </StyledLink>
                            </Link>

                            <Link to="/solucoes">
                                <StyledLink>
                                Soluções
                                </StyledLink>
                            </Link>

                            <Link to="/#tecnologia">
                                <StyledLink>
                                Tecnologia
                                </StyledLink>
                            </Link>

                            <Link to="/#meio-ambiente">
                                <StyledLink>
                                Meio Ambiente
                                </StyledLink>
                            </Link>

                            <Link to="/#inovacao">
                                <StyledLink>
                                Inovação
                                </StyledLink>
                            </Link>

                            <Link to="/#noticias">
                                <StyledLink>
                                Notícias
                                </StyledLink>
                            </Link>

                            <Link to="/contato">
                                <StyledLink>
                                Contato
                                </StyledLink>
                            </Link>
                        </nav>
                    </Box>

                    <Box>
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
                </StyledBox>
            </Container>
        </Box>
    )
}