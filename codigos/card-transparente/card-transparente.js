(function () {
  "use strict";

  // =========================
  // CONFIG DO COMPONENTE
  // =========================
  const COMPONENT = {
    name: "Card Transparente (Glass)",
    description: "Card com efeito vidro claro (glassmorphism suave).",
    tags: ["glass", "card", "transparente", "ui"],
    fields: [
      { type: "range", name: "blur", label: "Blur", min: 0, max: 30, step: 1, value: 12 },
      { type: "range", name: "borda", label: "Opacidade da borda", min: 0, max: 1, step: 0.05, value: 0.25 },
      { type: "range", name: "bg1", label: "Intensidade fundo 1", min: 0, max: 1, step: 0.05, value: 0.40 },
      { type: "range", name: "bg2", label: "Intensidade fundo 2", min: 0, max: 1, step: 0.05, value: 0.15 }
    ]
  };

  // =========================
  // BASE CSS (SEU CÓDIGO)
  // =========================
  const BASE_CSS_B64 = btoa(`
.product_card {
  background:
    radial-gradient(120% 140% at 10% 0%, rgba(255, 255, 255, {{bg1}}) 0%, transparent 55%),
    linear-gradient(135deg, rgba(255, 255, 255, {{bg2}}) 0%, rgba(255, 255, 255, 0.05) 100%) !important;

  border: 1px solid rgba(255, 255, 255, {{borda}}) !important;

  box-shadow:
    0 8px 18px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.30) !important;

  backdrop-filter: blur({{blur}}px) !important;
  -webkit-backdrop-filter: blur({{blur}}px) !important;
}
`);

  const BASE_HTML_B64 = '';
  const BASE_JS_B64 = '';

  // =========================
  // DECODE
  // =========================
  function b64decode(str) {
    return decodeURIComponent(atob(str).split('').map(c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join(''));
  }

  const BASE_CSS = b64decode(BASE_CSS_B64);
  const BASE_HTML = '';
  const BASE_JS = '';

  // =========================
  // UI
  // =========================
  const fieldsWrap = document.getElementById('fieldsWrap');
  const previewBox = document.getElementById('previewBox');
  const genBtn = document.getElementById('genBtn');
  const modal = document.getElementById('modal');
  const codePre = document.getElementById('codePre');
  const copyBtn = document.getElementById('copyBtn');
  const modalClose = document.getElementById('modalClose');

  document.getElementById('compH1').textContent = COMPONENT.name;
  document.getElementById('compDesc').textContent = COMPONENT.description;
  document.getElementById('bcTitle').textContent = COMPONENT.name;

  const values = {};

  // =========================
  // CRIAR CAMPOS
  // =========================
  COMPONENT.fields.forEach(f => {
    values[f.name] = f.value;

    const wrap = document.createElement('div');
    wrap.className = 'field';

    const label = document.createElement('label');
    label.textContent = f.label;

    const input = document.createElement('input');
    input.type = f.type;
    input.min = f.min;
    input.max = f.max;
    input.step = f.step;
    input.value = f.value;

    input.oninput = () => {
      values[f.name] = input.value;
      updatePreview();
    };

    wrap.appendChild(label);
    wrap.appendChild(input);
    fieldsWrap.appendChild(wrap);
  });

  // =========================
  // PROCESSA TEMPLATE
  // =========================
  function process(str) {
    return str.replace(/{{(.*?)}}/g, (_, key) => values[key] ?? '');
  }

  // =========================
  // PREVIEW
  // =========================
  function updatePreview() {
    previewBox.innerHTML = `
      <div class="product_card" style="width:250px;height:140px;border-radius:12px;display:flex;align-items:center;justify-content:center;">
        Preview
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = process(BASE_CSS);
    previewBox.appendChild(style);
  }

  updatePreview();

  // =========================
  // GERAR CÓDIGO
  // =========================
  genBtn.onclick = () => {
    const css = process(BASE_CSS);
    codePre.textContent = css;
    modal.classList.add('active');
  };

  modalClose.onclick = () => modal.classList.remove('active');

  // =========================
  // COPIAR
  // =========================
  copyBtn.onclick = () => {
    navigator.clipboard.writeText(codePre.textContent);
    copyBtn.textContent = "Copiado!";
    setTimeout(() => copyBtn.textContent = "Copiar", 1500);
  };

})();