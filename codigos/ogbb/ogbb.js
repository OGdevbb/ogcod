/* ogbb.js */
const COMPONENT = {
  title: "OGBB",
  description: "Componente de código OGBB para gerar visual e copiar HTML/CSS/JS.",
  tags: ["Grátis", "HTML", "CSS", "JS"],
  fields: []
};

const previewBox = document.getElementById("previewBox");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const genBtn = document.getElementById("genBtn");
const codePre = document.getElementById("codePre");
const copyBtn = document.getElementById("copyBtn");

function renderPreview() {
  previewBox.innerHTML = `
    <div style="padding:32px;background:#121212;border-radius:20px;min-height:420px;display:grid;place-items:center;">
      <div style="text-align:center;max-width:420px;">
        <div style="font-size:1rem;font-weight:700;color:#7c6bff;margin-bottom:12px;letter-spacing:.18em;text-transform:uppercase;">OGBB</div>
        <h2 style="font-size:2rem;margin:0 0 12px;color:#fff;">Página de Componentes OGBB</h2>
        <p style="color:#a0a0a0;line-height:1.8;">Use este espaço para exibir seu componente, ajustar as configurações e copiar o código gerado.</p>
      </div>
    </div>
  `;
}

function openModal(code) {
  modal.classList.add("open");
  codePre.textContent = code;
}

function closeModal() {
  modal.classList.remove("open");
}

function generateCode() {
  const html = `<!-- OGBB HTML -->\n<div class="ogbb-card">\n  <h2>OGBB</h2>\n  <p>Componente criado no meu-site-codigos.</p>\n</div>`;
  const css = `/* OGBB CSS */\n.ogbb-card {\n  padding: 24px;\n  border-radius: 22px;\n  background: linear-gradient(180deg, rgba(124,107,255,.18), rgba(7,7,7,.9));\n  border: 1px solid rgba(255,255,255,.08);\n  color: #fff;\n}`;
  const js = `// OGBB JS\nconsole.log('OGBB carregado');`;

  openModal(`${html}\n\n${css}\n\n${js}`);
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});

genBtn.addEventListener("click", generateCode);
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(codePre.textContent);
  copyBtn.textContent = "Copiado";
  setTimeout(() => (copyBtn.textContent = "Copiar"), 1500);
});

renderPreview();
