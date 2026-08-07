import styled from 'styled-components'

import Logo from '../Logo'
import { Container } from '../../styles/shared'

const FooterBar = styled.footer`
  margin-top: 120px;
  background: var(--cor-secundaria);
`

const FooterContent = styled(Container)`
  min-height: 298px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Socials = styled.div`
  display: flex;
  gap: 8px;
  margin: 32px 0 80px;
`

const Social = styled.a`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  background: var(--cor-principal);
  color: #fff;
  font-size: 12px;
  font-weight: 900;
`

const Note = styled.p`
  max-width: 480px;
  text-align: center;
  font-size: 10px;
  line-height: 12px;
`

const Footer = () => (
  <FooterBar>
    <FooterContent>
      <Logo />
      <Socials aria-label="Redes sociais">
        <Social href="#" aria-label="Instagram">ig</Social>
        <Social href="#" aria-label="Facebook">f</Social>
        <Social href="#" aria-label="Twitter">x</Social>
      </Socials>
      <Note>
        A eFood é uma plataforma para divulgação de estabelecimentos. A responsabilidade pela entrega e
        qualidade dos produtos é inteiramente do estabelecimento contratado.
      </Note>
    </FooterContent>
  </FooterBar>
)

export default Footer
