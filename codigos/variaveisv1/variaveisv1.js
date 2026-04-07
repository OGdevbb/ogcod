const COMPONENT = {
  title: 'Variáveis V1',
  description: 'Use o código abaixo para aplicar o estilo neon nas suas opções.',
  tags: ['variáveis', 'css', 'neon', 'javascript', 'grátis'],
  fields: [],
};

const BASE_HTML = `
<div class="og-variaveis-demo">
  <label class="item" for="op1">
    <input type="radio" name="og-item" id="op1">
    Opção 1
  </label>
  <label class="item" for="op2">
    <input type="radio" name="og-item" id="op2">
    Opção 2
  </label>
  <label class="item" for="op3">
    <input type="radio" name="og-item" id="op3">
    Opção 3
  </label>
</div>
`;

const BASE_CSS = `
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  justify-content: center;
  padding: 2rem;
  background: #070816;
  color: #fff;
  font-family: sans-serif;
}

.og-variaveis-demo {
  width: min(680px, 100%);
  display: grid;
  gap: 14px;
}
`;

const BASE_JS = "(function () {\n" +
"    const css = `\n" +
"  /* =========================\n" +
"     CONTAINER\n" +
"  ========================= */\n" +
"  .item, label[class*=\"item\"], div[class*=\"Item\"] {\n" +
"    border: 2px solid #2d2d2d !important;\n" +
"    border-radius: 10px !important;\n" +
"    padding: 16px 20px 16px 60px !important;\n" +
"    cursor: pointer;\n" +
"    position: relative;\n" +
"    background: #1a1a1a !important;\n" +
"    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n" +
"    display: block;\n" +
"    margin-bottom: 12px;\n" +
"    color: #ffffff;\n" +
"    font-family: sans-serif;\n" +
"  }\n\n" +
"  /* =========================\n" +
"     HOVER OG!\n" +
"  ========================= */\n" +
"  .item:hover, label[class*=\"item\"]:hover {\n" +
"    border-color: #8a2eff !important;\n" +
"    box-shadow: 0 0 15px rgba(138, 46, 255, 0.25);\n" +
"    transform: translateX(5px);\n" +
"  }\n\n" +
"  .item input, label input[type=\"radio\"] {\n" +
"    display: none !important;\n" +
"  }\n\n" +
"  /* =========================\n" +
"     🔵 BOLHA NEON BASE\n" +
"  ========================= */\n" +
"  .item::before, label[class*=\"item\"]::before {\n" +
"    content: '';\n" +
"    width: 14px;\n" +
"    height: 14px;\n" +
"    background: #8a2eff;\n" +
"    position: absolute;\n" +
"    left: 20px;\n" +
"    top: 50%;\n" +
"    transform: translateY(-50%);\n" +
"    border-radius: 50%;\n" +
"    transition: all 0.3s ease;\n" +
"    box-shadow:\n" +
"      0 0 6px rgba(138, 46, 255, 0.7),\n" +
"      0 0 12px rgba(138, 46, 255, 0.5);\n" +
"  }\n\n" +
"  /* =========================\n" +
"     AURA EXTERNA (GLOW)\n" +
"  ========================= */\n" +
"  .item::after, label[class*=\"item\"]::after {\n" +
"    content: '';\n" +
"    width: 40px;\n" +
"    height: 40px;\n" +
"    position: absolute;\n" +
"    left: 7px;\n" +
"    top: 50%;\n" +
"    transform: translateY(-50%);\n" +
"    border-radius: 50%;\n" +
"    background: radial-gradient(circle, rgba(138,46,255,0.8) 0%, transparent 70%);\n" +
"    opacity: 0;\n" +
"    transition: 0.3s;\n" +
"    filter: blur(10px);\n" +
"  }\n\n" +
"  /* =========================\n" +
"     SELECIONADO\n" +
"  ========================= */\n" +
"  label[class*=\"item\"]:has(input:checked),\n" +
"  .item:has(input:checked) {\n" +
"    border-color: #8a2eff !important;\n" +
"    background: #252525 !important;\n" +
"  }\n\n" +
"  label[class*=\"item\"]:has(input:checked)::before,\n" +
"  .item:has(input:checked)::before {\n" +
"    background: #a855f7;\n" +
"    box-shadow:\n" +
"      0 0 10px #a855f7,\n" +
"      0 0 20px #a855f7,\n" +
"      0 0 35px #8a2eff,\n" +
"      0 0 60px rgba(138, 46, 255, 0.9);\n" +
"    transform: translateY(-50%) scale(1.25);\n" +
"    animation: ogPulse 1.5s infinite ease-in-out;\n" +
"  }\n\n" +
"  label[class*=\"item\"]:has(input:checked)::after,\n" +
"  .item:has(input:checked)::after {\n" +
"    opacity: 1;\n" +
"  }\n\n" +
"  @keyframes ogPulse {\n" +
"    0% {\n" +
"      box-shadow:\n" +
"        0 0 10px #a855f7,\n" +
"        0 0 20px #8a2eff,\n" +
"        0 0 30px rgba(138, 46, 255, 0.7);\n" +
"    }\n" +
"    50% {\n" +
"      box-shadow:\n" +
"        0 0 20px #c084fc,\n" +
"        0 0 40px #a855f7,\n" +
"        0 0 70px rgba(168, 85, 247, 1);\n" +
"    }\n" +
"    100% {\n" +
"      box-shadow:\n" +
"        0 0 10px #a855f7,\n" +
"        0 0 20px #8a2eff,\n" +
"        0 0 30px rgba(138, 46, 255, 0.7);\n" +
"    }\n" +
"  }\n" +
"  `;\n\n" +
"    const style = document.createElement('style');\n" +
"    style.innerHTML = css;\n" +
"    document.head.appendChild(style);\n" +
"})();";

