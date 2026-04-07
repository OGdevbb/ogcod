// =============================================================
//  OG! — descricaov1.js  (Descricao Personalizada)
// =============================================================

const COMPONENT = {
  title:       'Descricao Personalizada',
  description: 'Bloco de descricao glassmorphism com titulo animado shine, ate 3 cards de conteudo e botao de compra com efeito brilho. Todas as cores, textos e estilos customizaveis.',
  tags:        ['Descricao', 'Produto', 'Glassmorphism', 'HTML', 'CSS', 'Gratis'],

  fields: [
    // ── Conteudo ─────────────────────────────────────────────
    { id: 'tituloProduto', label: 'Titulo do Produto', type: 'text', placeholder: 'Ex: Netflix Premium 4K', default: 'Meu Produto Incrivel', required: true },

    // Card 1
    { id: 'card1Titulo',   label: 'Card 1 — Titulo',   type: 'text', placeholder: 'Ex: 🎮 Detalhes do Produto', default: '🎮 Detalhes do Produto', required: true  },
    { id: 'card1Conteudo', label: 'Card 1 — Conteudo (HTML aceito)', type: 'text',
      placeholder: 'Ex: <p><strong>• Item:</strong> Descricao</p>',
      default: '<p><strong>• Acesso:</strong> Conta compartilhada com o produto ativo.</p><p><strong>• Entrega:</strong> Imediata apos o pagamento.</p>',
      required: true },

    // Card 2
    { id: 'card2Titulo',   label: 'Card 2 — Titulo',   type: 'text', placeholder: 'Ex: 🌟 Beneficios', default: '🌟 Beneficios Exclusivos', required: false },
    { id: 'card2Conteudo', label: 'Card 2 — Conteudo (HTML aceito)', type: 'text',
      placeholder: 'Ex: <ul>...</ul>',
      default: '<ul style="list-style:none;padding:0;margin:0;"><li style="margin-bottom:.5rem;">✅ Suporte completo incluso.</li><li style="margin-bottom:.5rem;">💸 Melhor preco do mercado.</li></ul>',
      required: false },

    // Card 3
    { id: 'card3Titulo',   label: 'Card 3 — Titulo',   type: 'text', placeholder: 'Ex: ⚠️ Informacoes', default: '⚠️ Informacoes Importantes', required: false },
    { id: 'card3Conteudo', label: 'Card 3 — Conteudo (HTML aceito)', type: 'text',
      placeholder: 'Ex: <p>⚠️ Aviso importante...</p>',
      default: '<p><strong>⚠️ Leia antes de comprar:</strong> Verifique os requisitos do produto antes de finalizar o pedido.</p>',
      required: false },

    // Botao
    { id: 'textoBotao', label: 'Texto do Botao',   type: 'text', placeholder: 'Ex: Comprar Agora', default: 'Comprar Agora', required: true  },
    { id: 'linkBotao',  label: 'Link do Botao',    type: 'text', placeholder: 'Ex: https://...',   default: '#',           required: false },

    // ── Cores principais ─────────────────────────────────────
    { id: 'corFundo',          label: 'Fundo do Container (rgba)',  type: 'text',  placeholder: 'Ex: rgba(106,13,173,0.15)', default: 'rgba(106,13,173,0.15)', required: false },
    { id: 'corCard',           label: 'Fundo dos Cards (rgba)',     type: 'text',  placeholder: 'Ex: rgba(106,13,173,0.25)', default: 'rgba(106,13,173,0.25)', required: false },
    { id: 'corCardHover',      label: 'Fundo Cards Hover (rgba)',   type: 'text',  placeholder: 'Ex: rgba(106,13,173,0.35)', default: 'rgba(106,13,173,0.35)', required: false },
    { id: 'corTextoPrincipal', label: 'Cor Texto Principal',        type: 'color', default: '#e9dcff' },
    { id: 'corTextoSecundario',label: 'Cor Texto Secundario',       type: 'color', default: '#d0baff' },
    { id: 'corDestaque',       label: 'Cor de Destaque (shine/icone)', type: 'color', default: '#c084ff' },
    { id: 'corBorda',          label: 'Cor da Borda dos Cards (rgba)', type: 'text', placeholder: 'Ex: rgba(192,132,255,0.4)', default: 'rgba(192,132,255,0.4)', required: false },

    // Sombras
    { id: 'corSombra',      label: 'Sombra do Container (rgba)', type: 'text', placeholder: 'Ex: rgba(106,13,173,0.3)',  default: 'rgba(106,13,173,0.3)',  required: false },
    { id: 'corSombraCard',  label: 'Sombra dos Cards (rgba)',    type: 'text', placeholder: 'Ex: rgba(106,13,173,0.2)',  default: 'rgba(106,13,173,0.2)',  required: false },
    { id: 'corSombraHover', label: 'Sombra Hover (rgba)',        type: 'text', placeholder: 'Ex: rgba(192,132,255,0.3)', default: 'rgba(192,132,255,0.3)', required: false },

    // Botao
    { id: 'corBotao1',          label: 'Botao Cor 1',              type: 'color', default: '#9b4dff' },
    { id: 'corBotao2',          label: 'Botao Cor 2 (centro)',      type: 'color', default: '#6a0dad' },
    { id: 'corTextoBotao',      label: 'Cor Texto do Botao',        type: 'color', default: '#ffffff' },
    { id: 'corSombraBotao',     label: 'Sombra do Botao (rgba)',    type: 'text',  placeholder: 'Ex: rgba(155,77,255,0.4)', default: 'rgba(155,77,255,0.4)', required: false },
    { id: 'corSombraBotaoHover',label: 'Sombra Botao Hover (rgba)', type: 'text',  placeholder: 'Ex: rgba(155,77,255,0.6)', default: 'rgba(155,77,255,0.6)', required: false },

    // ── Layout ───────────────────────────────────────────────
    { id: 'blur',              label: 'Blur do Glassmorphism',   type: 'text', placeholder: 'Ex: 20px', default: '20px', required: false },
    { id: 'radiusContainer',   label: 'Radius do Container',     type: 'text', placeholder: 'Ex: 20px', default: '20px', required: false },
    { id: 'paddingContainer',  label: 'Padding do Container',    type: 'text', placeholder: 'Ex: 2rem', default: '2rem', required: false },
    { id: 'radiusCard',        label: 'Radius dos Cards',        type: 'text', placeholder: 'Ex: 16px', default: '16px', required: false },
    { id: 'paddingCard',       label: 'Padding dos Cards',       type: 'text', placeholder: 'Ex: 2rem', default: '2rem', required: false },
    { id: 'paddingBotao',      label: 'Padding do Botao',        type: 'text', placeholder: 'Ex: 1rem 2rem', default: '1rem 2rem', required: false },
    { id: 'radiusBotao',       label: 'Radius do Botao',         type: 'text', placeholder: 'Ex: 12px', default: '12px', required: false },

    // ── Tipografia e animacao ─────────────────────────────────
    { id: 'fontFamilia',       label: 'Fonte (Google Fonts)',     type: 'text', placeholder: 'Ex: Inter', default: 'Inter',  required: false },
    { id: 'tamanhoTitulo',     label: 'Tamanho Titulo (PC)',      type: 'text', placeholder: 'Ex: 2rem',  default: '2rem',   required: false },
    { id: 'tamanhoTituloMobile',label:'Tamanho Titulo (Mobile)',  type: 'text', placeholder: 'Ex: 1.6rem',default: '1.6rem', required: false },
    { id: 'tamanhoCardTitulo', label: 'Tamanho Titulo dos Cards', type: 'text', placeholder: 'Ex: 1.3rem',default: '1.3rem', required: false },
    { id: 'velocidadeShine',   label: 'Velocidade Shine (s)',     type: 'text', placeholder: 'Ex: 3',     default: '3',      required: false },
  ],
};

