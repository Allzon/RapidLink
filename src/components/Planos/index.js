import styled from "styled-components";
import Link from 'next/link';

export default () => {
    return (<>
        <Section id="planos">
            <Container>
                <TituloCenter>
                    <TituloBox>
                        <h2 className="up_title">Nossos</h2>
                        <h2 className="title">Planos</h2>
                        <div className="box_purple"></div>
                    </TituloBox>
                </TituloCenter>
            </Container>
            <PlanosBack style="background-color: rgb(180, 42, 106);">
                <Container>
                    <PlanosFlex>
                        <PlanosBox>
                            <h3>35 Mega Full</h3>
                            <span className="plano_box_reference">residencial</span>
                            <p className="price">R$ <span className="price_upper">39.99</span> /mês</p>
                            <ul>
                                <li>DOWNLOAD 50MB</li>
                                <li>UPLOAD 50MB</li>
                                <li>100% FIBRA ÓPTICA</li>
                                <li>WIFI-GRÁTIS</li>
                            </ul>
                            <Link href="#contrato">
                                <a className="contratar_button">Contratar</a>
                            </Link>
                        </PlanosBox>
                        <PlanosBox>
                            <h3>50 Mega Full</h3>
                            <span className="plano_box_reference">residencial</span>
                            <p className="price">R$ <span className="price_upper">69.99</span> /mês</p>
                            <ul>
                                <li>DOWNLOAD 50MB</li>
                                <li>UPLOAD 50MB</li>
                                <li>100% FIBRA ÓPTICA</li>
                                <li>WIFI-GRÁTIS</li>
                            </ul>
                            <Link href="#contrato">
                                <a className="contratar_button">Contratar</a>
                            </Link>
                        </PlanosBox>
                        <PlanosBox>
                            <h3>100 Mega Full</h3>
                            <span className="plano_box_reference">residencial</span>
                            <p className="price">R$ <span className="price_upper">99.99</span> /mês</p>
                            <ul>
                                <li>DOWNLOAD 50MB</li>
                                <li>UPLOAD 50MB</li>
                                <li>100% FIBRA ÓPTICA</li>
                                <li>WIFI-GRÁTIS</li>
                            </ul>
                            <Link href="#contrato">
                                <a className="contratar_button">Contratar</a>
                            </Link>
                        </PlanosBox>
                        <PlanosBox>
                            <h3>200 Mega Full</h3>
                            <span className="plano_box_reference">residencial</span>
                            <p className="price">R$<span className="price_upper">149.99</span> /mês</p>
                            <ul>
                                <li>DOWNLOAD 50MB</li>
                                <li>UPLOAD 50MB</li>
                                <li>100% FIBRA ÓPTICA</li>
                                <li>WIFI-GRÁTIS</li>
                            </ul>
                            <Link href="#contrato">
                                <a className="contratar_button">Contratar</a>
                            </Link>
                        </PlanosBox>
                    </PlanosFlex>
                </Container>
            </PlanosBack>
        </Section>
    </>);
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
const PlanosBack = styled.div`
    display: block;
    position: relative;
    background-color: #B42A6A;
    width: 100%;
    height: 746px;
    padding-top: 65px;
    @media (max-width: 768px){
        display: block;
        position: relative;
        background-color: #B42A6A;
        width: 100%;
        height: 100%;
        padding-top: 45px;
        padding-bottom: 45px;
    }
`;
const PlanosFlex = styled.div`
    display: flex;
    flex-wrap: nowrap;
    column-gap: 15px;
    position: relative;
    justify-content: space-between;
    display: flex;
    transition: .4s;
    @media (max-width: 768px){
        flex-wrap: wrap;
        column-gap: 15px;
        position: relative;
        justify-content: space-between;
    }
    h3{
        background-color: #62002D;
        background-image: linear-gradient(to bottom, #9F215B , #62002D);
    }
    .plano_box_reference{
        color: #C23D3A;
        text-transform: uppercase;
        display: block;
        width: 100%;
        text-align: center;
        font-size: 17px;
        font-weight: 400;
        margin-top: 30px;
        letter-spacing: 4.50px;
    }
    .contratar_button{
        background-color: #62002D;
        background-image: linear-gradient(to bottom, #9F215B , #62002D);
        text-decoration: none;
        text-transform: uppercase;
        display: inline-block;
        padding: 20px 30px;
        font-size: 22px;
        font-weight: 500;
        text-align: center;
        color: white;
        border-radius: 13px;
        margin-bottom: -31px;
        margin-top: 40px;
        cursor: pointer;
    }
`;
const PlanosBox = styled.div`
    display: block;    
    text-align: center;
    cursor: pointer;
    width: 32%;
    border-radius: 20px;
    background-color: #FFFFFF;
    position: relative;
    h3{
        display: inline-block;
        padding: 20px;
        font-size: 35px;
        font-weight: 500;
        text-align: center;
        color: white;
        border-bottom-left-radius: 13px;
        border-bottom-right-radius: 13px;
        position: relative;
        background-color: #62002D;
        background-image: linear-gradient(to bottom, #9F215B , #62002D);
    }
    ul{
        list-style-type: none;
    }
    ul li{
        color: #B52B6B;
        width: 100%;
        font-size: 16px;
        text-transform: uppercase;
        line-height: 33px;
        display: block;
        font-weight: 500;
    }
    .price{
        text-align: center;
        font-size: 30px;
        font-weight: 500;
        color: #19121A;
    }
    .price_upper{
        text-align: center;
        font-size: 104px;
        font-weight: 500;
        color: #19121A;
    }
    
    @media (max-width: 1024px){
        .price_upper{
            font-size: 72px;
        }
    }
    @media (max-width: 768px){
        max-width: 580px;
        margin: 20px auto;  
        text-align: center;
        cursor: pointer;
        width: 100%;
        border-radius: 20px;
    }
`;