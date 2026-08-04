(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const profileColors = {
    air: "#b9e8de",
    water: "#5ab5db",
    earth: "#a5ac5b",
    fire: "#e45d3d"
  };

  const profiles = {
    aang: {
      number: "01",
      name: "Aang",
      kicker: "O Avatar",
      element: "Ar",
      key: "air",
      nation: "Nômades do Ar",
      bending: "Ar, água, terra, fogo e energia",
      weapon: "Planador de nômade do ar",
      summary: "O último dobrador de ar e o Avatar de sua era. Brincalhão, compassivo e profundamente espiritual, Aang procura encerrar a guerra sem abandonar os valores de seu povo.",
      arc: "Ele começa como uma criança que teme o peso de sua missão. Ao formar uma nova família e encarar as perdas deixadas pela guerra, aprende que responsabilidade não precisa destruir sua gentileza — e encontra uma solução coerente com quem escolheu ser.",
      skills: { "Dobra": 98, "Espírito": 100, "Estratégia": 78 },
      traits: ["Compassivo", "Criativo", "Pacifista", "Leal"]
    },
    katara: {
      number: "02",
      name: "Katara",
      kicker: "A mestra da água",
      element: "Água",
      key: "water",
      nation: "Tribo da Água do Sul",
      bending: "Água, gelo e cura",
      weapon: "Odre de água e inteligência emocional",
      summary: "Determinada e protetora, Katara transforma uma habilidade quase autodidata em domínio completo. Sua empatia une o grupo, mas sua força também nasce da recusa em aceitar injustiças.",
      arc: "De única dobradora de sua aldeia a uma das maiores mestras de sua geração, ela aprende a equilibrar cuidado e raiva. Katara não esquece suas perdas; escolhe o que fazer com elas e se torna a âncora moral da Equipe Avatar.",
      skills: { "Dobra": 96, "Cura": 94, "Liderança": 91 },
      traits: ["Determinada", "Empática", "Corajosa", "Protetora"]
    },
    sokka: {
      number: "03",
      name: "Sokka",
      kicker: "O estrategista",
      element: "Água",
      key: "water",
      nation: "Tribo da Água do Sul",
      bending: "Não dobrador",
      weapon: "Bumerangue e espada de meteorito",
      summary: "Inventor, guerreiro e mente tática do grupo. Sokka compensa a ausência de dobra com planejamento, curiosidade e uma habilidade rara para transformar ideias improváveis em soluções.",
      arc: "Ele parte querendo provar que já é um guerreiro. Entre erros, perdas e grandes planos, entende que liderança não depende de pose ou poder elemental, mas de ouvir, aprender e assumir riscos pelos outros.",
      skills: { "Estratégia": 98, "Combate": 84, "Invenção": 93 },
      traits: ["Engenhoso", "Engraçado", "Prático", "Leal"]
    },
    toph: {
      number: "04",
      name: "Toph Beifong",
      kicker: "A bandida cega",
      element: "Terra",
      key: "earth",
      nation: "Reino da Terra",
      bending: "Terra, areia e metal",
      weapon: "Sentido sísmico",
      summary: "Uma prodígio que percebe o mundo pelas vibrações do solo. Direta, independente e formidável, Toph reinventa a dobra de terra ao descobrir como dobrar metal.",
      arc: "Criada sob proteção excessiva, ela conquista autonomia nos ringues e depois na Equipe Avatar. Sua maior mudança não é ficar mais forte — é aceitar que confiar nos amigos não diminui sua independência.",
      skills: { "Dobra": 100, "Percepção": 99, "Resistência": 96 },
      traits: ["Independente", "Franca", "Destemida", "Inovadora"]
    },
    zuko: {
      number: "05",
      name: "Zuko",
      kicker: "O príncipe banido",
      element: "Fogo",
      key: "fire",
      nation: "Nação do Fogo",
      bending: "Fogo e redirecionamento de relâmpago",
      weapon: "Espadas duplas dao",
      summary: "Marcado pelo exílio e pela busca obsessiva por honra, Zuko é um dos personagens mais complexos da jornada. Sua coragem real surge quando deixa de viver pela aprovação do pai.",
      arc: "De perseguidor do Avatar a aliado essencial, ele erra, recua e escolhe novamente. Ao confrontar a origem de sua vergonha, reconstrói sua identidade e decide usar o poder para reparar o dano causado por sua própria nação.",
      skills: { "Dobra": 91, "Combate": 95, "Determinação": 100 },
      traits: ["Intenso", "Persistente", "Honrado", "Em transformação"]
    },
    iroh: {
      number: "06",
      name: "Iroh",
      kicker: "O Dragão do Oeste",
      element: "Fogo",
      key: "fire",
      nation: "Nação do Fogo",
      bending: "Fogo e redirecionamento de relâmpago",
      weapon: "Experiência, chá e paciência",
      summary: "Antigo general e mestre da dobra de fogo, Iroh encontrou sabedoria depois da perda. Ele observa tradições de todas as nações e ensina Zuko sem tentar controlar suas escolhas.",
      arc: "Seu passado militar dá lugar a uma vida guiada por compaixão e equilíbrio. Como mentor, ele mostra que mudar não apaga os erros, mas cria a obrigação de agir de forma diferente quando uma nova chance aparece.",
      skills: { "Dobra": 98, "Sabedoria": 100, "Empatia": 99 },
      traits: ["Sábio", "Paciente", "Afetuoso", "Formidável"]
    },
    azula: {
      number: "07",
      name: "Azula",
      kicker: "A princesa prodígio",
      element: "Fogo",
      key: "fire",
      nation: "Nação do Fogo",
      bending: "Fogo azul e geração de relâmpago",
      weapon: "Precisão, intimidação e estratégia",
      summary: "Brilhante, disciplinada e impiedosa, Azula foi moldada para associar amor a controle. Sua técnica quase perfeita esconde uma identidade sustentada pelo medo de falhar.",
      arc: "Quanto mais poder conquista, menos consegue confiar. O isolamento expõe a fragilidade que sua perfeição escondia, transformando sua queda em uma imagem dolorosa do custo humano da educação autoritária.",
      skills: { "Dobra": 99, "Estratégia": 97, "Controle": 96 },
      traits: ["Brilhante", "Calculista", "Implacável", "Instável"]
    },
    suki: {
      number: "08",
      name: "Suki",
      kicker: "A guerreira Kyoshi",
      element: "Terra",
      key: "earth",
      nation: "Ilha Kyoshi · Reino da Terra",
      bending: "Não dobradora",
      weapon: "Leques de guerra e artes marciais",
      summary: "Líder das Guerreiras Kyoshi, Suki combina disciplina, agilidade e serenidade. Ela protege sua comunidade, domina o combate corporal e nunca é reduzida ao papel de coadjuvante.",
      arc: "De defensora de uma ilha isolada a combatente decisiva na guerra, amplia sua responsabilidade sem perder suas raízes. Sua relação com Sokka cresce a partir de respeito, parceria e aprendizado mútuo.",
      skills: { "Combate": 96, "Agilidade": 94, "Liderança": 92 },
      traits: ["Disciplinada", "Segura", "Gentil", "Destemida"]
    },
    appa: {
      number: "09",
      name: "Appa",
      kicker: "O bisão voador",
      element: "Ar",
      key: "air",
      nation: "Templo do Ar do Sul",
      bending: "Dobra de ar instintiva",
      weapon: "Cauda, força e voo",
      summary: "Companheiro de Aang desde a infância, Appa é transporte, abrigo e família. Sua lealdade sustenta a equipe mesmo nos trajetos mais perigosos.",
      arc: "Separado do grupo, enfrenta medo e abandono até reencontrar quem ama. Sua jornada evidencia que os animais deste mundo têm memória, vínculos profundos e importância muito além de uma função cômica.",
      skills: { "Força": 98, "Lealdade": 100, "Voo": 95 },
      traits: ["Leal", "Protetor", "Gentil", "Valente"]
    },
    momo: {
      number: "10",
      name: "Momo",
      kicker: "O lêmure alado",
      element: "Ar",
      key: "air",
      nation: "Templo do Ar do Sul",
      bending: "Não dobrador",
      weapon: "Agilidade e oportunismo",
      summary: "Curioso, caótico e surpreendentemente útil, Momo é um dos últimos animais encontrados no Templo do Ar do Sul e se torna parte inseparável da nova família de Aang.",
      arc: "Mesmo sem uma missão grandiosa, ele acompanha o grupo em toda a guerra, oferece companhia nos momentos de solidão e frequentemente encontra exatamente aquilo que ninguém sabia estar procurando.",
      skills: { "Agilidade": 99, "Curiosidade": 100, "Furtividade": 91 },
      traits: ["Curioso", "Ágil", "Travesso", "Carinhoso"]
    }
  };

  const elementResults = {
    water: {
      name: "Água",
      text: "Você encontra força na adaptação, nos vínculos e na capacidade de mudar sem perder sua essência.",
      link: "#tribos-da-agua"
    },
    earth: {
      name: "Terra",
      text: "Você encontra força na constância, na percepção e na coragem de permanecer quando algo importa.",
      link: "#reino-da-terra"
    },
    fire: {
      name: "Fogo",
      text: "Você encontra força na vontade, na iniciativa e na energia para transformar o que existe.",
      link: "#nacao-do-fogo"
    },
    air: {
      name: "Ar",
      text: "Você encontra força na liberdade, na criatividade e em novos pontos de vista.",
      link: "#nomades-do-ar"
    }
  };

  const body = document.body;
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".header__menu");
  const progress = document.querySelector(".scroll-progress span");
  const heroVideo = document.querySelector(".hero__video");
  const heroContent = document.querySelector(".hero__content");
  const soundButton = document.querySelector("[data-video-sound]");
  const pauseButton = document.querySelector("[data-video-pause]");
  const soundLabel = document.querySelector("[data-sound-label]");
  const pauseLabel = document.querySelector("[data-pause-label]");
  const pauseIcon = document.querySelector("[data-pause-icon]");
  const characterDialog = document.querySelector(".character-dialog");
  const videoDialog = document.querySelector(".video-dialog");
  const modalVideo = videoDialog.querySelector("video");

  let selectedElement = "air";
  let heroWasPlaying = true;
  let particleField = { setType() {} };

  function setElement(element, persist = false) {
    if (!profileColors[element]) return;
    selectedElement = element;
    body.dataset.element = element;
    particleField.setType(element);
    if (persist) {
      try {
        localStorage.setItem("avatar-element", element);
      } catch (_) {
        // A experiência continua normalmente quando o armazenamento é bloqueado.
      }
    }
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    if (!characterDialog.open && !videoDialog.open) body.classList.remove("is-locked");
  }

  menuToggle.addEventListener("click", () => {
    const willOpen = !menu.classList.contains("is-open");
    menu.classList.toggle("is-open", willOpen);
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    body.classList.toggle("is-locked", willOpen);
  });

  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });

  function updateOnScroll() {
    const scrollY = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? scrollY / scrollable : 0;
    progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
    header.classList.toggle("is-scrolled", scrollY > 40);

    if (!prefersReducedMotion && scrollY < window.innerHeight * 1.15) {
      heroVideo.style.transform = `translateY(${scrollY * 0.14}px)`;
      heroContent.style.transform = `translateY(${scrollY * 0.055}px)`;
    }
  }

  window.addEventListener("scroll", updateOnScroll, { passive: true });
  updateOnScroll();

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

  const pageSections = [...document.querySelectorAll("main section[id]")];
  const headerLinks = [...menu.querySelectorAll("a")];
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      headerLinks.forEach((link) => {
        const target = link.getAttribute("href");
        const active = target === `#${entry.target.id}` ||
          (entry.target.closest("#nacoes") && target === "#nacoes");
        link.classList.toggle("is-active", active);
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });

  pageSections.forEach((section) => sectionObserver.observe(section));

  const nationLinks = [...document.querySelectorAll("[data-nation-link]")];
  const nationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target.dataset.nation;
      setElement(element);
      nationLinks.forEach((link) => {
        link.classList.toggle("is-active", link.dataset.nationLink === element);
      });
    });
  }, { rootMargin: "-30% 0px -55% 0px", threshold: 0.08 });

  document.querySelectorAll("[data-nation]").forEach((nation) => nationObserver.observe(nation));

  function syncVideoButtons() {
    const isMuted = heroVideo.muted;
    const isPaused = heroVideo.paused;
    soundButton.setAttribute("aria-pressed", String(!isMuted));
    pauseButton.setAttribute("aria-pressed", String(isPaused));
    soundLabel.textContent = isMuted ? "Ativar som" : "Desativar som";
    pauseLabel.textContent = isPaused ? "Reproduzir" : "Pausar";
    pauseIcon.textContent = isPaused ? ">" : "||";
  }

  soundButton.addEventListener("click", async () => {
    heroVideo.muted = !heroVideo.muted;
    if (heroVideo.paused) {
      try {
        await heroVideo.play();
      } catch (_) {
        // O navegador pode exigir uma segunda interação para tocar mídia.
      }
    }
    syncVideoButtons();
  });

  pauseButton.addEventListener("click", async () => {
    if (heroVideo.paused) {
      try {
        await heroVideo.play();
      } catch (_) {
        // Mantém o estado real refletido nos controles.
      }
    } else {
      heroVideo.pause();
    }
    syncVideoButtons();
  });

  heroVideo.addEventListener("play", syncVideoButtons);
  heroVideo.addEventListener("pause", syncVideoButtons);
  syncVideoButtons();

  document.querySelector("[data-open-video]").addEventListener("click", () => {
    heroWasPlaying = !heroVideo.paused;
    heroVideo.pause();
    modalVideo.currentTime = heroVideo.currentTime;
    videoDialog.showModal();
    body.classList.add("is-locked");
    modalVideo.play().catch(() => {});
  });

  function closeVideoDialog() {
    modalVideo.pause();
    videoDialog.close();
    body.classList.remove("is-locked");
    if (heroWasPlaying) heroVideo.play().catch(() => {});
  }

  document.querySelector("[data-close-video]").addEventListener("click", closeVideoDialog);

  videoDialog.addEventListener("click", (event) => {
    if (event.target === videoDialog) closeVideoDialog();
  });

  videoDialog.addEventListener("close", () => {
    modalVideo.pause();
    body.classList.remove("is-locked");
  });

  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const characterCards = [...document.querySelectorAll("[data-character]")];

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      characterCards.forEach((card, index) => {
        const groups = card.dataset.groups.split(" ");
        const visible = filter === "all" || groups.includes(filter);
        card.classList.toggle("is-hidden", !visible);
        if (visible && !prefersReducedMotion) {
          card.animate(
            [
              { opacity: 0, transform: "translateY(14px)" },
              { opacity: 1, transform: "translateY(0)" }
            ],
            { duration: 380, delay: index * 28, easing: "cubic-bezier(.22,1,.36,1)" }
          );
        }
      });
    });
  });

  const dialogFields = {
    number: characterDialog.querySelector("[data-dialog-number]"),
    portrait: characterDialog.querySelector("[data-dialog-portrait]"),
    element: characterDialog.querySelector("[data-dialog-element]"),
    kicker: characterDialog.querySelector("[data-dialog-kicker]"),
    name: characterDialog.querySelector("[data-dialog-name]"),
    summary: characterDialog.querySelector("[data-dialog-summary]"),
    nation: characterDialog.querySelector("[data-dialog-nation]"),
    bending: characterDialog.querySelector("[data-dialog-bending]"),
    weapon: characterDialog.querySelector("[data-dialog-weapon]"),
    arc: characterDialog.querySelector("[data-dialog-arc]"),
    skills: characterDialog.querySelector("[data-dialog-skills]"),
    traits: characterDialog.querySelector("[data-dialog-traits]")
  };

  const dialogPanel = characterDialog.querySelector(".character-dialog__panel");

  function openCharacter(characterKey) {
    const profile = profiles[characterKey];
    if (!profile) return;

    dialogPanel.style.setProperty("--dialog-color", profileColors[profile.key]);
    dialogFields.number.textContent = profile.number;
    dialogFields.portrait.setAttribute("href", `assets/images/characters.svg#${characterKey}`);
    dialogFields.element.textContent = profile.element;
    dialogFields.kicker.textContent = profile.kicker;
    dialogFields.name.textContent = profile.name;
    dialogFields.summary.textContent = profile.summary;
    dialogFields.nation.textContent = profile.nation;
    dialogFields.bending.textContent = profile.bending;
    dialogFields.weapon.textContent = profile.weapon;
    dialogFields.arc.textContent = profile.arc;

    dialogFields.skills.replaceChildren();
    Object.entries(profile.skills).forEach(([skill, value]) => {
      const row = document.createElement("div");
      row.className = "skill-row";
      row.style.setProperty("--skill-value", `${value}%`);

      const label = document.createElement("span");
      label.textContent = skill;
      const bar = document.createElement("i");
      bar.setAttribute("aria-hidden", "true");
      const number = document.createElement("b");
      number.textContent = value;
      row.append(label, bar, number);
      dialogFields.skills.append(row);
    });

    dialogFields.traits.replaceChildren();
    profile.traits.forEach((trait) => {
      const chip = document.createElement("span");
      chip.textContent = trait;
      dialogFields.traits.append(chip);
    });

    setElement(profile.key);
    characterDialog.showModal();
    body.classList.add("is-locked");
  }

  characterCards.forEach((card) => {
    card.addEventListener("click", () => openCharacter(card.dataset.character));
  });

  function closeCharacterDialog() {
    characterDialog.close();
    body.classList.remove("is-locked");
  }

  document.querySelector("[data-close-dialog]").addEventListener("click", closeCharacterDialog);

  characterDialog.addEventListener("click", (event) => {
    if (event.target === characterDialog) closeCharacterDialog();
  });

  characterDialog.addEventListener("close", () => body.classList.remove("is-locked"));

  const resultPanel = document.querySelector(".element-result");
  const resultName = resultPanel.querySelector("[data-result-name]");
  const resultText = resultPanel.querySelector("[data-result-text]");
  const resultLink = resultPanel.querySelector("[data-result-link]");
  const resultSymbol = resultPanel.querySelector("[data-result-symbol]");

  document.querySelectorAll("[data-element-choice]").forEach((choice) => {
    choice.addEventListener("click", () => {
      const element = choice.dataset.elementChoice;
      const result = elementResults[element];
      setElement(element, true);
      resultName.textContent = result.name;
      resultText.textContent = result.text;
      resultLink.href = result.link;
      resultSymbol.setAttribute("href", `assets/images/symbols.svg#${element}`);
      resultPanel.hidden = false;
      if (!prefersReducedMotion) {
        resultPanel.animate(
          [
            { opacity: 0, transform: "scale(.97)" },
            { opacity: 1, transform: "scale(1)" }
          ],
          { duration: 520, easing: "cubic-bezier(.22,1,.36,1)" }
        );
      }
    });
  });

  resultPanel.querySelector(".element-result__close").addEventListener("click", () => {
    resultPanel.hidden = true;
  });

  resultLink.addEventListener("click", () => {
    resultPanel.hidden = true;
  });

  const savedElement = (() => {
    try {
      return localStorage.getItem("avatar-element");
    } catch (_) {
      return null;
    }
  })();

  if (savedElement && profileColors[savedElement]) setElement(savedElement);

  function createParticleField() {
    const canvas = document.querySelector("#elementCanvas");
    const context = canvas.getContext("2d");
    const particles = [];
    let type = "air";
    let width = 0;
    let height = 0;
    let frameId = 0;
    let lastTime = 0;

    const counts = {
      air: 26,
      water: 22,
      earth: 18,
      fire: 32
    };

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      seed();
    }

    function particle() {
      const size = type === "earth" ? Math.random() * 3 + 1 : Math.random() * 2.5 + 0.8;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        speed: Math.random() * 0.35 + 0.12,
        drift: (Math.random() - 0.5) * 0.45,
        alpha: Math.random() * 0.5 + 0.15,
        phase: Math.random() * Math.PI * 2
      };
    }

    function seed() {
      particles.length = 0;
      const amount = Math.min(counts[type], Math.ceil(width / 36));
      for (let index = 0; index < amount; index += 1) particles.push(particle());
    }

    function reset(item) {
      Object.assign(item, particle());
      if (type === "earth") {
        item.y = -10;
      } else {
        item.y = height + 10;
      }
    }

    function draw(item, elapsed) {
      context.globalAlpha = item.alpha;
      context.fillStyle = profileColors[type];
      context.strokeStyle = profileColors[type];
      context.lineWidth = 1;

      if (type === "water") {
        context.beginPath();
        context.arc(item.x, item.y, item.size * 1.5, 0, Math.PI * 2);
        context.stroke();
      } else if (type === "earth") {
        context.save();
        context.translate(item.x, item.y);
        context.rotate(item.phase + elapsed * 0.00008);
        context.fillRect(-item.size, -item.size, item.size * 2, item.size * 2);
        context.restore();
      } else if (type === "fire") {
        context.beginPath();
        context.ellipse(item.x, item.y, item.size * 0.7, item.size * 2.3, 0, 0, Math.PI * 2);
        context.fill();
      } else {
        context.beginPath();
        context.arc(item.x, item.y, item.size, 0, Math.PI * 1.6);
        context.stroke();
      }
    }

    function animate(time) {
      const delta = Math.min((time - lastTime) / 16.67 || 1, 2);
      lastTime = time;
      context.clearRect(0, 0, width, height);

      particles.forEach((item) => {
        if (type === "earth") {
          item.y += item.speed * 0.75 * delta;
          item.x += Math.sin(time * 0.0004 + item.phase) * 0.08;
          if (item.y > height + 10) reset(item);
        } else {
          const rise = type === "fire" ? 1.8 : type === "water" ? 0.72 : 0.42;
          item.y -= item.speed * rise * delta;
          item.x += (item.drift + Math.sin(time * 0.0008 + item.phase) * 0.16) * delta;
          if (item.y < -12 || item.x < -20 || item.x > width + 20) reset(item);
        }
        draw(item, time);
      });

      frameId = requestAnimationFrame(animate);
    }

    function setType(nextType) {
      if (!profileColors[nextType] || nextType === type) return;
      type = nextType;
      seed();
    }

    if (!prefersReducedMotion) {
      resize();
      window.addEventListener("resize", resize, { passive: true });
      frameId = requestAnimationFrame(animate);
    }

    return {
      setType,
      destroy() {
        cancelAnimationFrame(frameId);
        window.removeEventListener("resize", resize);
      }
    };
  }

  // Definido antes do primeiro setElement chamado pelos observadores.
  function initParticleField() {
    return createParticleField();
  }

  // A referência é deliberadamente criada no fim para o canvas já conhecer o layout final.
  particleField = initParticleField();
  particleField.setType(selectedElement);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && !heroVideo.paused) {
      heroWasPlaying = true;
      heroVideo.pause();
    } else if (!document.hidden && heroWasPlaying && !videoDialog.open) {
      heroVideo.play().catch(() => {});
    }
  });

  window.addEventListener("load", () => {
    window.setTimeout(() => document.querySelector(".loader").classList.add("is-hidden"), 420);
    heroVideo.play().catch(syncVideoButtons);
  });

  window.setTimeout(() => document.querySelector(".loader").classList.add("is-hidden"), 2400);
})();
