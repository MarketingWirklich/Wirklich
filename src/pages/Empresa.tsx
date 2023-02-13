import { Box } from "@mui/material";
import { Footer } from "../components/Footer";
import { FooterBanner } from "../components/FooterBanner";
import Navbar from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";
import { WhatsappButton } from "../components/WhatsappButton";
import { Container } from "../styled-components/Container";
import { StyledBox } from "../styled-components/StyledBox";
import { StyledH1, StyledH2, StyledH3 } from "../styled-components/StyledH1";
import { StyledP } from "../styled-components/StyledP";
import { StyledSpan } from "../styled-components/StyledSpan";

import { DefaultUi, Player, Youtube } from "@vime/react";

import PeD from "../Static/svg/P&D";
import Airplane from "../Static/svg/Airplane";
import CheckInBox from "../Static/svg/CheckInBox";
import Rocket from "../Static/svg/Rocket";
import Quotes from "../Static/svg/Quotes";
import Techpark from "../Static/svg/Techpark";
import LinesBlue from "../Static/svg/LinesBlue";
import LinesGreen from "../Static/svg/LinesGreen";
import LeafSquareLittle from "../Static/svg/LeafSquareLittle";
import Solar from "../Static/svg/Solar";
import Energy from "../Static/svg/Energy";
import CO2 from "../Static/svg/CO2";

import { BsArrowRightShort } from 'react-icons/bs'


import { StyledButton } from "../styled-components/StyledButton";
import { Link } from "react-router-dom";
import { useDrawerContext } from "../Contexts/MainContext";

