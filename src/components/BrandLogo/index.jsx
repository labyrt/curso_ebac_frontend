import { Link } from 'react-router-dom'
import styled from 'styled-components'

import efoodWordmark from '../../assets/efood-logo.png'

const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 58px;
  padding: 8px 9px;
  border: 5px solid #e66767;
  background: #fff;
  line-height: 0;
`

const Wordmark = styled.img`
  width: 76px;
  height: auto;
  object-fit: contain;
`

const Utensils = styled.svg`
  width: 26px;
  height: 34px;
  margin-left: 3px;
  flex: 0 0 auto;
  fill: #e66767;
`

const BrandLogo = () => (
  <LogoLink to="/" aria-label="Ir para a página inicial do eFood">
    <Wordmark src={efoodWordmark} alt="eFood" />
    <Utensils viewBox="0 0 36 48" aria-hidden="true">
      <path d="M2 1h3v13h3V1h3v13h3V1h3v16c0 5-3 8-7 9v20H7V26c-4-1-7-4-7-9V1h2z" />
      <path d="M25 1c5 2 8 7 8 13v14h-5v18h-5V6c0-2 1-4 2-5z" />
    </Utensils>
  </LogoLink>
)

export default BrandLogo