const BASE_HTML_B64 = 'PGRpdiBjbGFzcz0iZGVzY3JpY2FvLXByb2R1dG8tY29udGFpbmVyIj4KICA8aDEgY2xhc3M9InRpdHVsby1zZWNhby1hbmltYWRvIj57e3RpdHVsb1Byb2R1dG99fTwvaDE+CgogIHt7I2NhcmQxfX0KICA8ZGl2IGNsYXNzPSJjYXJkLWRlc2NyaWNhbyI+CiAgICA8aDIgY2xhc3M9ImNhcmQtdGl0dWxvIj57e2NhcmQxVGl0dWxvfX08L2gyPgogICAgPGRpdj57e2NhcmQxQ29udGV1ZG99fTwvZGl2PgogIDwvZGl2PgogIHt7L2NhcmQxfX0KCiAge3sjY2FyZDJ9fQogIDxkaXYgY2xhc3M9ImNhcmQtZGVzY3JpY2FvIj4KICAgIDxoMiBjbGFzcz0iY2FyZC10aXR1bG8iPnt7Y2FyZDJUaXR1bG99fTwvaDI+CiAgICA8ZGl2Pnt7Y2FyZDJDb250ZXVkb319PC9kaXY+CiAgPC9kaXY+CiAge3svY2FyZDJ9fQoKICB7eyNjYXJkM319CiAgPGRpdiBjbGFzcz0iY2FyZC1kZXNjcmljYW8iPgogICAgPGgyIGNsYXNzPSJjYXJkLXRpdHVsbyI+e3tjYXJkM1RpdHVsb319PC9oMj4KICAgIDxkaXY+e3tjYXJkM0NvbnRldWRvfX08L2Rpdj4KICA8L2Rpdj4KICB7ey9jYXJkM319CgogIDxhIGhyZWY9Int7bGlua0JvdGFvfX0iIGNsYXNzPSJib3Rhby1jb21wcmFyIj57e3RleHRvQm90YW99fTwvYT4KPC9kaXY+';
const BASE_CSS_B64  = 'QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9e3tmb250RmFtaWxpYX19OndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpOwoKOnJvb3QgewogIC0tY29yLWZ1bmRvLWxvamE6IHt7Y29yRnVuZG99fTsKICAtLWNvci1jYXJkLWxvamE6IHt7Y29yQ2FyZH19OwogIC0tY29yLXRleHRvLXByaW5jaXBhbDoge3tjb3JUZXh0b1ByaW5jaXBhbH19OwogIC0tY29yLXRleHRvLXNlY3VuZGFyaW86IHt7Y29yVGV4dG9TZWN1bmRhcmlvfX07CiAgLS1jb3ItdmVyZGUtZGVzdGFxdWU6IHt7Y29yRGVzdGFxdWV9fTsKICAtLWNvci1ib3JkYS1zdWF2ZToge3tjb3JCb3JkYX19Owp9CgouZGVzY3JpY2FvLXByb2R1dG8tY29udGFpbmVyIHsKICBmb250LWZhbWlseTogJ3t7Zm9udEZhbWlsaWF9fScsIHNhbnMtc2VyaWY7CiAgYmFja2dyb3VuZDogdmFyKC0tY29yLWZ1bmRvLWxvamEpOwogIGJhY2tkcm9wLWZpbHRlcjogYmx1cih7e2JsdXJ9fSkgc2F0dXJhdGUoMTgwJSk7CiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoe3tibHVyfX0pIHNhdHVyYXRlKDE4MCUpOwogIGJvcmRlci1yYWRpdXM6IHt7cmFkaXVzQ29udGFpbmVyfX07CiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTsKICBwYWRkaW5nOiB7e3BhZGRpbmdDb250YWluZXJ9fTsKICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHt7Y29yU29tYnJhfX07CiAgZGlzcGxheTogZmxleDsKICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogIGdhcDogMS41cmVtOwp9CgpAa2V5ZnJhbWVzIHRleHQtc2hpbmUtZWZmZWN0IHsKICB0byB7IGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgY2VudGVyOyB9Cn0KCi50aXR1bG8tc2VjYW8tYW5pbWFkbyB7CiAgZm9udC1zaXplOiB7e3RhbWFuaG9UaXR1bG99fTsKICBmb250LXdlaWdodDogNzAwOwogIHRleHQtYWxpZ246IGNlbnRlcjsKICBtYXJnaW4tYm90dG9tOiAxcmVtOwogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgKICAgIHRvIHJpZ2h0LAogICAgdmFyKC0tY29yLXRleHRvLXByaW5jaXBhbCkgMjAlLAogICAgdmFyKC0tY29ydmVyZGUtZGVzdGFxdWUpIDQwJSwKICAgIHZhcigtLWNvci12ZXJkZS1kZXN0YXF1ZSkgNjAlLAogICAgdmFyKC0tY29yLXRleHRvLXByaW5jaXBhbCkgODAlCiAgKTsKICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bzsKICBjb2xvcjogdHJhbnNwYXJlbnQ7CiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0OwogIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OwogIGFuaW1hdGlvbjogdGV4dC1zaGluZS1lZmZlY3Qge3t2ZWxvY2lkYWRlU2hpbmV9fXMgbGluZWFyIGluZmluaXRlOwp9CgouY2FyZC1kZXNjcmljYW8gewogIGJhY2tncm91bmQ6IHZhcigtLWNvci1jYXJkLWxvamEpOwogIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyNXB4KTsKICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyNXB4KTsKICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb3ItYm9yZGEtc3VhdmUpOwogIGJvcmRlci1yYWRpdXM6IHt7cmFkaXVzQ2FyZH19OwogIHBhZGRpbmc6IHt7cGFkZGluZ0NhcmR9fTsKICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHt7Y29yU29tYnJhQ2FyZH19OwogIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7Cn0KCi5jYXJkLWRlc2NyaWNhbzpob3ZlciB7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOwogIGJhY2tncm91bmQ6IHt7Y29yQ2FyZEhvdmVyfX07CiAgYm94LXNoYWRvdzogMCA2cHggMjVweCAe3tjb3JTb21icmFIb3Zlcn19Owp9CgouY2FyZC10aXR1bG8gewogIGNvbG9yOiB2YXIoLS1jb3ItdGV4dG8tcHJpbmNpcGFsKTsKICBmb250LXNpemU6IHt7dGFtYW5ob0NhcmRUaXR1bG99fTsKICBmb250LXdlaWdodDogNjAwOwogIG1hcmdpbi1ib3R0b206IDFyZW07CiAgZGlzcGxheTogZmxleDsKICBhbGlnbi1pdGVtczogY2VudGVyOwogIGdhcDogMC44NXJlbTsKfQoKLmNhcmQtaWNvbiB7CiAgd2lkdGg6IDI2cHg7CiAgaGVpZ2h0OiAyNnB4OwogIGNvbG9yOiB2YXIoLS1jb3ItdmVyZGUtZGVzdGFxdWUpOwp9CgouZGVzY3JpY2FvLXByb2R1dG8tY29udGFpbmVyIHAsCi5kZXNjcmljYW8tcHJvZHV0by1jb250YWluZXIgbGkgewogIGNvbG9yOiB2YXIoLS1jb3ItdGV4dG8tc2VjdW5kYXJpbyk7CiAgZm9udC1zaXplOiAxcmVtOwogIGxpbmUtaGVpZ2h0OiAxLjc7Cn0KCi5kZXNjcmljYW8tcHJvZHV0by1jb250YWluZXIgc3Ryb25nIHsKICBjb2xvcjogdmFyKC0tY29yLXRleHRvLXByaW5jaXBhbCk7CiAgZm9udC13ZWlnaHQ6IDYwMDsKfQoKLmJvdGFvLWNvbXByYXIgewogIGRpc3BsYXk6IGlubGluZS1ibG9jazsKICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB7e2NvckJvdGFvMX19LCB7e2NvckJvdGFvMn19LCB7e2NvckJvdGFvMX19KTsKICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bzsKICBjb2xvcjoge3tjb3JUZXh0b0JvdGFvfX07CiAgZm9udC13ZWlnaHQ6IDYwMDsKICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOwogIGxldHRlci1zcGFjaW5nOiAxcHg7CiAgcGFkZGluZzoge3twYWRkaW5nQm90YW99fTsKICBib3JkZXItcmFkaXVzOiB7e3JhZGl1c0JvdGFvfX07CiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOwogIGJveC1zaGFkb3c6IDAgNHB4IDE1cHgge3tjb3JTb21icmFCb3Rhb319OwogIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0OwogIGFuaW1hdGlvbjogYm90YW8tYnJpbGhvIDNzIGxpbmVhciBpbmZpbml0ZTsKICBtYXJnaW46IDAgYXV0bzsKfQoKLmJvdGFvLWNvbXByYXI6aG92ZXIgewogIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7CiAgYm94LXNoYWRvdzogMCA2cHggMjBweCB7e2NvclNvbWJyYUJvdGFvSG92ZXJ9fTsKfQoKQGtleWZyYW1lcyBib3Rhby1icmlsaG8gewogIHRvIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSBjZW50ZXI7IH0KfQoKQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7CiAgLnRpdHVsby1zZWNhby1hbmltYWRvIHsgZm9udC1zaXplOiB7e3RhbWFuaG9UaXR1bG9Nb2JpbGV9fTsgfQogIC5jYXJkLWRlc2NyaWNhbyB7IHBhZGRpbmc6IDEuNXJlbTsgfQp9';
const BASE_JS_B64   = '';

