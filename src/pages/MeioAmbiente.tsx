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
import CO2 from "../Static/svg/CO2";
import Installation from "../Static/svg/Installation";
import EnergyCost from "../Static/svg/EnergyCost";
import Trash from "../Static/svg/Trash";

import { Footer } from "../components/Footer";
import { useRef } from "react";
import SlideArrow from "../Static/svg/SlideArrow";
import { useDrawerContext } from "../Contexts/MainContext";

export function MeioAmbiente() {

    const baseImageUrlMeioAmbiente = "http://wirklich.imgix.net/" 

    const carousel = useRef<any>()

    const slide = useRef<any>()
    const margin = 32

    const slidePrev = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        carousel.current.scrollLeft -= slide.current.offsetWidth + margin
    }
   
    const slideNext = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        carousel.current.scrollLeft += slide.current.offsetWidth + margin
    }

    const { isEnglish, isPortuguese, isSpanish } = useDrawerContext()

    if (isPortuguese) {
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
                                Integramos ecologia e tecnologia, no tratamento de efluentes para melhorar a qualidade da água e revitalizar córregos, rios, lagos e lagoas (artificiais e naturais), facilitando seu tratamento, valorizando o ambiente e auxiliando a natureza a retomar seu espaço e biodiversidade.
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
                            A empresa possui um tanque para <StyledSpan color="#009E15" fontFamily="Myriad Bold">retenção da água da chuva</StyledSpan>, que é <StyledSpan color="#009E15" fontFamily="Myriad Bold">reaproveitada</StyledSpan> para irrigação externa. O prédio possui entrada de ventilação e iluminação natural, o que resulta na diminuição do consumo de energia.
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
    
                                <Box className="flex items-center gap-5">
                                    <CO2 className="w-[75px] sm:w-auto" />
                                    <StyledSpan>
                                        Reduzimos a emissão de CO2
                                    </StyledSpan>
                                </Box>
                            </Box>
                        </Box>
    
                        <Box className="lg:w-[45%] xl:w-[41%]">
                            <Box className="w-[100%] md:w-[500px] lg:w-[460px] xl:w-[510px] 2xl:w-[570px] h-[250px] md:h-[300px] lg:h-[288px] md:bg-[#038a1531] rounded-[10px] relative">
                                <img className="absolute md:w-[80%] sm:w-[90%] lg:w-[90%] xl:w-[85%] 2xl:w-[90%] md:left-2/4 md:-translate-x-2/4 md:-bottom-8 2xl:-bottom-20" src="https://uploaddeimagens.com.br/images/003/947/669/full/Interse%C3%A7%C3%A3o_9.png?1658246913" alt="" />
                            </Box> 
                        </Box>
                    </StyledBox>
                </Container>
            </Box>
    
            <Box className="sm:py-20">
                <Container>
    
                    <StyledBox center>
                    <StyledH2>
                        Sistema Werde Phyto
                    </StyledH2>
    
                    <Box className="w-full sm:w-[24%] md:w-[26%] lg:w-[22%] sm:justify-end lg:relative flex" gap={1}>
                        <SlideArrow onClick={slidePrev} className="rotate-180 cursor-pointer"/>
                        <SlideArrow onClick={slideNext} className="cursor-pointer"/>
                    </Box>
    
    
                    </StyledBox>
    
    
                    <Box ref={carousel} className="flex sm:justify-center lg:justify-start sm:flex-wrap lg:flex-nowrap gap-8 overflow-x-auto scroll-smooth styled-scrollbar pb-10 sm:pb-0 mt-10 lg:mt-0">
    
                        <Box ref={slide} className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <Expansive className="animation-bounce"/>
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
                                    <Installation className="animation-bounce"/>
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
                                    <Manutencion className="animation-bounce"/>
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
                                    <Money className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                    Baixo custo, com excelentes resultados.
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <EnergyCost className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                    Redução do consumo de energia.
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <Money className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                    Menor custo financeiro de operação.
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <Trash className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                    Redução de geração de resíduos.
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
                                    Permite uma gestão mais sustentável do recurso hídrico integrados a respectiva bacia hidrográfica.
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
                                        <img className="w-full h-full object-cover" src="/static/img/page_werde/raiz_aquatica.jpeg" alt="" />
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
                                        Estações de tratamento de esgoto.
                                    </StyledP>
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                        Tratamento de resíduo orgânico na criação de animais. 
                                    </StyledP>
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                        Aplicável em plantas industriais e agrícolas.
                                    </StyledP>
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                        Piscicultura: favorece a produção em entornos naturais suscetíveis de melhora ambiental.
                                    </StyledP>
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                        Canais e lagos.
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
    } else if (isEnglish) {
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
                                        Back to start
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
                            Technology and sustainability: the perfect fit
                            </StyledH1>
                        </Box>
    
                        <Box className="lg:w-[45%]">
                            <StyledP color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                            We integrate ecology and technology in the treatment of effluents to improve water quality and revitalize streams, rivers, lakes and ponds (artificial and natural), facilitating their treatment, valuing the environment and helping nature to regain its space and biodiversity.
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
                            Wirklich managed to ally itself with the environment through the planning of its installations
                            </StyledH3>
                            </Box>
    
                            <Box>
                            <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            The company has a tank for <StyledSpan color="#009E15" fontFamily="Myriad Bold">rainwater retention</StyledSpan>, which is <StyledSpan color="#009E15" fontFamily="Myriad Bold">reused</StyledSpan> for external irrigation. The building has ventilation entrance and natural lighting, which results in a decrease in energy consumption.
                            </StyledP>
                            </Box>
    
                            <Box className="flex flex-col gap-8 mt-14">
                            <Box className="flex items-center gap-5">
                                    <LeafSquareLittle className="w-[45px] sm:w-auto"/>
                                    <StyledSpan>
                                    We are a highly sustainable company
                                    </StyledSpan>
                                </Box>
    
                                <Box className="flex items-center gap-5">
                                    <Solar className="w-[45px] sm:w-auto"/>
                                    <StyledSpan>
                                    15% of our energy is solar generation
                                    </StyledSpan>
                                </Box>
    
                                <Box className="flex items-center gap-5">
                                    <Energy className="w-[75px] sm:w-auto" />
                                    <StyledSpan>
                                    We believe in sustainability and renewable energy sources
                                    </StyledSpan>
                                </Box>
    
                                <Box className="flex items-center gap-5">
                                    <CO2 className="w-[75px] sm:w-auto" />
                                    <StyledSpan>
                                    We reduce CO2 emissions
                                    </StyledSpan>
                                </Box>
                            </Box>
                        </Box>
    
                        <Box className="lg:w-[45%] xl:w-[41%]">
                            <Box className="w-[100%] md:w-[500px] lg:w-[460px] xl:w-[510px] 2xl:w-[570px] h-[250px] md:h-[300px] lg:h-[288px] md:bg-[#038a1531] rounded-[10px] relative">
                                <img className="absolute md:w-[80%] sm:w-[90%] lg:w-[90%] xl:w-[85%] 2xl:w-[90%] md:left-2/4 md:-translate-x-2/4 md:-bottom-8 2xl:-bottom-20" src="https://uploaddeimagens.com.br/images/003/947/669/full/Interse%C3%A7%C3%A3o_9.png?1658246913" alt="" />
                            </Box> 
                        </Box>
                    </StyledBox>
                </Container>
            </Box>
    
            <Box className="sm:py-20">
                <Container>
    
                    <StyledBox center>
                    <StyledH2>
                    Werde Phyto System
                    </StyledH2>
    
                    <Box className="w-full sm:w-[24%] md:w-[26%] lg:w-[22%] sm:justify-end lg:relative flex" gap={1}>
                        <SlideArrow onClick={slidePrev} className="rotate-180 cursor-pointer"/>
                        <SlideArrow onClick={slideNext} className="cursor-pointer"/>
                    </Box>
    
    
                    </StyledBox>
    
    
                    <Box ref={carousel} className="flex sm:justify-center lg:justify-start sm:flex-wrap lg:flex-nowrap gap-8 overflow-x-auto scroll-smooth styled-scrollbar pb-10 sm:pb-0 mt-10 lg:mt-0">
    
                        <Box ref={slide} className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <Expansive className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Fully expandable. Modules snap together easily.
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <Installation className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[95%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Easily installable under the supervision of our technical team.
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <Manutencion className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Low maintenance.
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <Money className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Low cost with excellent results.
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <EnergyCost className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Reduction of energy consumption.
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <Money className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Lower financial cost of operation.
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <Trash className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Reduction of waste generation.
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
                            Benefits
                            </StyledH2>
                            </Box>
    
                            <Box className="mt-10">
                                <StyledSpan className="flex items-center gap-3 pb-5 border-b border-gray-300" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    <Box>
                                    <Check />
                                    </Box>
                                    Allows better use of existing water resources.
                                </StyledSpan>
    
                                <StyledSpan className="flex items-center gap-3 pb-5 border-b border-gray-300 mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    <Box>
                                    <Check />
                                    </Box>
                                    Favors the reuse of water resources.
                                </StyledSpan>
    
                                <StyledSpan className="flex items-center gap-3 pb-5 border-b border-gray-300 mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    <Box>
                                    <Check />
                                    </Box>
                                    It improves the sustainable production of the agricultural and livestock system.
                                </StyledSpan>
    
                                <StyledSpan className="flex items-center gap-3 pb-5 border-b border-gray-300 mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    <Box>
                                    <Check />
                                    </Box>
                                    It allows a more sustainable management of water resources integrated into the respective hydrographic basin.
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
                                        <img className="w-full h-full object-cover" src="/static/img/page_werde/raiz_aquatica.jpeg" alt="" />
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
                                Applications
                                </StyledH2>
                            </Box>
                                <Box className="flex flex-col gap-10">
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Sewage treatment plants.
                                    </StyledP>
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Treatment of organic waste in animal husbandry.
                                    </StyledP>
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Applicable in industrial and agricultural plants.
                                    </StyledP>
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                        Fish farming: favors production in natural environments susceptible to environmental improvement.
                                    </StyledP>
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                        Canals and lakes.
                                    </StyledP>
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                        Agricultural production: enables the generation of hydroponic crops on large surfaces.
                                    </StyledP>
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                        Agronomy: facilitates the treatment of residues of agricultural or livestock origin.
                                    </StyledP>
                                </Box>
                            
                        </Box>
                    </StyledBox>
                </Container>
            </Box>
    
            <Footer />
            </>
        )
    } else if (isSpanish) {
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
                                        De regreso al comienzo
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
                            Tecnología y sostenibilidad: la combinación perfecta
                            </StyledH1>
                        </Box>
    
                        <Box className="lg:w-[45%]">
                            <StyledP color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                            Integramos ecología y tecnología en el tratamiento de efluentes para mejorar la calidad del agua y revitalizar arroyos, ríos, lagos y estanques (artificiales y naturales), facilitando su tratamiento, valorizando el medio ambiente y ayudando a la naturaleza a recuperar su espacio y biodiversidad.
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
                            Wirklich consiguió aliarse con el entorno a través de la planificación de sus instalaciones
                            </StyledH3>
                            </Box>
    
                            <Box>
                            <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            La empresa dispone de un depósito para <StyledSpan color="#009E15" fontFamily="Myriad Bold">retención de agua de lluvia</StyledSpan>, que es <StyledSpan color="#009E15" fontFamily="Myriad Bold">reutilizado</StyledSpan> para riego externo. El edificio cuenta con entrada de ventilación e iluminación natural, lo que se traduce en una disminución del consumo energético.
                            </StyledP>
                            </Box>
    
                            <Box className="flex flex-col gap-8 mt-14">
                            <Box className="flex items-center gap-5">
                                    <LeafSquareLittle className="w-[45px] sm:w-auto"/>
                                    <StyledSpan>
                                    Somos una empresa altamente sustentable
                                    </StyledSpan>
                                </Box>
    
                                <Box className="flex items-center gap-5">
                                    <Solar className="w-[45px] sm:w-auto"/>
                                    <StyledSpan>
                                    El 15% de nuestra energía es generación solar
                                    </StyledSpan>
                                </Box>
    
                                <Box className="flex items-center gap-5">
                                    <Energy className="w-[75px] sm:w-auto" />
                                    <StyledSpan>
                                    Creemos en la sostenibilidad y las energías renovables
                                    </StyledSpan>
                                </Box>
    
                                <Box className="flex items-center gap-5">
                                    <CO2 className="w-[75px] sm:w-auto" />
                                    <StyledSpan>
                                    Reducimos las emisiones de CO2
                                    </StyledSpan>
                                </Box>
                            </Box>
                        </Box>
    
                        <Box className="lg:w-[45%] xl:w-[41%]">
                            <Box className="w-[100%] md:w-[500px] lg:w-[460px] xl:w-[510px] 2xl:w-[570px] h-[250px] md:h-[300px] lg:h-[288px] md:bg-[#038a1531] rounded-[10px] relative">
                                <img className="absolute md:w-[80%] sm:w-[90%] lg:w-[90%] xl:w-[85%] 2xl:w-[90%] md:left-2/4 md:-translate-x-2/4 md:-bottom-8 2xl:-bottom-20" src="https://uploaddeimagens.com.br/images/003/947/669/full/Interse%C3%A7%C3%A3o_9.png?1658246913" alt="" />
                            </Box> 
                        </Box>
                    </StyledBox>
                </Container>
            </Box>
    
            <Box className="sm:py-20">
                <Container>
    
                    <StyledBox center>
                    <StyledH2>
                    Fitosistema Werde
                    </StyledH2>
    
                    <Box className="w-full sm:w-[24%] md:w-[26%] lg:w-[22%] sm:justify-end lg:relative flex" gap={1}>
                        <SlideArrow onClick={slidePrev} className="rotate-180 cursor-pointer"/>
                        <SlideArrow onClick={slideNext} className="cursor-pointer"/>
                    </Box>
    
    
                    </StyledBox>
    
    
                    <Box ref={carousel} className="flex sm:justify-center lg:justify-start sm:flex-wrap lg:flex-nowrap gap-8 overflow-x-auto scroll-smooth styled-scrollbar pb-10 sm:pb-0 mt-10 lg:mt-0">
    
                        <Box ref={slide} className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <Expansive className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Totalmente ampliable. Los módulos encajan entre sí fácilmente.
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <Installation className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[95%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                De fácil instalación bajo la supervisión de nuestro equipo técnico.
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <Manutencion className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Bajo mantenimiento.
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <Money className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Bajo costo con excelentes resultados.
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <EnergyCost className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Reducción del consumo de energía.
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <Money className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Menor costo financiero de operación.
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="flex-none border border-gray-300 rounded-lg w-[15rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem] xl:w-[20.313rem] px-5 xl:px-10 pt-10 pb-12">
                            <Box>
                                <StyledSpan>
                                    <Trash className="animation-bounce"/>
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP className="w-[80%] mt-8" color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Reducción de la generación de residuos.
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
                            Beneficios
                            </StyledH2>
                            </Box>
    
                            <Box className="mt-10">
                                <StyledSpan className="flex items-center gap-3 pb-5 border-b border-gray-300" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    <Box>
                                    <Check />
                                    </Box>
                                    Permite un mejor aprovechamiento de los recursos hídricos existentes.
                                </StyledSpan>
    
                                <StyledSpan className="flex items-center gap-3 pb-5 border-b border-gray-300 mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    <Box>
                                    <Check />
                                    </Box>
                                    Favorece la reutilización de los recursos hídricos.
                                </StyledSpan>
    
                                <StyledSpan className="flex items-center gap-3 pb-5 border-b border-gray-300 mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    <Box>
                                    <Check />
                                    </Box>
                                    Mejora la producción sostenible del sistema agrícola y ganadero.
                                </StyledSpan>
    
                                <StyledSpan className="flex items-center gap-3 pb-5 border-b border-gray-300 mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    <Box>
                                    <Check />
                                    </Box>
                                    Permite una gestión más sostenible de los recursos hídricos integrados a la respectiva cuenca hidrográfica.
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
                                        <img className="w-full h-full object-cover" src="/static/img/page_werde/raiz_aquatica.jpeg" alt="" />
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
                                Aplicaciones
                                </StyledH2>
                            </Box>
                                <Box className="flex flex-col gap-10">
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Plantas de tratamiento de aguas residuales.
                                    </StyledP>
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Tratamiento de residuos orgánicos en ganadería.
                                    </StyledP>
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Aplicable en plantas industriales y agrícolas.
                                    </StyledP>
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Piscicultura: favorece la producción en ambientes naturales susceptibles de mejora ambiental.
                                    </StyledP>
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Canales y lagos.
                                    </StyledP>
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Producción agrícola: permite la generación de cultivos hidropónicos en grandes superficies.
                                    </StyledP>
    
                                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                    Agronomía: facilita el tratamiento de residuos de origen agrícola o ganadero.
                                    </StyledP>
                                </Box>
                            
                        </Box>
                    </StyledBox>
                </Container>
            </Box>
    
            <Footer />
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }

    
}