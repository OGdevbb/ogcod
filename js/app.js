// =============================================================
//  OG! — script.js
// =============================================================

const CARDS = [

  {
    id: 'banner-texto',
    name: 'Banner — Texto',
    tags: ['banner', 'texto', 'hero'],
    badge: 'free',
    category: 'banner',
    link: 'codigos/banner-texto/index.html',
    image: 'https://imgur.com/lM4YnWC.png'
  },

  {
    id: 'painel-de-controle',
    name: 'Painel de Controle',
    tags: ['painel', 'menu', 'controle'],
    badge: 'free',
    category: 'navegacao',
    link: 'codigos/painel-controle/index.html',
    image: 'https://imgur.com/JlWHB1H.png'
  },

  {
    id: 'card-produto',
    name: 'Card de Produto',
    tags: ['produto', 'card', 'vitrine'],
    badge: 'new',
    category: 'produto',
    link: 'codigos/card-produto/index.html',
    image: 'https://imgur.com/0Qb71c3.png'
  },

  {
    id: 'slider',
    name: 'Slider / Carousel',
    tags: ['slider', 'carousel', 'banner'],
    badge: 'free',
    category: 'banner',
    link: 'codigos/slider/index.html',
    image: 'https://imgur.com/NnfhiA5.png'
  },

  {
    id: 'formulario',
    name: 'Formulário de Contato',
    tags: ['form', 'input', 'contato'],
    badge: 'free',
    category: 'layout',
    link: 'codigos/formulario/index.html',
    image: ''
  },

  {
    id: 'side-bar',
    name: 'Side-Bar Completa',
    tags: ['side', 'bar', 'menu'],
    badge: 'free',
    category: 'layout',
    link: 'codigos/side-bar/index.html',
    image: 'https://imgur.com/yiAhoom.png'
  },

  {
    id: 'pedir-estoque',
    name: 'Solicitar Estoque',
    tags: ['pedir', 'estoque', 'solicitar'],
    badge: 'free',
    category: 'layout',
    link: 'codigos/pedir-estoque/index.html',
    image: 'https://imgur.com/i052qqb.png'
  },

  {
    id: 'footer-final',
    name: 'Footer / Barrinha',
    tags: ['footer', 'barrinha', 'rodapé'],
    badge: 'free',
    category: 'layout',
    link: 'codigos/footer-final/index.html',
    image: 'https://imgur.com/LGTcKay.png'
  },

  {
    id: 'vendas-fake',
    name: 'Vendas Fake',
    tags: ['vendas', 'fake', 'falso'],
    badge: 'free',
    category: 'layout',
    link: 'codigos/vendas-fake/index.html',
    image: 'https://imgur.com/w1ybcYz.png'
  },

  {
    id: 'not-fake-modern',
    name: 'Notificação Fake Moderna',
    tags: ['vendas', 'fake', 'falso', 'moderno'],
    badge: 'free',
    category: 'layout',
    link: 'codigos/not-fake-modern/index.html',
    image: 'https://imgur.com/WC6JbLJ.png'
  },

  {
    id: 'musica-spotify',
    name: 'Música Spotify',
    tags: ['musica', 'spotify', 'ouvir', 'deco'],
    badge: 'free',
    category: 'layout',
    link: 'codigos/musica-spotify/index.html',
    image: 'https://imgur.com/s1163Gn.png'
  },

  {
    id: 'selo-de-seguranca',
    name: 'Selo de Segurança',
    tags: ['selo', 'segurança', 'reclameaqui', 'google'],
    badge: 'free',
    category: 'layout',
    link: 'codigos/selo-de-seguranca/index.html',
    image: 'https://imgur.com/uqQokI2.png'
  },

  {
    id: 'redes-sociais',
    name: 'Redes Sociais',
    tags: ['redes', 'sociais', 'tiktok', 'youtube'],
    badge: 'free',
    category: 'layout',
    link: 'codigos/redes-sociais/index.html',
    image: 'https://imgur.com/aBIMKzv.png'
  },

  {
    id: 'avaliacao-fake',
    name: 'Avaliações Fakes',
    tags: ['avaliacao', 'segurança', 'fake', 'refs'],
    badge: 'free',
    category: 'layout',
    link: 'codigos/avaliacao-fake/index.html',
    image: 'https://imgur.com/yHpjCWO.png'
  },

  {
    id: 'carrosel',
    name: 'Banner Carrosel',
    tags: ['banner', 'carrosel', 'imagem'],
    badge: 'free',
    category: 'banner',
    link: 'codigos/carrosel/index.html',
    image: 'https://imgur.com/hyPspMu.png'
  },

  {
    id: 'banner-hero',
    name: 'Banner Hero',
    tags: ['banner', 'hero', 'imagem'],
    badge: 'free',
    category: 'banner',
    link: 'codigos/banner-hero/index.html',
    image: 'https://imgur.com/HxEAc1L.png'
  },

  {
    id: 'banner-com-texto',
    name: 'Banner com Texto',
    tags: ['banner', 'texto', 'imagem'],
    badge: 'free',
    category: 'banner',
    link: 'codigos/banner-com-texto/index.html',
    image: 'https://imgur.com/3SelcCh.png'
  },

  {
    id: 'footer-glass',
    name: 'Footer Glass',
    tags: ['footer', 'glass'],
    badge: 'free',
    category: 'layout',
    link: 'codigos/footer-glass/index.html',
    image: 'https://imgur.com/XvUN3hk.png'
  },

  {
    id: 'pills-categorias',
    name: 'Pills de Categorias',
    tags: ['pills', 'categorias', 'categoria'],
    badge: 'free',
    category: 'layout',
    link: 'codigos/pills-categorias/index.html',
    image: 'https://imgur.com/Z3Wzwcm.png'
  },

    {
    id: 'estilo-entrega',
    name: 'Estilo de Entrega',
    tags: ['entrega', 'estoque', 'estilo'],
    badge: 'free',
    category: 'layout',
    link: 'codigos/estilo-entrega/index.html',
    image: 'https://imgur.com/E9jPLQi.png'
  },

    {
    id: 'mensagem-cupom',
    name: 'Mensagem de Cupom ao Entrar',
    tags: ['cupom', 'mensagem', 'log'],
    badge: 'free',
    category: 'layout',
    link: 'codigos/mensagem-cupom/index.html',
    image: 'https://imgur.com/WeHB4jq.png'
  },

      {
    id: 'estilo-login',
    name: 'Estilo de Login',
    tags: ['login', 'entrar', 'estilo'],
    badge: 'free',
    category: 'layout',
    link: 'codigos/estilo-login/index.html',
    image: 'https://imgur.com/E9jPLQi.png'
  }

  // ─────────────────────────────────────────────────────────────
  //  ➕ ADICIONE NOVOS CARDS AQUI:
  // {
  //   id: 'meu-componente',
  //   name: 'Nome do Componente',
  //   tags: ['tag1', 'tag2'],
  //   badge: 'free',          // 'free' | 'new' | 'pro'
  //   category: 'layout',     // 'banner' | 'navegacao' | 'produto' | 'layout'
  //   link: 'codigos/meu-componente/index.html',
  //   image: 'https://...'    // '' = placeholder
  // },
  // ─────────────────────────────────────────────────────────────

];


