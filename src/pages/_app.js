import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
    width:100%;
    height:100%;
    position: relative;
    top: 0;
    left: 0; 
    background-color: #150051;
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
    colors: {
        primary: '#0070f3',
    },
}

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
