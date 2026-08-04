import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adicionarContato, editarContato } from '../store/contatosSlice'
import {
  ButtonRow,
  ErrorMessage,
  Field,
  Form,
  FormPanel,
  Input,
  PrimaryButton,
  SecondaryButton,
  SectionTitle,
} from '../styles'

const estadoInicial = {
  nome: '',
  email: '',
  telefone: '',
}

const validar = (dados) => {
  const erros = {}

  if (dados.nome.trim().length < 3) {
    erros.nome = 'Informe o nome completo.'
  }

  if (!/^\S+@\S+\.\S+$/.test(dados.email.trim())) {
    erros.email = 'Informe um e-mail válido.'
  }

  if (dados.telefone.replace(/\D/g, '').length < 10) {
    erros.telefone = 'Informe um telefone com DDD.'
  }

  return erros
}

const formatarTelefone = (valor) => {
  const numeros = valor.replace(/\D/g, '').slice(0, 11)

  if (numeros.length <= 2) return numeros
  if (numeros.length <= 6) return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`
  if (numeros.length <= 10) {
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`
  }

  return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`
}

export default function ContatoForm({ contatoEmEdicao, aoFinalizarEdicao }) {
  const dispatch = useDispatch()
  const contatos = useSelector((state) => state.contatos.itens)
  const [dados, setDados] = useState(estadoInicial)
  const [erros, setErros] = useState({})

  useEffect(() => {
    setDados(contatoEmEdicao ?? estadoInicial)
    setErros({})
  }, [contatoEmEdicao])

  const atualizarCampo = (event) => {
    const { name, value } = event.target
    const novoValor = name === 'telefone' ? formatarTelefone(value) : value

    setDados((estadoAtual) => ({
      ...estadoAtual,
      [name]: novoValor,
    }))

    setErros((estadoAtual) => ({
      ...estadoAtual,
      [name]: undefined,
    }))
  }

  const limparFormulario = () => {
    setDados(estadoInicial)
    setErros({})
    aoFinalizarEdicao()
  }

  const enviarFormulario = (event) => {
    event.preventDefault()

    const dadosNormalizados = {
      ...dados,
      nome: dados.nome.trim(),
      email: dados.email.trim().toLowerCase(),
      telefone: dados.telefone.trim(),
    }

    const novosErros = validar(dadosNormalizados)
    const emailDuplicado = contatos.some(
      (contato) =>
        contato.email.toLowerCase() === dadosNormalizados.email &&
        contato.id !== contatoEmEdicao?.id,
    )

    if (emailDuplicado) {
      novosErros.email = 'Já existe um contato com este e-mail.'
    }

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros)
      return
    }

    if (contatoEmEdicao) {
      dispatch(editarContato({ ...dadosNormalizados, id: contatoEmEdicao.id }))
    } else {
      dispatch(adicionarContato(dadosNormalizados))
    }

    limparFormulario()
  }

  return (
    <FormPanel>
      <SectionTitle>{contatoEmEdicao ? 'Editar contato' : 'Novo contato'}</SectionTitle>

      <Form onSubmit={enviarFormulario} noValidate>
        <Field>
          Nome completo
          <Input
            $hasError={Boolean(erros.nome)}
            type="text"
            name="nome"
            value={dados.nome}
            onChange={atualizarCampo}
            placeholder="Ex.: Ana Souza"
            autoComplete="name"
          />
          {erros.nome && <ErrorMessage>{erros.nome}</ErrorMessage>}
        </Field>

        <Field>
          E-mail
          <Input
            $hasError={Boolean(erros.email)}
            type="email"
            name="email"
            value={dados.email}
            onChange={atualizarCampo}
            placeholder="ana@email.com"
            autoComplete="email"
          />
          {erros.email && <ErrorMessage>{erros.email}</ErrorMessage>}
        </Field>

        <Field>
          Telefone
          <Input
            $hasError={Boolean(erros.telefone)}
            type="tel"
            name="telefone"
            value={dados.telefone}
            onChange={atualizarCampo}
            placeholder="(11) 99999-9999"
            autoComplete="tel"
          />
          {erros.telefone && <ErrorMessage>{erros.telefone}</ErrorMessage>}
        </Field>

        <ButtonRow>
          <PrimaryButton type="submit">
            {contatoEmEdicao ? 'Salvar alterações' : 'Adicionar contato'}
          </PrimaryButton>

          {contatoEmEdicao && (
            <SecondaryButton type="button" onClick={limparFormulario}>
              Cancelar
            </SecondaryButton>
          )}
        </ButtonRow>
      </Form>
    </FormPanel>
  )
}
