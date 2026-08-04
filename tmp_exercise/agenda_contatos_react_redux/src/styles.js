import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: #1f2937;
    background: #eef2ff;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    background:
      radial-gradient(circle at top left, rgba(99, 102, 241, 0.18), transparent 32rem),
      linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);
  }

  button,
  input {
    font: inherit;
  }

  button {
    cursor: pointer;
  }
`

export const AppContainer = styled.main`
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: 48px 0 72px;
`

export const Header = styled.header`
  margin-bottom: 28px;
`

export const Eyebrow = styled.p`
  margin: 0 0 8px;
  color: #4f46e5;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`

export const Title = styled.h1`
  margin: 0;
  color: #111827;
  font-size: clamp(2rem, 6vw, 3.75rem);
  line-height: 1;
`

export const Subtitle = styled.p`
  max-width: 680px;
  margin: 16px 0 0;
  color: #64748b;
  font-size: 1.05rem;
  line-height: 1.7;
`

export const Layout = styled.section`
  display: grid;
  grid-template-columns: minmax(280px, 360px) minmax(0, 1fr);
  gap: 24px;
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

export const Panel = styled.section`
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 22px 60px rgba(30, 41, 59, 0.12);
  backdrop-filter: blur(12px);
`

export const FormPanel = styled(Panel)`
  position: sticky;
  top: 24px;
  padding: 24px;

  @media (max-width: 820px) {
    position: static;
  }
`

export const ListPanel = styled(Panel)`
  padding: 24px;
`

export const SectionTitle = styled.h2`
  margin: 0 0 18px;
  color: #1e293b;
  font-size: 1.25rem;
`

export const Form = styled.form`
  display: grid;
  gap: 16px;
`

export const Field = styled.label`
  display: grid;
  gap: 7px;
  color: #334155;
  font-size: 0.92rem;
  font-weight: 700;
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ $hasError }) => ($hasError ? '#ef4444' : '#cbd5e1')};
  border-radius: 12px;
  padding: 12px 14px;
  color: #0f172a;
  background: #fff;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? '#ef4444' : '#6366f1')};
    box-shadow: 0 0 0 4px ${({ $hasError }) => ($hasError ? 'rgba(239, 68, 68, 0.12)' : 'rgba(99, 102, 241, 0.12)')};
  }
`

export const ErrorMessage = styled.span`
  color: #dc2626;
  font-size: 0.78rem;
  font-weight: 600;
`

export const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 4px;
`

export const Button = styled.button`
  border: 0;
  border-radius: 12px;
  padding: 11px 16px;
  font-weight: 800;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

export const PrimaryButton = styled(Button)`
  flex: 1;
  color: #fff;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
`

export const SecondaryButton = styled(Button)`
  color: #475569;
  background: #e2e8f0;
`

export const DangerButton = styled(Button)`
  color: #b91c1c;
  background: #fee2e2;
`

export const Toolbar = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 620px) {
    align-items: stretch;
    flex-direction: column;
  }
`

export const Counter = styled.span`
  color: #6366f1;
  font-size: 0.9rem;
  font-weight: 800;
`

export const SearchInput = styled(Input)`
  max-width: 320px;

  @media (max-width: 620px) {
    max-width: none;
  }
`

export const ContactList = styled.div`
  display: grid;
  gap: 14px;
`

export const ContactCard = styled.article`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 16px;
  align-items: center;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 18px;
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(30, 41, 59, 0.09);
  }

  @media (max-width: 580px) {
    grid-template-columns: auto 1fr;
  }
`

export const Avatar = styled.div`
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  color: #4338ca;
  background: #e0e7ff;
  font-size: 1.15rem;
  font-weight: 900;
`

export const ContactInfo = styled.div`
  min-width: 0;
`

export const ContactName = styled.h3`
  margin: 0 0 7px;
  color: #0f172a;
  font-size: 1.06rem;
`

export const ContactDetail = styled.p`
  margin: 3px 0;
  overflow: hidden;
  color: #64748b;
  font-size: 0.9rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const CardActions = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 580px) {
    grid-column: 1 / -1;
    padding-top: 4px;
  }
`

export const SmallButton = styled(Button)`
  padding: 9px 12px;
  font-size: 0.84rem;
`

export const EditButton = styled(SmallButton)`
  color: #4338ca;
  background: #e0e7ff;
`

export const RemoveButton = styled(SmallButton)`
  color: #b91c1c;
  background: #fee2e2;
`

export const EmptyState = styled.div`
  border: 2px dashed #cbd5e1;
  border-radius: 18px;
  padding: 42px 24px;
  color: #64748b;
  text-align: center;
`
