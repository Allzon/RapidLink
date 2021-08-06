import styled from 'styled-components'
import React, { Component, Fragment } from 'react'

export default () => {
    return (<>
        <Footer>
            <Container>
                <FooterTop>
                    <FooterBox>
                        <h3>Soluções</h3>
                        <a href="#planos">Pacote Master</a>
                        <a href="#planos">Pacote Turbo</a>
                        <a href="#planos">Corporativo</a>
                        <a href="#planos">Link Dedicado</a>
                    </FooterBox>
                    <FooterBox >
                        <div className="footer_icons">
                            <h3>Siga-nos</h3>
                            <a href="" target="_blank"><img src="static/youtube.png" /></a>
                            <a href="" target="_blank"><img src="static/whatsapp.png" /></a>
                            <a href="" target="_blank"><img src="static/instagram.png" /></a>
                            <a href="" target="_blank"><img src="static/facebook.png" /></a>
                            <a href="" target="_blank"><img src="static/phone.png" /></a>
                            <a href="" target="_blank"><img src="static/mail.png" /></a>
                        </div>
                    </FooterBox>
                    <FooterBox>
                        <h3>A Empresa</h3>
                        <p>Rapid Link Telecom</p>
                        <p>Grupo de Comunicação Net</p>
                        <p>CNPJ: 07.252.557/0001-69</p>
                    </FooterBox>
                    <FooterBox>
                        <h3>Receba Novidades</h3>
                        <form id="newsletter">
                            <input type="email" name="email" placeholder="Seu email aqui" />
                            <input type="submit" name="submit" value=" " />
                        </form>
                    </FooterBox>
                </FooterTop>
                <FooterBottom>
                    <p>Remodelagem feita por Guilherme(allzon)<br />
                        © 2005-2019 Rapid Link Telecom - Todos os direitos reservados<br />
                        Central de Atendimento 24 horas -- (21) 26434537 / (24) 22241350</p>
                </FooterBottom>
            </Container>
        </Footer>
    </>);
}

const Footer = styled.footer`
            width: 100%;
            background-color: #0B002C;
            display: block;
`;
const Container = styled.div`
            position: relative;
            display: block;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2%;
`;
const FooterTop = styled.div`
            padding: 60px 0;
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            vertical-align: top;
            align-items: top;
            @media(max-width: 768px){
                flex-wrap: wrap;
                justify-content: space-between;
                vertical-align: top;
                align-items: top;
    }
`;
const FooterBox = styled.div`
    width: 20%;
    @media(max-width: 768px){
        width: 48%;
        margin-bottom: 20px;
    }
    @media(max-width: 580px){
        width: 100%;
        max-width: 300px;
    }
    .footer_icons a{
        display: inline-block;
        width: 40px;
        height: 27px;
        margin: 10px 4px;
    }
    .footer_icons a img{
        height: 100%;
        width: auto;
    }
    h3{
        color: white;
        display: block;
        font-size: 20px;
        font-weight: 500;
        line-height: 27px;
        margin-bottom: 15px;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    p, a{
        text-decoration: none;
        color: white;
        display: block;
        font-size: 16px;
        font-weight: 300;
        line-height: 31px;
    }
    input{
        -webkit-writing-mode: horizontal-tb !important;
        text-rendering: auto;
        color: -internal-light-dark(black, white);
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: start;
        appearance: auto;
        background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
        -webkit-rtl-ordering: logical;
        cursor: text;
        margin: 0em;
        font: 400 13.3333px Arial;
        padding: 1px 2px;
        border-width: 2px;
        border-style: inset;
        border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
        border-image: initial;
    }
    input[type="submit" i] {
        appearance: auto;
        user-select: none;
        white-space: pre;
        align-items: flex-start;
        text-align: center;
        cursor: default;
        color: -internal-light-dark(black, white);
        background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
        box-sizing: border-box;
        padding: 1px 6px;
        border-width: 2px;
        border-style: outset;
        border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
        border-image: initial;
    }
    #newsletter {
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
    }
    #newsletter input {
        display: inline-block;
        height: 50px;
        width: 85%;
        line-height: 50px;
        padding: 0 15px;
        background-color: #fff;
        border: none;
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
        font-size: 19px;
        font-weight: 300;
    }
    #newsletter input[type="submit"] {
        width: 15%;
        text-align: center;
        background-image: url(static/send.png), linear-gradient(to bottom,#B52B6B, #62002D);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 13px , cover;
        cursor: pointer;
        color: #ffffff;
        font-weight: 500;
        transition: .2s;
        margin-right: -1px;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
    }
`;
const FooterBottom = styled.div`
    padding: 25px 0;
    text-align: center;
    color: white;
    font-size: 18px;
    font-weight: 300;
    border-top: 2px solid #150051;
    @media(max-width: 768px){
        font-size: 14px;
    }
    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
`;