// =============================================================
//  ENGINE — não mexa abaixo desta linha
// =============================================================

// Decodifica base64 → string (suporte a UTF-8)
function b64decode(str) {
  if (!str) return '';
  try {
    return decodeURIComponent(
      atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join('')
    );
  } catch(e) {
    return atob(str);
  }
}

const BASE_HTML = b64decode(BASE_HTML_B64);
const BASE_CSS  = b64decode(BASE_CSS_B64);
const BASE_JS   = b64decode(BASE_JS_B64);

// ── Cursor ───────────────────────────────────────────────────
const oC = document.getElementById('ogC');
const oR = document.getElementById('ogR');
var mx = -200, my = -200, rx = -200, ry = -200, cvis = false;

document.addEventListener('mousemove', function(e) {
  mx = e.clientX; my = e.clientY;
  oC.style.left = mx + 'px'; oC.style.top = my + 'px';
  if (!cvis) { oC.style.opacity = '1'; oR.style.opacity = '0.5'; cvis = true; }
});
document.addEventListener('mouseleave', function() {
  oC.style.opacity = oR.style.opacity = '0'; cvis = false;
});
(function tick() {
  rx += (mx - rx) * .13; ry += (my - ry) * .13;
  oR.style.left = rx + 'px'; oR.style.top = ry + 'px';
  requestAnimationFrame(tick);
})();

