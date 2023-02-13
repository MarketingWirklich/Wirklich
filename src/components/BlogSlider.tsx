import { Box } from "@mui/material"
import { Link } from "react-router-dom"
import { StyledBox } from "../styled-components/StyledBox"
import { StyledH2, StyledH3 } from "../styled-components/StyledH1"
import { StyledP } from "../styled-components/StyledP"
import { StyledSpan } from "../styled-components/StyledSpan"

import { AiOutlineArrowRight } from 'react-icons/ai'
import ArrowSlide from "../Static/svg/ArrowSlide";
import { useRef } from "react"
import { BlogSlideSingle } from "./BlogSlideSingle"
import { useDrawerContext } from "../Contexts/MainContext"

function BlogSlider() {

   
    const carousel = useRef<any>()
    const slide = useRef<any>(null)
    const margin = 40

    const slidePrev = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
        carousel.current.scrollLeft -= slide.current.offsetWidth + margin
        console.log(slide.current.offsetWidth) 
  }
 
  const slideNext = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
        carousel.current.scrollLeft += slide.current.offsetWidth + margin
        console.log(slide.current.offsetWidth)
      
  }

  const { isEnglish, isPortuguese, isSpanish } = useDrawerContext()


    if (isPortuguese) {
        return (

            <>
            <StyledBox center className="pt-32 pb-0" id="noticias">
                        <Box>
                            <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                                BLOG
                            </StyledSpan>
        
                            <StyledH2>
                            Most recent posts
                            </StyledH2>
                        </Box>
        
                        <Box className="flex w-full lg:w-auto justify-between lg:justify-start items-center lg:gap-3">
                            <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                            See other <StyledSpan fontFamily="Myriad Bold">articles</StyledSpan>
                            </StyledSpan>
                            <Box className="flex gap-2">
                                <ArrowSlide onClick={slidePrev} className="cursor-pointer stroke-[#0089e7]"/>
                                <ArrowSlide onClick={slideNext} className="rotate-180 cursor-pointer stroke-[#0089e7]"/>
                            </Box>
                        </Box>
                </StyledBox>
        
                <Box className="pb-5">
                    <Box ref={carousel} className="flex carousel w-full overflow-x-auto scroll-bar-off duration-700 py-10">
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[40px]">
                        <BlogSlideSingle 
                        title="Meio ambiente e sustentabilidade, na mira do consumidor" 
                        description="A preocupação com o meio ambiente e a sustentabilidade, antes restrita a pequenos grupos, ganhou amplitude nos últimos anos, alcançando boa parte da população, e não somente como tema de discussão, mas como indicador de consumo."
                        image="/static/img/page_blog/meio-ambiente-e-sus.png" 
                        link="/blog/meio-ambiente-e-sustentabilidade-na-mira-do-consumidor"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[40px]">
                        <BlogSlideSingle 
                        title="Fundos setoriais crescem no financiamento do agronegócio" 
                        description="O Fundo de Investimentos do Agronegócio (Fiagro) tem recebido interesse dos investidores. Os Fiagro começaram a ser negociados há cerca de dois anos. No momento, aproximadamente 85 mil investidores já colocaram em torno de R$ 6 bilhões nos Fiagro."
                        image="/static/img/page_blog/fundos-setoriais.png" 
                        link="/blog/fundos-setoriais-crescem-no-financiamento-do-agronegocio"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Inteligência artificial e IOT puxam automação na Indústria Frigorífica Brasileira" 
                        description="O Ramo Frigorífico está caminhando rapidamente na era da indústria 4.0, através de inovações como inteligência artificial e IOT em seus processos. Muitas start-ups brasileiras têm levado novas tecnologias ao mercado com produção mais eficiente e uma gestão automatizada."
                        image="/static/img/page_blog/iot.png" 
                        link="/blog/inteligencia-artificial-e-IOT-puxam-automacao-na-industria-frigorifica-brasileira"
                        />
                        </Box>
                        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Governo atrai investimento de R$ 16,8 bi em ferrovias" 
                        description="O governo de Minas assinou um protocolo com  a Petrocity Ferrovias para que sejam investidos R$ 16,8 Bilhões no estado.
                        O Complexo ferroviário deve se tornar um dos pontos logísticos mais importantes do país, percorrendo 62 cidades.
                        O Governo Federal também está empenhado em alavancar o setor ferroviário, como fez com o Plano Estratégico Ferroviário.
                        "
                        image="/static/img/page_blog/governo-atrai.png" 
                        link="/blog/governo-atrai-investimento-de-RS-16-8-bi-em-ferrovias"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="K 2022 - A maior feira de plástico e borracha do mundo" 
                        description="A Wirklich esteve presente na K 2022, para trazer as melhores tecnologias e inovações do setor para solo brasileiro, oferecendo o melhor do ramo. Preparamos um artigo para você conhecer a maior feira do mundo nos setores de plástico e borracha e ficar por dentro dos principais assuntos deste grande evento." 
                        image="/static/img/page_blog/k2022.png" 
                        link="/blog/K-2022-a-maior-feira-de-plastico-e-borracha-do-mundo"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Decreto que regulamenta a Lei das Ferrovias é assinado" 
                        description="O decreto assinado deve viabilizar investimentos privados para construção de ferrovias. Novos contratos de autorizações ferroviárias ainda serão assinados, como o modelo de operação de ferrovia." 
                        image="/static/img/page_blog/lei-das-ferrovias.png" 
                        link="/blog/decreto-que-regulamenta-a-lei-das-ferrovias-e-assinado"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Exportações do agronegócio em setembro chegam a US$ 13,9 bilhões, com aumento de 38,4%" 
                        description="As exportações realizadas pelo agronegócio em 2022 chegaram a U$13,97 Bilhões em setembro deste ano. O complexo soja obteve um aumento de lucro de 24,2% devido aos preços elevados do produto." 
                        image="/static/img/page_blog/exportacao-agronegocio.png" 
                        link="/blog/exportacoes-do-agronegocio-em-setembro-chegam-a-US-13-9-bilhoes-com-aumento-de-38-4"
                        />
                        </Box>
        
                        <Box ref={slide} className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="WEG aponta forte crescimento do negócio de geração solar distribuída em 2022" 
                        description="O segmento de energia solar foi um dos destaques de resultado financeiro do terceiro trimestre.O diretor de finanças e relações com investidores da empresa apontou um ano positivo para o mercado interno de energia solar." 
                        image="/static/img/page_blog/weg.png" 
                        link="/blog/WEG-aponta-forte-crescimento-do-negocio-de-geracao-solar-distribuida-em-2022"
                        />
                        </Box>
        
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Revolução 4.0 inspira ampliação da Wirklich" 
                        description="A Wirklich, empresa instalada na unidade de Campo Bom do Feevale Techpark, está ampliando a sua sede para aumentar a capacidade produtiva e se conectar" 
                        image="https://uploaddeimagens.com.br/images/003/943/291/full/Interse%C3%A7%C3%A3o_6.png?1657889948" 
                        link="/blog/revolucao-40-inspira-ampliacao-da-wirklich"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="A indústria e o ecossistema de inovação" 
                        description="No dia 22 de maio, o Centro Sinplast de Inovação e Governança (CSIG) realizou uma visita técnica à indústria Wirklich, especializada em produtos" 
                        image="https://uploaddeimagens.com.br/images/003/943/406/full/Interse%C3%A7%C3%A3o_8.png?1657894726" 
                        link=""
                        />
                        </Box>
        
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Certificado empresas inovadoras - Campo Bom" 
                        description="A WIRKLICH foi reconhecida pela Prefeitura Municipal de Campo Bom como empresa destaque na área de Tecnologia em 2017." 
                        image="https://uploaddeimagens.com.br/images/003/943/404/full/Interse%C3%A7%C3%A3o_7.png?1657894695" 
                        link=""
                        />
                        </Box>
        
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Informativo do Sinplast" 
                        description="O diretor da Wirklich, Marcelo Sperb, agora é membro da Gestão do SinplastRS para o período 2015-2018, onde coordena o Comitê Sinplast para o Segmento de Injeção." 
                        image="https://uploaddeimagens.com.br/images/003/943/502/full/Grupo_3335.png?1657898763" 
                        link=""
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none">
                        <BlogSlideSingle 
                        title="Selo Braskem Labs" 
                        description="A Wirklich recebeu, esse mês, o selo de empresa participante do Braskem Labs 2015, pela apresentação do projeto Werde Phyto." 
                        image="https://uploaddeimagens.com.br/images/003/943/507/full/Ret%C3%A2ngulo_776.png?1657899021" 
                        link=""
                        />
                        </Box>
        
                    </Box>
                </Box>
        
            </>
            )
    } else if (isEnglish) {
        return (

            <>
            <StyledBox center className="pt-32 pb-0" id="noticias">
                        <Box>
                            <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                                BLOG
                            </StyledSpan>
        
                            <StyledH2>
                            Publicaciones más recientes
                            </StyledH2>
                        </Box>
        
                        <Box className="flex w-full lg:w-auto justify-between lg:justify-start items-center lg:gap-3">
                            <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                                Ver otros <StyledSpan fontFamily="Myriad Bold">artículos</StyledSpan>
                            </StyledSpan>
                            <Box className="flex gap-2">
                                <ArrowSlide onClick={slidePrev} className="cursor-pointer stroke-[#0089e7]"/>
                                <ArrowSlide onClick={slideNext} className="rotate-180 cursor-pointer stroke-[#0089e7]"/>
                            </Box>
                        </Box>
                </StyledBox>
        
                <Box className="pb-5">
                    <Box ref={carousel} className="flex carousel w-full overflow-x-auto scroll-bar-off duration-700 py-10">
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[40px]">
                        <BlogSlideSingle 
                        title="Meio ambiente e sustentabilidade, na mira do consumidor" 
                        description="A preocupação com o meio ambiente e a sustentabilidade, antes restrita a pequenos grupos, ganhou amplitude nos últimos anos, alcançando boa parte da população, e não somente como tema de discussão, mas como indicador de consumo."
                        image="/static/img/page_blog/meio-ambiente-e-sus.png" 
                        link="/blog/meio-ambiente-e-sustentabilidade-na-mira-do-consumidor"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[40px]">
                        <BlogSlideSingle 
                        title="Fundos setoriais crescem no financiamento do agronegócio" 
                        description="O Fundo de Investimentos do Agronegócio (Fiagro) tem recebido interesse dos investidores. Os Fiagro começaram a ser negociados há cerca de dois anos. No momento, aproximadamente 85 mil investidores já colocaram em torno de R$ 6 bilhões nos Fiagro."
                        image="/static/img/page_blog/fundos-setoriais.png" 
                        link="/blog/fundos-setoriais-crescem-no-financiamento-do-agronegocio"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Inteligência artificial e IOT puxam automação na Indústria Frigorífica Brasileira" 
                        description="O Ramo Frigorífico está caminhando rapidamente na era da indústria 4.0, através de inovações como inteligência artificial e IOT em seus processos. Muitas start-ups brasileiras têm levado novas tecnologias ao mercado com produção mais eficiente e uma gestão automatizada."
                        image="/static/img/page_blog/iot.png" 
                        link="/blog/inteligencia-artificial-e-IOT-puxam-automacao-na-industria-frigorifica-brasileira"
                        />
                        </Box>
                        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Governo atrai investimento de R$ 16,8 bi em ferrovias" 
                        description="O governo de Minas assinou um protocolo com  a Petrocity Ferrovias para que sejam investidos R$ 16,8 Bilhões no estado.
                        O Complexo ferroviário deve se tornar um dos pontos logísticos mais importantes do país, percorrendo 62 cidades.
                        O Governo Federal também está empenhado em alavancar o setor ferroviário, como fez com o Plano Estratégico Ferroviário.
                        "
                        image="/static/img/page_blog/governo-atrai.png" 
                        link="/blog/governo-atrai-investimento-de-RS-16-8-bi-em-ferrovias"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="K 2022 - A maior feira de plástico e borracha do mundo" 
                        description="A Wirklich esteve presente na K 2022, para trazer as melhores tecnologias e inovações do setor para solo brasileiro, oferecendo o melhor do ramo. Preparamos um artigo para você conhecer a maior feira do mundo nos setores de plástico e borracha e ficar por dentro dos principais assuntos deste grande evento." 
                        image="/static/img/page_blog/k2022.png" 
                        link="/blog/K-2022-a-maior-feira-de-plastico-e-borracha-do-mundo"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Decreto que regulamenta a Lei das Ferrovias é assinado" 
                        description="O decreto assinado deve viabilizar investimentos privados para construção de ferrovias. Novos contratos de autorizações ferroviárias ainda serão assinados, como o modelo de operação de ferrovia." 
                        image="/static/img/page_blog/lei-das-ferrovias.png" 
                        link="/blog/decreto-que-regulamenta-a-lei-das-ferrovias-e-assinado"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Exportações do agronegócio em setembro chegam a US$ 13,9 bilhões, com aumento de 38,4%" 
                        description="As exportações realizadas pelo agronegócio em 2022 chegaram a U$13,97 Bilhões em setembro deste ano. O complexo soja obteve um aumento de lucro de 24,2% devido aos preços elevados do produto." 
                        image="/static/img/page_blog/exportacao-agronegocio.png" 
                        link="/blog/exportacoes-do-agronegocio-em-setembro-chegam-a-US-13-9-bilhoes-com-aumento-de-38-4"
                        />
                        </Box>
        
                        <Box ref={slide} className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="WEG aponta forte crescimento do negócio de geração solar distribuída em 2022" 
                        description="O segmento de energia solar foi um dos destaques de resultado financeiro do terceiro trimestre.O diretor de finanças e relações com investidores da empresa apontou um ano positivo para o mercado interno de energia solar." 
                        image="/static/img/page_blog/weg.png" 
                        link="/blog/WEG-aponta-forte-crescimento-do-negocio-de-geracao-solar-distribuida-em-2022"
                        />
                        </Box>
        
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Revolução 4.0 inspira ampliação da Wirklich" 
                        description="A Wirklich, empresa instalada na unidade de Campo Bom do Feevale Techpark, está ampliando a sua sede para aumentar a capacidade produtiva e se conectar" 
                        image="https://uploaddeimagens.com.br/images/003/943/291/full/Interse%C3%A7%C3%A3o_6.png?1657889948" 
                        link="/blog/revolucao-40-inspira-ampliacao-da-wirklich"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="A indústria e o ecossistema de inovação" 
                        description="No dia 22 de maio, o Centro Sinplast de Inovação e Governança (CSIG) realizou uma visita técnica à indústria Wirklich, especializada em produtos" 
                        image="https://uploaddeimagens.com.br/images/003/943/406/full/Interse%C3%A7%C3%A3o_8.png?1657894726" 
                        link=""
                        />
                        </Box>
        
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Certificado empresas inovadoras - Campo Bom" 
                        description="A WIRKLICH foi reconhecida pela Prefeitura Municipal de Campo Bom como empresa destaque na área de Tecnologia em 2017." 
                        image="https://uploaddeimagens.com.br/images/003/943/404/full/Interse%C3%A7%C3%A3o_7.png?1657894695" 
                        link=""
                        />
                        </Box>
        
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Informativo do Sinplast" 
                        description="O diretor da Wirklich, Marcelo Sperb, agora é membro da Gestão do SinplastRS para o período 2015-2018, onde coordena o Comitê Sinplast para o Segmento de Injeção." 
                        image="https://uploaddeimagens.com.br/images/003/943/502/full/Grupo_3335.png?1657898763" 
                        link=""
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none">
                        <BlogSlideSingle 
                        title="Selo Braskem Labs" 
                        description="A Wirklich recebeu, esse mês, o selo de empresa participante do Braskem Labs 2015, pela apresentação do projeto Werde Phyto." 
                        image="https://uploaddeimagens.com.br/images/003/943/507/full/Ret%C3%A2ngulo_776.png?1657899021" 
                        link=""
                        />
                        </Box>
        
                    </Box>
                </Box>
        
            </>
            )
    } else if (isSpanish) {
        return (

            <>
            <StyledBox center className="pt-32 pb-0" id="noticias">
                        <Box>
                            <StyledSpan color="#B30C13" fontSize="1.125rem" fontFamily="Myriad Regular">
                                BLOG
                            </StyledSpan>
        
                            <StyledH2>
                            Publicaciones más recientes
                            </StyledH2>
                        </Box>
        
                        <Box className="flex w-full lg:w-auto justify-between lg:justify-start items-center lg:gap-3">
                            <StyledSpan color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                               Ver otros <StyledSpan fontFamily="Myriad Bold">artículos</StyledSpan>
                            </StyledSpan>
                            <Box className="flex gap-2">
                                <ArrowSlide onClick={slidePrev} className="cursor-pointer stroke-[#0089e7]"/>
                                <ArrowSlide onClick={slideNext} className="rotate-180 cursor-pointer stroke-[#0089e7]"/>
                            </Box>
                        </Box>
                </StyledBox>
        
                <Box className="pb-5">
                    <Box ref={carousel} className="flex carousel w-full overflow-x-auto scroll-bar-off duration-700 py-10">
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[40px]">
                        <BlogSlideSingle 
                        title="Meio ambiente e sustentabilidade, na mira do consumidor" 
                        description="A preocupação com o meio ambiente e a sustentabilidade, antes restrita a pequenos grupos, ganhou amplitude nos últimos anos, alcançando boa parte da população, e não somente como tema de discussão, mas como indicador de consumo."
                        image="/static/img/page_blog/meio-ambiente-e-sus.png" 
                        link="/blog/meio-ambiente-e-sustentabilidade-na-mira-do-consumidor"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[40px]">
                        <BlogSlideSingle 
                        title="Fundos setoriais crescem no financiamento do agronegócio" 
                        description="O Fundo de Investimentos do Agronegócio (Fiagro) tem recebido interesse dos investidores. Os Fiagro começaram a ser negociados há cerca de dois anos. No momento, aproximadamente 85 mil investidores já colocaram em torno de R$ 6 bilhões nos Fiagro."
                        image="/static/img/page_blog/fundos-setoriais.png" 
                        link="/blog/fundos-setoriais-crescem-no-financiamento-do-agronegocio"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Inteligência artificial e IOT puxam automação na Indústria Frigorífica Brasileira" 
                        description="O Ramo Frigorífico está caminhando rapidamente na era da indústria 4.0, através de inovações como inteligência artificial e IOT em seus processos. Muitas start-ups brasileiras têm levado novas tecnologias ao mercado com produção mais eficiente e uma gestão automatizada."
                        image="/static/img/page_blog/iot.png" 
                        link="/blog/inteligencia-artificial-e-IOT-puxam-automacao-na-industria-frigorifica-brasileira"
                        />
                        </Box>
                        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Governo atrai investimento de R$ 16,8 bi em ferrovias" 
                        description="O governo de Minas assinou um protocolo com  a Petrocity Ferrovias para que sejam investidos R$ 16,8 Bilhões no estado.
                        O Complexo ferroviário deve se tornar um dos pontos logísticos mais importantes do país, percorrendo 62 cidades.
                        O Governo Federal também está empenhado em alavancar o setor ferroviário, como fez com o Plano Estratégico Ferroviário.
                        "
                        image="/static/img/page_blog/governo-atrai.png" 
                        link="/blog/governo-atrai-investimento-de-RS-16-8-bi-em-ferrovias"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="K 2022 - A maior feira de plástico e borracha do mundo" 
                        description="A Wirklich esteve presente na K 2022, para trazer as melhores tecnologias e inovações do setor para solo brasileiro, oferecendo o melhor do ramo. Preparamos um artigo para você conhecer a maior feira do mundo nos setores de plástico e borracha e ficar por dentro dos principais assuntos deste grande evento." 
                        image="/static/img/page_blog/k2022.png" 
                        link="/blog/K-2022-a-maior-feira-de-plastico-e-borracha-do-mundo"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Decreto que regulamenta a Lei das Ferrovias é assinado" 
                        description="O decreto assinado deve viabilizar investimentos privados para construção de ferrovias. Novos contratos de autorizações ferroviárias ainda serão assinados, como o modelo de operação de ferrovia." 
                        image="/static/img/page_blog/lei-das-ferrovias.png" 
                        link="/blog/decreto-que-regulamenta-a-lei-das-ferrovias-e-assinado"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Exportações do agronegócio em setembro chegam a US$ 13,9 bilhões, com aumento de 38,4%" 
                        description="As exportações realizadas pelo agronegócio em 2022 chegaram a U$13,97 Bilhões em setembro deste ano. O complexo soja obteve um aumento de lucro de 24,2% devido aos preços elevados do produto." 
                        image="/static/img/page_blog/exportacao-agronegocio.png" 
                        link="/blog/exportacoes-do-agronegocio-em-setembro-chegam-a-US-13-9-bilhoes-com-aumento-de-38-4"
                        />
                        </Box>
        
                        <Box ref={slide} className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="WEG aponta forte crescimento do negócio de geração solar distribuída em 2022" 
                        description="O segmento de energia solar foi um dos destaques de resultado financeiro do terceiro trimestre.O diretor de finanças e relações com investidores da empresa apontou um ano positivo para o mercado interno de energia solar." 
                        image="/static/img/page_blog/weg.png" 
                        link="/blog/WEG-aponta-forte-crescimento-do-negocio-de-geracao-solar-distribuida-em-2022"
                        />
                        </Box>
        
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Revolução 4.0 inspira ampliação da Wirklich" 
                        description="A Wirklich, empresa instalada na unidade de Campo Bom do Feevale Techpark, está ampliando a sua sede para aumentar a capacidade produtiva e se conectar" 
                        image="https://uploaddeimagens.com.br/images/003/943/291/full/Interse%C3%A7%C3%A3o_6.png?1657889948" 
                        link="/blog/revolucao-40-inspira-ampliacao-da-wirklich"
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="A indústria e o ecossistema de inovação" 
                        description="No dia 22 de maio, o Centro Sinplast de Inovação e Governança (CSIG) realizou uma visita técnica à indústria Wirklich, especializada em produtos" 
                        image="https://uploaddeimagens.com.br/images/003/943/406/full/Interse%C3%A7%C3%A3o_8.png?1657894726" 
                        link=""
                        />
                        </Box>
        
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Certificado empresas inovadoras - Campo Bom" 
                        description="A WIRKLICH foi reconhecida pela Prefeitura Municipal de Campo Bom como empresa destaque na área de Tecnologia em 2017." 
                        image="https://uploaddeimagens.com.br/images/003/943/404/full/Interse%C3%A7%C3%A3o_7.png?1657894695" 
                        link=""
                        />
                        </Box>
        
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none mr-[60px]">
                        <BlogSlideSingle 
                        title="Informativo do Sinplast" 
                        description="O diretor da Wirklich, Marcelo Sperb, agora é membro da Gestão do SinplastRS para o período 2015-2018, onde coordena o Comitê Sinplast para o Segmento de Injeção." 
                        image="https://uploaddeimagens.com.br/images/003/943/502/full/Grupo_3335.png?1657898763" 
                        link=""
                        />
                        </Box>
        
                        <Box className="w-[330px] sm:w-[27.7rem] flex-none">
                        <BlogSlideSingle 
                        title="Selo Braskem Labs" 
                        description="A Wirklich recebeu, esse mês, o selo de empresa participante do Braskem Labs 2015, pela apresentação do projeto Werde Phyto." 
                        image="https://uploaddeimagens.com.br/images/003/943/507/full/Ret%C3%A2ngulo_776.png?1657899021" 
                        link=""
                        />
                        </Box>
        
                    </Box>
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

export default BlogSlider

