// =============================================================
//  OG! — login-estilo.js
// =============================================================

const COMPONENT = {
  title:       'Estilo de Login Dark Gold',
  description: 'Customiza o formulario de login da Ereemby com tema escuro e acento dourado. Seletores CSS configuráveis — funciona em qualquer loja.',
  tags:        ['Login', 'CSS', 'Dark', 'Gold', 'Formulario', 'Gratis'],

  fields: [
    // ── Seletores CSS (inspecione sua loja para encontrar as classes) ──
    { id: 'seletorCard',          label: '🎯 Seletor — Card principal',              type: 'text', placeholder: 'Ex: .gfReiy',    default: '.gfReiy',    required: true },
    { id: 'seletorTitulo',        label: '🎯 Seletor — Titulo e subtitulo',          type: 'text', placeholder: 'Ex: .jGNorW',    default: '.jGNorW',    required: true },
    { id: 'seletorBotoesWrap',    label: '🎯 Seletor — Wrapper botoes sociais',      type: 'text', placeholder: 'Ex: .kWlPW',     default: '.kWlPW',     required: true },
    { id: 'seletorBotoesColuna',  label: '🎯 Seletor — Coluna botoes sociais',       type: 'text', placeholder: 'Ex: .kkVtkE',    default: '.kkVtkE',    required: true },
    { id: 'seletorBotaoSocial',   label: '🎯 Seletor — Botao social (Google/Discord)', type: 'text', placeholder: 'Ex: .gveuWN', default: '.gveuWN',   required: true },
    { id: 'seletorDivisor',       label: '🎯 Seletor — Texto divisor "ou"',          type: 'text', placeholder: 'Ex: .gPVJNs',    default: '.gPVJNs',    required: true },
    { id: 'seletorLinhaDivisor',  label: '🎯 Seletor — Linha divisoria',             type: 'text', placeholder: 'Ex: .kbWWOp',    default: '.kbWWOp',    required: true },
    { id: 'seletorCampoInput',    label: '🎯 Seletor — Wrapper do campo input',      type: 'text', placeholder: 'Ex: .jRnTks',    default: '.jRnTks',    required: true },
    { id: 'seletorInputTexto',    label: '🎯 Seletor — Input de texto',              type: 'text', placeholder: 'Ex: .ffMsDG',    default: '.ffMsDG',    required: true },
    { id: 'seletorLabel',         label: '🎯 Seletor — Label do campo',              type: 'text', placeholder: 'Ex: .fEFKtj',    default: '.fEFKtj',    required: true },
    { id: 'seletorBotaoPrincipal',label: '🎯 Seletor — Botao Entrar',               type: 'text', placeholder: 'Ex: .Cywqa',     default: '.Cywqa',     required: true },

    // ── Acento principal (gold) ───────────────────────────────
    { id: 'corGold',        label: 'Cor Principal (Gold)',            type: 'color', default: '#ffcc00' },
    { id: 'corGoldHover',   label: 'Cor Principal Hover',            type: 'color', default: '#ffd630' },
    { id: 'corGoldDim',     label: 'Cor Principal Escurecida',       type: 'color', default: '#e0b800' },
    { id: 'corGoldDeep',    label: 'Cor Principal Profunda',         type: 'color', default: '#c9a600' },
    { id: 'corGoldShadow',  label: 'Sombra 3D do Botao (hex)',       type: 'color', default: '#6b5500' },
    { id: 'corGoldGlow',    label: 'Glow da Cor Principal (rgba)',   type: 'text',  placeholder: 'Ex: rgba(255,204,0,0.06)',  default: 'rgba(255,204,0,0.06)',  required: false },
    { id: 'corGoldBorder',  label: 'Borda dos Inputs (rgba)',        type: 'text',  placeholder: 'Ex: rgba(255,204,0,0.08)',  default: 'rgba(255,204,0,0.08)',  required: false },
    { id: 'corGoldFocus',   label: 'Focus dos Inputs (rgba)',        type: 'text',  placeholder: 'Ex: rgba(255,204,0,0.4)',   default: 'rgba(255,204,0,0.4)',   required: false },

    // ── Fundos ───────────────────────────────────────────────
    { id: 'corBgCard',      label: 'Fundo do Card',                  type: 'color', default: '#111111' },
    { id: 'corBgInput',     label: 'Fundo dos Inputs',               type: 'color', default: '#0d0d0d' },
    { id: 'corBgBtn',       label: 'Fundo Botoes Sociais (rgba)',    type: 'text',  placeholder: 'Ex: rgba(255,255,255,0.03)', default: 'rgba(255,255,255,0.03)', required: false },
    { id: 'corBgBtnHover',  label: 'Fundo Botoes Sociais Hover',    type: 'text',  placeholder: 'Ex: rgba(255,255,255,0.06)', default: 'rgba(255,255,255,0.06)', required: false },

    // ── Bordas ───────────────────────────────────────────────
    { id: 'corBorderSubtle', label: 'Borda Sutil (rgba)',            type: 'text',  placeholder: 'Ex: rgba(255,255,255,0.07)', default: 'rgba(255,255,255,0.07)', required: false },
    { id: 'corBorderHover',  label: 'Borda Hover (rgba)',            type: 'text',  placeholder: 'Ex: rgba(255,255,255,0.18)', default: 'rgba(255,255,255,0.18)', required: false },
    { id: 'corBorderInset',  label: 'Borda Inset (rgba)',            type: 'text',  placeholder: 'Ex: rgba(255,255,255,0.02)', default: 'rgba(255,255,255,0.02)', required: false },

    // ── Textos ───────────────────────────────────────────────
    { id: 'corText',             label: 'Cor do Texto Principal',    type: 'color', default: '#ffffff' },
    { id: 'corTextMuted',        label: 'Cor do Texto Secundario',   type: 'color', default: '#666666' },
    { id: 'corTextPlaceholder',  label: 'Cor do Placeholder',        type: 'color', default: '#333333' },
    { id: 'corTextoBotao',       label: 'Cor do Texto do Botao',     type: 'color', default: '#0a0a0a' },

    // ── Shape ────────────────────────────────────────────────
    { id: 'radiusCard',   label: 'Border Radius do Card',   type: 'text', placeholder: 'Ex: 28px', default: '28px', required: true  },
    { id: 'radiusBtn',    label: 'Border Radius dos Botoes', type: 'text', placeholder: 'Ex: 14px', default: '14px', required: true  },
    { id: 'radiusInput',  label: 'Border Radius dos Inputs', type: 'text', placeholder: 'Ex: 14px', default: '14px', required: true  },
    { id: 'paddingCard',  label: 'Padding do Card',          type: 'text', placeholder: 'Ex: 44px 40px 40px', default: '44px 40px 40px', required: true  },
    { id: 'larguraCard',  label: 'Largura maxima do Card',   type: 'text', placeholder: 'Ex: 420px', default: '420px', required: true  },

    // ── Tipografia ───────────────────────────────────────────
    { id: 'fontDisplay',       label: 'Fonte do Titulo (Google Fonts)', type: 'text', placeholder: 'Ex: Syne',    default: 'Syne',    required: true  },
    { id: 'fontBody',          label: 'Fonte do Corpo (Google Fonts)',  type: 'text', placeholder: 'Ex: DM Sans', default: 'DM Sans', required: true  },
    { id: 'tamanhoTitulo',     label: 'Tamanho do Titulo',              type: 'text', placeholder: 'Ex: 34px',   default: '34px',    required: false },
    { id: 'tamanhoTextoBotao', label: 'Tamanho do Texto do Botao',      type: 'text', placeholder: 'Ex: 15px',   default: '15px',    required: false },
    { id: 'alturaBotao',       label: 'Altura do Botao',                type: 'text', placeholder: 'Ex: 52px',   default: '52px',    required: false },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = 'e3tzZWxldG9yQ2FyZH19IHsKICAgIGJhY2tncm91bmQ6IHZhcigtLW9nLWJnLWNhcmQpICFpbXBvcnRhbnQ7CiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1vZy1yYWRpdXMtY2FyZCkgIWltcG9ydGFudDsKICAgIHBhZGRpbmc6IHt7cGFkZGluZ0NhcmR9fSAhaW1wb3J0YW50OwogICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tb2ctYm9yZGVyLXN1YnRsZSkgIWltcG9ydGFudDsKICAgIGJveC1zaGFkb3c6IHZhcigtLW9nLXNoYWRvdy1jYXJkKSAhaW1wb3J0YW50OwogICAgbWF4LXdpZHRoOiB7e2xhcmd1cmFDYXJkfX0gIWltcG9ydGFudDsKICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50OwogICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7CiAgICBmb250LWZhbWlseTogdmFyKC0tb2ctZm9udC1ib2R5KSAhaW1wb3J0YW50OwogICAgLS1vZy1nb2xkOiAgICAgICAgICAgIHt7Y29yR29sZH19OwogICAgLS1vZy1nb2xkLWhvdmVyOiAgICAgIHt7Y29yR29sZEhvdmVyfX07CiAgICAtLW9nLWdvbGQtZGltOiAgICAgICAge3tjb3JHb2xkRGltfX07CiAgICAtLW9nLWdvbGQtZGVlcDogICAgICAge3tjb3JHb2xkRGVlcH19OwogICAgLS1vZy1nb2xkLXNoYWRvdzogICAgIHt7Y29yR29sZFNoYWRvd319OwogICAgLS1vZy1nb2xkLWdsb3c6ICAgICAgIHt7Y29yR29sZEdsb3d9fTsKICAgIC0tb2ctZ29sZC1ib3JkZXI6ICAgICB7e2NvckdvbGRCb3JkZXJ9fTsKICAgIC0tb2ctZ29sZC1mb2N1czogICAgICB7e2NvckdvbGRGb2N1c319OwogICAgLS1vZy1iZy1jYXJkOiAgICAgICAgIHt7Y29yQmdDYXJkfX07CiAgICAtLW9nLWJnLWlucHV0OiAgICAgICAge3tjb3JCZ0lucHV0fX07CiAgICAtLW9nLWJnLWJ0bjogICAgICAgICAge3tjb3JCZ0J0bn19OwogICAgLS1vZy1iZy1idG4taG92ZXI6ICAgIHt7Y29yQmdCdG5Ib3Zlcn19OwogICAgLS1vZy1ib3JkZXItc3VidGxlOiAgIHt7Y29yQm9yZGVyU3VidGxlfX07CiAgICAtLW9nLWJvcmRlci1ob3ZlcjogICAge3tjb3JCb3JkZXJIb3Zlcn19OwogICAgLS1vZy1ib3JkZXItaW5zZXQ6ICAgIHt7Y29yQm9yZGVySW5zZXR9fTsKICAgIC0tb2ctdGV4dDogICAgICAgICAgICB7e2NvclRleHR9fTsKICAgIC0tb2ctdGV4dC1tdXRlZDogICAgICB7e2NvclRleHRNdXRlZH19OwogICAgLS1vZy10ZXh0LXBsYWNlaG9sZGVyOnt7Y29yVGV4dFBsYWNlaG9sZGVyfX07CiAgICAtLW9nLXRleHQtbGFiZWw6ICAgICAgdmFyKC0tb2ctZ29sZCk7CiAgICAtLW9nLXJhZGl1cy1jYXJkOiAgICAge3tyYWRpdXNDYXJkfX07CiAgICAtLW9nLXJhZGl1cy1idG46ICAgICAge3tyYWRpdXNCdG59fTsKICAgIC0tb2ctcmFkaXVzLWlucHV0OiAgICB7e3JhZGl1c0lucHV0fX07CiAgICAtLW9nLWZvbnQtZGlzcGxheTogICAgJ3t7Zm9udERpc3BsYXl9fScsIHNhbnMtc2VyaWY7CiAgICAtLW9nLWZvbnQtYm9keTogICAgICAgJ3t7Zm9udEJvZHl9fScsIHNhbnMtc2VyaWY7CiAgICAtLW9nLXNoYWRvdy1jYXJkOgogICAgICAgIDAgMCAwIDFweCB2YXIoLS1vZy1ib3JkZXItaW5zZXQpIGluc2V0LAogICAgICAgIDAgNDBweCA4MHB4IHJnYmEoMCwwLDAsMC44NSksCiAgICAgICAgMCAwIDEwMHB4IHZhcigtLW9nLWdvbGQtZ2xvdyk7CiAgICAtLW9nLXNoYWRvdy1pbnB1dDoKICAgICAgICBpbnNldCAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjYpLAogICAgICAgIGluc2V0IDAgMXB4IDAgdmFyKC0tb2ctYm9yZGVyLWluc2V0KTsKICAgIC0tb2ctc2hhZG93LWJ0bi0zZDoKICAgICAgICAwIDZweCAwIHZhcigtLW9nLWdvbGQtc2hhZG93KSwKICAgICAgICAwIDEwcHggMzBweCByZ2JhKDAsMCwwLDAuNSksCiAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMjUpOwp9Cnt7c2VsZXRvckNhcmR9fTo6YmVmb3JlIHsKICAgIGNvbnRlbnQ6ICcnICFpbXBvcnRhbnQ7CiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDsKICAgIHRvcDogMCAhaW1wb3J0YW50OwogICAgbGVmdDogNTAlICFpbXBvcnRhbnQ7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgIWltcG9ydGFudDsKICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDsKICAgIGhlaWdodDogMXB4ICFpbXBvcnRhbnQ7CiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCB2YXIoLS1vZy1nb2xkKSwgdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7CiAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweCAhaW1wb3J0YW50OwogICAgb3BhY2l0eTogMC41ICFpbXBvcnRhbnQ7Cn0Ke3tzZWxldG9yVGl0dWxvfX0gaDEgewogICAgZm9udC1mYW1pbHk6IHZhcigtLW9nLWZvbnQtZGlzcGxheSkgIWltcG9ydGFudDsKICAgIGNvbG9yOiB2YXIoLS1vZy10ZXh0KSAhaW1wb3J0YW50OwogICAgZm9udC1zaXplOiB7e3RhbWFuaG9UaXR1bG99fSAhaW1wb3J0YW50OwogICAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50OwogICAgbGV0dGVyLXNwYWNpbmc6IC0xLjVweCAhaW1wb3J0YW50OwogICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50OwogICAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDsKICAgIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50Owp9Cnt7c2VsZXRvclRpdHVsb319IHAgewogICAgY29sb3I6IHZhcigtLW9nLXRleHQtbXV0ZWQpICFpbXBvcnRhbnQ7CiAgICBmb250LWZhbWlseTogdmFyKC0tb2ctZm9udC1ib2R5KSAhaW1wb3J0YW50OwogICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7CiAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7CiAgICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7CiAgICBtYXJnaW4tYm90dG9tOiAyOHB4ICFpbXBvcnRhbnQ7Cn0Ke3tzZWxldG9yQm90b2VzV3JhcH19IHsKICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7CiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7CiAgICBtYXJnaW46IDAgIWltcG9ydGFudDsKfQp7e3NlbGV0b3JCb3RvZXNDb2x1bmF9fSB7CiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7CiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7CiAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50OwogICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsKICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDsKICAgIG1hcmdpbjogMCAhaW1wb3J0YW50Owp9Cnt7c2VsZXRvckJvdGFvU29jaWFsfX0gewogICAgYmFja2dyb3VuZDogdmFyKC0tb2ctYmctYnRuKSAhaW1wb3J0YW50OwogICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tb2ctYm9yZGVyLXN1YnRsZSkgIWltcG9ydGFudDsKICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW9nLXJhZGl1cy1idG4pICFpbXBvcnRhbnQ7CiAgICBwYWRkaW5nOiAxM3B4IDAgIWltcG9ydGFudDsKICAgIGNvbG9yOiB2YXIoLS1vZy10ZXh0KSAhaW1wb3J0YW50OwogICAgZm9udC1mYW1pbHk6IHZhcigtLW9nLWZvbnQtYm9keSkgIWltcG9ydGFudDsKICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50OwogICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50OwogICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OwogICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50OwogICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsKICAgIGdhcDogMTBweCAhaW1wb3J0YW50OwogICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMTc1LDAuODg1LDAuMzIsMS4yNzUpICFpbXBvcnRhbnQ7CiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7CiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OwogICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7CiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7Cn0Ke3tzZWxldG9yQm90YW9Tb2NpYWx9fTpob3ZlciB7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCkgIWltcG9ydGFudDsKICAgIGJhY2tncm91bmQ6IHZhcigtLW9nLWJnLWJ0bi1ob3ZlcikgIWltcG9ydGFudDsKICAgIGJvcmRlci1jb2xvcjogdmFyKC0tb2ctYm9yZGVyLWhvdmVyKSAhaW1wb3J0YW50OwogICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsMCwwLDAuNCkgIWltcG9ydGFudDsKfQp7e3NlbGV0b3JCb3Rhb1NvY2lhbH19OmFjdGl2ZSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSAhaW1wb3J0YW50OyB9Cnt7c2VsZXRvckJvdGFvU29jaWFsfX0gc3ZnLCB7e3NlbGV0b3JCb3Rhb1NvY2lhbH19IGltZyB7IHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7IGhlaWdodDogMjBweCAhaW1wb3J0YW50OyBmbGV4LXNocmluazogMCAhaW1wb3J0YW50OyB9Cnt7c2VsZXRvckRpdmlzb3J9fSB7CiAgICBjb2xvcjogdmFyKC0tb2ctdGV4dC1tdXRlZCkgIWltcG9ydGFudDsKICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1vZy1mb250LWJvZHkpICFpbXBvcnRhbnQ7CiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7CiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7CiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDsKICAgIGxldHRlci1zcGFjaW5nOiAwLjE0ZW0gIWltcG9ydGFudDsKICAgIG1hcmdpbjogMjBweCAwICFpbXBvcnRhbnQ7Cn0Ke3tzZWxldG9yTGluaGFEaXZpc29yfX0gewogICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgdmFyKC0tb2ctYm9yZGVyLXN1YnRsZSksIHRyYW5zcGFyZW50KSAhaW1wb3J0YW50OwogICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDsKICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50OwogICAgZmxleDogMSAhaW1wb3J0YW50Owp9Cnt7c2VsZXRvckNhbXBvSW5wdXR9fSB7CiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vZy1iZy1pbnB1dCkgIWltcG9ydGFudDsKICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW9nLXJhZGl1cy1pbnB1dCkgIWltcG9ydGFudDsKICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW9nLWdvbGQtYm9yZGVyKSAhaW1wb3J0YW50OwogICAgcGFkZGluZzogMTRweCAxNnB4ICFpbXBvcnRhbnQ7CiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7CiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7CiAgICBnYXA6IDEycHggIWltcG9ydGFudDsKICAgIGJveC1zaGFkb3c6IHZhcigtLW9nLXNoYWRvdy1pbnB1dCkgIWltcG9ydGFudDsKICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cywgYm94LXNoYWRvdyAwLjI1cyAhaW1wb3J0YW50OwogICAgbWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50Owp9Cnt7c2VsZXRvckNhbXBvSW5wdXR9fTpmb2N1cy13aXRoaW4gewogICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1vZy1nb2xkLWZvY3VzKSAhaW1wb3J0YW50OwogICAgYm94LXNoYWRvdzoKICAgICAgICBpbnNldCAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjYpLAogICAgICAgIDAgMCAwIDNweCB2YXIoLS1vZy1nb2xkLWdsb3cpLAogICAgICAgIDAgMCAyMHB4IHZhcigtLW9nLWdvbGQtZ2xvdykgIWltcG9ydGFudDsKfQp7e3NlbGV0b3JJbnB1dFRleHRvfX0gewogICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsKICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50OwogICAgY29sb3I6IHZhcigtLW9nLXRleHQpICFpbXBvcnRhbnQ7CiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7CiAgICBmb250LWZhbWlseTogdmFyKC0tb2ctZm9udC1ib2R5KSAhaW1wb3J0YW50OwogICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7CiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OwogICAgY2FyZXQtY29sb3I6IHZhcigtLW9nLWdvbGQpICFpbXBvcnRhbnQ7Cn0Ke3tzZWxldG9ySW5wdXRUZXh0b319OjpwbGFjZWhvbGRlciB7IGNvbG9yOiB2YXIoLS1vZy10ZXh0LXBsYWNlaG9sZGVyKSAhaW1wb3J0YW50OyB9Cnt7c2VsZXRvckxhYmVsfX0gc3BhbiB7CiAgICBjb2xvcjogdmFyKC0tb2ctdGV4dC1sYWJlbCkgIWltcG9ydGFudDsKICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1vZy1mb250LWJvZHkpICFpbXBvcnRhbnQ7CiAgICBmb250LXNpemU6IDkuNXB4ICFpbXBvcnRhbnQ7CiAgICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7CiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7CiAgICBsZXR0ZXItc3BhY2luZzogMC4xNGVtICFpbXBvcnRhbnQ7CiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OwogICAgbWFyZ2luLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7Cn0Ke3tzZWxldG9yQ2FtcG9JbnB1dH19IHN2ZyB7IGNvbG9yOiB2YXIoLS1vZy10ZXh0LW11dGVkKSAhaW1wb3J0YW50OyBmbGV4LXNocmluazogMCAhaW1wb3J0YW50OyB0cmFuc2l0aW9uOiBjb2xvciAwLjI1cyAhaW1wb3J0YW50OyB9Cnt7c2VsZXRvckNhbXBvSW5wdXR9fTpmb2N1cy13aXRoaW4gc3ZnIHsgY29sb3I6IHZhcigtLW9nLWdvbGQpICFpbXBvcnRhbnQ7IH0Ke3tzZWxldG9yQm90YW9QcmluY2lwYWx9fSB7CiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1vZy1nb2xkKSAwJSwgdmFyKC0tb2ctZ29sZC1kaW0pIDU1JSwgdmFyKC0tb2ctZ29sZC1kZWVwKSAxMDAlKSAhaW1wb3J0YW50OwogICAgY29sb3I6IHt7Y29yVGV4dG9Cb3Rhb319ICFpbXBvcnRhbnQ7CiAgICBmb250LWZhbWlseTogdmFyKC0tb2ctZm9udC1kaXNwbGF5KSAhaW1wb3J0YW50OwogICAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50OwogICAgZm9udC1zaXplOiB7e3RhbWFuaG9UZXh0b0JvdGFvfX0gIWltcG9ydGFudDsKICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW0gIWltcG9ydGFudDsKICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDsKICAgIGhlaWdodDoge3thbHR1cmFCb3Rhb319ICFpbXBvcnRhbnQ7CiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1vZy1yYWRpdXMtYnRuKSAhaW1wb3J0YW50OwogICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7CiAgICBib3gtc2hhZG93OiB2YXIoLS1vZy1zaGFkb3ctYnRuLTNkKSAhaW1wb3J0YW50OwogICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZSAhaW1wb3J0YW50OwogICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsKICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50OwogICAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7CiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDsKICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDsKfQp7e3NlbGV0b3JCb3Rhb1ByaW5jaXBhbH19OjpiZWZvcmUgewogICAgY29udGVudDogJycgIWltcG9ydGFudDsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50OwogICAgdG9wOiAwICFpbXBvcnRhbnQ7CiAgICBsZWZ0OiAtNjAlICFpbXBvcnRhbnQ7CiAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7CiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDsKICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoMjU1LDI1NSwyNTUsMC4xOCksIHRyYW5zcGFyZW50KSAhaW1wb3J0YW50OwogICAgdHJhbnNmb3JtOiBza2V3WCgtMjBkZWcpICFpbXBvcnRhbnQ7CiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuNnMgZWFzZSAhaW1wb3J0YW50Owp9Cnt7c2VsZXRvckJvdGFvUHJpbmNpcGFsfX06aG92ZXI6OmJlZm9yZSB7IGxlZnQ6IDEyMCUgIWltcG9ydGFudDsgfQp7e3NlbGV0b3JCb3Rhb1ByaW5jaXBhbH19OmhvdmVyIHsKICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLW9nLWdvbGQtaG92ZXIpIDAlLCAjZjBjODAwIDU1JSwgI2Q5YjIwMCAxMDAlKSAhaW1wb3J0YW50OwogICAgYm94LXNoYWRvdzoKICAgICAgICAwIDZweCAwIHZhcigtLW9nLWdvbGQtc2hhZG93KSwKICAgICAgICAwIDE0cHggMzZweCB2YXIoLS1vZy1nb2xkLWdsb3cpLAogICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjMpICFpbXBvcnRhbnQ7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCkgIWltcG9ydGFudDsKfQp7e3NlbGV0b3JCb3Rhb1ByaW5jaXBhbH19OmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KSAhaW1wb3J0YW50OwogICAgYm94LXNoYWRvdzogMCAxcHggMCB2YXIoLS1vZy1nb2xkLXNoYWRvdyksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSAhaW1wb3J0YW50Owp9Cnt7c2VsZXRvckJvdGFvUHJpbmNpcGFsfX06ZGlzYWJsZWQgewogICAgYmFja2dyb3VuZDogIzFjMWMxYyAhaW1wb3J0YW50OwogICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDsKICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsKICAgIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDsKICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50Owp9Cnt7c2VsZXRvckJvdGFvUHJpbmNpcGFsfX06ZGlzYWJsZWQ6OmJlZm9yZSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfQ==';
const BASE_JS_B64   = '';

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

  var gold        = v.corGold         || '#ffcc00';
  var goldDim     = v.corGoldDim      || '#e0b800';
  var goldDeep    = v.corGoldDeep     || '#c9a600';
  var goldShadow  = v.corGoldShadow   || '#6b5500';
  var goldGlow    = v.corGoldGlow     || 'rgba(255,204,0,0.06)';
  var goldBorder  = v.corGoldBorder   || 'rgba(255,204,0,0.08)';
  var bgCard      = v.corBgCard       || '#111111';
  var bgInput     = v.corBgInput      || '#0d0d0d';
  var bgBtn       = v.corBgBtn        || 'rgba(255,255,255,0.03)';
  var borderS     = v.corBorderSubtle || 'rgba(255,255,255,0.07)';
  var corTxt      = v.corText         || '#ffffff';
  var corMuted    = v.corTextMuted    || '#666666';
  var corPlaceh   = v.corTextPlaceholder || '#333333';
  var corTxtBtn   = v.corTextoBotao   || '#0a0a0a';
  var radius      = v.radiusCard      || '28px';
  var radiusBtn   = v.radiusBtn       || '14px';
  var radiusInput = v.radiusInput     || '14px';
  var padding     = v.paddingCard     || '44px 40px 40px';
  var largura     = v.larguraCard     || '420px';
  var fontD       = v.fontDisplay     || 'Syne';
  var fontB       = v.fontBody        || 'DM Sans';
  var tamTit      = v.tamanhoTitulo   || '34px';
  var tamBtn      = v.tamanhoTextoBotao || '15px';
  var altBtn      = v.alturaBotao     || '52px';

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<link href="https://fonts.googleapis.com/css2?family=' + encodeURIComponent(fontD) + ':wght@700;800;900&family=' + encodeURIComponent(fontB) + ':wght@300;400;600;700&display=swap" rel="stylesheet">'
    + '<style>'
    + '*{box-sizing:border-box;margin:0;padding:0;}'
    + 'body{background:#000;display:flex;align-items:center;justify-content:center;min-height:520px;padding:24px;}'
    + '.card{'
      + 'background:' + bgCard + ';'
      + 'border-radius:' + radius + ';'
      + 'padding:' + padding + ';'
      + 'border:1px solid ' + borderS + ';'
      + 'box-shadow:0 0 0 1px rgba(255,255,255,0.02) inset,0 40px 80px rgba(0,0,0,0.85),0 0 100px ' + goldGlow + ';'
      + 'max-width:' + largura + ';width:100%;'
      + 'position:relative;font-family:"' + fontB + '",sans-serif;'
    + '}'
    + '.card::before{content:"";position:absolute;top:0;left:50%;transform:translateX(-50%);width:60%;height:1px;background:linear-gradient(90deg,transparent,' + gold + ',transparent);opacity:0.5;}'
    + 'h1{font-family:"' + fontD + '",sans-serif;color:' + corTxt + ';font-size:' + tamTit + ';font-weight:900;letter-spacing:-1.5px;text-transform:uppercase;line-height:1;margin-bottom:8px;}'
    + 'p.sub{color:' + corMuted + ';font-size:14px;margin-bottom:28px;}'
    + '.social-btn{background:' + bgBtn + ';border:1px solid ' + borderS + ';border-radius:' + radiusBtn + ';padding:13px;color:' + corTxt + ';font-size:14px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:10px;width:100%;cursor:pointer;}'
    + '.divider{display:flex;align-items:center;gap:12px;margin:20px 0;}'
    + '.div-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,' + borderS + ',transparent);}'
    + '.div-text{color:' + corMuted + ';font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.14em;}'
    + '.lbl{font-size:9.5px;font-weight:800;text-transform:uppercase;letter-spacing:.14em;color:' + gold + ';display:block;margin-bottom:3px;}'
    + '.field{background:' + bgInput + ';border-radius:' + radiusInput + ';border:1px solid ' + goldBorder + ';padding:14px 16px;display:flex;align-items:center;gap:12px;margin-bottom:16px;}'
    + '.field-icon{color:' + corMuted + ';}'
    + '.field input{background:transparent;border:none;outline:none;color:' + corTxt + ';font-size:14px;width:100%;font-family:"' + fontB + '",sans-serif;caret-color:' + gold + ';}'
    + '.field input::placeholder{color:' + corPlaceh + ';}'
    + '.btn-main{'
      + 'background:linear-gradient(180deg,' + gold + ' 0%,' + goldDim + ' 55%,' + goldDeep + ' 100%);'
      + 'color:' + corTxtBtn + ';'
      + 'font-family:"' + fontD + '",sans-serif;font-weight:800;font-size:' + tamBtn + ';'
      + 'text-transform:uppercase;letter-spacing:.04em;'
      + 'height:' + altBtn + ';border-radius:' + radiusBtn + ';border:none;width:100%;cursor:pointer;'
      + 'box-shadow:0 6px 0 ' + goldShadow + ',0 10px 30px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.25);'
      + 'margin-top:8px;position:relative;overflow:hidden;'
    + '}'
    + '</style></head><body>'
    + '<div class="card">'
      + '<h1>Entrar</h1>'
      + '<p class="sub">Acesse sua conta para continuar.</p>'
      + '<button class="social-btn">🔵 Continuar com Google</button>'
      + '<button class="social-btn">🟣 Continuar com Discord</button>'
      + '<div class="divider"><div class="div-line"></div><span class="div-text">ou continuar com</span><div class="div-line"></div></div>'
      + '<div><span class="lbl">E-mail</span>'
        + '<div class="field">'
          + '<span class="field-icon">✉</span>'
          + '<input type="email" placeholder="seu@email.com">'
        + '</div>'
      + '</div>'
      + '<button class="btn-main">Entrar</button>'
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