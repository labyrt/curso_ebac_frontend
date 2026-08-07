import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoText = styled.span`
  display: inline-block;
  font-size: 34px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -2px;
  color: var(--cor-principal);
`

const Logo = () => (
  <Link to="/" aria-label="Ir para a página inicial do eFood">
    <LogoText>efood</LogoText>
  </Link>
)

export default Logo
