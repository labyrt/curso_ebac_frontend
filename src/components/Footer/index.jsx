import styled from 'styled-components'

import BrandLogo from '../BrandLogo'
import { Container } from '../../styles/shared'

const FooterBar = styled.footer`
  margin-top: 120px;
  background: #ffebd9;
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
  display: grid;
  place-items: center;
  color: #e66767;

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
`

const Note = styled.p`
  max-width: 480px;
  margin: 0;
  text-align: center;
  color: #e66767;
  font-size: 10px;
  line-height: 12px;
`

const Footer = () => (
  <FooterBar>
    <FooterContent>
      <BrandLogo />
      <Socials aria-label="Redes sociais">
        <Social href="#" aria-label="Instagram" onClick={(event) => event.preventDefault()}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm11 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
        </Social>
        <Social href="#" aria-label="Facebook" onClick={(event) => event.preventDefault()}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4.5c-.5-.1-2-.2-3.8-.2-3.7 0-6.2 2.2-6.2 6.4V14H3v4h4v6h5v-6h4l.6-4H12v-3c0-1.2.3-2 2-2z"/></svg>
        </Social>
        <Social href="#" aria-label="Twitter" onClick={(event) => event.preventDefault()}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.2 2H22l-8.3 9.5L23.5 22h-7.7l-6-7.8L3 22H-.8l8.9-10.2L-1.3 2h7.9l5.4 7.2L18.2 2zm-1.3 18h2.1L5.4 3.9H3.1L16.9 20z"/></svg>
        </Social>
      </Socials>
      <Note>
        A eFood é uma plataforma para divulgação de estabelecimentos. A responsabilidade pela entrega e
        qualidade dos produtos é inteiramente do estabelecimento contratado.
      </Note>
    </FooterContent>
  </FooterBar>
)

export default Footer
