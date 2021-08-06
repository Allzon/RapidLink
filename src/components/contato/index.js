import styled from "styled-components";

export default () => {
    return (<>
        <Contato>
            <Section id="ajuda">
                <Container>
                    <TituloCenter>
                        <TituloBox>
                            <h2 class="up_title">precisa de</h2>
                            <h2 class="title">Ajuda</h2>
                        </TituloBox>
                    </TituloCenter>
                    <AjudaFlex>
                        <Fag>
                            <FagBox>
                                <div class="question_box">
                                    <p class="pergunta">A VELOCIDADE CONTRATADA É GARANTIDA?</p>
                                    <p class="resposta">Sim, garantimos a velocidade contratada, no ato da instalação o nosso técnico realiza os testes juntamente com cliente.</p>
                                </div>
                            </FagBox>
                            <FagBox>
                                <div class="question_box">
                                    <p class="pergunta">CASO EU PRECISE DE ATENDIMENTO NO FINAL DE SEMANA, CONSIGO FALAR COM ALGUÉM?</p>
                                    <p class="resposta">Temos atendimento todos os dias da semana, pode entrar em contato conosco pelo telefone 3198.1400 – (85) 9 8793.2248 (WhatsApp) - @gcnetprovedor (instagram) - @GcnetSeuProvedor (facebook) nosso atendimento: segunda a sexta de 06h00 às 00h00 – sábado de 08h00 às 20h00 – domingo de 09h00 às 16h00.</p>
                                </div>

                            </FagBox>
                            <FagBox>
                                <div class="question_box">
                                    <p class="pergunta">É POSSÍVEL MUDAR DE ENDEREÇO CASO PRECISE?</p>
                                    <p class="resposta">Sim, basta entrar em contato com nosso setor financeiro para passarmos todas as informações e consultarmos a disponibilidade no novo endereço. </p>
                                </div>

                            </FagBox>
                            <FagBox>
                                <div class="question_box">
                                    <p class="pergunta">POSSO ALTERAR MEU VENCIMENTO QUANDO QUISER?</p>
                                    <p class="resposta">Sim, basta entrar em contato com o nosso setor financeiro para passarmos as informações necessárias e realizarmos os procedimentos.</p>
                                </div>

                            </FagBox>
                            <FagBox>
                                <div class="question_box">
                                    <p class="pergunta">EU PRECISO COMPRAR O APARELHO ROTEADOR E A ONU PARA TER GCNET EM CASA?</p>
                                    <p class="resposta">Não, nossos clientes não precisam se preocupar com os equipamentos pois utilizamos o nosso equipamento ao realizarmos a instalação em sua residência, esses equipamentos ficam em regime de comodato, ou seja, enquanto for cliente os equipamentos ficarão emprestados, caso um dia não seja mais cliente, recolheremos os equipamentos de volta.</p>
                                </div>

                            </FagBox>
                            <FagBox>
                                <div class="question_box">
                                    <p class="pergunta">QUANDO USAR A OUVIDORIA?</p>
                                    <p class="resposta">Em qualquer horário poderá está contactando a nossa Ouvidoria. No caso de reclamação, antes de entrar em contato com a Ouvidoria, é necessário que você já tenha buscado em nossos canais de atendimento soluções e aguardar o prazo informado, caso depois do prazo informado não seja resolvido, iremos analisar afundo o que aconteceu e tomaremos as providências para que seja resolvido rapidamente.</p>
                                </div>
                            </FagBox>
                        </Fag>
                    </AjudaFlex>
                </Container>
            </Section>
            <SectionC id="contrato">
                <Container>
                    <TituloCenter>
                        <TituloBox>
                            <h2 className="title" id="precisao">Contratar</h2>
                        </TituloBox>
                    </TituloCenter>
                    <ContratoForm>
                        <FormContrato>
                            <input className="w50" type="text" name="name" placeholder="Nome" />
                            <input className="w50" type="text" name="telefone" placeholder="Telefone" />
                            <input className="w50" type="email" name="email" placeholder="Email" />
                            <input className="w50" type="text" name="cpf" placeholder="CPF" />
                            <input className="w75" type="text" name="endereco" placeholder="Endereço" />
                            <input className="w25" type="text" name="numero" placeholder="Número" />
                            <input className="w50" type="text" name="complemento" placeholder="Complemento" />
                            <input className="w50" type="text" name="cidade" placeholder="Cidade" />
                            <select id="plano" name="plano">
                                <option value="residencial_50_mb">Residencial 35 Mega</option>
                                <option value="residencial_100_mb">Residencial 50 Mega</option>
                                <option value="residencial_200_mb">Residencial 100 Mega</option>
                                <option value="residencial_200_mb">Residencial 200 Mega</option>
                            </select>
                            <input type="submit" id="formprincipal" className="formprincipal" name="submit" value="Enviar" />
                        </FormContrato>
                    </ContratoForm>

                </Container>
            </SectionC>

        </Contato>

    </>);
}

