// =============================================================
//  OG! — popup-stats.js
// =============================================================

const COMPONENT = {
    title: 'Popup de Estatisticas Fake',
    description: 'Notificacoes flutuantes no estilo moderno que simulam atividade na loja — pessoas online, usuarios vendo produtos, alta demanda. Totalmente customizavel.',
    tags: ['Popup', 'Notificacao', 'Fake Stats', 'Social Proof', 'CSS', 'JS', 'Gratis'],

    fields: [
        // Mensagens (aceita HTML com <strong>)
        { id: 'msg1', label: 'Mensagem 1 (aceita <strong>)', type: 'text', placeholder: 'Ex: Tem <strong>8 pessoas</strong> online agora.', default: 'Tem <strong>{{rand5-20}} pessoas</strong> online na loja agora.', required: true },
        { id: 'msg2', label: 'Mensagem 2', type: 'text', placeholder: 'Ex: <strong>3 usuarios</strong> vendo produtos.', default: '<strong>{{rand2-10}} usuarios</strong> estao visualizando produtos.', required: false },
        { id: 'msg3', label: 'Mensagem 3', type: 'text', placeholder: 'Ex: Alta demanda!...', default: 'Alta demanda! <strong>{{rand10-30}} visitas</strong> na ultima hora.', required: false },
        { id: 'msg4', label: 'Mensagem 4', type: 'text', placeholder: 'Ex: Suporte online...', default: 'Suporte online: <strong>Resposta em menos de 5 min.</strong>', required: false },
        { id: 'msg5', label: 'Mensagem 5', type: 'text', placeholder: 'Opcional', default: '', required: false },

        // Icone FontAwesome
        { id: 'iconeClasse', label: 'Classe do Icone (FontAwesome)', type: 'text', placeholder: 'Ex: fa-solid fa-chart-line', default: 'fa-solid fa-chart-line', required: true },

        // Tempos
        { id: 'tempoInicio', label: 'Delay inicial (ms)', type: 'text', placeholder: 'Ex: 2000', default: '2000', required: true },
        { id: 'tempoVisivel', label: 'Tempo visivel (ms)', type: 'text', placeholder: 'Ex: 5000', default: '5000', required: true },
        { id: 'intervaloMin', label: 'Intervalo minimo (ms)', type: 'text', placeholder: 'Ex: 15000', default: '15000', required: true },
        { id: 'intervaloMax', label: 'Intervalo maximo (ms)', type: 'text', placeholder: 'Ex: 30000', default: '30000', required: true },

        // Posicao e tamanho
        { id: 'posBottom', label: 'Posicao — Baixo', type: 'text', placeholder: 'Ex: 25px', default: '25px', required: true },
        { id: 'posLeft', label: 'Posicao — Esquerda', type: 'text', placeholder: 'Ex: 25px', default: '25px', required: true },
        { id: 'largura', label: 'Largura maxima', type: 'text', placeholder: 'Ex: 340px', default: '340px', required: true },
        { id: 'padding', label: 'Padding', type: 'text', placeholder: 'Ex: 14px 20px', default: '14px 20px', required: true },
        { id: 'borderRadius', label: 'Border Radius', type: 'text', placeholder: 'Ex: 16px', default: '16px', required: true },
        { id: 'blur', label: 'Blur do fundo', type: 'text', placeholder: 'Ex: 15px', default: '15px', required: true },
        { id: 'tamanhoTexto', label: 'Tamanho do texto', type: 'text', placeholder: 'Ex: 14px', default: '14px', required: true },

        // Cores
        { id: 'corFundo', label: 'Cor de Fundo (rgba)', type: 'text', placeholder: 'Ex: rgba(20,20,25,0.7)', default: 'rgba(20,20,25,0.7)', required: false },
        { id: 'corBorda', label: 'Cor da Borda (rgba)', type: 'text', placeholder: 'Ex: rgba(255,31,31,0.3)', default: 'rgba(255,31,31,0.3)', required: false },
        { id: 'corIconeFundo', label: 'Cor do Icone (fundo)', type: 'color', default: '#ff1f1f' },
        { id: 'corIconeGlow', label: 'Cor do Glow do Icone (rgba)', type: 'text', placeholder: 'Ex: rgba(255,31,31,0.4)', default: 'rgba(255,31,31,0.4)', required: false },
        { id: 'corTexto', label: 'Cor do Texto', type: 'color', default: '#ffffff' },
        { id: 'corDestaque', label: 'Cor do Destaque (<strong>)', type: 'color', default: '#ff1f1f' },
    ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64 = 'Lm9nLXN0YXRzLXBvcHVwIHsKICBwb3NpdGlvbjogZml4ZWQ7CiAgYm90dG9tOiB7e3Bvc0JvdHRvbX19OwogIGxlZnQ6IHt7cG9zTGVmdH19OwogIGJhY2tncm91bmQ6IHt7Y29yRnVuZG99fTsKICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoe3tibHVyfX0pOwogIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKHt7Ymx1cn19KTsKICBib3JkZXI6IDFweCBzb2xpZCB7e2NvckJvcmRhfX07CiAgYm9yZGVyLXJhZGl1czoge3tib3JkZXJSYWRpdXN9fTsKICBwYWRkaW5nOiB7e3BhZGRpbmd9fTsKICBkaXNwbGF5OiBmbGV4OwogIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgZ2FwOiAxMnB4OwogIHotaW5kZXg6IDEwMDAxOwogIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC41KTsKICB0cmFuc2l0aW9uOiBhbGwgMC42cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjAlKTsKICBvcGFjaXR5OiAwOwogIGZvbnQtZmFtaWx5OiBpbmhlcml0OwogIHBvaW50ZXItZXZlbnRzOiBub25lOwogIG1heC13aWR0aDoge3tsYXJndXJhfX07Cn0KLm9nLXN0YXRzLXBvcHVwLm9nLWFjdGl2ZSB7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOwogIG9wYWNpdHk6IDE7Cn0KLm9nLXN0YXRzLWljb24gewogIHdpZHRoOiAzMnB4OwogIGhlaWdodDogMzJweDsKICBiYWNrZ3JvdW5kOiB7e2Nvckljb25lRnVuZG99fTsKICBib3JkZXItcmFkaXVzOiAxMHB4OwogIGRpc3BsYXk6IGZsZXg7CiAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsKICBib3gtc2hhZG93OiAwIDAgMTVweCB7e2Nvckljb25lR2xvd319OwogIGZsZXgtc2hyaW5rOiAwOwp9Ci5vZy1zdGF0cy1pY29uIGkgewogIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OwogIGZvbnQtc2l6ZTogMTZweDsKfQoub2ctc3RhdHMtdGV4dCB7CiAgY29sb3I6IHt7Y29yVGV4dG99fTsKICBmb250LXNpemU6IHt7dGFtYW5ob1RleHRvfX07CiAgbGluZS1oZWlnaHQ6IDEuNDsKfQoub2ctc3RhdHMtdGV4dCBzdHJvbmcgewogIGNvbG9yOiB7e2NvckRlc3RhcXVlfX07CiAgZm9udC13ZWlnaHQ6IDcwMDsKfQpAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHsKICAub2ctc3RhdHMtcG9wdXAgewogICAgYm90dG9tOiAxNXB4OwogICAgbGVmdDogMTVweDsKICAgIHJpZ2h0OiAxNXB4OwogICAgcGFkZGluZzogMTJweDsKICAgIG1heC13aWR0aDogbm9uZTsKICB9Cn0=';
const BASE_JS_B64 = 'KGZ1bmN0aW9uICgpIHsKICAndXNlIHN0cmljdCc7CgogIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tocmVmKj0iZm9udC1hd2Vzb21lIl0nKSkgewogICAgdmFyIGZhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpOwogICAgZmEucmVsID0gJ3N0eWxlc2hlZXQnOwogICAgZmEuaHJlZiA9ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNi4wLjAvY3NzL2FsbC5taW4uY3NzJzsKICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZmEpOwogIH0KCiAgdmFyIG9nTWVuc2FnZW5zID0gWwogICAgLyogSUY6bXNnMSAqLyd7e21zZzF9fScsLyogRU5ESUYgKi8KICAgIC8qIElGOm1zZzIgKi8ne3ttc2cyfX0nLC8qIEVORElGICovCiAgICAvKiBJRjptc2czICovJ3t7bXNnM319JywvKiBFTkRJRiAqLwogICAgLyogSUY6bXNnNCAqLyd7e21zZzR9fScsLyogRU5ESUYgKi8KICAgIC8qIElGOm1zZzUgKi8ne3ttc2c1fX0nLC8qIEVORElGICovCiAgXS5maWx0ZXIoQm9vbGVhbik7CgogIGlmICghb2dNZW5zYWdlbnMubGVuZ3RoKSB7CiAgICBvZ01lbnNhZ2VucyA9IFsKICAgICAgJ1RlbSA8c3Ryb25nPicgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTUpICsgNSkgKyAnIHBlc3NvYXM8L3N0cm9uZz4gb25saW5lIG5hIGxvamEgYWdvcmEuJywKICAgICAgJzxzdHJvbmc+JyArIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KSArIDIpICsgJyB1c3Vhcmlvczwvc3Ryb25nPiBlc3RhbyB2aXN1YWxpemFuZG8gcHJvZHV0b3MuJywKICAgICAgJ0FsdGEgZGVtYW5kYSEgPHN0cm9uZz4nICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKSArIDEwKSArICcgdmlzaXRhczwvc3Ryb25nPiBuYSB1bHRpbWEgaG9yYS4nLAogICAgICAnU3Vwb3J0ZSBvbmxpbmU6IDxzdHJvbmc+UmVzcG9zdGEgZW0gbWVub3MgZGUgNSBtaW4uPC9zdHJvbmc+JwogICAgXTsKICB9CgogIHZhciBvZ0ljb25lQ2xhc3NlID0gJ3t7aWNvbmVDbGFzc2V9fScgfHwgJ2ZhLXNvbGlkIGZhLWNoYXJ0LWxpbmUnOwogIHZhciBvZ1RlbXBvVmlzaXZlbCA9IHt7dGVtcG9WaXNpdmVsfX07CiAgdmFyIG9nVGVtcG9JbmljaW8gID0ge3t0ZW1wb0luaWNpb319OwogIHZhciBvZ0ludGVydmFsb01pbiA9IHt7aW50ZXJ2YWxvTWlufX07CiAgdmFyIG9nSW50ZXJ2YWxvTWF4ID0ge3tpbnRlcnZhbG9NYXh9fTsKCiAgZnVuY3Rpb24gb2dHZXJhck1lbnNhZ2VtKCkgewogICAgdmFyIG1zZ3MgPSBvZ01lbnNhZ2Vucy5tYXAoZnVuY3Rpb24obSkgewogICAgICByZXR1cm4gbS5yZXBsYWNlKC9ce1x7cmFuZChcZCspLShcZCspXH1cfS9nLCBmdW5jdGlvbihfLCBhLCBiKSB7CiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChwYXJzZUludChiKSAtIHBhcnNlSW50KGEpICsgMSkpICsgcGFyc2VJbnQoYSk7CiAgICAgIH0pOwogICAgfSk7CiAgICByZXR1cm4gbXNnc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtc2dzLmxlbmd0aCldOwogIH0KCiAgZnVuY3Rpb24gb2dTaG93U3RhdHMoKSB7CiAgICB2YXIgZXhpc3RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub2ctc3RhdHMtcG9wdXAnKTsKICAgIGlmIChleGlzdGluZykgZXhpc3RpbmcucmVtb3ZlKCk7CgogICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdvZy1zdGF0cy1wb3B1cCc7CiAgICBjb250YWluZXIuaW5uZXJIVE1MID0KICAgICAgJzxkaXYgY2xhc3M9Im9nLXN0YXRzLWljb24iPjxpIGNsYXNzPSInICsgb2dJY29uZUNsYXNzZSArICciPjwvaT48L2Rpdj4nICsKICAgICAgJzxkaXYgY2xhc3M9Im9nLXN0YXRzLXRleHQiPicgKyBvZ0dlcmFyTWVuc2FnZW0oKSArICc8L2Rpdj4nOwoKICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvZy1hY3RpdmUnKTsgfSwgMTAwKTsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdvZy1hY3RpdmUnKTsKICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgaWYgKGNvbnRhaW5lci5wYXJlbnROb2RlKSBjb250YWluZXIucmVtb3ZlKCk7IH0sIDYwMCk7CiAgICB9LCBvZ1RlbXBvVmlzaXZlbCk7CiAgfQoKICBmdW5jdGlvbiBvZ1N0YXJ0TG9vcCgpIHsKICAgIHNldFRpbWVvdXQob2dTaG93U3RhdHMsIG9nVGVtcG9JbmljaW8pOwogICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7CiAgICAgIG9nU2hvd1N0YXRzKCk7CiAgICB9LCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAob2dJbnRlcnZhbG9NYXggLSBvZ0ludGVydmFsb01pbiArIDEpKSArIG9nSW50ZXJ2YWxvTWluKTsKICB9CgogIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHsKICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBvZ1N0YXJ0TG9vcCk7CiAgfSBlbHNlIHsKICAgIG9nU3RhcnRMb29wKCk7CiAgfQp9KSgpOw==';

// =============================================================
//  ENGINE — não mexa abaixo desta linha
// =============================================================

// Decodifica base64 → string (suporte a UTF-8)
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
const BASE_CSS = b64decode(BASE_CSS_B64);
const BASE_JS = b64decode(BASE_JS_B64);

// ── Cursor ───────────────────────────────────────────────────
const oC = document.getElementById('ogC');
const oR = document.getElementById('ogR');
var mx = -200, my = -200, rx = -200, ry = -200, cvis = false;

document.addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
    oC.style.left = mx + 'px'; oC.style.top = my + 'px';
    if (!cvis) { oC.style.opacity = '1'; oR.style.opacity = '0.5'; cvis = true; }
});
document.addEventListener('mouseleave', function () {
    oC.style.opacity = oR.style.opacity = '0'; cvis = false;
});
(function tick() {
    rx += (mx - rx) * .13; ry += (my - ry) * .13;
    oR.style.left = rx + 'px'; oR.style.top = ry + 'px';
    requestAnimationFrame(tick);
})();