// =============================================================
//  COLABORADORES
//  Para adicionar: copie um objeto e preencha os campos.
//
//  Campos:
//    name     → nome exibido
//    initials → iniciais do avatar (1-3 chars ou emoji)
//    desc     → descrição (use \n para quebrar linha)
//    role     → 'contributor' (amarelo) | 'supporter' (laranja)
//    image    → URL da foto ('' = usa as iniciais)
// =============================================================

const COLABS = [
  { name: 'REIZINHO DEV', initials: 'R',  desc: 'Criador de customizações\npara Ereemby', role: 'contributor', image: '' },
  { name: 'APX',          initials: 'A',  desc: 'Criador de customizações\npara Ereemby', role: 'contributor', image: '' },
  { name: 'NICKO',        initials: 'N',  desc: 'Criador de customizações\npara Ereemby', role: 'contributor', image: '' },
  { name: 'NESSO_DEV',    initials: 'NS', desc: 'Criador de customizações\npara Ereemby', role: 'contributor', image: '' },
  { name: 'LENDA05961',   initials: 'L',  desc: 'Criador de customizações\npara Ereemby', role: 'contributor', image: '' },
  { name: 'CHORANAONPC',  initials: '⚡', desc: 'Criador de customizações\npara Ereemby', role: 'contributor', image: '' },
  { name: '0.03Y',        initials: '0',  desc: 'Criador de customizações\npara Ereemby', role: 'contributor', image: '' },
  { name: 'IMLYX7',       initials: 'IM', desc: 'Criador de customizações',                    role: 'contributor',  image: '' },
  { name: 'GSTDEV',       initials: 'G',  desc: 'Criador de customizações',                    role: 'contributor',  image: '' },

  // ➕ ADICIONE NOVOS COLABORADORES AQUI:
  // { name: 'SEUNOME', initials: 'SN', desc: 'Criador de customizações\npara Ereemby', role: 'contributor', image: '' },
];


// =============================================================
//  LÓGICA — não precisa mexer daqui pra baixo
// =============================================================

const BADGE_LABELS  = { free: 'Grátis', new: 'Novo', pro: 'Pro' };
const BADGE_CLASSES = { free: 'free',   new: 'new',  pro: 'pro' };

