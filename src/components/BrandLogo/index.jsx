import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { efoodLogoDataUri } from '../../assets/efood-logo-data-uri'

const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 58px;
  line-height: 0;
`

const LogoImage = styled.img`
  width: 125px;
  height: 58px;
  object-fit: contain;
`

const BrandLogo = () => (
  <LogoLink to="/" aria-label="Ir para a página inicial do eFood">
    <LogoImage src={efoodLogoDataUri} alt="eFood" />
  </LogoLink>
)

export default BrandLogo
