import styled from 'styled-components'


export default () => {
    return (<>
        <Section id="sobre">
            <Container>
                <TituloCenter>
                    <TituloBox>
                        <h2 class="up_title">Sobre Nós</h2>
                        <h1 class="title">Rapid Link</h1>
                        <div class="box_purple"></div>
                    </TituloBox>
                </TituloCenter>
                <SobreFlex>
                    <SobreBox>
                        <div class="image_sobre">
                            <img src="static/Net_img.png" />
                        </div>
                    </SobreBox>
                    <SobreBox>
                        <p>Provedor de Internet Banda Larga 100% Fibra Óptica, oferecemos internet de qualidade, com preço acessível e ótimo atendimento!</p>
                        <p>Alta Tecnologia Nossa missão é prover aos nossos clientes uma conexão com qualidade, preço justo e compatível com o mercado.</p>
                        <p>Trabalhando com excelência no atendimento e qualidade nos equipamentos que são utilizados por nossa empresa.</p>
                        <a class="button" href="#planos">Ver Planos</a>
                    </SobreBox>
                </SobreFlex>
            </Container>
        </Section>
    </>)
}

const Section = styled.section`
    margin-top: -150px;
    @media (max-width: 768px){
        margin-top: 0px;
    }
`;
const Container = styled.div`
    position: relative;
    display: block;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2%;
`;
const TituloCenter = styled.div`
    width: 100%;
    text-align: center;
    position: relative;
`;
const TituloBox = styled.div`
    display: inline-block;
    text-align: center;
    position: relative;
    padding: 0 30px;
    z-index: 0;
    .up_title{
        display: block;
        font-weight: 300;
        font-size: 24px;
        line-height: 73px;
        text-transform: uppercase;
        color: #B52B6B;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        @media (max-width: 1024px){
            font-size: 21px;
            line-height: 21px;
        }
    }
    .title{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'objet';
        display: block;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        font-weight: 500;
        font-size: 74px;
        line-height: 75px;
        text-transform: uppercase;
        color: #ffffff;
        @media (max-width: 1024px){
            font-size: 56px;
        }
        @media (max-width: 490px){
            font-size: 42px;
            line-height: 51px;
        }
        @media (max-width: 390px){
            font-size: 36px;
            line-height: 42px;
        }
        @media (max-width: 338px){
            font-size: 28px;
            line-height: 36px;
        }
    }
    .box_purple{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: 44px;
        background-color: #B52B6B;
        opacity: .44;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: -1;
    }
`;
const SobreFlex = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    vertical-align: center;
    justify-content: space-between;
    padding: 100px 0 0 0;
    @media (max-width: 768px){
        flex-wrap: wrap;
        padding: 40px 0;
    }
`;
const SobreBox = styled.div`
    height: 100%;
    min-height: 400px;
    width: 48%;
    text-align: left;
    z-index: 2;
    padding: 10px 0;
    margin-bottom: 40px;
    img{
        width: 100%;
        height: auto;
        display: block;
    }
    p{
        color: white;
        font-weight: 300;
        font-size: 24px;
        line-height: 37px;
        margin-bottom: 30px;
    }
    a.button{
        display: block;
        height: 45px;
        line-height: 45px;
        width: 176px;
        text-align: center;
        cursor: pointer;
        background-color: #FFB846;
        background-image: linear-gradient(to bottom,#F07C00, #FFB846);
        border-radius: 8px;
        text-decoration: none;
        color: white;
        font-weight: 500;
        font-size: 20px;
        transition: .2s;
    }
    a.button:hover{
        background-image: linear-gradient(to bottom, #FFB846,#F07C00);
        font-size: 22px;
    }
    @media (max-width: 768px){
        min-height: 0;
        width: 100%;
        text-align: left;
        padding: 10px 0;
        margin-bottom: 0;
        img{
            width: 100%;
            max-width: 360px;
            height: auto;
            display: block;
            margin: 0 auto;
        }
        p{
            color: white;
            font-weight: 300;
            font-size: 19px;
            line-height: 31px;
            margin-bottom: 30px;
        }
    }   
`;