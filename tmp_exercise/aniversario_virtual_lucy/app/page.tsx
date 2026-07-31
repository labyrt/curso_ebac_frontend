"use client";

import { useEffect, useMemo, useState } from "react";

type Countdown = { days: number; hours: number; minutes: number; seconds: number };

const memeMessages = [
  { year: "2006", label: "Tapa na Pantera", reply: "A Pantera entrou na chamada 🌿" },
  { year: "2007", label: "Sanduíche-iche", reply: "O eco chegou antes do lanche 🥪" },
  { year: "2009", label: "Cadê meu chip?", reply: "Pedro ficou offline de repente 📱" },
  { year: "2010", label: "Cala a boca, Galvão", reply: "O mundo inteiro está retuitando 🐦" },
];

const details = [
  { icon: "📅", label: "quando", value: "13 de abril", note: "a partir das 20:02" },
  { icon: "🌐", label: "onde", value: "no ciberespaço", note: "sala liberada no dia" },
  { icon: "🎟️", label: "entrada", value: "gratuita", note: "traga apenas sua presença" },
  { icon: "🪩", label: "dress code", value: "virtual", note: "avatar, glitter e criatividade" },
];

function getNextBirthday() {
  const now = new Date();
  let year = now.getFullYear();
  let target = new Date(year, 3, 13, 0, 0, 0, 0);
  if (now >= target) {
    year += 1;
    target = new Date(year, 3, 13, 0, 0, 0, 0);
  }
  return { target, age: year - 2002, year };
}

function difference(target: Date): Countdown {
  const total = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(total / 86_400_000),
    hours: Math.floor((total / 3_600_000) % 24),
    minutes: Math.floor((total / 60_000) % 60),
    seconds: Math.floor((total / 1_000) % 60),
  };
}

function CounterCard({ value, label }: { value: number; label: string }) {
  return <div className="counter-card"><span>{String(value).padStart(2, "0")}</span><small>{label}</small></div>;
}

