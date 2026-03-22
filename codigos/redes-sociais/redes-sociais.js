// =============================================================
//  OG! — barra-social.js
// =============================================================

const COMPONENT = {
  title:       'Barra Lateral de Redes Sociais',
  description: 'Barra vertical fixa no lado direito da tela com icones de redes sociais (FontAwesome). Ate 6 links, posicao centralizada, efeito de hover e visual glassmorphism.',
  tags:        ['Redes Sociais', 'Barra', 'Instagram', 'WhatsApp', 'Discord', 'CSS', 'JS', 'Gratis'],

  fields: [
    // Links (ate 6)
    { id: 'link1Label', label: 'Link 1 — Label (acessibilidade)', type: 'text', placeholder: 'Ex: Instagram',   default: 'Instagram',   required: false },
    { id: 'link1Icone', label: 'Link 1 — Classe FA',              type: 'text', placeholder: 'Ex: fa-brands fa-instagram', default: 'fa-brands fa-instagram', required: false },
    { id: 'link1Url',   label: 'Link 1 — URL',                   type: 'text', placeholder: 'https://instagram.com/...', default: 'https://instagram.com/seu-usuario', required: false },

    { id: 'link2Label', label: 'Link 2 — Label', type: 'text', placeholder: 'Ex: WhatsApp', default: 'WhatsApp',    required: false },
    { id: 'link2Icone', label: 'Link 2 — Classe FA', type: 'text', placeholder: 'Ex: fa-brands fa-whatsapp', default: 'fa-brands fa-whatsapp', required: false },
    { id: 'link2Url',   label: 'Link 2 — URL', type: 'text', placeholder: 'https://wa.me/...', default: 'https://wa.me/SEUNUMERO', required: false },

    { id: 'link3Label', label: 'Link 3 — Label', type: 'text', placeholder: 'Ex: Discord',  default: 'Discord',     required: false },
    { id: 'link3Icone', label: 'Link 3 — Classe FA', type: 'text', placeholder: 'Ex: fa-brands fa-discord', default: 'fa-brands fa-discord', required: false },
    { id: 'link3Url',   label: 'Link 3 — URL', type: 'text', placeholder: 'https://discord.gg/...', default: 'https://discord.gg/SEUSERVIDOR', required: false },

    { id: 'link4Label', label: 'Link 4 — Label (opcional)', type: 'text', placeholder: 'Ex: Twitter', default: '', required: false },
    { id: 'link4Icone', label: 'Link 4 — Classe FA', type: 'text', placeholder: 'Ex: fa-brands fa-x-twitter', default: 'fa-brands fa-x-twitter', required: false },
    { id: 'link4Url',   label: 'Link 4 — URL', type: 'text', placeholder: 'https://...', default: '', required: false },

    { id: 'link5Label', label: 'Link 5 — Label (opcional)', type: 'text', placeholder: 'Ex: TikTok', default: '', required: false },
    { id: 'link5Icone', label: 'Link 5 — Classe FA', type: 'text', placeholder: 'Ex: fa-brands fa-tiktok', default: 'fa-brands fa-tiktok', required: false },
    { id: 'link5Url',   label: 'Link 5 — URL', type: 'text', placeholder: 'https://...', default: '', required: false },

    { id: 'link6Label', label: 'Link 6 — Label (opcional)', type: 'text', placeholder: 'Ex: Telegram', default: '', required: false },
    { id: 'link6Icone', label: 'Link 6 — Classe FA', type: 'text', placeholder: 'Ex: fa-brands fa-telegram', default: 'fa-brands fa-telegram', required: false },
    { id: 'link6Url',   label: 'Link 6 — URL', type: 'text', placeholder: 'https://...', default: '', required: false },

    // Visual
    { id: 'corFundo',       label: 'Cor de Fundo (rgba)',  type: 'text',  placeholder: 'Ex: rgba(20,20,20,0.3)', default: 'rgba(20,20,20,0.3)', required: false },
    { id: 'corBorda',       label: 'Cor da Borda (rgba)',  type: 'text',  placeholder: 'Ex: rgba(255,255,255,0.1)', default: 'rgba(255,255,255,0.1)', required: false },
    { id: 'blur',           label: 'Blur do fundo',        type: 'text',  placeholder: 'Ex: 10px', default: '10px', required: true  },
    { id: 'borderRadius',   label: 'Border Radius',        type: 'text',  placeholder: 'Ex: 12px', default: '12px', required: true  },
    { id: 'padding',        label: 'Padding interno',      type: 'text',  placeholder: 'Ex: 10px 8px', default: '10px 8px', required: true },
    { id: 'gap',            label: 'Espaco entre icones',  type: 'text',  placeholder: 'Ex: 12px', default: '12px', required: true  },
    { id: 'sombra',         label: 'Sombra',               type: 'text',  placeholder: 'Ex: 0 4px 20px rgba(0,0,0,0.3)', default: '0 4px 20px rgba(0,0,0,0.3)', required: false },
    { id: 'tamanhoIcone',   label: 'Tamanho do icone',     type: 'text',  placeholder: 'Ex: 22px', default: '22px', required: true  },
    { id: 'corIcone',       label: 'Cor dos icones',       type: 'color', default: '#ffffff' },
    { id: 'corIconeHover',  label: 'Cor dos icones (hover)', type: 'color', default: '#d30ff1' },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = 'I29nLXNvY2lhbC1iYXIgewogIHBvc2l0aW9uOiBmaXhlZDsKICB0b3A6IDUwJTsKICByaWdodDogMDsKICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7CiAgei1pbmRleDogMTA1MDsKICBiYWNrZ3JvdW5kLWNvbG9yOiB7e2NvckZ1bmRvfX07CiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKHt7Ymx1cn19KTsKICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cih7e2JsdXJ9fSk7CiAgYm9yZGVyOiAxcHggc29saWQge3tjb3JCb3JkYX19OwogIGJvcmRlci1yaWdodDogbm9uZTsKICBib3JkZXItcmFkaXVzOiB7e2JvcmRlclJhZGl1c319IDAgMCB7e2JvcmRlclJhZGl1c319OwogIHBhZGRpbmc6IHt7cGFkZGluZ319OwogIGJveC1zaGFkb3c6IHt7c29tYnJhfX07CiAgZGlzcGxheTogZmxleDsKICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogIGdhcDoge3tnYXB9fTsKfQojb2ctc29jaWFsLWJhciBhIHsKICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOwogIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0Owp9CiNvZy1zb2NpYWwtYmFyIGE6aG92ZXIgewogIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7Cn0KI29nLXNvY2lhbC1iYXIgaSB7CiAgZm9udC1zaXplOiB7e3RhbWFuaG9JY29uZX19OwogIGNvbG9yOiB7e2Nvckljb25lfX07CiAgcGFkZGluZzogNXB4OwogIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7CiAgZGlzcGxheTogYmxvY2s7Cn0KI29nLXNvY2lhbC1iYXIgYTpob3ZlciBpIHsKICBjb2xvcjoge3tjb3JJY29uZUhvdmVyfX07Cn0=';
const BASE_JS_B64   = 'KGZ1bmN0aW9uICgpIHsKICAndXNlIHN0cmljdCc7CiAgaWYgKHdpbmRvdy5vZ1NvY2lhbEJhckluaWNpYWxpemFkbykgcmV0dXJuOwogIHdpbmRvdy5vZ1NvY2lhbEJhckluaWNpYWxpemFkbyA9IHRydWU7CgogIGZ1bmN0aW9uIG9nSW5qZWN0RkEoKSB7CiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbaHJlZio9ImZvbnQtYXdlc29tZSJdJykpIHsKICAgICAgdmFyIGZhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpOwogICAgICBmYS5yZWwgPSAnc3R5bGVzaGVldCc7CiAgICAgIGZhLmhyZWYgPSAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzYuNS4yL2Nzcy9hbGwubWluLmNzcyc7CiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZmEpOwogICAgfQogIH0KCiAgZnVuY3Rpb24gb2dDcmlhckJhcnJhKCkgewogICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvZy1zb2NpYWwtYmFyJykpIHJldHVybjsKICAgIG9nSW5qZWN0RkEoKTsKCiAgICB2YXIgb2dMaW5rcyA9IFsKICAgICAgLyogSUY6bGluazFVcmwgKi97IHNob3c6IHRydWUsIGxpbms6ICd7e2xpbmsxVXJsfX0nLCBpY29uOiAne3tsaW5rMUljb25lfX0nLCBsYWJlbDogJ3t7bGluazFMYWJlbH19JyB9LC8qIEVORElGICovCiAgICAgIC8qIElGOmxpbmsyVXJsICoveyBzaG93OiB0cnVlLCBsaW5rOiAne3tsaW5rMlVybH19JywgaWNvbjogJ3t7bGluazJJY29uZX19JywgbGFiZWw6ICd7e2xpbmsyTGFiZWx9fScgfSwvKiBFTkRJRiAqLwogICAgICAvKiBJRjpsaW5rM1VybCAqL3sgc2hvdzogdHJ1ZSwgbGluazogJ3t7bGluazNVcmx9fScsIGljb246ICd7e2xpbmszSWNvbmV9fScsIGxhYmVsOiAne3tsaW5rM0xhYmVsfX0nIH0sLyogRU5ESUYgKi8KICAgICAgLyogSUY6bGluazRVcmwgKi97IHNob3c6IHRydWUsIGxpbms6ICd7e2xpbms0VXJsfX0nLCBpY29uOiAne3tsaW5rNEljb25lfX0nLCBsYWJlbDogJ3t7bGluazRMYWJlbH19JyB9LC8qIEVORElGICovCiAgICAgIC8qIElGOmxpbms1VXJsICoveyBzaG93OiB0cnVlLCBsaW5rOiAne3tsaW5rNVVybH19JywgaWNvbjogJ3t7bGluazVJY29uZX19JywgbGFiZWw6ICd7e2xpbms1TGFiZWx9fScgfSwvKiBFTkRJRiAqLwogICAgICAvKiBJRjpsaW5rNlVybCAqL3sgc2hvdzogdHJ1ZSwgbGluazogJ3t7bGluazZVcmx9fScsIGljb246ICd7e2xpbms2SWNvbmV9fScsIGxhYmVsOiAne3tsaW5rNkxhYmVsfX0nIH0sLyogRU5ESUYgKi8KICAgIF0uZmlsdGVyKEJvb2xlYW4pOwoKICAgIHZhciBsaW5rc0hUTUwgPSAnJzsKICAgIG9nTGlua3MuZm9yRWFjaChmdW5jdGlvbihzKSB7CiAgICAgIGlmIChzLnNob3cgJiYgcy5saW5rLnRyaW0oKSkgewogICAgICAgIGxpbmtzSFRNTCArPQogICAgICAgICAgJzxhIGhyZWY9IicgKyBzLmxpbmsgKyAnIiB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBhcmlhLWxhYmVsPSInICsgcy5sYWJlbCArICciPicgKwogICAgICAgICAgJzxpIGNsYXNzPSInICsgcy5pY29uICsgJyI+PC9pPjwvYT4nOwogICAgICB9CiAgICB9KTsKCiAgICBpZiAoIWxpbmtzSFRNTC50cmltKCkpIHJldHVybjsKCiAgICB2YXIgb2dDU1MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpOwogICAgb2dDU1MuaWQgPSAnb2ctc29jaWFsLWJhci1zdHlsZSc7CiAgICBvZ0NTUy50ZXh0Q29udGVudCA9CiAgICAgICcjb2ctc29jaWFsLWJhcntwb3NpdGlvbjpmaXhlZDt0b3A6NTAlO3JpZ2h0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7ei1pbmRleDoxMDUwOycgKwogICAgICAnYmFja2dyb3VuZC1jb2xvcjp7e2NvckZ1bmRvfX07YmFja2Ryb3AtZmlsdGVyOmJsdXIoe3tibHVyfX0pOy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOmJsdXIoe3tibHVyfX0pOycgKwogICAgICAnYm9yZGVyOjFweCBzb2xpZCB7e2NvckJvcmRhfX07Ym9yZGVyLXJpZ2h0Om5vbmU7Ym9yZGVyLXJhZGl1czp7e2JvcmRlclJhZGl1c319IDAgMCB7e2JvcmRlclJhZGl1c319OycgKwogICAgICAncGFkZGluZzp7e3BhZGRpbmd9fTtib3gtc2hhZG93Ont7c29tYnJhfX07ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6e3tnYXB9fTt9JyArCiAgICAgICcjb2ctc29jaWFsLWJhciBhe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtZGVjb3JhdGlvbjpub25lO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDt9JyArCiAgICAgICcjb2ctc29jaWFsLWJhciBhOmhvdmVye3RyYW5zZm9ybTpzY2FsZSgxLjE1KTt9JyArCiAgICAgICcjb2ctc29jaWFsLWJhciBpe2ZvbnQtc2l6ZTp7e3RhbWFuaG9JY29uZX19O2NvbG9yOnt7Y29ySWNvbmV9fTtwYWRkaW5nOjVweDtkaXNwbGF5OmJsb2NrO3RyYW5zaXRpb246Y29sb3IgLjJzIGVhc2UtaW4tb3V0O30nICsKICAgICAgJyNvZy1zb2NpYWwtYmFyIGE6aG92ZXIgaXtjb2xvcjp7e2Nvckljb25lSG92ZXJ9fTt9JzsKICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQob2dDU1MpOwoKICAgIHZhciBvZ0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgb2dCYXIuaWQgPSAnb2ctc29jaWFsLWJhcic7CiAgICBvZ0Jhci5pbm5lckhUTUwgPSBsaW5rc0hUTUw7CiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG9nQmFyKTsKICB9CgogIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHsKICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBvZ0NyaWFyQmFycmEpOwogIH0gZWxzZSB7CiAgICBvZ0NyaWFyQmFycmEoKTsKICB9Cn0pKCk7';

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

  var corFundo  = v.corFundo     || 'rgba(20,20,20,0.6)';
  var corBorda  = v.corBorda     || 'rgba(255,255,255,0.1)';
  var blur      = v.blur         || '10px';
  var radius    = v.borderRadius || '12px';
  var padding   = v.padding      || '10px 8px';
  var gap       = v.gap          || '12px';
  var sombra    = v.sombra       || '0 4px 20px rgba(0,0,0,0.3)';
  var tamIco    = v.tamanhoIcone || '22px';
  var corIco    = v.corIcone     || '#ffffff';
  var corHov    = v.corIconeHover|| '#d30ff1';

  // Build icons
  var icones = [];
  for (var i = 1; i <= 6; i++) {
    var url = v['link' + i + 'Url'];
    var ico = v['link' + i + 'Icone'] || '';
    if (url && ico) icones.push(ico);
  }
  if (!icones.length) {
    icones = ['fa-brands fa-instagram', 'fa-brands fa-whatsapp', 'fa-brands fa-discord'];
  }

  var iconsHTML = icones.map(function(ic) {
    return '<div style="padding:5px;cursor:pointer;transition:transform .2s;">'
      + '<i class="' + ic + '" style="font-size:' + tamIco + ';color:' + corIco + ';display:block;"></i>'
      + '</div>';
  }).join('');

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">'
    + '<style>*{box-sizing:border-box;margin:0;padding:0;} body{background:#111;width:100%;height:420px;position:relative;overflow:hidden;}'
    + '.lbl{position:absolute;top:50%;left:40%;transform:translate(-50%,-50%);color:rgba(255,255,255,0.08);font-size:.8rem;font-family:system-ui;}'
    + '.bar{position:absolute;top:50%;right:0;transform:translateY(-50%);'
      + 'background:' + corFundo + ';'
      + 'backdrop-filter:blur(' + blur + ');'
      + '-webkit-backdrop-filter:blur(' + blur + ');'
      + 'border:1px solid ' + corBorda + ';'
      + 'border-right:none;'
      + 'border-radius:' + radius + ' 0 0 ' + radius + ';'
      + 'padding:' + padding + ';'
      + 'box-shadow:' + sombra + ';'
      + 'display:flex;flex-direction:column;gap:' + gap + ';'
    + '}'
    + '</style></head><body>'
    + '<div class="lbl">Preview ao vivo</div>'
    + '<div class="bar">' + iconsHTML + '</div>'
    + '</body></html>';

  var old = box.querySelector('iframe');
  if (old) old.remove();
  var iframe = document.createElement('iframe');
  iframe.style.cssText = 'width:100%;height:420px;border:none;display:block;border-radius:14px;';
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