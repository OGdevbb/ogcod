// =============================================================
//  OG! — card-transparente.js
// =============================================================

const COMPONENT = {
  title: 'Card Transparente (Glass)',
  description: 'Estiliza o card de produto com efeito vidro claro, borda suave, brilho fosco e blur. Sem alterar o restante da estrutura do site.',
  tags: ['Card', 'Glass', 'CSS', 'Transparente', 'Gratis'],

  fields: [
    { id: 'bg1',          label: 'Intensidade Fundo 1',  type: 'text', placeholder: 'Ex: 0.40', default: '0.40', required: true  },
    { id: 'bg2',          label: 'Intensidade Fundo 2',  type: 'text', placeholder: 'Ex: 0.15', default: '0.15', required: true  },
    { id: 'bg3',          label: 'Intensidade Fundo 3',  type: 'text', placeholder: 'Ex: 0.05', default: '0.05', required: true  },
    { id: 'bordaOpacity', label: 'Opacidade da Borda',   type: 'text', placeholder: 'Ex: 0.25', default: '0.25', required: true  },
    { id: 'sombraY',      label: 'Sombra Y (px)',        type: 'text', placeholder: 'Ex: 8',    default: '8',    required: true  },
    { id: 'sombraBlur',   label: 'Sombra Blur (px)',     type: 'text', placeholder: 'Ex: 18',   default: '18',   required: true  },
    { id: 'corSombra',    label: 'Cor da Sombra (rgba)', type: 'text', placeholder: 'Ex: rgba(0,0,0,0.15)', default: 'rgba(0,0,0,0.15)', required: true },
    { id: 'insetOpacity', label: 'Opacidade do Inset',   type: 'text', placeholder: 'Ex: 0.30', default: '0.30', required: true  },
    { id: 'blur',         label: 'Blur (px)',            type: 'text', placeholder: 'Ex: 12',   default: '12',   required: true  },
    { id: 'borderRadius', label: 'Border Radius',        type: 'text', placeholder: 'Ex: 16px', default: '16px', required: false }
  ]
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = 'LnByb2R1Y3RfY2FyZCB7CiAgLyogMS4gRnVuZG8gdHJhbnNsw7pjaWRvIGNsYXJvICogLwogIGJhY2tncm91bmQ6CiAgICByYWRpYWwtZ3JhZGllbnQoMTIwJSAxNDAlIGF0IDEwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCB7e2JnMX19KSAwJSwgdHJhbnNwYXJlbnQgNTUlKSwKICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwge3tiZzJ9fSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwge3tiZzN9fSkgMTAwJSkgIWltcG9ydGFudDsKCiAgLyogMi4gQm9yZGEgKi8KICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIHt7Ym9yZGFPcGFjaXR5fX0pICFpbXBvcnRhbnQ7CgogIC8qIDMuBTAgc29tYnJhIGV4dGVybmEgKi8KICBib3gtc2hhZG93OgogICAgMCB7e3NvbWJyYVl9fXB4IHt7c29tYnJhQmx1cn19cHgge3tjb3JTb21icmF9fSwKICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCB7e2luc2V0T3BhY2l0eX19KSAhaW1wb3J0YW50OwoKICAvKiA0LiBCbHVyICovCiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKHt7Ymx1cn19cHgpICFpbXBvcnRhbnQ7CiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoe3tibHVyfX1weCkgIWltcG9ydGFudDsKCiAgYm9yZGVyLXJhZGl1czoge3tib3JkZXJSYWRpdXN9fSAhaW1wb3J0YW50Owp9';
const BASE_JS_B64   = '';

// =============================================================
//  ENGINE
// =============================================================

function b64decode(str) {
  if (!str) return '';
  try {
    return decodeURIComponent(
      atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join('')
    );
  } catch (e) {
    return atob(str);
  }
}

const BASE_HTML = b64decode(BASE_HTML_B64);
const BASE_CSS  = b64decode(BASE_CSS_B64);
const BASE_JS   = b64decode(BASE_JS_B64);

// ── Cursor ─────────────────────────────────────────────
const oC = document.getElementById('ogC');
const oR = document.getElementById('ogR');
var mx = -200, my = -200, rx = -200, ry = -200, cvis = false;

document.addEventListener('mousemove', function (e) {
  mx = e.clientX;
  my = e.clientY;
  if (oC) {
    oC.style.left = mx + 'px';
    oC.style.top = my + 'px';
  }
  if (!cvis && oC && oR) {
    oC.style.opacity = '1';
    oR.style.opacity = '0.5';
    cvis = true;
  }
});

document.addEventListener('mouseleave', function () {
  if (oC && oR) {
    oC.style.opacity = '0';
    oR.style.opacity = '0';
  }
  cvis = false;
});

(function tick() {
  rx += (mx - rx) * 0.13;
  ry += (my - ry) * 0.13;
  if (oR) {
    oR.style.left = rx + 'px';
    oR.style.top = ry + 'px';
  }
  requestAnimationFrame(tick);
})();

function hover(els) {
  els.forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      if (oC && oR) {
        oC.style.width = '20px';
        oC.style.height = '20px';
        oR.style.width = '56px';
        oR.style.height = '56px';
      }
    });
    el.addEventListener('mouseleave', function () {
      if (oC && oR) {
        oC.style.width = '12px';
        oC.style.height = '12px';
        oR.style.width = '36px';
        oR.style.height = '36px';
      }
    });
  });
}

