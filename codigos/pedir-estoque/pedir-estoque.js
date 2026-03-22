// =============================================================
//  OG! — solicitar-estoque.js
// =============================================================


// ╔═════════════════════════════════════════════════════════╗
// ║  ✏️  CONFIGURAÇÃO — edite aqui para customizar          ║
// ╚═════════════════════════════════════════════════════════╝

const COMPONENT = {
    title: 'Solicitar Estoque',
    description: 'Botão flutuante que abre um modal com formulário. O cliente preenche produto, quantidade e link, e a solicitação é enviada via webhook para o Discord.',
    tags: ['Discord', 'Webhook', 'Modal', 'Formulário', 'Estoque', 'JS', 'Grátis'],

    fields: [
        // Integração
        { id: 'webhook', label: 'URL do Webhook (Discord)', type: 'text', placeholder: 'https://discord.com/api/webhooks/...', default: '', required: true },
        { id: 'cooldown', label: 'Cooldown (minutos)', type: 'text', placeholder: 'Ex: 60', default: '60', required: true },
        { id: 'nomeLoja', label: 'Nome da Loja', type: 'text', placeholder: 'Ex: Nexus Store', default: 'Minha Loja', required: true },
        { id: 'corEmbed', label: 'Cor do Embed (hex número)', type: 'text', placeholder: 'Ex: 1762562', default: '1762562', required: true },

        // Botão flutuante
        { id: 'textoBotao', label: 'Texto do Botão', type: 'text', placeholder: 'Ex: Solicitar Estoque', default: 'Solicitar Estoque', required: true },
        { id: 'iconeBotao', label: 'Ícone do Botão (emoji)', type: 'text', placeholder: 'Ex: 📦', default: '📦', required: false },
        { id: 'posBottom', label: 'Posição — Baixo', type: 'text', placeholder: 'Ex: 28px', default: '28px', required: true },
        { id: 'posRight', label: 'Posição — Direita', type: 'text', placeholder: 'Ex: 28px', default: '28px', required: true },

        // Modal
        { id: 'tituloModal', label: 'Título do Modal', type: 'text', placeholder: 'Ex: Solicitar Estoque', default: 'Solicitar Estoque', required: true },
        { id: 'iconeModal', label: 'Ícone do Modal', type: 'text', placeholder: 'Ex: 📦', default: '📦', required: false },
        { id: 'subtituloModal', label: 'Subtítulo do Modal', type: 'text', placeholder: 'Ex: Preencha e entraremos em contato!', default: 'Preencha abaixo e entraremos em contato!', required: false },

        // Labels dos campos
        { id: 'labelProduto', label: 'Label — Produto', type: 'text', placeholder: 'Ex: Nome do Produto', default: 'Nome do Produto', required: true },
        { id: 'placeholderProduto', label: 'Placeholder — Produto', type: 'text', placeholder: 'Ex: Level 2800...', default: 'Ex: Level 2800 + Kitsune', required: false },
        { id: 'labelQtd', label: 'Label — Quantidade', type: 'text', placeholder: 'Ex: Quantidade', default: 'Quantidade', required: true },
        { id: 'placeholderQtd', label: 'Placeholder — Qtd', type: 'text', placeholder: 'Ex: 5', default: 'Ex: 5', required: false },
        { id: 'mostrarLink', label: 'Mostrar campo de Link?', type: 'text', placeholder: 'sim ou deixe vazio', default: 'sim', required: false },
        { id: 'labelLink', label: 'Label — Link', type: 'text', placeholder: 'Ex: Link do Produto', default: 'Link do Produto (opcional)', required: false },
        { id: 'placeholderLink', label: 'Placeholder — Link', type: 'text', placeholder: 'Ex: https://...', default: 'https://...', required: false },
        { id: 'iconeEnviar', label: 'Ícone — Enviar', type: 'text', placeholder: 'Ex: 📨', default: '📨', required: false },
        { id: 'textoEnviar', label: 'Texto — Enviar', type: 'text', placeholder: 'Ex: Enviar Solicitação', default: 'Enviar Solicitação', required: true },

        // Cores
        { id: 'corBotao', label: 'Cor do Botão (principal)', type: 'color', default: '#1a6bff' },
        { id: 'corBotaoEscuro', label: 'Cor do Botão (escura)', type: 'color', default: '#0d4fd4' },
        { id: 'corTextoBotao', label: 'Cor do Texto do Botão', type: 'color', default: '#ffffff' },
        { id: 'corFundoModal', label: 'Cor de Fundo do Modal', type: 'color', default: '#0b1a30' },
        { id: 'corBordaModal', label: 'Cor da Borda do Modal', type: 'color', default: '#1a3a6a' },
        { id: 'corSubtexto', label: 'Cor do Subtexto/Labels', type: 'color', default: '#7a9abf' },
        { id: 'corInputFundo', label: 'Cor de Fundo dos Inputs', type: 'color', default: '#060c18' },
        { id: 'corBordaInput', label: 'Cor da Borda dos Inputs', type: 'color', default: '#1a3a6a' },
        { id: 'corInputTexto', label: 'Cor do Texto dos Inputs', type: 'color', default: '#e8f0ff' },
        { id: 'corPlaceholder', label: 'Cor dos Placeholders', type: 'color', default: '#3a5a7a' },
        { id: 'corFocusGlow', label: 'Cor do Glow no Foco', type: 'text', placeholder: 'Ex: rgba(26,107,255,0.13)', default: 'rgba(26,107,255,0.13)', required: false },
        { id: 'bordaInput', label: 'Border-radius dos Inputs', type: 'text', placeholder: 'Ex: 10px', default: '10px', required: true },
        { id: 'corSucesso', label: 'Cor de Sucesso', type: 'color', default: '#3dffaa' },
        { id: 'corErro', label: 'Cor de Erro', type: 'color', default: '#ff5c5c' },
    ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64 = '';
const BASE_JS_B64 = 'Ly8gU29saWNpdGFyIEVzdG9xdWUg4oCUIGdlcmFkbyBwb3IgT0chCihmdW5jdGlvbiAoKSB7CgogIHZhciBXRUJIT09LICAgICAgICAgID0gJ3t7d2ViaG9va319JzsKICB2YXIgQ09PTERPV05fTUlOVVRPUyA9IHt7Y29vbGRvd259fTsKICB2YXIgQ09PTERPV05fTVMgICAgICA9IENPT0xET1dOX01JTlVUT1MgKiA2MCAqIDEwMDA7CgogIHZhciBQQUxBVlJBU19QUk9JQklEQVMgPSBbCiAgICAncG9ycmEnLCdjYXJhbGhvJywncHV0YScsJ3ZpYWRvJywnYnVjZXRhJywnZmRwJywnZmlsaG8gZGEgcHV0YScsCiAgICAnbWVyZGEnLCd2c2YnLCd2dG5jJywnaW1iZWNpbCcsJ2lkaW90YScsJ290YXJpbycsJ290w6FyaW8nLAogICAgJ2N1esOjbycsJ2N1emFvJywnYXJyb21iYWRvJywnZGVzZ3Jhw6dhJywnZGVzZ3JhY2UnLCdsaXhvJywKICAgICdiYWJhY2EnLCdib3N0YScsJ3BpcmFuaGEnLCd2YWRpYScsJ3Byb3N0aXR1dGEnLCd4ZXJlY2EnLAogICAgJ2Nvcm5vJywnY29ybmEnLCdmb2RhJywnZm9kYXNlJywnZm9kYS1zZScsJ3BxcCcsJ2tjdCcsJ2tybCcKICBdOwoKICAvKiDilIDilIAgQ1NTIOKUgOKUgCAqLwogIHZhciBjc3MgPQogICAgJyNlYi1lc3RvcXVlLWJ0bnsnICsKICAgICAgJ3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTp7e3Bvc0JvdHRvbX19O3JpZ2h0Ont7cG9zUmlnaHR9fTt6LWluZGV4Ojk5OTk7JyArCiAgICAgICdiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcse3tjb3JCb3Rhb319LHt7Y29yQm90YW9Fc2N1cm99fSk7JyArCiAgICAgICdjb2xvcjp7e2NvclRleHRvQm90YW99fTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjUwcHg7JyArCiAgICAgICdwYWRkaW5nOjEzcHggMjJweDtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTouODJyZW07JyArCiAgICAgICdmb250LXdlaWdodDo4MDA7bGV0dGVyLXNwYWNpbmc6MS41cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlOycgKwogICAgICAnY3Vyc29yOnBvaW50ZXI7Ym94LXNoYWRvdzowIDRweCAyMHB4IHJnYmEoMCwwLDAsMC40KTsnICsKICAgICAgJ2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjhweDsnICsKICAgICAgJ3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyxib3gtc2hhZG93IC4yczt1c2VyLXNlbGVjdDpub25lO30nICsKICAgICcjZWItZXN0b3F1ZS1idG46aG92ZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTNweCk7Ym94LXNoYWRvdzowIDhweCAyOHB4IHJnYmEoMCwwLDAsMC41KTt9JyArCiAgICAnI2ViLWVzdG9xdWUtYnRuOmFjdGl2ZXt0cmFuc2Zvcm06c2NhbGUoMC45NSk7fScgKwogICAgJyNlYi1lc3RvcXVlLW92ZXJsYXl7JyArCiAgICAgICdkaXNwbGF5Om5vbmU7cG9zaXRpb246Zml4ZWQ7aW5zZXQ6MDsnICsKICAgICAgJ2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjY1KTtiYWNrZHJvcC1maWx0ZXI6Ymx1cig0cHgpOycgKwogICAgICAnei1pbmRleDoxMDAwMDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt9JyArCiAgICAnI2ViLWVzdG9xdWUtb3ZlcmxheS5vcGVue2Rpc3BsYXk6ZmxleDt9JyArCiAgICAnI2ViLWVzdG9xdWUtbW9kYWx7JyArCiAgICAgICdiYWNrZ3JvdW5kOnt7Y29yRnVuZG9Nb2RhbH19O2JvcmRlcjoxcHggc29saWQge3tjb3JCb3JkYU1vZGFsfX07JyArCiAgICAgICdib3JkZXItcmFkaXVzOjIwcHg7cGFkZGluZzo0MHB4IDM2cHggMzJweDsnICsKICAgICAgJ3dpZHRoOjEwMCU7bWF4LXdpZHRoOjQ0MHB4O21hcmdpbjoxNnB4OycgKwogICAgICAnYm94LXNoYWRvdzowIDIwcHggNjBweCByZ2JhKDAsMCwwLDAuNik7JyArCiAgICAgICdhbmltYXRpb246ZWItaW4gLjI1cyBlYXNlO3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveDt9JyArCiAgICAnI2ViLWVzdG9xdWUtbW9kYWwgKiwjZWItZXN0b3F1ZS1tb2RhbCAqOjpiZWZvcmUsI2ViLWVzdG9xdWUtbW9kYWwgKjo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94O30nICsKICAgICdAa2V5ZnJhbWVzIGViLWlue2Zyb217b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDIwcHgpIHNjYWxlKDAuOTcpfXRve29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSBzY2FsZSgxKX19JyArCiAgICAnI2ViLWVzdG9xdWUtY2xvc2V7JyArCiAgICAgICdwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTZweDtyaWdodDoxOHB4O2JhY2tncm91bmQ6bm9uZTtib3JkZXI6bm9uZTsnICsKICAgICAgJ2NvbG9yOnt7Y29yU3VidGV4dG99fTtmb250LXNpemU6MS4zcmVtO2N1cnNvcjpwb2ludGVyOycgKwogICAgICAnbGluZS1oZWlnaHQ6MTt0cmFuc2l0aW9uOmNvbG9yIC4ycyx0cmFuc2Zvcm0gLjJzO3BhZGRpbmc6NHB4O30nICsKICAgICcjZWItZXN0b3F1ZS1jbG9zZTpob3Zlcntjb2xvcjojZmZmO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO30nICsKICAgICcjZWItZXN0b3F1ZS1tb2RhbCBoMnsnICsKICAgICAgJ2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjEuM3JlbTtmb250LXdlaWdodDo3MDA7JyArCiAgICAgICdsZXR0ZXItc3BhY2luZzoycHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2NvbG9yOiNmZmY7bWFyZ2luOjAgMCA2cHg7fScgKwogICAgJyNlYi1lc3RvcXVlLW1vZGFsIHB7Y29sb3I6e3tjb3JTdWJ0ZXh0b319O2ZvbnQtc2l6ZTouODJyZW07bWFyZ2luOjAgMCAyNHB4O2ZvbnQtZmFtaWx5OmluaGVyaXQ7fScgKwogICAgJy5lYi1mb3JtLWdyb3Vwe2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjdweDttYXJnaW4tYm90dG9tOjE4cHg7d2lkdGg6MTAwJTt9JyArCiAgICAnLmViLWZvcm0tZ3JvdXAgbGFiZWx7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6LjcycmVtO2ZvbnQtd2VpZ2h0OjcwMDtsZXR0ZXItc3BhY2luZzoxLjJweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Y29sb3I6e3tjb3JTdWJ0ZXh0b319O30nICsKICAgICcuZWItZm9ybS1ncm91cCBpbnB1dHsnICsKICAgICAgJ2JhY2tncm91bmQ6e3tjb3JJbnB1dEZ1bmRvfX07Ym9yZGVyOjEuNXB4IHNvbGlkIHt7Y29yQm9yZGFJbnB1dH19OycgKwogICAgICAnYm9yZGVyLXJhZGl1czp7e2JvcmRhSW5wdXR9fTtwYWRkaW5nOjEzcHggMTZweDtjb2xvcjp7e2NvcklucHV0VGV4dG99fTsnICsKICAgICAgJ2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOi44OHJlbTtvdXRsaW5lOm5vbmU7JyArCiAgICAgICd0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMnMsYm94LXNoYWRvdyAuMnM7d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrOycgKwogICAgICAnLXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO30nICsKICAgICcuZWItZm9ybS1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXJ7Y29sb3I6e3tjb3JQbGFjZWhvbGRlcn19O30nICsKICAgICcuZWItZm9ybS1ncm91cCBpbnB1dDpmb2N1c3tib3JkZXItY29sb3I6e3tjb3JCb3Rhb319O2JveC1zaGFkb3c6MCAwIDAgM3B4IHt7Y29yRm9jdXNHbG93fX07fScgKwogICAgJyNlYi1lc3RvcXVlLXNlbmR7JyArCiAgICAgICd3aWR0aDoxMDAlO21hcmdpbi10b3A6OHB4OycgKwogICAgICAnYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHt7Y29yQm90YW99fSx7e2NvckJvdGFvRXNjdXJvfX0pOycgKwogICAgICAnY29sb3I6e3tjb3JUZXh0b0JvdGFvfX07Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czp7e2JvcmRhSW5wdXR9fTtwYWRkaW5nOjE0cHg7JyArCiAgICAgICdmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTouODhyZW07Zm9udC13ZWlnaHQ6ODAwOycgKwogICAgICAnbGV0dGVyLXNwYWNpbmc6MS41cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2N1cnNvcjpwb2ludGVyOycgKwogICAgICAnYm94LXNoYWRvdzowIDAgMThweCByZ2JhKDAsMCwwLDAuMyk7JyArCiAgICAgICd0cmFuc2l0aW9uOmJhY2tncm91bmQgLjJzLGJveC1zaGFkb3cgLjJzLHRyYW5zZm9ybSAuMTVzOycgKwogICAgICAnZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2dhcDo4cHg7fScgKwogICAgJyNlYi1lc3RvcXVlLXNlbmQ6aG92ZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTFweCk7Ym94LXNoYWRvdzowIDAgMjhweCByZ2JhKDAsMCwwLDAuNCk7fScgKwogICAgJyNlYi1lc3RvcXVlLXNlbmQ6YWN0aXZle3RyYW5zZm9ybTpzY2FsZSgwLjk3KTt9JyArCiAgICAnI2ViLWVzdG9xdWUtc2VuZDpkaXNhYmxlZHtvcGFjaXR5Oi42O2N1cnNvcjpub3QtYWxsb3dlZDt0cmFuc2Zvcm06bm9uZTt9JyArCiAgICAnI2ViLWVzdG9xdWUtZmVlZGJhY2t7ZGlzcGxheTpub25lO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MTJweCAwIDRweDtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTouODVyZW07Zm9udC13ZWlnaHQ6NzAwO30nICsKICAgICcjZWItZXN0b3F1ZS1mZWVkYmFjay5va3tjb2xvcjp7e2NvclN1Y2Vzc299fTtkaXNwbGF5OmJsb2NrO30nICsKICAgICcjZWItZXN0b3F1ZS1mZWVkYmFjay5lcnJve2NvbG9yOnt7Y29yRXJyb319O2Rpc3BsYXk6YmxvY2s7fSc7CgogIHZhciBzRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpOwogIHNFbC50ZXh0Q29udGVudCA9IGNzczsKICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNFbCk7CgogIC8qIOKUgOKUgCBIVE1MIOKUgOKUgCAqLwogIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsKICBidG4uaWQgPSAnZWItZXN0b3F1ZS1idG4nOwogIGJ0bi5pbm5lckhUTUwgPSAne3tpY29uZUJvdGFvfX0ge3t0ZXh0b0JvdGFvfX0nOwogIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnRuKTsKCiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICBvdmVybGF5LmlkID0gJ2ViLWVzdG9xdWUtb3ZlcmxheSc7CiAgb3ZlcmxheS5pbm5lckhUTUwgPQogICAgJzxkaXYgaWQ9ImViLWVzdG9xdWUtbW9kYWwiPicgKwogICAgICAnPGJ1dHRvbiBpZD0iZWItZXN0b3F1ZS1jbG9zZSI+4pyVPC9idXR0b24+JyArCiAgICAgICc8aDI+e3tpY29uZU1vZGFsfX0ge3t0aXR1bG9Nb2RhbH19PC9oMj4nICsKICAgICAgJzxwPnt7c3VidGl0dWxvTW9kYWx9fTwvcD4nICsKICAgICAgJzxkaXYgY2xhc3M9ImViLWZvcm0tZ3JvdXAiPicgKwogICAgICAgICc8bGFiZWw+e3tsYWJlbFByb2R1dG99fSAqPC9sYWJlbD4nICsKICAgICAgICAnPGlucHV0IGlkPSJlYi1jYW1wby1wcm9kdXRvIiB0eXBlPSJ0ZXh0IiBwbGFjZWhvbGRlcj0ie3twbGFjZWhvbGRlclByb2R1dG99fSIgbWF4bGVuZ3RoPSIxNTAiLz4nICsKICAgICAgJzwvZGl2PicgKwogICAgICAnPGRpdiBjbGFzcz0iZWItZm9ybS1ncm91cCI+JyArCiAgICAgICAgJzxsYWJlbD57e2xhYmVsUXRkfX0gKjwvbGFiZWw+JyArCiAgICAgICAgJzxpbnB1dCBpZD0iZWItY2FtcG8tcXRkIiB0eXBlPSJudW1iZXIiIHBsYWNlaG9sZGVyPSJ7e3BsYWNlaG9sZGVyUXRkfX0iIG1pbj0iMSIgbWF4PSI5OTk5Ii8+JyArCiAgICAgICc8L2Rpdj4nICsKICAgICAgLyogSUY6bW9zdHJhckxpbmsgKi8KICAgICAgJzxkaXYgY2xhc3M9ImViLWZvcm0tZ3JvdXAiPicgKwogICAgICAgICc8bGFiZWw+e3tsYWJlbExpbmt9fTwvbGFiZWw+JyArCiAgICAgICAgJzxpbnB1dCBpZD0iZWItY2FtcG8tbGluayIgdHlwZT0idXJsIiBwbGFjZWhvbGRlcj0ie3twbGFjZWhvbGRlckxpbmt9fSIvPicgKwogICAgICAnPC9kaXY+JyArCiAgICAgIC8qIEVORElGICovCiAgICAgICc8YnV0dG9uIGlkPSJlYi1lc3RvcXVlLXNlbmQiPnt7aWNvbmVFbnZpYXJ9fSB7e3RleHRvRW52aWFyfX08L2J1dHRvbj4nICsKICAgICAgJzxkaXYgaWQ9ImViLWVzdG9xdWUtZmVlZGJhY2siPjwvZGl2PicgKwogICAgJzwvZGl2Pic7CiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTsKCiAgLyog4pSA4pSAIENPT0xET1dOIOKUgOKUgCAqLwogIGZ1bmN0aW9uIHBvZGlhRW52aWFyKCkgewogICAgdHJ5IHsKICAgICAgdmFyIGxhc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZWJfZXN0b3F1ZV9sYXN0Jyk7CiAgICAgIGlmICghbGFzdCkgcmV0dXJuIHsgb2s6IHRydWUgfTsKICAgICAgdmFyIGRpZmYgPSBEYXRlLm5vdygpIC0gcGFyc2VJbnQobGFzdCwgMTApOwogICAgICBpZiAoZGlmZiA8IENPT0xET1dOX01TKSByZXR1cm4geyBvazogZmFsc2UsIG1pbjogTWF0aC5jZWlsKChDT09MRE9XTl9NUyAtIGRpZmYpIC8gNjAwMDApIH07CiAgICAgIHJldHVybiB7IG9rOiB0cnVlIH07CiAgICB9IGNhdGNoKGUpIHsgcmV0dXJuIHsgb2s6IHRydWUgfTsgfQogIH0KICBmdW5jdGlvbiByZWdpc3RyYXJFbnZpbygpIHsKICAgIHRyeSB7IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlYl9lc3RvcXVlX2xhc3QnLCBEYXRlLm5vdygpLnRvU3RyaW5nKCkpOyB9IGNhdGNoKGUpIHt9CiAgfQoKICAvKiDilIDilIAgVkFMSURBw4fDg08g4pSA4pSAICovCiAgZnVuY3Rpb24gdmFsaWRhcihjYW1wb3MpIHsKICAgIGlmICghY2FtcG9zLnByb2R1dG8pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICfimqDvuI8gUHJlZW5jaGEgbyBub21lIGRvIHByb2R1dG8hJzsKICAgIGlmICghY2FtcG9zLnF0ZCB8fCBpc05hTihjYW1wb3MucXRkKSB8fCBOdW1iZXIoY2FtcG9zLnF0ZCkgPCAxKSByZXR1cm4gJ+KaoO+4jyBJbmZvcm1lIHVtYSBxdWFudGlkYWRlIHbDoWxpZGEhJzsKICAgIGlmIChjYW1wb3MucHJvZHV0by5sZW5ndGggPiAxMjApICAgICAgICAgICAgICAgICByZXR1cm4gJ+Kcgu+4jyBOb21lIGRvIHByb2R1dG8gbXVpdG8gbG9uZ28gKG3DoXguIDEyMCBjYXJhY3RlcmVzKS4nOwogICAgdmFyIHQgPSBjYW1wb3MucHJvZHV0by50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1tfXC0uXS9nLCAnICcpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBQQUxBVlJBU19QUk9JQklEQVMubGVuZ3RoOyBpKyspIHsKICAgICAgaWYgKHQuaW5kZXhPZihQQUxBVlJBU19QUk9JQklEQVNbaV0pICE9PSAtMSkgcmV0dXJuICfwn5qrIE5vbWUgZG8gcHJvZHV0byBjb250w6ltIHBhbGF2cmFzIGluYWRlcXVhZGFzLic7CiAgICB9CiAgICAvKiBJRjptb3N0cmFyTGluayAqLwogICAgaWYgKGNhbXBvcy5saW5rKSB7CiAgICAgIGlmICghL15odHRwcz86XC9cLy8udGVzdChjYW1wb3MubGluay50b0xvd2VyQ2FzZSgpKSkgcmV0dXJuICfwn5SXIE8gbGluayBkZXZlIGNvbWXDp2FyIGNvbSBodHRwOi8vIG91IGh0dHBzOi8vJzsKICAgIH0KICAgIC8qIEVORElGICovCiAgICByZXR1cm4gbnVsbDsKICB9CgogIC8qIOKUgOKUgCBSRUZTIOKUgOKUgCAqLwogIHZhciBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYi1lc3RvcXVlLWNsb3NlJyk7CiAgdmFyIHNlbmRCdG4gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ViLWVzdG9xdWUtc2VuZCcpOwogIHZhciBmZWVkYmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYi1lc3RvcXVlLWZlZWRiYWNrJyk7CgogIGZ1bmN0aW9uIG1vc3RyYXJFcnJvKG1zZykgeyBmZWVkYmFjay5jbGFzc05hbWUgPSAnZXJybyc7IGZlZWRiYWNrLnRleHRDb250ZW50ID0gbXNnOyB9CgogIGZ1bmN0aW9uIGZlY2hhcigpIHsKICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpOwogICAgZmVlZGJhY2suY2xhc3NOYW1lID0gJyc7IGZlZWRiYWNrLnRleHRDb250ZW50ID0gJyc7CiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWItY2FtcG8tcHJvZHV0bycpLnZhbHVlID0gJyc7CiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWItY2FtcG8tcXRkJykudmFsdWUgPSAnJzsKICAgIC8qIElGOm1vc3RyYXJMaW5rICovCiAgICB2YXIgbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ViLWNhbXBvLWxpbmsnKTsKICAgIGlmIChsRWwpIGxFbC52YWx1ZSA9ICcnOwogICAgLyogRU5ESUYgKi8KICAgIHNlbmRCdG4uZGlzYWJsZWQgPSBmYWxzZTsKICAgIHNlbmRCdG4uaW5uZXJIVE1MID0gJ3t7aWNvbmVFbnZpYXJ9fSB7e3RleHRvRW52aWFyfX0nOwogIH0KCiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgewogICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7CiAgICB2YXIgY2hlY2sgPSBwb2RpYUVudmlhcigpOwogICAgaWYgKCFjaGVjay5vaykgewogICAgICBtb3N0cmFyRXJybygn4o+zIEFndWFyZGUgJyArIGNoZWNrLm1pbiArICcgbWluIHBhcmEgbm92YSBzb2xpY2l0YcOnw6NvLicpOwogICAgICBzZW5kQnRuLmRpc2FibGVkID0gdHJ1ZTsKICAgIH0gZWxzZSB7CiAgICAgIHNlbmRCdG4uZGlzYWJsZWQgPSBmYWxzZTsKICAgIH0KICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYi1jYW1wby1wcm9kdXRvJykuZm9jdXMoKTsKICB9KTsKCiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmZWNoYXIpOwogIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkgeyBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIGZlY2hhcigpOyB9KTsKICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHsgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgZmVjaGFyKCk7IH0pOwoKICBzZW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgewogICAgdmFyIGxFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYi1jYW1wby1saW5rJyk7CiAgICB2YXIgY2FtcG9zID0gewogICAgICBwcm9kdXRvOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWItY2FtcG8tcHJvZHV0bycpLnZhbHVlLnRyaW0oKSwKICAgICAgcXRkOiAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ViLWNhbXBvLXF0ZCcpLnZhbHVlLnRyaW0oKSwKICAgICAgbGluazogICAgbEVsID8gbEVsLnZhbHVlLnRyaW0oKSA6ICcnLAogICAgfTsKCiAgICBmZWVkYmFjay5jbGFzc05hbWUgPSAnJzsgZmVlZGJhY2sudGV4dENvbnRlbnQgPSAnJzsKICAgIHZhciBlcnJvID0gdmFsaWRhcihjYW1wb3MpOwogICAgaWYgKGVycm8pIHsgbW9zdHJhckVycm8oZXJybyk7IHJldHVybjsgfQoKICAgIHZhciBjaGVjayA9IHBvZGlhRW52aWFyKCk7CiAgICBpZiAoIWNoZWNrLm9rKSB7IG1vc3RyYXJFcnJvKCfij7MgQWd1YXJkZSAnICsgY2hlY2subWluICsgJyBtaW4gcGFyYSBub3ZhIHNvbGljaXRhw6fDo28uJyk7IHJldHVybjsgfQoKICAgIHNlbmRCdG4uZGlzYWJsZWQgPSB0cnVlOwogICAgc2VuZEJ0bi5pbm5lckhUTUwgPSAn4o+zIEVudmlhbmRvLi4uJzsKCiAgICB2YXIgcGF5bG9hZCA9IHsKICAgICAgdXNlcm5hbWU6ICd7e25vbWVMb2phfX0g4oCUIEVzdG9xdWUnLAogICAgICBlbWJlZHM6IFt7CiAgICAgICAgdGl0bGU6ICfwn5OmIE5vdmEgU29saWNpdGHDp8OjbyBkZSBFc3RvcXVlJywKICAgICAgICBjb2xvcjoge3tjb3JFbWJlZH19LAogICAgICAgIGZpZWxkczogWwogICAgICAgICAgeyBuYW1lOiAn8J+bkiBQcm9kdXRvJywgICAgdmFsdWU6IGNhbXBvcy5wcm9kdXRvLCAgICAgICAgICAgICAgICAgaW5saW5lOiBmYWxzZSB9LAogICAgICAgICAgeyBuYW1lOiAn8J+UoiBRdWFudGlkYWRlJywgdmFsdWU6IGNhbXBvcy5xdGQgKyAnIHVuaWRhZGUocyknLCAgICAgaW5saW5lOiB0cnVlICB9LAogICAgICAgICAgeyBuYW1lOiAn8J+UlyBMaW5rJywgICAgICAgdmFsdWU6IGNhbXBvcy5saW5rIHx8ICdOw6NvIGluZm9ybWFkbycsIGlubGluZTogdHJ1ZSAgfSwKICAgICAgICBdLAogICAgICAgIGZvb3RlcjogeyB0ZXh0OiAne3tub21lTG9qYX19IOKAoiBTb2xpY2l0YcOnw6NvIHZpYSBsb2phJyB9LAogICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLAogICAgICB9XQogICAgfTsKCiAgICBmZXRjaChXRUJIT09LLCB7CiAgICAgIG1ldGhvZDogJ1BPU1QnLAogICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSwKICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksCiAgICB9KQogICAgLnRoZW4oZnVuY3Rpb24gKHJlcykgewogICAgICBpZiAocmVzLm9rIHx8IHJlcy5zdGF0dXMgPT09IDIwNCkgewogICAgICAgIHJlZ2lzdHJhckVudmlvKCk7CiAgICAgICAgZmVlZGJhY2suY2xhc3NOYW1lID0gJ29rJzsKICAgICAgICBmZWVkYmFjay50ZXh0Q29udGVudCA9ICfinIUgU29saWNpdGHDp8OjbyBlbnZpYWRhISBQcsOzeGltYSBlbSAnICsgQ09PTERPV05fTUlOVVRPUyArICcgbWluLic7CiAgICAgICAgc2VuZEJ0bi5pbm5lckhUTUwgPSAn4pyFIEVudmlhZG8hJzsKICAgICAgICBzZXRUaW1lb3V0KGZlY2hhciwgMjIwMCk7CiAgICAgIH0gZWxzZSB7IHRocm93IG5ldyBFcnJvcigpOyB9CiAgICB9KQogICAgLmNhdGNoKGZ1bmN0aW9uICgpIHsKICAgICAgbW9zdHJhckVycm8oJ+KdjCBFcnJvIGFvIGVudmlhci4gVGVudGUgbm92YW1lbnRlLicpOwogICAgICBzZW5kQnRuLmRpc2FibGVkID0gZmFsc2U7CiAgICAgIHNlbmRCdG4uaW5uZXJIVE1MID0gJ3t7aWNvbmVFbnZpYXJ9fSB7e3RleHRvRW52aWFyfX0nOwogICAgfSk7CiAgfSk7Cgp9KSgpOw==';

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

    var corBotao = v.corBotao || '#1a6bff';
    var corBotaoEsc = v.corBotaoEscuro || '#0d4fd4';
    var corTexto = v.corTextoBotao || '#ffffff';
    var corFundo = v.corFundoModal || '#0b1a30';
    var corBorda = v.corBordaModal || '#1a3a6a';
    var corSub = v.corSubtexto || '#7a9abf';
    var corInputF = v.corInputFundo || '#060c18';
    var corInputB = v.corBordaInput || '#1a3a6a';
    var corInputT = v.corInputTexto || '#e8f0ff';
    var corPH = v.corPlaceholder || '#3a5a7a';
    var borda = v.bordaInput || '10px';
    var corSucesso = v.corSucesso || '#3dffaa';
    var corErro = v.corErro || '#ff5c5c';
    var txtBotao = v.textoBotao || 'Solicitar Estoque';
    var icBotao = v.iconeBotao || '📦';
    var icModal = v.iconeModal || '📦';
    var tituloModal = v.tituloModal || 'Solicitar Estoque';
    var subtitulo = v.subtituloModal || 'Preencha abaixo e entraremos em contato!';
    var lblProduto = v.labelProduto || 'Nome do Produto';
    var phProduto = v.placeholderProduto || 'Ex: Level 2800 + Kitsune';
    var lblQtd = v.labelQtd || 'Quantidade';
    var phQtd = v.placeholderQtd || 'Ex: 5';
    var mostrarLink = v.mostrarLink && v.mostrarLink.trim() !== '';
    var lblLink = v.labelLink || 'Link do Produto (opcional)';
    var phLink = v.placeholderLink || 'https://...';
    var icEnviar = v.iconeEnviar || '📨';
    var txtEnviar = v.textoEnviar || 'Enviar Solicitação';

    var linkField = mostrarLink ? (
        '<div style="display:flex;flex-direction:column;gap:7px;margin-bottom:18px;">' +
        '<label style="font-size:.72rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:' + corSub + ';">' + lblLink + '</label>' +
        '<input type="url" placeholder="' + phLink + '" style="background:' + corInputF + ';border:1.5px solid ' + corInputB + ';border-radius:' + borda + ';padding:13px 16px;color:' + corInputT + ';font-size:.88rem;outline:none;width:100%;" disabled>' +
        '</div>'
    ) : '';

    var doc = '<!DOCTYPE html><html><head><meta charset="UTF-8">'
        + '<style>*{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,sans-serif;}'
        + 'body{background:#111;width:100%;min-height:520px;display:flex;align-items:center;justify-content:center;padding:20px;}'
        + '</style></head><body>'
        + '<div style="background:' + corFundo + ';border:1px solid ' + corBorda + ';border-radius:20px;padding:40px 36px 32px;width:100%;max-width:400px;position:relative;">'
        + '<button style="position:absolute;top:16px;right:18px;background:none;border:none;color:' + corSub + ';font-size:1.3rem;cursor:pointer;line-height:1;">✕</button>'
        + '<h2 style="font-size:1.2rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin:0 0 6px;">' + icModal + ' ' + tituloModal + '</h2>'
        + '<p style="color:' + corSub + ';font-size:.82rem;margin:0 0 24px;">' + subtitulo + '</p>'
        + '<div style="display:flex;flex-direction:column;gap:7px;margin-bottom:18px;">'
        + '<label style="font-size:.72rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:' + corSub + ';">' + lblProduto + ' *</label>'
        + '<input type="text" placeholder="' + phProduto + '" style="background:' + corInputF + ';border:1.5px solid ' + corInputB + ';border-radius:' + borda + ';padding:13px 16px;color:' + corInputT + ';font-size:.88rem;outline:none;width:100%;" disabled>'
        + '</div>'
        + '<div style="display:flex;flex-direction:column;gap:7px;margin-bottom:18px;">'
        + '<label style="font-size:.72rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:' + corSub + ';">' + lblQtd + ' *</label>'
        + '<input type="number" placeholder="' + phQtd + '" style="background:' + corInputF + ';border:1.5px solid ' + corInputB + ';border-radius:' + borda + ';padding:13px 16px;color:' + corInputT + ';font-size:.88rem;outline:none;width:100%;" disabled>'
        + '</div>'
        + linkField
        + '<button style="width:100%;padding:14px;background:linear-gradient(135deg,' + corBotao + ',' + corBotaoEsc + ');color:' + corTexto + ';border:none;border-radius:' + borda + ';font-size:.88rem;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;">' + icEnviar + ' ' + txtEnviar + '</button>'
        + '</div>'
        + '<button style="position:fixed;bottom:24px;right:24px;background:linear-gradient(135deg,' + corBotao + ',' + corBotaoEsc + ');color:' + corTexto + ';border:none;border-radius:50px;padding:13px 22px;font-size:.82rem;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;display:flex;align-items:center;gap:8px;">' + icBotao + ' ' + txtBotao + '</button>'
        + '</body></html>';

    var old = box.querySelector('iframe');
    if (old) old.remove();
    var iframe = document.createElement('iframe');
    iframe.style.cssText = 'width:100%;height:520px;border:none;display:block;border-radius:14px;';
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