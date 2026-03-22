// =============================================================
//  OG! — pills-categorias.js
// =============================================================

const COMPONENT = {
  title:       'Pills de Categorias',
  description: 'Estiliza as pills de categoria da Ereemby com glassmorphism, borda brilhante, glow e tipografia personalizada.',
  tags:        ['Pills', 'Categorias', 'Glass', 'CSS', 'JS', 'Gratis'],

  fields: [
    // Dimensoes
    { id: 'largura',      label: 'Largura maxima',         type: 'text',  placeholder: 'Ex: 560px',     default: '560px',              required: true  },
    { id: 'altura',       label: 'Altura minima',          type: 'text',  placeholder: 'Ex: 58px',      default: '58px',               required: true  },
    { id: 'margin',       label: 'Margin',                 type: 'text',  placeholder: 'Ex: 24px auto 28px auto', default: '24px auto 28px auto', required: true },
    { id: 'padding',      label: 'Padding horizontal',     type: 'text',  placeholder: 'Ex: 24px',      default: '24px',               required: true  },
    { id: 'borderRadius', label: 'Border Radius',          type: 'text',  placeholder: 'Ex: 20px',      default: '20px',               required: true  },

    // Borda
    { id: 'espessuraBorda', label: 'Espessura da Borda (px)', type: 'text', placeholder: 'Ex: 2', default: '2', required: true },
    { id: 'corBorda',       label: 'Cor da Borda (rgba)',     type: 'text', placeholder: 'Ex: rgba(255,255,255,0.95)', default: 'rgba(255,255,255,0.95)', required: false },

    // Fundo
    { id: 'corGlow',   label: 'Cor Glow Interno (rgba)',    type: 'text', placeholder: 'Ex: rgba(80,100,180,0.14)', default: 'rgba(80,100,180,0.14)', required: false },
    { id: 'corFundo1', label: 'Cor Fundo Superior (rgba)',  type: 'text', placeholder: 'Ex: rgba(13,13,18,0.96)',   default: 'rgba(13,13,18,0.96)',   required: false },
    { id: 'corFundo2', label: 'Cor Fundo Inferior (rgba)',  type: 'text', placeholder: 'Ex: rgba(5,5,10,0.98)',     default: 'rgba(5,5,10,0.98)',     required: false },

    // Sombra
    { id: 'corBrilhoExterno', label: 'Cor Brilho Externo (rgba)', type: 'text', placeholder: 'Ex: rgba(255,255,255,0.08)', default: 'rgba(255,255,255,0.08)', required: false },
    { id: 'corGlowExterno',   label: 'Cor Glow Externo (rgba)',   type: 'text', placeholder: 'Ex: rgba(120,160,255,0.08)', default: 'rgba(120,160,255,0.08)', required: false },
    { id: 'corBrilhoInterno', label: 'Cor Brilho Interno ::before (rgba)', type: 'text', placeholder: 'Ex: rgba(110,140,255,0.06)', default: 'rgba(110,140,255,0.06)', required: false },

    // Texto
    { id: 'corTexto',     label: 'Cor do Texto',       type: 'color', default: '#ffffff' },
    { id: 'tamanhoTexto', label: 'Tamanho do Texto',   type: 'text',  placeholder: 'Ex: 16px', default: '16px', required: true  },
    { id: 'pesoTexto',    label: 'Peso da Fonte',      type: 'text',  placeholder: 'Ex: 900',  default: '900',  required: false },
    { id: 'espacamento',  label: 'Letter Spacing',     type: 'text',  placeholder: 'Ex: 1.8px',default: '1.8px',required: false },
    { id: 'sombraTexto',  label: 'Sombra do Texto',    type: 'text',  placeholder: 'Ex: 0 0 4px rgba(255,255,255,0.30)', default: '0 0 4px rgba(255,255,255,0.30),0 0 10px rgba(255,255,255,0.14)', required: false },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = '';
const BASE_JS_B64   = 'KGZ1bmN0aW9uKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgdmFyIFNUWUxFX0lEID0gJ29nLXBpbGwtY2F0ZWdvcmlhLXN0eWxlJzsKCiAgZnVuY3Rpb24gb2dFZGl0YXJQaWxscygpIHsKICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU1RZTEVfSUQpKSB7CiAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7CiAgICAgIHN0eWxlLmlkID0gU1RZTEVfSUQ7CiAgICAgIHN0eWxlLnRleHRDb250ZW50ID0KICAgICAgICAnLnNjLTI5NjQxN2Q4LTAuZ0RYUlB0Lm9nLXBpbGwtZWRpdGFkYSB7JwogICAgICAgICsgJ3Bvc2l0aW9uOnJlbGF0aXZlICFpbXBvcnRhbnQ7JwogICAgICAgICsgJ2Rpc3BsYXk6ZmxleCAhaW1wb3J0YW50OycKICAgICAgICArICdhbGlnbi1pdGVtczpjZW50ZXIgIWltcG9ydGFudDsnCiAgICAgICAgKyAnanVzdGlmeS1jb250ZW50OmNlbnRlciAhaW1wb3J0YW50OycKICAgICAgICArICd3aWR0aDptaW4oOTB2dyx7e2xhcmd1cmF9fSkgIWltcG9ydGFudDsnCiAgICAgICAgKyAnbWluLWhlaWdodDp7e2FsdHVyYX19ICFpbXBvcnRhbnQ7JwogICAgICAgICsgJ21hcmdpbjp7e21hcmdpbn19ICFpbXBvcnRhbnQ7JwogICAgICAgICsgJ3BhZGRpbmc6MCB7e3BhZGRpbmd9fSAhaW1wb3J0YW50OycKICAgICAgICArICdib3JkZXItcmFkaXVzOnt7Ym9yZGVyUmFkaXVzfX0gIWltcG9ydGFudDsnCiAgICAgICAgKyAnYm9yZGVyOnt7ZXNwZXNzdXJhQm9yZGF9fXB4IHNvbGlkIHt7Y29yQm9yZGF9fSAhaW1wb3J0YW50OycKICAgICAgICArICdiYWNrZ3JvdW5kOicKICAgICAgICAgICsgJ3JhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNTAlIDUwJSx7e2Nvckdsb3d9fSx0cmFuc3BhcmVudCA1OCUpLCcKICAgICAgICAgICsgJ2xpbmVhci1ncmFkaWVudCgxODBkZWcse3tjb3JGdW5kbzF9fSx7e2NvckZ1bmRvMn19KSAhaW1wb3J0YW50OycKICAgICAgICArICdib3gtc2hhZG93OicKICAgICAgICAgICsgJzAgMCAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpIGluc2V0LCcKICAgICAgICAgICsgJzAgMCAxMHB4IHt7Y29yQnJpbGhvRXh0ZXJub319LCcKICAgICAgICAgICsgJzAgMCAxOHB4IHt7Y29yR2xvd0V4dGVybm99fSAhaW1wb3J0YW50OycKICAgICAgICArICdvdmVyZmxvdzpoaWRkZW4gIWltcG9ydGFudDsnCiAgICAgICAgKyAnY29sb3I6e3tjb3JUZXh0b319ICFpbXBvcnRhbnQ7JwogICAgICAgICsgJ2ZvbnQtc2l6ZTp7e3RhbWFuaG9UZXh0b319ICFpbXBvcnRhbnQ7JwogICAgICAgICsgJ2xpbmUtaGVpZ2h0OjEgIWltcG9ydGFudDsnCiAgICAgICAgKyAnZm9udC13ZWlnaHQ6e3twZXNvVGV4dG99fSAhaW1wb3J0YW50OycKICAgICAgICArICdsZXR0ZXItc3BhY2luZzp7e2VzcGFjYW1lbnRvfX0gIWltcG9ydGFudDsnCiAgICAgICAgKyAndGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlICFpbXBvcnRhbnQ7JwogICAgICAgICsgJ3RleHQtYWxpZ246Y2VudGVyICFpbXBvcnRhbnQ7JwogICAgICAgICsgJ3doaXRlLXNwYWNlOm5vd3JhcCAhaW1wb3J0YW50OycKICAgICAgICArICd0ZXh0LXNoYWRvdzp7e3NvbWJyYVRleHRvfX0gIWltcG9ydGFudDsnCiAgICAgICAgKyAnfScKICAgICAgICArICcuc2MtMjk2NDE3ZDgtMC5nRFhSUHQub2ctcGlsbC1lZGl0YWRhOjpiZWZvcmUgeycKICAgICAgICArICdjb250ZW50OiIiO3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjA7Ym9yZGVyLXJhZGl1czppbmhlcml0OycKICAgICAgICArICdiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZyx0cmFuc3BhcmVudCAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIDE4JSx7e2NvckJyaWxob0ludGVybm99fSA1MCUscmdiYSgyNTUsMjU1LDI1NSwwLjAyKSA4MiUsdHJhbnNwYXJlbnQgMTAwJSk7JwogICAgICAgICsgJ3BvaW50ZXItZXZlbnRzOm5vbmU7JwogICAgICAgICsgJ30nCiAgICAgICAgKyAnQG1lZGlhKG1heC13aWR0aDo3NjhweCl7JwogICAgICAgICsgJy5zYy0yOTY0MTdkOC0wLmdEWFJQdC5vZy1waWxsLWVkaXRhZGF7JwogICAgICAgICsgJ3dpZHRoOmNhbGMoMTAwdncgLSAyNHB4KSAhaW1wb3J0YW50OycKICAgICAgICArICdtaW4taGVpZ2h0OjUycHggIWltcG9ydGFudDsnCiAgICAgICAgKyAncGFkZGluZzowIDE2cHggIWltcG9ydGFudDsnCiAgICAgICAgKyAnYm9yZGVyLXJhZGl1czoxNnB4ICFpbXBvcnRhbnQ7JwogICAgICAgICsgJ2ZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7JwogICAgICAgICsgJ2xldHRlci1zcGFjaW5nOjEuNHB4ICFpbXBvcnRhbnQ7JwogICAgICAgICsgJ30nCiAgICAgICAgKyAnfSc7CiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpOwogICAgfQoKICAgIHZhciBlbGVtZW50b3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2MtMjk2NDE3ZDgtMC5nRFhSUHQnKTsKCiAgICBlbGVtZW50b3MuZm9yRWFjaChmdW5jdGlvbihlbCkgewogICAgICBpZiAoZWwuZGF0YXNldC5vZ1BpbGxFZGl0YWRhID09PSAndHJ1ZScpIHJldHVybjsKCiAgICAgIHZhciB0ZXh0byAgICAgPSAoZWwudGV4dENvbnRlbnQgfHwgJycpLnRyaW0oKTsKICAgICAgdmFyIHRleHRvTCAgICA9IHRleHRvLnRvTG93ZXJDYXNlKCk7CiAgICAgIHZhciByZWN0ICAgICAgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsKCiAgICAgIHZhciBub0Zvb3RlciAgPSAhIWVsLmNsb3Nlc3QoJ2Zvb3RlcicpOwogICAgICB2YXIgbm9IZWFkZXIgID0gISFlbC5jbG9zZXN0KCdoZWFkZXInKTsKICAgICAgdmFyIGVtQm90YW8gICA9ICEhZWwuY2xvc2VzdCgnYnV0dG9uLCBhJyk7CiAgICAgIHZhciBibG9xdWVhZG8gPSBbJ2VzZ290YWRvJywnbG9qYSBkZSB0ZXN0ZSAxJywncG9sw610aWNhcycsJ3BvbGl0aWNhcyddLmluZGV4T2YodGV4dG9MKSAhPT0gLTE7CiAgICAgIHZhciB0ZXh0b0N1cnRvID0gdGV4dG8ubGVuZ3RoID4gMCAmJiB0ZXh0by5sZW5ndGggPD0gMjA7CiAgICAgIHZhciB2aXNpdmVsICAgID0gcmVjdC53aWR0aCA+IDAgJiYgcmVjdC5oZWlnaHQgPiAwOwoKICAgICAgaWYgKG5vRm9vdGVyIHx8IG5vSGVhZGVyIHx8IGVtQm90YW8gfHwgYmxvcXVlYWRvIHx8ICF0ZXh0b0N1cnRvIHx8ICF2aXNpdmVsKSByZXR1cm47CgogICAgICB2YXIgcGFpICAgICAgPSBlbC5wYXJlbnRFbGVtZW50OwogICAgICB2YXIgYXZvICAgICAgPSBwYWkgPyBwYWkucGFyZW50RWxlbWVudCA6IG51bGw7CiAgICAgIHZhciByZWN0UGFpICA9IHBhaSA/IHBhaS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IG51bGw7CiAgICAgIHZhciByZWN0QXZvICA9IGF2byA/IGF2by5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IG51bGw7CgogICAgICB2YXIgcGFpTGFyZ28gPQogICAgICAgIChyZWN0UGFpICYmIHJlY3RQYWkud2lkdGggPiAzNTAgJiYgcmVjdFBhaS5oZWlnaHQgPCAxMjApIHx8CiAgICAgICAgKHJlY3RBdm8gJiYgcmVjdEF2by53aWR0aCA+IDM1MCAmJiByZWN0QXZvLmhlaWdodCA8IDE0MCk7CgogICAgICBpZiAoIXBhaUxhcmdvKSByZXR1cm47CgogICAgICBlbC5kYXRhc2V0Lm9nUGlsbEVkaXRhZGEgPSAndHJ1ZSc7CiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ29nLXBpbGwtZWRpdGFkYScpOwogICAgICBlbC50ZXh0Q29udGVudCA9IHRleHRvOwogICAgfSk7CiAgfQoKICBvZ0VkaXRhclBpbGxzKCk7CgogIHZhciBvZ1RpbWVyOwogIHZhciBvZ09icyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKCkgewogICAgY2xlYXJUaW1lb3V0KG9nVGltZXIpOwogICAgb2dUaW1lciA9IHNldFRpbWVvdXQob2dFZGl0YXJQaWxscywgMjAwKTsKICB9KTsKICBvZ09icy5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pOwp9KSgpOw==';

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

  var largura   = v.largura       || '560px';
  var altura    = v.altura        || '58px';
  var margin    = v.margin        || '24px auto 28px auto';
  var padding   = v.padding       || '24px';
  var radius    = v.borderRadius  || '20px';
  var espBorda  = v.espessuraBorda|| '2';
  var corBorda  = v.corBorda      || 'rgba(255,255,255,0.95)';
  var corGlow   = v.corGlow       || 'rgba(80,100,180,0.14)';
  var corF1     = v.corFundo1     || 'rgba(13,13,18,0.96)';
  var corF2     = v.corFundo2     || 'rgba(5,5,10,0.98)';
  var corBrilhoE= v.corBrilhoExterno || 'rgba(255,255,255,0.08)';
  var corGlowE  = v.corGlowExterno   || 'rgba(120,160,255,0.08)';
  var corBrilhoI= v.corBrilhoInterno || 'rgba(110,140,255,0.06)';
  var corTxt    = v.corTexto      || '#ffffff';
  var tamTxt    = v.tamanhoTexto  || '16px';
  var pesoTxt   = v.pesoTexto     || '900';
  var spacing   = v.espacamento   || '1.8px';
  var sombTxt   = v.sombraTexto   || '0 0 4px rgba(255,255,255,0.30)';

  var categorias = ['Eletrônicos', 'Games', 'Roupas', 'Acessórios', 'Promoções'];

  var pillStyle =
    'display:inline-flex;align-items:center;justify-content:center;'
    + 'width:min(90%,' + largura + ');min-height:' + altura + ';'
    + 'margin:' + margin + ';padding:0 ' + padding + ';'
    + 'border-radius:' + radius + ';'
    + 'border:' + espBorda + 'px solid ' + corBorda + ';'
    + 'background:radial-gradient(circle at 50% 50%,' + corGlow + ',transparent 58%),'
      + 'linear-gradient(180deg,' + corF1 + ',' + corF2 + ');'
    + 'box-shadow:0 0 0 1px rgba(255,255,255,0.06) inset,'
      + '0 0 10px ' + corBrilhoE + ','
      + '0 0 18px ' + corGlowE + ';'
    + 'color:' + corTxt + ';'
    + 'font-size:' + tamTxt + ';'
    + 'font-weight:' + pesoTxt + ';'
    + 'letter-spacing:' + spacing + ';'
    + 'text-transform:uppercase;'
    + 'text-align:center;'
    + 'white-space:nowrap;'
    + 'text-shadow:' + sombTxt + ';'
    + 'position:relative;overflow:hidden;cursor:pointer;'
    + 'font-family:system-ui,sans-serif;';

  var pillsHTML = categorias.map(function(cat) {
    return '<div style="' + pillStyle + '">'
      + '<div style="position:absolute;inset:0;border-radius:inherit;background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.02) 18%,' + corBrilhoI + ' 50%,rgba(255,255,255,0.02) 82%,transparent 100%);pointer-events:none;"></div>'
      + cat
      + '</div>';
  }).join('');

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>*{box-sizing:border-box;margin:0;padding:0;} body{background:#0a0a0f;padding:24px;min-height:480px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;}'
    + '</style></head><body>'
    + pillsHTML
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