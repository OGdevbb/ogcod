// =============================================================
//  OG! — spotify-player.js
// =============================================================

const COMPONENT = {
    title: 'Player de Musica Spotify',
    description: 'Incorpora o player do Spotify fixo no canto da tela. Suporta tema claro/escuro, autoplay, posicao e filtro preto e branco.',
    tags: ['Spotify', 'Player', 'Musica', 'Iframe', 'JS', 'Gratis'],

    fields: [
        // URL da musica
        {
            id: 'spotifyUrl', label: 'URL da musica no Spotify', type: 'text',
            placeholder: 'Ex: https://open.spotify.com/track/...',
            default: 'https://open.spotify.com/intl-pt/track/7lQ8MOhq6IN2w8EYcFNSUk',
            required: true
        },

        // Posicao
        { id: 'posVerticalProp', label: 'Posicao vertical (bottom ou top)', type: 'text', placeholder: 'bottom ou top', default: 'bottom', required: true },
        { id: 'posVertical', label: 'Distancia vertical', type: 'text', placeholder: 'Ex: 20px', default: '20px', required: true },
        { id: 'posHorizontalProp', label: 'Posicao horizontal (right ou left)', type: 'text', placeholder: 'right ou left', default: 'right', required: true },
        { id: 'posHorizontal', label: 'Distancia horizontal', type: 'text', placeholder: 'Ex: 20px', default: '20px', required: true },

        // Tamanho
        { id: 'largura', label: 'Largura', type: 'text', placeholder: 'Ex: 300px', default: '300px', required: true },
        { id: 'altura', label: 'Altura', type: 'text', placeholder: 'Ex: 80px', default: '80px', required: true },
        { id: 'borderRadius', label: 'Border Radius', type: 'text', placeholder: 'Ex: 12px', default: '12px', required: true },

        // Visual
        { id: 'sombra', label: 'Sombra', type: 'text', placeholder: 'Ex: 0px 0px 15px rgba(0,0,0,0.5)', default: '0px 0px 15px rgba(0,0,0,0.5)', required: false },
        { id: 'grayscale', label: 'Preto e branco? (coloque: filter:grayscale(100%); ou deixe vazio)', type: 'text', placeholder: 'filter:grayscale(100%);', default: '', required: false },

        // Player
        { id: 'autoplay', label: 'Autoplay (1 = sim, 0 = nao)', type: 'text', placeholder: '0 ou 1', default: '0', required: true },
        { id: 'tema', label: 'Tema do player (0 = escuro, 1 = claro)', type: 'text', placeholder: '0 ou 1', default: '0', required: true },
    ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64 = '';
const BASE_JS_B64 = 'KGZ1bmN0aW9uKCkgewogIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub2ctc3BvdGlmeS1wbGF5ZXInKSkgcmV0dXJuOwoKICB2YXIgb2dTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7CiAgb2dTdHlsZS50ZXh0Q29udGVudCA9CiAgICAnLm9nLXNwb3RpZnktcGxheWVyeycgKwogICAgICAncG9zaXRpb246Zml4ZWQ7JyArCiAgICAgICd7e3Bvc1ZlcnRpY2FsUHJvcH19Ont7cG9zVmVydGljYWx9fTsnICsKICAgICAgJ3t7cG9zSG9yaXpvbnRhbFByb3B9fTp7e3Bvc0hvcml6b250YWx9fTsnICsKICAgICAgJ3dpZHRoOnt7bGFyZ3VyYX19OycgKwogICAgICAnaGVpZ2h0Ont7YWx0dXJhfX07JyArCiAgICAgICdib3JkZXI6bm9uZTsnICsKICAgICAgJ2JvcmRlci1yYWRpdXM6e3tib3JkZXJSYWRpdXN9fTsnICsKICAgICAgJ292ZXJmbG93OmhpZGRlbjsnICsKICAgICAgJ29wYWNpdHk6MTsnICsKICAgICAgJ2JveC1zaGFkb3c6e3tzb21icmF9fTsnICsKICAgICAgJ3RyYW5zaXRpb246b3BhY2l0eSAwLjNzIGVhc2U7JyArCiAgICAgICd6LWluZGV4Ojk5OTk7JyArCiAgICAgICd7e2dyYXlzY2FsZX19JyArCiAgICAnfSc7CiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChvZ1N0eWxlKTsKCiAgdmFyIG9nVHJhY2tVcmwgPSAne3tzcG90aWZ5VXJsfX0nOwogIHZhciBvZ1RyYWNrSWQgPSBvZ1RyYWNrVXJsLnNwbGl0KCcvdHJhY2svJylbMV07CiAgaWYgKG9nVHJhY2tJZCkgb2dUcmFja0lkID0gb2dUcmFja0lkLnNwbGl0KCc/JylbMF07CiAgaWYgKCFvZ1RyYWNrSWQpIHsgY29uc29sZS5lcnJvcignT0chIFBsYXllcjogVVJMIGRvIFNwb3RpZnkgaW52YWxpZGEnKTsgcmV0dXJuOyB9CgogIHZhciBvZ1BsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpOwogIG9nUGxheWVyLmNsYXNzTmFtZSA9ICdvZy1zcG90aWZ5LXBsYXllcic7CiAgb2dQbGF5ZXIuc3JjID0gJ2h0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9lbWJlZC90cmFjay8nICsgb2dUcmFja0lkICsgJz91dG1fc291cmNlPWdlbmVyYXRvciZhdXRvcGxheT17e2F1dG9wbGF5fX0mdGhlbWU9e3t0ZW1hfX0nOwogIG9nUGxheWVyLnNldEF0dHJpYnV0ZSgnZnJhbWVib3JkZXInLCAnMCcpOwogIG9nUGxheWVyLnNldEF0dHJpYnV0ZSgnYWxsb3d0cmFuc3BhcmVuY3knLCAndHJ1ZScpOwogIG9nUGxheWVyLnNldEF0dHJpYnV0ZSgnYWxsb3cnLCAnZW5jcnlwdGVkLW1lZGlhOyBhdXRvcGxheTsnKTsKICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG9nUGxheWVyKTsKfSkoKTs=';

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

    var url = v.spotifyUrl || 'https://open.spotify.com/track/7lQ8MOhq6IN2w8EYcFNSUk';
    var posVP = v.posVerticalProp || 'bottom';
    var posV = v.posVertical || '20px';
    var posHP = v.posHorizontalProp || 'right';
    var posH = v.posHorizontal || '20px';
    var largura = v.largura || '300px';
    var altura = v.altura || '80px';
    var radius = v.borderRadius || '12px';
    var sombra = v.sombra || '0px 0px 15px rgba(0,0,0,0.5)';
    var grayscale = v.grayscale || '';
    var autoplay = v.autoplay || '0';
    var tema = v.tema || '0';

    // Extract track ID
    var trackId = '';
    var parts = url.split('/track/');
    if (parts[1]) trackId = parts[1].split('?')[0];

    var embedUrl = trackId
        ? 'https://open.spotify.com/embed/track/' + trackId + '?utm_source=generator&autoplay=' + autoplay + '&theme=' + tema
        : '';

    var playerStyle =
        'position:absolute;' +
        posVP + ':' + posV + ';' +
        posHP + ':' + posH + ';' +
        'width:' + largura + ';' +
        'height:' + altura + ';' +
        'border:none;' +
        'border-radius:' + radius + ';' +
        'overflow:hidden;' +
        'box-shadow:' + sombra + ';' +
        'z-index:2;' +
        (grayscale ? grayscale : '');

    var innerContent = trackId
        ? '<iframe src="' + embedUrl + '" style="' + playerStyle + '" frameborder="0" allowtransparency="true" allow="encrypted-media; autoplay;"></iframe>'
        : '<div style="' + playerStyle + 'background:#1a1a1a;display:flex;align-items:center;justify-content:center;color:#666;font-size:.8rem;font-family:system-ui;">URL invalida</div>';

    var doc =
        '<!DOCTYPE html><html><head><meta charset="UTF-8">'
        + '<style>*{box-sizing:border-box;margin:0;padding:0;} body{background:#111;width:100%;height:480px;position:relative;overflow:hidden;}'
        + '.lbl{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:rgba(255,255,255,0.08);font-size:.8rem;font-family:system-ui;pointer-events:none;}</style>'
        + '</head><body>'
        + '<div class="lbl">Preview ao vivo</div>'
        + innerContent
        + '</body></html>';

    var old = box.querySelector('iframe');
    if (old) old.remove();
    var iframe = document.createElement('iframe');
    iframe.style.cssText = 'width:100%;height:480px;border:none;display:block;border-radius:14px;';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups');
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