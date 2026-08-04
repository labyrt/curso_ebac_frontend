import { useState } from 'react'
import ContatoForm from './components/ContatoForm'
import ContatoLista from './components/ContatoLista'
import { AppContainer, Eyebrow, Header, Layout, Subtitle, Title } from './styles'

export default function App() {
  const [contatoEmEdicao, setContatoEmEdicao] = useState(null)

  return (
    <AppContainer>
      <Header>
        <Eyebrow>React • Redux Toolkit • Styled Components</Eyebrow>
        <Title>Agenda de contatos</Title>
        <Subtitle>
          Cadastre, pesquise, edite e remova contatos em uma interface responsiva. Os dados são gerenciados pelo Redux e permanecem salvos no navegador.
        </Subtitle>
      </Header>

      <Layout>
        <ContatoForm
          contatoEmEdicao={contatoEmEdicao}
          aoFinalizarEdicao={() => setContatoEmEdicao(null)}
        />
        <ContatoLista aoEditar={setContatoEmEdicao} />
      </Layout>
    </AppContainer>
  )
}
