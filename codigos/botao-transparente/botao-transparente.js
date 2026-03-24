// =============================================================
//  OG! — botao-transparente.js
// =============================================================

const COMPONENT = {
  title:       'Botao de Compra Transparente',
  description: 'Estiliza o botao de comprar dos cards de produto da Ereemby com fundo dark/transparente, borda sutil, efeito shine e animacao de hover. Sem alterar o restante do card.',
  tags:        ['Botao', 'Comprar', 'CSS', 'Hover', 'Shine', 'Gratis'],

  fields: [
    // Fundo
    { id: 'background',   label: 'Fundo do Botao',         type: 'text',  placeholder: 'Ex: linear-gradient(135deg, #2a2a2a, #0a0a0a)', default: 'linear-gradient(135deg, #2a2a2a, #0a0a0a)', required: true  },

    // Borda
    { id: 'espessuraBorda', label: 'Espessura da Borda (px)', type: 'text',  placeholder: 'Ex: 1',                      default: '1',                           required: true  },
    { id: 'corBorda',       label: 'Cor da Borda (rgba)',     type: 'text',  placeholder: 'Ex: rgba(255,255,255,0.2)',   default: 'rgba(255,255,255,0.2)',        required: false },
    { id: 'corBordaHover',  label: 'Cor da Borda Hover (rgba)', type: 'text', placeholder: 'Ex: rgba(255,255,255,0.3)', default: 'rgba(255,255,255,0.3)',        required: false },
    { id: 'borderRadius',   label: 'Border Radius',           type: 'text',  placeholder: 'Ex: 12px',                   default: '12px',                         required: true  },

    // Layout
    { id: 'padding',    label: 'Padding',      type: 'text', placeholder: 'Ex: 10px 12px', default: '10px 12px', required: true  },
    { id: 'marginTop',  label: 'Margin Top',   type: 'text', placeholder: 'Ex: 12px',      default: '12px',      required: false },

    // Texto
    { id: 'corTexto',      label: 'Cor do Texto',      type: 'color', default: '#ffffff' },
    { id: 'pesoTexto',     label: 'Peso da Fonte',     type: 'text',  placeholder: 'Ex: 750',   default: '750',   required: false },
    { id: 'tamanhoTexto',  label: 'Tamanho da Fonte',  type: 'text',  placeholder: 'Ex: 11px',  default: '11px',  required: true  },
    { id: 'espacamento',   label: 'Letter Spacing',    type: 'text',  placeholder: 'Ex: 0.5px', default: '0.5px', required: false },
    { id: 'textoTransform',label: 'Text Transform',    type: 'text',  placeholder: 'Ex: uppercase', default: 'uppercase', required: false },

    // Sombra normal
    { id: 'sombraY',    label: 'Sombra Y (px)',   type: 'text', placeholder: 'Ex: 12', default: '12', required: false },
    { id: 'sombraBlur', label: 'Sombra Blur (px)', type: 'text', placeholder: 'Ex: 28', default: '28', required: false },
    { id: 'corSombra',  label: 'Cor da Sombra (rgba)', type: 'text', placeholder: 'Ex: rgba(0,0,0,0.5)', default: 'rgba(0,0,0,0.5)', required: false },
    { id: 'corInset',   label: 'Cor Inset (rgba)',     type: 'text', placeholder: 'Ex: rgba(255,255,255,0.1)', default: 'rgba(255,255,255,0.1)', required: false },

    // Sombra hover
    { id: 'hoverLift',       label: 'Elevacao no Hover',       type: 'text', placeholder: 'Ex: -1px',  default: '-1px',  required: false },
    { id: 'sombraHoverY',    label: 'Sombra Hover Y (px)',     type: 'text', placeholder: 'Ex: 16',    default: '16',    required: false },
    { id: 'sombraHoverBlur', label: 'Sombra Hover Blur (px)',  type: 'text', placeholder: 'Ex: 34',    default: '34',    required: false },
    { id: 'corSombraHover',  label: 'Cor Sombra Hover (rgba)', type: 'text', placeholder: 'Ex: rgba(0,0,0,0.7)', default: 'rgba(0,0,0,0.7)', required: false },
    { id: 'corInsetHover',   label: 'Cor Inset Hover (rgba)',  type: 'text', placeholder: 'Ex: rgba(255,255,255,0.2)', default: 'rgba(255,255,255,0.2)', required: false },

    // Shine
    { id: 'larguraShine',    label: 'Largura do Shine',     type: 'text',  placeholder: 'Ex: 60%',                    default: '60%',                          required: false },
    { id: 'corShine',        label: 'Cor do Shine (rgba)',  type: 'text',  placeholder: 'Ex: rgba(255,255,255,0.4)', default: 'rgba(255,255,255,0.4)',          required: false },
    { id: 'velocidadeShine', label: 'Velocidade do Shine',  type: 'text',  placeholder: 'Ex: 0.6s',                  default: '0.6s',                          required: false },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = 'LnByb2R1Y3RfY2FyZCBidXR0b24gewogIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50OwogIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDsKICBiYWNrZ3JvdW5kOiB7e2JhY2tncm91bmR9fSAhaW1wb3J0YW50OwogIGJvcmRlcjoge3tlc3Blc3N1cmFCb3JkYX19cHggc29saWQge3tjb3JCb3JkYX19ICFpbXBvcnRhbnQ7CiAgYm9yZGVyLXJhZGl1czoge3tib3JkZXJSYWRpdXN9fSAhaW1wb3J0YW50OwogIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7CiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50OwogIHBhZGRpbmc6IHt7cGFkZGluZ319ICFpbXBvcnRhbnQ7CiAgY29sb3I6IHt7Y29yVGV4dG99fSAhaW1wb3J0YW50OwogIGZvbnQtd2VpZ2h0OiB7e3Blc29UZXh0b319ICFpbXBvcnRhbnQ7CiAgZm9udC1zaXplOiB7e3RhbWFuaG9UZXh0b319ICFpbXBvcnRhbnQ7CiAgbGV0dGVyLXNwYWNpbmc6IHt7ZXNwYWNhbWVudG99fSAhaW1wb3J0YW50OwogIHRleHQtdHJhbnNmb3JtOiB7e3RleHRvVHJhbnNmb3JtfX0gIWltcG9ydGFudDsKICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7CiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OwogIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDsKICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OwogIHotaW5kZXg6IDEgIWltcG9ydGFudDsKICBib3gtc2hhZG93OgogICAgMCB7e3NvbWJyYVl9fXB4IHt7c29tYnJhQmx1cn19cHgge3tjb3JTb21icmF9fSwKICAgIGluc2V0IDAgMXB4IDAge3tjb3JJbnNldH19ICFpbXBvcnRhbnQ7CiAgdHJhbnNpdGlvbjoKICAgIHRyYW5zZm9ybSAxODBtcyBjdWJpYy1iZXppZXIoMC4yLDAuOCwwLjIsMSksCiAgICBib3gtc2hhZG93IDE4MG1zIGN1YmljLWJlemllcigwLjIsMC44LDAuMiwxKSAhaW1wb3J0YW50OwogIG1hcmdpbi10b3A6IHt7bWFyZ2luVG9wfX0gIWltcG9ydGFudDsKICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDsKfQoucHJvZHVjdF9jYXJkIGJ1dHRvbjo6YWZ0ZXIgewogIGNvbnRlbnQ6ICcnICFpbXBvcnRhbnQ7CiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7CiAgdG9wOiAwICFpbXBvcnRhbnQ7CiAgbGVmdDogLTE1MCUgIWltcG9ydGFudDsKICB3aWR0aDoge3tsYXJndXJhU2hpbmV9fSAhaW1wb3J0YW50OwogIGhlaWdodDogMTAwJSAhaW1wb3J0YW50OwogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgKICAgIHRvIHJpZ2h0LAogICAgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwKICAgIHt7Y29yU2hpbmV9fSA1MCUsCiAgICByZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUKICApICFpbXBvcnRhbnQ7CiAgdHJhbnNmb3JtOiBza2V3WCgtMjVkZWcpICFpbXBvcnRhbnQ7CiAgdHJhbnNpdGlvbjogbGVmdCB7e3ZlbG9jaWRhZGVTaGluZX19IGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7CiAgei1pbmRleDogLTEgIWltcG9ydGFudDsKfQoucHJvZHVjdF9jYXJkIGJ1dHRvbjpob3Zlcjo6YWZ0ZXIgewogIGxlZnQ6IDE1MCUgIWltcG9ydGFudDsKfQoucHJvZHVjdF9jYXJkIGJ1dHRvbjpob3ZlciB7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKHt7aG92ZXJMaWZ0fX0pICFpbXBvcnRhbnQ7CiAgYm94LXNoYWRvdzoKICAgIDAge3tzb21icmFIb3Zlcll9fXB4IHt7c29tYnJhSG92ZXJCbHVyfX1weCB7e2NvclNvbWJyYUhvdmVyfX0sCiAgICBpbnNldCAwIDFweCAwIHt7Y29ySW5zZXRIb3Zlcn19ICFpbXBvcnRhbnQ7CiAgYm9yZGVyLWNvbG9yOiB7e2NvckJvcmRhSG92ZXJ9fSAhaW1wb3J0YW50Owp9';
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

  var bg          = v.background      || 'linear-gradient(135deg, #2a2a2a, #0a0a0a)';
  var espBorda    = v.espessuraBorda  || '1';
  var corBorda    = v.corBorda        || 'rgba(255,255,255,0.2)';
  var corBordaH   = v.corBordaHover  || 'rgba(255,255,255,0.3)';
  var radius      = v.borderRadius    || '12px';
  var padding     = v.padding         || '10px 12px';
  var marginTop   = v.marginTop       || '12px';
  var corTxt      = v.corTexto        || '#ffffff';
  var pesoTxt     = v.pesoTexto       || '750';
  var tamTxt      = v.tamanhoTexto    || '11px';
  var spacing     = v.espacamento     || '0.5px';
  var transform   = v.textoTransform  || 'uppercase';
  var somY        = v.sombraY         || '12';
  var somBlur     = v.sombraBlur      || '28';
  var corSom      = v.corSombra       || 'rgba(0,0,0,0.5)';
  var corInset    = v.corInset        || 'rgba(255,255,255,0.1)';
  var lift        = v.hoverLift       || '-1px';
  var somHY       = v.sombraHoverY    || '16';
  var somHBlur    = v.sombraHoverBlur || '34';
  var corSomH     = v.corSombraHover  || 'rgba(0,0,0,0.7)';
  var corInsetH   = v.corInsetHover   || 'rgba(255,255,255,0.2)';
  var larShine    = v.larguraShine    || '60%';
  var corShine    = v.corShine        || 'rgba(255,255,255,0.4)';
  var velShine    = v.velocidadeShine || '0.6s';

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>'
    + '*{box-sizing:border-box;margin:0;padding:0;}'
    + 'body{background:#0d0d0d;display:flex;align-items:center;justify-content:center;gap:24px;flex-wrap:wrap;min-height:480px;padding:32px;}'
    + '.card{background:#111;border:1px solid #1e1e1e;border-radius:16px;padding:20px;width:200px;display:flex;flex-direction:column;gap:8px;}'
    + '.card-img{width:100%;height:110px;background:#1a1a1a;border-radius:10px;}'
    + '.card-name{color:#e2e2e2;font-size:13px;font-weight:600;font-family:system-ui,sans-serif;}'
    + '.card-price{color:#aaa;font-size:12px;font-family:system-ui,sans-serif;}'
    + '.btn{'
      + 'position:relative;overflow:hidden;'
      + 'background:' + bg + ';'
      + 'border:' + espBorda + 'px solid ' + corBorda + ';'
      + 'border-radius:' + radius + ';'
      + 'width:100%;padding:' + padding + ';'
      + 'color:' + corTxt + ';font-weight:' + pesoTxt + ';font-size:' + tamTxt + ';'
      + 'letter-spacing:' + spacing + ';text-transform:' + transform + ';'
      + 'white-space:nowrap;display:flex;align-items:center;justify-content:center;'
      + 'box-shadow:0 ' + somY + 'px ' + somBlur + 'px ' + corSom + ',inset 0 1px 0 ' + corInset + ';'
      + 'margin-top:' + marginTop + ';cursor:pointer;font-family:system-ui,sans-serif;'
      + 'transition:transform 180ms cubic-bezier(0.2,0.8,0.2,1),box-shadow 180ms cubic-bezier(0.2,0.8,0.2,1),border-color 180ms;'
    + '}'
    + '.btn::after{'
      + 'content:"";position:absolute;top:0;left:-150%;width:' + larShine + ';height:100%;'
      + 'background:linear-gradient(to right,rgba(255,255,255,0) 0%,' + corShine + ' 50%,rgba(255,255,255,0) 100%);'
      + 'transform:skewX(-25deg);transition:left ' + velShine + ' ease-in-out;z-index:-1;'
    + '}'
    + '.btn:hover::after{left:150%;}'
    + '.btn:hover{'
      + 'transform:translateY(' + lift + ');'
      + 'box-shadow:0 ' + somHY + 'px ' + somHBlur + 'px ' + corSomH + ',inset 0 1px 0 ' + corInsetH + ';'
      + 'border-color:' + corBordaH + ';'
    + '}'
    + '</style></head><body>'
    + '<div class="card">'
      + '<div class="card-img"></div>'
      + '<div class="card-name">Nome do Produto</div>'
      + '<div class="card-price">R$ 29,90</div>'
      + '<button class="btn">Comprar Agora</button>'
    + '</div>'
    + '<div class="card">'
      + '<div class="card-img"></div>'
      + '<div class="card-name">Outro Produto</div>'
      + '<div class="card-price">R$ 49,90</div>'
      + '<button class="btn">Adicionar ao Carrinho</button>'
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