function hover(els) {
    els.forEach(function (el) {
        el.addEventListener('mouseenter', function () { oC.style.width = oC.style.height = '20px'; oR.style.width = oR.style.height = '56px'; });
        el.addEventListener('mouseleave', function () { oC.style.width = oC.style.height = '12px'; oR.style.width = oR.style.height = '36px'; });
    });
}
hover(document.querySelectorAll('a, button'));

// ── Metadados ────────────────────────────────────────────────
document.getElementById('bcTitle').textContent = COMPONENT.title;
document.getElementById('compH1').textContent = COMPONENT.title;
document.getElementById('compDesc').textContent = COMPONENT.description;
COMPONENT.tags.forEach(function (t) {
    var s = document.createElement('span');
    s.className = 'ctag' + (t === 'Grátis' ? ' hl' : '');
    s.textContent = t;
    document.getElementById('compTags').appendChild(s);
});

// ── Renderiza campos ─────────────────────────────────────────
var fw = document.getElementById('fieldsWrap');

COMPONENT.fields.forEach(function (f) {
    var g = document.createElement('div');
    g.className = 'field-group';
    g.dataset.fid = f.id;

    var lb = document.createElement('label');
    lb.className = 'field-lbl';
    lb.textContent = f.label + (f.required ? ' *' : '');

    if (f.type === 'color' && f.default && f.default.indexOf('rgba') === -1) {
        var cw = document.createElement('div'); cw.className = 'color-wrap';
        var nat = document.createElement('input'); nat.type = 'color'; nat.className = 'color-native'; nat.value = f.default; nat.id = 'f_' + f.id;
        var sw = document.createElement('div'); sw.className = 'color-swatch'; sw.style.background = f.default;
        var hx = document.createElement('input'); hx.type = 'text'; hx.className = 'color-hex'; hx.value = f.default; hx.maxLength = 7;

        sw.onclick = function () { nat.click(); };
        hx.onclick = function () { nat.click(); };
        nat.oninput = function () { sw.style.background = nat.value; hx.value = nat.value; renderPreview(); };
        hx.oninput = function () { if (/^#[0-9a-fA-F]{6}$/.test(hx.value)) { nat.value = hx.value; sw.style.background = hx.value; renderPreview(); } };

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
    COMPONENT.fields.forEach(function (f) {
        var el = document.getElementById('f_' + f.id);
        v[f.id] = el ? el.value.trim() : '';
    });
    return v;
}

// ── Validação ────────────────────────────────────────────────
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
            if (inp) inp.addEventListener('input', function () {
                if (inp.value.trim()) { inp.classList.remove('has-err'); if (er) er.classList.remove('show'); }
            }, { once: true });
        } else {
            if (inp) inp.classList.remove('has-err');
            if (er) er.classList.remove('show');
        }
    });
    return ok;
}

