const PRODUTOS = [
  {
    id: "menu-futurista",
    nome: "Menu Futurista Roxo",
    categoria: "Menu",
    descricao: "Menu moderno com estilo futurista roxo.",
    imagem: "assets/menu-futurista.png",
    html: `<nav class="menu-futurista">
  <a href="#">Início</a>
  <a href="#">Produtos</a>
  <a href="#">Contato</a>
</nav>`,
    css: `.menu-futurista {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: #12061f;
  border: 1px solid #a855f7;
  border-radius: 12px;
}`,
    js: `console.log("Menu carregado");`
  }
];