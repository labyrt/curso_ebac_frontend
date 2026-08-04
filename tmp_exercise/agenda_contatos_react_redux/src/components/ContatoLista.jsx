import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removerContato } from '../store/contatosSlice'
import {
  Avatar,
  CardActions,
  ContactCard,
  ContactDetail,
  ContactInfo,
  ContactList,
  ContactName,
  Counter,
  EditButton,
  EmptyState,
  ListPanel,
  RemoveButton,
  SearchInput,
  SectionTitle,
  Toolbar,
} from '../styles'

const obterIniciais = (nome) =>
  nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join('')
    .toUpperCase()

export default function ContatoLista({ aoEditar }) {
  const dispatch = useDispatch()
  const contatos = useSelector((state) => state.contatos.itens)
  const [busca, setBusca] = useState('')

  const contatosFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase()

    return contatos
      .filter((contato) =>
        [contato.nome, contato.email, contato.telefone]
          .join(' ')
          .toLowerCase()
          .includes(termo),
      )
      .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'))
  }, [busca, contatos])

  const confirmarRemocao = (contato) => {
    const confirmou = window.confirm(`Deseja remover ${contato.nome} da agenda?`)

    if (confirmou) {
      dispatch(removerContato(contato.id))
    }
  }

  return (
    <ListPanel>
      <Toolbar>
        <div>
          <SectionTitle>Seus contatos</SectionTitle>
          <Counter>
            {contatos.length} {contatos.length === 1 ? 'contato cadastrado' : 'contatos cadastrados'}
          </Counter>
        </div>

        <SearchInput
          type="search"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          placeholder="Pesquisar contato"
          aria-label="Pesquisar contatos"
        />
      </Toolbar>

      {contatosFiltrados.length > 0 ? (
        <ContactList>
          {contatosFiltrados.map((contato) => (
            <ContactCard key={contato.id}>
              <Avatar aria-hidden="true">{obterIniciais(contato.nome)}</Avatar>

              <ContactInfo>
                <ContactName>{contato.nome}</ContactName>
                <ContactDetail>{contato.email}</ContactDetail>
                <ContactDetail>{contato.telefone}</ContactDetail>
              </ContactInfo>

              <CardActions>
                <EditButton type="button" onClick={() => aoEditar(contato)}>
                  Editar
                </EditButton>
                <RemoveButton type="button" onClick={() => confirmarRemocao(contato)}>
                  Remover
                </RemoveButton>
              </CardActions>
            </ContactCard>
          ))}
        </ContactList>
      ) : (
        <EmptyState>
          {busca ? 'Nenhum contato corresponde à pesquisa.' : 'Sua agenda ainda está vazia.'}
        </EmptyState>
      )}
    </ListPanel>
  )
}
