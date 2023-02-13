import { Box, Container } from "@mui/material"
import { BlogBanner } from "../../components/BlogBanner"
import BlogSlider from "../../components/BlogSlider"
import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { StyledBox } from "../../styled-components/StyledBox"
import { StyledH2 } from "../../styled-components/StyledH1"
import { StyledP } from "../../styled-components/StyledP"

export const IOT = () => {
    return (
        <div>
            <Navbar />
            <BlogBanner image='/static/img/page_blog/iot.png'/>
            <Box className="pt-36 pb-12">
            <Container>
                <StyledBox>
                        <Box className="lg:w-[100%]">
                            <StyledH2>
                                Inteligência artificial e IOT puxam automação na Indústria Frigorífica Brasileira
                            </StyledH2>
                        </Box>
                </StyledBox>

                <Box className="mt-20 flex flex-col gap-8">
                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    A garantia do sabor, maciez e suculência da carne que você está comendo pode, muito em breve, depender mais do crivo de robôs e algoritmos do que do olho humano. No Brasil, a Indústria 4.0 tem avançado a passos largos no ramo frigorífico principalmente com soluções de inteligência artificial e internet das coisas para poder analisar mais padrões e gerar maior assertividade na diferenciação das carcaças ainda na linha de produção.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Em Piracicaba (SP), a startup Brazil Beef Quality (BBQ) desenvolveu um sistema de classificação de carcaças inspirado no modelo australiano Meat Standards Australia e no americano Beef Quality and Yield Grade. A partir da observação humana, de análises sensoriais e uma boa dose de tecnologia, a empresa promete garantir uma constância no padrão da carne que chega à mesa do consumidor.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    A carne pode ser classificada como: sem conformidade (fora do padrão do selo da BBQ); 3 estrelas (nível satisfatório de sabor, maciez e suculência); 4 estrelas (nível bom) ou 5 estrelas (nível máximo desses atributos). O selo genérico, apenas BBQ, enquadra a carne, no mínimo, 3 estrelas, mas tem sido mais comumente usado em carnes 4 estrelas, quando o frigorífico abate poucos animais de alto padrão por dia.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Marcelo Coutinho, CEO da startup, explica que a metodologia de análise na indústria é baseada em 15 parâmetros. Destes, cinco são catalogados ainda no abate: sexo, raça, peso de carcaça, acabamento e dentição (para aferir a idade). “Essa primeira parte, todo técnico de frigorífico já está acostumado a fazer”, comenta Coutinho.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    O diferencial está na análise feita na câmara fria. Num primeiro momento desta etapa, três parâmetros são avaliados: método de suspensão da carcaça, ossificação e altura do cupim (segunda verificação do grau de sangue taurino depois da raça). Num segundo momento, já com a carcaça resfriada, os técnicos treinados pela BBQ avaliam o grau de marmoreio (gordura entremeada) da carcaça, sua espessura de gordura, área de olho de lombo, pH e cor (da carne e gordura) — fechando os 15 parâmetros.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    “Hoje, a gente treina, habilita e credencia pessoas para avaliarem a carcaça, seja um profissional do frigorífico, terceirizado ou autônomo, para garantir uma avaliação bem-feita. Os frigoríficos que trabalham com qualidade sabem que você não engana o consumidor”, diz.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Para agilizar o processo dentro da câmara fria, a startup vai lançar, em breve, uma ferramenta que faz a análise dos parâmetros na câmara fria com base em imagens de celular. Assim, será possível calcular automaticamente a área de olho de lombo, espessura de gordura e marmoreio.
                    </StyledP>
                    
                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    A tecnologia leva mais transparência à cadeia, gerando relatórios em tempo real para o produtor e a indústria. Do lado da indústria, essas informações são a base para um estudo dos fornecedores, que podem ser identificados um a um e passar a receber um prêmio pelas carcaças de maior qualidade. O prêmio, em geral, varia na casa de 10% sobre o valor da arroba do boi/Cepea, de acordo com o empreendedor. “E já tem produtor que escolhe um frigorífico em detrimento do outro porque tem, no mínimo, um feedback detalhado”, conta.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Usando esse método, a BBQ já avaliou mais de 40 mil carcaças. Junto ao consumidor, fez outras 30 mil análises sensoriais, atenta ao paladar como forma de calibrar seu algoritmo. As degustações são feitas geralmente em eventos, dentro de uma cabine itinerante, onde o consumidor prova a carne recém saída da churrasqueira e avalia o nível de maciez, sabor e Suculência. A régua é a mesma usada no frigorífico (3,4 ou 5 estrelas).
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    A Brazil Beef Quality nasceu em 2017, a partir da tese de doutorado de Marcelo Coutinho na Escola Superior de Agricultura Luiz de Queiroz (Esala/USP). Desde então, já captou cerca de R$ 1,5 milhão com a Fapesp para financiar suas pesquisas.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Em 2021, recebeu um cheque de R$ 1 milhão do investidor-anjo Valdomiro Poliselli Junior, CEO da VP9, que levou a tecnologia para dentro de suas plantas. Hoje, 100 animais por dia são classificados pela Brazil Beef Quality na VP, reconhecida por produzir genética e carne de qualidade.
                    </StyledP>

                    <StyledP color="#000" fontFamily="Myriad Regular" fontSize="1.625rem">
                    Qualidade e Rastreabilidade
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Na Minerva Foods, líder em exportação de carne bovina na América do Sul, a tecnologia usada para automatizar a tipificação de carcaças é da startup Ecotrace. Com o uso de inteligência artificial, a startup acompanha em tempo real o padrão de corte de todas as carcaças que passam pela linha de produção da unidade de Rolim de Moura (RO). A previsão é que em breve, todas as unidades da Minerva Foods contem com a tecnologia.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Para calibrar o sistema, mais de 30 mil imagens foram avaliadas e classificadas manualmente, o que permitiu avançar para uma análise automatizada de cada meia carcaça em 0,8 segundos, em média.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Na linha de produção, câmeras especiais captam a imagem das carcaças e a inteligência artificial identifica hematomas e falhas operacionais, além de fazer a classificação de qualidade baseada no acabamento de gordura. Os equipamentos de monitoramento se comunicam por meio de uma rede de internet das coisas (loT). A Ecotrace atende frigoríficos que processam bovinos de corte e também a cadeia de aves, monitorando desde granjas de avós, de matrizes e aves de corte.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    “O investimento em L.A. é parte do nosso olhar estratégico sobre como a inovação aumenta a nossa produtividade ao mesmo tempo em que resulta em produtos com qualidade superior. Estamos otimizando nossa operação, tornando a produção ainda mais assertiva e padronizada, desde a escolha de fornecedores até o produto final”, diz Silvio Irizawa, Diretor Industrial da Minerva Foods.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Flavio Redi, CEO da Ecotrace, destaca que além da tipificação de carcaças, a startup trabalha com a rastreabilidade da produção. “Antigamente a gente ia na gôndola do supermercado e só se pautava na questão da qualidade. Com a nova geração, começamos a falar do consumidor 4.0 e do atributo 'ética;, que entrou em cena com um peso alto”, diz.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    As informações submetidas ao crivo da inteligência artificial da Ecotrace são registradas no blockchain e tornam os dados auditáveis e acessíveis até mesmo para o consumidor final, no supermercado. "Com o celular apontado para o QR Code na embalagem, o consumidor consegue saber toda a história de determinado produto”, afirma. Isto vai desde o compliance ambiental dentro da propriedade rural, passando por todo o processo industrial até chegar na gôndola.
                    </StyledP>

                    <StyledP color="#000" fontFamily="Myriad Regular" fontSize="1.625rem">
                    Indústria 4.0
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    A Indústria frigorífica 4.0 opera com uma série de tecnologias, para além da inteligência artificial, e outros exemplos são: a automação via robótica, comunicação entre máquinas e a realidade virtual.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Mundo afora, diferentes países caminharam mais ou menos na linha de evolução da Indústria 1.0 para Indústria 4.0 e as possibilidades hoje só aumentam.
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Segundo artigo dos pesquisadores lan de Medeiros Esper, Pál J. e Alex Mason, os processos de abate no mundo todo ainda podem ser muito mais automatizados com tecnologias já existentes. E essa é uma tendência por vários fatores:
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    1. Necessidade de ganho de eficiência da produção;
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    2. Cuidado com a saúde do trabalhador;
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    3. Escassez de mão de obra no mercado de trabalho;
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    4. Atenção a normas de higiene e riscos de contaminação;
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    5. Flexibilidade para acomodar a variação de produção:
                    </StyledP>

                    <StyledP color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    6. Escalabilidade para atender a todos os volumes produtivos.
                    </StyledP>
                </Box>
                <Box className="mt-10">
                <StyledP color="#000" fontFamily="Myriad Regular" fontSize="1.125rem">
                Fonte: Inteligência artificial e IOT puxam automação na Indústria Frigorífica Brasileira. Agtechgarage. 2022. Disponível: 
                </StyledP>
                <StyledP color="text-blue-500" fontFamily="Myriad Regular" fontSize='1.125rem'>
                <a className="text-blue-500 overflow-hidden w-[100%] flex" target='_blank' href="https://www.agtechgarage.news/inteligencia-artificial-e-iot-na-industria-frigorifica-4-0/">https://www.agtechgarage.news/inteligencia-artificial-e-iot-na-industria-frigorifica-4-0/</a>
                </StyledP>
                </Box>
                <BlogSlider />
            </Container>
        </Box>
        <Footer />
            
        </div>
    )
}