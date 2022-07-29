import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Container } from "../styled-components/Container";
import { StyledBox } from "../styled-components/StyledBox";
import { StyledH1, StyledH2, StyledH3 } from "../styled-components/StyledH1";
import { StyledP } from "../styled-components/StyledP";
import { StyledSpan } from "../styled-components/StyledSpan";
import { AiOutlineInstagram } from 'react-icons/ai'

import { BsArrowReturnLeft } from 'react-icons/bs'
import LeafSquareLittle from "../Static/svg/LeafSquareLittle";
import Solar from "../Static/svg/Solar";
import Energy from "../Static/svg/Energy";
import Expansive from '../Static/svg/Expansive'
import Manutencion from '../Static/svg/Manutencion'
import Money from '../Static/svg/Money'
import Check from '../Static/svg/Check'
import { Footer } from "../components/Footer";

export function MeioAmbiente() {

    const baseImageUrlMeioAmbiente = "http://wirklich.imgix.net/" 

    return (
        <>
        <Box className="bg-werde">
            <Container>
                <Box className="pt-3">
                    <StyledBox centerRowBetween className="flex flex-row items-center justify-between">
                        <Box className="werde-logo w-[60%] sm:w-auto">
                            <img src="https://gistcdn.githack.com/wesleyeagles/e850ecc722f2ec3914f0d55c11e75f50/raw/e83c7a670eefcb3c1b702394d62829bb385004f9/werdelogo.svg" alt="" />
                        </Box>

                        <Box>
                            <Link to='/'>
                                <Box className="flex justify-center items-center border border-white py-4 px-4 sm:px-12 rounded-full sm:rounded-md hover:bg-[#038A16] hover:border-[#038A16] duration-700">
                                    <StyledSpan className="hidden sm:block" color="#FFF" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                        Voltar ao início
                                    </StyledSpan>

                                    <StyledSpan className="sm:hidden">
                                        <BsArrowReturnLeft color="#FFF" size={20}/>
                                    </StyledSpan>
                                </Box>
                            </Link>
                        </Box>
                    </StyledBox>

                    <Box className="w-[67%] lg:w-[60%] xl:w-[50%] mt-40 mb-8">
                        <StyledH1 className="leading-tight">
                            Tecnologia e sustentabilidade: o encaixe perfeito
                        </StyledH1>
                    </Box>

                    <Box className="lg:w-[45%]">
                        <StyledP color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                            Integramos ecologia e tecnologia para melhorar a qualidade da água e revitalizar córregos, rios, lagos e lagoas (artificiais e naturais), facilitando seu tratamento, valorizando o ambiente e auxiliando a natureza a retomar seu espaço e biodiversidade.
                        </StyledP>
                    </Box>
                </Box>
            </Container>
        </Box>

        <Box className="py-36">
            <Container>
                <StyledBox>
                    <Box className="lg:w-[45%]">
                        <Box>
                        <StyledH3>
                            A Wirklich conseguiu aliar-se ao meio-ambiente através do planejamento de suas instalações
                        </StyledH3>
                        </Box>

                        <Box>
                        <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            A empresa possui um tanque para <StyledSpan color="#038A16" fontFamily="Myriad Bold">retenção da água da chuva</StyledSpan>, que pode ser <StyledSpan color="#038A16" fontFamily="Myriad Bold">reaproveitada</StyledSpan> na refrigeração industrial. O prédio possui entrada de ventilação e iluminação natural, o que ocasiona diminuição do consumo de energia elétrica..
                        </StyledP>
                        </Box>

                        <Box className="flex flex-col gap-8 mt-14">
                        <Box className="flex items-center gap-5">
                                <LeafSquareLittle className="w-[45px] sm:w-auto"/>
                                <StyledSpan>
                                    Somos uma empresa altamente sustententável
                                </StyledSpan>
                            </Box>

                            <Box className="flex items-center gap-5">
                                <Solar className="w-[45px] sm:w-auto"/>
                                <StyledSpan>
                                    15% da nossa energia é geração solar
                                </StyledSpan>
                            </Box>

                            <Box className="flex items-center gap-5">
                                <Energy className="w-[75px] sm:w-auto" />
                                <StyledSpan>
                                    Acreditamos na sustentabilidade e em fontes de energia renováveis
                                </StyledSpan>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="lg:w-[45%] xl:w-[41%]">
                        <Box className="w-[100%] md:w-[500px] lg:w-[460px] xl:w-[510px] 2xl:w-[570px] h-[250px] md:h-[300px] lg:h-[288px] md:bg-[#038a1531] rounded-[10px] relative">
                            <img className="absolute md:w-[80%] sm:w-[90%] lg:w-[90%] xl:w-[85%] 2xl:w-[90%] md:left-2/4 md:-translate-x-2/4 md:-bottom-8 2xl:-bottom-20" src="https://uploaddeimagens.com.br/images/003/947/669/full/Interse%C3%A7%C3%A3o_9.png?1658246913" alt="" />
                            <img className="absolute -bottom-0 lg:-left-16" src="https://uploaddeimagens.com.br/images/003/947/673/full/Grupo_3180.png?1658247050" alt="" />
                        </Box> 
                    </Box>
                </StyledBox>
            </Container>
        </Box>

        <Box className="sm:py-20">
            <Container>
                <Box className="flex sm:justify-center lg:justify-start sm:flex-wrap lg:flex-nowrap gap-8 overflow-x-auto styled-scrollbar pb-10 sm:pb-0">
                    <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                        <Box>
                            <StyledSpan>
                                <Expansive />
                            </StyledSpan>
                        </Box>

                        <Box>
                            <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Totalmente expansível. Os módulos se encaixam facilmente.
                            </StyledP>
                        </Box>
                    </Box>

                    <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                        <Box>
                            <StyledSpan>
                                <Expansive />
                            </StyledSpan>
                        </Box>

                        <Box>
                            <StyledP className="w-[95%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Facilmente instalável mediante supervisão de nossa equipe técnica.
                            </StyledP>
                        </Box>
                    </Box>

                    <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                        <Box>
                            <StyledSpan>
                                <Manutencion />
                            </StyledSpan>
                        </Box>

                        <Box>
                            <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Baixa manutenção.
                            </StyledP>
                        </Box>
                    </Box>

                    <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                        <Box>
                            <StyledSpan>
                                <Money />
                            </StyledSpan>
                        </Box>

                        <Box>
                            <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Baixo custo, com excelentes resultados.
                            </StyledP>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>

        <Box>
            <Container>
                <StyledBox center>
                    <Box className="lg:w-[40%]">
                        <Box>
                        <StyledH2>
                            Benefícios
                        </StyledH2>
                        </Box>

                        <Box className="mt-10">
                            <StyledSpan className="flex items-center gap-3 pb-5 border-b border-gray-300" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                <Box>
                                <Check />
                                </Box>
                                Permite um melhor aproveitamento dos recursos hídricos existentes.
                            </StyledSpan>

                            <StyledSpan className="flex items-center gap-3 pb-5 border-b border-gray-300 mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                <Box>
                                <Check />
                                </Box>
                                Favorece a reutilização do recurso hídrico.
                            </StyledSpan>

                            <StyledSpan className="flex items-center gap-3 pb-5 border-b border-gray-300 mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                <Box>
                                <Check />
                                </Box>
                                Melhora a produção sustentável do sistema agrícola e pecuário.
                            </StyledSpan>

                            <StyledSpan className="flex items-center gap-3 pb-5 border-b border-gray-300 mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                <Box>
                                <Check />
                                </Box>
                                Permite uma gestão mais sustentável do recurso hídrico integrado a nível de bacia.
                            </StyledSpan>
                        </Box>
                    </Box>

                    <Box>
                        <img src="../../public/static/img/page_contato/antes-depois.png" alt="" />
                    </Box>
                </StyledBox>
            </Container>
        </Box>

        <Box className="py-20">
            <Container>
                <StyledBox>
                    <Box className="lg:w-[55%] xl:w-[54.5%] 2xl:w-[50%]">
                        <Box className="flex flex-col gap-5">
                        <Box className="flex flex-col md:flex-col xl:flex-row gap-5">
                            <Box className="flex flex-row md:flex-row xl:flex-col gap-[20px]">
                                <Box className="w-[50%] md:w-[49%] md:h-[250px] lg:h-auto lg:w-[214px] xl:w-[247px] xl:h-[137px] rounded-2xl overflow-hidden">
                                    <img className="w-full h-full object-cover" src="https://ik.imagekit.io/g3qvlxsens/galhos?ik-sdk-version=javascript-1.4.3&updatedAt=1659102354133" alt="psicultura" />
                                </Box>

                                <Box className="w-[50%] md:w-[49%] md:h-[250px] lg:h-auto lg:w-[214px] xl:w-[247px] xl:h-[137px] rounded-2xl overflow-hidden">
                                    <img className="w-full h-full object-cover" src="http://wirklich.imgix.net/tratemento-da-agua.jpg" alt="" />
                                </Box>
                            </Box>

                            <Box className="w-full md:w-full md:h-[500px] lg:w-[450px] rounded-2xl overflow-hidden">
                                <img className="w-full" src={`${baseImageUrlMeioAmbiente}plantas-industriais-e-agricolas.jpeg`} alt="" />
                            </Box>
                        </Box>
                        </Box>

                    </Box>

                    <Box className="lg:w-[40%]">
                        <Box>
                            <StyledH2>
                                Aplicações
                            </StyledH2>
                        </Box>
                            <Box className="flex flex-col gap-10">
                                <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Piscicultura: favorece a produção em entornos naturais suscetíveis de melhora ambiental.
                                </StyledP>

                                <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Canais e lagos.
                                </StyledP>

                                <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Estações de tratamento de esgoto.
                                </StyledP>

                                <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Aplicável em plantas industriais e agrícolas.
                                </StyledP>

                                <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Produção agrícola: possibilita a geração de cultivos hidropônicos em grandes superfícies.
                                </StyledP>

                                <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Agronomia: facilita o tratamento de resíduos de origem agrícola ou pecuário.
                                </StyledP>
                            </Box>
                        
                    </Box>
                </StyledBox>
            </Container>
        </Box>

        <Footer />
        </>
    )
}