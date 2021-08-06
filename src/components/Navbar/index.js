import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default () => {
    return (<>
        <HeaderHero id="inicio">
            <Container>
                <Menu>
                    <Logo>
                    </Logo>
                    <MenuHeader>
                        <ul>
                            <li>
                                <Link href="#sobre">
                                    <a>Sobre</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#planos">
                                    <a>Planos</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#contrato">
                                    <a>Contratar</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#ajuda">
                                    <a>Ajuda</a>
                                </Link>
                            </li>
                        </ul>
                    </MenuHeader>
                </Menu>
                <HeroApresentacao>
                    <BannerTitle>
                        Internet de<br />
                        <b>qualidade</b>, preço<br />
                        <b>acessível</b> e <b>ótimo</b><br />
                        atendimento!<br />
                    </BannerTitle>
                    <span>Experimente o mundo através da <b>Rapid Link</b></span>
                    <a class="button" href="#planos">Ver Planos</a>
                </HeroApresentacao>
            </Container>
            <BgLine_hero></BgLine_hero>
        </HeaderHero>
    </>);
}

const HeaderHero = styled.header`
    width: 100%;
    height: 100vh;
    min-height: 800px;
    background-size: cover;
    background-position: center;
    background-image: url("static/2123.png");
    top: 0;
    left: 0;
    position: relative;
    @media (max-width: 1024px){
        background-size: cover;
        background-position: left;
    }
`;
const Container = styled.div`
    position: relative;
    display: block;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2%;
    z-index: 2;
    color: white;

`;
const Menu = styled.div`
    display: flex;
    flex-wrap: nowrap;
    height: 131px;
    width: 100%;
    line-height: 131px;
    position: relative;
    top: 0;
    left: 0;
    justify-content: space-between;
    @media (max-width: 1024px){
        display: block;
        height: 131px;
        width: 100%;
        line-height: 32px;
        position: relative;
        top: 0;
        left: 0;
        text-align: center;
    }
`;
const Logo = styled.div`
   display: block;
    background-color: transparent;
    background-image: url('static/logo.png');
    background-size: 229px;
    background-position: center;
    background-repeat: no-repeat;
    width: 229px;
    height: 229px;
    @media (max-width: 1024px){
        display: inline-block;
    }

`;
const MenuHeader = styled.nav`
    display: block;
    max-width: 739px;
    width: 100%;
    height: 100%;
    ul{
        list-style-type: none;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
    }
    ul a{
        text-decoration: none;
        color: #ffffff;
        font-size: 17px;
        line-height: 47px;
        font-weight: 500;
        padding: 10px;
        transition: .2s;
    }
    ul a:hover{
        border-bottom: 2px solid #B52B6B;
        transition: .2s;
    }
    @media (max-width: 1140px){
        display: block;
        max-width: 600px;
        width: 100%;
        height: 100%;
    }
    @media (max-width: 1024px){
        display: none;
        position: fixed;
        top: 0;
        left:0;
        width: 100vw;
        max-width: 100vw;
        height: auto;
        padding-top: 45px;
        text-align: center;
        background-color: #381E7C;
        ul{
            display: block;
            width: 100vw;
        }
        ul li{
            width: 100%;
            height: auto;
            display: block;
            border-bottom: 1px solid white;
        }
        ul a{
            width: 100%;
            text-decoration: none;
            color: #ffffff;
            font-size: 17px;
            font-weight: 500;
            transition: .2s;

        }
    }
`;
const HeroApresentacao = styled.div`
    padding-top: 5vh;
    span{
        display: block;
        margin: 20px 0 30px 0;
        font-size: 25px;
        font-weight: 300;
        text-shadow: 2px 2px #000000;
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
    @media (max-width: 1024px){
        margin-left: 20%; 
    }
    @media (max-width: 860px){
        margin-left: 15%;
    }
    @media (max-width: 768px){
        padding-top: 100px;
        text-align: center;
        margin-left: 0;
        span{
            display: block;
            margin: 20px 0 30px 0;
            font-size: 21px;
            font-weight: 300;
        }
        a{
            display: inline-block;
        }
    }
`;
const BannerTitle = styled.h2`
    font-weight: 300;
    font-size: 68px;
    line-height: 76px;
    color: #ffffff;
    @media (max-width: 768px){
        font-size: 56px;
        line-height: 62px;
    }
    @media (max-width: 390px){
        font-size: 42px;
        line-height: 51px;
    }
    @media (max-width: 338px){
        font-size: 36px;
        line-height: 44px;
    }
`;
const BgLine_hero = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: -200px 56%;
    background-image: url("/static/Imagem6.png");
    width: 100%;
    height: 100vh;
    min-height: 800px;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    @media (max-width: 1600px){
        background-position: -270px 50%;
    }
    @media (max-width: 1550px){
        background-position: -270px 45%;
    }
    @media (max-width: 1300px){
        background-position: -270px 35%;
    }
    @media (max-width: 1200px){
        background-size: 950px;
        background-position: -240px 60px;
    }
    @media (max-width: 1024px){
        display: none;
    }
`;