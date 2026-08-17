import { Link } from 'react-router-dom'
import styled from 'styled-components'

import efoodLogo from '../../assets/efood-logo.png'

const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
`

const LogoImage = styled.img`
  width: 94px;
  height: 25px;
  object-fit: contain;
`

const Logo = () => (
  <LogoLink to="/" aria-label="Ir para a página inicial do eFood">
    <LogoImage src={efoodLogo} alt="eFood" />
  </LogoLink>
)

export default Logo