hover(Array.from(document.querySelectorAll('a, button, input, .color-wrap')));

// ── Metadados ──────────────────────────────────────────
document.getElementById('bcTitle').textContent = COMPONENT.title;
document.getElementById('compH1').textContent = COMPONENT.title;
document.getElementById('compDesc').textContent = COMPONENT.description;

COMPONENT.tags.forEach(function (t) {
  var s = document.createElement('span');
  s.className = 'ctag' + (t === 'Grátis' || t === 'Gratis' ? ' hl' : '');
  s.textContent = t;
  document.getElementById('compTags').appendChild(s);
});

// ── Render campos ──────────────────────────────────────
var fw = document.getElementById('fieldsWrap');

COMPONENT.fields.forEach(function (f) {
  var g = document.createElement('div');
  g.className = 'field-group';
  g.dataset.fid = f.id;

  var lb = document.createElement('label');
  lb.className = 'field-lbl';
  lb.textContent = f.label + (f.required ? ' *' : '');

  if (f.type === 'color' && f.default && f.default.indexOf('rgba') === -1) {
    var cw = document.createElement('div');
    cw.className = 'color-wrap';

    var nat = document.createElement('input');
    nat.type = 'color';
    nat.className = 'color-native';
    nat.value = f.default;
    nat.id = 'f_' + f.id;

    var sw = document.createElement('div');
    sw.className = 'color-swatch';
    sw.style.background = f.default;

    var hx = document.createElement('input');
    hx.type = 'text';
    hx.className = 'color-hex';
    hx.value = f.default;
    hx.maxLength = 7;

    sw.onclick = function () { nat.click(); };
    hx.onclick = function () { nat.click(); };

    nat.oninput = function () {
      sw.style.background = nat.value;
      hx.value = nat.value;
      renderPreview();
    };

    hx.oninput = function () {
      if (/^#[0-9a-fA-F]{6}$/.test(hx.value)) {
        nat.value = hx.value;
        sw.style.background = hx.value;
        renderPreview();
      }
    };

    cw.appendChild(nat);
    cw.appendChild(sw);
    cw.appendChild(hx);

    g.appendChild(lb);
    g.appendChild(cw);
  } else {
    var inp = document.createElement('input');
    inp.type = 'text';
    inp.className = 'field-inp';
    inp.placeholder = f.placeholder || '';
    inp.value = f.default || '';
    inp.id = 'f_' + f.id;
    inp.oninput = renderPreview;

    var er = document.createElement('span');
    er.className = 'field-err';
    er.textContent = '"' + f.label + '" é obrigatório.';

    g.appendChild(lb);
    g.appendChild(inp);
    g.appendChild(er);
  }

  fw.appendChild(g);
  hover([g]);
});

// ── Helpers ────────────────────────────────────────────
function getVals() {
  var v = {};
  COMPONENT.fields.forEach(function (f) {
    var el = document.getElementById('f_' + f.id);
    v[f.id] = el ? el.value.trim() : '';
  });
  return v;
}

function validate(v) {
  var ok = true;

  COMPONENT.fields.forEach(function (f) {
    if (!f.required) return;

    var inp = document.getElementById('f_' + f.id);
    var er = fw.querySelector('[data-fid="' + f.id + '"] .field-err');

    if (!v[f.id]) {
      if (inp) inp.classList.add('has-err');
      if (er) er.classList.add('show');
      ok = false;

      if (inp) {
        inp.addEventListener('input', function () {
          if (inp.value.trim()) {
            inp.classList.remove('has-err');
            if (er) er.classList.remove('show');
          }
        }, { once: true });
      }
    } else {
      if (inp) inp.classList.remove('has-err');
      if (er) er.classList.remove('show');
    }
  });

  return ok;
}

function process(tpl, v) {
  var c = tpl.replace(/\/\* IF:(\w+) \*\/([\s\S]*?)\/\* ENDIF \*\//g, function (_, k, b) {
    return v[k] ? b : '';
  });

  c = c.replace(/\{\{(\w+)\}\}/g, function (_, k) {
    return v[k] || '';
  });

  return c.replace(/\n{3,}/g, '\n\n').trim();
}

