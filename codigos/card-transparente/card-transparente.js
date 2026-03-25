// =============================================================
//  OG! — card-transparente.js
// =============================================================

const COMPONENT = {
  title:       'Card Transparente (Glassmorphism)',
  description: 'Card com efeito glassmorphism — fundo translucido, blur, borda sutil e gradiente radial. Ideal para hero sections, destaques de produto e layouts escuros.',
  tags:        ['Card', 'Glass', 'Glassmorphism', 'CSS', 'Gratis'],

  fields: [
    // Conteudo
    { id: 'cardTitulo',    label: 'Titulo do Card',          type: 'text',  placeholder: 'Ex: Produto Premium', default: 'Produto Premium',         required: true  },
    { id: 'cardDescricao', label: 'Descricao',                type: 'text',  placeholder: 'Texto descritivo...', default: 'Qualidade e design em um unico produto.', required: false },
    { id: 'cardBadge',     label: 'Badge / Tag',             type: 'text',  placeholder: 'Ex: NOVO',            default: 'NOVO',                    required: false },
    { id: 'cardBtnTexto',  label: 'Texto do Botao',          type: 'text',  placeholder: 'Ex: Ver mais',        default: 'Ver mais',                required: false },
    { id: 'cardBtnLink',   label: 'Link do Botao',           type: 'text',  placeholder: 'https://...',         default: '#',                       required: false },

    // Dimensoes
    { id: 'cardWidth',        label: 'Largura do card',          type: 'text', placeholder: 'Ex: 360px',     default: '360px',           required: true  },
    { id: 'cardPadding',      label: 'Padding interno',          type: 'text', placeholder: 'Ex: 28px 32px', default: '28px 32px',       required: false },
    { id: 'cardBorderRadius', label: 'Border Radius',            type: 'text', placeholder: 'Ex: 20px',      default: '20px',            required: true  },

    // Glassmorphism
    { id: 'glassBlur',        label: 'Intensidade do blur (px)', type: 'text', placeholder: 'Ex: 12',        default: '12',              required: true  },
    { id: 'glassBgLight',     label: 'Fundo claro — radial opacity', type: 'text', placeholder: 'Ex: 0.40', default: '0.40',             required: false },
    { id: 'glassBgBase',      label: 'Fundo base opacity (topo)',    type: 'text', placeholder: 'Ex: 0.15', default: '0.15',             required: false },
    { id: 'glassBgBottom',    label: 'Fundo base opacity (baixo)',   type: 'text', placeholder: 'Ex: 0.05', default: '0.05',             required: false },
    { id: 'glassBorderAlpha', label: 'Borda opacity',               type: 'text', placeholder: 'Ex: 0.25', default: '0.25',             required: false },
    { id: 'glassShadowAlpha', label: 'Sombra externa opacity',      type: 'text', placeholder: 'Ex: 0.15', default: '0.15',             required: false },
    { id: 'glassInsetAlpha',  label: 'Reflexo interno opacity',     type: 'text', placeholder: 'Ex: 0.30', default: '0.30',             required: false },

    // Cores
    { id: 'corFundoPagina', label: 'Cor de fundo da pagina',  type: 'color', default: '#0f0f14' },
    { id: 'corDestaque',    label: 'Cor de destaque',         type: 'color', default: '#7c6aff' },
    { id: 'corTitulo',      label: 'Cor do titulo',           type: 'color', default: '#ffffff' },
    { id: 'corTexto',       label: 'Cor do texto',            type: 'color', default: '#a0a0b0' },
    { id: 'corBadgeBg',     label: 'Cor de fundo do badge',   type: 'color', default: '#7c6aff' },
    { id: 'corBadgeTexto',  label: 'Cor do texto do badge',   type: 'color', default: '#ffffff' },
    { id: 'corBtnBg',       label: 'Cor do botao',            type: 'color', default: '#7c6aff' },
    { id: 'corBtnTexto',    label: 'Cor do texto do botao',   type: 'color', default: '#ffffff' },
  ],
};

// ── Templates ─────────────────────────────────────────────────
const BASE_HTML = `<div class="og-glass-wrap">
  <div class="og-glass-card">
    {{badge}}
    <h3 class="og-glass-title">{{cardTitulo}}</h3>
    {{descricao}}
    {{botao}}
  </div>
</div>`;

