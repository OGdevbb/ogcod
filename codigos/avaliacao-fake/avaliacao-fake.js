// =============================================================
//  OG! — avaliacoes.js
// =============================================================

const COMPONENT = {
  title:       'Avaliacoes Fake (Carrossel)',
  description: 'Secao de avaliacoes de clientes com fotos automaticas por nome, estrelas, texto, data e carrossel com botoes de navegacao. Insere antes do footer.',
  tags:        ['Avaliacoes', 'Carrossel', 'Social Proof', 'Feedback', 'CSS', 'JS', 'Gratis'],

  fields: [
    // Configuracao geral
    { id: 'tituloSecao',      label: 'Titulo da secao',           type: 'text', placeholder: 'Ex: Avaliacao de Clientes', default: 'AVALIACAO DE ALGUNS CLIENTES', required: true  },
    { id: 'notaMedia',        label: 'Nota media',                type: 'text', placeholder: 'Ex: 4.8',  default: '4.8',  required: true  },
    { id: 'totalAvaliacoes',  label: 'Total ficticio de avaliacoes', type: 'text', placeholder: 'Ex: 500', default: '500', required: true  },
    { id: 'textoData',        label: 'Texto antes da data',       type: 'text', placeholder: 'Ex: Comprou na loja em', default: 'Comprou na loja em', required: false },

    // Avaliacoes (ate 10)
    { id: 'av1Nome',     label: 'Av. 1 — Nome',     type: 'text', placeholder: 'Ex: Russo',    default: 'Russo',   required: true  },
    { id: 'av1Estrelas', label: 'Av. 1 — Estrelas (1-5)', type: 'text', placeholder: '5',    default: '5',       required: true  },
    { id: 'av1Texto',    label: 'Av. 1 — Texto',    type: 'text', placeholder: 'Ex: Otimo produto!', default: 'Velocidade impressionante, mesmo com varias abas abertas. Recomendo demais!', required: true },
    { id: 'av1Data',     label: 'Av. 1 — Data',     type: 'text', placeholder: 'Ex: 23/08/2025', default: '23/08/2025', required: false },

    { id: 'av2Nome',     label: 'Av. 2 — Nome',     type: 'text', placeholder: 'Ex: Maria',   default: 'Derick', required: false },
    { id: 'av2Estrelas', label: 'Av. 2 — Estrelas', type: 'text', placeholder: '5',           default: '5',      required: false },
    { id: 'av2Texto',    label: 'Av. 2 — Texto',    type: 'text', placeholder: 'Ex: Otimo!',  default: 'Show de bola!', required: false },
    { id: 'av2Data',     label: 'Av. 2 — Data',     type: 'text', placeholder: 'Ex: 21/08/2025', default: '21/08/2025', required: false },

    { id: 'av3Nome',     label: 'Av. 3 — Nome',     type: 'text', default: 'NandaL',  required: false },
    { id: 'av3Estrelas', label: 'Av. 3 — Estrelas', type: 'text', default: '5',       required: false },
    { id: 'av3Texto',    label: 'Av. 3 — Texto',    type: 'text', default: 'Atendeu todas as minhas necessidades!!!', required: false },
    { id: 'av3Data',     label: 'Av. 3 — Data',     type: 'text', default: '29/07/2025', required: false },

    { id: 'av4Nome',     label: 'Av. 4 — Nome',     type: 'text', default: 'Bruno',   required: false },
    { id: 'av4Estrelas', label: 'Av. 4 — Estrelas', type: 'text', default: '5',       required: false },
    { id: 'av4Texto',    label: 'Av. 4 — Texto',    type: 'text', default: 'Top dmssss! <3', required: false },
    { id: 'av4Data',     label: 'Av. 4 — Data',     type: 'text', default: '27/07/2025', required: false },

    { id: 'av5Nome',     label: 'Av. 5 — Nome',     type: 'text', default: 'Carolina', required: false },
    { id: 'av5Estrelas', label: 'Av. 5 — Estrelas', type: 'text', default: '5',        required: false },
    { id: 'av5Texto',    label: 'Av. 5 — Texto',    type: 'text', default: 'Tudo perfeito, slk!', required: false },
    { id: 'av5Data',     label: 'Av. 5 — Data',     type: 'text', default: '19/08/2025', required: false },

    { id: 'av6Nome',     label: 'Av. 6 — Nome (opcional)',  type: 'text', default: '', required: false },
    { id: 'av6Estrelas', label: 'Av. 6 — Estrelas',         type: 'text', default: '5', required: false },
    { id: 'av6Texto',    label: 'Av. 6 — Texto',            type: 'text', default: '', required: false },
    { id: 'av6Data',     label: 'Av. 6 — Data',             type: 'text', default: '', required: false },

    { id: 'av7Nome',     label: 'Av. 7 — Nome (opcional)',  type: 'text', default: '', required: false },
    { id: 'av7Estrelas', label: 'Av. 7 — Estrelas',         type: 'text', default: '5', required: false },
    { id: 'av7Texto',    label: 'Av. 7 — Texto',            type: 'text', default: '', required: false },
    { id: 'av7Data',     label: 'Av. 7 — Data',             type: 'text', default: '', required: false },

    { id: 'av8Nome',     label: 'Av. 8 — Nome (opcional)',  type: 'text', default: '', required: false },
    { id: 'av8Estrelas', label: 'Av. 8 — Estrelas',         type: 'text', default: '5', required: false },
    { id: 'av8Texto',    label: 'Av. 8 — Texto',            type: 'text', default: '', required: false },
    { id: 'av8Data',     label: 'Av. 8 — Data',             type: 'text', default: '', required: false },

    { id: 'av9Nome',     label: 'Av. 9 — Nome (opcional)',  type: 'text', default: '', required: false },
    { id: 'av9Estrelas', label: 'Av. 9 — Estrelas',         type: 'text', default: '5', required: false },
    { id: 'av9Texto',    label: 'Av. 9 — Texto',            type: 'text', default: '', required: false },
    { id: 'av9Data',     label: 'Av. 9 — Data',             type: 'text', default: '', required: false },

    { id: 'av10Nome',     label: 'Av. 10 — Nome (opcional)', type: 'text', default: '', required: false },
    { id: 'av10Estrelas', label: 'Av. 10 — Estrelas',        type: 'text', default: '5', required: false },
    { id: 'av10Texto',    label: 'Av. 10 — Texto',           type: 'text', default: '', required: false },
    { id: 'av10Data',     label: 'Av. 10 — Data',            type: 'text', default: '', required: false },

    // Visual
    { id: 'corFundo',         label: 'Cor de Fundo (rgba)',       type: 'text',  placeholder: 'rgba(20,20,20,0.2)', default: 'rgba(20,20,20,0.2)', required: false },
    { id: 'corBorda',         label: 'Cor da Borda (rgba)',       type: 'text',  placeholder: 'rgba(255,255,255,0.1)', default: 'rgba(255,255,255,0.1)', required: false },
    { id: 'blur',             label: 'Blur do fundo',             type: 'text',  placeholder: 'Ex: 15px', default: '15px', required: true  },
    { id: 'padding',          label: 'Padding da secao',          type: 'text',  placeholder: 'Ex: 60px 20px', default: '60px 20px', required: true  },
    { id: 'margin',           label: 'Margin da secao',           type: 'text',  placeholder: 'Ex: 50px auto', default: '50px auto', required: true  },
    { id: 'borderRadius',     label: 'Border Radius da secao',    type: 'text',  placeholder: 'Ex: 28px', default: '28px', required: true  },
    { id: 'maxWidth',         label: 'Largura maxima da secao',   type: 'text',  placeholder: 'Ex: 95%', default: '95%', required: true  },
    { id: 'sombra',           label: 'Sombra',                    type: 'text',  placeholder: 'Ex: 0 25px 50px rgba(0,0,0,0.5)', default: '0 25px 50px rgba(0,0,0,0.5)', required: false },
    { id: 'tamanhoTitulo',    label: 'Tamanho do titulo',         type: 'text',  placeholder: 'Ex: 2.5rem', default: '2.5rem', required: true  },
    { id: 'corTitulo',        label: 'Cor do titulo',             type: 'color', default: '#ffffff' },
    { id: 'larguraCard',      label: 'Largura minima dos cards',  type: 'text',  placeholder: 'Ex: 340px', default: '340px', required: true  },
    { id: 'gapCards',         label: 'Gap entre os cards',        type: 'text',  placeholder: 'Ex: 30px', default: '30px', required: true  },
    { id: 'corCard',          label: 'Cor de fundo dos cards (rgba)', type: 'text', placeholder: 'rgba(30,30,30,0.75)', default: 'rgba(30,30,30,0.75)', required: false },
    { id: 'corCardHoverBorda',label: 'Borda hover dos cards (rgba)', type: 'text', placeholder: 'rgba(130,90,255,0.4)', default: 'rgba(130,90,255,0.4)', required: false },
    { id: 'tamanhoFoto',      label: 'Tamanho das fotos',         type: 'text',  placeholder: 'Ex: 60px', default: '60px', required: true  },
    { id: 'corScrollbar',     label: 'Cor da scrollbar (rgba)',   type: 'text',  placeholder: 'rgba(130,90,255,0.7)', default: 'rgba(130,90,255,0.7)', required: false },
    { id: 'corBotao',         label: 'Cor dos botoes de navegacao', type: 'color', default: '#333333' },
    { id: 'corBotaoHover',    label: 'Cor dos botoes (hover)',    type: 'color', default: '#444444' },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = 'Lm9nLWZlZWRiYWNrLXNlY3Rpb24gewogIGJhY2tncm91bmQ6IHt7Y29yRnVuZG99fTsKICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoe3tibHVyfX0pOwogIGNvbG9yOiAjZmZmOwogIHBhZGRpbmc6IHt7cGFkZGluZ319OwogIG1hcmdpbjoge3ttYXJnaW59fTsKICBib3JkZXItcmFkaXVzOiB7e2JvcmRlclJhZGl1c319OwogIG1heC13aWR0aDoge3ttYXhXaWR0aH19OwogIGJveC1zaGFkb3c6IHt7c29tYnJhfX07CiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7CiAgYm9yZGVyOiAxcHggc29saWQge3tjb3JCb3JkYX19Owp9Ci5vZy1mZWVkYmFjay1zZWN0aW9uIGgyIHsKICBmb250LXNpemU6IHt7dGFtYW5ob1RpdHVsb319OwogIG1hcmdpbi1ib3R0b206IDI1cHg7CiAgdGV4dC1hbGlnbjogY2VudGVyOwogIGxldHRlci1zcGFjaW5nOiAxcHg7CiAgY29sb3I6IHt7Y29yVGl0dWxvfX07Cn0KLm9nLWZlZWRiYWNrLXN1bW1hcnkgewogIG1hcmdpbi1ib3R0b206IDQwcHg7CiAgZm9udC1zaXplOiAxcmVtOwogIGNvbG9yOiAjY2NjOwogIHRleHQtYWxpZ246IGNlbnRlcjsKfQoub2ctZmVlZGJhY2stc3VtbWFyeSBwIHsgbWFyZ2luOiA1cHggMCAxMHB4IDA7IH0KLm9nLXJldmlldy1jb3VudCB7CiAgZm9udC1zaXplOiAwLjlyZW07CiAgY29sb3I6ICM5OTk7CiAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50OwogIGZvbnQtc3R5bGU6IGl0YWxpYzsKfQoub2ctZmVlZGJhY2stbGlzdCB7CiAgZGlzcGxheTogZmxleDsKICBmbGV4LXdyYXA6IG5vd3JhcDsKICBvdmVyZmxvdy14OiBhdXRvOwogIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOwogIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5OwogIGdhcDoge3tnYXBDYXJkc319OwogIHBhZGRpbmctYm90dG9tOiAyMHB4OwogIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsKfQoub2ctZmVlZGJhY2stbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIgeyBoZWlnaHQ6IDhweDsgfQoub2ctZmVlZGJhY2stbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgewogIGJhY2tncm91bmQtY29sb3I6IHt7Y29yU2Nyb2xsYmFyfX07CiAgYm9yZGVyLXJhZGl1czogMTBweDsKfQoub2ctZmVlZGJhY2stbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7IH0KLm9nLWZlZWRiYWNrLWl0ZW0gewogIGZsZXgtc2hyaW5rOiAwOwogIG1pbi13aWR0aDoge3tsYXJndXJhQ2FyZH19OwogIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDsKICBiYWNrZ3JvdW5kOiB7e2NvckNhcmR9fTsKICBwYWRkaW5nOiAyNXB4OwogIGJvcmRlci1yYWRpdXM6IDIycHg7CiAgYm94LXNoYWRvdzogMCAxMHB4IDM1cHggcmdiYSgwLDAsMCwwLjQpOwogIGRpc3BsYXk6IGZsZXg7CiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZSwgYmFja2dyb3VuZCAwLjNzIGVhc2U7CiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTsKICBib3gtc2l6aW5nOiBib3JkZXItYm94Owp9Ci5vZy1mZWVkYmFjay1pdGVtOmhvdmVyIHsKICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpOwogIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwwLDAsMC42KTsKICBiYWNrZ3JvdW5kOiByZ2JhKDQwLDQwLDQwLDAuODUpOwogIGJvcmRlcjogMXB4IHNvbGlkIHt7Y29yQ2FyZEhvdmVyQm9yZGF9fTsKICBib3JkZXItcmFkaXVzOiAyOHB4OwogIHotaW5kZXg6IDU7Cn0KLm9nLWZlZWRiYWNrLXVzZXIgewogIGRpc3BsYXk6IGZsZXg7CiAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICBnYXA6IDE0cHg7CiAgbWFyZ2luLWJvdHRvbTogMTJweDsKfQoub2ctZmVlZGJhY2stdXNlciBpbWcgewogIHdpZHRoOiB7e3RhbWFuaG9Gb3RvfX07CiAgaGVpZ2h0OiB7e3RhbWFuaG9Gb3RvfX07CiAgYm9yZGVyLXJhZGl1czogNTAlOwogIG9iamVjdC1maXQ6IGNvdmVyOwogIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLDAsMCwwLjMpOwp9Ci5vZy1mZWVkYmFjay11c2VyIHNwYW4gewogIGZvbnQtd2VpZ2h0OiA2MDA7CiAgZm9udC1zaXplOiAxLjFyZW07CiAgY29sb3I6ICNmZmY7Cn0KLm9nLWZlZWRiYWNrLXJhdGluZyB7CiAgbWFyZ2luLXRvcDogMTBweDsKICBmb250LXNpemU6IDEuNXJlbTsKICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTsKfQoub2ctZmVlZGJhY2stcmF0aW5nOmhvdmVyIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9Ci5vZy1mZWVkYmFjay10ZXh0IHsKICBtYXJnaW4tdG9wOiAxNXB4OwogIGZvbnQtc2l6ZTogMXJlbTsKICBjb2xvcjogI2VlZTsKICBsaW5lLWhlaWdodDogMS42OwogIHRleHQtYWxpZ246IGNlbnRlcjsKICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7CiAgZmxleC1ncm93OiAxOwogIG92ZXJmbG93OiBoaWRkZW47CiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7CiAgZGlzcGxheTogLXdlYmtpdC1ib3g7CiAgLXdlYmtpdC1saW5lLWNsYW1wOiA0OwogIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7Cn0KLm9nLWZlZWRiYWNrLWRhdGUgewogIG1hcmdpbi10b3A6IGF1dG87CiAgZm9udC1zaXplOiAwLjg1cmVtOwogIGNvbG9yOiAjYWFhOwogIGZvbnQtc3R5bGU6IGl0YWxpYzsKICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgcGFkZGluZy10b3A6IDEycHg7CiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4Owp9Ci5vZy1jYXJvdXNlbC1jb250cm9scyB7CiAgZGlzcGxheTogZmxleDsKICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICBnYXA6IDMwcHg7CiAgbWFyZ2luLXRvcDogMzBweDsKfQoub2ctY2Fyb3VzZWwtYXJyb3cgewogIGJhY2tncm91bmQtY29sb3I6IHt7Y29yQm90YW99fTsKICBjb2xvcjogI2ZmZjsKICBib3JkZXI6IG5vbmU7CiAgYm9yZGVyLXJhZGl1czogOHB4OwogIHdpZHRoOiA1MHB4OwogIGhlaWdodDogNTBweDsKICBmb250LXNpemU6IDEuMnJlbTsKICBjdXJzb3I6IHBvaW50ZXI7CiAgZGlzcGxheTogZmxleDsKICBhbGlnbi1pdGVtczogY2VudGVyOwogIGp1c3RpZnktY29udGVudDogY2VudGVyOwogIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlOwogIG91dGxpbmU6IG5vbmU7Cn0KLm9nLWNhcm91c2VsLWFycm93OmhvdmVyIHsKICBiYWNrZ3JvdW5kLWNvbG9yOiB7e2NvckJvdGFvSG92ZXJ9fTsKICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOwp9Ci5vZy1jYXJvdXNlbC1hcnJvdzpkaXNhYmxlZCB7CiAgb3BhY2l0eTogMC42OwogIGJhY2tncm91bmQtY29sb3I6ICMyMjI7CiAgY3Vyc29yOiBub3QtYWxsb3dlZDsKICB0cmFuc2Zvcm06IG5vbmU7Cn0KQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7CiAgLm9nLWNhcm91c2VsLWNvbnRyb2xzIHsgZGlzcGxheTogbm9uZTsgfQogIC5vZy1mZWVkYmFjay1pdGVtIHsgbWluLXdpZHRoOiBjYWxjKDEwMHZ3IC0gNjBweCk7IH0KICAub2ctZmVlZGJhY2stbGlzdCB7IGdhcDogMTVweDsgcGFkZGluZy1sZWZ0OiAyMHB4OyBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9CiAgLm9nLWZlZWRiYWNrLXNlY3Rpb24gaDIgeyBmb250LXNpemU6IDJyZW07IH0KICAub2ctZmVlZGJhY2staXRlbSB7IHBhZGRpbmc6IDIwcHg7IH0KICAub2ctZmVlZGJhY2stdXNlciBpbWcgeyB3aWR0aDogNTBweDsgaGVpZ2h0OiA1MHB4OyB9Cn0KQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7CiAgLm9nLWZlZWRiYWNrLWl0ZW0geyBtaW4td2lkdGg6IDM1MHB4OyB9CiAgLm9nLWZlZWRiYWNrLXNlY3Rpb24geyBwYWRkaW5nOiA0MHB4IDE1cHg7IH0KfQpAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7CiAgLm9nLWZlZWRiYWNrLWl0ZW0geyBtaW4td2lkdGg6IDMyMHB4OyB9Cn0=';
const BASE_JS_B64   = 'KGZ1bmN0aW9uICgpIHsKICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9nLWZlZWRiYWNrLXNlY3Rpb24nKSkgcmV0dXJuOwoKICAvKiDilIDilIAgRk9UT1Mg4pSA4pSAICovCiAgdmFyIG9nRm90b3NNYXNjID0gWwogICAgJ2h0dHBzOi8vaS5waW5pbWcuY29tLzU2NHgvMTkvMzAvYjcvMTkzMGI3MTZkOGM0YjJiMDdlNGU5MWE4MjZjNDEwOWMuanBnJywKICAgICdodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9mZWF0dXJlZC9pbWFnZW5zLWRlLXBvc2UtZGUtbWVuaW5vLXVhYzgxOWZwbDRrZzZjdzMuanBnJywKICAgICdodHRwczovL2kucGluaW1nLmNvbS8xMjAweC9iOS85Zi9jMS9iOTlmYzE1NzljZTFmMjgwMzllMGYyN2I5Yzc2ZDE4OC5qcGcnLAogICAgJ2h0dHBzOi8vaS5waW5pbWcuY29tLzczNngvNjEvOTkvNGEvNjE5OTRhMmU5ZDBkMWY4Y2UzNmJmZDkxNTdmOTI2NGEuanBnJwogIF07CiAgdmFyIG9nRm90b3NGZW0gPSBbCiAgICAnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjEyMTEyMi9wZXhlbHMtcGhvdG8tMjEyMTEyMi5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDAnLAogICAgJ2h0dHBzOi8vaS5waW5pbWcuY29tLzczNngvMTMvODIvZDIvMTM4MmQyZTdjNjY4ZWVlYjEwNjg1YzhmNDFlODUwZWUuanBnJwogIF07CiAgdmFyIG9nRm90b3NOZXV0cm8gPSBbCiAgICAnaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzL2ZlL2YxL2I4L2ZlZjFiODFjYmY5ZDg5YjA1ZThjOTlmZmMwNGVmZWUzLmpwZycKICBdOwoKICB2YXIgb2dVc2Fkb3NNYXNjID0ge30sIG9nVXNhZG9zRmVtID0ge30sIG9nVXNhZG9zTmV1dHJvID0ge307CgogIGZ1bmN0aW9uIG9nRm90b1VuaWNhKGxpc3RhLCB1c2Fkb3MpIHsKICAgIHZhciBkaXNwID0gbGlzdGEuZmlsdGVyKGZ1bmN0aW9uKHUpeyByZXR1cm4gIXVzYWRvc1t1XTsgfSk7CiAgICBpZiAoIWRpc3AubGVuZ3RoKSByZXR1cm4gbGlzdGFbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGlzdGEubGVuZ3RoKV07CiAgICB2YXIgZXNjb2xoYSA9IGRpc3BbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGlzcC5sZW5ndGgpXTsKICAgIHVzYWRvc1tlc2NvbGhhXSA9IHRydWU7CiAgICByZXR1cm4gZXNjb2xoYTsKICB9CgogIGZ1bmN0aW9uIG9nRm90b1Bvck5vbWUobm9tZSkgewogICAgdmFyIGZpbSA9IG5vbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkuc2xpY2UoLTEpOwogICAgaWYgKFsnYScsJ2UnLCdpJ10uaW5kZXhPZihmaW0pICE9PSAtMSkgewogICAgICByZXR1cm4gb2dGb3RvVW5pY2Eob2dGb3Rvc0ZlbSwgb2dVc2Fkb3NGZW0pIHx8IG9nRm90b1VuaWNhKG9nRm90b3NOZXV0cm8sIG9nVXNhZG9zTmV1dHJvKTsKICAgIH0KICAgIHJldHVybiBvZ0ZvdG9VbmljYShvZ0ZvdG9zTWFzYywgb2dVc2Fkb3NNYXNjKSB8fCBvZ0ZvdG9VbmljYShvZ0ZvdG9zTmV1dHJvLCBvZ1VzYWRvc05ldXRybyk7CiAgfQoKICAvKiDilIDilIAgQVZBTElBw4fDlUVTIOKUgOKUgCAqLwogIHZhciBvZ0ZlZWRiYWNrcyA9IFsKICAgIC8qIElGOmF2MU5vbWUgKi97IG5vbWU6ICd7e2F2MU5vbWV9fScsIGVzdHJlbGFzOiB7e2F2MUVzdHJlbGFzfX0sIHRleHRvOiAne3thdjFUZXh0b319JywgZGF0YTogJ3t7YXYxRGF0YX19JyB9LC8qIEVORElGICovCiAgICAvKiBJRjphdjJOb21lICoveyBub21lOiAne3thdjJOb21lfX0nLCBlc3RyZWxhczoge3thdjJFc3RyZWxhc319LCB0ZXh0bzogJ3t7YXYyVGV4dG99fScsIGRhdGE6ICd7e2F2MkRhdGF9fScgfSwvKiBFTkRJRiAqLwogICAgLyogSUY6YXYzTm9tZSAqL3sgbm9tZTogJ3t7YXYzTm9tZX19JywgZXN0cmVsYXM6IHt7YXYzRXN0cmVsYXN9fSwgdGV4dG86ICd7e2F2M1RleHRvfX0nLCBkYXRhOiAne3thdjNEYXRhfX0nIH0sLyogRU5ESUYgKi8KICAgIC8qIElGOmF2NE5vbWUgKi97IG5vbWU6ICd7e2F2NE5vbWV9fScsIGVzdHJlbGFzOiB7e2F2NEVzdHJlbGFzfX0sIHRleHRvOiAne3thdjRUZXh0b319JywgZGF0YTogJ3t7YXY0RGF0YX19JyB9LC8qIEVORElGICovCiAgICAvKiBJRjphdjVOb21lICoveyBub21lOiAne3thdjVOb21lfX0nLCBlc3RyZWxhczoge3thdjVFc3RyZWxhc319LCB0ZXh0bzogJ3t7YXY1VGV4dG99fScsIGRhdGE6ICd7e2F2NURhdGF9fScgfSwvKiBFTkRJRiAqLwogICAgLyogSUY6YXY2Tm9tZSAqL3sgbm9tZTogJ3t7YXY2Tm9tZX19JywgZXN0cmVsYXM6IHt7YXY2RXN0cmVsYXN9fSwgdGV4dG86ICd7e2F2NlRleHRvfX0nLCBkYXRhOiAne3thdjZEYXRhfX0nIH0sLyogRU5ESUYgKi8KICAgIC8qIElGOmF2N05vbWUgKi97IG5vbWU6ICd7e2F2N05vbWV9fScsIGVzdHJlbGFzOiB7e2F2N0VzdHJlbGFzfX0sIHRleHRvOiAne3thdjdUZXh0b319JywgZGF0YTogJ3t7YXY3RGF0YX19JyB9LC8qIEVORElGICovCiAgICAvKiBJRjphdjhOb21lICoveyBub21lOiAne3thdjhOb21lfX0nLCBlc3RyZWxhczoge3thdjhFc3RyZWxhc319LCB0ZXh0bzogJ3t7YXY4VGV4dG99fScsIGRhdGE6ICd7e2F2OERhdGF9fScgfSwvKiBFTkRJRiAqLwogICAgLyogSUY6YXY5Tm9tZSAqL3sgbm9tZTogJ3t7YXY5Tm9tZX19JywgZXN0cmVsYXM6IHt7YXY5RXN0cmVsYXN9fSwgdGV4dG86ICd7e2F2OVRleHRvfX0nLCBkYXRhOiAne3thdjlEYXRhfX0nIH0sLyogRU5ESUYgKi8KICAgIC8qIElGOmF2MTBOb21lICoveyBub21lOiAne3thdjEwTm9tZX19JywgZXN0cmVsYXM6IHt7YXYxMEVzdHJlbGFzfX0sIHRleHRvOiAne3thdjEwVGV4dG99fScsIGRhdGE6ICd7e2F2MTBEYXRhfX0nIH0sLyogRU5ESUYgKi8KICBdLmZpbHRlcihCb29sZWFuKTsKCiAgaWYgKCFvZ0ZlZWRiYWNrcy5sZW5ndGgpIHJldHVybjsKCiAgdmFyIG9nVG90YWwgPSB7e3RvdGFsQXZhbGlhY29lc319OwogIHZhciBvZ05vdGEgID0gJ3t7bm90YU1lZGlhfX0nOwogIHZhciBvZ1RpdHVsbyA9ICd7e3RpdHVsb1NlY2FvfX0nOwogIHZhciBvZ1RleHRvRGF0YSA9ICd7e3RleHRvRGF0YX19JzsKCiAgLyog4pSA4pSAIENSSUEgU0XDh8ODTyDilIDilIAgKi8KICB2YXIgc2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpOwogIHNlYy5jbGFzc05hbWUgPSAnb2ctZmVlZGJhY2stc2VjdGlvbic7CgogIHZhciBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7CiAgaDIudGV4dENvbnRlbnQgPSBvZ1RpdHVsbzsKICBzZWMuYXBwZW5kQ2hpbGQoaDIpOwoKICB2YXIgc3VtbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogIHN1bW0uY2xhc3NOYW1lID0gJ29nLWZlZWRiYWNrLXN1bW1hcnknOwogIHN1bW0uaW5uZXJIVE1MID0KICAgICc8c3BhbiBjbGFzcz0ib2ctcmF0aW5nIj4mIzExMDg4OyYjMTEwODg7JiMxMTA4ODsmIzExMDg4OyYjMTEwODg7PC9zcGFuPicgKwogICAgJzxwPicgKyBvZ05vdGEgKyAnIGRlIDUgKCcgKyBvZ0ZlZWRiYWNrcy5sZW5ndGggKyAnIGF2YWxpYVx1MDBlN1x1MDBmNWVzKTwvcD4nICsKICAgICc8cCBjbGFzcz0ib2ctcmV2aWV3LWNvdW50Ij5FeGliaW5kbyAnICsgb2dGZWVkYmFja3MubGVuZ3RoICsgJyBhdmFsaWFcdTAwZTdcdTAwZjVlcyBkZSAnICsgb2dUb3RhbCArICcgZGlzcG9uXHUwMGVkdmVpczwvcD4nOwogIHNlYy5hcHBlbmRDaGlsZChzdW1tKTsKCiAgdmFyIGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICBsaXN0LmNsYXNzTmFtZSA9ICdvZy1mZWVkYmFjay1saXN0JzsKCiAgb2dGZWVkYmFja3MuZm9yRWFjaChmdW5jdGlvbihmKSB7CiAgICB2YXIgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgaXRlbS5jbGFzc05hbWUgPSAnb2ctZmVlZGJhY2staXRlbSc7CgogICAgdmFyIGVzdHJlbGFzID0gJyc7CiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGYuZXN0cmVsYXM7IGkrKykgZXN0cmVsYXMgKz0gJyYjMTEwODg7JzsKICAgIGZvciAodmFyIGogPSBmLmVzdHJlbGFzOyBqIDwgNTsgaisrKSBlc3RyZWxhcyArPSAnJiM5NzM0Oyc7CgogICAgaXRlbS5pbm5lckhUTUwgPQogICAgICAnPGRpdiBjbGFzcz0ib2ctZmVlZGJhY2stdXNlciI+JyArCiAgICAgICAgJzxpbWcgc3JjPSInICsgb2dGb3RvUG9yTm9tZShmLm5vbWUpICsgJyIgYWx0PSInICsgZi5ub21lICsgJyIgbG9hZGluZz0ibGF6eSI+JyArCiAgICAgICAgJzxzcGFuPicgKyBmLm5vbWUgKyAnPC9zcGFuPicgKwogICAgICAnPC9kaXY+JyArCiAgICAgICc8ZGl2IGNsYXNzPSJvZy1mZWVkYmFjay1yYXRpbmciPicgKyBlc3RyZWxhcyArICc8L2Rpdj4nICsKICAgICAgJzxwIGNsYXNzPSJvZy1mZWVkYmFjay10ZXh0Ij4nICsgZi50ZXh0byArICc8L3A+JyArCiAgICAgICc8c21hbGwgY2xhc3M9Im9nLWZlZWRiYWNrLWRhdGUiPicgKyBvZ1RleHRvRGF0YSArICcgJyArIGYuZGF0YSArICc8L3NtYWxsPic7CgogICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTsKICB9KTsKICBzZWMuYXBwZW5kQ2hpbGQobGlzdCk7CgogIHZhciBjb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogIGNvbnRyb2xzLmNsYXNzTmFtZSA9ICdvZy1jYXJvdXNlbC1jb250cm9scyc7CiAgdmFyIHByZXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsKICBwcmV2QnRuLmlkID0gJ29nLXByZXYtYnRuJzsgcHJldkJ0bi5jbGFzc05hbWUgPSAnb2ctY2Fyb3VzZWwtYXJyb3cnOwogIHByZXZCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsJycpOyBwcmV2QnRuLnRleHRDb250ZW50ID0gJ1x1MjE5MCc7CiAgdmFyIG5leHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsKICBuZXh0QnRuLmlkID0gJ29nLW5leHQtYnRuJzsgbmV4dEJ0bi5jbGFzc05hbWUgPSAnb2ctY2Fyb3VzZWwtYXJyb3cnOwogIG5leHRCdG4udGV4dENvbnRlbnQgPSAnXHUyMTkyJzsKICBjb250cm9scy5hcHBlbmRDaGlsZChwcmV2QnRuKTsgY29udHJvbHMuYXBwZW5kQ2hpbGQobmV4dEJ0bik7CiAgc2VjLmFwcGVuZENoaWxkKGNvbnRyb2xzKTsKCiAgdmFyIGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpOwogIGlmIChmb290ZXIgJiYgZm9vdGVyLnBhcmVudE5vZGUpIHsgZm9vdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlYywgZm9vdGVyKTsgfQogIGVsc2UgeyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlYyk7IH0KCiAgLyog4pSA4pSAIENBUlJPU1NFTCDilIDilIAgKi8KICBmdW5jdGlvbiBvZ1VwZGF0ZUJ0bnMoKSB7CiAgICBwcmV2QnRuLmRpc2FibGVkID0gbGlzdC5zY3JvbGxMZWZ0IDw9IDU7CiAgICBuZXh0QnRuLmRpc2FibGVkID0gbGlzdC5zY3JvbGxMZWZ0ID49IGxpc3Quc2Nyb2xsV2lkdGggLSBsaXN0LmNsaWVudFdpZHRoIC0gNTsKICB9CiAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkgewogICAgdmFyIHcgPSAobGlzdC5xdWVyeVNlbGVjdG9yKCcub2ctZmVlZGJhY2staXRlbScpLm9mZnNldFdpZHRoIHx8IDM0MCkgKyAzMDsKICAgIGxpc3Quc2Nyb2xsQnkoeyBsZWZ0OiB3LCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7CiAgICBzZXRUaW1lb3V0KG9nVXBkYXRlQnRucywgMzUwKTsKICB9KTsKICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7CiAgICB2YXIgdyA9IChsaXN0LnF1ZXJ5U2VsZWN0b3IoJy5vZy1mZWVkYmFjay1pdGVtJykub2Zmc2V0V2lkdGggfHwgMzQwKSArIDMwOwogICAgbGlzdC5zY3JvbGxCeSh7IGxlZnQ6IC13LCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7CiAgICBzZXRUaW1lb3V0KG9nVXBkYXRlQnRucywgMzUwKTsKICB9KTsKICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9nVXBkYXRlQnRucyk7CiAgb2dVcGRhdGVCdG5zKCk7Cn0pKCk7';

// =============================================================
//  ENGINE — não mexa abaixo desta linha
// =============================================================

// Decodifica base64 → string (suporte a UTF-8)
function b64decode(str) {
  if (!str) return '';
  try {
    return decodeURIComponent(
      atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join('')
    );
  } catch(e) {
    return atob(str);
  }
}

const BASE_HTML = b64decode(BASE_HTML_B64);
const BASE_CSS  = b64decode(BASE_CSS_B64);
const BASE_JS   = b64decode(BASE_JS_B64);

// ── Cursor ───────────────────────────────────────────────────
const oC = document.getElementById('ogC');
const oR = document.getElementById('ogR');
var mx = -200, my = -200, rx = -200, ry = -200, cvis = false;

document.addEventListener('mousemove', function(e) {
  mx = e.clientX; my = e.clientY;
  oC.style.left = mx + 'px'; oC.style.top = my + 'px';
  if (!cvis) { oC.style.opacity = '1'; oR.style.opacity = '0.5'; cvis = true; }
});
document.addEventListener('mouseleave', function() {
  oC.style.opacity = oR.style.opacity = '0'; cvis = false;
});
(function tick() {
  rx += (mx - rx) * .13; ry += (my - ry) * .13;
  oR.style.left = rx + 'px'; oR.style.top = ry + 'px';
  requestAnimationFrame(tick);
})();

function hover(els) {
  els.forEach(function(el) {
    el.addEventListener('mouseenter', function() { oC.style.width = oC.style.height = '20px'; oR.style.width = oR.style.height = '56px'; });
    el.addEventListener('mouseleave', function() { oC.style.width = oC.style.height = '12px'; oR.style.width = oR.style.height = '36px'; });
  });
}
hover(document.querySelectorAll('a, button'));

// ── Metadados ────────────────────────────────────────────────
document.getElementById('bcTitle').textContent  = COMPONENT.title;
document.getElementById('compH1').textContent   = COMPONENT.title;
document.getElementById('compDesc').textContent = COMPONENT.description;
COMPONENT.tags.forEach(function(t) {
  var s = document.createElement('span');
  s.className = 'ctag' + (t === 'Grátis' ? ' hl' : '');
  s.textContent = t;
  document.getElementById('compTags').appendChild(s);
});

// ── Renderiza campos ─────────────────────────────────────────
var fw = document.getElementById('fieldsWrap');

COMPONENT.fields.forEach(function(f) {
  var g = document.createElement('div');
  g.className = 'field-group';
  g.dataset.fid = f.id;

  var lb = document.createElement('label');
  lb.className = 'field-lbl';
  lb.textContent = f.label + (f.required ? ' *' : '');

  if (f.type === 'color' && f.default && f.default.indexOf('rgba') === -1) {
    var cw  = document.createElement('div');   cw.className = 'color-wrap';
    var nat = document.createElement('input'); nat.type = 'color'; nat.className = 'color-native'; nat.value = f.default; nat.id = 'f_' + f.id;
    var sw  = document.createElement('div');   sw.className = 'color-swatch'; sw.style.background = f.default;
    var hx  = document.createElement('input'); hx.type = 'text'; hx.className = 'color-hex'; hx.value = f.default; hx.maxLength = 7;

    sw.onclick = function() { nat.click(); };
    hx.onclick = function() { nat.click(); };
    nat.oninput = function() { sw.style.background = nat.value; hx.value = nat.value; renderPreview(); };
    hx.oninput  = function() { if (/^#[0-9a-fA-F]{6}$/.test(hx.value)) { nat.value = hx.value; sw.style.background = hx.value; renderPreview(); } };

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
  COMPONENT.fields.forEach(function(f) {
    var el = document.getElementById('f_' + f.id);
    v[f.id] = el ? el.value.trim() : '';
  });
  return v;
}

// ── Validação ────────────────────────────────────────────────
function validate(v) {
  var ok = true;
  COMPONENT.fields.forEach(function(f) {
    if (!f.required) return;
    var inp = document.getElementById('f_' + f.id);
    var er  = fw.querySelector('[data-fid="' + f.id + '"] .field-err');
    if (!v[f.id]) {
      if (inp) inp.classList.add('has-err');
      if (er)  er.classList.add('show');
      ok = false;
      if (inp) inp.addEventListener('input', function() {
        if (inp.value.trim()) { inp.classList.remove('has-err'); if (er) er.classList.remove('show'); }
      }, { once: true });
    } else {
      if (inp) inp.classList.remove('has-err');
      if (er)  er.classList.remove('show');
    }
  });
  return ok;
}

// ── Template engine ──────────────────────────────────────────
function process(tpl, v) {
  var c = tpl.replace(/\/\* IF:(\w+) \*\/([\s\S]*?)\/\* ENDIF \*\//g, function(_, k, b) { return v[k] ? b : ''; });
  c = c.replace(/\{\{(\w+)\}\}/g, function(_, k) { return v[k] || ''; });
  return c.replace(/\n{3,}/g, '\n\n').trim();
}

// ── Preview ao vivo ───────────────────────────────────────────
function renderPreview() {
  var v   = getVals();
  var box = document.getElementById('previewBox');

  var corFundo   = v.corFundo     || 'rgba(20,20,20,0.5)';
  var corBorda   = v.corBorda     || 'rgba(255,255,255,0.1)';
  var blur       = v.blur         || '15px';
  var radius     = v.borderRadius || '28px';
  var corCard    = v.corCard      || 'rgba(30,30,30,0.75)';
  var corHovB    = v.corCardHoverBorda || 'rgba(130,90,255,0.4)';
  var corTitulo  = v.corTitulo    || '#ffffff';
  var tamTitulo  = v.tamanhoTitulo|| '2rem';
  var largCard   = v.larguraCard  || '280px';
  var gapCards   = v.gapCards     || '20px';
  var tamFoto    = v.tamanhoFoto  || '50px';
  var corScroll  = v.corScrollbar || 'rgba(130,90,255,0.7)';
  var corBtn     = v.corBotao     || '#333';
  var corBtnH    = v.corBotaoHover|| '#444';
  var titulo     = v.tituloSecao  || 'AVALIACAO DE CLIENTES';
  var nota       = v.notaMedia    || '4.8';
  var textoData  = v.textoData    || 'Comprou na loja em';

  // Coleta avaliacoes preenchidas
  var avs = [];
  for (var i = 1; i <= 10; i++) {
    var nm = v['av' + i + 'Nome'];
    var es = parseInt(v['av' + i + 'Estrelas'] || '5');
    var tx = v['av' + i + 'Texto'] || '';
    var dt = v['av' + i + 'Data'] || '';
    if (nm) avs.push({ nome: nm, estrelas: es, texto: tx, data: dt });
  }
  if (!avs.length) avs = [
    { nome: 'Russo',    estrelas: 5, texto: 'Velocidade impressionante! Recomendo demais.', data: '23/08/2025' },
    { nome: 'NandaL',   estrelas: 5, texto: 'Atendeu todas as minhas necessidades!!!',       data: '29/07/2025' },
    { nome: 'Carolina', estrelas: 5, texto: 'Tudo perfeito, slk!',                           data: '19/08/2025' },
  ];

  var fotos = [
    'https://i.pinimg.com/564x/19/30/b7/1930b716d8c4b2b07e4e91a826c4109c.jpg',
    'https://images.pexels.com/photos/2121122/pexels-photo-2121122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
    'https://i.pinimg.com/1200x/b9/9f/c1/b99fc1579ce1f28039e0f27b9c76d188.jpg',
    'https://i.pinimg.com/736x/13/82/d2/1382d2e7c668eeeb10685c8f41e850ee.jpg',
  ];

  var cardsHTML = avs.map(function(a, idx) {
    var foto = fotos[idx % fotos.length];
    var ests = '';
    for (var s = 0; s < a.estrelas; s++) ests += '&#11088;';
    for (var u = a.estrelas; u < 5; u++) ests += '&#9734;';
    return '<div style="flex-shrink:0;min-width:' + largCard + ';background:' + corCard + ';padding:18px;border-radius:18px;border:1px solid rgba(255,255,255,0.06);display:flex;flex-direction:column;gap:8px;">'
      + '<div style="display:flex;align-items:center;gap:10px;">'
        + '<img src="' + foto + '" style="width:' + tamFoto + ';height:' + tamFoto + ';border-radius:50%;object-fit:cover;" loading="lazy">'
        + '<span style="color:#fff;font-weight:600;font-size:.95rem;">' + a.nome + '</span>'
      + '</div>'
      + '<div style="font-size:1.1rem;text-align:center;">' + ests + '</div>'
      + '<p style="color:#eee;font-size:.85rem;line-height:1.5;text-align:center;margin:0;">' + a.texto + '</p>'
      + '<small style="color:#999;font-style:italic;font-size:.75rem;text-align:center;">' + textoData + ' ' + a.data + '</small>'
      + '</div>';
  }).join('');

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>*{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,sans-serif;}'
    + 'body{background:#111;padding:0;}'
    + '.sec{background:' + corFundo + ';backdrop-filter:blur(' + blur + ');border-radius:' + radius + ';border:1px solid ' + corBorda + ';padding:32px 20px;}'
    + '.list{display:flex;gap:' + gapCards + ';overflow-x:auto;padding-bottom:12px;scroll-snap-type:x mandatory;}'
    + '.list::-webkit-scrollbar{height:6px;}'
    + '.list::-webkit-scrollbar-thumb{background:' + corScroll + ';border-radius:10px;}'
    + '.btns{display:flex;justify-content:center;gap:20px;margin-top:20px;}'
    + '.btn{background:' + corBtn + ';color:#fff;border:none;border-radius:8px;width:40px;height:40px;font-size:1rem;cursor:pointer;}'
    + '</style></head><body>'
    + '<div class="sec">'
      + '<h2 style="text-align:center;color:' + corTitulo + ';font-size:' + tamTitulo + ';margin-bottom:8px;">' + titulo + '</h2>'
      + '<p style="text-align:center;color:#ccc;font-size:.9rem;margin-bottom:20px;">' + nota + ' de 5 (' + avs.length + ' avaliacoes)</p>'
      + '<div class="list">' + cardsHTML + '</div>'
      + '<div class="btns"><button class="btn">&larr;</button><button class="btn">&rarr;</button></div>'
    + '</div>'
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
var modal   = document.getElementById('modal');
var codePre = document.getElementById('codePre');
var copyBtn = document.getElementById('copyBtn');
var curTab  = 'html';
var gen     = { html: '', css: '', js: '' };

document.getElementById('genBtn').onclick = function() {
  var v = getVals();
  if (!validate(v)) return;

  gen.html = process(BASE_HTML, v);
  gen.css  = process(BASE_CSS,  v);
  gen.js   = process(BASE_JS,   v);

  var firstFilled = ['html', 'css', 'js'].find(function(t) { return gen[t].length > 0; }) || 'html';

  document.querySelectorAll('.code-tab').forEach(function(t) {
    t.classList.toggle('filled', gen[t.dataset.tab].length > 0);
  });
  showTab(firstFilled);
  modal.classList.add('open');
};

function showTab(tab) {
  curTab = tab;
  document.querySelectorAll('.code-tab').forEach(function(t) { t.classList.toggle('active', t.dataset.tab === tab); });
  var code = gen[tab];
  if (!code) {
    codePre.innerHTML = '<div class="empty-state"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>Nenhum código ' + tab.toUpperCase() + ' para este componente.</div>';
    copyBtn.style.display = 'none';
    return;
  }
  codePre.textContent = code;
  copyBtn.style.display = 'inline-flex';
}

document.querySelectorAll('.code-tab').forEach(function(t) { t.onclick = function() { showTab(t.dataset.tab); }; });
document.getElementById('modalClose').onclick = function() { modal.classList.remove('open'); };
modal.onclick = function(e) { if (e.target === modal) modal.classList.remove('open'); };
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') modal.classList.remove('open'); });

copyBtn.onclick = function() {
  navigator.clipboard.writeText(gen[curTab]).then(function() {
    copyBtn.classList.add('copied');
    copyBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copiado!';
    setTimeout(function() {
      copyBtn.classList.remove('copied');
      copyBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copiar';
    }, 2000);
  });
};

// ── Init ─────────────────────────────────────────────────────
renderPreview();