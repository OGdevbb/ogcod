// =============================================================
//  OG! — footer-glass.js
//  Footer Premium Glass para Ereemby
// =============================================================

const COMPONENT = {
  title:       'Footer Premium Glass',
  description: 'Aplica efeito glassmorphism premium no footer da Ereemby. Blur, saturação, borda e sombra totalmente customizáveis.',
  tags:        ['Footer', 'Glass', 'CSS', 'JS', 'Grátis'],

  fields: [
    // Visual glass
    { id: 'corFundo',    label: 'Cor de Fundo (rgba)',         type: 'text',  placeholder: 'Ex: rgba(255,255,255,0.07)', default: 'rgba(255,255,255,0.07)', required: true  },
    { id: 'blur',        label: 'Intensidade do Blur',         type: 'text',  placeholder: 'Ex: 48px',                  default: '48px',                   required: true  },
    { id: 'saturate',    label: 'Saturação',                   type: 'text',  placeholder: 'Ex: 220%',                  default: '220%',                   required: true  },
    { id: 'brightness',  label: 'Brilho',                      type: 'text',  placeholder: 'Ex: 1.08',                  default: '1.08',                   required: true  },
    { id: 'corBorda',    label: 'Cor da Borda (rgba)',          type: 'text',  placeholder: 'Ex: rgba(255,255,255,0.28)',default: 'rgba(255,255,255,0.28)', required: false },
    { id: 'corSombra',   label: 'Cor da Sombra (rgba)',         type: 'text',  placeholder: 'Ex: rgba(0,0,0,0.22)',      default: 'rgba(0,0,0,0.22)',       required: false },
    { id: 'corInsetTop', label: 'Cor do Brilho Interno (rgba)',type: 'text',  placeholder: 'Ex: rgba(255,255,255,0.35)',default: 'rgba(255,255,255,0.35)', required: false },
    { id: 'borderRadius',label: 'Border Radius',                type: 'text',  placeholder: 'Ex: 20px',                  default: '20px',                   required: true  },
    { id: 'margin',      label: 'Margem do Footer',            type: 'text',  placeholder: 'Ex: 40px 20px 20px',        default: '40px 20px 20px',         required: true  },

    // Ícone de verificado
    { id: 'mostrarVerified', label: 'Ícone verificado no nome da loja? (qualquer texto = sim, vazio = não)', type: 'text', placeholder: 'Ex: sim', default: 'sim', required: false },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = '';
const BASE_JS_B64   = 'KGZ1bmN0aW9uICgpIHsKICAndXNlIHN0cmljdCc7CgogIGlmICh3aW5kb3cub2dGb290ZXJHbGFzc0luaWNpYWRvKSByZXR1cm47CiAgd2luZG93Lm9nRm9vdGVyR2xhc3NJbmljaWFkbyA9IHRydWU7CgogIHZhciBvZ0NTUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7CiAgb2dDU1MuaWQgPSAnb2ctZm9vdGVyLWdsYXNzLXN0eWxlJzsKICBvZ0NTUy50ZXh0Q29udGVudCA9CiAgICAnZm9vdGVyLnNjLThhMDRhY2E3LTAuV0FWcGMgeycKICAgICsgJ3Bvc2l0aW9uOnJlbGF0aXZlICFpbXBvcnRhbnQ7JwogICAgKyAnYmFja2dyb3VuZDp7e2NvckZ1bmRvfX0gIWltcG9ydGFudDsnCiAgICArICdiYWNrZHJvcC1maWx0ZXI6Ymx1cih7e2JsdXJ9fSkgc2F0dXJhdGUoe3tzYXR1cmF0ZX19KSBicmlnaHRuZXNzKHt7YnJpZ2h0bmVzc319KSAhaW1wb3J0YW50OycKICAgICsgJy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOmJsdXIoe3tibHVyfX0pIHNhdHVyYXRlKHt7c2F0dXJhdGV9fSkgYnJpZ2h0bmVzcyh7e2JyaWdodG5lc3N9fSkgIWltcG9ydGFudDsnCiAgICArICdib3JkZXI6MXB4IHNvbGlkIHt7Y29yQm9yZGF9fSAhaW1wb3J0YW50OycKICAgICsgJ2JvcmRlci1yYWRpdXM6e3tib3JkZXJSYWRpdXN9fSAhaW1wb3J0YW50OycKICAgICsgJ2JveC1zaGFkb3c6MCA4cHggMzJweCB7e2NvclNvbWJyYX19LDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMTQpLGluc2V0IDAgMXB4IDAge3tjb3JJbnNldFRvcH19LGluc2V0IDAgLTFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4wNikgIWltcG9ydGFudDsnCiAgICArICdtYXJnaW46e3ttYXJnaW59fSAhaW1wb3J0YW50OycKICAgICsgJ292ZXJmbG93OmhpZGRlbiAhaW1wb3J0YW50OycKICAgICsgJ3RyYW5zaXRpb246YWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKSAhaW1wb3J0YW50OycKICAgICsgJ30nOwogIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQob2dDU1MpOwoKICBmdW5jdGlvbiBvZ0FwcGx5KCkgewogICAgdmFyIGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3Rlci5zYy04YTA0YWNhNy0wLldBVnBjJyk7CiAgICBpZiAoIWZvb3RlcikgcmV0dXJuIGZhbHNlOwoKICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdhcHBsZS1nbGFzcy1mb290ZXInKTsKICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdvZy1wcmVtaXVtLWdsYXNzLWZvb3RlcicpOwoKICAgIC8qIElGOm1vc3RyYXJWZXJpZmllZCAqLwogICAgdmFyIGJyYW5kVGl0bGUgPSBmb290ZXIucXVlcnlTZWxlY3RvcignLnNjLWVjZmI5NjE1LTcgaDEnKTsKICAgIGlmIChicmFuZFRpdGxlICYmICFicmFuZFRpdGxlLnF1ZXJ5U2VsZWN0b3IoJy5vZy12ZXJpZmllZC1pY29uJykpIHsKICAgICAgdmFyIG9sZEljb24gPSBicmFuZFRpdGxlLnF1ZXJ5U2VsZWN0b3IoJy52ZXJpZmllZC1pY29uJyk7CiAgICAgIGlmIChvbGRJY29uKSBvbGRJY29uLnJlbW92ZSgpOwoKICAgICAgdmFyIGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsKICAgICAgaWNvbi5zcmMgPSAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9lL2U0L1R3aXR0ZXJfVmVyaWZpZWRfQmFkZ2Uuc3ZnJzsKICAgICAgaWNvbi5hbHQgPSAnVmVyaWZpZWQnOwogICAgICBpY29uLmNsYXNzTmFtZSA9ICdvZy12ZXJpZmllZC1pY29uJzsKICAgICAgaWNvbi5sb2FkaW5nID0gJ2xhenknOwogICAgICBpY29uLnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6MjBweDtoZWlnaHQ6MjBweDttYXJnaW4tbGVmdDo4cHg7dmVydGljYWwtYWxpZ246bWlkZGxlO2ZsZXgtc2hyaW5rOjA7JzsKICAgICAgYnJhbmRUaXRsZS5hcHBlbmRDaGlsZChpY29uKTsKCiAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbigpIHsKICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7CiAgICAgICAgdmFyIGZiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpOwogICAgICAgIGZiLmlubmVySFRNTCA9ICcmIzEwMDAzOyc7CiAgICAgICAgZmIuc3R5bGUuY3NzVGV4dCA9ICdkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMxREExRjIsIzBkOGJkOSk7Ym9yZGVyLXJhZGl1czo1MCU7Y29sb3I6d2hpdGU7Zm9udC1zaXplOjExcHg7Zm9udC13ZWlnaHQ6Ym9sZDtmbGV4LXNocmluazowO21hcmdpbi1sZWZ0OjZweDsnOwogICAgICAgIGJyYW5kVGl0bGUuYXBwZW5kQ2hpbGQoZmIpOwogICAgICB9KTsKICAgIH0KICAgIC8qIEVORElGICovCgogICAgcmV0dXJuIHRydWU7CiAgfQoKICB2YXIgYXR0ZW1wdHMgPSAwOwogIGZ1bmN0aW9uIHRyeUFwcGx5KCkgewogICAgYXR0ZW1wdHMrKzsKICAgIGlmIChvZ0FwcGx5KCkpIHJldHVybjsKICAgIGlmIChhdHRlbXB0cyA8IDEwKSBzZXRUaW1lb3V0KHRyeUFwcGx5LCBhdHRlbXB0cyAqIDE1MCk7CiAgfQoKICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7CiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdHJ5QXBwbHkpOwogIH0gZWxzZSB7CiAgICB0cnlBcHBseSgpOwogIH0KCiAgdmFyIG9nUGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lOwogIHNldEludGVydmFsKGZ1bmN0aW9uKCkgewogICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lICE9PSBvZ1BhdGgpIHsKICAgICAgb2dQYXRoID0gbG9jYXRpb24ucGF0aG5hbWU7CiAgICAgIGF0dGVtcHRzID0gMDsKICAgICAgc2V0VGltZW91dCh0cnlBcHBseSwgMzAwKTsKICAgIH0KICB9LCAyMDAwKTsKfSkoKTs=';


// =============================================================
//  ENGINE — não mexa abaixo desta linha
// =============================================================

function b64decode(str) {
  if (!str) return '';
  try {
    return decodeURIComponent(
      atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join('')
    );
  } catch(e) { return atob(str); }
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

// ── Preview — mostra mockup visual do footer com glass ───────
function renderPreview() {
  var v   = getVals();
  var box = document.getElementById('previewBox');

  var corFundo    = v.corFundo    || 'rgba(255,255,255,0.07)';
  var blur        = v.blur        || '48px';
  var saturate    = v.saturate    || '220%';
  var brightness  = v.brightness  || '1.08';
  var corBorda    = v.corBorda    || 'rgba(255,255,255,0.28)';
  var corSombra   = v.corSombra   || 'rgba(0,0,0,0.22)';
  var corInset    = v.corInsetTop || 'rgba(255,255,255,0.35)';
  var radius      = v.borderRadius|| '20px';
  var margin      = v.margin      || '40px 20px 20px';

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>'
    + '*{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,sans-serif;}'
    + 'body{background:linear-gradient(135deg,#0d0d1a 0%,#1a0d2e 50%,#0d1a1a 100%);min-height:480px;display:flex;flex-direction:column;justify-content:flex-end;padding:20px;}'
    + '.page-content{flex:1;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.2);font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;}'
    + '.footer{'
      + 'background:' + corFundo + ';'
      + 'backdrop-filter:blur(' + blur + ') saturate(' + saturate + ') brightness(' + brightness + ');'
      + '-webkit-backdrop-filter:blur(' + blur + ') saturate(' + saturate + ') brightness(' + brightness + ');'
      + 'border:1px solid ' + corBorda + ';'
      + 'border-radius:' + radius + ';'
      + 'box-shadow:0 8px 32px ' + corSombra + ',0 2px 8px rgba(0,0,0,.14),inset 0 1px 0 ' + corInset + ',inset 0 -1px 0 rgba(255,255,255,.06);'
      + 'margin:' + margin + ';'
      + 'padding:28px 32px;'
      + 'overflow:hidden;'
    + '}'
    + '.footer-inner{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;}'
    + '.brand{display:flex;align-items:center;gap:8px;}'
    + '.brand-name{font-size:1.1rem;font-weight:700;color:#fff;}'
    + '.verified{width:18px;height:18px;background:linear-gradient(135deg,#1DA1F2,#0d8bd9);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:bold;flex-shrink:0;}'
    + '.footer-links{display:flex;gap:20px;}'
    + '.footer-links a{color:rgba(255,255,255,.5);font-size:.8rem;text-decoration:none;}'
    + '.footer-bottom{margin-top:16px;padding-top:16px;border-top:1px solid rgba(255,255,255,.08);display:flex;justify-content:space-between;align-items:center;}'
    + '.copy{color:rgba(255,255,255,.35);font-size:.72rem;}'
    + '.badge{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:100px;padding:3px 12px;color:rgba(255,255,255,.4);font-size:.65rem;}'
    + '</style></head><body>'
    + '<div class="page-content">Conteúdo da loja</div>'
    + '<div class="footer">'
      + '<div class="footer-inner">'
        + '<div class="brand">'
          + '<div class="brand-name">Nome da Loja</div>'
          + (v.mostrarVerified ? '<div class="verified">✓</div>' : '')
        + '</div>'
        + '<div class="footer-links">'
          + '<a href="#">Produtos</a>'
          + '<a href="#">Contato</a>'
          + '<a href="#">Suporte</a>'
        + '</div>'
      + '</div>'
      + '<div class="footer-bottom">'
        + '<span class="copy">© 2025 Loja · Todos os direitos reservados</span>'
        + '<span class="badge">Ereemby</span>'
      + '</div>'
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
var curTab  = 'js';
var gen     = { html: '', css: '', js: '' };

document.getElementById('genBtn').onclick = function() {
  var v = getVals();
  if (!validate(v)) return;

  gen.html = process(BASE_HTML, v);
  gen.css  = process(BASE_CSS,  v);
  gen.js   = process(BASE_JS,   v);

  document.querySelectorAll('.code-tab').forEach(function(t) {
    t.classList.toggle('filled', gen[t.dataset.tab].length > 0);
  });
  showTab('js');
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