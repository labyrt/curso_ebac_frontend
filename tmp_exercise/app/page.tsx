"use client";

import { useMemo, useState } from "react";

type ImcRange = {
  label: string;
  range: string;
  min: number;
  max: number;
  tone: string;
};

const imcRanges: ImcRange[] = [
  { label: "Abaixo do peso", range: "Menor que 18,5", min: 0, max: 18.5, tone: "#60a5fa" },
  { label: "Peso normal", range: "18,5 a 24,9", min: 18.5, max: 25, tone: "#34d399" },
  { label: "Sobrepeso", range: "25,0 a 29,9", min: 25, max: 30, tone: "#fbbf24" },
  { label: "Obesidade grau I", range: "30,0 a 34,9", min: 30, max: 35, tone: "#fb923c" },
  { label: "Obesidade grau II", range: "35,0 a 39,9", min: 35, max: 40, tone: "#f87171" },
  { label: "Obesidade grau III", range: "40,0 ou mais", min: 40, max: Number.POSITIVE_INFINITY, tone: "#ef4444" },
];

function normalizeNumber(value: string) {
  return Number(value.replace(",", "."));
}

export default function Home() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const result = useMemo(() => {
    const heightValue = normalizeNumber(height);
    const weightValue = normalizeNumber(weight);

    if (!height || !weight || heightValue <= 0 || weightValue <= 0) {
      return null;
    }

    const imc = weightValue / heightValue ** 2;
    const classification = imcRanges.find(
      (item) => imc >= item.min && imc < item.max,
    );

    return classification ? { imc, classification } : null;
  }, [height, weight]);

  const clearForm = () => {
    setHeight("");
    setWeight("");
  };

  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="page-title">
        <div className="eyebrow">
          <span className="eyebrow-mark" aria-hidden="true">+</span>
          <span>Saúde em números</span>
        </div>
        <h1 id="page-title">Calculadora de IMC</h1>
        <p>
          Informe sua altura e seu peso para descobrir o Índice de Massa
          Corporal e consultar a classificação correspondente.
        </p>
      </section>

      <section className="calculator-grid" aria-label="Calculadora e resultado">
        <div className="form-card">
          <div className="card-heading">
            <span className="step">01</span>
            <div>
              <h2>Seus dados</h2>
              <p>O resultado é atualizado automaticamente.</p>
            </div>
          </div>

          <div className="fields">
            <label htmlFor="height">
              <span>Altura</span>
              <span className="input-wrap">
                <input
                  id="height"
                  name="height"
                  type="number"
                  inputMode="decimal"
                  min="0.5"
                  max="2.5"
                  step="0.01"
                  placeholder="Ex.: 1,65"
                  value={height}
                  onChange={(event) => setHeight(event.target.value)}
                  aria-describedby="height-hint"
                />
                <span className="unit">m</span>
              </span>
              <small id="height-hint">Use metros, como 1,65</small>
            </label>

            <label htmlFor="weight">
              <span>Peso</span>
              <span className="input-wrap">
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  inputMode="decimal"
                  min="1"
                  max="500"
                  step="0.1"
                  placeholder="Ex.: 60"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                />
                <span className="unit">kg</span>
              </span>
              <small>Use quilogramas, como 60</small>
            </label>
          </div>

          <button className="clear-button" type="button" onClick={clearForm} disabled={!height && !weight}>
            Limpar campos
          </button>
        </div>

        <div className={`result-card ${result ? "has-result" : ""}`} aria-live="polite">
          <div className="card-heading result-heading">
            <span className="step">02</span>
            <div>
              <h2>Seu resultado</h2>
              <p>IMC = peso ÷ altura²</p>
            </div>
          </div>

          {result ? (
            <div className="result-content">
              <span className="result-label">Seu IMC é</span>
              <strong>{result.imc.toFixed(2).replace(".", ",")}</strong>
              <span
                className="classification-pill"
                style={{ "--result-color": result.classification.tone } as React.CSSProperties}
              >
                <span aria-hidden="true" />
                {result.classification.label}
              </span>
              <p>A linha correspondente está destacada na tabela abaixo.</p>
            </div>
          ) : (
            <div className="empty-result">
              <div className="empty-number" aria-hidden="true">—,—</div>
              <p>Preencha os dois campos para visualizar seu resultado.</p>
            </div>
          )}
        </div>
      </section>

      <section className="table-card" aria-labelledby="classification-title">
        <div className="table-header">
          <div>
            <span className="table-kicker">Referência para adultos</span>
            <h2 id="classification-title">Tabela de classificação do IMC</h2>
          </div>
          <span className="table-note">kg/m²</span>
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th scope="col">IMC</th>
                <th scope="col">Classificação</th>
              </tr>
            </thead>
            <tbody>
              {imcRanges.map((item) => {
                const active = result?.classification.label === item.label;
                return (
                  <tr
                    key={item.label}
                    className={active ? "active-row" : ""}
                    style={{ "--row-color": item.tone } as React.CSSProperties}
                    aria-current={active ? "true" : undefined}
                  >
                    <td>{item.range}</td>
                    <td><span className="status-dot" aria-hidden="true" />{item.label}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <p className="disclaimer">
        O IMC é uma referência geral e não substitui a avaliação de um profissional de saúde.
      </p>
    </main>
  );
}