// ── Template engine ──────────────────────────────────────────
function process(tpl, v) {
    var c = tpl.replace(/\/\* IF:(\w+) \*\/([\s\S]*?)\/\* ENDIF \*\//g, function (_, k, b) { return v[k] ? b : ''; });
    c = c.replace(/\{\{(\w+)\}\}/g, function (_, k) { return v[k] || ''; });
    return c.replace(/\n{3,}/g, '\n\n').trim();
}

// ── Preview ao vivo ───────────────────────────────────────────
function renderPreview() {
    var v = getVals();
    var box = document.getElementById('previewBox');

    var corFundo = v.corFundo || 'rgba(20,20,25,0.85)';
    var corBorda = v.corBorda || 'rgba(255,31,31,0.3)';
    var corIconeF = v.corIconeFundo || '#ff1f1f';
    var corIconeG = v.corIconeGlow || 'rgba(255,31,31,0.4)';
    var corTexto = v.corTexto || '#ffffff';
    var corDestaque = v.corDestaque || '#ff1f1f';
    var padding = v.padding || '14px 20px';
    var radius = v.borderRadius || '16px';
    var blur = v.blur || '15px';
    var largura = v.largura || '340px';
    var tamTxt = v.tamanhoTexto || '14px';
    var posBottom = v.posBottom || '25px';
    var posLeft = v.posLeft || '25px';
    var icone = v.iconeClasse || 'fa-solid fa-chart-line';

    // Pega primeira mensagem nao vazia e substitui {{randX-Y}}
    var msg = '';
    for (var i = 1; i <= 5; i++) {
        var m = v['msg' + i];
        if (m && m.trim()) { msg = m; break; }
    }
    if (!msg) msg = 'Tem <strong>12 pessoas</strong> online na loja agora.';
    // substitui {{randX-Y}} por numero aleatorio no range
    msg = msg.replace(/\{\{rand(\d+)-(\d+)\}\}/g, function (_, a, b) {
        return Math.floor(Math.random() * (parseInt(b) - parseInt(a) + 1)) + parseInt(a);
    });
    // substitui cor do strong no preview
    msg = msg.replace(/<strong>/g, '<strong style="color:' + corDestaque + ';font-weight:700;">');

    var doc =
        '<!DOCTYPE html><html><head><meta charset="UTF-8">'
        + '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">'
        + '<style>'
        + '*{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,sans-serif;}'
        + 'body{background:#0d0d14;width:100%;height:420px;position:relative;overflow:hidden;}'
        + '.popup{'
        + 'position:absolute;bottom:' + posBottom + ';left:' + posLeft + ';'
        + 'background:' + corFundo + ';'
        + 'backdrop-filter:blur(' + blur + ');'
        + '-webkit-backdrop-filter:blur(' + blur + ');'
        + 'border:1px solid ' + corBorda + ';'
        + 'border-radius:' + radius + ';'
        + 'padding:' + padding + ';'
        + 'max-width:' + largura + ';'
        + 'box-shadow:0 10px 30px rgba(0,0,0,0.5);'
        + 'display:flex;align-items:center;gap:12px;'
        + 'animation:slideIn 0.6s cubic-bezier(0.23,1,0.32,1) 0.3s both;'
        + '}'
        + '.ico{'
        + 'width:32px;height:32px;'
        + 'background:' + corIconeF + ';'
        + 'border-radius:10px;'
        + 'display:flex;align-items:center;justify-content:center;'
        + 'box-shadow:0 0 15px ' + corIconeG + ';'
        + 'flex-shrink:0;'
        + '}'
        + '.ico i{color:#fff !important;font-size:15px;}'
        + '.txt{color:' + corTexto + ';font-size:' + tamTxt + ';line-height:1.4;}'
        + '.dot{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:rgba(255,255,255,0.08);font-size:.8rem;}'
        + '@keyframes slideIn{from{transform:translateX(-120%);opacity:0}to{transform:translateX(0);opacity:1}}'
        + '</style></head><body>'
        + '<div class="dot">Preview ao vivo</div>'
        + '<div class="popup">'
        + '<div class="ico"><i class="' + icone + '"></i></div>'
        + '<div class="txt">' + msg + '</div>'
        + '</div>'
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
var modal = document.getElementById('modal');
var codePre = document.getElementById('codePre');
var copyBtn = document.getElementById('copyBtn');
var curTab = 'html';
var gen = { html: '', css: '', js: '' };

document.getElementById('genBtn').onclick = function () {
    var v = getVals();
    if (!validate(v)) return;

    gen.html = process(BASE_HTML, v);
    gen.css = process(BASE_CSS, v);
    gen.js = process(BASE_JS, v);

    var firstFilled = ['html', 'css', 'js'].find(function (t) { return gen[t].length > 0; }) || 'html';

    document.querySelectorAll('.code-tab').forEach(function (t) {
        t.classList.toggle('filled', gen[t.dataset.tab].length > 0);
    });
    showTab(firstFilled);
    modal.classList.add('open');
};

function showTab(tab) {
    curTab = tab;
    document.querySelectorAll('.code-tab').forEach(function (t) { t.classList.toggle('active', t.dataset.tab === tab); });
    var code = gen[tab];
    if (!code) {
        codePre.innerHTML = '<div class="empty-state"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>Nenhum código ' + tab.toUpperCase() + ' para este componente.</div>';
        copyBtn.style.display = 'none';
        return;
    }
    codePre.textContent = code;
    copyBtn.style.display = 'inline-flex';
}

document.querySelectorAll('.code-tab').forEach(function (t) { t.onclick = function () { showTab(t.dataset.tab); }; });
document.getElementById('modalClose').onclick = function () { modal.classList.remove('open'); };
modal.onclick = function (e) { if (e.target === modal) modal.classList.remove('open'); };
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') modal.classList.remove('open'); });

copyBtn.onclick = function () {
    navigator.clipboard.writeText(gen[curTab]).then(function () {
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copiado!';
        setTimeout(function () {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copiar';
        }, 2000);
    });
};

// ── Init ─────────────────────────────────────────────────────
renderPreview();




//remover header e footer
const selectores = [
    'header.sc-d92c5a35-0.lgbgZI',
    'footer.sc-8a04aca7-0.WAVpc'
];

const removerElementos = () => {
    selectores.forEach(sel => {
        document.querySelector(sel)?.remove();
    });
};

const observer = new MutationObserver(() => {
    removerElementos();
});

observer.observe(document.documentElement, { childList: true, subtree: true });
removerElementos();