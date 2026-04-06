// =============================================================
//  OG! — vendas-fake.js
// =============================================================

const COMPONENT = {
  title:       'Notificacoes de Vendas Fake',
  description: 'Exibe notificacoes de compra animadas no canto da tela com nomes e mensagens aleatorios. Posicao, cores, icone e timing totalmente customizaveis.',
  tags:        ['Vendas', 'Notificacao', 'Social Proof', 'JS', 'Gratis'],

  fields: [
    // Conteudo
    { id: 'nomes',     label: 'Nomes (separados por virgula)',     type: 'text', placeholder: 'Ex: Ana S., Carlos M., Pedro H.', default: 'Rhuan S., Carlos M., Ana C., Pedro H., Lucas T., Julia R.', required: true  },
    { id: 'mensagens', label: 'Mensagens (separadas por virgula)', type: 'text', placeholder: 'Ex: acabou de comprar, se tornou cliente', default: 'se tornou cliente, acabou de comprar, finalizou uma compra, comprou agora', required: true  },

    // Posicao
    { id: 'posicaoV',   label: 'Posicao Vertical',    type: 'text', placeholder: 'bottom ou top', default: 'bottom', required: true  },
    { id: 'distanciaV', label: 'Distancia Vertical',  type: 'text', placeholder: 'Ex: 20px',      default: '20px',   required: false },
    { id: 'posicaoH',   label: 'Posicao Horizontal',  type: 'text', placeholder: 'left ou right', default: 'left',   required: true  },
    { id: 'distanciaH', label: 'Distancia Horizontal',type: 'text', placeholder: 'Ex: 20px',      default: '20px',   required: false },

    // Timing
    { id: 'tempoVisivel', label: 'Tempo Visivel (ms)', type: 'text', placeholder: 'Ex: 3200', default: '3200', required: true  },
    { id: 'intervalo',    label: 'Intervalo entre notificacoes (ms)', type: 'text', placeholder: 'Ex: 6000', default: '6000', required: true  },

    // Layout
    { id: 'larguraMin',   label: 'Largura Minima',      type: 'text', placeholder: 'Ex: 280px', default: '280px', required: false },
    { id: 'larguraMax',   label: 'Largura Maxima',      type: 'text', placeholder: 'Ex: 420px', default: '420px', required: false },
    { id: 'borderRadius', label: 'Border Radius',       type: 'text', placeholder: 'Ex: 22px',  default: '22px',  required: false },
    { id: 'gap',          label: 'Gap entre notificacoes', type: 'text', placeholder: 'Ex: 12px', default: '12px', required: false },
    { id: 'gapInterno',   label: 'Gap interno',         type: 'text', placeholder: 'Ex: 16px',  default: '16px',  required: false },
    { id: 'padding',      label: 'Padding interno',     type: 'text', placeholder: 'Ex: 18px 22px', default: '18px 22px', required: false },

    // Cores fundo
    { id: 'corFundo1', label: 'Cor Fundo Superior (rgba)', type: 'text', placeholder: 'Ex: rgba(12,12,16,0.96)', default: 'rgba(12,12,16,0.96)', required: false },
    { id: 'corFundo2', label: 'Cor Fundo Inferior (rgba)', type: 'text', placeholder: 'Ex: rgba(8,8,12,0.96)',   default: 'rgba(8,8,12,0.96)',   required: false },
    { id: 'corBorda',  label: 'Cor da Borda (rgba)',       type: 'text', placeholder: 'Ex: rgba(255,255,255,0.08)', default: 'rgba(255,255,255,0.08)', required: false },
    { id: 'corSombra', label: 'Sombra (box-shadow)',       type: 'text', placeholder: 'Ex: 0 10px 30px rgba(0,0,0,0.45)', default: '0 10px 30px rgba(0,0,0,0.45)', required: false },
    { id: 'corGlow',   label: 'Glow externo (rgba)',       type: 'text', placeholder: 'Ex: 0 0 40px rgba(65,84,255,0.12)', default: '0 0 40px rgba(65,84,255,0.12)', required: false },

    // Icone
    { id: 'tamanhoIcone',   label: 'Tamanho do Icone',       type: 'text',  placeholder: 'Ex: 44px', default: '44px', required: false },
    { id: 'radiusIcone',    label: 'Border Radius do Icone', type: 'text',  placeholder: 'Ex: 14px', default: '14px', required: false },
    { id: 'corFundoIcone1', label: 'Fundo Icone Superior (rgba)', type: 'text', placeholder: 'Ex: rgba(30,255,220,0.18)', default: 'rgba(30,255,220,0.18)', required: false },
    { id: 'corFundoIcone2', label: 'Fundo Icone Inferior (rgba)', type: 'text', placeholder: 'Ex: rgba(30,255,220,0.06)', default: 'rgba(30,255,220,0.06)', required: false },
    { id: 'corGlowIcone',   label: 'Glow do Icone',          type: 'text',  placeholder: 'Ex: 0 0 20px rgba(42,255,230,0.18)', default: '0 0 20px rgba(42,255,230,0.18)', required: false },
    { id: 'corIcone',       label: 'Cor do SVG do Icone',    type: 'color', default: '#2ff7e3' },
    { id: 'corGlowIconeSvg',label: 'Glow do SVG (rgba)',     type: 'text',  placeholder: 'Ex: rgba(47,247,227,0.35)', default: 'rgba(47,247,227,0.35)', required: false },

    // Texto
    { id: 'tamanhoTexto', label: 'Tamanho do Texto', type: 'text',  placeholder: 'Ex: 15px', default: '15px', required: false },
    { id: 'corNome',      label: 'Cor do Nome',      type: 'color', default: '#ffffff' },
    { id: 'corMensagem',  label: 'Cor da Mensagem (rgba)', type: 'text', placeholder: 'Ex: rgba(255,255,255,0.78)', default: 'rgba(255,255,255,0.78)', required: false },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = '';
const BASE_JS_B64   = 'KGZ1bmN0aW9uICgpIHsKICAndXNlIHN0cmljdCc7CgogIGlmICh3aW5kb3cub2dWZW5kYXNGYWtlSW5pY2lhZG8pIHJldHVybjsKICB3aW5kb3cub2dWZW5kYXNGYWtlSW5pY2lhZG8gPSB0cnVlOwoKICB2YXIgb2dOb21lcyA9IFt7e25vbWVzX2FycmF5fX1dOwogIHZhciBvZ01lbnNhZ2VucyA9IFt7e21lbnNhZ2Vuc19hcnJheX19XTsKCiAgdmFyIG9nQ1NTID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTsKICBvZ0NTUy5pZCA9ICdvZy12ZW5kYXMtZmFrZS1zdHlsZSc7CiAgb2dDU1MudGV4dENvbnRlbnQgPQogICAgJy5vZy1mYWtlLXdyYXB7JwogICAgKyAncG9zaXRpb246Zml4ZWQ7e3twb3NpY2FvVn19Ont7ZGlzdGFuY2lhVn19O3t7cG9zaWNhb0h9fTp7e2Rpc3RhbmNpYUh9fTsnCiAgICArICd6LWluZGV4Ojk5OTk5OTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDp7e2dhcH19O3BvaW50ZXItZXZlbnRzOm5vbmU7fScKICAgICsgJy5vZy1mYWtlLW5vdGlmeycKICAgICsgJ21pbi13aWR0aDp7e2xhcmd1cmFNaW59fTttYXgtd2lkdGg6e3tsYXJndXJhTWF4fX07JwogICAgKyAnYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHt7Y29yRnVuZG8xfX0se3tjb3JGdW5kbzJ9fSk7JwogICAgKyAnYm9yZGVyOjFweCBzb2xpZCB7e2NvckJvcmRhfX07JwogICAgKyAnYm9yZGVyLXJhZGl1czp7e2JvcmRlclJhZGl1c319OycKICAgICsgJ2JveC1zaGFkb3c6e3tjb3JTb21icmF9fSx7e2Nvckdsb3d9fTsnCiAgICArICdiYWNrZHJvcC1maWx0ZXI6Ymx1cigxMHB4KTstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpibHVyKDEwcHgpOycKICAgICsgJ292ZXJmbG93OmhpZGRlbjtvcGFjaXR5OjA7JwogICAgKyAndHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTMwcHgpIHNjYWxlKDAuOTYpOycKICAgICsgJ2FuaW1hdGlvbjpvZ0Zha2VFbnRlciAwLjQ1cyBlYXNlIGZvcndhcmRzO30nCiAgICArICcub2ctZmFrZS1ub3RpZi5oaWRle2FuaW1hdGlvbjpvZ0Zha2VFeGl0IDAuNHMgZWFzZSBmb3J3YXJkczt9JwogICAgKyAnLm9nLWZha2UtaW5uZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6e3tnYXBJbnRlcm5vfX07cGFkZGluZzp7e3BhZGRpbmd9fTt9JwogICAgKyAnLm9nLWZha2UtaWNvbnsnCiAgICArICd3aWR0aDp7e3RhbWFuaG9JY29uZX19O2hlaWdodDp7e3RhbWFuaG9JY29uZX19O21pbi13aWR0aDp7e3RhbWFuaG9JY29uZX19OycKICAgICsgJ2JvcmRlci1yYWRpdXM6e3tyYWRpdXNJY29uZX19O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjsnCiAgICArICdiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcse3tjb3JGdW5kb0ljb25lMX19LHt7Y29yRnVuZG9JY29uZTJ9fSk7JwogICAgKyAnYm94LXNoYWRvdzp7e2Nvckdsb3dJY29uZX19LGluc2V0IDAgMCAxMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4wMyk7fScKICAgICsgJy5vZy1mYWtlLWljb24gc3Zne3dpZHRoOjIycHg7aGVpZ2h0OjIycHg7ZmlsbDp7e2Nvckljb25lfX07ZmlsdGVyOmRyb3Atc2hhZG93KDAgMCA4cHgge3tjb3JHbG93SWNvbmVTdmd9fSk7fScKICAgICsgJy5vZy1mYWtlLXRleHR7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NnB4O2NvbG9yOiNmZmY7JwogICAgKyAnZm9udC1mYW1pbHk6QXJpYWwsc2Fucy1zZXJpZjtmb250LXNpemU6e3t0YW1hbmhvVGV4dG99fTtsaW5lLWhlaWdodDoxLjM1O30nCiAgICArICcub2ctZmFrZS1uYW1le2ZvbnQtd2VpZ2h0OjgwMDtjb2xvcjp7e2Nvck5vbWV9fTt9JwogICAgKyAnLm9nLWZha2UtbXNne2ZvbnQtd2VpZ2h0OjUwMDtjb2xvcjp7e2Nvck1lbnNhZ2VtfX07fScKICAgICsgJ0BrZXlmcmFtZXMgb2dGYWtlRW50ZXJ7ZnJvbXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTMwcHgpIHNjYWxlKDAuOTYpfXRve29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKSBzY2FsZSgxKX19JwogICAgKyAnQGtleWZyYW1lcyBvZ0Zha2VFeGl0e2Zyb217b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKDEpfXRve29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjVweCkgc2NhbGUoMC45Nil9fScKICAgICsgJ0BtZWRpYShtYXgtd2lkdGg6NjAwcHgpeycKICAgICsgJy5vZy1mYWtlLXdyYXB7bGVmdDoxMnB4O3JpZ2h0OjEycHg7Ym90dG9tOjEycHg7fScKICAgICsgJy5vZy1mYWtlLW5vdGlme21pbi13aWR0aDp1bnNldDttYXgtd2lkdGg6dW5zZXQ7d2lkdGg6MTAwJTt9JwogICAgKyAnLm9nLWZha2UtdGV4dHtmb250LXNpemU6MTVweDt9JwogICAgKyAnLm9nLWZha2UtaW5uZXJ7cGFkZGluZzoxNnB4IDE4cHg7Z2FwOjEycHg7fX0nOwoKICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG9nQ1NTKTsKCiAgZnVuY3Rpb24gb2dDcmlhcldyYXAoKSB7CiAgICB2YXIgYW50aWdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9nLWZha2Utd3JhcCcpOwogICAgaWYgKGFudGlnbykgYW50aWdvLnJlbW92ZSgpOwogICAgdmFyIHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICAgIHdyYXAuY2xhc3NOYW1lID0gJ29nLWZha2Utd3JhcCc7CiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdyYXApOwogICAgcmV0dXJuIHdyYXA7CiAgfQoKICBmdW5jdGlvbiBvZ0NyaWFyTm90aWYobm9tZSwgbWVuc2FnZW0pIHsKICAgIHZhciBuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgICBuLmNsYXNzTmFtZSA9ICdvZy1mYWtlLW5vdGlmJzsKICAgIG4uaW5uZXJIVE1MID0KICAgICAgJzxkaXYgY2xhc3M9Im9nLWZha2UtaW5uZXIiPicKICAgICAgKyAnPGRpdiBjbGFzcz0ib2ctZmFrZS1pY29uIj4nCiAgICAgICsgJzxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWhpZGRlbj0idHJ1ZSI+JwogICAgICArICc8cGF0aCBkPSJNNyA0SDN2MmgyLjJsMS44IDcuMkEyIDIgMCAwIDAgOSAxNWg4YTIgMiAwIDAgMCAxLjk0LTEuNUwyMC43IDdIOC4xbC0uNC0xLjZBMiAyIDAgMCAwIDcgNHptMiAxM2EyIDIgMCAxIDAgMCA0IDIgMiAwIDAgMCAwLTR6bTggMGEyIDIgMCAxIDAgLjAwMSA0QTIgMiAwIDAgMCAxNyAxN3oiPjwvcGF0aD4nCiAgICAgICsgJzwvc3ZnPicKICAgICAgKyAnPC9kaXY+JwogICAgICArICc8ZGl2IGNsYXNzPSJvZy1mYWtlLXRleHQiPicKICAgICAgKyAnPHNwYW4gY2xhc3M9Im9nLWZha2UtbmFtZSI+JyArIG5vbWUgKyAnPC9zcGFuPicKICAgICAgKyAnPHNwYW4gY2xhc3M9Im9nLWZha2UtbXNnIj4nICsgbWVuc2FnZW0gKyAnPC9zcGFuPicKICAgICAgKyAnPC9kaXY+JwogICAgICArICc8L2Rpdj4nOwogICAgcmV0dXJuIG47CiAgfQoKICB2YXIgb2dXcmFwID0gbnVsbDsKCiAgZnVuY3Rpb24gb2dNb3N0cmFyKCkgewogICAgaWYgKCFvZ1dyYXApIHJldHVybjsKICAgIHZhciBub21lID0gb2dOb21lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvZ05vbWVzLmxlbmd0aCldOwogICAgdmFyIG1zZyAgPSBvZ01lbnNhZ2Vuc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvZ01lbnNhZ2Vucy5sZW5ndGgpXTsKICAgIHZhciBub3RpZiA9IG9nQ3JpYXJOb3RpZihub21lLCBtc2cpOwogICAgb2dXcmFwLmFwcGVuZENoaWxkKG5vdGlmKTsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IG5vdGlmLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTsgfSwge3t0ZW1wb1Zpc2l2ZWx9fSk7CiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBpZiAobm90aWYucGFyZW50Tm9kZSkgbm90aWYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub3RpZik7IH0sIHt7dGVtcG9WaXNpdmVsfX0gKyA1MDApOwogIH0KCiAgZnVuY3Rpb24gb2dJbmljaWFyKCkgewogICAgb2dXcmFwID0gb2dDcmlhcldyYXAoKTsKICAgIG9nTW9zdHJhcigpOwogICAgc2V0SW50ZXJ2YWwob2dNb3N0cmFyLCB7e2ludGVydmFsb319KTsKICB9CgogIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHsKICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBvZ0luaWNpYXIpOwogIH0gZWxzZSB7CiAgICBvZ0luaWNpYXIoKTsKICB9Cn0pKCk7';

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
function toJsArray(csv) {
  return (csv || '').split(',').map(function(s) {
    return "'" + s.trim().replace(/'/g, "\\'") + "'";
  }).filter(function(s){ return s !== "''"; }).join(',');
}

function process(tpl, v) {
  // Campos especiais: converte CSV → array JS literal
  var vx = Object.assign ? Object.assign({}, v) : JSON.parse(JSON.stringify(v));
  vx.nomes_array     = toJsArray(v.nomes);
  vx.mensagens_array = toJsArray(v.mensagens);

  var c = tpl.replace(/\/\* IF:(\w+) \*\/([\s\S]*?)\/\* ENDIF \*\//g, function(_, k, b) { return vx[k] ? b : ''; });
  c = c.replace(/\{\{(\w+)\}\}/g, function(_, k) { return vx[k] !== undefined ? vx[k] : ''; });
  return c.replace(/\n{3,}/g, '\n\n').trim();
}

// ── Preview ao vivo ───────────────────────────────────────────
function renderPreview() {
  var v   = getVals();
  var box = document.getElementById('previewBox');

  var posV   = v.posicaoV    || 'bottom';
  var distV  = v.distanciaV  || '20px';
  var posH   = v.posicaoH    || 'left';
  var distH  = v.distanciaH  || '20px';
  var radius = v.borderRadius || '22px';
  var gap    = v.gap          || '12px';
  var gapI   = v.gapInterno   || '16px';
  var pad    = v.padding       || '18px 22px';
  var f1     = v.corFundo1     || 'rgba(12,12,16,0.96)';
  var f2     = v.corFundo2     || 'rgba(8,8,12,0.96)';
  var borda  = v.corBorda      || 'rgba(255,255,255,0.08)';
  var sombra = v.corSombra     || '0 10px 30px rgba(0,0,0,0.45)';
  var glow   = v.corGlow       || '0 0 40px rgba(65,84,255,0.12)';
  var tamI   = v.tamanhoIcone  || '44px';
  var radI   = v.radiusIcone   || '14px';
  var fi1    = v.corFundoIcone1|| 'rgba(30,255,220,0.18)';
  var fi2    = v.corFundoIcone2|| 'rgba(30,255,220,0.06)';
  var glowI  = v.corGlowIcone  || '0 0 20px rgba(42,255,230,0.18)';
  var corIco = v.corIcone      || '#2ff7e3';
  var glowS  = v.corGlowIconeSvg || 'rgba(47,247,227,0.35)';
  var tamT   = v.tamanhoTexto  || '15px';
  var corN   = v.corNome       || '#ffffff';
  var corM   = v.corMensagem   || 'rgba(255,255,255,0.78)';
  var largMin= v.larguraMin    || '280px';
  var largMax= v.larguraMax    || '420px';

  var nomes = (v.nomes || 'Ana S., Pedro H.').split(',').map(function(s){ return s.trim(); }).filter(Boolean);
  var msgs  = (v.mensagens || 'acabou de comprar').split(',').map(function(s){ return s.trim(); }).filter(Boolean);
  var nome  = nomes[0] || 'Ana S.';
  var msg   = msgs[0]  || 'acabou de comprar';

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>'
    + '*{box-sizing:border-box;margin:0;padding:0;}'
    + 'body{background:#0a0a0a;min-height:480px;position:relative;}'
    + '.wrap{position:absolute;' + posV + ':' + distV + ';' + posH + ':' + distH + ';display:flex;flex-direction:column;gap:' + gap + ';}'
    + '.n{min-width:' + largMin + ';max-width:' + largMax + ';background:linear-gradient(180deg,' + f1 + ',' + f2 + ');border:1px solid ' + borda + ';border-radius:' + radius + ';box-shadow:' + sombra + ',' + glow + ';backdrop-filter:blur(10px);overflow:hidden;}'
    + '.i{display:flex;align-items:center;gap:' + gapI + ';padding:' + pad + ';}'
    + '.ico{width:' + tamI + ';height:' + tamI + ';min-width:' + tamI + ';border-radius:' + radI + ';display:flex;align-items:center;justify-content:center;background:linear-gradient(180deg,' + fi1 + ',' + fi2 + ');box-shadow:' + glowI + ';}'
    + '.ico svg{width:22px;height:22px;fill:' + corIco + ';filter:drop-shadow(0 0 8px ' + glowS + ');}'
    + '.txt{display:flex;flex-wrap:wrap;align-items:center;gap:6px;font-family:Arial,sans-serif;font-size:' + tamT + ';}'
    + '.nm{font-weight:800;color:' + corN + ';}'
    + '.ms{font-weight:500;color:' + corM + ';}'
    + '@keyframes eIn{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}'
    + '.n{animation:eIn .4s ease forwards;}'
    + '</style></head><body>'
    + '<div class="wrap">'
      + '<div class="n"><div class="i">'
        + '<div class="ico"><svg viewBox="0 0 24 24"><path d="M7 4H3v2h2.2l1.8 7.2A2 2 0 0 0 9 15h8a2 2 0 0 0 1.94-1.5L20.7 7H8.1l-.4-1.6A2 2 0 0 0 7 4zm2 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 0a2 2 0 1 0 .001 4A2 2 0 0 0 17 17z"></path></svg></div>'
        + '<div class="txt"><span class="nm">' + nome + '</span><span class="ms">' + msg + '</span></div>'
      + '</div></div>'
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