const BASE_CSS = `.og-glass-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 280px;
  padding: 32px 16px;
  background: {{corFundoPagina}};
}

.og-glass-card {
  width: {{cardWidth}};
  max-width: 100%;
  padding: {{cardPadding}};
  border-radius: {{cardBorderRadius}};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 14px;

  /* Glassmorphism */
  background:
    radial-gradient(120% 140% at 10% 0%, rgba(255,255,255,{{glassBgLight}}) 0%, transparent 55%),
    linear-gradient(135deg, rgba(255,255,255,{{glassBgBase}}) 0%, rgba(255,255,255,{{glassBgBottom}}) 100%);
  border: 1px solid rgba(255,255,255,{{glassBorderAlpha}});
  box-shadow:
    0 8px 18px rgba(0,0,0,{{glassShadowAlpha}}),
    inset 0 1px 0 rgba(255,255,255,{{glassInsetAlpha}});
  backdrop-filter: blur({{glassBlur}}px);
  -webkit-backdrop-filter: blur({{glassBlur}}px);

  transition: transform .25s ease, box-shadow .25s ease;
}

.og-glass-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 18px 36px rgba(0,0,0,{{glassShadowAlpha}}),
    inset 0 1px 0 rgba(255,255,255,{{glassInsetAlpha}});
}

.og-glass-badge {
  display: inline-block;
  width: fit-content;
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;
  background: {{corBadgeBg}};
  color: {{corBadgeTexto}};
}

.og-glass-title {
  margin: 0;
  font-size: clamp(1.25rem, 2vw, 1.7rem);
  font-weight: 800;
  color: {{corTitulo}};
  line-height: 1.15;
}

.og-glass-desc {
  margin: 0;
  font-size: .9rem;
  color: {{corTexto}};
  line-height: 1.6;
}

.og-glass-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 11px 24px;
  border-radius: 12px;
  background: {{corBtnBg}};
  color: {{corBtnTexto}};
  font-size: .85rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: .06em;
  text-transform: uppercase;
  transition: filter .2s, transform .2s;
  margin-top: 4px;
}

.og-glass-btn:hover {
  filter: brightness(1.15);
  transform: translateY(-2px);
}`;

const BASE_JS = ``;

// ── Helpers ───────────────────────────────────────────────────
function process(tpl, vals) {
  var badgeHtml = vals.cardBadge
    ? '<span class="og-glass-badge">' + vals.cardBadge + '</span>'
    : '';
  var descHtml = vals.cardDescricao
    ? '<p class="og-glass-desc">' + vals.cardDescricao + '</p>'
    : '';
  var btnHtml = vals.cardBtnTexto
    ? '<a class="og-glass-btn" href="' + vals.cardBtnLink + '">' + vals.cardBtnTexto + '</a>'
    : '';

  var r = tpl
    .replace('{{badge}}', badgeHtml)
    .replace('{{descricao}}', descHtml)
    .replace('{{botao}}', btnHtml);

  Object.keys(vals).forEach(function(k) {
    r = r.split('{{' + k + '}}').join(vals[k]);
  });
  return r;
}

function getVals() {
  var v = {};
  COMPONENT.fields.forEach(function(f) {
    var el = document.getElementById('f_' + f.id);
    if (!el) return;
    if (f.type === 'color') {
      var hex = document.getElementById('fhex_' + f.id);
      v[f.id] = hex ? hex.value : el.value;
    } else {
      v[f.id] = el.value.trim() || f.default || '';
    }
  });
  return v;
}

function validate(v) {
  var ok = true;
  COMPONENT.fields.forEach(function(f) {
    if (!f.required) return;
    var el = document.getElementById('f_' + f.id);
    var errEl = document.getElementById('ferr_' + f.id);
    var empty = !v[f.id];
    if (el) el.classList.toggle('has-err', empty);
    if (errEl) errEl.classList.toggle('show', empty);
    if (empty) ok = false;
  });
  return ok;
}

