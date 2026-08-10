import json
import os
import time
from datetime import datetime
from random import random
from sys import argv

import pandas as pd
import requests
import seaborn as sns


URL = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.4392/dados"


def extrair_dados() -> None:
    """Extrai a taxa CDI e salva dez registros em taxa-cdi.csv."""
    try:
        response = requests.get(url=URL)
        response.raise_for_status()
    except requests.HTTPError:
        print("Dado não encontrado, continuando.")
        return
    except Exception as exc:
        print("Erro, parando a execução.")
        raise exc

    dado = json.loads(response.text)[-1]["valor"]

    for _ in range(10):
        data_e_hora = datetime.now()
        data = datetime.strftime(data_e_hora, "%Y/%m/%d")
        hora = datetime.strftime(data_e_hora, "%H:%M:%S")
        cdi = float(dado) + (random() - 0.5)

        if not os.path.exists("./taxa-cdi.csv"):
            with open(
                file="./taxa-cdi.csv",
                mode="w",
                encoding="utf8",
            ) as arquivo:
                arquivo.write("data,hora,taxa\n")

        with open(
            file="./taxa-cdi.csv",
            mode="a",
            encoding="utf8",
        ) as arquivo:
            arquivo.write(f"{data},{hora},{cdi}\n")

        time.sleep(1)


def gerar_grafico(nome_grafico: str) -> None:
    """Lê taxa-cdi.csv e gera um gráfico PNG."""
    df = pd.read_csv("./taxa-cdi.csv")

    grafico = sns.lineplot(x=df["hora"], y=df["taxa"])
    grafico.set_xticklabels(labels=df["hora"], rotation=90)
    grafico.get_figure().savefig(f"{nome_grafico}.png")


def main() -> None:
    if len(argv) < 2:
        print("Uso: python analise.py <nome-do-grafico>")
        return

    extrair_dados()
    gerar_grafico(argv[1])
    print("Sucesso")


if __name__ == "__main__":
    main()