// ── 1. MONTA CARD DE COMPONENTE ──────────────────────────────

function buildCard(card) {
  const preview = card.image
    ? `<img src="${card.image}" alt="${card.name}" class="card-preview-img">`
    : `<div class="card-preview-placeholder"><span>SEM IMAGEM</span></div>`;

  return `
    <div class="code-card" data-id="${card.id}" data-category="${card.category}">
      <div class="card-preview">
        ${preview}
        <div class="card-hover-overlay">
          <button class="gerar-btn">Gerar Código</button>
        </div>
      </div>
      <div class="card-info">
        <div>
          <div class="card-name">${card.name}</div>
          <div class="card-tag">${card.tags.join(' · ')}</div>
        </div>
        <span class="card-badge ${BADGE_CLASSES[card.badge] || 'free'}">
          ${BADGE_LABELS[card.badge] || 'Grátis'}
        </span>
      </div>
    </div>`;
}

// ── 2. RENDERIZA O GRID DE COMPONENTES ───────────────────────

function renderCards(filter = 'todos') {
  const grid     = document.getElementById('cardsGrid');
  const filtered = filter === 'todos' ? CARDS : CARDS.filter(c => c.category === filter);

  grid.innerHTML = filtered.map(buildCard).join('');

  grid.querySelectorAll('.code-card').forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(24px)';
    el.style.transition = `opacity 0.45s ease ${i * 0.06}s, transform 0.45s ease ${i * 0.06}s`;
    scrollObserver.observe(el);
  });

  bindCursorHover(grid.querySelectorAll('.code-card, .gerar-btn'));
  bindCardClicks();
}

// ── 3. CURSOR CUSTOMIZADO ─────────────────────────────────────

const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mx = -200, my = -200, rx = -200, ry = -200, cursorVisible = false;

cursor.style.opacity = cursorRing.style.opacity = '0';

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
  if (!cursorVisible) {
    cursor.style.opacity     = '1';
    cursorRing.style.opacity = '0.5';
    cursorVisible = true;
  }
});

document.addEventListener('mouseleave', () => {
  cursor.style.opacity = cursorRing.style.opacity = '0';
  cursorVisible = false;
});

(function animateRing() {
  rx += (mx - rx) * 0.13;
  ry += (my - ry) * 0.13;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();

function bindCursorHover(els) {
  els.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = cursor.style.height = '20px';
      cursorRing.style.width = cursorRing.style.height = '56px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = cursor.style.height = '12px';
      cursorRing.style.width = cursorRing.style.height = '36px';
    });
  });
}

bindCursorHover(document.querySelectorAll('a, button, .filter-tab'));

// ── 4. FILTRO DE CATEGORIAS ───────────────────────────────────

document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderCards(tab.dataset.filter);
  });
});

// ── 5. CLIQUE NOS CARDS → REDIRECT ───────────────────────────

function bindCardClicks() {
  document.querySelectorAll('.code-card').forEach(card => {
    const data = CARDS.find(c => c.id === card.dataset.id);
    const url  = data?.link || '#';

    card.addEventListener('click', () => { window.location.href = url; });

    const btn = card.querySelector('.gerar-btn');
    if (btn) btn.addEventListener('click', e => { e.stopPropagation(); window.location.href = url; });
  });
}

// ── 6. TABS DA JANELA DE CÓDIGO (demo) ───────────────────────

document.querySelectorAll('.demo-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.demo-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// ── 7. SCROLL OBSERVER ───────────────────────────────────────

const scrollObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.feature-item, .step').forEach((el, i) => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
  scrollObserver.observe(el);
});

// ── 8. CARROSSEL DE COLABORADORES ────────────────────────────

function buildColabCard(c) {
  const avatar = c.image
    ? `<img src="${c.image}" alt="${c.name}" class="colab-avatar">`
    : `<div class="colab-avatar-fallback">${c.initials}</div>`;

  const descHtml  = c.desc.replace(/\n/g, '<br>');
  const roleLabel = c.role === 'supporter' ? 'Apoiador' : 'Contribuidor';

  return `
    <div class="colab-card">
      <div class="colab-avatar-wrap">${avatar}</div>
      <div class="colab-name">${c.name}</div>
      <div class="colab-desc">${descHtml}</div>
      <span class="colab-badge ${c.role}">${roleLabel}</span>
    </div>`;
}

function initColabsCarousel() {
  const track = document.getElementById('colabsTrack');
  if (!track) return;

  // Duplica os cards para o loop CSS infinito funcionar
  const html = COLABS.map(buildColabCard).join('');
  track.innerHTML = html + html;

  bindCursorHover(track.querySelectorAll('.colab-card'));
}

// ── 9. INIT ───────────────────────────────────────────────────

renderCards('todos');
initColabsCarousel();