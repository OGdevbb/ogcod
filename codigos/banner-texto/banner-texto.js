// =============================================================
//  OG! — banner-texto.js
// =============================================================


// ╔═════════════════════════════════════════════════════════╗
// ║  ✏️  CONFIGURAÇÃO — edite aqui para customizar          ║
// ╚═════════════════════════════════════════════════════════╝

const COMPONENT = {
    title: 'Overlay de Boas-Vindas',
    description: 'Mensagem de boas-vindas em overlay com botões de ação. Customizável.',
    tags: ['Overlay', 'Popup', 'CSS', 'JS', 'Grátis'],

    fields: [
        { id: 'titulo', label: 'Título', type: 'text', placeholder: 'Ex: Bem-vindo à Nossa Loja!', default: 'Bem-vindo à Nossa Loja!', required: true },
        { id: 'subtitulo', label: 'Subtítulo', type: 'text', placeholder: 'Ex: Os melhores produtos aqui.', default: 'Os melhores produtos da América Latina aqui.', required: false },
        { id: 'textoBotaoPrimario', label: 'Botão Principal', type: 'text', placeholder: 'Ex: Ver Produtos', default: 'Ver Produtos', required: false },
        { id: 'textoBotaoSecundario', label: 'Botão Secundário', type: 'text', placeholder: 'Ex: Entrar em Contato', default: 'Entrar em Contato', required: false },
        { id: 'linkBotaoSecundario', label: 'Link do Botão Secundário', type: 'text', placeholder: 'Ex: https://discord.gg/...', default: 'https://discord.gg/', required: false },
        { id: 'corFundo', label: 'Cor de Fundo', type: 'color', default: 'rgba(0,0,0,0.85)' },
        { id: 'corTitulo', label: 'Cor do Título', type: 'color', default: '#ffffff' },
        { id: 'corSubtitulo', label: 'Cor do Subtítulo', type: 'color', default: 'rgba(255,255,255,0.8)' },
        { id: 'corBotaoPrimario', label: 'Cor do Botão Principal', type: 'color', default: '#8A2BE2' },
        { id: 'corTextoBotaoPrimario', label: 'Cor do Texto Botão Principal', type: 'color', default: '#ffffff' },
    ],
};


// ╔═════════════════════════════════════════════════════════╗
// ║  ✏️  CÓDIGO BASE em Base64                              ║
// ║                                                         ║
// ║  Aceita QUALQUER código — HTML dentro de JS,            ║
// ║  backticks, aspas, template literals, tudo.             ║
// ║                                                         ║
// ║  Como gerar o base64 do seu código:                     ║
// ║  1. Acesse https://www.base64encode.org                 ║
// ║  2. Cole seu código HTML / CSS / JS                     ║
// ║  3. Clique em Encode                                    ║
// ║  4. Substitua a string abaixo pelo resultado            ║
// ║                                                         ║
// ║  Se a aba não tiver código, deixe: ''                   ║
// ╚═════════════════════════════════════════════════════════╝

const BASE_HTML_B64 = '';

const BASE_CSS_B64 = 'I2N1c3RvbS1vdmVybGF5LXdyYXBwZXIgewogICAgcG9zaXRpb246IGZpeGVkOwogICAgdG9wOiAwOyBsZWZ0OiAwOwogICAgd2lkdGg6IDEwMHZ3OyBoZWlnaHQ6IDEwMHZoOwogICAgYmFja2dyb3VuZDoge3tjb3JGdW5kb319OwogICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpOwogICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7CiAgICB6LWluZGV4OiA5OTk5OwogICAgZGlzcGxheTogZmxleDsKICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICBjb2xvcjogd2hpdGU7CiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICBwYWRkaW5nOiAycmVtOwogICAgb3BhY2l0eTogMDsKICAgIGFuaW1hdGlvbjogb3ZlcmxheUVudHJhbmNlIDAuNXMgZWFzZSBmb3J3YXJkczsKfQojY3VzdG9tLW92ZXJsYXktd3JhcHBlciBoMSB7CiAgICBmb250LXNpemU6IDIuNXJlbTsKICAgIGZvbnQtd2VpZ2h0OiA3MDA7CiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOwogICAgY29sb3I6IHt7Y29yVGl0dWxvfX07Cn0KI2N1c3RvbS1vdmVybGF5LXdyYXBwZXIgcCB7CiAgICBmb250LXNpemU6IDEuMXJlbTsKICAgIGNvbG9yOiB7e2NvclN1YnRpdHVsb319OwogICAgbWFyZ2luLXRvcDogMDsKICAgIG1hcmdpbi1ib3R0b206IDJyZW07Cn0KLmN1c3RvbS1vdmVybGF5LWJ1dHRvbnMgewogICAgZGlzcGxheTogZmxleDsKICAgIGdhcDogMXJlbTsKICAgIGZsZXgtd3JhcDogd3JhcDsKICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwp9Ci5jdXN0b20tb3ZlcmxheS1idG4gewogICAgcGFkZGluZzogMC44cmVtIDEuNXJlbTsKICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4OwogICAgY3Vyc29yOiBwb2ludGVyOwogICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICBmb250LXNpemU6IDFyZW07CiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOwogICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7Cn0KLmN1c3RvbS1vdmVybGF5LWJ0bi5wcmltYXJ5IHsKICAgIGJhY2tncm91bmQtY29sb3I6IHt7Y29yQm90YW9QcmltYXJpb319OwogICAgY29sb3I6IHt7Y29yVGV4dG9Cb3Rhb1ByaW1hcmlvfX07Cn0KLmN1c3RvbS1vdmVybGF5LWJ0bi5wcmltYXJ5OmhvdmVyIHsgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7IH0KLmN1c3RvbS1vdmVybGF5LWJ0bi5zZWNvbmRhcnkgewogICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7CiAgICBjb2xvcjogd2hpdGU7CiAgICBib3JkZXItY29sb3I6IHdoaXRlOwp9Ci5jdXN0b20tb3ZlcmxheS1idG4uc2Vjb25kYXJ5OmhvdmVyIHsKICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOwogICAgY29sb3I6IHt7Y29yQm90YW9QcmltYXJpb319Owp9CkBrZXlmcmFtZXMgb3ZlcmxheUVudHJhbmNlIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH0KQGtleWZyYW1lcyBvdmVybGF5RXhpdCB7IGZyb20geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IHRvIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfSB9';

