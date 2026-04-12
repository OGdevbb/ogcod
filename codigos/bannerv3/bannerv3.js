// =============================================================
//  OG! — bannerv3.js  (Carrossel Vizion com Botao)
// =============================================================

const COMPONENT = {
  title:       'Carrossel Vizion com Botão',
  description: 'Carrossel 3D com ate 3 banners clicaveis, titulo com gradiente, descricao e botao neon animado. Inserido via MutationObserver.',
  tags:        ['Carrossel', '3D', 'Botão', 'Neon', 'CSS', 'JS', 'Grátis'],

  fields: [
    // Conteudo
    { id: 'titulo',    label: 'Titulo',    type: 'text', placeholder: 'Ex: Novidades', default: 'Novidades',    required: true  },
    { id: 'descricao', label: 'Descricao', type: 'text', placeholder: 'Ex: Confira...', default: 'Confira nossas ofertas exclusivas.', required: false },

    // Banners
    { id: 'banner1Img',  label: 'Imagem Banner 1',  type: 'text', placeholder: 'https://...', default: 'https://cdn.ereemby.com/attachments/17755178332908220imagem.jpeg', required: true  },
    { id: 'banner1Link', label: 'Link Banner 1',     type: 'text', placeholder: 'https://...', default: '#', required: true  },
    { id: 'banner2Img',  label: 'Imagem Banner 2',  type: 'text', placeholder: 'https://...', default: 'https://cdn.ereemby.com/attachments/17742276567925104imagem.jpeg', required: false },
    { id: 'banner2Link', label: 'Link Banner 2',     type: 'text', placeholder: 'https://...', default: '#', required: false },
    { id: 'banner3Img',  label: 'Imagem Banner 3',  type: 'text', placeholder: 'https://...', default: 'https://cdn.ereemby.com/attachments/17742278368778932imagem.jpeg', required: false },
    { id: 'banner3Link', label: 'Link Banner 3',     type: 'text', placeholder: 'https://...', default: '#', required: false },

    // Botao
    { id: 'textoBotao',      label: 'Texto do Botao',       type: 'text', placeholder: 'Ex: Junte-se a nos', default: 'Junte-se a nós', required: true },
    { id: 'textoBotaoHover', label: 'Texto apos clique',    type: 'text', placeholder: 'Ex: Obrigado!',      default: 'Agradecemos a preferência', required: false },
    { id: 'linkBotao',       label: 'Link do Botao',        type: 'text', placeholder: 'https://...',         default: 'https://chat.whatsapp.com/...', required: true },

    // Layout
    { id: 'maxWidth',      label: 'Largura maxima carrossel', type: 'text', placeholder: 'Ex: 850px', default: '850px', required: true },
    { id: 'alturaMax',     label: 'Altura maxima',            type: 'text', placeholder: 'Ex: 400px', default: '400px', required: true },
    { id: 'borderRadius',  label: 'Border Radius',           type: 'text', placeholder: 'Ex: 16px',  default: '16px',  required: true },
    { id: 'velocidade',    label: 'Velocidade autoplay (ms)', type: 'text', placeholder: 'Ex: 4000',  default: '4000',  required: false },

    // Seletor
    { id: 'seletorInsercao', label: 'Seletor CSS de insercao', type: 'text', placeholder: 'Ex: .sc-bce61202-1.dqceHj', default: '.sc-bce61202-1.dqceHj', required: true },

    // Cores
    { id: 'gradientStart',  label: 'Gradiente Titulo (inicio)', type: 'color', default: '#80FFFF' },
    { id: 'gradientEnd',    label: 'Gradiente Titulo (fim)',     type: 'color', default: '#00DAFF' },
    { id: 'corDotAtivo',    label: 'Cor do Dot Ativo',           type: 'color', default: '#4400ff' },
    { id: 'corBotaoPrimary',label: 'Cor Botao Primary',          type: 'color', default: '#c084fc' },
    { id: 'corBotaoN1',     label: 'Cor Botao N1',               type: 'color', default: '#a855f7' },
    { id: 'corBotaoN2',     label: 'Cor Botao N2',               type: 'color', default: '#9333ea' },

    // Tipografia
    { id: 'tamanhoTitulo',   label: 'Tamanho do Titulo',   type: 'text', placeholder: 'Ex: 24px', default: '24px', required: false },
    { id: 'tamanhoDescricao',label: 'Tamanho da Descricao',type: 'text', placeholder: 'Ex: 18px', default: '18px', required: false },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = 'LnZpemlvbi1oZXJvIHsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgIGNvbG9yOiB3aGl0ZTsKICAgIHBhZGRpbmc6IDEwcHg7CiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIG92ZXJmbG93LXg6IGhpZGRlbjsKICAgIHdpZHRoOiAxMDAlOwogICAgbWFyZ2luLXRvcDogLTMwcHg7CiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDsKfQoudGl0dWxvLXBlcXVlbm8gewogICAgZm9udC1mYW1pbHk6ICdQbHVzIEpha2FydGEgU2FucycsIHNhbnMtc2VyaWY7CiAgICBmb250LXNpemU6IHt7dGFtYW5ob1RpdHVsb319OwogICAgZm9udC13ZWlnaHQ6IDgwMDsKICAgIGNvbG9yOiB3aGl0ZTsKICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICB6LWluZGV4OiAyOwogICAgbWFyZ2luOiAwIDAgNXB4IDA7Cn0KLnRleHRvLWRlc3RhY2FkbyB7CiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHt7Z3JhZGllbnRTdGFydH19LCB7e2dyYWRpZW50RW5kfX0pOwogICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7CiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7CiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICBmb250LXdlaWdodDogOTAwOwp9Ci5kZXNjcmljYW8gewogICAgZm9udC1mYW1pbHk6ICdQbHVzIEpha2FydGEgU2FucycsIHNhbnMtc2VyaWY7CiAgICBmb250LXNpemU6IHt7dGFtYW5ob0Rlc2NyaWNhb319OwogICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7CiAgICBtYXJnaW4tYm90dG9tOiAyNXB4OwogICAgZm9udC13ZWlnaHQ6IDUwMDsKICAgIG1heC13aWR0aDogOTAlOwogICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgei1pbmRleDogMjsKICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDsKfQouY2Fyb3VzZWwtd3JhcHBlciB7CiAgICB3aWR0aDogMTAwJTsKICAgIG1heC13aWR0aDoge3ttYXhXaWR0aH19OwogICAgZGlzcGxheTogZmxleDsKICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICBhbGlnbi1pdGVtczogY2VudGVyOwp9Ci5jYXJvdXNlbC1jb250YWluZXIgewogICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgd2lkdGg6IDEwMCU7CiAgICBoZWlnaHQ6IDQwdnc7CiAgICBtYXgtaGVpZ2h0OiB7e2FsdHVyYU1heH19OwogICAgbWluLWhlaWdodDogMjAwcHg7CiAgICBwZXJzcGVjdGl2ZTogMTIwMHB4Owp9Ci5jYXJvdXNlbC10cmFjayB7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICB3aWR0aDogMTAwJTsKICAgIGhlaWdodDogMTAwJTsKICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7Cn0KLmNhcm91c2VsLWl0ZW0gewogICAgcG9zaXRpb246IGFic29sdXRlOwogICAgdG9wOiAwOyBsZWZ0OiAwOwogICAgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsKICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNnMgY3ViaWMtYmV6aWVyKC43NywwLC4xNzUsMSksIGZpbHRlciAuNnMgZWFzZSwgb3BhY2l0eSAuNnMgZWFzZTsKICAgIG9wYWNpdHk6IDA7CiAgICBmaWx0ZXI6IGJsdXIoNXB4KTsKICAgIHRyYW5zZm9ybTogc2NhbGUoLjUpOwp9Ci5jYXJvdXNlbC1pdGVtIGEgewogICAgZGlzcGxheTogYmxvY2s7CiAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOwogICAgYm9yZGVyLXJhZGl1czoge3tib3JkZXJSYWRpdXN9fTsKICAgIG92ZXJmbG93OiBoaWRkZW47CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjRzIGVhc2U7Cn0KLmNhcm91c2VsLWl0ZW0gYTpob3ZlciB7IHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IH0KLmNhcm91c2VsLWl0ZW0gaW1nIHsKICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7CiAgICBvYmplY3QtZml0OiBjb3ZlcjsKICAgIGRpc3BsYXk6IGJsb2NrOwogICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7CiAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgIGJvcmRlci1yYWRpdXM6IHt7Ym9yZGVyUmFkaXVzfX07Cn0KLmNhcm91c2VsLWl0ZW0uYWN0aXZlIHsKICAgIG9wYWNpdHk6IDE7CiAgICBmaWx0ZXI6IGJsdXIoMCk7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgc2NhbGUoMSk7CiAgICB6LWluZGV4OiAxMDsKfQouY2Fyb3VzZWwtaXRlbS5wcmV2IHsKICAgIG9wYWNpdHk6IC41OwogICAgZmlsdGVyOiBibHVyKDRweCk7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTU1JSkgdHJhbnNsYXRlWigtMjAwcHgpIHJvdGF0ZVkoMjVkZWcpIHNjYWxlKC44KTsKICAgIHotaW5kZXg6IDU7Cn0KLmNhcm91c2VsLWl0ZW0ubmV4dCB7CiAgICBvcGFjaXR5OiAuNTsKICAgIGZpbHRlcjogYmx1cig0cHgpOwogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1JSkgdHJhbnNsYXRlWigtMjAwcHgpIHJvdGF0ZVkoLTI1ZGVnKSBzY2FsZSguOCk7CiAgICB6LWluZGV4OiA1Owp9Ci5hcnJvdyB7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICB0b3A6IDUwJTsKICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsKICAgIHdpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTsKICAgIGJvcmRlcjogbm9uZTsKICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgIHRyYW5zaXRpb246IGFsbCAuM3M7CiAgICB6LWluZGV4OiAyMDsKICAgIGN1cnNvcjogcG9pbnRlcjsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICBjb2xvcjogI2ZmZjsKICAgIGZvbnQtc2l6ZTogMjhweDsKfQouYXJyb3c6aG92ZXIgewogICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOCk7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMS4xKTsKfQouYXJyb3cubGVmdCB7IGxlZnQ6IDEwcHg7IH0KLmFycm93LnJpZ2h0IHsgcmlnaHQ6IDEwcHg7IH0KLmNhcm91c2VsLWRvdHMgewogICAgZGlzcGxheTogZmxleDsKICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgZ2FwOiAxMnB4OwogICAgbWFyZ2luLXRvcDogMjBweDsKfQouZG90IHsKICAgIHdpZHRoOiAxMnB4OyBoZWlnaHQ6IDEycHg7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC40KTsKICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgIGN1cnNvcjogcG9pbnRlcjsKICAgIHRyYW5zaXRpb246IGFsbCAuM3M7Cn0KLmRvdC5hY3RpdmUgewogICAgYmFja2dyb3VuZC1jb2xvcjoge3tjb3JEb3RBdGl2b319OwogICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpOwp9CkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzIwcHgpIHsKICAgIC52aXppb24taGVybyB7IHBhZGRpbmc6IDIwcHggMHB4OyBtYXJnaW4tdG9wOiAtMjVweDsgfQogICAgLmNhcm91c2VsLXdyYXBwZXIgeyB3aWR0aDogMTAwJTsgbWF4LXdpZHRoOiAxMDB2dzsgfQogICAgLmNhcm91c2VsLWNvbnRhaW5lciB7IGhlaWdodDogNTV2dzsgbWF4LWhlaWdodDogMjgwcHg7IHBlcnNwZWN0aXZlOiA4MDBweDsgfQogICAgLmNhcm91c2VsLWl0ZW0ucHJldiB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVaKC0xMjBweCkgcm90YXRlWSgyNWRlZykgc2NhbGUoMC43KTsgfQogICAgLmNhcm91c2VsLWl0ZW0ubmV4dCB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHRyYW5zbGF0ZVooLTEyMHB4KSByb3RhdGVZKC0yNWRlZykgc2NhbGUoMC43KTsgfQogICAgLmFycm93IHsgd2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsgfQogICAgLmFycm93LmxlZnQgeyBsZWZ0OiAwcHg7IH0KICAgIC5hcnJvdy5yaWdodCB7IHJpZ2h0OiAwcHg7IH0KICAgIC50aXR1bG8tcGVxdWVubyB7IGZvbnQtc2l6ZTogMjBweDsgfQogICAgLmRlc2NyaWNhbyB7IGZvbnQtc2l6ZTogMTZweDsgbWF4LXdpZHRoOiA5NSU7IG1hcmdpbi1ib3R0b206IDE1cHg7IH0KfQouYnV0dG9uIHsKICAgIC0tcHJpbWFyeToge3tjb3JCb3Rhb1ByaW1hcnl9fTsKICAgIC0tbmV1dHJhbC0xOiB7e2NvckJvdGFvTjF9fTsKICAgIC0tbmV1dHJhbC0yOiB7e2NvckJvdGFvTjJ9fTsKICAgIC0tcmFkaXVzOiAxNHB4OwogICAgY3Vyc29yOiBwb2ludGVyOwogICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTsKICAgIGJvcmRlcjogbm9uZTsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICBtaW4td2lkdGg6IDIwMHB4OwogICAgcGFkZGluZzogMjBweDsKICAgIGhlaWdodDogNThweDsKICAgIG1hcmdpbi10b3A6IDMwcHg7CiAgICBtYXJnaW4tYm90dG9tOiAwcHg7CiAgICBmb250LWZhbWlseTogIkdhbGFubyBHcm90ZXNxdWUiLCBQb3BwaW5zLCBNb250c2VycmF0LCBzYW5zLXNlcmlmOwogICAgZm9udC1zaXplOiAxOHB4OwogICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgIGNvbG9yOiAjMDAwMDAwOwogICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDsKICAgIG92ZXJmbG93OiBoaWRkZW47CiAgICB6LWluZGV4OiAyOwogICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSgxOTIsMTMyLDI1MiwwLjcpLCAwIDAgMTBweCByZ2JhKDIxNiwxODAsMjU0LDAuNSk7CiAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMTY4LDg1LDI0NywwLjg3NCksIDAgMCAxNXB4IHJnYmEoMTQ3LDUxLDIzNCwwLjc2MSksIGluc2V0IDAgMCA4cHggcmdiKDE5MiwxMzIsMjUyKTsKICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7CiAgICBhbmltYXRpb246IG5lb25HbG93IDNzIGVhc2UtaW4tb3V0IGluZmluaXRlOwp9Ci5idXR0b246OmJlZm9yZSB7CiAgICBjb250ZW50OiAiIjsKICAgIGluc2V0OiA3cHggNnB4IDZweCA2cHg7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB2YXIoLS1uZXV0cmFsLTEpLCB2YXIoLS1uZXV0cmFsLTIpKTsKICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7CiAgICBmaWx0ZXI6IGJsdXIoMC41cHgpOwogICAgei1pbmRleDogMjsKfQouYnV0dG9uOjphZnRlciB7CiAgICBjb250ZW50OiAiIjsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgIGluc2V0OiAwOwogICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTsKICAgIGJvcmRlcjogMi41cHggc29saWQgdHJhbnNwYXJlbnQ7CiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tbmV1dHJhbC0xKSwgdmFyKC0tbmV1dHJhbC0yKSkgcGFkZGluZy1ib3gsIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCksIHJnYmEoMCwwLDAsMC4yNSkpIGJvcmRlci1ib3g7CiAgICB6LWluZGV4OiAwOwogICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTsKfQouYnV0dG9uOmhvdmVyIHsKICAgIGJveC1zaGFkb3c6IDAgMCAxMnB4IHJnYigxOTIsMTMyLDI1MiksIDAgMCAyNXB4IHJnYigxNjgsODUsMjQ3KSwgaW5zZXQgMCAwIDEycHggcmdiKDIxNiwxODAsMjU0KTsKICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTsKICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDsKICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsKICAgIHRleHQtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwwLDAsMC44KSwgMCAwIDE1cHggcmdiYSgwLDAsMCwwLjYpOwp9Ci5idXR0b246aG92ZXI6OmFmdGVyIHsKICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMS4xKTsKICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAycHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMjApOwp9CkBrZXlmcmFtZXMgbmVvbkdsb3cgewogICAgMCUsMTAwJSB7IGJveC1zaGFkb3c6IDAgMCA4cHggcmdiKDE2OCw4NSwyNDcpLCAwIDAgMTVweCByZ2JhKDE2OCw4NSwyNDcsMC42NDMpLCBpbnNldCAwIDAgOHB4IHJnYmEoMTkyLDEzMiwyNTIsMC44ODIpOyB9CiAgICA1MCUgeyBib3gtc2hhZG93OiAwIDAgMTJweCByZ2JhKDE5MiwxMzIsMjUyLDAuNiksIDAgMCAyNXB4IHJnYmEoMjE2LDE4MCwyNTQsMC41KSwgaW5zZXQgMCAwIDEycHggcmdiYSgxNjgsODUsMjQ3LDAuNTQxKTsgfQp9Ci5idXR0b246YWN0aXZlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgYm94LXNoYWRvdzogMCAwIDFweCAycHggcmdiYSgyNTUsMjU1LDI1NSwwLjMpLCAwIDEwcHggM3B4IC0zcHggcmdiYSgwLDAsMCwwLjIpOyB9Ci5zdGF0ZSBwIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH0KLnN0YXRlIC5pY29uIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7IGJvdHRvbTogMDsgbWFyZ2luOiBhdXRvOyB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpOyB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfQouc3RhdGUgLmljb24gc3ZnIHsgb3ZlcmZsb3c6IHZpc2libGU7IH0KLm91dGxpbmUgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7IG92ZXJmbG93OiBoaWRkZW47IHotaW5kZXg6IDE7IG9wYWNpdHk6IDA7IHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlOyBpbnNldDogLTJweCAtMy41cHg7IH0KLm91dGxpbmU6OmJlZm9yZSB7IGNvbnRlbnQ6ICIiOyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAtNTAlOyBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChmcm9tIDE4MGRlZywgdHJhbnNwYXJlbnQgNjAlLCB3aGl0ZSA4MCUsIHRyYW5zcGFyZW50IDEwMCUpOyBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkOyB9CkBrZXlmcmFtZXMgc3BpbiB7IDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH0gMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfQouYnV0dG9uOmhvdmVyIC5vdXRsaW5lIHsgb3BhY2l0eTogMTsgfQouYnV0dG9uOmhvdmVyIC5vdXRsaW5lOjpiZWZvcmUgeyBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZzsgfQouc3RhdGUgcCBzcGFuIHsgZGlzcGxheTogYmxvY2s7IG9wYWNpdHk6IDA7IGFuaW1hdGlvbjogc2xpZGVEb3duIDAuOHMgZWFzZSBmb3J3YXJkcyBjYWxjKHZhcigtLWkpICogMC4wM3MpOyB9Ci5idXR0b246aG92ZXIgcCBzcGFuIHsgb3BhY2l0eTogMTsgYW5pbWF0aW9uOiB3YXZlIDAuNXMgZWFzZSBmb3J3YXJkcyBjYWxjKHZhcigtLWkpICogMC4wMnMpOyB9Ci5idXR0b246Zm9jdXMgcCBzcGFuIHsgb3BhY2l0eTogMTsgYW5pbWF0aW9uOiBkaXNhcGVhciAwLjZzIGVhc2UgZm9yd2FyZHMgY2FsYyh2YXIoLS1pKSAqIDAuMDNzKTsgfQpAa2V5ZnJhbWVzIHdhdmUgeyAzMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTsgfSA1MCUgeyBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTsgfSAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH0KQGtleWZyYW1lcyBzbGlkZURvd24geyAwJSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCkgdHJhbnNsYXRlWCg1cHgpIHJvdGF0ZSgtOTBkZWcpOyBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IGZpbHRlcjogYmx1cig1cHgpOyB9IDMwJSB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpOyBmaWx0ZXI6IGJsdXIoMCk7IH0gNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpOyB9IDEwMCUgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfQpAa2V5ZnJhbWVzIGRpc2FwZWFyIHsgZnJvbSB7IG9wYWNpdHk6IDE7IH0gdG8geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSB0cmFuc2xhdGVZKDIwcHgpOyBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IGZpbHRlcjogYmx1cig1cHgpOyB9IH0KLnN0YXRlLS1kZWZhdWx0IC5pY29uIHN2ZyB7IGFuaW1hdGlvbjogbGFuZCAwLjZzIGVhc2UgZm9yd2FyZHM7IH0KLmJ1dHRvbjpob3ZlciAuc3RhdGUtLWRlZmF1bHQgLmljb24geyB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMS4yNSk7IH0KLmJ1dHRvbjpmb2N1cyAuc3RhdGUtLWRlZmF1bHQgc3ZnIHsgYW5pbWF0aW9uOiB0YWtlT2ZmIDAuOHMgbGluZWFyIGZvcndhcmRzOyB9Ci5idXR0b246Zm9jdXMgLnN0YXRlLS1kZWZhdWx0IC5pY29uIHsgdHJhbnNmb3JtOiByb3RhdGUoMCkgc2NhbGUoMS4yNSk7IH0KQGtleWZyYW1lcyB0YWtlT2ZmIHsgMCUgeyBvcGFjaXR5OiAxOyB9IDYwJSB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg3MHB4KSByb3RhdGUoNDVkZWcpIHNjYWxlKDIpOyB9IDEwMCUgeyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTYwcHgpIHJvdGF0ZSg0NWRlZykgc2NhbGUoMCk7IH0gfQpAa2V5ZnJhbWVzIGxhbmQgeyAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNjBweCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTUwZGVnKSBzY2FsZSgyKTsgb3BhY2l0eTogMDsgZmlsdGVyOiBibHVyKDNweCk7IH0gMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApIHJvdGF0ZSgwKTsgb3BhY2l0eTogMTsgZmlsdGVyOiBibHVyKDApOyB9IH0KLnN0YXRlLS1kZWZhdWx0IC5pY29uOmJlZm9yZSB7IGNvbnRlbnQ6ICIiOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMzAlOyBoZWlnaHQ6IDJweDsgd2lkdGg6IDA7IGxlZnQ6IC01cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQsIHJnYmEoMCwwLDAsMC41KSk7IH0KLmJ1dHRvbjpmb2N1cyAuc3RhdGUtLWRlZmF1bHQgLmljb246YmVmb3JlIHsgYW5pbWF0aW9uOiBjb250cmFpbCAwLjhzIGxpbmVhciBmb3J3YXJkczsgfQpAa2V5ZnJhbWVzIGNvbnRyYWlsIHsgMCUgeyB3aWR0aDogMDsgb3BhY2l0eTogMTsgfSA4JSB7IHdpZHRoOiAxNXB4OyB9IDYwJSB7IG9wYWNpdHk6IDAuNzsgd2lkdGg6IDgwcHg7IH0gMTAwJSB7IG9wYWNpdHk6IDA7IHdpZHRoOiAxNjBweDsgfSB9Ci5zdGF0ZSB7IHBhZGRpbmctbGVmdDogMjlweDsgei1pbmRleDogMjsgZGlzcGxheTogZmxleDsgcG9zaXRpb246IHJlbGF0aXZlOyB9Ci5zdGF0ZS0tc2VudCB7IGRpc3BsYXk6IG5vbmU7IH0KLnN0YXRlLS1zZW50IHN2ZyB7IHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7IG1hcmdpbi1yaWdodDogOHB4OyB9Ci5idXR0b246Zm9jdXMgLnN0YXRlLS1kZWZhdWx0IHsgcG9zaXRpb246IGFic29sdXRlOyB9Ci5idXR0b246Zm9jdXMgLnN0YXRlLS1zZW50IHsgZGlzcGxheTogZmxleDsgfQouYnV0dG9uOmZvY3VzIC5zdGF0ZS0tc2VudCBzcGFuIHsgb3BhY2l0eTogMDsgYW5pbWF0aW9uOiBzbGlkZURvd24gMC44cyBlYXNlIGZvcndhcmRzIGNhbGModmFyKC0taSkgKiAwLjJzKTsgfQouYnV0dG9uOmZvY3VzIC5zdGF0ZS0tc2VudCAuaWNvbiBzdmcgeyBvcGFjaXR5OiAwOyBhbmltYXRpb246IGFwcGVhciAxLjJzIGVhc2UgZm9yd2FyZHMgMC44czsgfQpAa2V5ZnJhbWVzIGFwcGVhciB7IDAlIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiBzY2FsZSg0KSByb3RhdGUoLTQwZGVnKTsgY29sb3I6IHZhcigtLXByaW1hcnkpOyBmaWx0ZXI6IGJsdXIoNHB4KTsgfSAzMCUgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDAuNik7IGZpbHRlcjogYmx1cigxcHgpOyB9IDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgZmlsdGVyOiBibHVyKDApOyB9IDEwMCUgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH0KQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3MjBweCkgewogICAgLmJ1dHRvbiB7IG1pbi13aWR0aDogdW5zZXQ7IHBhZGRpbmc6IDE1cHggMjBweDsgZm9udC1zaXplOiAxNnB4OyBtYXJnaW4tdG9wOiAyMHB4OyB9Cn0=';
const BASE_JS_B64   = 'KGZ1bmN0aW9uKCkgewogICd1c2Ugc3RyaWN0JzsKICBpZiAod2luZG93LnZpemlvbkNhcm91c2VsSW5pdCkgcmV0dXJuOwogIHdpbmRvdy52aXppb25DYXJvdXNlbEluaXQgPSB0cnVlOwoKICB2YXIgYmFubmVycyA9IFsKICAgIHsgc3JjOiAie3tiYW5uZXIxSW1nfX0iLCBsaW5rOiAie3tiYW5uZXIxTGlua319IiB9LAogICAgLyogSUY6YmFubmVyMkltZyAqL3sgc3JjOiAie3tiYW5uZXIySW1nfX0iLCBsaW5rOiAie3tiYW5uZXIyTGlua319IiB9LC8qIEVORElGICovCiAgICAvKiBJRjpiYW5uZXIzSW1nICoveyBzcmM6ICJ7e2Jhbm5lcjNJbWd9fSIsIGxpbms6ICJ7e2Jhbm5lcjNMaW5rfX0iIH0vKiBFTkRJRiAqLwogIF07CgogIGZ1bmN0aW9uIGNyaWFyQ2Fycm9zc2VsVml6aW9uKGVsZW1lbnRvKSB7CiAgICBpZiAoZWxlbWVudG8ucXVlcnlTZWxlY3RvcignLnZpemlvbi1oZXJvJykpIHJldHVybjsKCiAgICB2YXIgYmFubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgICBiYW5uZXJEaXYuY2xhc3NOYW1lID0gJ3Zpemlvbi1oZXJvJzsKICAgIGJhbm5lckRpdi5pbm5lckhUTUwgPQogICAgICAnPGRpdiBjbGFzcz0idGl0dWxvLXBlcXVlbm8iPjxzcGFuIGNsYXNzPSJ0ZXh0by1kZXN0YWNhZG8iPnt7dGl0dWxvfX08L3NwYW4+PC9kaXY+JwogICAgICArICc8ZGl2IGNsYXNzPSJkZXNjcmljYW8iPnt7ZGVzY3JpY2FvfX08L2Rpdj4nCiAgICAgICsgJzxkaXYgY2xhc3M9ImNhcm91c2VsLXdyYXBwZXIiPicKICAgICAgICArICc8ZGl2IGNsYXNzPSJjYXJvdXNlbC1jb250YWluZXIiPicKICAgICAgICAgICsgJzxkaXYgY2xhc3M9ImNhcm91c2VsLXRyYWNrIj48L2Rpdj4nCiAgICAgICAgICArICc8YnV0dG9uIGNsYXNzPSJhcnJvdyBsZWZ0Ij48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjwvc3ZnPjwvYnV0dG9uPicKICAgICAgICAgICsgJzxidXR0b24gY2xhc3M9ImFycm93IHJpZ2h0Ij48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48L3N2Zz48L2J1dHRvbj4nCiAgICAgICAgKyAnPC9kaXY+JwogICAgICAgICsgJzxkaXYgY2xhc3M9ImNhcm91c2VsLWRvdHMiPjwvZGl2PicKICAgICAgKyAnPC9kaXY+JwogICAgICArICc8YnV0dG9uIGNsYXNzPSJidXR0b24iIGlkPSJqdW50ZS1zZS1idG4iPicKICAgICAgICArICc8ZGl2IGNsYXNzPSJvdXRsaW5lIj48L2Rpdj4nCiAgICAgICAgKyAnPGRpdiBjbGFzcz0ic3RhdGUgc3RhdGUtLWRlZmF1bHQiPjxkaXYgY2xhc3M9Imljb24iPjxzdmcgd2lkdGg9IjFlbSIgaGVpZ2h0PSIxZW0iIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHlsZT0iZmlsdGVyOnVybCgjc2hhZG93KSI+PHBhdGggZD0iTTE0LjIxOTkgMjEuNjNDMTMuMDM5OSAyMS42MyAxMS4zNjk5IDIwLjggMTAuMDQ5OSAxNi44M0w5LjMyOTg4IDE0LjY3TDcuMTY5ODggMTMuOTVDMy4yMDk4OCAxMi42MyAyLjM3OTg4IDEwLjk2IDIuMzc5ODggOS43ODAwMUMyLjM3OTg4IDguNjEwMDEgMy4yMDk4OCA2LjkzMDAxIDcuMTY5ODggNS42MDAwMUwxNS42NTk5IDIuNzcwMDFDMTcuNzc5OSAyLjA2MDAxIDE5LjU0OTkgMi4yNzAwMSAyMC42Mzk5IDMuMzUwMDFDMjEuNzI5OSA0LjQzMDAxIDIxLjkzOTkgNi4yMTAwMSAyMS4yMjk5IDguMzMwMDFMMTguMzk5OSAxNi44MkMxNy4wNjk5IDIwLjggMTUuMzk5OSAyMS42MyAxNC4yMTk5IDIxLjYzWk03LjYzOTg4IDcuMDMwMDFDNC44NTk4OCA3Ljk2MDAxIDMuODY5ODggOS4wNjAwMSAzLjg2OTg4IDkuNzgwMDFDMy44Njk4OCAxMC41IDQuODU5ODggMTEuNiA3LjYzOTg4IDEyLjUyTDEwLjE1OTkgMTMuMzZDMTAuMzc5OSAxMy40MyAxMC41NTk5IDEzLjYxIDEwLjYyOTkgMTMuODNMMTEuNDY5OSAxNi4zNUMxMi4zODk5IDE5LjEzIDEzLjQ5OTkgMjAuMTIgMTQuMjE5OSAyMC4xMkMxNC45Mzk5IDIwLjEyIDE2LjAzOTkgMTkuMTMgMTYuOTY5OSAxNi4zNUwxOS43OTk5IDcuODYwMDFDMjAuMzA5OSA2LjMyMDAxIDIwLjIxOTkgNS4wNjAwMSAxOS41Njk5IDQuNDEwMDFDMTguOTE5OSAzLjc2MDAxIDE3LjY1OTkgMy42ODAwMSAxNi4xMjk5IDQuMTkwMDFMNy42Mzk4OCA3LjAzMDAxWiIgZmlsbD0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEwLjExIDE0LjRDOS45MjAwNSAxNC40IDkuNzMwMDUgMTQuMzMgOS41ODAwNSAxNC4xOEM5LjI5MDA1IDEzLjg5IDkuMjkwMDUgMTMuNDEgOS41ODAwNSAxMy4xMkwxMy4xNiA5LjUzQzEzLjQ1IDkuMjQgMTMuOTMgOS4yNCAxNC4yMiA5LjUzQzE0LjUxIDkuODIgMTQuNTEgMTAuMyAxNC4yMiAxMC41OUwxMC42NCAxNC4xOEMxMC41IDE0LjMzIDEwLjMgMTQuNCAxMC4xMSAxNC40WiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9nPjxkZWZzPjxmaWx0ZXIgaWQ9InNoYWRvdyI+PGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjEiIHN0ZERldmlhdGlvbj0iMC42IiBmbG9vZC1vcGFjaXR5PSIwLjUiLz48L2ZpbHRlcj48L2RlZnM+PC9zdmc+PC9kaXY+PHA+PC9wPjwvZGl2PicKICAgICAgICArICc8ZGl2IGNsYXNzPSJzdGF0ZSBzdGF0ZS0tc2VudCI+PGRpdiBjbGFzcz0iaWNvbiI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIxZW0iIHdpZHRoPSIxZW0iIHN0cm9rZS13aWR0aD0iMC41cHgiIHN0cm9rZT0iYmxhY2siPjxnIHN0eWxlPSJmaWx0ZXI6dXJsKCNzaGFkb3cpIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAyMi43NUM2LjA3IDIyLjc1IDEuMjUgMTcuOTMgMS4yNSAxMkMxLjI1IDYuMDcgNi4wNyAxLjI1IDEyIDEuMjVDMTcuOTMgMS4yNSAyMi43NSA2LjA3IDIyLjc1IDEyQzIyLjc1IDE3LjkzIDE3LjkzIDIyLjc1IDEyIDIyLjc1Wk0xMiAyLjc1QzYuOSAyLjc1IDIuNzUgNi45IDIuNzUgMTJDMi43NSAxNy4xIDYuOSAyMS4yNSAxMiAyMS4yNUMxNy4xIDIxLjI1IDIxLjI1IDE3LjEgMjEuMjUgMTJDMjEuMjUgNi45IDE3LjEgMi43NSAxMiAyLjc1WiIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEwLjU3OTUgMTUuNTgwMUMxMC4zNzk1IDE1LjU4MDEgMTAuMTg5NSAxNS41MDAxIDEwLjA0OTUgMTUuMzYwMUw3LjIxOTQ1IDEyLjUzMDFDNi45Mjk0NSAxMi4yNDAxIDYuOTI5NDUgMTEuNzYwMSA3LjIxOTQ1IDExLjQ3MDFDNy41MDk0NSAxMS4xODAxIDcuOTg5NDUgMTEuMTgwMSA4LjI3OTQ1IDExLjQ3MDFMMTAuNTc5NSAxMy43NzAxTDE1LjcxOTUgOC42MzAxQzE2LjAwOTUgOC4zNDAxIDE2LjQ4OTUgOC4zNDAxIDE2Ljc3OTUgOC42MzAxQzE3LjA2OTUgOC45MjAxIDE3LjA2OTUgOS40MDAxIDE2Ljc3OTUgOS42OTAxTDExLjEwOTUgMTUuMzYwMUMxMC45Njk1IDE1LjUwMDEgMTAuNzc5NSAxNS41ODAxIDEwLjU3OTUgMTUuNTgwMVoiLz48L2c+PC9zdmc+PC9kaXY+PHA+PC9wPjwvZGl2PicKICAgICAgKyAnPC9idXR0b24+JzsKCiAgICBlbGVtZW50by5wcmVwZW5kKGJhbm5lckRpdik7CgogICAgdmFyIHRyYWNrID0gYmFubmVyRGl2LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC10cmFjaycpOwogICAgdmFyIGRvdHNDb250YWluZXIgPSBiYW5uZXJEaXYucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLWRvdHMnKTsKICAgIHZhciBjdXJyZW50SW5kZXggPSAwOwogICAgdmFyIGF1dG9QbGF5SW50ZXJ2YWw7CiAgICB2YXIgYXV0b1BsYXlEdXJhdGlvbiA9IHt7dmVsb2NpZGFkZX19OwoKICAgIGJhbm5lcnMuZm9yRWFjaChmdW5jdGlvbihiYW5uZXIsIGluZGV4KSB7CiAgICAgIHZhciBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgICBzbGlkZS5jbGFzc05hbWUgPSAnY2Fyb3VzZWwtaXRlbSc7CiAgICAgIHNsaWRlLmlubmVySFRNTCA9ICc8YSBocmVmPSInICsgYmFubmVyLmxpbmsgKyAnIiB0YXJnZXQ9Il9zZWxmIj48aW1nIHNyYz0iJyArIGJhbm5lci5zcmMgKyAnIiBhbHQ9IkJhbm5lciAnICsgKGluZGV4KzEpICsgJyIgbG9hZGluZz0ibGF6eSI+PC9hPic7CiAgICAgIHRyYWNrLmFwcGVuZENoaWxkKHNsaWRlKTsKICAgICAgdmFyIGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgICBkb3QuY2xhc3NOYW1lID0gJ2RvdCc7CiAgICAgIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkgeyBnb1RvU2xpZGUoaW5kZXgpOyB9KTsKICAgICAgZG90c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb3QpOwogICAgfSk7CgogICAgdmFyIHNsaWRlcyA9IHRyYWNrLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbC1pdGVtJyk7CiAgICB2YXIgZG90cyA9IGRvdHNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmRvdCcpOwoKICAgIGZ1bmN0aW9uIHVwZGF0ZUNhcm91c2VsKCkgewogICAgICBzbGlkZXMuZm9yRWFjaChmdW5jdGlvbihzbGlkZSwgaW5kZXgpIHsKICAgICAgICBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnLCdwcmV2JywnbmV4dCcpOwogICAgICAgIGlmIChpbmRleCA9PT0gY3VycmVudEluZGV4KSBzbGlkZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTsKICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gKGN1cnJlbnRJbmRleCAtIDEgKyBiYW5uZXJzLmxlbmd0aCkgJSBiYW5uZXJzLmxlbmd0aCkgc2xpZGUuY2xhc3NMaXN0LmFkZCgncHJldicpOwogICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSAoY3VycmVudEluZGV4ICsgMSkgJSBiYW5uZXJzLmxlbmd0aCkgc2xpZGUuY2xhc3NMaXN0LmFkZCgnbmV4dCcpOwogICAgICB9KTsKICAgICAgZG90cy5mb3JFYWNoKGZ1bmN0aW9uKGRvdCwgaW5kZXgpIHsgZG90LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGluZGV4ID09PSBjdXJyZW50SW5kZXgpOyB9KTsKICAgICAgc3RvcEF1dG9QbGF5KCk7IHN0YXJ0QXV0b1BsYXkoKTsKICAgIH0KICAgIGZ1bmN0aW9uIGdvVG9TbGlkZShpKSB7IGN1cnJlbnRJbmRleCA9IGk7IHVwZGF0ZUNhcm91c2VsKCk7IH0KICAgIGZ1bmN0aW9uIG5leHRTbGlkZSgpIHsgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCArIDEpICUgYmFubmVycy5sZW5ndGg7IHVwZGF0ZUNhcm91c2VsKCk7IH0KICAgIGZ1bmN0aW9uIHByZXZTbGlkZSgpIHsgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCAtIDEgKyBiYW5uZXJzLmxlbmd0aCkgJSBiYW5uZXJzLmxlbmd0aDsgdXBkYXRlQ2Fyb3VzZWwoKTsgfQogICAgZnVuY3Rpb24gc3RhcnRBdXRvUGxheSgpIHsgc3RvcEF1dG9QbGF5KCk7IGF1dG9QbGF5SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChuZXh0U2xpZGUsIGF1dG9QbGF5RHVyYXRpb24pOyB9CiAgICBmdW5jdGlvbiBzdG9wQXV0b1BsYXkoKSB7IGNsZWFySW50ZXJ2YWwoYXV0b1BsYXlJbnRlcnZhbCk7IH0KCiAgICBiYW5uZXJEaXYucXVlcnlTZWxlY3RvcignLmFycm93LmxlZnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXZTbGlkZSk7CiAgICBiYW5uZXJEaXYucXVlcnlTZWxlY3RvcignLmFycm93LnJpZ2h0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0U2xpZGUpOwogICAgYmFubmVyRGl2LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgc3RvcEF1dG9QbGF5KTsKICAgIGJhbm5lckRpdi5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHN0YXJ0QXV0b1BsYXkpOwoKICAgIHZhciBib3RhbyA9IGJhbm5lckRpdi5xdWVyeVNlbGVjdG9yKCcjanVudGUtc2UtYnRuJyk7CiAgICBmdW5jdGlvbiBhZGRUZXh0V2l0aFNwYW5zKGVsLCB0ZXh0KSB7CiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykgewogICAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpOwogICAgICAgIHNwYW4uc3R5bGUuc2V0UHJvcGVydHkoJy0taScsIGkpOwogICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0W2ldID09PSAnICcgPyAnXHUwMEEwJyA6IHRleHRbaV07CiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoc3Bhbik7CiAgICAgIH0KICAgIH0KICAgIGFkZFRleHRXaXRoU3BhbnMoYm90YW8ucXVlcnlTZWxlY3RvcignLnN0YXRlLS1kZWZhdWx0IHAnKSwgJ3t7dGV4dG9Cb3Rhb319Jyk7CiAgICBhZGRUZXh0V2l0aFNwYW5zKGJvdGFvLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0ZS0tc2VudCBwJyksICd7e3RleHRvQm90YW9Ib3Zlcn19Jyk7CiAgICBib3Rhby5vbmNsaWNrID0gZnVuY3Rpb24oKSB7IHdpbmRvdy5vcGVuKCd7e2xpbmtCb3Rhb319JywgJ19ibGFuaycpOyB9OwoKICAgIGdvVG9TbGlkZSgwKTsKCiAgICB2YXIgdmlzT2JzID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMpIHsKICAgICAgZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGUpIHsgaWYgKGUuaXNJbnRlcnNlY3RpbmcpIHN0YXJ0QXV0b1BsYXkoKTsgZWxzZSBzdG9wQXV0b1BsYXkoKTsgfSk7CiAgICB9LCB7IHRocmVzaG9sZDogMC41IH0pOwogICAgdmlzT2JzLm9ic2VydmUoYmFubmVyRGl2KTsKICB9CgogIHZhciBvZ1NlbGV0b3IgPSAne3tzZWxldG9ySW5zZXJjYW99fSc7CiAgdmFyIG9nVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvZ1NlbGV0b3IpOwogIGlmIChvZ1RhcmdldCkgeyBjcmlhckNhcnJvc3NlbFZpemlvbihvZ1RhcmdldCk7IHJldHVybjsgfQogIHZhciBvZ09icyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKF8sIG9icykgewogICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvZ1NlbGV0b3IpOwogICAgaWYgKGVsKSB7IGNyaWFyQ2Fycm9zc2VsVml6aW9uKGVsKTsgb2JzLmRpc2Nvbm5lY3QoKTsgfQogIH0pOwogIG9nT2JzLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7Cn0pKCk7';

// =============================================================
//  ENGINE — nao mexa abaixo desta linha
// =============================================================

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
  var c = tpl.replace(/\/\* IF:(\w+) \*\/([\ \s\S]*?)\/\* ENDIF \*\//g, function(_, k, b) { return v[k] ? b : ''; });
  c = c.replace(/\{\{(\w+)\}\}/g, function(_, k) { return v[k] || ''; });
  return c.replace(/\n{3,}/g, '\n\n').trim();
}

// ── Preview ao vivo ──────────────────────────────────────────
function renderPreview() {
  var v   = getVals();
  var box = document.getElementById('previewBox');

  var b1 = v.banner1Img || 'https://via.placeholder.com/850x400/333/FFF?text=Banner+1';
  var b1l = v.banner1Link || '#';
  var b2 = v.banner2Img || '';
  var b2l = v.banner2Link || '#';
  var b3 = v.banner3Img || '';
  var b3l = v.banner3Link || '#';

  var bannersArr = '[';
  bannersArr += '{src:"' + b1 + '",link:"' + b1l + '"}';
  if (b2) bannersArr += ',{src:"' + b2 + '",link:"' + b2l + '"}';
  if (b3) bannersArr += ',{src:"' + b3 + '",link:"' + b3l + '"}';
  bannersArr += ']';

  var titulo = v.titulo || 'Novidades';
  var desc = v.descricao || '';
  var gStart = v.gradientStart || '#80FFFF';
  var gEnd = v.gradientEnd || '#00DAFF';
  var dotCor = v.corDotAtivo || '#4400ff';
  var btnP = v.corBotaoPrimary || '#c084fc';
  var btnN1 = v.corBotaoN1 || '#a855f7';
  var btnN2 = v.corBotaoN2 || '#9333ea';
  var maxW = v.maxWidth || '850px';
  var altMax = v.alturaMax || '400px';
  var radius = v.borderRadius || '16px';
  var vel = v.velocidade || '4000';
  var txtBtn = v.textoBotao || 'Junte-se a nós';
  var txtBtnH = v.textoBotaoHover || 'Agradecemos a preferência';
  var linkBtn = v.linkBotao || '#';
  var tamTit = v.tamanhoTitulo || '24px';
  var tamDesc = v.tamanhoDescricao || '18px';

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">'
    + '<style>'
    + 'body{margin:0;padding:20px;background:#111;font-family:"Plus Jakarta Sans",sans-serif;}'
    + '.vizion-hero{display:flex;flex-direction:column;align-items:center;color:white;padding:10px;position:relative;overflow-x:hidden;width:100%;}'
    + '.titulo-pequeno{font-size:' + tamTit + ';font-weight:800;color:white;letter-spacing:-0.5px;z-index:2;margin:0 0 5px;}'
    + '.texto-destacado{background:linear-gradient(90deg,' + gStart + ',' + gEnd + ');-webkit-background-clip:text;background-clip:text;color:transparent;font-weight:900;}'
    + '.descricao{font-size:' + tamDesc + ';color:rgba(255,255,255,0.85);margin-bottom:25px;font-weight:500;max-width:90%;z-index:2;}'
    + '.carousel-wrapper{width:100%;max-width:' + maxW + ';display:flex;flex-direction:column;align-items:center;}'
    + '.carousel-container{position:relative;width:100%;height:260px;perspective:1200px;}'
    + '.carousel-track{position:relative;width:100%;height:100%;transform-style:preserve-3d;}'
    + '.carousel-item{position:absolute;top:0;left:0;width:100%;height:100%;transition:transform .6s cubic-bezier(.77,0,.175,1),filter .6s ease,opacity .6s ease;opacity:0;filter:blur(5px);transform:scale(.5);}'
    + '.carousel-item a{display:block;width:100%;height:100%;border-radius:' + radius + ';overflow:hidden;position:relative;transition:transform .4s ease;}'
    + '.carousel-item a:hover{transform:scale(1.05);}'
    + '.carousel-item img{width:100%;height:100%;object-fit:cover;display:block;border-radius:' + radius + ';}'
    + '.carousel-item.active{opacity:1;filter:blur(0);transform:translateZ(0) scale(1);z-index:10;}'
    + '.carousel-item.prev{opacity:.5;filter:blur(4px);transform:translateX(-55%) translateZ(-200px) rotateY(25deg) scale(.8);z-index:5;}'
    + '.carousel-item.next{opacity:.5;filter:blur(4px);transform:translateX(55%) translateZ(-200px) rotateY(-25deg) scale(.8);z-index:5;}'
    + '.arrow{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;background:rgba(0,0,0,.5);border:none;border-radius:50%;z-index:20;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;transition:all .3s;}'
    + '.arrow:hover{background:rgba(0,0,0,.8);}'
    + '.arrow.left{left:10px;}.arrow.right{right:10px;}'
    + '.carousel-dots{display:flex;justify-content:center;gap:12px;margin-top:15px;}'
    + '.dot{width:12px;height:12px;background:rgba(255,255,255,.4);border-radius:50%;cursor:pointer;transition:all .3s;}'
    + '.dot.active{background:' + dotCor + ';transform:scale(1.3);}'
    + '.button{--primary:' + btnP + ';--neutral-1:' + btnN1 + ';--neutral-2:' + btnN2 + ';--radius:14px;cursor:pointer;border-radius:var(--radius);border:none;display:flex;align-items:center;justify-content:center;position:relative;min-width:200px;padding:20px;height:58px;margin-top:25px;font-family:Poppins,sans-serif;font-size:18px;font-weight:600;color:#000;background:#000;overflow:hidden;z-index:2;box-shadow:0 0 8px rgba(168,85,247,.87),0 0 15px rgba(147,51,234,.76),inset 0 0 8px rgb(192,132,252);animation:neonGlow 3s ease-in-out infinite;}'
    + '.button::before{content:"";inset:7px 6px 6px 6px;position:absolute;background:linear-gradient(to top,var(--neutral-1),var(--neutral-2));border-radius:30px;filter:blur(0.5px);z-index:2;}'
    + '.button::after{content:"";position:absolute;inset:0;border-radius:var(--radius);border:2.5px solid transparent;background:linear-gradient(var(--neutral-1),var(--neutral-2)) padding-box,linear-gradient(to bottom,rgba(255,255,255,.08),rgba(0,0,0,.25)) border-box;z-index:0;}'
    + '@keyframes neonGlow{0%,100%{box-shadow:0 0 8px rgb(168,85,247),0 0 15px rgba(168,85,247,.64),inset 0 0 8px rgba(192,132,252,.88);}50%{box-shadow:0 0 12px rgba(192,132,252,.6),0 0 25px rgba(216,180,254,.5),inset 0 0 12px rgba(168,85,247,.54);}}'
    + '.state{padding-left:29px;z-index:2;display:flex;position:relative;}'
    + '.state p{display:flex;align-items:center;justify-content:center;color:white;margin:0;}'
    + '.state .icon{position:absolute;left:0;top:0;bottom:0;margin:auto;transform:scale(1.25);display:flex;align-items:center;justify-content:center;color:white;}'
    + '.state--sent{display:none;}'
    + '</style></head><body>'
    + '<div class="vizion-hero">'
      + '<div class="titulo-pequeno"><span class="texto-destacado">' + titulo + '</span></div>'
      + (desc ? '<div class="descricao">' + desc + '</div>' : '')
      + '<div class="carousel-wrapper"><div class="carousel-container"><div class="carousel-track"></div>'
      + '<button class="arrow left"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"white\" width=\"24\" height=\"24\"><path d=\"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z\"/></svg></button>'
      + '<button class="arrow right"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"white\" width=\"24\" height=\"24\"><path d=\"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z\"/></svg></button>'
      + '</div><div class="carousel-dots"></div></div>'
      + '<button class="button"><div class="state state--default"><div class="icon" style="color:white"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><path d="M14.22 21.63C13.04 21.63 11.37 20.8 10.05 16.83L9.33 14.67L7.17 13.95C3.21 12.63 2.38 10.96 2.38 9.78C2.38 8.61 3.21 6.93 7.17 5.6L15.66 2.77C17.78 2.06 19.55 2.27 20.64 3.35C21.73 4.43 21.94 6.21 21.23 8.33L18.4 16.82C17.07 20.8 15.4 21.63 14.22 21.63Z" fill="currentColor"/></svg></div><p style="color:white;margin:0">' + txtBtn + '</p></div></button>'
    + '</div>'
    + '<script>'
    + 'var banners=' + bannersArr + ';'
    + 'var track=document.querySelector(".carousel-track");'
    + 'var dotsC=document.querySelector(".carousel-dots");'
    + 'var ci=0;var api;'
    + 'banners.forEach(function(b,i){'
      + 'var s=document.createElement("div");s.className="carousel-item";'
      + 's.innerHTML=\'<a href="\'+b.link+\'"><img src="\'+b.src+\'"></a>\';'
      + 'track.appendChild(s);'
      + 'var d=document.createElement("div");d.className="dot";'
      + 'd.onclick=function(){ci=i;upd();};dotsC.appendChild(d);'
    + '});'
    + 'var slides=track.querySelectorAll(".carousel-item");'
    + 'var dots=dotsC.querySelectorAll(".dot");'
    + 'function upd(){'
      + 'slides.forEach(function(s,i){'
        + 's.classList.remove("active","prev","next");'
        + 'if(i===ci)s.classList.add("active");'
        + 'else if(i===(ci-1+banners.length)%banners.length)s.classList.add("prev");'
        + 'else if(i===(ci+1)%banners.length)s.classList.add("next");'
      + '});'
      + 'dots.forEach(function(d,i){d.classList.toggle("active",i===ci);});'
      + 'clearInterval(api);api=setInterval(function(){ci=(ci+1)%banners.length;upd();},'+vel+');'
    + '}'
    + 'document.querySelector(".arrow.left").onclick=function(){ci=(ci-1+banners.length)%banners.length;upd();};'
    + 'document.querySelector(".arrow.right").onclick=function(){ci=(ci+1)%banners.length;upd();};'
    + 'upd();'
    + '<\/script>'
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