function hover(els) {
  els.forEach(function(el) {
    el.addEventListener('mouseenter', function() { oC.style.width = oC.style.height = '20px'; oR.style.width = oR.style.height = '56px'; });
    el.addEventListener('mouseleave', function() { oC.style.width = oC.style.height = '12px'; oR.style.width = oR.style.height = '36px'; });
  });
}
hover(document.querySelectorAll('a, button'));

// ── Metadados ────────────────────────────────────────────────
document.getElementById('bcTitle').textContent  = COMPONENT.title;
document.getElementById('compH1').textContent   = COMPONENT.title;
document.getElementById('compDesc').textContent = COMPONENT.description;
COMPONENT.tags.forEach(function(t) {
  var s = document.createElement('span');
  s.className = 'ctag' + (t === 'Grátis' ? ' hl' : '');
  s.textContent = t;
  document.getElementById('compTags').appendChild(s);
});

// ── Renderiza campos ─────────────────────────────────────────
var fw = document.getElementById('fieldsWrap');

COMPONENT.fields.forEach(function(f) {
  var g = document.createElement('div');
  g.className = 'field-group';
  g.dataset.fid = f.id;

  var lb = document.createElement('label');
  lb.className = 'field-lbl';
  lb.textContent = f.label + (f.required ? ' *' : '');

  if (f.type === 'color' && f.default && f.default.indexOf('rgba') === -1) {
    var cw  = document.createElement('div');   cw.className = 'color-wrap';
    var nat = document.createElement('input'); nat.type = 'color'; nat.className = 'color-native'; nat.value = f.default; nat.id = 'f_' + f.id;
    var sw  = document.createElement('div');   sw.className = 'color-swatch'; sw.style.background = f.default;
    var hx  = document.createElement('input'); hx.type = 'text'; hx.className = 'color-hex'; hx.value = f.default; hx.maxLength = 7;

    sw.onclick = function() { nat.click(); };
    hx.onclick = function() { nat.click(); };
    nat.oninput = function() { sw.style.background = nat.value; hx.value = nat.value; renderPreview(); };
    hx.oninput  = function() { if (/^#[0-9a-fA-F]{6}$/.test(hx.value)) { nat.value = hx.value; sw.style.background = hx.value; renderPreview(); } };

    cw.appendChild(nat); cw.appendChild(sw); cw.appendChild(hx);
    g.appendChild(lb); g.appendChild(cw);
  } else {
    // campo de texto normal (também usado para cores rgba ou campos type:'text')
    var inp = document.createElement('input');
    inp.type = 'text'; inp.className = 'field-inp';
    inp.placeholder = f.placeholder || ''; inp.value = f.default || ''; inp.id = 'f_' + f.id;
    inp.oninput = renderPreview;

    var er = document.createElement('span');
    er.className = 'field-err';
    er.textContent = '"' + f.label + '" é obrigatório.';

    g.appendChild(lb); g.appendChild(inp); g.appendChild(er);
  }

  fw.appendChild(g);
  hover([g]);
});

// ── Lê valores ───────────────────────────────────────────────
function getVals() {
  var v = {};
  COMPONENT.fields.forEach(function(f) {
    var el = document.getElementById('f_' + f.id);
    v[f.id] = el ? el.value.trim() : '';
  });
  return v;
}

// ── Validação ────────────────────────────────────────────────
function validate(v) {
  var ok = true;
  COMPONENT.fields.forEach(function(f) {
    if (!f.required) return;
    var inp = document.getElementById('f_' + f.id);
    var er  = fw.querySelector('[data-fid="' + f.id + '"] .field-err');
    if (!v[f.id]) {
      if (inp) inp.classList.add('has-err');
      if (er)  er.classList.add('show');
      ok = false;
      if (inp) inp.addEventListener('input', function() {
        if (inp.value.trim()) { inp.classList.remove('has-err'); if (er) er.classList.remove('show'); }
      }, { once: true });
    } else {
      if (inp) inp.classList.remove('has-err');
      if (er)  er.classList.remove('show');
    }
  });
  return ok;
}

// ── Template engine ──────────────────────────────────────────
function process(tpl, v) {
  var c = tpl.replace(/\/\* IF:(\w+) \*\/([\s\S]*?)\/\* ENDIF \*\//g, function(_, k, b) { return v[k] ? b : ''; });
  c = c.replace(/\{\{(\w+)\}\}/g, function(_, k) { return v[k] || ''; });
  return c.replace(/\n{3,}/g, '\n\n').trim();
}

// ── Preview ao vivo ───────────────────────────────────────────
function renderPreview() {
  var v   = getVals();
  var box = document.getElementById('previewBox');

  var corF   = v.corFundo           || 'rgba(106,13,173,0.15)';
  var corC   = v.corCard            || 'rgba(106,13,173,0.25)';
  var corTP  = v.corTextoPrincipal  || '#e9dcff';
  var corTS  = v.corTextoSecundario || '#d0baff';
  var corD   = v.corDestaque        || '#c084ff';
  var corB   = v.corBorda           || 'rgba(192,132,255,0.4)';
  var corS   = v.corSombra          || 'rgba(106,13,173,0.3)';
  var corB1  = v.corBotao1          || '#9b4dff';
  var corB2  = v.corBotao2          || '#6a0dad';
  var corTB  = v.corTextoBotao      || '#ffffff';
  var corSB  = v.corSombraBotao     || 'rgba(155,77,255,0.4)';
  var blur   = v.blur               || '20px';
  var radC   = v.radiusContainer    || '20px';
  var padC   = v.paddingContainer   || '2rem';
  var radCa  = v.radiusCard         || '16px';
  var padCa  = v.paddingCard        || '2rem';
  var padB   = v.paddingBotao       || '1rem 2rem';
  var radB   = v.radiusBotao        || '12px';
  var font   = v.fontFamilia        || 'Inter';
  var tamT   = v.tamanhoTitulo      || '2rem';
  var tamCT  = v.tamanhoCardTitulo  || '1.3rem';
  var velS   = v.velocidadeShine    || '3';
  var titulo = v.tituloProduto      || 'Meu Produto';
  var textoB = v.textoBotao         || 'Comprar Agora';

  var cards = [];
  if (v.card1Titulo) cards.push({ t: v.card1Titulo, c: v.card1Conteudo || '' });
  if (v.card2Titulo) cards.push({ t: v.card2Titulo, c: v.card2Conteudo || '' });
  if (v.card3Titulo) cards.push({ t: v.card3Titulo, c: v.card3Conteudo || '' });
  if (!cards.length) cards = [
    { t: '🎮 Detalhes', c: '<p style="color:' + corTS + '">Conteudo do card 1.</p>' },
    { t: '🌟 Beneficios', c: '<p style="color:' + corTS + '">Conteudo do card 2.</p>' }
  ];

  var cardsHtml = cards.map(function(ca) {
    return '<div style="background:' + corC + ';backdrop-filter:blur(25px);border:1px solid ' + corB + ';border-radius:' + radCa + ';padding:' + padCa + ';box-shadow:0 4px 20px ' + corS + ';margin-bottom:0;">'
      + '<h2 style="color:' + corTP + ';font-size:' + tamCT + ';font-weight:600;margin-bottom:1rem;">' + ca.t + '</h2>'
      + '<div>' + ca.c + '</div>'
    + '</div>';
  }).join('');

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<link href="https://fonts.googleapis.com/css2?family=' + encodeURIComponent(font) + ':wght@400;600;700&display=swap" rel="stylesheet">'
    + '<style>'
    + '*{box-sizing:border-box;margin:0;padding:0;}'
    + 'body{background:#0a0a0a;padding:20px;min-height:520px;}'
    + '@keyframes shine{to{background-position:200% center}}'
    + '@keyframes bbrilho{to{background-position:200% center}}'
    + '.wrap{font-family:"' + font + '",sans-serif;background:' + corF + ';backdrop-filter:blur(' + blur + ');border-radius:' + radC + ';border:1px solid rgba(255,255,255,.15);padding:' + padC + ';box-shadow:0 4px 30px ' + corS + ';display:flex;flex-direction:column;gap:1.5rem;}'
    + '.titulo{font-size:' + tamT + ';font-weight:700;text-align:center;margin-bottom:1rem;background:linear-gradient(to right,' + corTP + ' 20%,' + corD + ' 40%,' + corD + ' 60%,' + corTP + ' 80%);background-size:200% auto;color:transparent;background-clip:text;-webkit-background-clip:text;animation:shine ' + velS + 's linear infinite;}'
    + '.btn{display:block;text-align:center;background:linear-gradient(90deg,' + corB1 + ',' + corB2 + ',' + corB1 + ');background-size:200% auto;color:' + corTB + ';font-weight:600;text-transform:uppercase;letter-spacing:1px;padding:' + padB + ';border-radius:' + radB + ';text-decoration:none;box-shadow:0 4px 15px ' + corSB + ';animation:bbrilho 3s linear infinite;}'
    + '</style></head><body>'
    + '<div class="wrap">'
      + '<div class="titulo">' + titulo + '</div>'
      + cardsHtml
      + '<a class="btn" href="#">' + textoB + '</a>'
    + '</div>'
    + '</body></html>';

  var old = box.querySelector('iframe');
  if (old) old.remove();
  var iframe = document.createElement('iframe');
  iframe.style.cssText = 'width:100%;height:520px;border:none;display:block;border-radius:14px;';
  iframe.setAttribute('sandbox', 'allow-scripts');
  iframe.srcdoc = doc;
  box.appendChild(iframe);
}

// ── Modal ────────────────────────────────────────────────────
var modal   = document.getElementById('modal');
var codePre = document.getElementById('codePre');
var copyBtn = document.getElementById('copyBtn');
var curTab  = 'html';
var gen     = { html: '', css: '', js: '' };

document.getElementById('genBtn').onclick = function() {
  var v = getVals();
  if (!validate(v)) return;

  gen.html = process(BASE_HTML, v);
  gen.css  = process(BASE_CSS,  v);
  gen.js   = process(BASE_JS,   v);

  var firstFilled = ['html', 'css', 'js'].find(function(t) { return gen[t].length > 0; }) || 'html';

  document.querySelectorAll('.code-tab').forEach(function(t) {
    t.classList.toggle('filled', gen[t.dataset.tab].length > 0);
  });
  showTab(firstFilled);
  modal.classList.add('open');
};

function showTab(tab) {
  curTab = tab;
  document.querySelectorAll('.code-tab').forEach(function(t) { t.classList.toggle('active', t.dataset.tab === tab); });
  var code = gen[tab];
  if (!code) {
    codePre.innerHTML = '<div class="empty-state"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>Nenhum código ' + tab.toUpperCase() + ' para este componente.</div>';
    copyBtn.style.display = 'none';
    return;
  }
  codePre.textContent = code;
  copyBtn.style.display = 'inline-flex';
}

document.querySelectorAll('.code-tab').forEach(function(t) { t.onclick = function() { showTab(t.dataset.tab); }; });
document.getElementById('modalClose').onclick = function() { modal.classList.remove('open'); };
modal.onclick = function(e) { if (e.target === modal) modal.classList.remove('open'); };
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') modal.classList.remove('open'); });

copyBtn.onclick = function() {
  navigator.clipboard.writeText(gen[curTab]).then(function() {
    copyBtn.classList.add('copied');
    copyBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copiado!';
    setTimeout(function() {
      copyBtn.classList.remove('copied');
      copyBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copiar';
    }, 2000);
  });
};

// ── Init ─────────────────────────────────────────────────────
renderPreview();