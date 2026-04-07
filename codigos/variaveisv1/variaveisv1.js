// =============================================================
//  OG! — verificado.js
// =============================================================

const COMPONENT = {
  title:       'Selo Verificado',
  description: 'Adiciona um selo de verificado ao lado do nome da loja no header. Imagem, tamanho, opacidade e filtro customizaveis. Aguarda o elemento aparecer via MutationObserver.',
  tags:        ['Verificado', 'Badge', 'Header', 'JS', 'Gratis'],

  fields: [
    // Seletor
    { id: 'seletorNomeLoja', label: 'Seletor CSS do nome da loja', type: 'text',
      placeholder: 'Ex: header a[href="/"] span',
      default:     'header a[href="/"] span',
      required: true },

    // Imagem
    { id: 'urlImagem', label: 'URL da imagem do selo', type: 'text',
      placeholder: 'https://...',
      default: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Verification-badge.png',
      required: true },
    { id: 'textoAlt', label: 'Texto alternativo (alt)', type: 'text',
      placeholder: 'Ex: Verificado', default: 'Verificado', required: false },

    // Tamanho e posicao
    { id: 'tamanho',    label: 'Tamanho (largura e altura)', type: 'text', placeholder: 'Ex: 20px', default: '20px', required: true  },
    { id: 'marginLeft', label: 'Margem esquerda',            type: 'text', placeholder: 'Ex: 4px',  default: '4px',  required: false },
    { id: 'gap',        label: 'Gap entre nome e selo',      type: 'text', placeholder: 'Ex: 4px',  default: '4px',  required: false },

    // Efeitos
    { id: 'opacidade', label: 'Opacidade (0 a 1)',  type: 'text', placeholder: 'Ex: 1',    default: '1',    required: false },
    { id: 'filtro',    label: 'Filter CSS (opcional)', type: 'text',
      placeholder: 'Ex: drop-shadow(0 0 4px #1da1f2)',
      default: 'none', required: false },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = '';
const BASE_JS_B64   = 'KGZ1bmN0aW9uICgpIHsNCiAgICAndXNlIHN0cmljdCc7DQoNCiAgICBjb25zdCBDT05GSUcgPSB7DQogICAgICAgIGJhZGdlSWQ6ICdndXN0YS12ZXJpZmllZC1iYWRnZScsDQogICAgICAgIHN0eWxlSWQ6ICdndXN0YS12ZXJpZmllZC1zdHlsZXMnLA0KICAgICAgICB0YXJnZXRTZWxlY3RvcjogJy5zYy1kOTJjNWEzNS0yLmtQdWFFYSBzcGFuJw0KICAgIH07DQoNCiAgICBmdW5jdGlvbiBpbmplY3RTdHlsZXMoKSB7DQogICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDT05GSUcuc3R5bGVJZCkpIHJldHVybjsNCg0KICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7DQogICAgICAgIHN0eWxlLmlkID0gQ09ORklHLnN0eWxlSWQ7DQogICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gYA0KICAgICAgLmd1c3RhLXZlcmlmaWVkLW5hbWUgew0KICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50Ow0KICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7DQogICAgICAgIGdhcDogNnB4ICFpbXBvcnRhbnQ7DQogICAgICB9DQoNCiAgICAgIC5ndXN0YS12ZXJpZmllZC1iYWRnZSB7DQogICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsNCiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7DQogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7DQogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOw0KICAgICAgICB3aWR0aDogMjBweDsNCiAgICAgICAgaGVpZ2h0OiAyMHB4Ow0KICAgICAgICBtaW4td2lkdGg6IDIwcHg7DQogICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsNCiAgICAgICAgZmxleC1zaHJpbms6IDA7DQogICAgICAgIGJhY2tncm91bmQ6ICMzODk3ZjA7DQogICAgICAgIGJveC1zaGFkb3c6DQogICAgICAgICAgMCAwIDEwcHggcmdiYSg1NiwgMTUxLCAyNDAsIDAuMzApLA0KICAgICAgICAgIDAgMCAxOHB4IHJnYmEoNTYsIDE1MSwgMjQwLCAwLjE2KTsNCiAgICAgIH0NCg0KICAgICAgLmd1c3RhLXZlcmlmaWVkLWJhZGdlIHN2ZyB7DQogICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsNCiAgICAgICAgdG9wOiA1MCU7DQogICAgICAgIGxlZnQ6IDUwJTsNCiAgICAgICAgd2lkdGg6IDEycHg7DQogICAgICAgIGhlaWdodDogMTJweDsNCiAgICAgICAgZGlzcGxheTogYmxvY2s7DQogICAgICAgIG92ZXJmbG93OiB2aXNpYmxlOw0KICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsNCiAgICAgIH0NCg0KICAgICAgLmd1c3RhLXZlcmlmaWVkLWJhZGdlIHBhdGggew0KICAgICAgICBzdHJva2U6ICNmZmZmZmY7DQogICAgICAgIHN0cm9rZS13aWR0aDogMy42Ow0KICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7DQogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7DQogICAgICAgIGZpbGw6IG5vbmU7DQogICAgICB9DQogICAgYDsNCg0KICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTsNCiAgICB9DQoNCiAgICBmdW5jdGlvbiBjcmVhdGVCYWRnZSgpIHsNCiAgICAgICAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7DQogICAgICAgIGJhZGdlLmlkID0gQ09ORklHLmJhZGdlSWQ7DQogICAgICAgIGJhZGdlLmNsYXNzTmFtZSA9ICdndXN0YS12ZXJpZmllZC1iYWRnZSc7DQogICAgICAgIGJhZGdlLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnVmVyaWZpY2FkbycpOw0KICAgICAgICBiYWRnZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnVmVyaWZpY2FkbycpOw0KDQogICAgICAgIGJhZGdlLmlubmVySFRNTCA9IGANCiAgICAgIDxzdmcNCiAgICAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIg0KICAgICAgICB2aWV3Qm94PSIwIDAgMjQgMjQiDQogICAgICAgIGFyaWEtaGlkZGVuPSJ0cnVlIg0KICAgICAgPg0KICAgICAgICA8cGF0aCBkPSJNNyAxMi41TDEwLjMgMTUuOEwxNyA4LjgiPjwvcGF0aD4NCiAgICAgIDwvc3ZnPg0KICAgIGA7DQoNCiAgICAgICAgcmV0dXJuIGJhZGdlOw0KICAgIH0NCg0KICAgIGZ1bmN0aW9uIGFwcGx5QmFkZ2UoKSB7DQogICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05GSUcudGFyZ2V0U2VsZWN0b3IpOw0KICAgICAgICBpZiAoIW5hbWVFbGVtZW50KSByZXR1cm47DQogICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDT05GSUcuYmFkZ2VJZCkpIHJldHVybjsNCg0KICAgICAgICBuYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdndXN0YS12ZXJpZmllZC1uYW1lJyk7DQogICAgICAgIG5hbWVFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUJhZGdlKCkpOw0KICAgIH0NCg0KICAgIGZ1bmN0aW9uIG9ic2VydmVDaGFuZ2VzKCkgew0KICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHsNCiAgICAgICAgICAgIGFwcGx5QmFkZ2UoKTsNCiAgICAgICAgfSk7DQoNCiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7DQogICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsDQogICAgICAgICAgICBzdWJ0cmVlOiB0cnVlDQogICAgICAgIH0pOw0KICAgIH0NCg0KICAgIGZ1bmN0aW9uIGluaXQoKSB7DQogICAgICAgIGluamVjdFN0eWxlcygpOw0KICAgICAgICBhcHBseUJhZGdlKCk7DQogICAgICAgIHNldFRpbWVvdXQoYXBwbHlCYWRnZSwgNDAwKTsNCiAgICAgICAgc2V0VGltZW91dChhcHBseUJhZGdlLCAxMDAwKTsNCiAgICAgICAgb2JzZXJ2ZUNoYW5nZXMoKTsNCiAgICB9DQoNCiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7DQogICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCwgeyBvbmNlOiB0cnVlIH0pOw0KICAgIH0gZWxzZSB7DQogICAgICAgIGluaXQoKTsNCiAgICB9DQp9KSgpOw0K';

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

  var url      = v.urlImagem    || 'https://upload.wikimedia.org/wikipedia/commons/1/12/Verification-badge.png';
  var alt      = v.textoAlt     || 'Verificado';
  var tamanho  = v.tamanho      || '20px';
  var marginL  = v.marginLeft   || '4px';
  var gap      = v.gap          || '4px';
  var opacity  = v.opacidade    || '1';
  var filtro   = v.filtro       || 'none';

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>'
    + '*{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,sans-serif;}'
    + 'body{background:#0a0a0a;min-height:480px;display:flex;flex-direction:column;}'
    + '.header{background:#111;border-bottom:1px solid #1e1e1e;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;}'
    + '.store-name{display:inline-flex;align-items:center;gap:' + gap + ';color:#fff;font-size:1rem;font-weight:700;text-decoration:none;}'
    + '.badge{width:' + tamanho + ';height:' + tamanho + ';display:inline-block;flex-shrink:0;vertical-align:middle;margin-left:' + marginL + ';filter:' + filtro + ';opacity:' + opacity + ';}'
    + '.nav-links{display:flex;gap:20px;}'
    + '.nav-links a{color:#666;font-size:.85rem;text-decoration:none;}'
    + '.content{flex:1;display:flex;align-items:center;justify-content:center;color:#333;font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;}'
    + '.arrow{margin-top:24px;padding:16px 24px;background:#111;border-top:1px solid #1e1e1e;display:flex;align-items:center;gap:10px;}'
    + '.arrow-label{color:#555;font-size:.75rem;}'
    + '.arrow-badge{display:inline-flex;align-items:center;gap:' + gap + ';background:#1a1a1a;border:1px solid #2a2a2a;border-radius:8px;padding:8px 14px;color:#fff;font-size:.9rem;font-weight:600;}'
    + '</style></head><body>'
    + '<div class="header">'
      + '<a class="store-name">'
        + 'Nome da Loja'
        + '<img class="badge" src="' + url + '" alt="' + alt + '">'
      + '</a>'
      + '<div class="nav-links">'
        + '<a>Produtos</a><a>Contato</a><a>Carrinho</a>'
      + '</div>'
    + '</div>'
    + '<div class="content">Conteudo da loja</div>'
    + '<div class="arrow">'
      + '<span class="arrow-label">👆 Assim fica o nome da loja com o selo:</span>'
      + '<span class="arrow-badge">Nome da Loja <img src="' + url + '" alt="' + alt + '" style="width:' + tamanho + ';height:' + tamanho + ';filter:' + filtro + ';opacity:' + opacity + ';flex-shrink:0;"></span>'
    + '</div>'
    + '</body></html>';

  var old = box.querySelector('iframe');
  if (old) old.remove();
  var iframe = document.createElement('iframe');
  iframe.style.cssText = 'width:100%;height:480px;border:none;display:block;border-radius:14px;';
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