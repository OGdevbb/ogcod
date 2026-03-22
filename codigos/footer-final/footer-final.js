// =============================================================
//  OG! — barra-rodape.js
// =============================================================

const COMPONENT = {
    title: 'Barra de Rodapé Mobile',
    description: 'Menu fixo na parte inferior da tela com até 5 botões de navegação e submenu de redes sociais. Ideal para lojas mobile.',
    tags: ['Mobile', 'Menu', 'Navegação', 'Rodapé', 'Redes Sociais', 'JS', 'Grátis'],

    fields: [
        // Visual
        { id: 'alturaMenu', label: 'Altura do Menu', type: 'text', placeholder: 'Ex: 80px', default: '80px', required: true },
        { id: 'corFundo', label: 'Cor de Fundo', type: 'color', default: '#111111' },
        { id: 'corFundoSubmenu', label: 'Cor de Fundo (Submenu)', type: 'color', default: '#222222' },
        { id: 'bordaTopo', label: 'Borda do Topo', type: 'text', placeholder: 'Ex: 1px solid #333', default: '1px solid #333', required: false },
        { id: 'sombra', label: 'Sombra', type: 'text', placeholder: 'Ex: 0 -2px 5px rgba(0,0,0,0.3)', default: '0 -2px 5px rgba(0,0,0,0.3)', required: false },
        { id: 'corIcone', label: 'Cor dos Ícones', type: 'color', default: '#ffffff' },
        { id: 'corTexto', label: 'Cor do Texto', type: 'color', default: '#ffffff' },
        { id: 'corSubtexto', label: 'Cor do Subtexto (aviso)', type: 'color', default: '#cccccc' },
        { id: 'tamanhoTexto', label: 'Tamanho do Texto', type: 'text', placeholder: 'Ex: 10px', default: '10px', required: false },
        { id: 'textoFechar', label: 'Texto de fechar submenu', type: 'text', placeholder: 'Ex: Clique novamente para fechar', default: 'Para fechar o menu clique no botão novamente', required: false },

        // Botões
        { id: 'btn1Nome', label: 'Botão 1 — Nome', type: 'text', placeholder: 'Ex: Início', default: 'Início', required: false },
        { id: 'btn1Img', label: 'Botão 1 — Ícone', type: 'text', placeholder: 'URL da imagem', default: 'https://i.postimg.cc/fWqdSf1c/inicio13-removebg-preview.png', required: false },
        { id: 'btn1Link', label: 'Botão 1 — Link', type: 'text', placeholder: 'https://...', default: 'https://linkdasualoja.com', required: false },

        { id: 'btn2Nome', label: 'Botão 2 — Nome', type: 'text', placeholder: 'Ex: Perfil', default: 'Perfil', required: false },
        { id: 'btn2Img', label: 'Botão 2 — Ícone', type: 'text', placeholder: 'URL da imagem', default: 'https://i.postimg.cc/fb7X3nhy/perfil12.png', required: false },
        { id: 'btn2Link', label: 'Botão 2 — Link', type: 'text', placeholder: 'https://...', default: 'https://linkdasualoja.com', required: false },

        { id: 'btn3Nome', label: 'Botão 3 — Nome', type: 'text', placeholder: 'Ex: Carrinho', default: 'Carrinho', required: false },
        { id: 'btn3Img', label: 'Botão 3 — Ícone', type: 'text', placeholder: 'URL da imagem', default: 'https://i.postimg.cc/gJYh8SYD/carrinho12.png', required: false },
        { id: 'btn3Link', label: 'Botão 3 — Link', type: 'text', placeholder: 'https://...', default: 'https://linkdasualoja.com', required: false },

        { id: 'btn4Nome', label: 'Botão 4 — Nome (abre submenu)', type: 'text', placeholder: 'Ex: Redes Sociais', default: 'Redes Sociais', required: false },
        { id: 'btn4Img', label: 'Botão 4 — Ícone', type: 'text', placeholder: 'URL da imagem', default: 'https://i.postimg.cc/T2n8ptKS/sociais1.png', required: false },
        { id: 'btn4Link', label: 'Botão 4 — Link (ignorado se tiver submenu)', type: 'text', placeholder: '#', default: '#', required: false },

        { id: 'btn5Nome', label: 'Botão 5 — Nome', type: 'text', placeholder: 'Ex: Suporte', default: 'Suporte', required: false },
        { id: 'btn5Img', label: 'Botão 5 — Ícone', type: 'text', placeholder: 'URL da imagem', default: 'https://i.postimg.cc/25Nh8jMg/suporte12.png', required: false },
        { id: 'btn5Link', label: 'Botão 5 — Link', type: 'text', placeholder: 'https://...', default: 'https://linkdasualoja.com', required: false },

        // Redes sociais (submenu)
        { id: 'rs1Nome', label: 'Rede 1 — Nome', type: 'text', placeholder: 'Ex: Instagram', default: 'Instagram', required: false },
        { id: 'rs1Img', label: 'Rede 1 — Ícone', type: 'text', placeholder: 'URL da imagem', default: 'https://i.postimg.cc/W3vJt786/instagram.png', required: false },
        { id: 'rs1Link', label: 'Rede 1 — Link', type: 'text', placeholder: 'https://...', default: 'https://linkdasualoja.com', required: false },

        { id: 'rs2Nome', label: 'Rede 2 — Nome', type: 'text', placeholder: 'Ex: WhatsApp', default: 'WhatsApp', required: false },
        { id: 'rs2Img', label: 'Rede 2 — Ícone', type: 'text', placeholder: 'URL da imagem', default: 'https://i.postimg.cc/J07D549s/whatsapp.png', required: false },
        { id: 'rs2Link', label: 'Rede 2 — Link', type: 'text', placeholder: 'https://...', default: 'https://linkdasualoja.com', required: false },

        { id: 'rs3Nome', label: 'Rede 3 — Nome', type: 'text', placeholder: 'Ex: Telegram', default: 'Telegram', required: false },
        { id: 'rs3Img', label: 'Rede 3 — Ícone', type: 'text', placeholder: 'URL da imagem', default: 'https://i.postimg.cc/90x48HhJ/telegram.png', required: false },
        { id: 'rs3Link', label: 'Rede 3 — Link', type: 'text', placeholder: 'https://...', default: 'https://linkdasualoja.com', required: false },

        { id: 'rs4Nome', label: 'Rede 4 — Nome', type: 'text', placeholder: 'Ex: Discord', default: 'Discord', required: false },
        { id: 'rs4Img', label: 'Rede 4 — Ícone', type: 'text', placeholder: 'URL da imagem', default: 'https://i.postimg.cc/Hx98M7PG/discord.png', required: false },
        { id: 'rs4Link', label: 'Rede 4 — Link', type: 'text', placeholder: 'https://...', default: 'https://linkdasualoja.com', required: false },
    ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64 = '';
const BASE_JS_B64 = 'Ly8gQmFycmEgZGUgUm9kYXDDqSDigJQgZ2VyYWRvIHBvciBPRyEKKCgpID0+IHsKICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29nLWJhcnJhLXJvZGFwZScpKSByZXR1cm47CgogIGNvbnN0IFMgPSAoZWwsIHMpID0+IE9iamVjdC5hc3NpZ24oZWwuc3R5bGUsIHMpOwoKICBjb25zdCBib3RvZXMgPSBbCiAgICAvKiBJRjpidG4xTm9tZSAqL3sgbm9tZTogJ3t7YnRuMU5vbWV9fScsIGltZzogJ3t7YnRuMUltZ319JywgbGluazogJ3t7YnRuMUxpbmt9fScgfSwvKiBFTkRJRiAqLwogICAgLyogSUY6YnRuMk5vbWUgKi97IG5vbWU6ICd7e2J0bjJOb21lfX0nLCBpbWc6ICd7e2J0bjJJbWd9fScsIGxpbms6ICd7e2J0bjJMaW5rfX0nIH0sLyogRU5ESUYgKi8KICAgIC8qIElGOmJ0bjNOb21lICoveyBub21lOiAne3tidG4zTm9tZX19JywgaW1nOiAne3tidG4zSW1nfX0nLCBsaW5rOiAne3tidG4zTGlua319JyB9LC8qIEVORElGICovCiAgICAvKiBJRjpidG40Tm9tZSAqL3sgbm9tZTogJ3t7YnRuNE5vbWV9fScsIGltZzogJ3t7YnRuNEltZ319JywgbGluazogJ3t7YnRuNExpbmt9fScsIHN1Ym1lbnU6IHRydWUgfSwvKiBFTkRJRiAqLwogICAgLyogSUY6YnRuNU5vbWUgKi97IG5vbWU6ICd7e2J0bjVOb21lfX0nLCBpbWc6ICd7e2J0bjVJbWd9fScsIGxpbms6ICd7e2J0bjVMaW5rfX0nIH0sLyogRU5ESUYgKi8KICBdLmZpbHRlcihCb29sZWFuKTsKCiAgY29uc3QgcmVkZXNTb2NpYWlzID0gWwogICAgLyogSUY6cnMxTm9tZSAqL3sgbm9tZTogJ3t7cnMxTm9tZX19JywgaW1nOiAne3tyczFJbWd9fScsIGxpbms6ICd7e3JzMUxpbmt9fScgfSwvKiBFTkRJRiAqLwogICAgLyogSUY6cnMyTm9tZSAqL3sgbm9tZTogJ3t7cnMyTm9tZX19JywgaW1nOiAne3tyczJJbWd9fScsIGxpbms6ICd7e3JzMkxpbmt9fScgfSwvKiBFTkRJRiAqLwogICAgLyogSUY6cnMzTm9tZSAqL3sgbm9tZTogJ3t7cnMzTm9tZX19JywgaW1nOiAne3tyczNJbWd9fScsIGxpbms6ICd7e3JzM0xpbmt9fScgfSwvKiBFTkRJRiAqLwogICAgLyogSUY6cnM0Tm9tZSAqL3sgbm9tZTogJ3t7cnM0Tm9tZX19JywgaW1nOiAne3tyczRJbWd9fScsIGxpbms6ICd7e3JzNExpbmt9fScgfSwvKiBFTkRJRiAqLwogIF0uZmlsdGVyKEJvb2xlYW4pOwoKICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgbWVudS5pZCA9ICdvZy1iYXJyYS1yb2RhcGUnOwogIFMobWVudSwgewogICAgcG9zaXRpb246ICdmaXhlZCcsIGJvdHRvbTogJzAnLCBsZWZ0OiAnMCcsIHdpZHRoOiAnMTAwJScsCiAgICBoZWlnaHQ6ICd7e2FsdHVyYU1lbnV9fScsCiAgICBiYWNrZ3JvdW5kOiAne3tjb3JGdW5kb319JywKICAgIGJvcmRlclRvcDogJ3t7Ym9yZGFUb3BvfX0nLAogICAgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLAogICAgekluZGV4OiAnOTk5OScsCiAgICBib3hTaGFkb3c6ICd7e3NvbWJyYX19JwogIH0pOwoKICBjb25zdCBzdWJtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgc3VibWVudS5pZCA9ICdvZy1iYXJyYS1zdWJtZW51JzsKICBTKHN1Ym1lbnUsIHsKICAgIHBvc2l0aW9uOiAnZml4ZWQnLCBib3R0b206ICd7e2FsdHVyYU1lbnV9fScsIGxlZnQ6ICcwJywgd2lkdGg6ICcxMDAlJywKICAgIGJhY2tncm91bmQ6ICd7e2NvckZ1bmRvU3VibWVudX19JywKICAgIGJveFNoYWRvdzogJzAgLTJweCA1cHggcmdiYSgwLDAsMCwwLjQpJywKICAgIHBhZGRpbmc6ICcxMHB4IDAnLCBkaXNwbGF5OiAnbm9uZScsCiAgICBmbGV4V3JhcDogJ3dyYXAnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGdhcDogJzE1cHgnLCB6SW5kZXg6ICcxMDAwMCcKICB9KTsKCiAgZm9yIChjb25zdCByZWRlIG9mIHJlZGVzU29jaWFpcykgewogICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTsKICAgIGEuaHJlZiA9IHJlZGUubGluazsgYS50YXJnZXQgPSAnX2JsYW5rJzsKICAgIFMoYSwgeyBkaXNwbGF5OidmbGV4JywgZmxleERpcmVjdGlvbjonY29sdW1uJywgYWxpZ25JdGVtczonY2VudGVyJywgdGV4dERlY29yYXRpb246J25vbmUnLAogICAgICAgICAgIGNvbG9yOid7e2NvclRleHRvfX0nLCB3aWR0aDonNjBweCcsIGZvbnRTaXplOid7e3RhbWFuaG9UZXh0b319JywgZm9udEZhbWlseTonaW5oZXJpdCcgfSk7CiAgICBjb25zdCBpY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICAgIFMoaWNvLCB7IHdpZHRoOiczMHB4JywgaGVpZ2h0OiczMHB4JywgbWFyZ2luQm90dG9tOic1cHgnLAogICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOid7e2Nvckljb25lfX0nLAogICAgICAgICAgICAgV2Via2l0TWFza0ltYWdlOid1cmwoJytyZWRlLmltZysnKScsIFdlYmtpdE1hc2tTaXplOidjb250YWluJywKICAgICAgICAgICAgIFdlYmtpdE1hc2tSZXBlYXQ6J25vLXJlcGVhdCcsIFdlYmtpdE1hc2tQb3NpdGlvbjonY2VudGVyJywKICAgICAgICAgICAgIG1hc2tJbWFnZTondXJsKCcrcmVkZS5pbWcrJyknLCBtYXNrU2l6ZTonY29udGFpbicsCiAgICAgICAgICAgICBtYXNrUmVwZWF0Oiduby1yZXBlYXQnLCBtYXNrUG9zaXRpb246J2NlbnRlcicgfSk7CiAgICBjb25zdCBsYmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICAgIGxibC50ZXh0Q29udGVudCA9IHJlZGUubm9tZTsgbGJsLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInOwogICAgYS5hcHBlbmQoaWNvLCBsYmwpOwogICAgc3VibWVudS5hcHBlbmRDaGlsZChhKTsKICB9CgogIGNvbnN0IGF2aXNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgYXZpc28udGV4dENvbnRlbnQgPSAne3t0ZXh0b0ZlY2hhcn19JzsKICBTKGF2aXNvLCB7IHdpZHRoOicxMDAlJywgdGV4dEFsaWduOidjZW50ZXInLCBtYXJnaW5Ub3A6JzEwcHgnLAogICAgICAgICAgICAgZm9udFNpemU6JzExcHgnLCBjb2xvcjone3tjb3JTdWJ0ZXh0b319JywgZm9udEZhbWlseTonaW5oZXJpdCcgfSk7CiAgc3VibWVudS5hcHBlbmRDaGlsZChhdmlzbyk7CiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdWJtZW51KTsKCiAgZm9yIChjb25zdCBib3RhbyBvZiBib3RvZXMpIHsKICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7CiAgICBhLmhyZWYgPSBib3Rhby5zdWJtZW51ID8gJyMnIDogYm90YW8ubGluazsKICAgIGEudGl0bGUgPSBib3Rhby5ub21lOwogICAgUyhhLCB7IHRleHREZWNvcmF0aW9uOidub25lJywgY29sb3I6J3t7Y29yVGV4dG99fScsIGRpc3BsYXk6J2ZsZXgnLAogICAgICAgICAgIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsIGFsaWduSXRlbXM6J2NlbnRlcicsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLAogICAgICAgICAgIGZvbnRTaXplOid7e3RhbWFuaG9UZXh0b319JywgZm9udEZhbWlseTonaW5oZXJpdCcsCiAgICAgICAgICAgd2lkdGg6JzYwcHgnLCBoZWlnaHQ6JzYwcHgnLCBnYXA6JzRweCcsIHVzZXJTZWxlY3Q6J25vbmUnIH0pOwogICAgY29uc3QgaWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgICBTKGljbywgeyB3aWR0aDonMjhweCcsIGhlaWdodDonMjhweCcsCiAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J3t7Y29ySWNvbmV9fScsCiAgICAgICAgICAgICBXZWJraXRNYXNrSW1hZ2U6J3VybCgnK2JvdGFvLmltZysnKScsIFdlYmtpdE1hc2tTaXplOidjb250YWluJywKICAgICAgICAgICAgIFdlYmtpdE1hc2tSZXBlYXQ6J25vLXJlcGVhdCcsIFdlYmtpdE1hc2tQb3NpdGlvbjonY2VudGVyJywKICAgICAgICAgICAgIG1hc2tJbWFnZTondXJsKCcrYm90YW8uaW1nKycpJywgbWFza1NpemU6J2NvbnRhaW4nLAogICAgICAgICAgICAgbWFza1JlcGVhdDonbm8tcmVwZWF0JywgbWFza1Bvc2l0aW9uOidjZW50ZXInIH0pOwogICAgY29uc3QgbGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgICBsYmwudGV4dENvbnRlbnQgPSBib3Rhby5ub21lOwogICAgUyhsYmwsIHsgbGluZUhlaWdodDonMScsIHdoaXRlU3BhY2U6J25vd3JhcCcsIHRleHRBbGlnbjonY2VudGVyJyB9KTsKICAgIGEuYXBwZW5kKGljbywgbGJsKTsKICAgIG1lbnUuYXBwZW5kQ2hpbGQoYSk7CgogICAgaWYgKGJvdGFvLnN1Ym1lbnUpIHsKICAgICAgYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gewogICAgICAgIGUucHJldmVudERlZmF1bHQoKTsKICAgICAgICBzdWJtZW51LnN0eWxlLmRpc3BsYXkgPSBzdWJtZW51LnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4JyA/ICdub25lJyA6ICdmbGV4JzsKICAgICAgfSk7CiAgICB9CiAgfQoKICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnUpOwp9KSgpOw==';

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

    var altura = v.alturaMenu || '80px';
    var corFundo = v.corFundo || '#111111';
    var corFundoS = v.corFundoSubmenu || '#222222';
    var corIcone = v.corIcone || '#ffffff';
    var corTexto = v.corTexto || '#ffffff';
    var corSub = v.corSubtexto || '#cccccc';
    var txtFecha = v.textoFechar || 'Para fechar clique novamente';
    var tamTxt = v.tamanhoTexto || '10px';
    var borda = v.bordaTopo || '1px solid #333';
    var sombra = v.sombra || '0 -2px 5px rgba(0,0,0,0.3)';

    var botoes = [];
    for (var i = 1; i <= 5; i++) {
        var n = v['btn' + i + 'Nome'];
        var im = v['btn' + i + 'Img'] || '';
        if (n) botoes.push({ nome: n, img: im, sub: i === 4 });
    }
    var redes = [];
    for (var j = 1; j <= 4; j++) {
        var rn = v['rs' + j + 'Nome'];
        var ri = v['rs' + j + 'Img'] || '';
        if (rn) redes.push({ nome: rn, img: ri });
    }

    function mkMask(img, sz) {
        return 'background:' + corIcone + ';width:' + sz + ';height:' + sz + ';'
            + '-webkit-mask-image:url(' + img + ');-webkit-mask-size:contain;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;'
            + 'mask-image:url(' + img + ');mask-size:contain;mask-repeat:no-repeat;mask-position:center;';
    }

    var botoesHTML = '';
    botoes.forEach(function (b) {
        botoesHTML +=
            '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:60px;height:60px;gap:4px;">'
            + '<div style="' + mkMask(b.img, '28px') + '"></div>'
            + '<div style="font-size:' + tamTxt + ';color:' + corTexto + ';white-space:nowrap;line-height:1;">' + b.nome + (b.sub ? ' ▲' : '') + '</div>'
            + '</div>';
    });

    var redesHTML = '';
    redes.forEach(function (r) {
        redesHTML +=
            '<div style="display:flex;flex-direction:column;align-items:center;width:60px;gap:4px;">'
            + '<div style="' + mkMask(r.img, '30px') + 'margin-bottom:5px;"></div>'
            + '<div style="font-size:' + tamTxt + ';color:' + corTexto + ';text-align:center;">' + r.nome + '</div>'
            + '</div>';
    });

    var submenuBlock = '';
    if (redes.length) {
        submenuBlock =
            '<div style="position:absolute;bottom:' + altura + ';left:0;width:100%;background:' + corFundoS + ';padding:10px 0;display:flex;flex-wrap:wrap;justify-content:center;gap:15px;">'
            + redesHTML
            + '<div style="width:100%;text-align:center;margin-top:8px;font-size:11px;color:' + corSub + ';padding:0 12px;">' + txtFecha + '</div>'
            + '</div>';
    }

    var doc =
        '<!DOCTYPE html><html><head><meta charset="UTF-8">'
        + '<style>*{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,sans-serif;}'
        + 'body{background:#0a0a0a;height:300px;position:relative;overflow:hidden;}</style>'
        + '</head><body>'
        + submenuBlock
        + '<div style="position:absolute;bottom:0;left:0;width:100%;height:' + altura + ';'
        + 'background:' + corFundo + ';border-top:' + borda + ';box-shadow:' + sombra + ';'
        + 'display:flex;justify-content:space-around;align-items:center;">'
        + botoesHTML
        + '</div></body></html>';

    var old = box.querySelector('iframe');
    if (old) old.remove();
    var iframe = document.createElement('iframe');
    iframe.style.cssText = 'width:100%;height:300px;border:none;display:block;border-radius:14px;';
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