// =============================================================
//  OG! — popup-bemvindo.js
// =============================================================

const COMPONENT = {
  title:       'Fundo de Constelação com Partículas Interativas',
  description: 'Fundo animado com partículas conectadas que formam constelações, com interação ao mouse. Cores neon personalizáveis.',

  fields: [
    { id: 'numParticles',  label: 'Número de Partículas',        type: 'text',  placeholder: 'Ex: 150', default: '150', required: true },
    { id: 'particleColor', label: 'Cor das Partículas',          type: 'color', default: '#a020f0' },
    { id: 'linkDistance',  label: 'Distância de Conexão (px)',   type: 'text',  placeholder: 'Ex: 120', default: '120', required: true },
    { id: 'mouseRadius',   label: 'Raio de Interação do Mouse',  type: 'text',  placeholder: 'Ex: 150', default: '150', required: true },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = '';
const BASE_JS_B64   = 'KGZ1bmN0aW9uICgpIHsNCiAgJ3VzZSBzdHJpY3QnOw0KDQogIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uc3RlbGxhdGlvbi1iZycpKSByZXR1cm47DQoNCiAgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7DQogICAgY29uc3QgcmVzdWx0ID0gL14jPyhbYS1mXGRdezJ9KShbYS1mXGRdezJ9KShbYS1mXGRzezJ9KSQvaS5leGVjKGhleCk7DQogICAgcmV0dXJuIHJlc3VsdA0KICAgICAgPyB7DQogICAgICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksDQogICAgICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksDQogICAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNikNCiAgICAgICAgfQ0KICAgICAgOiBudWxsOw0KICB9DQoNCiAgLyogQ1NTICovDQogIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTsNCiAgc3R5bGUudGV4dENvbnRlbnQgPSBgDQogICAgI2NvbnN0ZWxsYXRpb24tYmcgew0KICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7DQogICAgICB0b3A6IDA7DQogICAgICBsZWZ0OiAwOw0KICAgICAgd2lkdGg6IDEwMHZ3Ow0KICAgICAgaGVpZ2h0OiAxMDB2aDsNCiAgICAgIHotaW5kZXg6IC0xOw0KICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7DQogICAgfQ0KICBgOw0KICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTsNCg0KICAvKiBDYW52YXMgKi8NCiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7DQogIGNhbnZhcy5pZCA9ICdjb25zdGVsbGF0aW9uLWJnJzsNCiAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGNhbnZhcyk7DQoNCiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7DQoNCiAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkgew0KICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoOw0KICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7DQogIH0NCg0KICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzKTsNCiAgcmVzaXplQ2FudmFzKCk7DQoNCiAgY29uc3QgbnVtUGFydGljbGVzID0gMTUwOw0KICBjb25zdCBsaW5rRGlzdGFuY2UgPSAxMjA7DQogIGNvbnN0IG1vdXNlUmFkaXVzID0gMTUwOw0KDQogIGNvbnN0IHBhcnRpY2xlQ29sb3IgPSAnI2EwMjBmMCc7IC8vIHJveG8gbmVvbg0KICBjb25zdCBwYXJ0aWNsZUNvbG9yUmdiID0gaGV4VG9SZ2IocGFydGljbGVDb2xvcik7DQogIGNvbnN0IGxpbmVDb2xvciA9IHBhcnRpY2xlQ29sb3JSZ2INCiAgICA/IGByZ2JhKCR7cGFydGljbGVDb2xvclJnYi5yfSwgJHtwYXJ0aWNsZUNvbG9yUmdiLmd9LCAke3BhcnRpY2xlQ29sb3JSZ2IuYn0sIGANCiAgICA6ICdyZ2JhKDE2MCwgMzIsIDI0MCwgJzsNCg0KICBjb25zdCBwYXJ0aWNsZXMgPSBbXTsNCg0KICBjb25zdCBtb3VzZSA9IHsNCiAgICB4OiBudWxsLA0KICAgIHk6IG51bGwNCiAgfTsNCg0KICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHsNCiAgICBtb3VzZS54ID0gZS5jbGllbnRYOw0KICAgIG1vdXNlLnkgPSBlLmNsaWVudFk7DQogIH0pOw0KDQogIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHsNCiAgICBtb3VzZS54ID0gbnVsbDsNCiAgICBtb3VzZS55ID0gbnVsbDsNCiAgfSk7DQoNCiAgY2xhc3MgUGFydGljbGUgew0KICAgIGNvbnN0cnVjdG9yKCkgew0KICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDsNCiAgICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0Ow0KICAgICAgdGhpcy52eCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuNjsNCiAgICAgIHRoaXMudnkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjY7DQogICAgICB0aGlzLnNpemUgPSBNYXRoLnJhbmRvbSgpICogMiArIDE7DQogICAgfQ0KDQogICAgdXBkYXRlKCkgew0KICAgICAgdGhpcy54ICs9IHRoaXMudng7DQogICAgICB0aGlzLnkgKz0gdGhpcy52eTsNCg0KICAgICAgLy8gYm91bmNlDQogICAgICBpZiAodGhpcy54IDwgMCB8fCB0aGlzLnggPiBjYW52YXMud2lkdGgpIHRoaXMudnggKj0gLTE7DQogICAgICBpZiAodGhpcy55IDwgMCB8fCB0aGlzLnkgPiBjYW52YXMuaGVpZ2h0KSB0aGlzLnZ5ICo9IC0xOw0KDQogICAgICAvLyBpbnRlcmHDg8Knw4PCo28gY29tIG1vdXNlDQogICAgICBpZiAobW91c2UueCAhPT0gbnVsbCkgew0KICAgICAgICBjb25zdCBkeCA9IHRoaXMueCAtIG1vdXNlLng7DQogICAgICAgIGNvbnN0IGR5ID0gdGhpcy55IC0gbW91c2UueTsNCiAgICAgICAgY29uc3QgZGlzdCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7DQoNCiAgICAgICAgaWYgKGRpc3QgPCBtb3VzZVJhZGl1cykgew0KICAgICAgICAgIGNvbnN0IGZvcmNlID0gKG1vdXNlUmFkaXVzIC0gZGlzdCkgLyBtb3VzZVJhZGl1czsNCiAgICAgICAgICB0aGlzLnggKz0gKGR4IC8gZGlzdCkgKiBmb3JjZSAqIDI7DQogICAgICAgICAgdGhpcy55ICs9IChkeSAvIGRpc3QpICogZm9yY2UgKiAyOw0KICAgICAgICB9DQogICAgICB9DQogICAgfQ0KDQogICAgZHJhdygpIHsNCiAgICAgIGN0eC5iZWdpblBhdGgoKTsNCiAgICAgIGN0eC5maWxsU3R5bGUgPSBwYXJ0aWNsZUNvbG9yOw0KDQogICAgICAvLyBnbG93DQogICAgICBjdHguc2hhZG93Q29sb3IgPSBwYXJ0aWNsZUNvbG9yOw0KICAgICAgY3R4LnNoYWRvd0JsdXIgPSAxMDsNCg0KICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5zaXplLCAwLCBNYXRoLlBJICogMik7DQogICAgICBjdHguZmlsbCgpOw0KDQogICAgICBjdHguc2hhZG93Qmx1ciA9IDA7DQogICAgfQ0KICB9DQoNCiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1QYXJ0aWNsZXM7IGkrKykgew0KICAgIHBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZSgpKTsNCiAgfQ0KDQogIGZ1bmN0aW9uIGFuaW1hdGUoKSB7DQogICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOw0KDQogICAgcGFydGljbGVzLmZvckVhY2goKHApID0+IHsNCiAgICAgIHAudXBkYXRlKCk7DQogICAgICBwLmRyYXcoKTsNCiAgICB9KTsNCg0KICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUGFydGljbGVzOyBpKyspIHsNCiAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IG51bVBhcnRpY2xlczsgaisrKSB7DQogICAgICAgIGNvbnN0IGR4ID0gcGFydGljbGVzW2ldLnggLSBwYXJ0aWNsZXNbal0ueDsNCiAgICAgICAgY29uc3QgZHkgPSBwYXJ0aWNsZXNbaV0ueSAtIHBhcnRpY2xlc1tqXS55Ow0KICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7DQoNCiAgICAgICAgaWYgKGRpc3RhbmNlIDwgbGlua0Rpc3RhbmNlKSB7DQogICAgICAgICAgbGV0IG9wYWNpdHkgPSAxIC0gZGlzdGFuY2UgLyBsaW5rRGlzdGFuY2U7DQoNCiAgICAgICAgICAvLyBtYWlzIGZvcnRlIHBlcnRvIGRvIG1vdXNlDQogICAgICAgICAgaWYgKG1vdXNlLnggIT09IG51bGwpIHsNCiAgICAgICAgICAgIGNvbnN0IG14ID0gcGFydGljbGVzW2ldLnggLSBtb3VzZS54Ow0KICAgICAgICAgICAgY29uc3QgbXkgPSBwYXJ0aWNsZXNbaV0ueSAtIG1vdXNlLnk7DQogICAgICAgICAgICBjb25zdCBtZCA9IE1hdGguc3FydChteCAqIG14ICsgbXkgKiBteSk7DQoNCiAgICAgICAgICAgIGlmIChtZCA8IG1vdXNlUmFkaXVzKSB7DQogICAgICAgICAgICAgIG9wYWNpdHkgKz0gMC41Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgIH0NCg0KICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGxpbmVDb2xvciArIG9wYWNpdHkgKyAnKSc7DQogICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7DQoNCiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7DQogICAgICAgICAgY3R4Lm1vdmVUbyhwYXJ0aWNsZXNbaV0ueCwgcGFydGljbGVzW2ldLnkpOw0KICAgICAgICAgIGN0eC5saW5lVG8ocGFydGljbGVzW2pdLngsIHBhcnRpY2xlc1tqXS55KTsNCiAgICAgICAgICBjdHguc3Ryb2tlKCk7DQogICAgICAgIH0NCiAgICAgIH0NCiAgICB9DQoNCiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7DQogIH0NCg0KICBhbmltYXRlKCk7DQp9KSgpOw==';

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

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>'
    + '*{box-sizing:border-box;margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;}'
    + 'body{background:#000;min-height:480px;display:flex;align-items:center;justify-content:center;padding:20px;color:#fff;}'
    + '#constellation-bg{position:fixed!important;top:0;left:0;width:100vw;height:100vh;z-index:-1;pointer-events:none;}'
    + 'h1{text-align:center;z-index:1;position:relative;}'
    + '</style></head><body>'
    + '<h1>Constelação Interativa</h1>'
    + '<script>' + BASE_JS + '</script>'
    + '</body></html>';

  var old = box.querySelector('iframe');
  if (old) old.remove();
  var iframe = document.createElement('iframe');
  iframe.style.cssText = 'width:100%;height:520px;border:none;display:block;border-radius:14px;';
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