export function Empresa() {

    const {scrollToTop} = useDrawerContext()

    const baseImageUrlEmpresa = "../static/img/page_empresa/"

    const { isEnglish, isPortuguese, isSpanish } = useDrawerContext()

    if (isPortuguese) {
        return (
            <>
            <Navbar />
            <Box className="bg-empresa">
                <Container>
                <StyledSpan color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                    QUEM SOMOS
                </StyledSpan>
    
                <StyledH1 className="mb-5">
                    Conheça a Wirklich
                </StyledH1>
    
                <StyledP className="md:w-[50%] lg:w-[35%] xl:w-[33%]" color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                    A Wirklich é movida pelo desafio de encontrar <StyledSpan fontFamily="Myriad Bold">soluções criativas</StyledSpan> e eficientes para substituir a aplicação de materiais, como o metal e a borracha, pelo plástico.
                </StyledP>
                </Container>
            </Box>
    
            <Box className="pt-40">
                <Container>
                    <StyledBox>
                        <Box className="lg:w-[90%]">
                        <StyledH2 className="lg:w-[60%]">
                            Desde 2005 em constante evolução na transformação de termoplásticos 
                        </StyledH2>
    
                        <StyledP className="w-[100%] mt-10" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                        Iniciamos nossas atividades em 2005 no município de Estância Velha/RS e já em 2008 adquirimos o terreno para construção da atual sede da empresa, localizado dentro do <a target='_blank' href='https://www.youtube.com/watch?v=jtFzjcMeelw'>FEEVALE TECHPARK</a>. 
                        Desde a abertura da empresa, nosso fundador, que iniciou sua jornada no nosso segmento pela atuação junto à multinacionais de matéria prima, sempre teve o entendimento que os polímeros de alta e ultra performance seriam a base do futuro das peças de engenharia, com potencial gigante para substituição de peças em metal, borracha e cerâmica por plástico.
                        Desta forma, alinhado com o propósito de inovação e desenvolvimento impresso no DNA da empresa, em 2010 nossa atual sede foi inaugurada dentro do parque tecnológico, pois próximos à Universidade estamos sempre conectados nesse ambiente de conhecimento de vanguarda, propiciando a realização de projetos em conjunto até hoje.
    
                        </StyledP>
    
                        <StyledP className="mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                        Através da nossa atuação inicial no mercado ferroviário, protagonizamos o desenvolvimento de peças em polímeros de alta performance que contribuíram para uma melhor desempenho do sistema de fixação da via permanente ferroviária. Ao longo da nossa história temos desenvolvimentos nos mais diversos segmentos: ferroviário, frigorífico, pecuária, agricultura, energia fotovoltaica, internet das coisas, tratamento de efluentes, construção civil e médico hospitalar.
                       </StyledP>
    
                       <StyledP className="mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                       "O que é impossível para os outros, para nós só leva mais tempo"
                       </StyledP>
                        </Box>
    
    
                 
                    
                    </StyledBox>
    
                    <Box className="w-full lg:w-[100%] mt-10">
                        <Box className="h-full w-full lg:max-w-[800px] max-h-[60vh] aspect-video">
                        <Player
                        aspectRatio="16:9"
                        >
                        <Youtube videoId="KshbF-ZMgxY" />
        
    
                        <DefaultUi noClickToPlay>
                        </DefaultUi>
                        </Player>
                        </Box>
                    </Box>
                </Container>
            </Box>
    
            <Box className="pt-40">
                <Container>
                    <StyledBox center>
                        <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.375rem">
                            Nossos <StyledSpan color="#000" fontFamily="Myriad Bold">diferenciais</StyledSpan> competitivos em frente ao mercado
                        </StyledSpan>
    
                        <StyledButton  onClick={scrollToTop} to='/contato'>
                            Entre em contato
                        </StyledButton>
                    </StyledBox>
    
                    <Box className="flex overflow-x-auto styled-scrollbar sm:overflow-x-hidden pb-5 sm:pb-0 gap-5 lg:gap-5 sm:gap-4 xl:gap-8 mt-16 sm:flex-wrap lg:flex-nowrap">
                        <Box className="border flex-none sm:flex-auto p-8 w-[240px] rounded-lg sm:p-8 lg:p-8 xl:p-10 sm:w-[263px] md:w-[370px] lg:w-[325px]">
                            <StyledSpan className="mb-5 block">
                                <PeD className="animation-bounce"/>
                            </StyledSpan>
    
                            <Box className="mb-5">
                                <StyledSpan color="#002137" fontFamily="Myriad Bold" fontSize="1.125rem">
                                    P&D
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                    Área de pesquisa, desenvolvimento e inovação estruturada e atuante;
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="border flex-none sm:flex-auto p-8 w-[240px] rounded-lg sm:p-8 lg:p-8 xl:p-10 sm:w-[263px] md:w-[370px] lg:w-[325px]">
                            <StyledSpan className="mb-5 block">
                                <Rocket className="animation-bounce"/>
                            </StyledSpan>
    
                            <Box className="mb-5">
                                <StyledSpan color="#002137" fontFamily="Myriad Bold" fontSize="1.125rem">
                                    Know How
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                    Conhecimento profundo em conversão de metal para polímero;
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="border flex-none sm:flex-auto p-8 w-[240px] rounded-lg sm:p-8 lg:p-8 xl:p-10 sm:w-[263px] md:w-[370px] lg:w-[325px]">
                            <StyledSpan className="mb-5 block">
                                <Airplane className="animation-bounce"/>
                            </StyledSpan>
    
                            <Box className="mb-5">
                                <StyledSpan color="#002137" fontFamily="Myriad Bold" fontSize="1.125rem">
                                    Transformação
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                    Transformação de  peças por injeção através de materiais de alta performance;
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="border flex-none sm:flex-auto p-8 w-[240px] rounded-lg sm:p-8 lg:p-8 xl:p-10 sm:w-[263px] md:w-[370px] lg:w-[325px]">
                            <StyledSpan className="mb-5 block">
                                <CheckInBox className="animation-bounce"/>
                            </StyledSpan>
    
                            <Box className="mb-5">
                                <StyledSpan color="#002137" fontFamily="Myriad Bold" fontSize="1.125rem">
                                    Tecnologia
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                    Máquinas e Equipamentos de Altíssima Tecnologia;
                                </StyledP>
                            </Box>
                        </Box>
    
                        
                    </Box>
                </Container>
            </Box>
            
            <Box className="pt-20">
                <Container>
                    <StyledBox center>
                        <Box className="lg:w-[43%] xl:w-[38%]">
                            <StyledH2>
                                Inspirados no pensamento do nosso fundador
                            </StyledH2>
    
                            <StyledP className="mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                <i>"O que é <StyledSpan fontFamily="Myriad Bold">impossível</StyledSpan> para os outros, para nós só leva mais tempo"</i>
                            </StyledP>
    
                            <StyledP className="mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                <i>"Buscamos soluções tecnológicas e sustentáveis em polímeros, para diversos segmentos da indústria."</i>
                            </StyledP>
    
                            <StyledP className="mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                <i>"Nosso propósito é Desenvolver soluções sustentáveis e tecnológicas em polímeros de engenharia."</i>
                            </StyledP>
                        </Box>
    
                        <Box>
                            <Box className="lg:w-[500px] xl:w-[650px] sm:h-[300px] lg:h-[320px] card-shadow rounded-xl relative p-12">
                                <Box className="absolute -left-4 top-[55%] lg:top-[52%] xl:top-[55%] -translate-y-2/4">
                                    <Quotes />
                                </Box>
                                <Box className="flex flex-col sm:flex-row sm:items-center gap-5">
                                    <Box>
                                        <img src="https://uploaddeimagens.com.br/images/004/043/572/full/Mask_group.png?1664539366" alt="" />
                                    </Box>
    
                                    <Box className="flex flex-col gap-0">
                                        <StyledSpan fontFamily="Made Light" fontSize="1.375rem" color="#002137">
                                            Marcelo Sperb
                                        </StyledSpan>
    
                                        <StyledSpan fontFamily="Myriad Regular" fontSize="1.375rem" color="#707070">
                                            Sócio fundador da Wirklich
                                        </StyledSpan>
                                    </Box>
                                </Box>
    
                                <Box className="mt-5">
                                    <StyledP color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                        "Nós da Wirklich, acreditamos que nem todo mundo pode ter uma boa ideia, mas uma grande ideia pode surgir de qualquer fonte, totalmente inesperada, e é por isso que precisamos criar condições, estimular e aceitar toda e qualquer ideia."
                                    </StyledP>
                                </Box>
                            </Box>
                        </Box>
                    </StyledBox>
                </Container>
            </Box>
    
            <Box className="pt-20">
                <Container>
                    <StyledBox center>
                        <Box className="relative lg:w-[45%]">
                            <img src={`${baseImageUrlEmpresa}empresa-demarcada.png`} alt="" />
                            <Box className="bg-white flex flex-wrap gap-3 sm:block w-[200px] sm:w-auto xl:w-[180px] sm:h-[120px] absolute card-shadow -bottom-16 right-5 sm:bottom-6 sm:right-6 xl:bottom-10 xl:right-10 rounded-md p-4 sm:p-5">
                                <Box>
                                    <Techpark />
                                </Box>
                                <Box className="mt-2">
                                    <StyledSpan color="#707070" fontFamily="Myriad SemiBold" fontSize="1">
                                        Feevale Techpark
                                    </StyledSpan>
                                </Box>
                                <Box>
                                    <a target='_blank' href="https://www.google.com.br/maps/place/Av.+Edgar+Hoffmeister,+350+-+I,+Campo+Bom+-+RS,+93700-000/@-29.6552231,-51.0529533,17z/data=!3m1!4b1!4m5!3m4!1s0x951940e33b5d3a73:0x297e0cb2b1e2ea48!8m2!3d-29.6552278!4d-51.0507646">
                                        <StyledSpan color="#9B9B9B" fontSize="1" fontFamily="Myriad Regular" className="flex gap-0">
                                            Ver no mapa
                                            <BsArrowRightShort className="pb-2 sm:pb-0" size={28}/>
                                        </StyledSpan>
                                    </a>
                                </Box>
                            </Box>
                        </Box>
    
                        <Box className="lg:w-[41%] mt-10 sm:mt-0">
                            <StyledH3>
                                Estamos sempre em busca de aprimorar nossos conhecimentos
                            </StyledH3>
    
                            <StyledP className="my-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Entregamos para nossos clientes soluções que aliam sustentabilidade e tecnologia para que seus projetos possam ser viabilizados de maneira rápida e eficaz..
                            </StyledP>
    
                            <StyledSpan color="#002137" fontSize="1.125rem" fontFamily="Made Light">
                                Nossa estrutura
                            </StyledSpan>
    
                            <StyledP className="mt-5 mb-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Com uma estrutura pensada para o constante desenvolvimento científico, tecnológico e econômico, a Wirklich está inserida dentro do Parque Tecnológico da Feevale, em Campo Bom (RS). 
                            </StyledP>
    
                            <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Todo esse conjunto permite à Wirklich sustentar grandes parcerias em projetos!
                            </StyledP>
                        </Box>
                    </StyledBox>
                </Container>
            </Box>
    
            <Box>
                <Container>
                    <Box className="flex justify-center items-center h-[205px] relative">
                        <Box className="absolute hidden lg:block top-1 lg:left-[160px] xl:left-[250px] 2xl:left-[300px]">
                            <LinesBlue className="lg:w-[90%] xl:w-auto"/>
                        </Box>
                        <StyledSpan color="#002137" fontFamily="Made Light" fontSize="1.125rem">
                            Tecnologia e sustentabilidade
                        </StyledSpan>
                        <Box className="absolute hidden lg:block lg:-bottom-[25px] xl:-bottom-[26px] lg:right-[125px] xl:right-[235px] 2xl:right-[290px]">
                            <LinesGreen className="lg:w-[100%] xl:w-auto"/>
                        </Box>
                    </Box>
                </Container>
            </Box>
    
            <Box className="pt-8">
                <Container>
                    <StyledBox>
                        <Box className="lg:w-[45%]">
                            <StyledH3>
                                A Wirklich conseguiu aliar-se ao meio-ambiente através do planejamento de suas instalações
                            </StyledH3>
    
                            <StyledP className="my-10" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            A empresa possui um tanque para <StyledSpan color="#009E15" fontFamily="Myriad Bold">retenção da água da chuva</StyledSpan>, que é <StyledSpan color="#009E15" fontFamily="Myriad Bold">reaproveitada</StyledSpan> para irrigação externa. O prédio possui entrada de ventilação e iluminação natural, o que resulta na diminuição do consumo de energia.
                            </StyledP>
    
                            <Box className="flex flex-col gap-8">
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
    
                        <Box className="lg:w-[45%] xl:w-[41%] mt-10 md:mt-0">
                            <Box className="w-[100%] md:w-[500px] lg:w-[460px] xl:w-[510px] 2xl:w-[570px] h-[250px] md:h-[300px] lg:h-[330px] md:bg-[#038a1531] rounded-[10px] relative">
                                <img className="absolute md:w-[80%] sm:w-[90%] lg:w-[90%] xl:w-[85%] 2xl:w-[90%] md:left-2/4 md:-translate-x-2/4 md:-bottom-8 2xl:-bottom-10" src="https://uploaddeimagens.com.br/images/003/947/669/full/Interse%C3%A7%C3%A3o_9.png?1658246913" alt="" />
                            </Box> 
    
                            <Box className="mt-20">
                                <Link className="flex items-center gap-2" to='/meio-ambiente'>
                                <StyledSpan color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                    Conheça a tecnologia 
                                </StyledSpan>
    
                                <StyledSpan className="flex items-center">
                                    <img src="https://uploaddeimagens.com.br/images/003/947/892/full/werde.png?1658253041" alt="" />
                                    <BsArrowRightShort className="mt-2" color="#006CC9" size={35}/>
                                </StyledSpan>
                                </Link>
                            </Box>
                        </Box>
                    </StyledBox>
                </Container>
            </Box>
    
    
            <ScrollToTop />
            <FooterBanner onClick={scrollToTop}/>
            <Footer />
            </>
        )
    } else if (isEnglish) {
        return (
            <>
            <Navbar />
            <Box className="bg-empresa">
                <Container>
                <StyledSpan color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                WHO WE ARE
                </StyledSpan>
    
                <StyledH1 className="mb-5">
                Get to know Wirklich
                </StyledH1>
    
                <StyledP className="md:w-[50%] lg:w-[35%] xl:w-[33%]" color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                Wirklich is driven by the challenge of finding <StyledSpan fontFamily="Myriad Bold">creative and efficient solutions</StyledSpan> to replace the application of materials, such as metal and rubber, with plastic.
                </StyledP>
                </Container>
            </Box>
    
            <Box className="pt-40">
                <Container>
                    <StyledBox>
                        <Box className="lg:w-[90%]">
                        <StyledH2 className="lg:w-[60%]">
                        Since 2005 in constant evolution in the transformation of thermoplastics
                        </StyledH2>
    
                        <StyledP className="w-[100%] mt-10" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                        We started our activities in 2005 in the municipality of Estância Velha/RS and in 2008 we acquired the land for building the current headquarters of the company, located within <a target='_blank' href='https://www.youtube.com/ watch?v=jtFzjcMeelw'>FEEVALE TECHPARK</a>.
                        Since the opening of the company, our founder, who began his journey in our segment by working with multinational raw materials, always had the understanding that high and ultra-performance polymers would be the basis of the future of engineering parts, with giant potential. for replacing metal, rubber and ceramic parts with plastic.
                        In this way, in line with the purpose of innovation and development imprinted in the company's DNA, in 2010 our current headquarters was inaugurated within the technology park, as close to the University we are always connected in this cutting-edge knowledge environment, enabling the realization of projects together until today.
    
                        </StyledP>
    
                        <StyledP className="mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                        Through our initial activities in the railway market, we played a leading role in the development of parts in high-performance polymers that contributed to a better performance of the rail track's fastening system. Throughout our history, we have had developments in the most diverse segments: railway, refrigerator, livestock, agriculture, photovoltaic energy, internet of things, effluent treatment, civil construction and hospital medicine.
                       </StyledP>
    
                       <StyledP className="mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                       "What is impossible for others, for us it just takes more time"
                        </StyledP>
                        </Box>
    
    
                 
                    
                    </StyledBox>
    
                    <Box className="w-full lg:w-[100%] mt-10">
                        <Box className="h-full w-full lg:max-w-[800px] max-h-[60vh] aspect-video">
                        <Player
                        aspectRatio="16:9"
                        >
                        <Youtube videoId="KshbF-ZMgxY" />
        
    
                        <DefaultUi noClickToPlay>
                        </DefaultUi>
                        </Player>
                        </Box>
                    </Box>
                </Container>
            </Box>
    
            <Box className="pt-40">
                <Container>
                    <StyledBox center>
                        <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.375rem">
                        Our competitive <StyledSpan color="#000" fontFamily="Myriad Bold">differentiators</StyledSpan> in the market
                        </StyledSpan>
    
                        <StyledButton  onClick={scrollToTop} to='/contato'>
                        Contact
                        </StyledButton>
                    </StyledBox>
    
                    <Box className="flex overflow-x-auto styled-scrollbar sm:overflow-x-hidden pb-5 sm:pb-0 gap-5 lg:gap-5 sm:gap-4 xl:gap-8 mt-16 sm:flex-wrap lg:flex-nowrap">
                        <Box className="border flex-none sm:flex-auto p-8 w-[240px] rounded-lg sm:p-8 lg:p-8 xl:p-10 sm:w-[263px] md:w-[370px] lg:w-[325px]">
                            <StyledSpan className="mb-5 block">
                                <PeD className="animation-bounce"/>
                            </StyledSpan>
    
                            <Box className="mb-5">
                                <StyledSpan color="#002137" fontFamily="Myriad Bold" fontSize="1.125rem">
                                    P&D
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Structured and active research, development and innovation area;
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="border flex-none sm:flex-auto p-8 w-[240px] rounded-lg sm:p-8 lg:p-8 xl:p-10 sm:w-[263px] md:w-[370px] lg:w-[325px]">
                            <StyledSpan className="mb-5 block">
                                <Rocket className="animation-bounce"/>
                            </StyledSpan>
    
                            <Box className="mb-5">
                                <StyledSpan color="#002137" fontFamily="Myriad Bold" fontSize="1.125rem">
                                    Know How
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                In-depth knowledge of metal to polymer conversion;
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="border flex-none sm:flex-auto p-8 w-[240px] rounded-lg sm:p-8 lg:p-8 xl:p-10 sm:w-[263px] md:w-[370px] lg:w-[325px]">
                            <StyledSpan className="mb-5 block">
                                <Airplane className="animation-bounce"/>
                            </StyledSpan>
    
                            <Box className="mb-5">
                                <StyledSpan color="#002137" fontFamily="Myriad Bold" fontSize="1.125rem">
                                Transformation
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Transformation of parts by injection through high performance materials;
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="border flex-none sm:flex-auto p-8 w-[240px] rounded-lg sm:p-8 lg:p-8 xl:p-10 sm:w-[263px] md:w-[370px] lg:w-[325px]">
                            <StyledSpan className="mb-5 block">
                                <CheckInBox className="animation-bounce"/>
                            </StyledSpan>
    
                            <Box className="mb-5">
                                <StyledSpan color="#002137" fontFamily="Myriad Bold" fontSize="1.125rem">
                                Technology
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Machines and Equipment of the Highest Technology;
                                </StyledP>
                            </Box>
                        </Box>
    
                        
                    </Box>
                </Container>
            </Box>
            
            <Box className="pt-20">
                <Container>
                    <StyledBox center>
                        <Box className="lg:w-[43%] xl:w-[38%]">
                            <StyledH2>
                            Inspired by the thinking of our founder
                            </StyledH2>
    
                            <StyledP className="mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            <i>"What is <StyledSpan fontFamily="Myriad Bold">impossible</StyledSpan> for others, for us it just takes more time"</i>
                            </StyledP>
    
                            <StyledP className="mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            <i>"We seek technological and sustainable solutions in polymers for different industry segments."</i>
                            </StyledP>
    
                            <StyledP className="mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            <i>"Our purpose is to develop sustainable and technological solutions in engineering polymers."</i>
                            </StyledP>
                        </Box>
    
                        <Box>
                            <Box className="lg:w-[500px] xl:w-[650px] sm:h-[300px] lg:h-[320px] card-shadow rounded-xl relative p-12">
                                <Box className="absolute -left-4 top-[55%] lg:top-[52%] xl:top-[55%] -translate-y-2/4">
                                    <Quotes />
                                </Box>
                                <Box className="flex flex-col sm:flex-row sm:items-center gap-5">
                                    <Box>
                                        <img src="https://uploaddeimagens.com.br/images/004/043/572/full/Mask_group.png?1664539366" alt="" />
                                    </Box>
    
                                    <Box className="flex flex-col gap-0">
                                        <StyledSpan fontFamily="Made Light" fontSize="1.375rem" color="#002137">
                                            Marcelo Sperb
                                        </StyledSpan>
    
                                        <StyledSpan fontFamily="Myriad Regular" fontSize="1.375rem" color="#707070">
                                        Founding partner of Wirklich
                                        </StyledSpan>
                                    </Box>
                                </Box>
    
                                <Box className="mt-5">
                                    <StyledP color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                    "At Wirklich, we believe that not everyone can have a good idea, but a great idea can come from any source, totally unexpected, and that's why we need to create conditions, encourage and accept each and every idea."
                                    </StyledP>
                                </Box>
                            </Box>
                        </Box>
                    </StyledBox>
                </Container>
            </Box>
    
            <Box className="pt-20">
                <Container>
                    <StyledBox center>
                        <Box className="relative lg:w-[45%]">
                            <img src={`${baseImageUrlEmpresa}empresa-demarcada.png`} alt="" />
                            <Box className="bg-white flex flex-wrap gap-3 sm:block w-[200px] sm:w-auto xl:w-[180px] sm:h-[120px] absolute card-shadow -bottom-16 right-5 sm:bottom-6 sm:right-6 xl:bottom-10 xl:right-10 rounded-md p-4 sm:p-5">
                                <Box>
                                    <Techpark />
                                </Box>
                                <Box className="mt-2">
                                    <StyledSpan color="#707070" fontFamily="Myriad SemiBold" fontSize="1">
                                        Feevale Techpark
                                    </StyledSpan>
                                </Box>
                                <Box>
                                    <a target='_blank' href="https://www.google.com.br/maps/place/Av.+Edgar+Hoffmeister,+350+-+I,+Campo+Bom+-+RS,+93700-000/@-29.6552231,-51.0529533,17z/data=!3m1!4b1!4m5!3m4!1s0x951940e33b5d3a73:0x297e0cb2b1e2ea48!8m2!3d-29.6552278!4d-51.0507646">
                                        <StyledSpan color="#9B9B9B" fontSize="1" fontFamily="Myriad Regular" className="flex gap-0">
                                        See on map
                                            <BsArrowRightShort className="pb-2 sm:pb-0" size={28}/>
                                        </StyledSpan>
                                    </a>
                                </Box>
                            </Box>
                        </Box>
    
                        <Box className="lg:w-[41%] mt-10 sm:mt-0">
                            <StyledH3>
                            We are always looking to improve our knowledge
                            </StyledH3>
    
                            <StyledP className="my-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            We deliver to our customers solutions that combine sustainability and technology so that their projects can be made possible quickly and effectively.
                            </StyledP>
    
                            <StyledSpan color="#002137" fontSize="1.125rem" fontFamily="Made Light">
                            Our structure
                            </StyledSpan>
    
                            <StyledP className="mt-5 mb-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            With a structure designed for constant scientific, technological and economic development, Wirklich is inserted within the Feevale Technological Park, in Campo Bom (RS).
                            </StyledP>
    
                            <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            This whole set allows Wirklich to sustain great partnerships in projects!
                            </StyledP>
                        </Box>
                    </StyledBox>
                </Container>
            </Box>
    
            <Box>
                <Container>
                    <Box className="flex justify-center items-center h-[205px] relative">
                        <Box className="absolute hidden lg:block top-1 lg:left-[160px] xl:left-[250px] 2xl:left-[300px]">
                            <LinesBlue className="lg:w-[90%] xl:w-auto"/>
                        </Box>
                        <StyledSpan color="#002137" fontFamily="Made Light" fontSize="1.125rem">
                        Technology and sustainability
                        </StyledSpan>
                        <Box className="absolute hidden lg:block lg:-bottom-[25px] xl:-bottom-[26px] lg:right-[125px] xl:right-[235px] 2xl:right-[290px]">
                            <LinesGreen className="lg:w-[100%] xl:w-auto"/>
                        </Box>
                    </Box>
                </Container>
            </Box>
    
            <Box className="pt-8">
                <Container>
                    <StyledBox>
                        <Box className="lg:w-[45%]">
                            <StyledH3>
                            Wirklich managed to ally itself with the environment through the planning of its installations
                            </StyledH3>
    
                            <StyledP className="my-10" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            The company has a tank for <StyledSpan color="#009E15" fontFamily="Myriad Bold">rainwater retention</StyledSpan>, which is <StyledSpan color="#009E15" fontFamily="Myriad Bold">reused</StyledSpan> for external irrigation. The building has ventilation entrance and natural lighting, which results in a decrease in energy consumption.
                            </StyledP>
    
                            <Box className="flex flex-col gap-8">
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
    
                        <Box className="lg:w-[45%] xl:w-[41%] mt-10 md:mt-0">
                            <Box className="w-[100%] md:w-[500px] lg:w-[460px] xl:w-[510px] 2xl:w-[570px] h-[250px] md:h-[300px] lg:h-[330px] md:bg-[#038a1531] rounded-[10px] relative">
                                <img className="absolute md:w-[80%] sm:w-[90%] lg:w-[90%] xl:w-[85%] 2xl:w-[90%] md:left-2/4 md:-translate-x-2/4 md:-bottom-8 2xl:-bottom-10" src="https://uploaddeimagens.com.br/images/003/947/669/full/Interse%C3%A7%C3%A3o_9.png?1658246913" alt="" />
                            </Box> 
    
                            <Box className="mt-20">
                                <Link className="flex items-center gap-2" to='/meio-ambiente'>
                                <StyledSpan color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                Know the technology
                                </StyledSpan>
    
                                <StyledSpan className="flex items-center">
                                    <img src="https://uploaddeimagens.com.br/images/003/947/892/full/werde.png?1658253041" alt="" />
                                    <BsArrowRightShort className="mt-2" color="#006CC9" size={35}/>
                                </StyledSpan>
                                </Link>
                            </Box>
                        </Box>
                    </StyledBox>
                </Container>
            </Box>
    
    
            <ScrollToTop />
            <FooterBanner onClick={scrollToTop}/>
            <Footer />
            </>
        )
    } else if (isSpanish) {
        return (
            <>
            <Navbar />
            <Box className="bg-empresa">
                <Container>
                <StyledSpan color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                QUIENES SOMOS
                </StyledSpan>
    
                <StyledH1 className="mb-5">
                Conoce Wirklich
                </StyledH1>
    
                <StyledP className="md:w-[50%] lg:w-[35%] xl:w-[33%]" color="#FFF" fontFamily="Myriad Regular" fontSize="1.125rem">
                Wirklich está motivado por el desafío de encontrar <StyledSpan fontFamily="Myriad Bold">soluciones creativas y eficientes</StyledSpan> para reemplazar la aplicación de materiales, como el metal y el caucho, con plástico.
                </StyledP>
                </Container>
            </Box>
    
            <Box className="pt-40">
                <Container>
                    <StyledBox>
                        <Box className="lg:w-[90%]">
                        <StyledH2 className="lg:w-[60%]">
                        Desde 2005 en constante evolución en la transformación de termoplásticos
                        </StyledH2>
    
                        <StyledP className="w-[100%] mt-10" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                        Iniciamos nuestras actividades en 2005 en el municipio de Estância Velha/RS y en 2008 adquirimos el terreno para la construcción de la actual sede de la empresa, ubicada en <a target='_blank' href='https://www.youtube. com/watch?v=jtFzjcMeelw'>PARQUE TECNOLÓGICO FEEVALE</a>.
                        Desde la apertura de la empresa, nuestro fundador, que comenzó su camino en nuestro segmento trabajando con materias primas multinacionales, siempre entendió que los polímeros de alto y ultra rendimiento serían la base del futuro de las piezas de ingeniería, con un potencial gigante. .para sustituir piezas de metal, caucho y cerámica por plástico.
                        De esta forma, en línea con el propósito de innovación y desarrollo impreso en el ADN de la compañía, en 2010 se inauguró nuestra actual sede dentro del parque tecnológico, ya que cerca de la Universidad estamos siempre conectados en este entorno de conocimiento de vanguardia, posibilitando la realización de proyectos juntos hasta hoy.
    
                        </StyledP>
    
                        <StyledP className="mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                        A través de nuestras actividades iniciales en el mercado ferroviario, tuvimos un rol protagónico en el desarrollo de piezas en polímeros de alto desempeño que contribuyeron a un mejor desempeño del sistema de fijación de la vía férrea. A lo largo de nuestra historia, hemos tenido desarrollos en los más diversos segmentos: ferroviario, frigorífico, ganadero, agrícola, energía fotovoltaica, internet de las cosas, tratamiento de efluentes, construcción civil y medicina hospitalaria.
                       </StyledP>
    
                       <StyledP className="mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                       "Lo que para otros es imposible, para nosotros solo lleva más tiempo"
                       </StyledP>
                        </Box>
    
    
                 
                    
                    </StyledBox>
    
                    <Box className="w-full lg:w-[100%] mt-10">
                        <Box className="h-full w-full lg:max-w-[800px] max-h-[60vh] aspect-video">
                        <Player
                        aspectRatio="16:9"
                        >
                        <Youtube videoId="KshbF-ZMgxY" />
        
    
                        <DefaultUi noClickToPlay>
                        </DefaultUi>
                        </Player>
                        </Box>
                    </Box>
                </Container>
            </Box>
    
            <Box className="pt-40">
                <Container>
                    <StyledBox center>
                        <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.375rem">
                        Nuestros <StyledSpan color="#000" fontFamily="Myriad Bold">diferenciadores</StyledSpan> competitivos en el mercado
                        </StyledSpan>
    
                        <StyledButton  onClick={scrollToTop} to='/contato'>
                        Entre en contacto
                        </StyledButton>
                    </StyledBox>
    
                    <Box className="flex overflow-x-auto styled-scrollbar sm:overflow-x-hidden pb-5 sm:pb-0 gap-5 lg:gap-5 sm:gap-4 xl:gap-8 mt-16 sm:flex-wrap lg:flex-nowrap">
                        <Box className="border flex-none sm:flex-auto p-8 w-[240px] rounded-lg sm:p-8 lg:p-8 xl:p-10 sm:w-[263px] md:w-[370px] lg:w-[325px]">
                            <StyledSpan className="mb-5 block">
                                <PeD className="animation-bounce"/>
                            </StyledSpan>
    
                            <Box className="mb-5">
                                <StyledSpan color="#002137" fontFamily="Myriad Bold" fontSize="1.125rem">
                                    P&D
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Área estructurada y activa de investigación, desarrollo e innovación;
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="border flex-none sm:flex-auto p-8 w-[240px] rounded-lg sm:p-8 lg:p-8 xl:p-10 sm:w-[263px] md:w-[370px] lg:w-[325px]">
                            <StyledSpan className="mb-5 block">
                                <Rocket className="animation-bounce"/>
                            </StyledSpan>
    
                            <Box className="mb-5">
                                <StyledSpan color="#002137" fontFamily="Myriad Bold" fontSize="1.125rem">
                                    Know How
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Conocimiento profundo de la conversión de metal a polímero;
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="border flex-none sm:flex-auto p-8 w-[240px] rounded-lg sm:p-8 lg:p-8 xl:p-10 sm:w-[263px] md:w-[370px] lg:w-[325px]">
                            <StyledSpan className="mb-5 block">
                                <Airplane className="animation-bounce"/>
                            </StyledSpan>
    
                            <Box className="mb-5">
                                <StyledSpan color="#002137" fontFamily="Myriad Bold" fontSize="1.125rem">
                                Transformación
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Transformación de piezas por inyección a través de materiales de altas prestaciones;
                                </StyledP>
                            </Box>
                        </Box>
    
                        <Box className="border flex-none sm:flex-auto p-8 w-[240px] rounded-lg sm:p-8 lg:p-8 xl:p-10 sm:w-[263px] md:w-[370px] lg:w-[325px]">
                            <StyledSpan className="mb-5 block">
                                <CheckInBox className="animation-bounce"/>
                            </StyledSpan>
    
                            <Box className="mb-5">
                                <StyledSpan color="#002137" fontFamily="Myriad Bold" fontSize="1.125rem">
                                Tecnología
                                </StyledSpan>
                            </Box>
    
                            <Box>
                                <StyledP color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                Máquinas y Equipos de la Más Alta Tecnología;
                                </StyledP>
                            </Box>
                        </Box>
    
                        
                    </Box>
                </Container>
            </Box>
            
            <Box className="pt-20">
                <Container>
                    <StyledBox center>
                        <Box className="lg:w-[43%] xl:w-[38%]">
                            <StyledH2>
                            Inspirado en el pensamiento de nuestro fundador
                            </StyledH2>
    
                            <StyledP className="mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            <i>"Lo que es <StyledSpan fontFamily="Myriad Bold">imposible</StyledSpan> para otros, para nosotros solo lleva más tiempo"</i>
                            </StyledP>
    
                            <StyledP className="mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            <i>“Buscamos soluciones tecnológicas y sustentables en polímeros para diferentes segmentos de la industria.”</i>
                            </StyledP>
    
                            <StyledP className="mt-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            <i>"Nuestro propósito es desarrollar soluciones sostenibles y tecnológicas en polímeros de ingeniería".</i>
                            </StyledP>
                        </Box>
    
                        <Box>
                            <Box className="lg:w-[500px] xl:w-[650px] sm:h-[300px] lg:h-[320px] card-shadow rounded-xl relative p-12">
                                <Box className="absolute -left-4 top-[55%] lg:top-[52%] xl:top-[55%] -translate-y-2/4">
                                    <Quotes />
                                </Box>
                                <Box className="flex flex-col sm:flex-row sm:items-center gap-5">
                                    <Box>
                                        <img src="https://uploaddeimagens.com.br/images/004/043/572/full/Mask_group.png?1664539366" alt="" />
                                    </Box>
    
                                    <Box className="flex flex-col gap-0">
                                        <StyledSpan fontFamily="Made Light" fontSize="1.375rem" color="#002137">
                                            Marcelo Sperb
                                        </StyledSpan>
    
                                        <StyledSpan fontFamily="Myriad Regular" fontSize="1.375rem" color="#707070">
                                        Socio fundador de Wirklich
                                        </StyledSpan>
                                    </Box>
                                </Box>
    
                                <Box className="mt-5">
                                    <StyledP color="#707070" fontFamily="Myriad Light" fontSize="1.125rem">
                                    “En Wirklich creemos que no todo el mundo puede tener una buena idea, pero una gran idea puede venir de cualquier fuente, totalmente inesperada, y por eso necesitamos crear las condiciones, fomentar y aceptar todas y cada una de las ideas”.
                                    </StyledP>
                                </Box>
                            </Box>
                        </Box>
                    </StyledBox>
                </Container>
            </Box>
    
            <Box className="pt-20">
                <Container>
                    <StyledBox center>
                        <Box className="relative lg:w-[45%]">
                            <img src={`${baseImageUrlEmpresa}empresa-demarcada.png`} alt="" />
                            <Box className="bg-white flex flex-wrap gap-3 sm:block w-[200px] sm:w-auto xl:w-[180px] sm:h-[120px] absolute card-shadow -bottom-16 right-5 sm:bottom-6 sm:right-6 xl:bottom-10 xl:right-10 rounded-md p-4 sm:p-5">
                                <Box>
                                    <Techpark />
                                </Box>
                                <Box className="mt-2">
                                    <StyledSpan color="#707070" fontFamily="Myriad SemiBold" fontSize="1">
                                        Feevale Techpark
                                    </StyledSpan>
                                </Box>
                                <Box>
                                    <a target='_blank' href="https://www.google.com.br/maps/place/Av.+Edgar+Hoffmeister,+350+-+I,+Campo+Bom+-+RS,+93700-000/@-29.6552231,-51.0529533,17z/data=!3m1!4b1!4m5!3m4!1s0x951940e33b5d3a73:0x297e0cb2b1e2ea48!8m2!3d-29.6552278!4d-51.0507646">
                                        <StyledSpan color="#9B9B9B" fontSize="1" fontFamily="Myriad Regular" className="flex gap-0">
                                        Ver en el mapa
                                            <BsArrowRightShort className="pb-2 sm:pb-0" size={28}/>
                                        </StyledSpan>
                                    </a>
                                </Box>
                            </Box>
                        </Box>
    
                        <Box className="lg:w-[41%] mt-10 sm:mt-0">
                            <StyledH3>
                            Siempre estamos buscando mejorar nuestro conocimiento.
                            </StyledH3>
    
                            <StyledP className="my-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            Entregamos a nuestros clientes soluciones que combinan sustentabilidad y tecnología para que sus proyectos sean posibles de manera rápida y efectiva.
                            </StyledP>
    
                            <StyledSpan color="#002137" fontSize="1.125rem" fontFamily="Made Light">
                            Nuestra estructura
                            </StyledSpan>
    
                            <StyledP className="mt-5 mb-8" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            Con una estructura diseñada para el constante desarrollo científico, tecnológico y económico, Wirklich está inserta dentro del Parque Tecnológico Feevale, en Campo Bom (RS).
                            </StyledP>
    
                            <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            Todo este conjunto permite a Wirklich mantener grandes asociaciones en proyectos!
                            </StyledP>
                        </Box>
                    </StyledBox>
                </Container>
            </Box>
    
            <Box>
                <Container>
                    <Box className="flex justify-center items-center h-[205px] relative">
                        <Box className="absolute hidden lg:block top-1 lg:left-[160px] xl:left-[250px] 2xl:left-[300px]">
                            <LinesBlue className="lg:w-[90%] xl:w-auto"/>
                        </Box>
                        <StyledSpan color="#002137" fontFamily="Made Light" fontSize="1.125rem">
                        Tecnología y sostenibilidad
                        </StyledSpan>
                        <Box className="absolute hidden lg:block lg:-bottom-[25px] xl:-bottom-[26px] lg:right-[125px] xl:right-[235px] 2xl:right-[290px]">
                            <LinesGreen className="lg:w-[100%] xl:w-auto"/>
                        </Box>
                    </Box>
                </Container>
            </Box>
    
            <Box className="pt-8">
                <Container>
                    <StyledBox>
                        <Box className="lg:w-[45%]">
                            <StyledH3>
                            Wirklich consiguió aliarse con el entorno a través de la planificación de sus instalaciones
                            </StyledH3>
    
                            <StyledP className="my-10" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            La empresa dispone de un depósito para <StyledSpan color="#009E15" fontFamily="Myriad Bold">retención de agua de lluvia</StyledSpan>, que es <StyledSpan color="#009E15" fontFamily="Myriad Bold">reutilizado</StyledSpan> para riego externo. El edificio cuenta con entrada de ventilación e iluminación natural, lo que se traduce en una disminución del consumo energético.
                            </StyledP>
    
                            <Box className="flex flex-col gap-8">
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
    
                        <Box className="lg:w-[45%] xl:w-[41%] mt-10 md:mt-0">
                            <Box className="w-[100%] md:w-[500px] lg:w-[460px] xl:w-[510px] 2xl:w-[570px] h-[250px] md:h-[300px] lg:h-[330px] md:bg-[#038a1531] rounded-[10px] relative">
                                <img className="absolute md:w-[80%] sm:w-[90%] lg:w-[90%] xl:w-[85%] 2xl:w-[90%] md:left-2/4 md:-translate-x-2/4 md:-bottom-8 2xl:-bottom-10" src="https://uploaddeimagens.com.br/images/003/947/669/full/Interse%C3%A7%C3%A3o_9.png?1658246913" alt="" />
                            </Box> 
    
                            <Box className="mt-20">
                                <Link className="flex items-center gap-2" to='/meio-ambiente'>
                                <StyledSpan color="#006CC9" fontFamily="Myriad SemiBold" fontSize="1.125rem">
                                Conoce la tecnología
                                </StyledSpan>
    
                                <StyledSpan className="flex items-center">
                                    <img src="https://uploaddeimagens.com.br/images/003/947/892/full/werde.png?1658253041" alt="" />
                                    <BsArrowRightShort className="mt-2" color="#006CC9" size={35}/>
                                </StyledSpan>
                                </Link>
                            </Box>
                        </Box>
                    </StyledBox>
                </Container>
            </Box>
    
    
            <ScrollToTop />
            <FooterBanner onClick={scrollToTop}/>
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
