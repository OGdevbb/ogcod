// =============================================================
//  OG! — variaveisv1.js  (Variaveis de Produto — Neon Glow)
// =============================================================

const COMPONENT = {
  title:       'Variaveis de Produto — Neon Glow',
  description: 'Estiliza os itens de selecao de variavel (plano, periodo, versao) na Ereemby com borda, bolha neon animada e efeito glow ao selecionar. Todas as cores e tamanhos customizaveis.',
  tags:        ['Variaveis', 'Plano', 'Neon', 'Glow', 'CSS', 'JS', 'Gratis'],

  fields: [
    // Cores principais
    { id: 'corPrincipal',  label: 'Cor Principal (bolha / borda ativa)', type: 'color', default: '#8a2eff' },
    { id: 'corBoinhaAtiva',label: 'Cor da Bolha Selecionada',           type: 'color', default: '#a855f7' },
    { id: 'corDestaque',   label: 'Cor de Destaque (pulso max)',         type: 'color', default: '#c084fc' },

    // Glow
    { id: 'corGlowHover',    label: 'Glow no Hover (rgba)',      type: 'text', placeholder: 'Ex: rgba(138,46,255,0.25)',  default: 'rgba(138,46,255,0.25)',  required: false },
    { id: 'corGlowBase',     label: 'Glow Base da Bolha (rgba)', type: 'text', placeholder: 'Ex: rgba(138,46,255,0.7)',   default: 'rgba(138,46,255,0.7)',   required: false },
    { id: 'corGlowBaseSuave',label: 'Glow Suave da Bolha (rgba)',type: 'text', placeholder: 'Ex: rgba(138,46,255,0.5)',   default: 'rgba(138,46,255,0.5)',   required: false },
    { id: 'corGlowForte',    label: 'Glow Forte Selecionado (rgba)', type: 'text', placeholder: 'Ex: rgba(138,46,255,0.9)', default: 'rgba(138,46,255,0.9)', required: false },
    { id: 'corGlowMax',      label: 'Glow Maximo Pulso (rgba)',  type: 'text', placeholder: 'Ex: rgba(168,85,247,1)',     default: 'rgba(168,85,247,1)',     required: false },
    { id: 'corAura',         label: 'Cor da Aura (rgba)',         type: 'text', placeholder: 'Ex: rgba(138,46,255,0.8)',  default: 'rgba(138,46,255,0.8)',   required: false },

    // Fundo / bordas
    { id: 'corFundo',      label: 'Fundo do Item',          type: 'color', default: '#1a1a1a' },
    { id: 'corFundoAtivo', label: 'Fundo do Item Selecionado', type: 'color', default: '#252525' },
    { id: 'corBorda',      label: 'Borda Padrao',           type: 'color', default: '#2d2d2d' },
    { id: 'corTexto',      label: 'Cor do Texto',           type: 'color', default: '#ffffff' },

    // Layout
    { id: 'borderRadius',   label: 'Border Radius',          type: 'text', placeholder: 'Ex: 10px', default: '10px', required: false },
    { id: 'padding',        label: 'Padding',                type: 'text', placeholder: 'Ex: 16px 20px 16px 60px', default: '16px 20px 16px 60px', required: false },
    { id: 'gap',            label: 'Espaco entre itens',     type: 'text', placeholder: 'Ex: 12px', default: '12px', required: false },
    { id: 'hoverShift',     label: 'Deslocamento no Hover',  type: 'text', placeholder: 'Ex: 5px',  default: '5px',  required: false },

    // Bolha
    { id: 'tamanhoBoinha',  label: 'Tamanho da Bolha (px)',  type: 'text', placeholder: 'Ex: 14', default: '14', required: false },
    { id: 'boinhaLeft',     label: 'Posicao Esquerda da Bolha', type: 'text', placeholder: 'Ex: 20px', default: '20px', required: false },
    { id: 'auraLeft',       label: 'Posicao Esquerda da Aura',  type: 'text', placeholder: 'Ex: 7px',  default: '7px',  required: false },

    // Animacao
    { id: 'velocidadePulso', label: 'Velocidade do Pulso (s)', type: 'text', placeholder: 'Ex: 1.5', default: '1.5', required: false },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = '';
const BASE_JS_B64   = 'KGZ1bmN0aW9uICgpIHsKICAndXNlIHN0cmljdCc7CiAgaWYgKHdpbmRvdy5vZ1ZhcmlhdmVpc0luaWNpYWRvKSByZXR1cm47CiAgd2luZG93Lm9nVmFyaWF2ZWlzSW5pY2lhZG8gPSB0cnVlOwoKICB2YXIgY3NzID0gWwogICAgJy5pdGVtLGxhYmVsW2NsYXNzKj0iaXRlbSJdLGRpdltjbGFzcyo9Ikl0ZW0iXXsnLAogICAgICAnYm9yZGVyOjJweCBzb2xpZCB7e2NvckJvcmRhfX0gIWltcG9ydGFudDsnLAogICAgICAnYm9yZGVyLXJhZGl1czp7e2JvcmRlclJhZGl1c319ICFpbXBvcnRhbnQ7JywKICAgICAgJ3BhZGRpbmc6e3twYWRkaW5nfX0gIWltcG9ydGFudDsnLAogICAgICAnY3Vyc29yOnBvaW50ZXI7cG9zaXRpb246cmVsYXRpdmU7JywKICAgICAgJ2JhY2tncm91bmQ6e3tjb3JGdW5kb319ICFpbXBvcnRhbnQ7JywKICAgICAgJ3RyYW5zaXRpb246YWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTsnLAogICAgICAnZGlzcGxheTpibG9jazttYXJnaW4tYm90dG9tOnt7Z2FwfX07JywKICAgICAgJ2NvbG9yOnt7Y29yVGV4dG99fTtmb250LWZhbWlseTpzYW5zLXNlcmlmO30nLAoKICAgICcuaXRlbTpob3ZlcixsYWJlbFtjbGFzcyo9Iml0ZW0iXTpob3ZlcnsnLAogICAgICAnYm9yZGVyLWNvbG9yOnt7Y29yUHJpbmNpcGFsfX0gIWltcG9ydGFudDsnLAogICAgICAnYm94LXNoYWRvdzowIDAgMTVweCB7e2Nvckdsb3dIb3Zlcn19OycsCiAgICAgICd0cmFuc2Zvcm06dHJhbnNsYXRlWCh7e2hvdmVyU2hpZnR9fSk7fScsCgogICAgJy5pdGVtIGlucHV0LGxhYmVsIGlucHV0W3R5cGU9InJhZGlvIl17ZGlzcGxheTpub25lICFpbXBvcnRhbnQ7fScsCgogICAgJy5pdGVtOjpiZWZvcmUsbGFiZWxbY2xhc3MqPSJpdGVtIl06OmJlZm9yZXsnLAogICAgICAnY29udGVudDoiIjt3aWR0aDp7e3RhbWFuaG9Cb2luaGF9fXB4O2hlaWdodDp7e3RhbWFuaG9Cb2luaGF9fXB4OycsCiAgICAgICdiYWNrZ3JvdW5kOnt7Y29yUHJpbmNpcGFsfX07JywKICAgICAgJ3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6e3tib2luaGFMZWZ0fX07dG9wOjUwJTsnLAogICAgICAndHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7JywKICAgICAgJ2JvcmRlci1yYWRpdXM6NTAlO3RyYW5zaXRpb246YWxsIDAuM3MgZWFzZTsnLAogICAgICAnYm94LXNoYWRvdzonLAogICAgICAgICcwIDAgNnB4IHt7Y29yR2xvd0Jhc2V9fSwnLAogICAgICAgICcwIDAgMTJweCB7e2Nvckdsb3dCYXNlU3VhdmV9fTt9JywKCiAgICAnLml0ZW06OmFmdGVyLGxhYmVsW2NsYXNzKj0iaXRlbSJdOjphZnRlcnsnLAogICAgICAnY29udGVudDoiIjt3aWR0aDo0MHB4O2hlaWdodDo0MHB4OycsCiAgICAgICdwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Ont7YXVyYUxlZnR9fTt0b3A6NTAlOycsCiAgICAgICd0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtib3JkZXItcmFkaXVzOjUwJTsnLAogICAgICAnYmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoY2lyY2xlLHt7Y29yQXVyYX19IDAlLHRyYW5zcGFyZW50IDcwJSk7JywKICAgICAgJ29wYWNpdHk6MDt0cmFuc2l0aW9uOjAuM3M7ZmlsdGVyOmJsdXIoMTBweCk7fScsCgogICAgJ2xhYmVsW2NsYXNzKj0iaXRlbSJdOmhhcyhpbnB1dDpjaGVja2VkKSwnLAogICAgJy5pdGVtOmhhcyhpbnB1dDpjaGVja2VkKXsnLAogICAgICAnYm9yZGVyLWNvbG9yOnt7Y29yUHJpbmNpcGFsfX0gIWltcG9ydGFudDsnLAogICAgICAnYmFja2dyb3VuZDp7e2NvckZ1bmRvQXRpdm99fSAhaW1wb3J0YW50O30nLAoKICAgICdsYWJlbFtjbGFzcyo9Iml0ZW0iXTpoYXMoaW5wdXQ6Y2hlY2tlZCk6OmJlZm9yZSwnLAogICAgJy5pdGVtOmhhcyhpbnB1dDpjaGVja2VkKTo6YmVmb3JleycsCiAgICAgICdiYWNrZ3JvdW5kOnt7Y29yQm9pbmhhQXRpdmF9fTsnLAogICAgICAnYm94LXNoYWRvdzonLAogICAgICAgICcwIDAgMTBweCB7e2NvckJvaW5oYUF0aXZhfX0sJywKICAgICAgICAnMCAwIDIwcHgge3tjb3JCb2luaGFBdGl2YX19LCcsCiAgICAgICAgJzAgMCAzNXB4IHt7Y29yUHJpbmNpcGFsfX0sJywKICAgICAgICAnMCAwIDYwcHgge3tjb3JHbG93Rm9ydGV9fTsnLAogICAgICAndHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMS4yNSk7JywKICAgICAgJ2FuaW1hdGlvbjpvZ1B1bHNlIHt7dmVsb2NpZGFkZVB1bHNvfX1zIGluZmluaXRlIGVhc2UtaW4tb3V0O30nLAoKICAgICdsYWJlbFtjbGFzcyo9Iml0ZW0iXTpoYXMoaW5wdXQ6Y2hlY2tlZCk6OmFmdGVyLCcsCiAgICAnLml0ZW06aGFzKGlucHV0OmNoZWNrZWQpOjphZnRlcntvcGFjaXR5OjE7fScsCgogICAgJ0BrZXlmcmFtZXMgb2dQdWxzZXsnLAogICAgICAnMCV7Ym94LXNoYWRvdzowIDAgMTBweCB7e2NvckJvaW5oYUF0aXZhfX0sMCAwIDIwcHgge3tjb3JQcmluY2lwYWx9fSwwIDAgMzBweCB7e2Nvckdsb3dGb3J0ZX19O30nLAogICAgICAnNTAle2JveC1zaGFkb3c6MCAwIDIwcHgge3tjb3JEZXN0YXF1ZX19LDAgMCA0MHB4IHt7Y29yQm9pbmhhQXRpdmF9fSwwIDAgNzBweCB7e2Nvckdsb3dNYXh9fTt9JywKICAgICAgJzEwMCV7Ym94LXNoYWRvdzowIDAgMTBweCB7e2NvckJvaW5oYUF0aXZhfX0sMCAwIDIwcHgge3tjb3JQcmluY2lwYWx9fSwwIDAgMzBweCB7e2Nvckdsb3dGb3J0ZX19O319JywKICBdLmpvaW4oJycpOwoKICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpOwogIHN0eWxlLmlkID0gJ29nLXZhcmlhdmVpc3YxLXN0eWxlJzsKICBzdHlsZS5pbm5lckhUTUwgPSBjc3M7CiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7Cn0pKCk7';

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

  var corP   = v.corPrincipal   || '#8a2eff';
  var corBA  = v.corBoinhaAtiva || '#a855f7';
  var corD   = v.corDestaque    || '#c084fc';
  var corF   = v.corFundo       || '#1a1a1a';
  var corFA  = v.corFundoAtivo  || '#252525';
  var corB   = v.corBorda       || '#2d2d2d';
  var corT   = v.corTexto       || '#ffffff';
  var radius = v.borderRadius   || '10px';
  var pad    = v.padding        || '16px 20px 16px 60px';
  var gap    = v.gap            || '12px';
  var shift  = v.hoverShift     || '5px';
  var tamB   = v.tamanhoBoinha  || '14';
  var leftB  = v.boinhaLeft     || '20px';
  var leftA  = v.auraLeft       || '7px';
  var velP   = v.velocidadePulso|| '1.5';
  var glowH  = v.corGlowHover   || 'rgba(138,46,255,0.25)';
  var glowB  = v.corGlowBase    || 'rgba(138,46,255,0.7)';
  var glowBS = v.corGlowBaseSuave|| 'rgba(138,46,255,0.5)';
  var glowF  = v.corGlowForte   || 'rgba(138,46,255,0.9)';
  var glowM  = v.corGlowMax     || 'rgba(168,85,247,1)';
  var aura   = v.corAura        || 'rgba(138,46,255,0.8)';

  var opcoes = ['Netflix 1 Tela — 30 dias', 'Netflix 2 Telas — 30 dias', 'Netflix 4K — 30 dias'];

  var itensHtml = opcoes.map(function(nome, i) {
    var ativo = i === 0;
    return '<div style="'
      + 'border:2px solid ' + (ativo ? corP : corB) + ';'
      + 'border-radius:' + radius + ';'
      + 'padding:' + pad + ';'
      + 'cursor:pointer;position:relative;'
      + 'background:' + (ativo ? corFA : corF) + ';'
      + 'margin-bottom:' + gap + ';'
      + 'color:' + corT + ';font-family:sans-serif;font-size:.9rem;font-weight:600;'
      + (ativo ? 'box-shadow:0 0 0 0;' : '')
    + '">'
    // bolha
    + '<div style="'
      + 'position:absolute;left:' + leftB + ';top:50%;transform:translateY(-50%);'
      + 'width:' + tamB + 'px;height:' + tamB + 'px;border-radius:50%;'
      + 'background:' + (ativo ? corBA : corP) + ';'
      + 'box-shadow:0 0 6px ' + glowB + ',0 0 12px ' + glowBS + ';'
    + '"></div>'
    + nome
    + '</div>';
  }).join('');

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>'
    + '*{box-sizing:border-box;margin:0;padding:0;}'
    + 'body{background:#111;padding:28px;min-height:480px;}'
    + '@keyframes ogPulse{'
      + '0%{box-shadow:0 0 10px ' + corBA + ',0 0 20px ' + corP + ',0 0 30px ' + glowF + ';}'
      + '50%{box-shadow:0 0 20px ' + corD + ',0 0 40px ' + corBA + ',0 0 70px ' + glowM + ';}'
      + '100%{box-shadow:0 0 10px ' + corBA + ',0 0 20px ' + corP + ',0 0 30px ' + glowF + ';}'
    + '}'
    + '.ativo-bolha{animation:ogPulse ' + velP + 's infinite ease-in-out;transform:translateY(-50%) scale(1.25)!important;}'
    + '</style></head><body>'
    + '<p style="color:#555;font-size:.72rem;font-family:sans-serif;margin-bottom:16px;letter-spacing:.08em;text-transform:uppercase;">Escolha o plano</p>'
    + itensHtml.replace(
        'box-shadow:0 0 6px ' + glowB + ',0 0 12px ' + glowBS + ';">',
        'box-shadow:0 0 6px ' + glowB + ',0 0 12px ' + glowBS + ';" class="ativo-bolha">'
      )
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