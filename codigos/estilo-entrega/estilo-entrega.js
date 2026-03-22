// =============================================================
//  OG! — entrega-produto.js
// =============================================================

const COMPONENT = {
  title:       'Modal de Entrega de Produto',
  description: 'Intercepta o botao "Ver produto" e exibe um painel customizado com as credenciais, link ou conteudo entregue. Suporta email/senha, PIN, links e texto livre.',
  tags:        ['Modal', 'Entrega', 'Credenciais', 'CSS', 'JS', 'Gratis'],

  fields: [
    // Textos
    { id: 'tituloPainel', label: 'Titulo do painel',       type: 'text', placeholder: 'Ex: Entrega do produto', default: 'Entrega do produto', required: true  },
    { id: 'textoRodape',  label: 'Texto do rodape',        type: 'text', placeholder: 'Ex: Guarde suas informacoes...', default: 'Guarde suas informacoes em local seguro.', required: false },

    // Overlay
    { id: 'corOverlay',   label: 'Cor do Overlay (rgba)', type: 'text',  placeholder: 'Ex: rgba(0,0,0,.55)', default: 'rgba(0,0,0,.55)', required: false },

    // Painel
    { id: 'corPainel',      label: 'Cor de Fundo do Painel',  type: 'color', default: '#0f1117' },
    { id: 'corBordaPainel', label: 'Cor da Borda do Painel (hex/rgba)', type: 'text', placeholder: 'Ex: #2a2d3a', default: '#2a2d3a', required: false },
    { id: 'borderRadius',   label: 'Border Radius do Painel', type: 'text', placeholder: 'Ex: 16px', default: '16px', required: true  },
    { id: 'larguraMaxima',  label: 'Largura maxima do Painel',type: 'text', placeholder: 'Ex: 460px', default: '460px', required: true  },
    { id: 'sombraPainel',   label: 'Sombra do Painel',        type: 'text', placeholder: 'Ex: 0 24px 60px rgba(0,0,0,.6)', default: '0 24px 60px rgba(0,0,0,.6)', required: false },

    // Textos do painel
    { id: 'corTitulo',      label: 'Cor do Titulo',            type: 'color', default: '#ffffff' },
    { id: 'corTexto',       label: 'Cor do Texto Padrao',      type: 'color', default: '#e8eaf0' },
    { id: 'corNomeProduto', label: 'Cor do Nome do Produto',   type: 'color', default: '#8b8fa8' },
    { id: 'corLabels',      label: 'Cor dos Labels (LOGIN/SENHA/etc)', type: 'color', default: '#555b78' },
    { id: 'corValores',     label: 'Cor dos Valores',          type: 'color', default: '#e8eaf0' },
    { id: 'corDivisor',     label: 'Cor das Linhas Divisorias (hex)', type: 'text', placeholder: 'Ex: #1e2130', default: '#1e2130', required: false },
    { id: 'corRodape',      label: 'Cor do Rodape',            type: 'color', default: '#444a62' },
    { id: 'corBotaoFechar', label: 'Cor do Botao Fechar (X)',  type: 'color', default: '#666666' },

    // Botao copiar
    { id: 'corBotaoCopiar',          label: 'Cor Texto Botao Copiar',       type: 'color', default: '#7c83ff' },
    { id: 'corFundoBotaoCopiar',     label: 'Cor Fundo Botao Copiar (rgba)', type: 'text', placeholder: 'Ex: rgba(124,131,255,.1)', default: 'rgba(124,131,255,.1)', required: false },
    { id: 'corBordaBotaoCopiar',     label: 'Cor Borda Botao Copiar (rgba)', type: 'text', placeholder: 'Ex: rgba(124,131,255,.25)', default: 'rgba(124,131,255,.25)', required: false },
    { id: 'corFundoBotaoCopiarHover',label: 'Cor Fundo Botao Copiar Hover (rgba)', type: 'text', default: 'rgba(124,131,255,.2)', required: false },
    { id: 'corTextoBotaoCopiarHover',label: 'Cor Texto Botao Copiar Hover', type: 'color', default: '#a5aaff' },
    { id: 'corCopiado',              label: 'Cor Texto Apos Copiar',         type: 'color', default: '#4cde8a' },
    { id: 'corFundoCopiado',         label: 'Cor Fundo Apos Copiar (rgba)',  type: 'text', default: 'rgba(76,222,138,.1)', required: false },
    { id: 'corBordaCopiado',         label: 'Cor Borda Apos Copiar (rgba)',  type: 'text', default: 'rgba(76,222,138,.25)', required: false },

    // Botao link
    { id: 'corBotaoLink',      label: 'Cor Fundo Botao Link',       type: 'color', default: '#7c83ff' },
    { id: 'corBotaoLinkHover', label: 'Cor Fundo Botao Link Hover', type: 'color', default: '#a5aaff' },

    // Caixa raw
    { id: 'corFundoRaw', label: 'Cor Fundo Caixa Conteudo', type: 'color', default: '#161820' },
    { id: 'corBordaRaw', label: 'Cor Borda Caixa Conteudo (hex)', type: 'text', placeholder: 'Ex: #2a2d3a', default: '#2a2d3a', required: false },
    { id: 'corTextoRaw', label: 'Cor Texto Caixa Conteudo', type: 'color', default: '#c8cad8' },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = '';
const BASE_JS_B64   = 'KGZ1bmN0aW9uICgpIHsKICAgICJ1c2Ugc3RyaWN0IjsKCiAgICBjb25zdCBDU1MgPSBgCiAgICAjT0dVSS1vdmVybGF5IHsKICAgICAgcG9zaXRpb246IGZpeGVkOwogICAgICBpbnNldDogMDsKICAgICAgYmFja2dyb3VuZDoge3tjb3JPdmVybGF5fX07CiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpOwogICAgICB6LWluZGV4OiA5OTk5ODsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgIGFuaW1hdGlvbjogT0dVSS1mYWRlSW4gLjJzIGVhc2U7CiAgICB9CiAgICBAa2V5ZnJhbWVzIE9HVUktZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MCB9IHRvIHsgb3BhY2l0eToxIH0gfQoKICAgICNPR1VJLXBhbmVsIHsKICAgICAgYmFja2dyb3VuZDoge3tjb3JQYWluZWx9fTsKICAgICAgYm9yZGVyOiAxcHggc29saWQge3tjb3JCb3JkYVBhaW5lbH19OwogICAgICBib3JkZXItcmFkaXVzOiB7e2JvcmRlclJhZGl1c319OwogICAgICBwYWRkaW5nOiAzMnB4IDM2cHggMjhweDsKICAgICAgd2lkdGg6IDEwMCU7CiAgICAgIG1heC13aWR0aDoge3tsYXJndXJhTWF4aW1hfX07CiAgICAgIGJveC1zaGFkb3c6IHt7c29tYnJhUGFpbmVsfX07CiAgICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7CiAgICAgIGNvbG9yOiB7e2NvclRleHRvfX07CiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgICAgYW5pbWF0aW9uOiBPR1VJLXNsaWRlVXAgLjI1cyBjdWJpYy1iZXppZXIoLjE2LDEsLjMsMSk7CiAgICB9CiAgICBAa2V5ZnJhbWVzIE9HVUktc2xpZGVVcCB7CiAgICAgIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjRweCk7IG9wYWNpdHk6MCB9CiAgICAgIHRvICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7ICAgIG9wYWNpdHk6MSB9CiAgICB9CgogICAgI09HVUktY2xvc2UgewogICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgIHRvcDogMTRweDsgcmlnaHQ6IDE2cHg7CiAgICAgIGJhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogbm9uZTsKICAgICAgY29sb3I6IHt7Y29yQm90YW9GZWNoYXJ9fTsKICAgICAgZm9udC1zaXplOiAyMHB4OwogICAgICBjdXJzb3I6IHBvaW50ZXI7IGxpbmUtaGVpZ2h0OiAxOwogICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzOwogICAgfQogICAgI09HVUktY2xvc2U6aG92ZXIgeyBjb2xvcjoge3tjb3JUZXh0b319OyB9CgogICAgI09HVUktcGFuZWwgaDIgewogICAgICBtYXJnaW46IDAgMCA2cHg7CiAgICAgIGZvbnQtc2l6ZTogMThweDsKICAgICAgZm9udC13ZWlnaHQ6IDcwMDsKICAgICAgY29sb3I6IHt7Y29yVGl0dWxvfX07CiAgICB9CiAgICAjT0dVSS1wcm9kdWN0LW5hbWUgewogICAgICBmb250LXNpemU6IDEzcHg7CiAgICAgIGNvbG9yOiB7e2Nvck5vbWVQcm9kdXRvfX07CiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7CiAgICAgIGxldHRlci1zcGFjaW5nOiAuM3B4OwogICAgfQoKICAgIC5PR1VJLWRpdmlkZXIgewogICAgICBib3JkZXI6IG5vbmU7CiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB7e2NvckRpdmlzb3J9fTsKICAgICAgbWFyZ2luOiAxOHB4IDA7CiAgICB9CgogICAgLk9HVUktcm93IHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7CiAgICAgIGdhcDogMTJweDsKICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDsKICAgIH0KICAgIC5PR1VJLWljb24geyBmb250LXNpemU6IDIwcHg7IGxpbmUtaGVpZ2h0OiAxLjQ7IGZsZXgtc2hyaW5rOiAwOyB9CiAgICAuT0dVSS1pbmZvIHsgZmxleDogMTsgfQogICAgLk9HVUktbGFiZWwgewogICAgICBmb250LXNpemU6IDExcHg7CiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7CiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7CiAgICAgIGNvbG9yOiB7e2NvckxhYmVsc319OwogICAgICBtYXJnaW4tYm90dG9tOiA0cHg7CiAgICB9CiAgICAuT0dVSS12YWx1ZSB7CiAgICAgIGZvbnQtc2l6ZTogMTVweDsKICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgY29sb3I6IHt7Y29yVmFsb3Jlc319OwogICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7CiAgICB9CgogICAgLk9HVUktY29weS1idG4gewogICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgZ2FwOiA1cHg7CiAgICAgIG1hcmdpbi10b3A6IDZweDsKICAgICAgcGFkZGluZzogNHB4IDEwcHg7CiAgICAgIGZvbnQtc2l6ZTogMTFweDsKICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgY29sb3I6IHt7Y29yQm90YW9Db3BpYXJ9fTsKICAgICAgYmFja2dyb3VuZDoge3tjb3JGdW5kb0JvdGFvQ29waWFyfX07CiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHt7Y29yQm9yZGFCb3Rhb0NvcGlhcn19OwogICAgICBib3JkZXItcmFkaXVzOiA2cHg7CiAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMTVzLCBjb2xvciAuMTVzOwogICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgIH0KICAgIC5PR1VJLWNvcHktYnRuOmhvdmVyIHsKICAgICAgYmFja2dyb3VuZDoge3tjb3JGdW5kb0JvdGFvQ29waWFySG92ZXJ9fTsKICAgICAgY29sb3I6IHt7Y29yVGV4dG9Cb3Rhb0NvcGlhckhvdmVyfX07CiAgICB9CiAgICAuT0dVSS1jb3B5LWJ0bi5jb3BpZWQgewogICAgICBjb2xvcjoge3tjb3JDb3BpYWRvfX07CiAgICAgIGJhY2tncm91bmQ6IHt7Y29yRnVuZG9Db3BpYWRvfX07CiAgICAgIGJvcmRlci1jb2xvcjoge3tjb3JCb3JkYUNvcGlhZG99fTsKICAgIH0KCiAgICAuT0dVSS1saW5rLWJ0biB7CiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4OwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBnYXA6IDZweDsKICAgICAgbWFyZ2luLXRvcDogOHB4OwogICAgICBwYWRkaW5nOiA3cHggMTRweDsKICAgICAgZm9udC1zaXplOiAxMnB4OwogICAgICBmb250LXdlaWdodDogNjAwOwogICAgICBjb2xvcjogI2ZmZjsKICAgICAgYmFja2dyb3VuZDoge3tjb3JCb3Rhb0xpbmt9fTsKICAgICAgYm9yZGVyOiBub25lOwogICAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOwogICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4xNXMsIG9wYWNpdHkgLjE1czsKICAgIH0KICAgIC5PR1VJLWxpbmstYnRuOmhvdmVyIHsgYmFja2dyb3VuZDoge3tjb3JCb3Rhb0xpbmtIb3Zlcn19OyBjb2xvcjogI2ZmZjsgfQoKICAgIC5PR1VJLXJhdy1ib3ggewogICAgICBtYXJnaW4tdG9wOiA4cHg7CiAgICAgIHBhZGRpbmc6IDEwcHggMTRweDsKICAgICAgYmFja2dyb3VuZDoge3tjb3JGdW5kb1Jhd319OwogICAgICBib3JkZXI6IDFweCBzb2xpZCB7e2NvckJvcmRhUmF3fX07CiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgZm9udC1zaXplOiAxM3B4OwogICAgICBjb2xvcjoge3tjb3JUZXh0b1Jhd319OwogICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7CiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsKICAgICAgbGluZS1oZWlnaHQ6IDEuNjsKICAgIH0KCiAgICAjT0dVSS1mb290ZXIgewogICAgICBtYXJnaW4tdG9wOiAyNHB4OwogICAgICBwYWRkaW5nLXRvcDogMTZweDsKICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHt7Y29yRGl2aXNvcn19OwogICAgICBmb250LXNpemU6IDEycHg7CiAgICAgIGNvbG9yOiB7e2NvclJvZGFwZX19OwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICB9CiAgYDsKCiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJPRy1zdHlsZXMiKSkgewogICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic3R5bGUiKTsKICAgICAgICBzdHlsZS5pZCA9ICJPRy1zdHlsZXMiOwogICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gQ1NTOwogICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpOwogICAgfQoKICAgIGNvbnN0IE9HX1ZBTElEX0VNQUlMX0RPTUFJTlMgPSBbCiAgICAgICAgIkBnbWFpbC5jb20iLCAiQG91dGxvb2suY29tIiwgIkBob3RtYWlsLmNvbSIsICJAeWFob28uY29tIiwKICAgICAgICAiQGxpdmUuY29tIiwgIkBtc24uY29tIiwgIkBpY2xvdWQuY29tIiwgIkBwcm90b25tYWlsLmNvbSIKICAgIF07CgogICAgZnVuY3Rpb24gT0dfaXNWYWxpZEVtYWlsQ3JlZGVudGlhbChsb2dpbikgewogICAgICAgIGNvbnN0IGwgPSBsb2dpbi50b0xvd2VyQ2FzZSgpOwogICAgICAgIHJldHVybiBPR19WQUxJRF9FTUFJTF9ET01BSU5TLnNvbWUoZG9tYWluID0+IGwuaW5jbHVkZXMoZG9tYWluKSk7CiAgICB9CgogICAgZnVuY3Rpb24gT0dfaXNMaW5rKHR4dCkgewogICAgICAgIHJldHVybiAvXmh0dHBzPzpcL1wvLisvaS50ZXN0KHR4dC50cmltKCkpOwogICAgfQoKICAgIGZ1bmN0aW9uIE9HX2V4dHJhY3RQaW4oc3RyKSB7CiAgICAgICAgY29uc3QgbWF0Y2ggPSBzdHIubWF0Y2goL1xzK3Bpbltcc1wvOl0rKFtcd1xkXSspL2kpOwogICAgICAgIGlmIChtYXRjaCkgewogICAgICAgICAgICBjb25zdCBwaW4gPSBtYXRjaFsxXS50cmltKCk7CiAgICAgICAgICAgIGNvbnN0IHJlc3QgPSBzdHIucmVwbGFjZShtYXRjaFswXSwgIiIpLnRyaW0oKTsKICAgICAgICAgICAgcmV0dXJuIHsgcmVzdCwgcGluIH07CiAgICAgICAgfQogICAgICAgIHJldHVybiB7IHJlc3Q6IHN0ciwgcGluOiBudWxsIH07CiAgICB9CgogICAgZnVuY3Rpb24gT0dfY2xhc3NpZnkodHh0KSB7CiAgICAgICAgaWYgKCF0eHQgfHwgIXR4dC50cmltKCkpIHJldHVybiBudWxsOwogICAgICAgIGNvbnN0IHJhdyA9IHR4dC50cmltKCk7CgogICAgICAgIGlmIChPR19pc0xpbmsocmF3KSkgcmV0dXJuIHsgdHlwZTogImxpbmsiLCB1cmw6IHJhdyB9OwoKICAgICAgICBjb25zdCBub3JtYWxpemVkID0gcmF3LnJlcGxhY2UoL1xzKlwvXHMqL2csICIvIikucmVwbGFjZSgvXHMqOlxzKi9nLCAiLyIpOwogICAgICAgIGNvbnN0IGlkeCA9IG5vcm1hbGl6ZWQuaW5kZXhPZigiLyIpOwogICAgICAgIGlmIChpZHggIT09IC0xKSB7CiAgICAgICAgICAgIGNvbnN0IGxvZ2luID0gbm9ybWFsaXplZC5zbGljZSgwLCBpZHgpLnRyaW0oKTsKICAgICAgICAgICAgY29uc3QgcmVzdCAgPSBub3JtYWxpemVkLnNsaWNlKGlkeCArIDEpLnRyaW0oKTsKICAgICAgICAgICAgaWYgKGxvZ2luICYmIHJlc3QgJiYgT0dfaXNWYWxpZEVtYWlsQ3JlZGVudGlhbChsb2dpbikpIHsKICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVzdDogc2VuaGEsIHBpbiB9ID0gT0dfZXh0cmFjdFBpbihyZXN0KTsKICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICJlbWFpbCIsIGxvZ2luLCBzZW5oYSwgcGluIH07CiAgICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIGlmIChyYXcubGVuZ3RoID49IDIgJiYgcmF3Lmxlbmd0aCA8PSA1MDApIHJldHVybiB7IHR5cGU6ICJyYXciLCBjb250ZW50OiByYXcgfTsKICAgICAgICByZXR1cm4gbnVsbDsKICAgIH0KCiAgICBmdW5jdGlvbiBPR19nZXRQcm9kdWN0TmFtZSgpIHsKICAgICAgICBjb25zdCBsaW5lcyA9IGRvY3VtZW50LmJvZHkuaW5uZXJUZXh0LnNwbGl0KCJcbiIpLm1hcChsID0+IGwudHJpbSgpKS5maWx0ZXIoQm9vbGVhbik7CiAgICAgICAgY29uc3QgcHJvZElkeCA9IGxpbmVzLmZpbmRJbmRleChsID0+IGwudG9Mb3dlckNhc2UoKSA9PT0gInByb2R1dG8iKTsKICAgICAgICBpZiAocHJvZElkeCAhPT0gLTEgJiYgbGluZXNbcHJvZElkeCArIDFdKQogICAgICAgICAgICByZXR1cm4gbGluZXNbcHJvZElkeCArIDFdLnJlcGxhY2UoL15cZCt4XHMqL2ksICIiKS50cmltKCk7CiAgICAgICAgcmV0dXJuICJQcm9kdXRvIjsKICAgIH0KCiAgICBmdW5jdGlvbiBPR19nZXREZWxpdmVyeUNvbnRlbnQoKSB7CiAgICAgICAgY29uc3QgZXhhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3MqPSJzYy0zM2QzZjBhZi0xNyJdJyk7CiAgICAgICAgaWYgKGV4YWN0KSB7CiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IE9HX2NsYXNzaWZ5KGV4YWN0LnRleHRDb250ZW50LnRyaW0oKSk7CiAgICAgICAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7CiAgICAgICAgfQogICAgICAgIGNvbnN0IGFsbEVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoImRpdiwgc3BhbiwgcCIpOwogICAgICAgIGZvciAoY29uc3QgZWwgb2YgYWxsRWxzKSB7CiAgICAgICAgICAgIGlmIChlbC5jaGlsZHJlbi5sZW5ndGggIT09IDApIGNvbnRpbnVlOwogICAgICAgICAgICBjb25zdCB0eHQgPSBlbC50ZXh0Q29udGVudC50cmltKCk7CiAgICAgICAgICAgIGlmICghdHh0IHx8IHR4dC5sZW5ndGggPiA1MDApIGNvbnRpbnVlOwogICAgICAgICAgICBpZiAodHh0LmluY2x1ZGVzKCLCqSIpIHx8IHR4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCJwb2zDrXRpY2EiKSkgY29udGludWU7CiAgICAgICAgICAgIGlmICh0eHQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygidmVyIHByb2R1dG8iKSB8fCB0eHQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygiYXZhbGlhciIpKSBjb250aW51ZTsKICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gT0dfY2xhc3NpZnkodHh0KTsKICAgICAgICAgICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIG51bGw7CiAgICB9CgogICAgZnVuY3Rpb24gT0dfZXNjSHRtbChzdHIpIHsKICAgICAgICByZXR1cm4gU3RyaW5nKHN0cikKICAgICAgICAgICAgLnJlcGxhY2UoLyYvZywgIiZhbXA7IikucmVwbGFjZSgvPC9nLCAiJmx0OyIpCiAgICAgICAgICAgIC5yZXBsYWNlKC8+L2csICImZ3Q7IikucmVwbGFjZSgvIi9nLCAiJnF1b3Q7Iik7CiAgICB9CgogICAgZnVuY3Rpb24gT0dfYnVpbGRCb2R5KGRlbGl2ZXJ5KSB7CiAgICAgICAgaWYgKCFkZWxpdmVyeSkgcmV0dXJuIGAKICAgICAgICA8ZGl2IGNsYXNzPSJPR1VJLXJvdyI+CiAgICAgICAgICA8c3BhbiBjbGFzcz0iT0dVSS1pY29uIj7imqDvuI88L3NwYW4+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJPR1VJLWluZm8iPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJPR1VJLXZhbHVlIiBzdHlsZT0iY29sb3I6I2Y0YTk0ZTtmb250LXNpemU6MTRweCI+CiAgICAgICAgICAgICAgTmVuaHVtYSBlbnRyZWdhIGVuY29udHJhZGEgbmEgcMOhZ2luYS48YnI+CiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9ImNvbG9yOiM2NjY7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NDAwIj5PIHByb2R1dG8gcG9kZSBuw6NvIHRlciBzaWRvIGVudHJlZ3VlIGFpbmRhLjwvc3Bhbj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj5gOwoKICAgICAgICBpZiAoZGVsaXZlcnkudHlwZSA9PT0gImVtYWlsIikgewogICAgICAgICAgICBjb25zdCBwaW5Sb3cgPSBkZWxpdmVyeS5waW4gPyBgCiAgICAgICAgPGRpdiBjbGFzcz0iT0dVSS1yb3ciPgogICAgICAgICAgPHNwYW4gY2xhc3M9Ik9HVUktaWNvbiI+8J+Uojwvc3Bhbj4KICAgICAgICAgIDxkaXYgY2xhc3M9Ik9HVUktaW5mbyI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9Ik9HVUktbGFiZWwiPlBJTjwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJPR1VJLXZhbHVlIj4ke09HX2VzY0h0bWwoZGVsaXZlcnkucGluKX08L2Rpdj4KICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0iT0dVSS1jb3B5LWJ0biIgZGF0YS1jb3B5PSIke09HX2VzY0h0bWwoZGVsaXZlcnkucGluKX0iPvCfk4sgQ29waWFyPC9idXR0b24+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj5gIDogIiI7CiAgICAgICAgICAgIHJldHVybiBgCiAgICAgICAgPGRpdiBjbGFzcz0iT0dVSS1yb3ciPgogICAgICAgICAgPHNwYW4gY2xhc3M9Ik9HVUktaWNvbiI+4pyJ77iPPC9zcGFuPgogICAgICAgICAgPGRpdiBjbGFzcz0iT0dVSS1pbmZvIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iT0dVSS1sYWJlbCI+TG9naW4gLyBFLW1haWw8L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iT0dVSS12YWx1ZSI+JHtPR19lc2NIdG1sKGRlbGl2ZXJ5LmxvZ2luKX08L2Rpdj4KICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0iT0dVSS1jb3B5LWJ0biIgZGF0YS1jb3B5PSIke09HX2VzY0h0bWwoZGVsaXZlcnkubG9naW4pfSI+8J+TiyBDb3BpYXI8L2J1dHRvbj4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9Ik9HVUktcm93Ij4KICAgICAgICAgIDxzcGFuIGNsYXNzPSJPR1VJLWljb24iPvCflJI8L3NwYW4+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJPR1VJLWluZm8iPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJPR1VJLWxhYmVsIj5TZW5oYSAvIFN0cmVhbWluZzwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJPR1VJLXZhbHVlIj4ke09HX2VzY0h0bWwoZGVsaXZlcnkuc2VuaGEpfTwvZGl2PgogICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJPR1VJLWNvcHktYnRuIiBkYXRhLWNvcHk9IiR7T0dfZXNjSHRtbChkZWxpdmVyeS5zZW5oYSl9Ij7wn5OLIENvcGlhcjwvYnV0dG9uPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgICAgJHtwaW5Sb3d9YDsKICAgICAgICB9CgogICAgICAgIGlmIChkZWxpdmVyeS50eXBlID09PSAibGluayIpIHsKICAgICAgICAgICAgcmV0dXJuIGAKICAgICAgICA8ZGl2IGNsYXNzPSJPR1VJLXJvdyI+CiAgICAgICAgICA8c3BhbiBjbGFzcz0iT0dVSS1pY29uIj7wn5SXPC9zcGFuPgogICAgICAgICAgPGRpdiBjbGFzcz0iT0dVSS1pbmZvIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iT0dVSS1sYWJlbCI+TGluazwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJPR1VJLXZhbHVlIj4ke09HX2VzY0h0bWwoZGVsaXZlcnkudXJsKX08L2Rpdj4KICAgICAgICAgICAgPGEgY2xhc3M9Ik9HVUktbGluay1idG4iIGhyZWY9IiR7T0dfZXNjSHRtbChkZWxpdmVyeS51cmwpfSIgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciI+8J+MkCBBYnJpciBsaW5rPC9hPgogICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJPR1VJLWNvcHktYnRuIiBkYXRhLWNvcHk9IiR7T0dfZXNjSHRtbChkZWxpdmVyeS51cmwpfSIgc3R5bGU9Im1hcmdpbi1sZWZ0OjZweCI+8J+TiyBDb3BpYXI8L2J1dHRvbj4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PmA7CiAgICAgICAgfQoKICAgICAgICBpZiAoZGVsaXZlcnkudHlwZSA9PT0gInJhdyIpIHsKICAgICAgICAgICAgcmV0dXJuIGAKICAgICAgICA8ZGl2IGNsYXNzPSJPR1VJLXJvdyI+CiAgICAgICAgICA8c3BhbiBjbGFzcz0iT0dVSS1pY29uIj7wn5OEPC9zcGFuPgogICAgICAgICAgPGRpdiBjbGFzcz0iT0dVSS1pbmZvIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iT0dVSS1sYWJlbCI+Q29udGXDumRvPC9kaXY+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9Ik9HVUktcmF3LWJveCI+JHtPR19lc2NIdG1sKGRlbGl2ZXJ5LmNvbnRlbnQpfTwvZGl2PgogICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJPR1VJLWNvcHktYnRuIiBkYXRhLWNvcHk9IiR7T0dfZXNjSHRtbChkZWxpdmVyeS5jb250ZW50KX0iIHN0eWxlPSJtYXJnaW4tdG9wOjhweCI+8J+TiyBDb3BpYXI8L2J1dHRvbj4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PmA7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gIiI7CiAgICB9CgogICAgZnVuY3Rpb24gT0dfc2hvd1BhbmVsKHByb2R1Y3ROYW1lKSB7CiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiT0dVSS1vdmVybGF5Iik7CiAgICAgICAgaWYgKGV4aXN0aW5nKSBleGlzdGluZy5yZW1vdmUoKTsKCiAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBPR19nZXREZWxpdmVyeUNvbnRlbnQoKTsKICAgICAgICBjb25zdCBvdmVybGF5ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpOwogICAgICAgIG92ZXJsYXkuaWQgICAgID0gIk9HVUktb3ZlcmxheSI7CgogICAgICAgIG92ZXJsYXkuaW5uZXJIVE1MID0gYAogICAgICA8ZGl2IGlkPSJPR1VJLXBhbmVsIj4KICAgICAgICA8YnV0dG9uIGlkPSJPR1VJLWNsb3NlIiB0aXRsZT0iRmVjaGFyIj7inJU8L2J1dHRvbj4KICAgICAgICA8aDI+8J+TpiB7e3RpdHVsb1BhaW5lbH19PC9oMj4KICAgICAgICA8ZGl2IGlkPSJPR1VJLXByb2R1Y3QtbmFtZSI+JHtPR19lc2NIdG1sKHByb2R1Y3ROYW1lKX08L2Rpdj4KICAgICAgICA8aHIgY2xhc3M9Ik9HVUktZGl2aWRlciI+CiAgICAgICAgJHtPR19idWlsZEJvZHkoZGVsaXZlcnkpfQogICAgICAgIDxkaXYgaWQ9Ik9HVUktZm9vdGVyIj57e3RleHRvUm9kYXBlfX08L2Rpdj4KICAgICAgPC9kaXY+YDsKCiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTsKCiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsIChlKSA9PiB7IGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkgb3ZlcmxheS5yZW1vdmUoKTsgfSk7CiAgICAgICAgb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCIjT0dVSS1jbG9zZSIpLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKCkgPT4gb3ZlcmxheS5yZW1vdmUoKSk7CgogICAgICAgIG92ZXJsYXkucXVlcnlTZWxlY3RvckFsbCgiLk9HVUktY29weS1idG4iKS5mb3JFYWNoKChidG4pID0+IHsKICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKCkgPT4gewogICAgICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYnRuLmRhdGFzZXQuY29weSkudGhlbigoKSA9PiB7CiAgICAgICAgICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gIuKchSBDb3BpYWRvISI7CiAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoImNvcGllZCIpOwogICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBidG4udGV4dENvbnRlbnQgPSAi8J+TiyBDb3BpYXIiOyBidG4uY2xhc3NMaXN0LnJlbW92ZSgiY29waWVkIik7IH0sIDIwMDApOwogICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4gewogICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgidGV4dGFyZWEiKTsKICAgICAgICAgICAgICAgICAgICB0YS52YWx1ZSA9IGJ0bi5kYXRhc2V0LmNvcHk7CiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YSk7CiAgICAgICAgICAgICAgICAgICAgdGEuc2VsZWN0KCk7CiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoImNvcHkiKTsKICAgICAgICAgICAgICAgICAgICB0YS5yZW1vdmUoKTsKICAgICAgICAgICAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSAi4pyFIENvcGlhZG8hIjsKICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgiY29waWVkIik7CiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGJ0bi50ZXh0Q29udGVudCA9ICLwn5OLIENvcGlhciI7IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCJjb3BpZWQiKTsgfSwgMjAwMCk7CiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgfSk7CiAgICAgICAgfSk7CiAgICB9CgogICAgZnVuY3Rpb24gT0dfaGlkZU5hdGl2ZU1vZGFsKCkgewogICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltjbGFzcyo9InNjLSJdJykuZm9yRWFjaChlbCA9PiB7CiAgICAgICAgICAgIGNvbnN0IHMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7CiAgICAgICAgICAgIGlmIChzLnBvc2l0aW9uID09PSAiZml4ZWQiICYmIHBhcnNlSW50KHMuekluZGV4KSA+PSAxMDAgJiYKICAgICAgICAgICAgICAgIGVsLmlkICE9PSAiT0dVSS1vdmVybGF5IiAmJiAhZWwuY2xvc2VzdCgiI09HVUktb3ZlcmxheSIpKSB7CiAgICAgICAgICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgiZGlzcGxheSIsICJub25lIiwgImltcG9ydGFudCIpOwogICAgICAgICAgICAgICAgZWwuZGF0YXNldC5vZ0hpZGRlbiA9ICIxIjsKICAgICAgICAgICAgfQogICAgICAgIH0pOwogICAgfQoKICAgIGZ1bmN0aW9uIE9HX2hvb2tCdXR0b25zKCkgewogICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKGUpID0+IHsKICAgICAgICAgICAgY29uc3QgYnRuID0gZS50YXJnZXQuY2xvc2VzdCgiYnV0dG9uIik7CiAgICAgICAgICAgIGlmICghYnRuIHx8IGUuX09HX3N5bnRoZXRpYykgcmV0dXJuOwogICAgICAgICAgICBjb25zdCB0ZXh0ID0gYnRuLnRleHRDb250ZW50LnRyaW0oKS50b0xvd2VyQ2FzZSgpOwogICAgICAgICAgICBpZiAoIXRleHQuaW5jbHVkZXMoInZlciBwcm9kdXRvIikgJiYgIXRleHQuaW5jbHVkZXMoInZpZXcgcHJvZHVjdCIpKSByZXR1cm47CgogICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7CiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7CgogICAgICAgICAgICBjb25zdCBwcm9kdWN0TmFtZSAgICA9IE9HX2dldFByb2R1Y3ROYW1lKCk7CiAgICAgICAgICAgIGNvbnN0IHN5bnRoZXRpY0NsaWNrID0gbmV3IE1vdXNlRXZlbnQoImNsaWNrIiwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pOwogICAgICAgICAgICBzeW50aGV0aWNDbGljay5fT0dfc3ludGhldGljID0gdHJ1ZTsKICAgICAgICAgICAgYnRuLmRpc3BhdGNoRXZlbnQoc3ludGhldGljQ2xpY2spOwoKICAgICAgICAgICAgbGV0IHJlc29sdmVkID0gZmFsc2U7CiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4gewogICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBPR19nZXREZWxpdmVyeUNvbnRlbnQoKTsKICAgICAgICAgICAgICAgIGlmIChkZWxpdmVyeSAmJiAhcmVzb2x2ZWQpIHsKICAgICAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7CiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpOwogICAgICAgICAgICAgICAgICAgIE9HX2hpZGVOYXRpdmVNb2RhbCgpOwogICAgICAgICAgICAgICAgICAgIE9HX3Nob3dQYW5lbChwcm9kdWN0TmFtZSk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0pOwogICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOwogICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHsKICAgICAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7CiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpOwogICAgICAgICAgICAgICAgICAgIE9HX2hpZGVOYXRpdmVNb2RhbCgpOwogICAgICAgICAgICAgICAgICAgIE9HX3Nob3dQYW5lbChwcm9kdWN0TmFtZSk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0sIDIwMDApOwogICAgICAgIH0sIHRydWUpOwogICAgfQoKICAgIE9HX2hvb2tCdXR0b25zKCk7Cn0pKCk7';

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

// ── Aviso de funcionamento ────────────────────────────────────
(function() {
  var aviso = document.createElement('div');
  aviso.style.cssText =
    'background:#0d1117;border:1px solid #1e2a1e;border-left:3px solid #00ff88;'
    + 'border-radius:10px;padding:14px 16px;margin-bottom:20px;';

  aviso.innerHTML =
    '<div style="font-size:0.78rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#00ff88;margin-bottom:10px;">Como funciona</div>'
    + '<div style="font-size:0.82rem;color:#8b9aaa;line-height:1.7;">'
      + 'O script intercepta o botão <strong style="color:#e8eaf0">"Ver produto"</strong> da Ereemby e detecta automaticamente o tipo de entrega:<br><br>'
      + '<span style="display:block;padding:3px 0;">📧 <strong style="color:#e8eaf0">E-mail + Senha</strong> — formato <code style="background:#1a1f2e;padding:1px 6px;border-radius:4px;color:#7c83ff">email@dominio.com/senha</code></span>'
      + '<span style="display:block;padding:3px 0;">🔢 <strong style="color:#e8eaf0">PIN</strong> — adicione <code style="background:#1a1f2e;padding:1px 6px;border-radius:4px;color:#7c83ff">pin 1234</code> após a senha</span>'
      + '<span style="display:block;padding:3px 0;">🔗 <strong style="color:#e8eaf0">Link</strong> — qualquer URL começando com <code style="background:#1a1f2e;padding:1px 6px;border-radius:4px;color:#7c83ff">https://</code></span>'
      + '<span style="display:block;padding:3px 0;">📄 <strong style="color:#e8eaf0">Conteúdo livre</strong> — qualquer outro texto (chave, código, etc)</span>'
    + '</div>';

  var panel = document.querySelector('.panel');
  var genBtn = document.getElementById('genBtn');
  if (panel && genBtn) panel.insertBefore(aviso, genBtn);
})();

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

  var corOverlay   = v.corOverlay      || 'rgba(0,0,0,.55)';
  var corPainel    = v.corPainel       || '#0f1117';
  var corBorda     = v.corBordaPainel  || '#2a2d3a';
  var radius       = v.borderRadius    || '16px';
  var largura      = v.larguraMaxima   || '460px';
  var sombra       = v.sombraPainel    || '0 24px 60px rgba(0,0,0,.6)';
  var corTit       = v.corTitulo       || '#ffffff';
  var corTxt       = v.corTexto        || '#e8eaf0';
  var corNome      = v.corNomeProduto  || '#8b8fa8';
  var corLabels    = v.corLabels       || '#555b78';
  var corVals      = v.corValores      || '#e8eaf0';
  var corDiv       = v.corDivisor      || '#1e2130';
  var corRod       = v.corRodape       || '#444a62';
  var corBtnClose  = v.corBotaoFechar  || '#666';
  var corBtnCp     = v.corBotaoCopiar  || '#7c83ff';
  var corBgCp      = v.corFundoBotaoCopiar || 'rgba(124,131,255,.1)';
  var corBrCp      = v.corBordaBotaoCopiar || 'rgba(124,131,255,.25)';
  var corBtnLk     = v.corBotaoLink    || '#7c83ff';
  var corFundoRaw  = v.corFundoRaw     || '#161820';
  var corBordaRaw  = v.corBordaRaw     || '#2a2d3a';
  var corTxtRaw    = v.corTextoRaw     || '#c8cad8';
  var titulo       = v.tituloPainel    || 'Entrega do produto';
  var rodape       = v.textoRodape     || 'Guarde suas informacoes em local seguro.';

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>'
    + "*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;font-family:'Segoe UI',system-ui,sans-serif;}"
    + 'body{background:' + corOverlay + ';min-height:480px;display:flex;align-items:center;justify-content:center;padding:20px;}'
    + '.panel{background:' + corPainel + ';border:1px solid ' + corBorda + ';border-radius:' + radius + ';padding:28px 32px 24px;width:100%;max-width:' + largura + ';box-shadow:' + sombra + ';color:' + corTxt + ';position:relative;}'
    + '.close{position:absolute;top:12px;right:14px;background:none;border:none;color:' + corBtnClose + ';font-size:18px;cursor:pointer;}'
    + 'h2{margin:0 0 4px;font-size:17px;font-weight:700;color:' + corTit + ';}'
    + '.pname{font-size:12px;color:' + corNome + ';margin-bottom:20px;}'
    + '.div{border:none;border-top:1px solid ' + corDiv + ';margin:16px 0;}'
    + '.row{display:flex;align-items:flex-start;gap:10px;margin-bottom:12px;}'
    + '.ico{font-size:18px;line-height:1.4;flex-shrink:0;}'
    + '.info{flex:1;}'
    + '.lbl{font-size:10px;text-transform:uppercase;letter-spacing:1px;color:' + corLabels + ';margin-bottom:3px;}'
    + '.val{font-size:14px;font-weight:600;color:' + corVals + ';word-break:break-all;}'
    + '.cpbtn{display:inline-flex;align-items:center;gap:4px;margin-top:5px;padding:3px 9px;font-size:10px;font-weight:600;color:' + corBtnCp + ';background:' + corBgCp + ';border:1px solid ' + corBrCp + ';border-radius:5px;cursor:pointer;}'
    + '.lkbtn{display:inline-flex;align-items:center;gap:5px;margin-top:7px;padding:6px 12px;font-size:11px;font-weight:600;color:#fff;background:' + corBtnLk + ';border:none;border-radius:7px;cursor:pointer;text-decoration:none;}'
    + '.raw{margin-top:7px;padding:9px 12px;background:' + corFundoRaw + ';border:1px solid ' + corBordaRaw + ';border-radius:7px;font-size:12px;color:' + corTxtRaw + ';word-break:break-all;white-space:pre-wrap;line-height:1.6;}'
    + '.foot{margin-top:20px;padding-top:14px;border-top:1px solid ' + corDiv + ';font-size:11px;color:' + corRod + ';text-align:center;}'
    + '</style></head><body>'
    + '<div class="panel">'
      + '<button class="close">✕</button>'
      + '<h2>📦 ' + titulo + '</h2>'
      + '<div class="pname">Netflix Premium 4K UHD</div>'
      + '<hr class="div">'
      + '<div class="row"><span class="ico">✉️</span><div class="info"><div class="lbl">Login / E-mail</div><div class="val">usuario@gmail.com</div><button class="cpbtn">📋 Copiar</button></div></div>'
      + '<div class="row"><span class="ico">🔒</span><div class="info"><div class="lbl">Senha / Streaming</div><div class="val">minha@senha123</div><button class="cpbtn">📋 Copiar</button></div></div>'
      + '<div class="row"><span class="ico">🔗</span><div class="info"><div class="lbl">Link</div><div class="val">https://exemplo.com/acesso</div><a class="lkbtn">🌐 Abrir link</a><button class="cpbtn" style="margin-left:5px">📋 Copiar</button></div></div>'
      + '<div class="foot">' + rodape + '</div>'
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