import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar'
import Footer from '../Footer'
import Head from 'next/head'

const Main = styled.div`
    height: 100%;
    width: 100%;
    background-image: linear-gradient(#00008B, #4169E1, #87CEEB);
`;

export default ({ children }) => {
    return (<>
        <Head>
            <title>Rapid Link Telecom</title>
            <link rel="shortcut icon" href="static/favicon.ico" />
            <meta http-equiv="X-UA-Compatible" content="IE=Edge"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
            <meta name="author" content="Guilherme de jesus (Allzon)"></meta>
            <meta name="robots" content="index, follow"></meta>
            <meta property="og:title" content="Rapid Link Telecom"></meta>
            <meta property="og:description" content=""></meta>
            <meta property="og:site_name" content="Rapid Link Telecom"></meta>
        </Head>
        <Main>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </Main>
    </>)
}