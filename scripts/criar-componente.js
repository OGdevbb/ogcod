const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(texto) {
  return new Promise(resolve => rl.question(texto, resolve));
}

function slugify(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

(async () => {
  const nomeBruto = process.argv[2] || await perguntar("Nome do componente: ");
  const nome = slugify(nomeBruto);

  if (!nome) {
    console.log("Nome inválido.");
    rl.close();
    return;
  }

  const titulo = await perguntar("Título da página: ");
  const pasta = path.join(process.cwd(), "codigos", nome);

  if (fs.existsSync(pasta)) {
    console.log("Essa pasta já existe.");
    rl.close();
    return;
  }

  fs.mkdirSync(pasta, { recursive: true });

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${titulo || nomeBruto}</title>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${nome}.css">
</head>
<body>

  <div id="ogC"></div>
  <div id="ogR"></div>

  <nav class="nav">
    <a href="../../index.html" class="nav-logo">OG<s>!</s></a>
    <ul class="nav-links">
      <li><a href="../../index.html#componentes">Componentes</a></li>
      <li><a href="../../index.html#como-funciona">Como Funciona</a></li>
      <li><a href="../../index.html" class="nav-cta">Começar Grátis</a></li>
    </ul>
  </nav>

  <div class="hero">
    <div class="bc">
      <a href="../../index.html">Início</a><span class="bc-s">›</span>
      <a href="../../index.html#componentes">Componentes</a><span class="bc-s">›</span>
      <span class="bc-c" id="bcTitle"></span>
    </div>
    <h1 class="comp-h1" id="compH1"></h1>
    <p class="comp-desc" id="compDesc"></p>
    <div class="comp-tags" id="compTags"></div>
  </div>

  <div class="layout">
    <div class="preview-col">
      <div class="plabel"><span class="pdot"></span> Preview ao vivo</div>
      <div class="preview-box" id="previewBox"></div>
    </div>

    <div class="right-col">
      <div class="panel">
        <div class="panel-hd">Personalize o Componente</div>
        <div class="fields-wrap" id="fieldsWrap"></div>
        <button class="gen-btn" id="genBtn">Gerar Código</button>
      </div>

      <div class="free-box">
        <div class="free-title">GRÁTIS</div>
        <div class="free-row">Gerador Gratuito</div>
        <p class="free-sub">Uso ilimitado · Sem custos · Gere agora mesmo</p>
      </div>
    </div>
  </div>

  <div class="modal" id="modal">
    <div class="modal-box">
      <div class="modal-hd">
        <span class="modal-title">Código Gerado</span>
        <button class="modal-close" id="modalClose">✕</button>
      </div>
      <div class="code-tabs">
        <button class="code-tab active" data-tab="html">HTML</button>
        <button class="code-tab" data-tab="css">CSS</button>
        <button class="code-tab" data-tab="js">JS</button>
      </div>
      <div class="code-area">
        <pre class="code-pre" id="codePre"></pre>
        <button class="copy-btn" id="copyBtn">Copiar</button>
      </div>
    </div>
  </div>

  <script src="${nome}.js"></script>
</body>
</html>
`;

  const css = `/* ${nome}.css */
html {
  background: #080808 !important;
}

body {
  margin: 0 !important;
  padding: 0 !important;
  background: #080808 !important;
  color: #f0f0f0 !important;
  font-family: 'Syne', sans-serif !important;
}
`;

  const js = `/* ${nome}.js */
const COMPONENT = {
  title: "${titulo || nomeBruto}",
  description: "Descrição do componente.",
  tags: ["Grátis"],
  fields: []
};

// cole aqui sua lógica
`;

fs.writeFileSync(path.join(pasta, "index.html"), html, "utf8");
fs.writeFileSync(path.join(pasta, `${nome}.css`), css, "utf8");
fs.writeFileSync(path.join(pasta, `${nome}.js`), js, "utf8");

console.log("Componente criado em: codigos/" + nome + "/");
rl.close();
})();