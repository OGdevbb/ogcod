// =============================================================
//  OG! — selo-seguranca.js
// =============================================================

const COMPONENT = {
    title: 'Selos de Seguranca',
    description: 'Dois selos em um: logos de confianca (Google, Reclame Aqui) acima do carrinho + selo de Pagamento Seguro com escudo abaixo do botao de compra.',
    tags: ['Selo', 'Seguranca', 'Reclame Aqui', 'Google', 'Pagamento', 'JS', 'Gratis'],

    fields: [
        // ── SELO DE SEGURANCA (logos) ──
        { id: 'tituloSelo', label: 'Titulo da secao', type: 'text', placeholder: 'Ex: Seguranca', default: 'Seguranca', required: true },
        { id: 'marginTopo', label: 'Margem do topo', type: 'text', placeholder: 'Ex: 20px', default: '20px', required: true },
        { id: 'corDivisor', label: 'Cor da linha divisoria (rgba)', type: 'text', placeholder: 'Ex: rgba(255,255,255,0.1)', default: 'rgba(255,255,255,0.1)', required: false },
        { id: 'corTitulo', label: 'Cor do titulo', type: 'color', default: '#ffffff' },

        // Imagens (ate 3)
        { id: 'img1Url', label: 'Logo 1 — URL', type: 'text', placeholder: 'https://...', default: 'https://i.imgur.com/bTESG6D.png', required: true },
        { id: 'img1Alt', label: 'Logo 1 — Alt', type: 'text', placeholder: 'Ex: Google', default: 'Google', required: false },
        { id: 'img1Altura', label: 'Logo 1 — Altura', type: 'text', placeholder: 'Ex: 24px', default: '24px', required: false },
        { id: 'img2Url', label: 'Logo 2 — URL', type: 'text', placeholder: 'https://...', default: 'https://storage.googleapis.com/reclameaqui-assets/images/logo.svg', required: false },
        { id: 'img2Alt', label: 'Logo 2 — Alt', type: 'text', placeholder: 'Ex: Reclame Aqui', default: 'Reclame Aqui', required: false },
        { id: 'img2Altura', label: 'Logo 2 — Altura', type: 'text', placeholder: 'Ex: 22px', default: '22px', required: false },
        { id: 'img3Url', label: 'Logo 3 — URL (opcional)', type: 'text', placeholder: 'https://...', default: '', required: false },
        { id: 'img3Alt', label: 'Logo 3 — Alt', type: 'text', placeholder: 'Ex: SSL', default: '', required: false },
        { id: 'img3Altura', label: 'Logo 3 — Altura', type: 'text', placeholder: 'Ex: 22px', default: '22px', required: false },

        // Seletores de insercao
        { id: 'seletorContainer', label: 'Seletor CSS — Container principal', type: 'text', placeholder: 'Ex: .sc-8a04aca7-1.efAIq', default: '.sc-8a04aca7-1.efAIq', required: true },
        { id: 'seletorUltimaSecao', label: 'Seletor CSS — Ultima secao (ancora)', type: 'text', placeholder: 'Ex: .sc-8a04aca7-11.ePijUg', default: '.sc-8a04aca7-11.ePijUg', required: false },

        // ── SELO PAGAMENTO SEGURO (escudo) ──
        { id: 'textoSelo', label: 'Texto do selo de pagamento', type: 'text', placeholder: 'Ex: Pagamento 100% Seguro', default: 'Pagamento 100% Seguro', required: true },
        { id: 'espacamentoBotao', label: 'Espaco acima do selo', type: 'text', placeholder: 'Ex: 12px', default: '12px', required: true },
        { id: 'tamanhoSeloTexto', label: 'Tamanho do texto do selo', type: 'text', placeholder: 'Ex: 13px', default: '13px', required: true },
        { id: 'corSelo', label: 'Cor do selo (icone + texto)', type: 'color', default: '#ffffff' },
        { id: 'seletorBotao', label: 'Seletor CSS — Botao de compra', type: 'text', placeholder: 'Ex: .sc-ee539403-19.NjEzN', default: '.sc-ee539403-19.NjEzN', required: true },
    ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64 = '';
const BASE_JS_B64 = 'KGZ1bmN0aW9uKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgLy8g4pSA4pSAIFNFTE8gREUgU0VHVVJBTsOHQSAobG9nb3MgYWNpbWEgZG8gY2FycmluaG8pIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgAogIGZ1bmN0aW9uIG9nQWRkU2VjdXJpdHlTZWN0aW9uKCkgewogICAgdmFyIGV4aXN0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9nLXNlY3VyaXR5LXNlY3Rpb24nKTsKICAgIGlmIChleGlzdGluZykgZXhpc3RpbmcucmVtb3ZlKCk7CgogICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3t7c2VsZXRvckNvbnRhaW5lcn19Jyk7CiAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuIGZhbHNlOwoKICAgIHZhciBzZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICAgIHNlYy5jbGFzc05hbWUgPSAnb2ctc2VjdXJpdHktc2VjdGlvbic7CiAgICBzZWMuc3R5bGUuY3NzVGV4dCA9CiAgICAgICdtYXJnaW46e3ttYXJnaW5Ub3BvfX0gYXV0byAwIGF1dG87JyArCiAgICAgICdwYWRkaW5nLXRvcDp7e21hcmdpblRvcG99fTsnICsKICAgICAgJ2JvcmRlci10b3A6MXB4IHNvbGlkIHt7Y29yRGl2aXNvcn19OycgKwogICAgICAndGV4dC1hbGlnbjpjZW50ZXI7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7JzsKCiAgICB2YXIgdGl0dWxvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTsKICAgIHRpdHVsby50ZXh0Q29udGVudCA9ICd7e3RpdHVsb1NlbG99fSc7CiAgICB0aXR1bG8uc3R5bGUuY3NzVGV4dCA9CiAgICAgICdmb250LXdlaWdodDo1MDA7Zm9udC1zaXplOjEzcHg7bGluZS1oZWlnaHQ6MTRweDsnICsKICAgICAgJ3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTttYXJnaW46MCAwIDEycHg7Y29sb3I6e3tjb3JUaXR1bG99fTsnOwoKICAgIHZhciBpbWdXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgICBpbWdXcmFwLnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTpmbGV4O2dhcDoxNnB4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZsZXgtd3JhcDp3cmFwOyc7CgogICAgdmFyIGltZ3MgPSBbCiAgICAgIC8qIElGOmltZzFVcmwgKi97IHNyYzogJ3t7aW1nMVVybH19JywgYWx0OiAne3tpbWcxQWx0fX0nLCBoOiAne3tpbWcxQWx0dXJhfX0nIH0sLyogRU5ESUYgKi8KICAgICAgLyogSUY6aW1nMlVybCAqL3sgc3JjOiAne3tpbWcyVXJsfX0nLCBhbHQ6ICd7e2ltZzJBbHR9fScsIGg6ICd7e2ltZzJBbHR1cmF9fScgfSwvKiBFTkRJRiAqLwogICAgICAvKiBJRjppbWczVXJsICoveyBzcmM6ICd7e2ltZzNVcmx9fScsIGFsdDogJ3t7aW1nM0FsdH19JywgaDogJ3t7aW1nM0FsdHVyYX19JyB9LC8qIEVORElGICovCiAgICBdLmZpbHRlcihCb29sZWFuKTsKCiAgICBpbWdzLmZvckVhY2goZnVuY3Rpb24oZCkgewogICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7CiAgICAgIGltZy5zcmMgPSBkLnNyYzsgaW1nLmFsdCA9IGQuYWx0OyBpbWcubG9hZGluZyA9ICdsYXp5JzsKICAgICAgaW1nLnN0eWxlLmNzc1RleHQgPSAnaGVpZ2h0OicgKyBkLmggKyAnO29iamVjdC1maXQ6Y29udGFpbjtvcGFjaXR5OjAuOTt0cmFuc2l0aW9uOm9wYWNpdHkgLjJzOyc7CiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXsgaW1nLnN0eWxlLm9wYWNpdHkgPSAnMSc7IH0pOwogICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7IGltZy5zdHlsZS5vcGFjaXR5ID0gJzAuOSc7IH0pOwogICAgICBpbWdXcmFwLmFwcGVuZENoaWxkKGltZyk7CiAgICB9KTsKCiAgICBzZWMuYXBwZW5kQ2hpbGQodGl0dWxvKTsKICAgIHNlYy5hcHBlbmRDaGlsZChpbWdXcmFwKTsKCiAgICB2YXIgbGFzdFNlYyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCd7e3NlbGV0b3JVbHRpbWFTZWNhb319Jyk7CiAgICBpZiAobGFzdFNlYykgeyBjb250YWluZXIuaW5zZXJ0QmVmb3JlKHNlYywgbGFzdFNlYyk7IH0KICAgIGVsc2UgeyBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjKTsgfQogICAgcmV0dXJuIHRydWU7CiAgfQoKICAvLyDilIDilIAgU0VMTyBQQUdBTUVOVE8gU0VHVVJPIChhYmFpeG8gZG8gYm90w6NvKSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAKICBmdW5jdGlvbiBvZ0FkaWNpb25hclNlbG8oKSB7CiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9nLXNlbG8tcGFnYW1lbnRvJykpIHJldHVybiB0cnVlOwoKICAgIHZhciBidG5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd7e3NlbGV0b3JCb3Rhb319Jyk7CiAgICBpZiAoIWJ0bkNvbnRhaW5lcikgcmV0dXJuIGZhbHNlOwoKICAgIHZhciBzZWxvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgICBzZWxvLmNsYXNzTmFtZSA9ICdvZy1zZWxvLXBhZ2FtZW50byc7CiAgICBzZWxvLnN0eWxlLmNzc1RleHQgPQogICAgICAnZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2dhcDo2cHg7JyArCiAgICAgICdtYXJnaW4tdG9wOnt7ZXNwYWNhbWVudG9Cb3Rhb319O2NvbG9yOnt7Y29yU2Vsb319O2ZvbnQtc2l6ZTp7e3RhbWFuaG9TZWxvVGV4dG99fTsnOwoKICAgIHZhciBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpOwogICAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsJzAgMCAyNCAyNCcpOyBzdmcuc2V0QXR0cmlidXRlKCdmaWxsJywnbm9uZScpOwogICAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCcyMCcpOyBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCcyMCcpOwogICAgc3ZnLnN0eWxlLmZsZXhTaHJpbmsgPSAnMCc7CiAgICBzdmcuaW5uZXJIVE1MID0KICAgICAgJzxwYXRoIGQ9Ik0xMiAxTDMgNVYxMUMzIDE2LjU1IDYuODQgMjEuNzQgMTIgMjNDMTcuMTYgMjEuNzQgMjEgMTYuNTUgMjEgMTFWNUwxMiAxWiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPicgKwogICAgICAnPHBhdGggZD0iTTkgMTJMMTEgMTRMMTYgOSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+JzsKCiAgICB2YXIgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpOwogICAgdHh0LnRleHRDb250ZW50ID0gJ3t7dGV4dG9TZWxvfX0nOwoKICAgIHNlbG8uYXBwZW5kQ2hpbGQoc3ZnKTsKICAgIHNlbG8uYXBwZW5kQ2hpbGQodHh0KTsKICAgIGJ0bkNvbnRhaW5lci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxvLCBidG5Db250YWluZXIubmV4dFNpYmxpbmcpOwogICAgcmV0dXJuIHRydWU7CiAgfQoKICBmdW5jdGlvbiBvZ0luaWNpYXJTZWxvKCkgewogICAgaWYgKG9nQWRpY2lvbmFyU2VsbygpKSByZXR1cm47CiAgICB2YXIgdCA9IDA7CiAgICB2YXIgaXYgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHsKICAgICAgaWYgKG9nQWRpY2lvbmFyU2VsbygpIHx8ICsrdCA+PSAxNSkgY2xlYXJJbnRlcnZhbChpdik7CiAgICB9LCA0MDApOwogIH0KCiAgZnVuY3Rpb24gb2dJbml0KCkgewogICAgb2dBZGRTZWN1cml0eVNlY3Rpb24oKTsKICAgIG9nSW5pY2lhclNlbG8oKTsKICB9CgogIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHsKICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBvZ0luaXQpOwogIH0gZWxzZSB7CiAgICBvZ0luaXQoKTsKICB9CgogIHZhciBvZ1VybCA9IGxvY2F0aW9uLmhyZWY7CiAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oKSB7CiAgICBpZiAobG9jYXRpb24uaHJlZiAhPT0gb2dVcmwpIHsKICAgICAgb2dVcmwgPSBsb2NhdGlvbi5ocmVmOwogICAgICBzZXRUaW1lb3V0KG9nSW5pdCwgMjAwKTsKICAgIH0KICB9KS5vYnNlcnZlKGRvY3VtZW50LCB7IHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSB9KTsKfSkoKTs=';

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

    var corDiv = v.corDivisor || 'rgba(255,255,255,0.1)';
    var corTit = v.corTitulo || '#ffffff';
    var titulo = v.tituloSelo || 'Seguranca';
    var margin = v.marginTopo || '20px';
    var img1Url = v.img1Url || 'https://i.imgur.com/bTESG6D.png';
    var img1Alt = v.img1Alt || 'Google';
    var img1H = v.img1Altura || '24px';
    var img2Url = v.img2Url || 'https://storage.googleapis.com/reclameaqui-assets/images/logo.svg';
    var img2Alt = v.img2Alt || 'Reclame Aqui';
    var img2H = v.img2Altura || '22px';
    var img3Url = v.img3Url || '';
    var img3H = v.img3Altura || '22px';
    var img3Alt = v.img3Alt || '';
    var textoSelo = v.textoSelo || 'Pagamento 100% Seguro';
    var corSelo = v.corSelo || '#ffffff';
    var tamSelo = v.tamanhoSeloTexto || '13px';

    var imgsHTML = '';
    var imgs = [[img1Url, img1Alt, img1H], [img2Url, img2Alt, img2H], [img3Url, img3Alt, img3H]];
    imgs.forEach(function (i) {
        if (i[0]) imgsHTML += '<img src="' + i[0] + '" alt="' + i[1] + '" style="height:' + i[2] + ';object-fit:contain;opacity:0.9;">';
    });

    var doc =
        '<!DOCTYPE html><html><head><meta charset="UTF-8">'
        + '<style>*{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,sans-serif;} body{background:#1a1a1a;padding:32px;min-height:480px;display:flex;flex-direction:column;gap:32px;justify-content:center;}</style>'
        + '</head><body>'
        // Secao 1: logos de seguranca
        + '<div>'
        + '<div style="font-size:.65rem;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px;">Bloco 1 — Logos de confianca (acima do carrinho)</div>'
        + '<div style="padding:' + margin + ' 0;border-top:1px solid ' + corDiv + ';text-align:center;display:flex;flex-direction:column;align-items:center;gap:12px;">'
        + '<h3 style="font-weight:500;font-size:13px;text-transform:uppercase;color:' + corTit + ';">' + titulo + '</h3>'
        + '<div style="display:flex;gap:16px;align-items:center;justify-content:center;flex-wrap:wrap;">' + imgsHTML + '</div>'
        + '</div>'
        + '</div>'
        // Secao 2: selo pagamento seguro
        + '<div>'
        + '<div style="font-size:.65rem;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px;">Bloco 2 — Selo abaixo do botao de compra</div>'
        + '<div style="background:#222;border-radius:10px;padding:16px 20px;display:flex;flex-direction:column;gap:12px;">'
        + '<div style="background:#2a2a2a;border-radius:8px;padding:10px;color:#aaa;font-size:.8rem;text-align:center;">[ Botao de Compra ]</div>'
        + '<div style="display:flex;align-items:center;justify-content:center;gap:6px;color:' + corSelo + ';font-size:' + tamSelo + ';">'
        + '<svg viewBox="0 0 24 24" fill="none" width="18" height="18" style="flex-shrink:0;">'
        + '<path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'
        + '<path d="M9 12L11 14L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
        + '</svg>'
        + '<span>' + textoSelo + '</span>'
        + '</div>'
        + '</div>'
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