const STATE = {
  activeTab: 'html',
  selectedCode: 'js',
};

function renderComponentInfo() {
  document.getElementById('bcTitle').textContent = COMPONENT.title;
  document.getElementById('compH1').textContent = COMPONENT.title;
  document.getElementById('compDesc').textContent = COMPONENT.description;
  const tags = document.getElementById('compTags');
  tags.innerHTML = COMPONENT.tags.map((tag) => `<span class="comp-tag">${tag}</span>`).join('');
}

function renderPreview() {
  const previewBox = document.getElementById('previewBox');
  previewBox.innerHTML = `
    <iframe class="preview-frame" sandbox="allow-scripts"></iframe>
  `;

  const iframe = previewBox.querySelector('iframe');
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <style>${BASE_CSS}</style>
      </head>
      <body>${BASE_HTML}</body>
      <script>${BASE_JS}</script>
      </html>
  `);
  doc.close();
}

function openModal() {
  const modal = document.getElementById('modal');
  const codePre = document.getElementById('codePre');
  const htmlCode = BASE_HTML.trim();
  const cssCode = BASE_CSS.trim();
  const jsCode = BASE_JS.trim();

  if (STATE.selectedCode === 'html') codePre.textContent = htmlCode;
  if (STATE.selectedCode === 'css') codePre.textContent = cssCode;
  if (STATE.selectedCode === 'js') codePre.textContent = jsCode;

  modal.classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

function copyCode() {
  const codePre = document.getElementById('codePre');
  navigator.clipboard.writeText(codePre.textContent).then(() => {
    const original = document.getElementById('copyBtn').textContent;
    document.getElementById('copyBtn').textContent = 'Copiado!';
    setTimeout(() => {
      document.getElementById('copyBtn').textContent = original;
    }, 1400);
  });
}

function setupTabs() {
  document.querySelectorAll('.code-tab').forEach((button) => {
    button.addEventListener('click', () => {
      STATE.selectedCode = button.dataset.tab;
      document.querySelectorAll('.code-tab').forEach((tab) => tab.classList.remove('active'));
      button.classList.add('active');
      openModal();
    });
  });
}

function initialize() {
  renderComponentInfo();
  renderPreview();
  setupTabs();

  document.getElementById('genBtn').addEventListener('click', openModal);
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('copyBtn').addEventListener('click', copyCode);
  document.getElementById('modal').addEventListener('click', (event) => {
    if (event.target.id === 'modal') closeModal();
  });
}

initialize();
