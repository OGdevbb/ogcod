// =============================================================
//  OG! — constelacao.js  (Efeito Constelacao)
// =============================================================

const COMPONENT = {
  title:       'Efeito Constelacao',
  description: 'Adiciona particulas animadas com linhas de conexao (efeito constelacao) como fundo da loja. Cor, quantidade, velocidade e distancia de conexao customizaveis.',
  tags:        ['Fundo', 'Canvas', 'Animacao', 'Constelacao', 'JS', 'Gratis'],

  fields: [
    { id: 'corParticula',   label: 'Cor das Particulas e Linhas', type: 'color', default: '#800080' },
    { id: 'numParticulas',  label: 'Quantidade de Particulas',    type: 'text',  placeholder: 'Ex: 150', default: '150', required: true  },
    { id: 'distanciaLinha', label: 'Distancia de Conexao (px)',   type: 'text',  placeholder: 'Ex: 120', default: '120', required: true  },
    { id: 'velocidade',     label: 'Velocidade das Particulas',   type: 'text',  placeholder: 'Ex: 0.5 (suave) | 1.5 (rapido)', default: '0.5', required: true  },
    { id: 'tamanhoMin',     label: 'Tamanho Minimo (px)',         type: 'text',  placeholder: 'Ex: 1',   default: '1',   required: false },
    { id: 'tamanhoMax',     label: 'Tamanho Maximo (px)',         type: 'text',  placeholder: 'Ex: 3',   default: '3',   required: false },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = '';
const BASE_JS_B64   = 'KGZ1bmN0aW9uICgpIHsKICAndXNlIHN0cmljdCc7CiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25zdGVsbGF0aW9uLWJnJykpIHJldHVybjsKCiAgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7CiAgICB2YXIgciA9IC9eIz8oW2EtZlxkXXsyfSkoW2EtZlxkXXsyfSkoW2EtZlxkXXsyfSkkL2kuZXhlYyhoZXgpOwogICAgcmV0dXJuIHIgPyB7IHI6IHBhcnNlSW50KHJbMV0sMTYpLCBnOiBwYXJzZUludChyWzJdLDE2KSwgYjogcGFyc2VJbnQoclszXSwxNikgfSA6IG51bGw7CiAgfQoKICB2YXIgbnVtUGFydGljbGVzICA9IHt7bnVtUGFydGljdWxhc319OwogIHZhciBsaW5rRGlzdGFuY2UgID0ge3tkaXN0YW5jaWFMaW5oYX19OwogIHZhciBwYXJ0aWNsZUNvbG9yID0gJ3t7Y29yUGFydGljdWxhfX0nOwogIHZhciB2ZWxvY2lkYWRlICAgID0ge3t2ZWxvY2lkYWRlfX07CiAgdmFyIHRhbU1pbiAgICAgICAgPSB7e3RhbWFuaG9NaW59fTsKICB2YXIgdGFtTWF4ICAgICAgICA9IHt7dGFtYW5ob01heH19OwoKICB2YXIgcmdiID0gaGV4VG9SZ2IocGFydGljbGVDb2xvcik7CiAgdmFyIGxpbmVDb2xvciA9IHJnYgogICAgPyAncmdiYSgnICsgcmdiLnIgKyAnLCcgKyByZ2IuZyArICcsJyArIHJnYi5iICsgJywnCiAgICA6ICdyZ2JhKDEyOCwwLDEyOCwnOwoKICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpOwogIHN0eWxlLmlkID0gJ2NvbnN0ZWxsYXRpb24tYmctc3R5bGUnOwogIHN0eWxlLnRleHRDb250ZW50ID0KICAgICcjY29uc3RlbGxhdGlvbi1iZ3snCiAgICArICdwb3NpdGlvbjpmaXhlZCFpbXBvcnRhbnQ7dG9wOjAhaW1wb3J0YW50O2xlZnQ6MCFpbXBvcnRhbnQ7JwogICAgKyAnd2lkdGg6MTAwdnchaW1wb3J0YW50O2hlaWdodDoxMDB2aCFpbXBvcnRhbnQ7JwogICAgKyAnei1pbmRleDotMSFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6bm9uZSFpbXBvcnRhbnQ7fSc7CiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7CgogIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsKICBjYW52YXMuaWQgPSAnY29uc3RlbGxhdGlvbi1iZyc7CiAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGNhbnZhcyk7CiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpOwoKICBmdW5jdGlvbiByZXNpemUoKSB7IGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoOyBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0OyB9CiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZSk7CiAgcmVzaXplKCk7CgogIHZhciBwYXJ0aWNsZXMgPSBbXTsKICBmdW5jdGlvbiBQYXJ0aWNsZSgpIHsKICAgIHRoaXMueCAgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoOwogICAgdGhpcy55ICA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0OwogICAgdGhpcy52eCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHZlbG9jaWRhZGU7CiAgICB0aGlzLnZ5ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogdmVsb2NpZGFkZTsKICAgIHRoaXMuc2l6ZSA9IE1hdGgucmFuZG9tKCkgKiAodGFtTWF4IC0gdGFtTWluKSArIHRhbU1pbjsKICB9CiAgUGFydGljbGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkgewogICAgdGhpcy54ICs9IHRoaXMudng7CiAgICB0aGlzLnkgKz0gdGhpcy52eTsKICAgIGlmICh0aGlzLnggPCAwIHx8IHRoaXMueCA+IGNhbnZhcy53aWR0aCkgIHRoaXMudnggKj0gLTE7CiAgICBpZiAodGhpcy55IDwgMCB8fCB0aGlzLnkgPiBjYW52YXMuaGVpZ2h0KSB0aGlzLnZ5ICo9IC0xOwogIH07CiAgUGFydGljbGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHsKICAgIGN0eC5maWxsU3R5bGUgPSBwYXJ0aWNsZUNvbG9yOwogICAgY3R4LmJlZ2luUGF0aCgpOwogICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5zaXplLCAwLCBNYXRoLlBJICogMik7CiAgICBjdHguZmlsbCgpOwogIH07CgogIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUGFydGljbGVzOyBpKyspIHBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZSgpKTsKCiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHsKICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsKICAgIGZvciAodmFyIGsgPSAwOyBrIDwgcGFydGljbGVzLmxlbmd0aDsgaysrKSB7IHBhcnRpY2xlc1trXS51cGRhdGUoKTsgcGFydGljbGVzW2tdLmRyYXcoKTsgfQogICAgZm9yICh2YXIgYSA9IDA7IGEgPCBudW1QYXJ0aWNsZXM7IGErKykgewogICAgICBmb3IgKHZhciBiID0gYSArIDE7IGIgPCBudW1QYXJ0aWNsZXM7IGIrKykgewogICAgICAgIHZhciBkeCA9IHBhcnRpY2xlc1thXS54IC0gcGFydGljbGVzW2JdLng7CiAgICAgICAgdmFyIGR5ID0gcGFydGljbGVzW2FdLnkgLSBwYXJ0aWNsZXNbYl0ueTsKICAgICAgICB2YXIgZGlzdCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7CiAgICAgICAgaWYgKGRpc3QgPCBsaW5rRGlzdGFuY2UpIHsKICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGxpbmVDb2xvciArICgxIC0gZGlzdCAvIGxpbmtEaXN0YW5jZSkgKyAnKSc7CiAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTsKICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsKICAgICAgICAgIGN0eC5tb3ZlVG8ocGFydGljbGVzW2FdLngsIHBhcnRpY2xlc1thXS55KTsKICAgICAgICAgIGN0eC5saW5lVG8ocGFydGljbGVzW2JdLngsIHBhcnRpY2xlc1tiXS55KTsKICAgICAgICAgIGN0eC5zdHJva2UoKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTsKICB9CiAgYW5pbWF0ZSgpOwp9KSgpOw==';

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

  var cor    = v.corParticula   || '#800080';
  var num    = parseInt(v.numParticulas)  || 150;
  var dist   = parseInt(v.distanciaLinha)|| 120;
  var vel    = parseFloat(v.velocidade)   || 0.5;
  var tMin   = parseFloat(v.tamanhoMin)   || 1;
  var tMax   = parseFloat(v.tamanhoMax)   || 3;

  // Converter hex para rgb para as linhas
  var rr = parseInt(cor.slice(1,3),16) || 128;
  var gg = parseInt(cor.slice(3,5),16) || 0;
  var bb = parseInt(cor.slice(5,7),16) || 128;
  var lineBase = 'rgba(' + rr + ',' + gg + ',' + bb + ',';

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>*{box-sizing:border-box;margin:0;padding:0;}body{background:#0a0a0a;overflow:hidden;}canvas{position:fixed;top:0;left:0;z-index:-1;}</style>'
    + '</head><body><canvas id="c"></canvas>'
    + '<script>'
    + 'var c=document.getElementById("c"),ctx=c.getContext("2d");'
    + 'c.width=window.innerWidth;c.height=window.innerHeight;'
    + 'var ps=[],n=' + num + ',d=' + dist + ',v=' + vel + ',tmin=' + tMin + ',tmax=' + tMax + ';'
    + 'for(var i=0;i<n;i++){ps.push({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*v,vy:(Math.random()-.5)*v,s:Math.random()*(tmax-tmin)+tmin});}'
    + 'function loop(){'
      + 'ctx.clearRect(0,0,c.width,c.height);'
      + 'for(var k=0;k<n;k++){var p=ps[k];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>c.width)p.vx*=-1;if(p.y<0||p.y>c.height)p.vy*=-1;ctx.fillStyle="' + cor + '";ctx.beginPath();ctx.arc(p.x,p.y,p.s,0,Math.PI*2);ctx.fill();}'
      + 'for(var a=0;a<n;a++){for(var b=a+1;b<n;b++){var dx=ps[a].x-ps[b].x,dy=ps[a].y-ps[b].y,dist2=Math.sqrt(dx*dx+dy*dy);if(dist2<d){ctx.strokeStyle="' + lineBase + '"+(1-dist2/d)+")";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(ps[a].x,ps[a].y);ctx.lineTo(ps[b].x,ps[b].y);ctx.stroke();}}}'
      + 'requestAnimationFrame(loop);}'
    + 'loop();'
    + '<\/script>'
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