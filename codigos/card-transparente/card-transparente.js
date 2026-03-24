(function () {
  "use strict";

  const COMPONENT = {
    name: "Card Transparente (Glass)",
    description: "Card com efeito vidro claro (glassmorphism suave).",
    tags: ["glass", "card", "transparente", "css"],
    fields: [
      {
        type: "range",
        name: "blur",
        label: "Blur",
        min: 0,
        max: 30,
        step: 1,
        value: 12,
        unit: "px"
      },
      {
        type: "range",
        name: "borda",
        label: "Opacidade da borda",
        min: 0,
        max: 1,
        step: 0.05,
        value: 0.25
      },
      {
        type: "range",
        name: "bg1",
        label: "Intensidade fundo 1",
        min: 0,
        max: 1,
        step: 0.05,
        value: 0.40
      },
      {
        type: "range",
        name: "bg2",
        label: "Intensidade fundo 2",
        min: 0,
        max: 1,
        step: 0.05,
        value: 0.15
      }
    ]
  };

  const BASE_HTML_B64 = "";
  const BASE_JS_B64 = "";
  const BASE_CSS_B64 = btoa(unescape(encodeURIComponent(`
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
  `)));

  function b64decode(str) {
    if (!str) return "";
    return decodeURIComponent(escape(atob(str)));
  }

  const BASE_HTML = b64decode(BASE_HTML_B64);
  const BASE_CSS = b64decode(BASE_CSS_B64);
  const BASE_JS = b64decode(BASE_JS_B64);

  const el = {
    bcTitle: document.getElementById("bcTitle"),
    compH1: document.getElementById("compH1"),
    compDesc: document.getElementById("compDesc"),
    compTags: document.getElementById("compTags"),
    previewBox: document.getElementById("previewBox"),
    fieldsWrap: document.getElementById("fieldsWrap"),
    genBtn: document.getElementById("genBtn"),
    modal: document.getElementById("modal"),
    modalClose: document.getElementById("modalClose"),
    codePre: document.getElementById("codePre"),
    copyBtn: document.getElementById("copyBtn"),
    codeTabs: document.querySelectorAll(".code-tab")
  };

  const state = {
    values: {},
    activeTab: "css",
    generated: {
      html: "",
      css: "",
      js: ""
    }
  };

  function processTemplate(str) {
    return str.replace(/{{(.*?)}}/g, function (_, key) {
      const cleanKey = key.trim();
      return state.values[cleanKey] ?? "";
    });
  }

  function setComponentInfo() {
    el.bcTitle.textContent = COMPONENT.name;
    el.compH1.textContent = COMPONENT.name;
    el.compDesc.textContent = COMPONENT.description;

    el.compTags.innerHTML = "";
    COMPONENT.tags.forEach(function (tag) {
      const span = document.createElement("span");
      span.className = "comp-tag";
      span.textContent = tag;
      el.compTags.appendChild(span);
    });
  }

  function createField(field) {
    state.values[field.name] = field.value;

    const wrap = document.createElement("div");
    wrap.className = "field-item";

    const top = document.createElement("div");
    top.className = "field-top";

    const label = document.createElement("label");
    label.className = "field-label";
    label.textContent = field.label;

    const value = document.createElement("span");
    value.className = "field-value";
    value.textContent = field.value + (field.unit || "");

    top.appendChild(label);
    top.appendChild(value);

    const input = document.createElement("input");
    input.className = "field-range";
    input.type = "range";
    input.min = field.min;
    input.max = field.max;
    input.step = field.step;
    input.value = field.value;

    input.addEventListener("input", function () {
      state.values[field.name] = input.value;
      value.textContent = input.value + (field.unit || "");
      updatePreview();
    });

    wrap.appendChild(top);
    wrap.appendChild(input);

    return wrap;
  }

  function renderFields() {
    el.fieldsWrap.innerHTML = "";
    COMPONENT.fields.forEach(function (field) {
      el.fieldsWrap.appendChild(createField(field));
    });
  }

  function buildPreview() {
    const css = processTemplate(BASE_CSS);

    el.previewBox.innerHTML = `
      <div class="preview-demo-wrap">
        <div class="product_card preview-card-demo">
          <div class="preview-card-content">
            <div class="preview-card-title">Preview</div>
            <div class="preview-card-sub">Glass claro suave</div>
          </div>
        </div>
      </div>
    `;

    const style = document.createElement("style");
    style.id = "previewDynamicStyle";
    style.textContent = `
      ${css}

      .preview-demo-wrap{
        width:100%;
        min-height:420px;
        display:flex;
        align-items:flex-start;
        justify-content:flex-start;
        padding:22px;
      }

      .preview-card-demo{
        width:235px;
        height:150px;
        border-radius:16px;
        overflow:hidden;
        display:flex;
        align-items:center;
        justify-content:center;
      }

      .preview-card-content{
        text-align:center;
        color:#fff;
        font-family:'Syne',sans-serif;
      }

      .preview-card-title{
        font-size:28px;
        font-weight:800;
        line-height:1;
        margin-bottom:8px;
      }

      .preview-card-sub{
        font-size:12px;
        opacity:.75;
        letter-spacing:.08em;
        text-transform:uppercase;
      }
    `;

    el.previewBox.appendChild(style);
  }

  function generateCode() {
    state.generated.html = processTemplate(BASE_HTML).trim();
    state.generated.css = processTemplate(BASE_CSS).trim();
    state.generated.js = processTemplate(BASE_JS).trim();
  }

  function renderCodeTab(tab) {
    state.activeTab = tab;

    el.codeTabs.forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.tab === tab);
    });

    const code = state.generated[tab] || "// Nenhum código nesta aba.";
    el.codePre.textContent = code;
  }

  function openModal() {
    generateCode();
    renderCodeTab("css");
    el.modal.classList.add("active");
  }

  function closeModal() {
    el.modal.classList.remove("active");
  }

  function copyCode() {
    navigator.clipboard.writeText(el.codePre.textContent).then(function () {
      const old = el.copyBtn.innerHTML;
      el.copyBtn.innerHTML = "Copiado!";
      setTimeout(function () {
        el.copyBtn.innerHTML = old;
      }, 1400);
    });
  }

  function updatePreview() {
    buildPreview();
  }

  function bindEvents() {
    el.genBtn.addEventListener("click", openModal);
    el.modalClose.addEventListener("click", closeModal);
    el.copyBtn.addEventListener("click", copyCode);

    el.modal.addEventListener("click", function (e) {
      if (e.target === el.modal) closeModal();
    });

    el.codeTabs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        renderCodeTab(btn.dataset.tab);
      });
    });
  }

  function init() {
    setComponentInfo();
    renderFields();
    updatePreview();
    bindEvents();
  }

  init();
})();