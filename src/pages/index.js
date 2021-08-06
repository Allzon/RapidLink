import styled from 'styled-components'
import Contato from '../components/contato'
import Layout from '../components/Layout'
import Planos from '../components/Planos'
import Sobre from '../components/Sobre'


export default () => {
    return (<>
        <Layout>
            <Sobre />
            <Planos />
            <Contato />
        </Layout>
    </>)
}
