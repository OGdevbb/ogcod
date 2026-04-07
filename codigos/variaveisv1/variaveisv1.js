// =============================================================
//  OG! — variaveisv1.js
// =============================================================

const COMPONENT = {
  title: 'Variáveis V1',
  description: 'Aplicador de estilo neon para opções e variáveis. Código JS criptografado armazenado em Base64 e exibido no preview.',
  tags: ['Variáveis', 'CSS', 'JS', 'Grátis'],
  fields: []
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64 = '';
const BASE_JS_B64 = 'KGZ1bmN0aW9uICgpIHsNCiAgICBjb25zdCBjc3MgPSBgDQogIC8qID09PT09PT09PT09PT09PT09PT09PT09PT0NCiAgICAgQ09OVEFJTkVSDQogID09PT09PT09PT09PT09PT09PT09PT09PT0gKi8NCiAgLml0ZW0sIGxhYmVsW2NsYXNzKj0iaXRlbSJdLCBkaXYbY2xhc3MqPSJJdGVtIl0gew0KICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZDJkMmQgIWltcG9ydGFudDsNCiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7DQogICAgcGFkZGluZzogMTZweCAyMHB4IDE2cHggNjBweCAhaW1wb3J0YW50Ow0KICAgIGN1cnNvcjogcG9pbnRlcjsNCiAgICBwb3NpdGlvbjogcmVsYXRpdmU7DQogICAgYmFja2dyb3VuZDogIzFhMWExYSAhaW1wb3J0YW50Ow0KICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7DQogICAgZGlzcGxheTogYmxvY2s7DQogICAgbWFyZ2luLWJvdHRvbTogMTJweDsNCiAgICBjb2xvcjogI2ZmZmZmZjsNCiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsNCiAgfQ0KDQogIC8qID09PT09PT09PT09PT09PT09PT09PT09PT0NCiAgICAgSE9WRVIgT0chDQogID09PT09PT09PT09PT09PT09PT09PT09PT0gKi8NCiAgLml0ZW06aG92ZXIsIGxhYmVsW2NsYXNzKj0iaXRlbSJdOmhvdmVyIHsNCiAgICBib3JkZXItY29sb3I6ICM4YTJlZmYgIWltcG9ydGFudDsNCiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDEzOCwgNDYsIDI1NSwgMC4yNSk7DQogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7DQogIH0NCg0KICAuaXRlbSBpbnB1dCwgbGFiZWwgaW5wdXRbdHlwZT0icmFkaW8iXSB7DQogICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50Ow0KICB9DQoNCiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PQ0KICAgICDwn5S1IEJPTEhBIE5FT04gQkFTRQ0KICA9PT09PT09PT09PT09PT09PT09PT09PT09ICovDQogIC5pdGVtOjpiZWZvcmUsIGxhYmVsW2NsYXNzKj0iaXRlbSJdOjpiZWZvcmUgew0KICAgIGNvbnRlbnQ6ICcnOw0KICAgIHdpZHRoOiAxNHB4Ow0KICAgIGhlaWdodDogMTRweDsNCiAgICBiYWNrZ3JvdW5kOiAjOGEyZWZmOw0KICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsNCiAgICBsZWZ0OiAyMHB4Ow0KICAgIHRvcDogNTAlOw0KICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsNCiAgICBib3JkZXItcmFkaXVzOiA1MCU7DQogICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsNCg0KICAgIC8qIGdsb3cgYmFzZSAqLw0KICAgIGJveC1zaGFkb3c6DQogICAgICAwIDAgNnB4IHJnYmEoMTM4LCA0NiwgMjU1LCAwLjcpLA0KICAgICAgMCAwIDEycHggcmdiYSgxMzgsIDQ2LCAyNTUsIDAuNSk7DQogIH0NCg0KICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09DQogICAgIEFVUkEgRVhURVJOQSAoR0xPVykNCiAgPT09PT09PT09PT09PT09PT09PT09PT09PSAqLw0KICAuaXRlbTo6YWZ0ZXIsIGxhYmVsW2NsYXNzKj0iaXRlbSJdOjphZnRlciB7DQogICAgY29udGVudDogJyc7DQogICAgd2lkdGg6IDQwcHg7DQogICAgIGhlaWdodDogNDBweDsNCiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsNCiAgICAgIGxlZnQ6IDdweDsNCiAgICAgIHRvcDogNTAlOw0KICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOw0KICAgICAgYm9yZGVyLXJhZGl1czogNTAlOw0KICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxMzgsNDYsMjU1LDAuOCkgMCUsIHRyYW5zcGFyZW50IDcwJSk7DQogICAgICBvcGFjaXR5OiAwOw0KICAgICAgdHJhbnNpdGlvbjogMC4zczsNCiAgICAgIGZpbHRlcjogYmx1cigxMHB4KTsNCiAgfQ0KDQogIC8qID09PT09PT09PT09PT09PT09PT09PT09PT0NCiAgICAgIFNFTEVDSU9OQURPCiAgPT09PT09PT09PT09PT09PT09PT09PT09PSAqLw0KICBsYWJlbFtj bGFzcyo9Iml0ZW0iXTpoYXMoaW5wdXQ6Y2hlY2tlZCksDQogIC5pdGVtOmhhcyhpbnB1dDpjaGVja2VkKSB7DQogICAgYm9yZGVyLWNvbG9yOiAjOGEyZWZmICFpbXBvcnRhbnQ7DQogICAgYmFja2dyb3VuZDogIzI1MjUyNSAh aW1wb3J0YW50Ow0KICB9DQoNCiAgLyogYm9saGEgYXRpdmEgKE5FT04gRk9SVEUpICovDQogIGxhYmVsW2NsYXNzKj0iaXRlbSJdOmhhcyhpbnB1dDpjaGVja2VkKTo6YmVmb3JlLA0KICAgIC5pdGVtOmhhcyhpbnB1dDpjaGVja2VkKTo6YmVmb3JlIHsNCiAgICAgIGJhY2tncm91bmQ6ICNhODU1Zj sNCg0KICAgICAgYm94LXNoYWRvdzoNCiAgICAgICAgMCAwIDEwcHggI2E4NTVmNywNCiAgICAgICAgMCAwIDIwcHggI2hhMjVlZmYsDQogICAgICAgIDAgMCAzNXB4ICM4YTJlZmYsDQogICAgICAgIDAgMCA2MHB4IHJnYmEoMTM4LCA0NiwgMjU1LCAwLjkpOw0KDQogICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSlzY2FsZSgxLjI1KTsNCiAgICAgIGFuaW1hdGlvbjogb2dQdWxzZSAxLjVzIGluZmluaXRlIGVhc2UtaW4tb3V0Ow0KICB9DQoNCiAgLyogYXVyYSBhcGFyZWNlICovDQogIGxhYmVsW2NsYXNzKj0iaXRlbSJdOmhhcyhpbnB1dDpjaGVja2VkKTo6YWZ0ZXIsDQogIC5pdGVtOmhhcyhpbnB1dDpjaGVja2VkKTo6YWZ0ZXIgew0KICAgIG9wYWNpdHk6IDE7DQogIH0NCg0KICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09DQogICAgQGtleWZyYW1lcyBvZ1B1bHNlIHsNCiAgICAgIDAlIHsNCiAgICAgICAgYm94LXNoYWRvdzoNCiAgICAgICAgICAwIDAgMTBweCAjYTg1NWY3LA0KICAgICAgICAgIDAgMCAyMHB4ICM4YTJlZmYsDQogICAgICAgICAgMCAwIDMwcHggcmdiYSgxMzgsIDQ2LCAyNTUsIDAuNyk7DQogICAgICB9DQogICAgNTAlIHsNCiAgICAgICAgYm94LXNoYWRvdzoNCiAgICAgICAgICAwIDAgMjBweCAjYzA4NGZjLA0KICAgICAgICAgIDAgMCA0MHB4ICNhODU1ZjcsDQogICAgICAgICAgMCAwIDcw cHggcmdiYSgxNjgsIDg1LCAyNDcsIDEpOw0KICAgICAgfQ0KICAgIDEwMCUgew0KICAgICAgICBib3gtc2hhZG93Og0KICAgICAgICAgIDAgMCAxMHB4 ICNhODU1ZjcsDQogICAgICAgICAgMCAwIDIwcHggIzhhMmVmZiwNCiAgICAgICAgICAwIDAgMzBweCByZ2JhKDEzOCwgNDYsIDI1NSwgMC43KTsNCiAgICAgIH0NCiAgICB9DQogIH0NCg0KICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTsNCiAgICBzdHlsZS5pbm5lckhUTUw9IGNzczsNCiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTsNCn0pKCk7DQ==';

function b64decode(str) {
  if (!str) return '';
  try {
    return decodeURIComponent(
      atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join('')
    );
  } catch (e) {
    return atob(str);
  }
}

const BASE_HTML = b64decode(BASE_HTML_B64);
const BASE_CSS = b64decode(BASE_CSS_B64);
const BASE_JS = b64decode(BASE_JS_B64);

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

document.getElementById('bcTitle').textContent = COMPONENT.title;
document.getElementById('compH1').textContent = COMPONENT.title;
document.getElementById('compDesc').textContent = COMPONENT.description;
COMPONENT.tags.forEach(function(t) {
  var s = document.createElement('span');
  s.className = 'ctag' + (t === 'Grátis' ? ' hl' : '');
  s.textContent = t;
  document.getElementById('compTags').appendChild(s);
});

var fw = document.getElementById('fieldsWrap');
COMPONENT.fields.forEach(function(f) {
  var g = document.createElement('div');
  g.className = 'field-group';
  g.dataset.fid = f.id;

  var lb = document.createElement('label');
  lb.className = 'field-lbl';
  lb.textContent = f.label + (f.required ? ' *' : '');

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
  fw.appendChild(g);
  hover([g]);
});

function getVals() {
  var v = {};
  COMPONENT.fields.forEach(function(f) {
    var el = document.getElementById('f_' + f.id);
    v[f.id] = el ? el.value.trim() : '';
  });
  return v;
}

function validate(v) {
  var ok = true;
  COMPONENT.fields.forEach(function(f) {
    if (!f.required) return;
    var inp = document.getElementById('f_' + f.id);
    var er = fw.querySelector('[data-fid="' + f.id + '"] .field-err');
    if (!v[f.id]) {
      if (inp) inp.classList.add('has-err');
      if (er) er.classList.add('show');
      ok = false;
      if (inp) inp.addEventListener('input', function() {
        if (inp.value.trim()) { inp.classList.remove('has-err'); if (er) er.classList.remove('show'); }
      }, { once: true });
    } else {
      if (inp) inp.classList.remove('has-err');
      if (er) er.classList.remove('show');
    }
  });
  return ok;
}

function process(tpl, v) {
  var c = tpl.replace(/\/\* IF:(\w+) \*\/[\s\S]*?\/\* ENDIF \*\//g, function(_, k, b) { return v[k] ? b : ''; });
  c = c.replace(/\{\{(\w+)\}\}/g, function(_, k) { return v[k] || ''; });
  return c.replace(/\n{3,}/g, '\n\n').trim();
}

function renderPreview() {
  var box = document.getElementById('previewBox');

  var doc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
    body { margin: 0; background: #080808; color: #f0f0f0; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px; font-family: system-ui, sans-serif; }
    .frame { width: 100%; max-width: 900px; background: rgba(11,12,18,.98); border: 1px solid rgba(255,255,255,.06); border-radius: 28px; overflow: hidden; box-shadow: 0 32px 90px rgba(0,0,0,.35); }
    .topbar { display: flex; align-items: center; justify-content: space-between; padding: 20px 28px; border-bottom: 1px solid rgba(255,255,255,.06); }
    .brand { display: inline-flex; align-items: center; gap: 12px; font-weight: 800; font-size: .95rem; text-transform: uppercase; letter-spacing: .16em; }
    .brand b { color: #fff; }
    .brand span { background: rgba(232,255,0,.16); color: #e8ff00; padding: 4px 12px; border-radius: 999px; font-size: .75rem; font-weight: 800; letter-spacing: .12em; }
    .nav { display: flex; gap: 20px; color: #7b7f99; font-size: .82rem; }
    .nav span { opacity: .72; }
    .frame-body { padding: 28px 28px 32px; }
    .preview-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; margin-bottom: 24px; }
    .preview-header h2 { margin: 0; font-size: 2rem; line-height: 1.05; color: #fff; }
    .preview-header p { margin: 10px 0 0; color: #9aa0c5; font-size: .95rem; line-height: 1.7; max-width: 560px; }
    .badge { display: inline-flex; align-items: center; gap: 10px; padding: 12px 16px; border-radius: 999px; background: rgba(232,255,0,.14); color: #e8ff00; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; font-size: .78rem; }
    .block { background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.08); border-radius: 24px; padding: 28px; display: grid; gap: 18px; }
    .block-top { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .block-title { margin: 0; color: #fff; font-size: .95rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
    .block-meta { color: #7b7f99; font-size: .82rem; }
    .item { display: flex; align-items: center; justify-content: space-between; padding: 18px 20px; border: 1px solid rgba(255,255,255,.08); border-radius: 18px; transition: transform .2s, border-color .2s; cursor: pointer; }
    .item:hover { transform: translateY(-2px); border-color: rgba(232,255,0,.2); }
    .item-left { display: flex; align-items: center; gap: 16px; }
    .item-dot { width: 14px; height: 14px; border-radius: 50%; background: #e8ff00; box-shadow: 0 0 18px rgba(232,255,0,.25); }
    .item-text h3 { margin: 0; font-size: 1rem; font-weight: 800; color: #fff; }
    .item-text p { margin: .35rem 0 0; color: #9aa0c5; font-size: .9rem; line-height: 1.6; }
    input[type="radio"] { accent-color: #e8ff00; width: 18px; height: 18px; }
    .preview-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 20px; color: #7b7f99; font-size: .82rem; border-top: 1px solid rgba(255,255,255,.06); margin-top: 12px; }
    .preview-footer strong { color: #fff; }
  </style></head><body><div class="frame"><div class="topbar"><div class="brand"><b>Nome da Loja</b><span>Verificado</span></div><div class="nav"><span>Produtos</span><span>Contato</span><span>Carrinho</span></div></div><div class="frame-body"><div class="preview-header"><div><h2>Preview de variáveis</h2><p>Veja o efeito neon de seleção aplicado a opções estilizadas, com foco em bordas suaves e contraste moderno.</p></div><span class="badge">Design Verificado</span></div><div class="block"><div class="block-top"><p class="block-title">Opções ativadas</p><span class="block-meta">Status: ativo</span></div><label class="item"><div class="item-left"><span class="item-dot"></span><div class="item-text"><h3>Opção ativa</h3><p>Seleção brilhante com efeito neon e destaque.</p></div></div><input type="radio" name="demo" checked></label><label class="item"><div class="item-left"><span class="item-dot"></span><div class="item-text"><h3>Opção secundária</h3><p>Mais suave, mantém a aparência escura e elegante.</p></div></div><input type="radio" name="demo"></label><label class="item"><div class="item-left"><span class="item-dot"></span><div class="item-text"><h3>Opção alternativa</h3><p>Boa para variantes, labels e temas customizados.</p></div></div><input type="radio" name="demo"></label></div><div class="preview-footer"><span>Conteúdo da loja</span><strong>✓ Visual pronto</strong></div></div></div><script>${BASE_JS} <\/script></body></html>`;

  var old = box.querySelector('iframe');
  if (old) old.remove();
  var iframe = document.createElement('iframe');
  iframe.style.cssText = 'width:100%;height:560px;border:none;display:block;border-radius:18px;overflow:hidden;';
  iframe.setAttribute('sandbox', 'allow-scripts');
  iframe.srcdoc = doc;
  box.appendChild(iframe);
}

var modal = document.getElementById('modal');
var codePre = document.getElementById('codePre');
var copyBtn = document.getElementById('copyBtn');
var curTab = 'html';
var gen = { html: '', css: '', js: '' };

function showTab(tab) {
  curTab = tab;
  document.querySelectorAll('.code-tab').forEach(function(t) { t.classList.toggle('active', t.dataset.tab === tab); });
  var code = gen[tab];
  if (!code) {
    codePre.innerHTML = '<div class="empty-state">Nenhum código ' + tab.toUpperCase() + ' para este componente.</div>';
    copyBtn.style.display = 'none';
    return;
  }
  codePre.textContent = code;
  copyBtn.style.display = 'inline-flex';
}

document.getElementById('genBtn').onclick = function() {
  var v = getVals();
  if (!validate(v)) return;
  gen.html = process(BASE_HTML, v);
  gen.css = process(BASE_CSS, v);
  gen.js = process(BASE_JS, v);
  document.querySelectorAll('.code-tab').forEach(function(t) { t.classList.toggle('filled', gen[t.dataset.tab].length > 0); });
  showTab('js');
  modal.classList.add('open');
};

document.querySelectorAll('.code-tab').forEach(function(t) { t.onclick = function() { showTab(t.dataset.tab); }; });
document.getElementById('modalClose').onclick = function() { modal.classList.remove('open'); };
modal.onclick = function(e) { if (e.target === modal) modal.classList.remove('open'); };
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') modal.classList.remove('open'); });

copyBtn.onclick = function() {
  navigator.clipboard.writeText(gen[curTab]).then(function() {
    copyBtn.textContent = 'Copiado';
    setTimeout(function() { copyBtn.textContent = 'Copiar'; }, 1500);
  });
};

renderPreview();
