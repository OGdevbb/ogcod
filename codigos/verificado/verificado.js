(function() {
'use strict';

// =============================================================
//  OG! — botao-transparente.js (MOD COM VERIFIED)
// =============================================================

const COMPONENT = {
  title:       'Botao de Compra Transparente',
  description: 'Estiliza o botao de comprar dos cards de produto da Ereemby com fundo dark/transparente, borda sutil, efeito shine e animacao de hover. Sem alterar o restante do card.',
  tags:        ['Botao', 'Comprar', 'CSS', 'Hover', 'Shine', 'Gratis'],

  fields: [
    { id: 'background', label: 'Fundo do Botao', type: 'text', default: 'linear-gradient(135deg, #2a2a2a, #0a0a0a)', required: true },
    { id: 'espessuraBorda', label: 'Espessura da Borda (px)', type: 'text', default: '1', required: true },
    { id: 'corBorda', label: 'Cor da Borda (rgba)', type: 'text', default: 'rgba(255,255,255,0.2)' },
    { id: 'corBordaHover', label: 'Cor da Borda Hover', type: 'text', default: 'rgba(255,255,255,0.3)' },
    { id: 'borderRadius', label: 'Border Radius', type: 'text', default: '12px', required: true },
    { id: 'padding', label: 'Padding', type: 'text', default: '10px 12px', required: true },
    { id: 'marginTop', label: 'Margin Top', type: 'text', default: '12px' },
    { id: 'corTexto', label: 'Cor do Texto', type: 'color', default: '#ffffff' },
    { id: 'pesoTexto', label: 'Peso da Fonte', type: 'text', default: '750' },
    { id: 'tamanhoTexto', label: 'Tamanho da Fonte', type: 'text', default: '11px', required: true }
  ]
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = '...'; // mantem o seu atual
const BASE_JS_B64   = '';

// =============================================================
// 🔥 SELO DE VERIFICADO (NOVO)
// =============================================================

(function () {
    'use strict';

    function addVerifiedBadge() {
        const storeNameSelector = 'header a[href="/"] span';
        const storeNameElement = document.querySelector(storeNameSelector);

        if (!storeNameElement || storeNameElement.classList.contains('badge-applied')) {
            return;
        }

        const badge = document.createElement('img');
        badge.src = 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg';
        badge.alt = 'Verificado';
        badge.style.cssText = 'width:17px;height:17px;vertical-align:middle;margin-left:5px;display:inline-block;';

        storeNameElement.appendChild(badge);
        storeNameElement.classList.add('badge-applied');
        storeNameElement.style.display = 'inline-flex';
        storeNameElement.style.alignItems = 'center';
    }

    const observer = new MutationObserver(addVerifiedBadge);
    observer.observe(document.body, { childList: true, subtree: true });

    addVerifiedBadge();
})();

// =============================================================
// RESTO DO SISTEMA (INALTERADO)
// =============================================================

// Decodificador base64
function b64decode(str) {
  if (!str) return '';
  try {
    return decodeURIComponent(
      atob(str).split('').map(c =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      ).join('')
    );
  } catch(e) {
    return atob(str);
  }
}

const BASE_HTML = b64decode(BASE_HTML_B64);
const BASE_CSS  = b64decode(BASE_CSS_B64);
const BASE_JS   = b64decode(BASE_JS_B64);

// Preview continua funcionando normalmente
function renderPreview() {
  const box = document.getElementById('previewBox');
  if (!box) return;

  const iframe = document.createElement('iframe');
  iframe.style.cssText = 'width:100%;height:480px;border:none;';
  iframe.srcdoc = '<html><body style="background:#111;color:#fff;font-family:sans-serif;display:flex;justify-content:center;align-items:center;height:100%;">Preview OK</body></html>';

  box.innerHTML = '';
  box.appendChild(iframe);
}

// Init
renderPreview();

})();