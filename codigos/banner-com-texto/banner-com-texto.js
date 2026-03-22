// =============================================================
//  OG! — banner-imagem.js
// =============================================================

const COMPONENT = {
  title:       'Banner Imagem com Texto',
  description: 'Banner simples com imagem de fundo, overlay customizavel e texto centralizado (titulo + descricao). Inserido via MutationObserver aguardando o seletor CSS.',
  tags:        ['Banner', 'Imagem', 'Texto', 'CSS', 'JS', 'Gratis'],

  fields: [
    // Conteudo
    { id: 'titulo',    label: 'Titulo',    type: 'text', placeholder: 'Ex: Titulo do Banner', default: 'Titulo do Banner',                            required: true  },
    { id: 'descricao', label: 'Descricao (opcional)', type: 'text', placeholder: 'Ex: Um subtitulo cativante.', default: 'Um subtitulo cativante sobre seus produtos.', required: false },

    // Imagem
    { id: 'imagemUrl',     label: 'URL da Imagem de Fundo', type: 'text', placeholder: 'https://...', default: 'https://via.placeholder.com/1200x400/555/FFFFFF?text=Imagem+de+Fundo', required: true  },
    { id: 'imagemPosicao', label: 'Posicao da Imagem',      type: 'text', placeholder: 'Ex: center', default: 'center', required: false },

    // Layout
    { id: 'maxWidth',          label: 'Largura maxima',          type: 'text', placeholder: 'Ex: 1200px', default: '1200px', required: true  },
    { id: 'maxWidthContent',   label: 'Largura maxima do texto', type: 'text', placeholder: 'Ex: 700px',  default: '700px',  required: true  },
    { id: 'altura',            label: 'Altura do banner',        type: 'text', placeholder: 'Ex: 400px',  default: '400px',  required: true  },
    { id: 'margin',            label: 'Margin',                  type: 'text', placeholder: 'Ex: 20px auto', default: '20px auto', required: true },
    { id: 'borderRadius',      label: 'Border Radius',           type: 'text', placeholder: 'Ex: 12px',   default: '12px',   required: true  },
    { id: 'espacoAbaixoTitulo',label: 'Espaco abaixo do titulo', type: 'text', placeholder: 'Ex: 15px',   default: '15px',   required: false },

    // Seletor
    { id: 'seletorInsercao', label: 'Seletor CSS de insercao', type: 'text', placeholder: 'Ex: .sc-bce61202-0.eqzQsx', default: '.sc-bce61202-0.eqzQsx', required: true },

    // Cores
    { id: 'corOverlay',    label: 'Cor do Overlay (rgba)',     type: 'text',  placeholder: 'Ex: rgba(0,0,0,0.5)', default: 'rgba(0,0,0,0.5)', required: false },
    { id: 'corTitulo',     label: 'Cor do Titulo',             type: 'color', default: '#ffffff' },
    { id: 'corDescricao',  label: 'Cor da Descricao',          type: 'color', default: '#dddddd' },

    // Tipografia
    { id: 'tamanhoTitulo',  label: 'Tamanho do Titulo',    type: 'text', placeholder: 'Ex: 2.8rem', default: '2.8rem', required: true  },
    { id: 'pesoTitulo',     label: 'Peso do Titulo',        type: 'text', placeholder: 'Ex: 700',    default: '700',    required: false },
    { id: 'sombraTitulo',   label: 'Sombra do Titulo',      type: 'text', placeholder: '0 2px 4px rgba(0,0,0,0.3)', default: '0 2px 4px rgba(0,0,0,0.3)', required: false },
    { id: 'tamanhoDescricao',label: 'Tamanho da Descricao', type: 'text', placeholder: 'Ex: 1.2rem', default: '1.2rem', required: false },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = 'Lm9nLWltZy1iYW5uZXIgewogIHBvc2l0aW9uOiByZWxhdGl2ZTsKICB3aWR0aDogMTAwJTsKICBtYXgtd2lkdGg6IHt7bWF4V2lkdGh9fTsKICBtYXJnaW46IHt7bWFyZ2lufX07CiAgaGVpZ2h0OiB7e2FsdHVyYX19OwogIGJhY2tncm91bmQtaW1hZ2U6IHVybCgne3tpbWFnZW1Vcmx9fScpOwogIGJhY2tncm91bmQtc2l6ZTogY292ZXI7CiAgYmFja2dyb3VuZC1wb3NpdGlvbjoge3tpbWFnZW1Qb3NpY2FvfX07CiAgYm9yZGVyLXJhZGl1czoge3tib3JkZXJSYWRpdXN9fTsKICBvdmVyZmxvdzogaGlkZGVuOwogIGRpc3BsYXk6IGZsZXg7CiAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgcGFkZGluZzogMjBweDsKICBjb2xvcjogd2hpdGU7Cn0KLm9nLWltZy1iYW5uZXI6OmJlZm9yZSB7CiAgY29udGVudDogJyc7CiAgcG9zaXRpb246IGFic29sdXRlOwogIHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsKICBiYWNrZ3JvdW5kLWNvbG9yOiB7e2Nvck92ZXJsYXl9fTsKICB6LWluZGV4OiAxOwp9Ci5vZy1pbWctYmFubmVyLWNvbnRlbnQgewogIHBvc2l0aW9uOiByZWxhdGl2ZTsKICB6LWluZGV4OiAyOwogIG1heC13aWR0aDoge3ttYXhXaWR0aENvbnRlbnR9fTsKfQoub2ctaW1nLWJhbm5lci1jb250ZW50IGgxIHsKICBjb2xvcjoge3tjb3JUaXR1bG99fSAhaW1wb3J0YW50OwogIGZvbnQtc2l6ZToge3t0YW1hbmhvVGl0dWxvfX07CiAgZm9udC13ZWlnaHQ6IHt7cGVzb1RpdHVsb319OwogIG1hcmdpbjogMCAwIHt7ZXNwYWNvQWJhaXhvVGl0dWxvfX0gMDsKICB0ZXh0LXNoYWRvdzoge3tzb21icmFUaXR1bG99fTsKfQoub2ctaW1nLWJhbm5lci1jb250ZW50IHAgewogIGNvbG9yOiB7e2NvckRlc2NyaWNhb319ICFpbXBvcnRhbnQ7CiAgZm9udC1zaXplOiB7e3RhbWFuaG9EZXNjcmljYW99fTsKICBtYXJnaW46IDA7CiAgbGluZS1oZWlnaHQ6IDEuNjsKfQpAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsKICAub2ctaW1nLWJhbm5lci1jb250ZW50IGgxIHsgZm9udC1zaXplOiAycmVtOyB9CiAgLm9nLWltZy1iYW5uZXItY29udGVudCBwICB7IGZvbnQtc2l6ZTogMXJlbTsgfQp9';
const BASE_JS_B64   = 'KGZ1bmN0aW9uKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgaWYgKHdpbmRvdy5vZ0ltZ0Jhbm5lckluaWNpYWxpemFkbykgcmV0dXJuOwogIHdpbmRvdy5vZ0ltZ0Jhbm5lckluaWNpYWxpemFkbyA9IHRydWU7CgogIHZhciBvZ0NTUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7CiAgb2dDU1MuaWQgPSAnb2ctaW1nLWJhbm5lci1zdHlsZSc7CiAgb2dDU1MudGV4dENvbnRlbnQgPQogICAgJy5vZy1pbWctYmFubmVyeycKICAgICAgKyAncG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTttYXgtd2lkdGg6e3ttYXhXaWR0aH19O21hcmdpbjp7e21hcmdpbn19O2hlaWdodDp7e2FsdHVyYX19OycKICAgICAgKyAnYmFja2dyb3VuZC1pbWFnZTp1cmwoInt7aW1hZ2VtVXJsfX0iKTtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7YmFja2dyb3VuZC1wb3NpdGlvbjp7e2ltYWdlbVBvc2ljYW99fTsnCiAgICAgICsgJ2JvcmRlci1yYWRpdXM6e3tib3JkZXJSYWRpdXN9fTtvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjsnCiAgICAgICsgJ2p1c3RpZnktY29udGVudDpjZW50ZXI7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoyMHB4O2NvbG9yOndoaXRlO30nCiAgICArICcub2ctaW1nLWJhbm5lcjo6YmVmb3Jle2NvbnRlbnQ6IiI7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7JwogICAgICArICdiYWNrZ3JvdW5kLWNvbG9yOnt7Y29yT3ZlcmxheX19O3otaW5kZXg6MTt9JwogICAgKyAnLm9nLWltZy1iYW5uZXItY29udGVudHtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjI7bWF4LXdpZHRoOnt7bWF4V2lkdGhDb250ZW50fX07fScKICAgICsgJy5vZy1pbWctYmFubmVyLWNvbnRlbnQgaDF7Y29sb3I6e3tjb3JUaXR1bG99fSAhaW1wb3J0YW50O2ZvbnQtc2l6ZTp7e3RhbWFuaG9UaXR1bG99fTsnCiAgICAgICsgJ2ZvbnQtd2VpZ2h0Ont7cGVzb1RpdHVsb319O21hcmdpbjowIDAge3tlc3BhY29BYmFpeG9UaXR1bG99fSAwO3RleHQtc2hhZG93Ont7c29tYnJhVGl0dWxvfX07fScKICAgICsgJy5vZy1pbWctYmFubmVyLWNvbnRlbnQgcHtjb2xvcjp7e2NvckRlc2NyaWNhb319ICFpbXBvcnRhbnQ7Zm9udC1zaXplOnt7dGFtYW5ob0Rlc2NyaWNhb319O21hcmdpbjowO2xpbmUtaGVpZ2h0OjEuNjt9JwogICAgKyAnQG1lZGlhKG1heC13aWR0aDo2MDBweCl7Lm9nLWltZy1iYW5uZXItY29udGVudCBoMXtmb250LXNpemU6MnJlbTt9Lm9nLWltZy1iYW5uZXItY29udGVudCBwe2ZvbnQtc2l6ZToxcmVtO319JzsKICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG9nQ1NTKTsKCiAgZnVuY3Rpb24gb2dDcmlhckJhbm5lcih0YXJnZXQpIHsKICAgIGlmICh0YXJnZXQucXVlcnlTZWxlY3RvcignLm9nLWltZy1iYW5uZXInKSkgcmV0dXJuOwoKICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnb2ctaW1nLWJhbm5lcic7CgogICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gJ29nLWltZy1iYW5uZXItY29udGVudCc7CgogICAgdmFyIGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTsKICAgIGgxLnRleHRDb250ZW50ID0gJ3t7dGl0dWxvfX0nOwoKICAgIHZhciBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpOwogICAgcC50ZXh0Q29udGVudCA9ICd7e2Rlc2NyaWNhb319JzsKCiAgICBjb250ZW50LmFwcGVuZENoaWxkKGgxKTsKICAgIC8qIElGOmRlc2NyaWNhbyAqLwogICAgY29udGVudC5hcHBlbmRDaGlsZChwKTsKICAgIC8qIEVORElGICovCiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7CiAgICB0YXJnZXQucHJlcGVuZChjb250YWluZXIpOwogIH0KCiAgdmFyIG9nU2VsZXRvciA9ICd7e3NlbGV0b3JJbnNlcmNhb319JzsKCiAgdmFyIG9nVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvZ1NlbGV0b3IpOwogIGlmIChvZ1RhcmdldCkgewogICAgb2dDcmlhckJhbm5lcihvZ1RhcmdldCk7CiAgICByZXR1cm47CiAgfQoKICB2YXIgb2dPYnMgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihfLCBvYnMpIHsKICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob2dTZWxldG9yKTsKICAgIGlmIChlbCkgewogICAgICBvZ0NyaWFyQmFubmVyKGVsKTsKICAgICAgb2JzLmRpc2Nvbm5lY3QoKTsKICAgIH0KICB9KTsKICBvZ09icy5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pOwp9KSgpOw==';

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

  var imgUrl    = v.imagemUrl      || 'https://via.placeholder.com/1200x400/555/FFFFFF?text=Imagem+de+Fundo';
  var imgPos    = v.imagemPosicao  || 'center';
  var overlay   = v.corOverlay     || 'rgba(0,0,0,0.5)';
  var corTit    = v.corTitulo      || '#ffffff';
  var corDesc   = v.corDescricao   || '#dddddd';
  var altura    = v.altura         || '400px';
  var radius    = v.borderRadius   || '12px';
  var maxW      = v.maxWidthContent|| '700px';
  var tamTit    = v.tamanhoTitulo  || '2.8rem';
  var pesoTit   = v.pesoTitulo     || '700';
  var sombraTit = v.sombraTitulo   || '0 2px 4px rgba(0,0,0,0.3)';
  var tamDesc   = v.tamanhoDescricao || '1.2rem';
  var espaco    = v.espacoAbaixoTitulo || '15px';
  var titulo    = v.titulo    || 'Titulo do Banner';
  var desc      = v.descricao || 'Um subtitulo cativante sobre seus produtos.';

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>*{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,sans-serif;} body{background:#111;padding:16px;}'
    + '.banner{'
      + 'position:relative;width:100%;height:' + altura + ';'
      + 'background-image:url(' + JSON.stringify(imgUrl) + ');'
      + 'background-size:cover;background-position:' + imgPos + ';'
      + 'border-radius:' + radius + ';overflow:hidden;'
      + 'display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;'
    + '}'
    + '.banner::before{content:"";position:absolute;inset:0;background:' + overlay + ';z-index:1;}'
    + '.content{position:relative;z-index:2;max-width:' + maxW + ';}'
    + 'h1{color:' + corTit + ';font-size:' + tamTit + ';font-weight:' + pesoTit + ';margin-bottom:' + espaco + ';text-shadow:' + sombraTit + ';}'
    + 'p{color:' + corDesc + ';font-size:' + tamDesc + ';line-height:1.6;}'
    + '</style></head><body>'
    + '<div class="banner">'
      + '<div class="content">'
        + '<h1>' + titulo + '</h1>'
        + (desc ? '<p>' + desc + '</p>' : '')
      + '</div>'
    + '</div>'
    + '</body></html>';

  var old = box.querySelector('iframe');
  if (old) old.remove();
  var iframe = document.createElement('iframe');
  iframe.style.cssText = 'width:100%;height:460px;border:none;display:block;border-radius:14px;';
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