// ── Preview ────────────────────────────────────────────
function renderPreview() {
  var v = getVals();
  var box = document.getElementById('previewBox');

  var bg1          = v.bg1 || '0.40';
  var bg2          = v.bg2 || '0.15';
  var bg3          = v.bg3 || '0.05';
  var bordaOpacity = v.bordaOpacity || '0.25';
  var sombraY      = v.sombraY || '8';
  var sombraBlur   = v.sombraBlur || '18';
  var corSombra    = v.corSombra || 'rgba(0,0,0,0.15)';
  var insetOpacity = v.insetOpacity || '0.30';
  var blur         = v.blur || '12';
  var borderRadius = v.borderRadius || '16px';

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">' +
    '<style>' +
    '*{box-sizing:border-box;margin:0;padding:0;}' +
    'body{background:#0d0d0d;display:flex;align-items:flex-start;justify-content:flex-start;min-height:480px;padding:22px;font-family:system-ui,sans-serif;}' +
    '.product_card{' +
      'width:240px;' +
      'min-height:140px;' +
      'padding:20px;' +
      'border-radius:' + borderRadius + ';' +
      'background:' +
        'radial-gradient(120% 140% at 10% 0%, rgba(255,255,255,' + bg1 + ') 0%, transparent 55%),' +
        'linear-gradient(135deg, rgba(255,255,255,' + bg2 + ') 0%, rgba(255,255,255,' + bg3 + ') 100%);' +
      'border:1px solid rgba(255,255,255,' + bordaOpacity + ');' +
      'box-shadow:0 ' + sombraY + 'px ' + sombraBlur + 'px ' + corSombra + ', inset 0 1px 0 rgba(255,255,255,' + insetOpacity + ');' +
      'backdrop-filter:blur(' + blur + 'px);' +
      '-webkit-backdrop-filter:blur(' + blur + 'px);' +
      'display:flex;flex-direction:column;justify-content:center;align-items:center;' +
      'color:#fff;' +
    '}' +
    '.title{font-size:26px;font-weight:800;line-height:1;margin-bottom:8px;}' +
    '.sub{font-size:12px;opacity:.72;letter-spacing:.08em;text-transform:uppercase;}' +
    '</style></head><body>' +
      '<div class="product_card">' +
        '<div class="title">Preview</div>' +
        '<div class="sub">Glass claro suave</div>' +
      '</div>' +
    '</body></html>';

  var old = box.querySelector('iframe');
  if (old) old.remove();

  var iframe = document.createElement('iframe');
  iframe.style.cssText = 'width:100%;height:480px;border:none;display:block;border-radius:14px;';
  iframe.setAttribute('sandbox', 'allow-scripts');
  iframe.srcdoc = doc;
  box.appendChild(iframe);
}

// ── Modal ──────────────────────────────────────────────
var modal = document.getElementById('modal');
var codePre = document.getElementById('codePre');
var copyBtn = document.getElementById('copyBtn');
var curTab = 'html';
var gen = { html: '', css: '', js: '' };

document.getElementById('genBtn').onclick = function () {
  var v = getVals();
  if (!validate(v)) return;

  gen.html = process(BASE_HTML, v);
  gen.css  = process(BASE_CSS, v);
  gen.js   = process(BASE_JS, v);

  var firstFilled = ['html', 'css', 'js'].find(function (t) {
    return gen[t].length > 0;
  }) || 'html';

  document.querySelectorAll('.code-tab').forEach(function (t) {
    t.classList.toggle('filled', gen[t.dataset.tab].length > 0);
  });

  showTab(firstFilled);
  modal.classList.add('open');
};

function showTab(tab) {
  curTab = tab;

  document.querySelectorAll('.code-tab').forEach(function (t) {
    t.classList.toggle('active', t.dataset.tab === tab);
  });

  var code = gen[tab];

  if (!code) {
    codePre.innerHTML =
      '<div class="empty-state">' +
        '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
          '<path d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>' +
        '</svg>' +
        'Nenhum código ' + tab.toUpperCase() + ' para este componente.' +
      '</div>';
    copyBtn.style.display = 'none';
    return;
  }

  codePre.textContent = code;
  copyBtn.style.display = 'inline-flex';
}

document.querySelectorAll('.code-tab').forEach(function (t) {
  t.onclick = function () {
    showTab(t.dataset.tab);
  };
});

document.getElementById('modalClose').onclick = function () {
  modal.classList.remove('open');
};

modal.onclick = function (e) {
  if (e.target === modal) modal.classList.remove('open');
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') modal.classList.remove('open');
});

copyBtn.onclick = function () {
  navigator.clipboard.writeText(gen[curTab]).then(function () {
    copyBtn.classList.add('copied');
    copyBtn.innerHTML =
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">' +
        '<polyline points="20 6 9 17 4 12"/>' +
      '</svg> Copiado!';

    setTimeout(function () {
      copyBtn.classList.remove('copied');
      copyBtn.innerHTML =
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">' +
          '<rect x="9" y="9" width="13" height="13" rx="2"/>' +
          '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>' +
        '</svg> Copiar';
    }, 2000);
  });
};

// ── Init ───────────────────────────────────────────────
renderPreview();