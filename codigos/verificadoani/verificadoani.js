// =============================================================
//  OG! — verificadoani.js  (Verificado Animado / GIF)
// =============================================================

const COMPONENT = {
  title:       'Verificado Animado (GIF)',
  description: 'Adiciona um GIF animado ao lado do nome da loja no header. Qualquer GIF ou imagem funciona — cole a URL e customize o tamanho e posicao.',
  tags:        ['Verificado', 'GIF', 'Animado', 'Header', 'JS', 'Gratis'],

  fields: [
    { id: 'seletorNomeLoja', label: '🎯 Seletor CSS do nome da loja', type: 'text',
      placeholder: 'Ex: header a[href="/"] span',
      default: 'header a[href="/"] span',
      required: true },

    { id: 'urlGif', label: 'URL do GIF / Imagem', type: 'text',
      placeholder: 'https://media.tenor.com/... ou qualquer URL de imagem',
      default: 'https://media.tenor.com/I9ja6blbnOcAAAAj/good-night.gif',
      required: true },

    { id: 'textoAlt', label: 'Texto alternativo (alt)', type: 'text',
      placeholder: 'Ex: Verificado', default: 'Verificado', required: false },

    { id: 'largura',    label: 'Largura',        type: 'text', placeholder: 'Ex: 25px', default: '25px', required: true  },
    { id: 'altura',     label: 'Altura',         type: 'text', placeholder: 'Ex: 40px', default: '40px', required: true  },
    { id: 'marginLeft', label: 'Margem esquerda',type: 'text', placeholder: 'Ex: 1px',  default: '1px',  required: false },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = '';
const BASE_JS_B64   = 'KGZ1bmN0aW9uICgpIHsKICAndXNlIHN0cmljdCc7CgogIGlmICh3aW5kb3cub2dWZXJpZmljYWRvQW5pSW5pY2lhZG8pIHJldHVybjsKICB3aW5kb3cub2dWZXJpZmljYWRvQW5pSW5pY2lhZG8gPSB0cnVlOwoKICB2YXIgU0VMRUNUT1IgPSAne3tzZWxldG9yTm9tZUxvamF9fSc7CiAgdmFyIEdJRl9VUkwgID0gJ3t7dXJsR2lmfX0nOwogIHZhciBBTFQgICAgICA9ICd7e3RleHRvQWx0fX0nOwogIHZhciBMQVJHVVJBICA9ICd7e2xhcmd1cmF9fSc7CiAgdmFyIEFMVFVSQSAgID0gJ3t7YWx0dXJhfX0nOwogIHZhciBNQVJHSU4gICA9ICd7e21hcmdpbkxlZnR9fSc7CgogIGZ1bmN0aW9uIG9nQWRkQmFkZ2UoKSB7CiAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SKTsKICAgIGlmICghZWwgfHwgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvZy1iYWRnZS1hbmktYXBsaWNhZG8nKSkgcmV0dXJuOwoKICAgIHZhciBiYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOwogICAgYmFkZ2Uuc3JjID0gR0lGX1VSTDsKICAgIGJhZGdlLmFsdCA9IEFMVDsKICAgIGJhZGdlLnN0eWxlLmNzc1RleHQgPQogICAgICAnd2lkdGg6JyArIExBUkdVUkEgKyAnOycKICAgICAgKyAnaGVpZ2h0OicgKyBBTFRVUkEgKyAnOycKICAgICAgKyAndmVydGljYWwtYWxpZ246bWlkZGxlOycKICAgICAgKyAnbWFyZ2luLWxlZnQ6JyArIE1BUkdJTiArICc7JwogICAgICArICdkaXNwbGF5OmlubGluZS1ibG9jazsnCiAgICAgICsgJ2ZsZXgtc2hyaW5rOjA7JzsKCiAgICBlbC5hcHBlbmRDaGlsZChiYWRnZSk7CiAgICBlbC5jbGFzc0xpc3QuYWRkKCdvZy1iYWRnZS1hbmktYXBsaWNhZG8nKTsKICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnOwogICAgZWwuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInOwogIH0KCiAgdmFyIG9icyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKCkgeyBvZ0FkZEJhZGdlKCk7IH0pOwogIG9icy5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pOwogIG9nQWRkQmFkZ2UoKTsKfSkoKTs=';

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

  var gifUrl  = v.urlGif      || 'https://media.tenor.com/I9ja6blbnOcAAAAj/good-night.gif';
  var alt     = v.textoAlt    || 'Verificado';
  var largura = v.largura     || '25px';
  var altura  = v.altura      || '40px';
  var margin  = v.marginLeft  || '1px';

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>'
    + '*{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,sans-serif;}'
    + 'body{background:#0a0a0a;min-height:480px;display:flex;flex-direction:column;}'
    + '.header{background:#111;border-bottom:1px solid #1e1e1e;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;}'
    + '.store{display:inline-flex;align-items:center;color:#fff;font-size:1rem;font-weight:700;gap:4px;}'
    + '.gif{width:' + largura + ';height:' + altura + ';display:inline-block;flex-shrink:0;vertical-align:middle;margin-left:' + margin + ';object-fit:contain;}'
    + '.nav-links{display:flex;gap:20px;}'
    + '.nav-links a{color:#666;font-size:.85rem;text-decoration:none;}'
    + '.content{flex:1;display:flex;align-items:center;justify-content:center;color:#333;font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;}'
    + '.demo{padding:16px 24px;background:#111;border-top:1px solid #1e1e1e;display:flex;align-items:center;gap:12px;}'
    + '.demo-label{color:#555;font-size:.75rem;}'
    + '.demo-store{display:inline-flex;align-items:center;background:#1a1a1a;border:1px solid #2a2a2a;border-radius:8px;padding:8px 14px;color:#fff;font-size:.9rem;font-weight:600;}'
    + '</style></head><body>'
    + '<div class="header">'
      + '<span class="store">Nome da Loja<img class="gif" src="' + gifUrl + '" alt="' + alt + '"></span>'
      + '<div class="nav-links"><a>Produtos</a><a>Contato</a></div>'
    + '</div>'
    + '<div class="content">Conteudo da loja</div>'
    + '<div class="demo">'
      + '<span class="demo-label">👆 Nome da loja com o GIF:</span>'
      + '<span class="demo-store">Nome da Loja<img style="width:' + largura + ';height:' + altura + ';margin-left:' + margin + ';object-fit:contain;flex-shrink:0;" src="' + gifUrl + '" alt="' + alt + '"></span>'
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