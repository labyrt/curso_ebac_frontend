# Exercício — Python: Scripting (Módulo 9)

Este exercício demonstra primeiro a execução manual dos scripts pelo terminal e,
depois, a automatização das duas etapas em um único script.

## 1. Preparar o ambiente

Verifique Python e PIP:

```powershell
python -V
pip -V
```

Instale os pacotes indicados no material:

```powershell
pip install pandas==1.2.4 seaborn==0.11.1 requests==2.25.1
```

## 2. Executar a extração pelo terminal

```powershell
python extracao.py
```

Resultado esperado:

```text
taxa-cdi.csv
```

## 3. Executar a visualização pelo terminal

Exemplo:

```powershell
python visualizacao.py grafico-cdi
```

Resultado esperado:

```text
grafico-cdi.png
```

## 4. Executar a versão automatizada

O arquivo `analise.py` combina a extração e a visualização.

Exemplo:

```powershell
python analise.py grafico-cdi
```

Com um único comando, o script gera:

```text
taxa-cdi.csv
grafico-cdi.png
```

## Arquivos da entrega

- `extracao.py`: extrai os dados e cria o CSV.
- `visualizacao.py`: lê o CSV e cria o gráfico.
- `analise.py`: combina e automatiza as duas etapas.
- `Profissao_Analista_de_dados_M9_Exercicio_resolvido.ipynb`: notebook com a
  célula final preenchida.