const Contato = styled.div`
    display: block;
    width: 100%;
    background-image: linear-gradient(to top, rgba(22,0,81,0) , rgba(9,0,34,.6));
`;
const Section = styled.section`
    margin-top: -150px;
    @media (max-width: 768px){
        margin-top: 0px;
    }
    #contrato{
        height: 100%;
        width: 100%;
        background-image: url("/static/grupo_9853.png"),url("/static/2883401.png");
        background-position: 10% 150px,0% 0%;
        background-size: contain,cover;
        background-repeat: no-repeat;
        @media (max-width: 1550px){
            background-position: 0% 130px,0% 30%;
        }
        @media (max-width: 1300px){
            background-position: -20% 130px,0% 100px;
        }
        @media (max-width: 1200px){
            background-position: -300px 130px,0% 100px;
        }
    }
`;
const SectionC = styled.section`

    height: 100%;
    width: 100%;
    background-image: url("/static/grupo_9853.png"),url("/static/2883401.png");
    background-position: 10% 150px,0% 0%;
    background-size: contain,cover;
    background-repeat: no-repeat;
    @media (max-width: 768px){
        margin-top: 0px;
    }
    @media (max-width: 1550px){
        background-position: 0% 130px,0% 30%;
    }
    @media (max-width: 1300px){
        background-position: -20% 130px,0% 100px;
    }
    @media (max-width: 1200px){
        background-position: -300px 130px,0% 100px;
    }
`;
const Container = styled.div`
    top: 3rem;
    position: relative;
    display: block;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2%;
    z-index: 2;
    color: white;

`;
const TituloCenter = styled.div`
    top: 2rem;
    width: 100%;
    text-align: center;
    position: relative;
`;
const TituloBox = styled.div`
    top: 2rem;
    display: inline-block;
    text-align: center;
    position: relative;
    padding: 0 30px;
    z-index: 0;
    .up_title{
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
    #precisao{
        position: relative;
        bottom: 5rem;
    }
`;
const AjudaFlex = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    vertical-align: middle;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px){
        flex-wrap: wrap;
    }
`;
const Fag = styled.div`
    width: 100%;
    margin-top: 50px;
    @media (max-width: 768px){
        width: 100%;
        margin-top: 50px;
    }
`;
const FagBox = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 20px;
    background-color: rgba(56,30,124,.91);
    border-radius: 13px;
    margin-bottom: 20px;
    .question_box {
        width: calc(98% - 20px);
        color: white;
        font-size: 19px;
        line-height: 27px;
    }
    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    p.pergunta {
        cursor: pointer;
    }
    p.resposta {
        display: block;
        margin-top: 30px;
        font-size: 17px;
        line-height: 26px;
    }
    p.resposta_ativo {
        display: block;
    }
`;

const ContratoForm = styled.div`
    background-color: none;
    width: 100%;
    display: block;
    text-align: right;
    @media (max-width: 580px){
        background-color: none;
        width: 100%;
        display: block;
        text-align: right;
    }
`;
const FormContrato = styled.form`
    padding: 80px 0;
    width: 100%;
    max-width: 800px;
    display: inline-block;
    box-sizing: border-box;
    margin: 0;
    input, select{
        display: inline-block;
        height: 70px;
        line-height: 70px;
        padding: 0 15px;
        margin: 10px 0.5%;
        background-color: #fff;
        border:none;
        border-radius: 8px;
        font-size: 19px;
        font-weight: 300;
    }
    .w50{
        width: 30%;
    }
    .w75{
        width: 55%;
    }
    .w25{
        width: 20%;
    }
    select{
        width: 40%;
    }
    input[type="submit"]{
        width: 36%;
        background-image: linear-gradient(to bottom,#B52B6B, #62002D);
        cursor: pointer;
        text-align: center;
        color: #ffffff;
        font-weight: 500;
        transition: .2s;
    }
    input[type="submit"]:hover{
        font-size: 22px;
        background-image: linear-gradient(to top,#B52B6B, #62002D);
    }
    @media (max-width: 580px){
        input, select{
            height: 60px;
            line-height: 60px;
            margin: 10px 0;
        }
        .w50{
            width: 100%;
        }
        .w75{
            width: 100%;
        }
        .w25{
            width: 100%;
        }
         select{
            width: 100%;
        }
        input[type="submit"]{
            width: 100%;
        }
    }
`;