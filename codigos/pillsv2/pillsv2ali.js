// =============================================================
//  OG! — pillsv2ali.js  (Cabecalho de Categoria)
// =============================================================

const COMPONENT = {
  title:       'Cabecalho de Categoria',
  description: 'Estiliza o titulo das secoes de categoria da Ereemby com linhas decorativas laterais em fade e glow. Cor, espessura, glow e seletor totalmente customizaveis.',
  tags:        ['Categoria', 'Cabecalho', 'CSS', 'Glow', 'Gratis'],

  fields: [
    // Seletor
    { id: 'seletorContainer', label: '🎯 Parte do seletor CSS do container (class*=)', type: 'text',
      placeholder: 'Ex: kyJCxd', default: 'kyJCxd', required: true },

    // Titulo
    { id: 'corTitulo',           label: 'Cor do Titulo',             type: 'color', default: '#ffffff' },
    { id: 'tamanhoTitulo',       label: 'Tamanho do Titulo (PC)',     type: 'text',  placeholder: 'Ex: 1.5rem', default: '1.5rem', required: false },
    { id: 'tamanhoTituloMobile', label: 'Tamanho do Titulo (Mobile)', type: 'text',  placeholder: 'Ex: 1.2rem', default: '1.2rem', required: false },
    { id: 'pesoTitulo',          label: 'Peso da Fonte',              type: 'text',  placeholder: 'Ex: 700',    default: '700',    required: false },

    // Layout
    { id: 'gap',    label: 'Gap entre linha e titulo', type: 'text', placeholder: 'Ex: 15px',    default: '15px',    required: false },
    { id: 'margin', label: 'Margin do container',      type: 'text', placeholder: 'Ex: 30px 0',  default: '30px 0',  required: false },

    // Linhas decorativas
    { id: 'espessuraLinha',   label: 'Espessura das linhas',        type: 'text',  placeholder: 'Ex: 1px',                       default: '1px',                        required: false },
    { id: 'corLinha',         label: 'Cor central da linha',         type: 'color', default: '#a855f7' },
    { id: 'corLinhaFade',     label: 'Cor da linha em fade (rgba)',  type: 'text',  placeholder: 'Ex: rgba(168,85,247,0.4)',       default: 'rgba(168,85,247,0.4)',        required: false },
    { id: 'intensidadeGlow',  label: 'Intensidade do Glow',          type: 'text',  placeholder: 'Ex: 8px',                       default: '8px',                        required: false },
    { id: 'corGlow',          label: 'Cor do Glow (rgba)',           type: 'text',  placeholder: 'Ex: rgba(168,85,247,0.6)',       default: 'rgba(168,85,247,0.6)',        required: false },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = 'IC8qIEVzdGlsbyBDdXN0b21pemFkbyBwYXJhIENhYmVjYWxob3MgZGUgQ2F0ZWdvcmlhIC0gT0chICovCgogLyogQ29udGFpbmVyIGRvIENhYmVjYWxobyAqLwogZGl2W2NsYXNzKj0ie3tzZWxldG9yQ29udGFpbmVyfX0iXSwKIC5jYXRlZ29yeS1oZWFkZXItY29udGFpbmVyIHsKICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7CiAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50OwogICAgIGdhcDoge3tnYXB9fSAhaW1wb3J0YW50OwogICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7CiAgICAgbWFyZ2luOiB7e21hcmdpbn19ICFpbXBvcnRhbnQ7CiAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7CiB9CgogLyogVGl0dWxvIGRhIENhdGVnb3JpYSAqLwogZGl2W2NsYXNzKj0ie3tzZWxldG9yQ29udGFpbmVyfX0iXSBoMSwKIGRpdltjbGFzcyo9Int7c2VsZXRvckNvbnRhaW5lcn19Il0gaDIsCiAuY2F0ZWdvcnktaGVhZGVyLWNvbnRhaW5lciBoMSwKIC5jYXRlZ29yeS1oZWFkZXItY29udGFpbmVyIGgyIHsKICAgICBjb2xvcjoge3tjb3JUaXR1bG99fSAhaW1wb3J0YW50OwogICAgIGZvbnQtc2l6ZToge3t0YW1hbmhvVGl0dWxvfX0gIWltcG9ydGFudDsKICAgICBmb250LXdlaWdodDoge3twZXNvVGl0dWxvfX0gIWltcG9ydGFudDsKICAgICBtYXJnaW46IDAgIWltcG9ydGFudDsKICAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7CiB9CgogLyogTGluaGFzIERlY29yYXRpdmFzIGNvbSBmYWRlICsgZ2xvdyAqLwogZGl2W2NsYXNzKj0ie3tzZWxldG9yQ29udGFpbmVyfX0iXTo6YmVmb3JlLAogZGl2W2NsYXNzKj0ie3tzZWxldG9yQ29udGFpbmVyfX0iXTo6YWZ0ZXIgewogICAgIGNvbnRlbnQ6ICcnICFpbXBvcnRhbnQ7CiAgICAgZmxleDogMSAhaW1wb3J0YW50OwogICAgIGhlaWdodDoge3tlc3Blc3N1cmFMaW5oYX19ICFpbXBvcnRhbnQ7CiAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7CiAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LAogICAgICAgICAgICAgdHJhbnNwYXJlbnQgMCUsCiAgICAgICAgICAgICB7e2NvckxpbmhhRmFkZX19IDIwJSwKICAgICAgICAgICAgIHt7Y29yTGluaGF9fSA1MCUsCiAgICAgICAgICAgICB7e2NvckxpbmhhRmFkZX19IDgwJSwKICAgICAgICAgICAgIHRyYW5zcGFyZW50IDEwMCUpICFpbXBvcnRhbnQ7CiAgICAgYm94LXNoYWRvdzogMCAwIHt7aW50ZW5zaWRhZGVHbG93fX0ge3tjb3JHbG93fX07CiB9CgogLyogUmVzcG9uc2l2byBNb2JpbGUgKi8KIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkgewoKICAgICBkaXZbY2xhc3MqPSJ7e3NlbGV0b3JDb250YWluZXJ9fSJdLAogICAgIC5jYXRlZ29yeS1oZWFkZXItY29udGFpbmVyIHsKICAgICAgICAgZ2FwOiAxMHB4ICFpbXBvcnRhbnQ7CiAgICAgICAgIG1hcmdpbjogMjBweCAwICFpbXBvcnRhbnQ7CiAgICAgfQoKICAgICBkaXZbY2xhc3MqPSJ7e3NlbGV0b3JDb250YWluZXJ9fSJdIGgxLAogICAgIGRpdltjbGFzcyo9Int7c2VsZXRvckNvbnRhaW5lcn19Il0gaDIsCiAgICAgLmNhdGVnb3J5LWhlYWRlci1jb250YWluZXIgaDEsCiAgICAgLmNhdGVnb3J5LWhlYWRlci1jb250YWluZXIgaDIgewogICAgICAgICBmb250LXNpemU6IHt7dGFtYW5ob1RpdHVsb01vYmlsZX19ICFpbXBvcnRhbnQ7CiAgICAgfQogfQ==';
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

  var corT    = v.corTitulo          || '#ffffff';
  var tamT    = v.tamanhoTitulo      || '1.5rem';
  var tamTM   = v.tamanhoTituloMobile|| '1.2rem';
  var peso    = v.pesoTitulo         || '700';
  var gap     = v.gap                || '15px';
  var margin  = v.margin             || '30px 0';
  var esp     = v.espessuraLinha     || '1px';
  var corL    = v.corLinha           || '#a855f7';
  var corLF   = v.corLinhaFade       || 'rgba(168,85,247,0.4)';
  var glow    = v.intensidadeGlow    || '8px';
  var corG    = v.corGlow            || 'rgba(168,85,247,0.6)';

  var categorias = ['Netflix', 'Spotify', 'Disney+', 'Prime Video'];

  var catHtml = categorias.map(function(nome) {
    return '<div style="display:flex;align-items:center;gap:' + gap + ';margin:' + margin + ';position:relative;">'
      + '<div style="flex:1;height:' + esp + ';background:linear-gradient(to right,transparent 0%,' + corLF + ' 20%,' + corL + ' 50%,' + corLF + ' 80%,transparent 100%);box-shadow:0 0 ' + glow + ' ' + corG + ';"></div>'
      + '<h2 style="color:' + corT + ';font-size:' + tamT + ';font-weight:' + peso + ';margin:0;white-space:nowrap;font-family:system-ui,sans-serif;">' + nome + '</h2>'
      + '<div style="flex:1;height:' + esp + ';background:linear-gradient(to right,transparent 0%,' + corLF + ' 20%,' + corL + ' 50%,' + corLF + ' 80%,transparent 100%);box-shadow:0 0 ' + glow + ' ' + corG + ';"></div>'
    + '</div>'
    + '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px;">'
      + ['','',''].map(function() {
          return '<div style="background:#111;border:1px solid #1e1e1e;border-radius:10px;height:80px;"></div>';
        }).join('')
    + '</div>';
  }).join('');

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>*{box-sizing:border-box;margin:0;padding:0;}body{background:#0a0a0a;padding:24px;min-height:480px;}</style>'
    + '</head><body>' + catHtml + '</body></html>';

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