export default function Home() {
  const birthday = useMemo(() => getNextBirthday(), []);
  const [countdown, setCountdown] = useState<Countdown>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [toast, setToast] = useState("");
  const [partyMode, setPartyMode] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; color: string }>>([]);

  useEffect(() => {
    const initialTick = window.setTimeout(() => setCountdown(difference(birthday.target)), 0);
    const timer = window.setInterval(() => setCountdown(difference(birthday.target)), 1000);
    return () => {
      window.clearTimeout(initialTick);
      window.clearInterval(timer);
    };
  }, [birthday.target]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 3200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  function confirmPresence() {
    setConfirmed(true);
    setToast("Presença confirmada! Você acaba de ficar online ✨");
    const colors = ["#ff4f9a", "#79ffdd", "#fff064", "#7c6dff", "#ffffff"];
    setConfetti(Array.from({ length: 42 }, (_, id) => ({ id, left: Math.random() * 100, delay: Math.random() * 0.8, color: colors[id % colors.length] })));
    window.setTimeout(() => setConfetti([]), 4200);
  }

  function copyInvite() {
    const text = `Lucy ${birthday.age}.0 — festa virtual em 13/04/${birthday.year}. Entrada gratuita, dress code virtual!`;
    navigator.clipboard?.writeText(text);
    setToast("Convite copiado. Agora é só mandar no MSN 💌");
  }

  return (
    <main className={`site-shell ${partyMode ? "party-mode" : ""}`}>
      <a className="skip-link" href="#evento">Pular para o evento</a>
      <div className="sky-decoration" aria-hidden="true"><span className="cloud cloud-one">☁</span><span className="cloud cloud-two">☁</span><span className="star star-one">✦</span><span className="star star-two">✧</span><span className="star star-three">✦</span></div>

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Ir para o início"><span className="brand-orb">L</span><span><strong>Lucy Mazzini</strong><small>está online ●</small></span></a>
        <nav aria-label="Navegação principal"><a href="#evento">evento</a><a href="#memes">memes</a><a href="#dresscode">dress code</a></nav>
        <button className="mini-button" type="button" onClick={() => setPartyMode((current) => !current)} aria-pressed={partyMode}>{partyMode ? "modo calmo" : "modo festa"}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>●</span> convite recebido às 20:02</p>
          <div className="status-line">Lucy alterou o status para: <b>comemorando</b> 🎂</div>
          <h1>VOCÊ FOI<br /><em>CONVIDADA</em><br />PARA FICAR ONLINE</h1>
          <p className="hero-intro">Uma viagem pela internet que a gente conheceu: glitter, scraps, emoticons e os memes brasileiros que moram de aluguel na nossa cabeça.</p>
          <div className="hero-actions"><button className="primary-button" type="button" onClick={confirmPresence}>{confirmed ? "✓ presença confirmada" : "aceitar convite"}</button><button className="secondary-button" type="button" onClick={copyInvite}>copiar convite</button></div>
        </div>

        <div className="msn-window" aria-label="Janela de conversa nostálgica">
          <div className="window-titlebar"><span>Conversa — aniversário.exe</span><div aria-hidden="true"><b>_</b><b>□</b><b>×</b></div></div>
          <div className="window-contact"><span className="avatar">👾</span><span><strong>Lucy {birthday.age}.0</strong><small>“o futuro é agora, só que com internet discada”</small></span></div>
          <div className="chat-area">
            <p><b>Lucy diz:</b><br />oiii! dia 13/04 vai ter festa no meu servidor ✨</p>
            <p className="nudge">🫨 Você recebeu uma chamada de atenção!</p>
            <div className="gif-row" aria-label="Emojis animados"><span className="gif-emoji emoji-spin" role="img" aria-label="Smiley girando">🙂</span><span className="gif-emoji emoji-heart" role="img" aria-label="Coração pulsando">💖</span><span className="gif-emoji emoji-dance" role="img" aria-label="Banana dançando">🍌</span><span className="gif-emoji emoji-float" role="img" aria-label="Borboleta flutuando">🦋</span></div>
          </div>
          <div className="typing">Lucy está digitando uma mensagem...</div>
        </div>
      </section>

      <section className="countdown-section" id="evento" aria-labelledby="countdown-title">
        <div className="section-kicker">aguarde um instante...</div><h2 id="countdown-title">FALTAM EXATAMENTE</h2>
        <div className="counter-grid" aria-live="polite"><CounterCard value={countdown.days} label="dias" /><span className="counter-colon">:</span><CounterCard value={countdown.hours} label="horas" /><span className="counter-colon">:</span><CounterCard value={countdown.minutes} label="min" /><span className="counter-colon">:</span><CounterCard value={countdown.seconds} label="seg" /></div>
        <p>para desbloquear <strong>Lucy {birthday.age}.0</strong> em 13/04/{birthday.year}</p>
      </section>

      <section className="details-section" aria-labelledby="details-title">
        <div className="section-heading"><p>propriedades do evento</p><h2 id="details-title">ANTES DE CLICAR EM “ENTRAR”</h2></div>
        <div className="details-grid">{details.map((item) => <article className="detail-card" key={item.label}><span className="detail-icon" aria-hidden="true">{item.icon}</span><small>{item.label}</small><h3>{item.value}</h3><p>{item.note}</p></article>)}</div>
      </section>

      <section className="meme-section" id="memes" aria-labelledby="meme-title">
        <div className="meme-copy"><p className="section-kicker">pasta: memes_final_agora_vai</p><h2 id="meme-title">CLÁSSICOS DO BRASIL.EXE</h2><p>Clique para ativar uma memória desbloqueada diretamente da lan house.</p>
          <div className="file-list" role="list">{memeMessages.map((meme) => <button key={meme.label} type="button" onClick={() => setToast(meme.reply)}><span className="file-icon">📄</span><span><small>{meme.year}</small>{meme.label}.mp3</span><b>▶</b></button>)}</div>
        </div>
        <div className="meme-collage" aria-label="Colagem inspirada na internet brasileira dos anos 2000"><div className="sticker sticker-one"><span>EU<br />SOU<br />RYCA!</span><small>arquivo confidencial</small></div><div className="sticker sticker-two"><span>CADÊ<br />MEU<br />CHIP?</span><small>ligação perdida</small></div><div className="sticker sticker-three"><span>QUE<br />DESELEGANTE</span><small>reação.gif</small></div><div className="floating-cd">💿</div></div>
      </section>

      <section className="dresscode-section" id="dresscode" aria-labelledby="dress-title">
        <div className="dress-window"><div className="window-titlebar"><span>Meu Computador › Dress code</span><div aria-hidden="true"><b>_</b><b>□</b><b>×</b></div></div>
          <div className="dress-content"><div className="dress-visual" aria-hidden="true"><span className="pixel-person">🧍‍♀️</span><span className="orbit orbit-one">✨</span><span className="orbit orbit-two">💿</span><span className="orbit orbit-three">🫧</span></div><div><p className="section-kicker">aparência do usuário</p><h2 id="dress-title">DRESS CODE:<br /><em>VIRTUAL</em></h2><p>Vista a versão de você que só existiria na internet. Vale avatar, óculos coloridos, cromado, pixel, fada, cyber, Orkut ou qualquer skin inventada.</p><ul><li>✓ criatividade acima da resolução</li><li>✓ glitter digital altamente recomendado</li><li>✓ zero obrigação de parecer “normal”</li></ul></div></div>
        </div>
      </section>

      <section className="final-cta"><div className="blinkie">✦ ENTRADA GRATUITA ✦ ENTRADA GRATUITA ✦</div><h2>ENTÃO... VAI FICAR OFFLINE?</h2><p>Confirme sua presença e salve esse evento na memória RAM do coração.</p><button className="primary-button" type="button" onClick={confirmPresence}>{confirmed ? "você está na lista ✓" : "eu vou ficar online"}</button></section>
      <footer><p>feito com HTML, CSS, JavaScript e saudade da internet antiga</p><p>© {birthday.year} Lucy Mazzini · melhor visualizado com a imaginação</p></footer>
      {toast && <div className="toast" role="status"><span>💬</span>{toast}</div>}
      <div className="confetti-layer" aria-hidden="true">{confetti.map((piece) => <i key={piece.id} style={{ left: `${piece.left}%`, animationDelay: `${piece.delay}s`, backgroundColor: piece.color }} />)}</div>
    </main>
  );
}
