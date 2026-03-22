// =============================================================
//  OG! — banner-texto.js
// =============================================================


// ╔═════════════════════════════════════════════════════════╗
// ║  ✏️  CONFIGURAÇÃO — edite aqui para customizar          ║
// ╚═════════════════════════════════════════════════════════╝

const COMPONENT = {
    title: 'Banner — Carrossel de Imagens',
    description: 'Carrossel automático com até 5 imagens, troca automática e botões de navegação.',
    tags: ['Banner', 'Carrossel', 'CSS', 'JS', 'Grátis'],

    fields: [
        { id: 'img1', label: 'URL Imagem 1', type: 'text', placeholder: 'É necessário adicionar um link para visualizar', default: '', required: true },
        { id: 'img2', label: 'URL Imagem 2', type: 'text', placeholder: 'É necessário adicionar um link para visualizar', default: '', required: false },
        { id: 'img3', label: 'URL Imagem 3', type: 'text', placeholder: 'É necessário adicionar um link para visualizar', default: '', required: false },
        { id: 'img4', label: 'URL Imagem 4 (Opcional)', type: 'text', placeholder: 'É necessário adicionar um link para visualizar', default: '', required: false },
        { id: 'img5', label: 'URL Imagem 5 (Opcional)', type: 'text', placeholder: 'É necessário adicionar um link para visualizar', default: '', required: false },
        { id: 'intervalo', label: 'Intervalo de Troca (ms)', type: 'text', placeholder: 'Ex: 5000', default: '5000', required: true },
        { id: 'altura', label: 'Altura Máxima', type: 'text', placeholder: 'Ex: 450px', default: '450px', required: true },
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

const BASE_CSS_B64 = 'LmNhcm91c2VsLWNvbnRhaW5lciB7IAogICAgbWF4LXdpZHRoOiAxMjAwcHg7IAogICAgbWFyZ2luOiAyMHB4IGF1dG87IAogICAgb3ZlcmZsb3c6IGhpZGRlbjsgCiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IAogICAgYm9yZGVyLXJhZGl1czogMTJweDsKICAgIG1heC1oZWlnaHQ6IHt7YWx0dXJhfX07Cn0KLmNhcm91c2VsLXNsaWRlIHsgCiAgICBkaXNwbGF5OiBmbGV4OyAKICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjdzIGN1YmljLWJlemllcigwLjI1LCAxLCAwLjUsIDEpOwp9Ci5jYXJvdXNlbC1pdGVtIHsgCiAgICBtaW4td2lkdGg6IDEwMCU7IAogICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgCn0KLmNhcm91c2VsLWl0ZW0gaW1nIHsgCiAgICB3aWR0aDogMTAwJTsgCiAgICBkaXNwbGF5OiBibG9jazsgCiAgICBib3JkZXItcmFkaXVzOiAxMnB4OwogICAgbWF4LWhlaWdodDoge3thbHR1cmF9fTsgCiAgICBvYmplY3QtZml0OiBjb3ZlcjsgCn0KLmNhcm91c2VsLW5hdiB7IAogICAgcG9zaXRpb246IGFic29sdXRlOyAKICAgIHRvcDogNTAlOyAKICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgCiAgICB3aWR0aDogMTAwJTsgCiAgICBkaXNwbGF5OiBmbGV4OyAKICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgCiAgICBwYWRkaW5nOiAwIDIwcHg7IAogICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IAp9Ci5uYXYtYnV0dG9uIHsgCiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7IAogICAgY29sb3I6IHdoaXRlOyAKICAgIGJvcmRlcjogbm9uZTsgCiAgICB3aWR0aDogNDVweDsgCiAgICBoZWlnaHQ6IDQ1cHg7IAogICAgYm9yZGVyLXJhZGl1czogNTAlOyAKICAgIGN1cnNvcjogcG9pbnRlcjsgCiAgICBvcGFjaXR5OiAwOyAKICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IAogICAgcG9pbnRlci1ldmVudHM6IGFsbDsgCiAgICBmb250LXNpemU6IDEuNXJlbTsgCn0KLmNhcm91c2VsLWNvbnRhaW5lcjpob3ZlciAubmF2LWJ1dHRvbiB7IAogICAgb3BhY2l0eTogMC44OyAKfQoubmF2LWJ1dHRvbjpob3ZlciB7IAogICAgb3BhY2l0eTogMSAhaW1wb3J0YW50OyAKfQ==';

const BASE_JS_B64 = 'LyogQmFubmVyIENhcnJvc3NlbCBkZSBJbWFnZW5zIOKAlCBnZXJhZG8gcG9yIE9HISAqLwooZnVuY3Rpb24oKSB7CiAgICAndXNlIHN0cmljdCc7CiAgICBpZiAod2luZG93LmJhbm5lckNhcnJvc3NlbEluaWNpYWxpemFkbykgcmV0dXJuOwogICAgd2luZG93LmJhbm5lckNhcnJvc3NlbEluaWNpYWxpemFkbyA9IHRydWU7CgogICAgdmFyIGltYWdlVXJscyA9IFsKICAgICAgICAne3tpbWcxfX0nLAogICAgICAgIC8qIElGOmltZzIgKi8ne3tpbWcyfX0nLC8qIEVORElGICovCiAgICAgICAgLyogSUY6aW1nMyAqLyd7e2ltZzN9fScsLyogRU5ESUYgKi8KICAgICAgICAvKiBJRjppbWc0ICovJ3t7aW1nNH19JywvKiBFTkRJRiAqLwogICAgICAgIC8qIElGOmltZzUgKi8ne3tpbWc1fX0nLyogRU5ESUYgKi8KICAgIF0uZmlsdGVyKGZ1bmN0aW9uKHVybCkgeyByZXR1cm4gdXJsICYmIHVybC50cmltKCkgIT09ICcnOyB9KTsKCiAgICBmdW5jdGlvbiBjcmlhckNhcnJvc3NlbCh0YXJnZXQpIHsKICAgICAgICBpZiAoIWltYWdlVXJscy5sZW5ndGggfHwgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1jb250YWluZXInKSkgcmV0dXJuOwogICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2Nhcm91c2VsLWNvbnRhaW5lcic7CiAgICAgICAgdmFyIGl0ZW1zSFRNTCA9ICcnOwogICAgICAgIGltYWdlVXJscy5mb3JFYWNoKGZ1bmN0aW9uKHVybCkgewogICAgICAgICAgICBpdGVtc0hUTUwgKz0gJzxkaXYgY2xhc3M9ImNhcm91c2VsLWl0ZW0iPjxpbWcgc3JjPSInICsgdXJsICsgJyIgYWx0PSJCYW5uZXIgUHJvbW9jaW9uYWwiPjwvZGl2Pic7CiAgICAgICAgfSk7CiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPSJjYXJvdXNlbC1zbGlkZSI+JyArIGl0ZW1zSFRNTCArICc8L2Rpdj4nCiAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9ImNhcm91c2VsLW5hdiI+JwogICAgICAgICAgICArICc8YnV0dG9uIGNsYXNzPSJuYXYtYnV0dG9uIHByZXYiPiYjMTAwOTQ7PC9idXR0b24+JwogICAgICAgICAgICArICc8YnV0dG9uIGNsYXNzPSJuYXYtYnV0dG9uIG5leHQiPiYjMTAwOTU7PC9idXR0b24+JwogICAgICAgICAgICArICc8L2Rpdj4nOwogICAgICAgIHRhcmdldC5wcmVwZW5kKGNvbnRhaW5lcik7CiAgICAgICAgdmFyIHNsaWRlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1zbGlkZScpOwogICAgICAgIHZhciBwcmV2QnRuID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2Jyk7CiAgICAgICAgdmFyIG5leHRCdG4gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm5leHQnKTsKICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gMDsKICAgICAgICB2YXIgaW50ZXJ2YWwgPSBwYXJzZUludCgne3tpbnRlcnZhbG99fScsIDEwKSB8fCA1MDAwOwogICAgICAgIHZhciBhdXRvU2xpZGUgPSBzZXRJbnRlcnZhbChuZXh0U2xpZGUsIGludGVydmFsKTsKICAgICAgICBmdW5jdGlvbiB1cGRhdGVTbGlkZSgpIHsgc2xpZGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLScgKyAoY3VycmVudEluZGV4ICogMTAwKSArICclKSc7IH0KICAgICAgICBmdW5jdGlvbiBuZXh0U2xpZGUoKSB7IGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyAxKSAlIGltYWdlVXJscy5sZW5ndGg7IHVwZGF0ZVNsaWRlKCk7IH0KICAgICAgICBmdW5jdGlvbiBwcmV2U2xpZGUoKSB7IGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggLSAxICsgaW1hZ2VVcmxzLmxlbmd0aCkgJSBpbWFnZVVybHMubGVuZ3RoOyB1cGRhdGVTbGlkZSgpOyB9CiAgICAgICAgZnVuY3Rpb24gcmVzZXQoKSB7IGNsZWFySW50ZXJ2YWwoYXV0b1NsaWRlKTsgYXV0b1NsaWRlID0gc2V0SW50ZXJ2YWwobmV4dFNsaWRlLCBpbnRlcnZhbCk7IH0KICAgICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7IG5leHRTbGlkZSgpOyByZXNldCgpOyB9KTsKICAgICAgICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7IHByZXZTbGlkZSgpOyByZXNldCgpOyB9KTsKICAgIH0KCiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihtdXRhdGlvbnMsIG9icykgewogICAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2MtYmNlNjEyMDItMC5lcXpRc3gnKTsKICAgICAgICBpZiAodGFyZ2V0KSB7IGNyaWFyQ2Fycm9zc2VsKHRhcmdldCk7IG9icy5kaXNjb25uZWN0KCk7IH0KICAgIH0pOwogICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTsKfSkoKTs=';


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
    var css = process(BASE_CSS, v);
    var box = document.getElementById('previewBox');

    // pega as URLs preenchidas
    var urls = ['img1', 'img2', 'img3', 'img4', 'img5']
        .map(function (k) { return v[k] ? v[k].trim() : ''; })
        .filter(function (u) { return u !== ''; });

    if (!urls.length) {
        box.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:480px;color:#555;font-size:.85rem;font-family:sans-serif;">Adicione ao menos uma URL de imagem para ver o preview</div>';
        return;
    }

    var slides = urls.map(function (u) {
        return '<div class="carousel-item"><img src="' + u + '" alt="Banner" onerror="this.style.background=\'#222\';this.style.minHeight=\'200px\'"></div>';
    }).join('');

    var interval = parseInt(v.intervalo, 10) || 5000;

    var doc = [
        '<!DOCTYPE html><html><head><meta charset="UTF-8">',
        '<style>',
        '*{box-sizing:border-box;margin:0;padding:0;font-family:sans-serif;}',
        'body{background:#0f0f0f;}',
        css,
        '</style></head><body>',
        '<div class="carousel-container">',
        '  <div class="carousel-slide" id="cs">' + slides + '</div>',
        '  <div class="carousel-nav">',
        '    <button class="nav-button prev" id="pb">&#10094;</button>',
        '    <button class="nav-button next" id="nb">&#10095;</button>',
        '  </div>',
        '</div>',
        '<script>',
        '  var idx=0, tot=' + urls.length + ', ms=' + interval + ';',
        '  function go(){ document.getElementById("cs").style.transform="translateX(-"+(idx*100)+"%)" }',
        '  function nxt(){ idx=(idx+1)%tot; go(); }',
        '  function prv(){ idx=(idx-1+tot)%tot; go(); }',
        '  document.getElementById("nb").onclick=function(){ nxt(); clearInterval(t); t=setInterval(nxt,ms); };',
        '  document.getElementById("pb").onclick=function(){ prv(); clearInterval(t); t=setInterval(nxt,ms); };',
        '  var t=setInterval(nxt,ms);',
        '<\/script>',
        '</body></html>'
    ].join('\n');

    // srcdoc é mais confiável que contentDocument.write em qualquer plataforma
    var old = box.querySelector('iframe');
    if (old) old.remove();

    var iframe = document.createElement('iframe');
    iframe.style.cssText = 'width:100%;height:480px;border:none;display:block;border-radius:14px;background:#0f0f0f;';
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