import json
import os
import time
from datetime import datetime
from random import random

import requests


URL = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.4392/dados"


# Captando a taxa CDI do site do BCB
try:
    response = requests.get(url=URL)
    response.raise_for_status()
except requests.HTTPError:
    print("Dado não encontrado, continuando.")
    dado = None
except Exception as exc:
    print("Erro, parando a execução.")
    raise exc
else:
    dado = json.loads(response.text)[-1]["valor"]


if dado is not None:
    # Criando a variável data e hora
    for _ in range(10):
        data_e_hora = datetime.now()
        data = datetime.strftime(data_e_hora, "%Y/%m/%d")
        hora = datetime.strftime(data_e_hora, "%H:%M:%S")

        cdi = float(dado) + (random() - 0.5)

        # Verificando se o arquivo "taxa-cdi.csv" existe
        if not os.path.exists("./taxa-cdi.csv"):
            with open(
                file="./taxa-cdi.csv",
                mode="w",
                encoding="utf8",
            ) as arquivo:
                arquivo.write("data,hora,taxa\n")

        # Salvando dados no arquivo "taxa-cdi.csv"
        with open(
            file="./taxa-cdi.csv",
            mode="a",
            encoding="utf8",
        ) as arquivo:
            arquivo.write(f"{data},{hora},{cdi}\n")

        time.sleep(1)

    print("Sucesso")
