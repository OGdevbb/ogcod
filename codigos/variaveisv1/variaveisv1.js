const COMPONENT = {
  title: 'Variáveis V1',
  description: 'Gerador de estilo neon azul com variáveis CSS e efeitos animados. Use o código abaixo para aplicar o design em seus próprios elementos.',
  tags: ['variáveis', 'css', 'neon', 'javascript', 'grátis'],
  fields: [],
};

const BASE_HTML = `
<div class="variaveis-box">
  <div class="variaveis-area">
    <div class="variaveis-item">EXEMPLO</div>
    <div class="variaveis-item">DE</div>
    <div class="variaveis-item">VARIÁVEIS</div>
    <div class="variaveis-item">CSS</div>
    <div class="variaveis-item">NEON</div>
  </div>
</div>
`;

const BASE_CSS = `
:root {
  --b: 2px;
  --g: 1px;
  --s: 13deg;
  --f: 20px;
  --fw: 700;
  --c: 5px;
  --cr: 30px;
  --cr2: 50px;
  --br: 12px;
  --rw: 0.74;
  --h: 72px;
  --s1: 218 90% 65%;
  --s2: 190 92% 75%;
  --s3: 204 82% 74%;
}

* {
  margin: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 3rem;
  text-rendering: optimizeLegibility;
  background: radial-gradient(circle at 50% 0%, rgb(6 9 35 / 0.25), transparent 40%),
              radial-gradient(circle at 20% 20%, rgb(55 119 232 / 0.16), transparent 25%),
              radial-gradient(circle at 80% 25%, rgb(189 108 239 / 0.1), transparent 18%),
              #040613;
}

.variaveis-box {
  width: min(740px, 100%);
  min-height: 500px;
  background: radial-gradient(circle at 50% 0%, rgb(63 166 255 / 0.12), transparent 29%),
              linear-gradient(180deg, rgba(5, 12, 26, 0.84), rgba(7, 13, 30, 0.88));
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
  padding: 2.5rem;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgb(28 107 255 / 0.03), 0 0 40px rgb(46 138 255 / 0.14);
}

.variaveis-area {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.variaveis-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  min-height: var(--h);
  padding: 0 1.5rem;
  border-radius: var(--cr2);
  color: hsla(var(--s1), 1);
  font-size: clamp(1.1rem, 1.85vw, 1.7rem);
  font-weight: var(--fw);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  background: radial-gradient(circle at 50% 30%, rgb(84 200 255 / 0.22), transparent 38%),
              linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
  border: solid 1px rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.variaveis-item::before,
.variaveis-item::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
}

.variaveis-item::before {
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.08) 70%, transparent 100%);
  animation: shine 2.8s linear infinite;
}

.variaveis-item::after {
  inset: 1px;
  background: linear-gradient(0deg, rgba(255,255,255,0.08), transparent 18%);
}

.variaveis-item span {
  position: relative;
  z-index: 1;
}

@keyframes shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@media (max-width: 720px) {
  .variaveis-area {
    gap: 1rem;
  }

  .variaveis-item {
    min-width: 136px;
    padding: 0 1rem;
  }
}
`;

const BASE_JS = `(function () {
  const css = \`
:root {
  --b: 2px;
  --g: 1px;
  --s: 13deg;
  --f: 20px;
  --fw: 700;
  --c: 5px;
  --cr: 30px;
  --cr2: 50px;
  --br: 12px;
  --rw: 0.74;
  --h: 72px;
  --s1: 218 90% 65%;
  --s2: 190 92% 75%;
  --s3: 204 82% 74%;
}

* {
  margin: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 3rem;
  text-rendering: optimizeLegibility;
  background: radial-gradient(circle at 50% 0%, rgb(6 9 35 / 0.25), transparent 40%),
              radial-gradient(circle at 20% 20%, rgb(55 119 232 / 0.16), transparent 25%),
              radial-gradient(circle at 80% 25%, rgb(189 108 239 / 0.1), transparent 18%),
              #040613;
}

.variaveis-box {
  width: min(740px, 100%);
  min-height: 500px;
  background: radial-gradient(circle at 50% 0%, rgb(63 166 255 / 0.12), transparent 29%),
              linear-gradient(180deg, rgba(5, 12, 26, 0.84), rgba(7, 13, 30, 0.88));
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
  padding: 2.5rem;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgb(28 107 255 / 0.03), 0 0 40px rgb(46 138 255 / 0.14);
}

.variaveis-area {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.variaveis-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  min-height: var(--h);
  padding: 0 1.5rem;
  border-radius: var(--cr2);
  color: hsla(var(--s1), 1);
  font-size: clamp(1.1rem, 1.85vw, 1.7rem);
  font-weight: var(--fw);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  background: radial-gradient(circle at 50% 30%, rgb(84 200 255 / 0.22), transparent 38%),
              linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
  border: solid 1px rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.variaveis-item::before,
.variaveis-item::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
}

.variaveis-item::before {
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.08) 70%, transparent 100%);
  animation: shine 2.8s linear infinite;
}

.variaveis-item::after {
  inset: 1px;
  background: linear-gradient(0deg, rgba(255,255,255,0.08), transparent 18%);
}

@keyframes shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@media (max-width: 720px) {
  .variaveis-area {
    gap: 1rem;
  }

  .variaveis-item {
    min-width: 136px;
    padding: 0 1rem;
  }
}
  \`;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();`;

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
  const htmlCode = `<div class="variaveis-box">${BASE_HTML.trim()}\n</div>`;
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