// ── Render Fields ─────────────────────────────────────────────
(function renderFields() {
  document.getElementById('bcTitle').textContent  = COMPONENT.title;
  document.getElementById('compH1').textContent   = COMPONENT.title;
  document.getElementById('compDesc').textContent = COMPONENT.description;

  var tagsEl = document.getElementById('compTags');
  COMPONENT.tags.forEach(function(t) {
    var s = document.createElement('span');
    s.className = 'ctag' + (t === 'Gratis' ? ' hl' : '');
    s.textContent = t;
    tagsEl.appendChild(s);
  });

  var wrap = document.getElementById('fieldsWrap');
  COMPONENT.fields.forEach(function(f) {
    var g = document.createElement('div');
    g.className = 'field-group';

    var lbl = document.createElement('label');
    lbl.className = 'field-lbl';
    lbl.setAttribute('for', 'f_' + f.id);
    lbl.textContent = f.label;
    g.appendChild(lbl);

    if (f.type === 'color') {
      var cw = document.createElement('div');
      cw.className = 'color-wrap';
      cw.onclick = function() { document.getElementById('fcol_' + f.id).click(); };

      var swatch = document.createElement('div');
      swatch.className = 'color-swatch';
      swatch.id = 'fswatch_' + f.id;
      swatch.style.background = f.default;

      var hex = document.createElement('input');
      hex.type = 'text';
      hex.className = 'color-hex';
      hex.id = 'fhex_' + f.id;
      hex.value = f.default;
      hex.maxLength = 7;

      var native = document.createElement('input');
      native.type = 'color';
      native.className = 'color-native';
      native.id = 'fcol_' + f.id;
      native.value = f.default;

      native.oninput = function() {
        swatch.style.background = native.value;
        hex.value = native.value;
        renderPreview();
      };
      hex.oninput = function() {
        var val = hex.value.startsWith('#') ? hex.value : '#' + hex.value;
        if (/^#[0-9a-fA-F]{6}$/.test(val)) {
          native.value = val;
          swatch.style.background = val;
          renderPreview();
        }
      };

      cw.appendChild(swatch);
      cw.appendChild(hex);
      cw.appendChild(native);
      g.appendChild(cw);
    } else {
      var inp = document.createElement('input');
      inp.type = 'text';
      inp.className = 'field-inp';
      inp.id = 'f_' + f.id;
      inp.placeholder = f.placeholder || '';
      inp.value = f.default || '';
      inp.oninput = function() { renderPreview(); };
      g.appendChild(inp);

      var err = document.createElement('span');
      err.className = 'field-err';
      err.id = 'ferr_' + f.id;
      err.textContent = 'Campo obrigatorio';
      g.appendChild(err);
    }

    wrap.appendChild(g);
  });
})();

// ── Preview ───────────────────────────────────────────────────
function renderPreview() {
  var v = getVals();
  var box = document.getElementById('previewBox');

  var htmlSnip = process(BASE_HTML, v);
  var cssSnip  = process(BASE_CSS, v);

  var doc = '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>*{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,sans-serif;}'
    + 'body{background:' + v.corFundoPagina + ';display:flex;align-items:center;justify-content:center;min-height:460px;}'
    + cssSnip
    + '</style></head><body>'
    + htmlSnip
    + '</body></html>';

  var old = box.querySelector('iframe');
  if (old) old.remove();
  var iframe = document.createElement('iframe');
  iframe.style.cssText = 'width:100%;height:460px;border:none;display:block;border-radius:14px;';
  iframe.setAttribute('sandbox', 'allow-scripts');
  iframe.srcdoc = doc;
  box.appendChild(iframe);
}

// ── Modal ─────────────────────────────────────────────────────
var modal   = document.getElementById('modal');
var codePre = document.getElementById('codePre');
var copyBtn = document.getElementById('copyBtn');
var curTab  = 'html';
var gen     = { html: '', css: '', js: '' };

document.getElementById('genBtn').onclick = function() {
  var v = getVals();
  if (!validate(v)) return;

  gen.html = process(BASE_HTML, v);
  gen.css  = process(BASE_CSS, v);
  gen.js   = BASE_JS;

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

// ── Cursor ────────────────────────────────────────────────────
(function() {
  var c = document.getElementById('ogC');
  var r = document.getElementById('ogR');
  if (!c || !r) return;
  var mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', function(e) {
    mx = e.clientX; my = e.clientY;
    c.style.opacity = '1'; r.style.opacity = '1';
    c.style.left = mx + 'px'; c.style.top = my + 'px';
  });
  (function loop() {
    rx += (mx - rx) * .12; ry += (my - ry) * .12;
    r.style.left = rx + 'px'; r.style.top = ry + 'px';
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a,button,input').forEach(function(el) {
    el.addEventListener('mouseenter', function() { c.style.width = '20px'; c.style.height = '20px'; });
    el.addEventListener('mouseleave', function() { c.style.width = '12px'; c.style.height = '12px'; });
  });
})();

// ── Init ─────────────────────────────────────────────────────
renderPreview();