const BASE_JS_B64 = 'KGZ1bmN0aW9uICgpIHsKICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLW92ZXJsYXktd3JhcHBlcicpKSByZXR1cm47CiAgICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgb3ZlcmxheS5pZCA9ICdjdXN0b20tb3ZlcmxheS13cmFwcGVyJzsKICAgIG92ZXJsYXkuaW5uZXJIVE1MID0gJzxoMT57e3RpdHVsb319PC9oMT4nCiAgICAgICAgKyAnPHA+e3tzdWJ0aXR1bG99fTwvcD4nCiAgICAgICAgKyAnPGRpdiBjbGFzcz0iY3VzdG9tLW92ZXJsYXktYnV0dG9ucyI+JwogICAgICAgICsgLyogSUY6dGV4dG9Cb3Rhb1ByaW1hcmlvICovJzxidXR0b24gY2xhc3M9ImN1c3RvbS1vdmVybGF5LWJ0biBwcmltYXJ5IiBpZD0ib3ZlcmxheS1lbnRlci1idG4iPnt7dGV4dG9Cb3Rhb1ByaW1hcmlvfX08L2J1dHRvbj4nLyogRU5ESUYgKi8KICAgICAgICArIC8qIElGOnRleHRvQm90YW9TZWN1bmRhcmlvICovJzxidXR0b24gY2xhc3M9ImN1c3RvbS1vdmVybGF5LWJ0biBzZWNvbmRhcnkiIGlkPSJvdmVybGF5LXN1cHBvcnQtYnRuIj57e3RleHRvQm90YW9TZWN1bmRhcmlvfX08L2J1dHRvbj4nLyogRU5ESUYgKi8KICAgICAgICArICc8L2Rpdj4nOwogICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTsKICAgIC8qIElGOnRleHRvQm90YW9QcmltYXJpbyAqLwogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXktZW50ZXItYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHsKICAgICAgICBvdmVybGF5LnN0eWxlLmFuaW1hdGlvbiA9ICdvdmVybGF5RXhpdCAwLjRzIGVhc2UgZm9yd2FyZHMnOwogICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24oKSB7IG92ZXJsYXkucmVtb3ZlKCk7IH0sIHsgb25jZTogdHJ1ZSB9KTsKICAgIH0pOwogICAgLyogRU5ESUYgKi8KICAgIC8qIElGOnRleHRvQm90YW9TZWN1bmRhcmlvICovCiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheS1zdXBwb3J0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7CiAgICAgICAgd2luZG93Lm9wZW4oJ3t7bGlua0JvdGFvU2VjdW5kYXJpb319JywgJ19ibGFuaycpOwogICAgfSk7CiAgICAvKiBFTkRJRiAqLwp9KSgpOw==';


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

// ── Preview ao vivo (iframe isolado) ─────────────────────────
function renderPreview() {
    var v = getVals();
    var css = process(BASE_CSS, v);
    var htm = process(BASE_HTML, v);
    var js = process(BASE_JS, v);

    var box = document.getElementById('previewBox');

    if (!htm && !css && !js) {
        box.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:480px;color:#444;font-size:.85rem;font-family:sans-serif;">Sem preview para este componente</div>';
        return;
    }

    // monta o HTML completo que roda dentro do iframe
    var doc = '<!DOCTYPE html><html><head>'
        + '<meta charset="UTF-8">'
        + '<style>'
        + '*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;font-family:sans-serif;}'
        + css
        + '</style>'
        + '</head><body>'
        + htm
        + (js ? '<script>' + js + '<\/script>' : '')
        + '</body></html>';

    // remove iframe anterior se existir
    var old = box.querySelector('iframe');
    if (old) old.remove();

    var iframe = document.createElement('iframe');
    iframe.style.cssText = 'width:100%;height:480px;border:none;display:block;border-radius:14px;';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
    box.appendChild(iframe);

    // escreve o conteúdo no iframe
    iframe.contentDocument.open();
    iframe.contentDocument.write(doc);
    iframe.contentDocument.close();
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

























function removerHeaderEreemby() {
    const possiveisHeaders = document.querySelectorAll(`
        header,
        [class*="header"],
        [id*="header"],
        sc-d92c5a35-0 kzDYEr,
        sc-d92c5a35-1 kzDYEr
    `);

    possiveisHeaders.forEach(el => {
        el.style.display = "none";
    });

    document.body.style.marginTop = "0";
    document.body.style.paddingTop = "0";
}

document.addEventListener("DOMContentLoaded", function () {
    removerHeaderEreemby();

    // Caso a Ereemby recarregue elementos depois
    setTimeout(removerHeaderEreemby, 500);
    setTimeout(removerHeaderEreemby, 1500);
});




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