// =============================================================
//  OG! — tema-3.js  (Banner Vertical)
// =============================================================

const COMPONENT = {
  title:       'Banner Vertical',
  description: 'Hero com texto a esquerda e grade de imagens com scroll vertical infinito a direita. No mobile vira 2 fileiras horizontais deslizantes. Cor, velocidade, textos e imagens totalmente customizaveis.',
  tags:        ['Banner', 'Hero', 'Carrossel', 'CSS', 'JS', 'Gratis'],

  fields: [
    // ── Conteudo ─────────────────────────────────────────────
    { id: 'titulo',          label: 'Titulo (antes do destaque)', type: 'text', placeholder: 'Ex: Bem Vindo(a)',              default: 'Bem Vindo(a)',              required: true  },
    { id: 'tituloDestaque',  label: 'Titulo Destaque (colorido)', type: 'text', placeholder: 'Ex: Minha Loja',               default: 'Minha Loja',               required: true  },
    { id: 'descricao',       label: 'Descricao',                  type: 'text', placeholder: 'Ex: Sua loja de confiança...', default: 'Sua loja digital de confianca. Precos acessiveis, entrega rapida e suporte sempre disponivel.', required: false },
    { id: 'btnTexto',        label: 'Texto do Botao',             type: 'text', placeholder: 'Ex: Suporte',                  default: 'Suporte',                  required: true  },
    { id: 'btnLink',         label: 'Link do Botao',              type: 'text', placeholder: 'Ex: https://wa.me/...',        default: 'https://wa.me/',           required: true  },
    { id: 'btnIcone',        label: 'Icone FontAwesome do Botao', type: 'text', placeholder: 'Ex: fa-regular fa-comment',    default: 'fa-regular fa-comment',    required: false },

    // ── Imagens do grid (minimo 3, ideal 9) ──────────────────
    { id: 'img1', label: 'Imagem 1 (URL)', type: 'text', placeholder: 'https://...', default: '', required: true  },
    { id: 'img2', label: 'Imagem 2 (URL)', type: 'text', placeholder: 'https://...', default: '', required: true  },
    { id: 'img3', label: 'Imagem 3 (URL)', type: 'text', placeholder: 'https://...', default: '', required: true  },
    { id: 'img4', label: 'Imagem 4 (URL)', type: 'text', placeholder: 'https://...', default: '', required: false },
    { id: 'img5', label: 'Imagem 5 (URL)', type: 'text', placeholder: 'https://...', default: '', required: false },
    { id: 'img6', label: 'Imagem 6 (URL)', type: 'text', placeholder: 'https://...', default: '', required: false },
    { id: 'img7', label: 'Imagem 7 (URL)', type: 'text', placeholder: 'https://...', default: '', required: false },
    { id: 'img8', label: 'Imagem 8 (URL)', type: 'text', placeholder: 'https://...', default: '', required: false },
    { id: 'img9', label: 'Imagem 9 (URL)', type: 'text', placeholder: 'https://...', default: '', required: false },

    // ── Cores ────────────────────────────────────────────────
    { id: 'corDestaque',  label: 'Cor de Destaque (titulo)',   type: 'color', default: '#0000ff' },
    { id: 'corTexto',     label: 'Cor do Texto Principal',     type: 'color', default: '#ffffff' },
    { id: 'corTextoSec',  label: 'Cor do Texto Secundario',    type: 'color', default: '#a0a0a0' },
    { id: 'corFundoBtn',  label: 'Fundo do Botao',             type: 'color', default: '#1a1a1f' },
    { id: 'corBordaBtn',  label: 'Borda do Botao',             type: 'color', default: '#333333' },

    // ── Layout ───────────────────────────────────────────────
    { id: 'paddingHero',   label: 'Padding do Hero',           type: 'text', placeholder: 'Ex: 50px 20px', default: '50px 20px', required: false },
    { id: 'maxWidth',      label: 'Largura maxima',            type: 'text', placeholder: 'Ex: 1300px',    default: '1300px',    required: false },
    { id: 'tamanhoTitulo', label: 'Tamanho do Titulo',         type: 'text', placeholder: 'Ex: 3.5rem',   default: '3.5rem',    required: false },
    { id: 'paddingBtn',    label: 'Padding do Botao',          type: 'text', placeholder: 'Ex: 14px 32px',default: '14px 32px', required: false },
    { id: 'radiusBtn',     label: 'Border Radius do Botao',    type: 'text', placeholder: 'Ex: 12px',     default: '12px',      required: false },
    { id: 'radiusCard',    label: 'Border Radius das Imagens', type: 'text', placeholder: 'Ex: 12px',     default: '12px',      required: false },
    { id: 'alturaGrid',    label: 'Altura do Grid (PC)',       type: 'text', placeholder: 'Ex: 450px',    default: '450px',     required: false },
    { id: 'alturaImagem',  label: 'Altura de cada Imagem',     type: 'text', placeholder: 'Ex: 110px',    default: '110px',     required: false },

    // ── Velocidades ──────────────────────────────────────────
    { id: 'velDevagar', label: 'Velocidade Coluna 1 (s)',  type: 'text', placeholder: 'Ex: 40', default: '40', required: false },
    { id: 'velMedio',   label: 'Velocidade Coluna 2 (s)',  type: 'text', placeholder: 'Ex: 30', default: '30', required: false },
    { id: 'velRapido',  label: 'Velocidade Coluna 3 (s)',  type: 'text', placeholder: 'Ex: 25', default: '25', required: false },

    // ── Fonte ────────────────────────────────────────────────
    { id: 'fontFamilia', label: 'Fonte (Google Fonts)', type: 'text', placeholder: 'Ex: Poppins', default: 'Poppins', required: false },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = 'IDpyb290IHsKICAgICAtLXQzLWhpZ2hsaWdodDoge3tjb3JEZXN0YXF1ZX19OwogICAgIC0tdDMtdGV4dC1tYWluOiB7e2NvclRleHRvfX07CiAgICAgLS10My10ZXh0LXNlYzoge3tjb3JUZXh0b1NlY319OwogICAgIC0tdDMtYnRuLWJnOiB7e2NvckZ1bmRvQnRufX07CiAgICAgLS10My1idG4tYm9yZGVyOiB7e2NvckJvcmRhQnRufX07CiB9CgogI3RlbWEtZ2VyYWRvLXQzLAogI3RlbWEtZ2VyYWRvLXQzICogewogICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7CiB9CgogLnQzLWhlcm8gewogICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgICAgZ2FwOiA0MHB4OwogICAgIHBhZGRpbmc6IHt7cGFkZGluZ0hlcm99fTsKICAgICBmb250LWZhbWlseTogJ3t7Zm9udEZhbWlsaWF9fScsIHNhbnMtc2VyaWY7CiAgICAgd2lkdGg6IDEwMCU7CiAgICAgbWF4LXdpZHRoOiB7e21heFdpZHRofX07CiAgICAgbWFyZ2luOiAwIGF1dG87CiB9CgogLnQzLWxlZnQgewogICAgIGZsZXg6IDE7CiAgICAgbWF4LXdpZHRoOiA1MDBweDsKICAgICB6LWluZGV4OiAyOwogfQoKIC50My1sZWZ0IGgxIHsKICAgICBmb250LXNpemU6IHt7dGFtYW5ob1RpdHVsb319OwogICAgIGZvbnQtd2VpZ2h0OiA3MDA7CiAgICAgY29sb3I6IHZhcigtLXQzLXRleHQtbWFpbikgIWltcG9ydGFudDsKICAgICBsaW5lLWhlaWdodDogMS4xOwogICAgIG1hcmdpbi1ib3R0b206IDIwcHg7CiAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7CiB9CgogLnQzLWxlZnQgaDEgc3BhbiB7CiAgICAgY29sb3I6IHZhcigtLXQzLWhpZ2hsaWdodCkgIWltcG9ydGFudDsKIH0KCiAudDMtbGVmdCBwIHsKICAgICBmb250LXNpemU6IDEuMDVyZW07CiAgICAgY29sb3I6IHZhcigtLXQzLXRleHQtc2VjKSAhaW1wb3J0YW50OwogICAgIG1hcmdpbi1ib3R0b206IDM1cHg7CiAgICAgbGluZS1oZWlnaHQ6IDEuNjsKIH0KCiAudDMtYnRuIHsKICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDsKICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgIGdhcDogMTBweDsKICAgICBwYWRkaW5nOiB7e3BhZGRpbmdCdG59fTsKICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10My1idG4tYmcpOwogICAgIGNvbG9yOiB2YXIoLS10My10ZXh0LW1haW4pICFpbXBvcnRhbnQ7CiAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdDMtYnRuLWJvcmRlcik7CiAgICAgYm9yZGVyLXJhZGl1czoge3tyYWRpdXNCdG59fTsKICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7CiAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICBmb250LXNpemU6IDFyZW07CiAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsKIH0KCiAudDMtYnRuOmhvdmVyIHsKICAgICBib3JkZXItY29sb3I6IHZhcigtLXQzLWhpZ2hsaWdodCk7CiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpOwogICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC40KTsKICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTsKIH0KCiAudDMtcmlnaHQgewogICAgIGZsZXg6IDEuMjsKICAgICBoZWlnaHQ6IHt7YWx0dXJhR3JpZH19OwogICAgIG92ZXJmbG93OiBoaWRkZW47CiAgICAgZGlzcGxheTogZmxleDsKICAgICBnYXA6IDE1cHg7CiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIGJsYWNrIDE1JSwgYmxhY2sgODUlLCB0cmFuc3BhcmVudCk7CiAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCwgYmxhY2sgMTUlLCBibGFjayA4NSUsIHRyYW5zcGFyZW50KTsKIH0KCiAudDMtY29sIHsKICAgICBkaXNwbGF5OiBmbGV4OwogICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICAgZ2FwOiAxNXB4OwogICAgIHdpZHRoOiAzMCU7CiB9CgogLnQzLWlubmVyIHsKICAgICBkaXNwbGF5OiBmbGV4OwogICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICAgZ2FwOiAxNXB4OwogfQoKIC50My1pdGVtIHsKICAgICBib3JkZXItcmFkaXVzOiB7e3JhZGl1c0NhcmR9fTsKICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7CiAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzOwogICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgICBmbGV4LXNocmluazogMDsKICAgICBiYWNrZ3JvdW5kOiAjMTExOwogfQoKIC50My1pdGVtIGltZyB7CiAgICAgd2lkdGg6IDEwMCU7CiAgICAgaGVpZ2h0OiB7e2FsdHVyYUltYWdlbX19OwogICAgIG9iamVjdC1maXQ6IGNvdmVyOwogICAgIGRpc3BsYXk6IGJsb2NrOwogICAgIG9wYWNpdHk6IDAuOTsKICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7CiB9CgogLnQzLWl0ZW06aG92ZXIgewogICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7CiAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10My1oaWdobGlnaHQpOwogICAgIHotaW5kZXg6IDU7CiAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjYpOwogfQoKIC50My1pdGVtOmhvdmVyIGltZyB7IG9wYWNpdHk6IDE7IH0KCiAudDMtaXRlbTo6YWZ0ZXIgewogICAgIGNvbnRlbnQ6ICcnOwogICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICB0b3A6IDA7IGxlZnQ6IDA7CiAgICAgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsKICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDAsMCwwLjQpIDAlLCB0cmFuc3BhcmVudCAxMDAlKTsKICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsKIH0KCiBAa2V5ZnJhbWVzIHNjcm9sbFVwVDMgewogICAgIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0KICAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9CiB9CiBAa2V5ZnJhbWVzIHNjcm9sbERvd25UMyB7CiAgICAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfQogICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0KIH0KCiAudmMtc2xvdyB7IGFuaW1hdGlvbjogc2Nyb2xsVXBUMyB7e3ZlbERldmFnYXJ9fXMgbGluZWFyIGluZmluaXRlOyB9CiAudmMtbWVkICB7IGFuaW1hdGlvbjogc2Nyb2xsRG93blQzIHt7dmVsTWVkaW99fXMgbGluZWFyIGluZmluaXRlOyB9CiAudmMtZmFzdCB7IGFuaW1hdGlvbjogc2Nyb2xsVXBUMyB7e3ZlbFJhcGlkb319cyBsaW5lYXIgaW5maW5pdGU7IH0KCiAudDMtY29sOmhvdmVyIC50My1pbm5lciB7IGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7IH0KCiAudDMtbW9iaWxlLW1hcnF1ZWUgewogICAgIGRpc3BsYXk6IG5vbmU7CiAgICAgd2lkdGg6IDEwMCU7CiAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50LCBibGFjayAxMCUsIGJsYWNrIDkwJSwgdHJhbnNwYXJlbnQpOwogICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCwgYmxhY2sgMTAlLCBibGFjayA5MCUsIHRyYW5zcGFyZW50KTsKICAgICBtYXJnaW4tdG9wOiAzMHB4OwogfQoKIC50My1tcS1yb3cgewogICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgZ2FwOiAxMnB4OwogICAgIHdpZHRoOiAxMDAlOwogICAgIG92ZXJmbG93OiBoaWRkZW47CiAgICAgbWFyZ2luLWJvdHRvbTogMTVweDsKIH0KCiAudDMtbXEtaW5uZXIgewogICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgZ2FwOiAxMnB4OwogICAgIHdpZHRoOiBtYXgtY29udGVudDsKIH0KCiBAa2V5ZnJhbWVzIHNjcm9sbE1vYmlsZVJpZ2h0VDMgewogICAgIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0KICAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9CiB9CiBAa2V5ZnJhbWVzIHNjcm9sbE1vYmlsZUxlZnRUMyB7CiAgICAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfQogICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0KIH0KCiAubXEtcm93LXJpZ2h0IHsgYW5pbWF0aW9uOiBzY3JvbGxNb2JpbGVSaWdodFQzIDI1cyBsaW5lYXIgaW5maW5pdGU7IH0KIC5tcS1yb3ctbGVmdCAgeyBhbmltYXRpb246IHNjcm9sbE1vYmlsZUxlZnRUMyAyNXMgbGluZWFyIGluZmluaXRlOyB9CgogLnQzLW1xLWl0ZW0gewogICAgIHdpZHRoOiAxNTBweDsKICAgICBoZWlnaHQ6IDkwcHg7CiAgICAgZmxleC1zaHJpbms6IDA7CiAgICAgYm9yZGVyLXJhZGl1czoge3tyYWRpdXNDYXJkfX07CiAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpOwogICAgIGJhY2tncm91bmQ6ICMxMTE7CiB9CgogLnQzLW1xLWl0ZW0gaW1nIHsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgb2JqZWN0LWZpdDogY292ZXI7IH0KCiBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHsKICAgICAudDMtaGVybyB7CiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICAgZ2FwOiAyMHB4OwogICAgICAgICBwYWRkaW5nOiA0MHB4IDE1cHg7CiAgICAgfQogICAgIC50My1sZWZ0IHsgbWF4LXdpZHRoOiAxMDAlOyB9CiAgICAgLnQzLWxlZnQgaDEgeyBmb250LXNpemU6IDIuOHJlbTsgfQogICAgIC50My1yaWdodCB7IGRpc3BsYXk6IG5vbmU7IH0KICAgICAudDMtbW9iaWxlLW1hcnF1ZWUgeyBkaXNwbGF5OiBibG9jazsgfQogfQ==';
const BASE_JS_B64   = 'KGZ1bmN0aW9uICgpIHsKICAndXNlIHN0cmljdCc7CgogIGlmICh3aW5kb3cub2dUM0luaWNpYWRvKSByZXR1cm47CiAgd2luZG93Lm9nVDNJbmljaWFkbyA9IHRydWU7CgogIGZ1bmN0aW9uIG9nSW5qZXRhclQzKCkgewogICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1hLWdlcmFkby10MycpKSByZXR1cm47CiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSAnLycgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSAnL2luZGV4Lmh0bWwnKSByZXR1cm47CgogICAgdmFyIGltYWdlcyA9IFsKICAgICAgJ3t7aW1nMX19JywKICAgICAgJ3t7aW1nMn19JywKICAgICAgJ3t7aW1nM319JywKICAgICAgJ3t7aW1nNH19JywKICAgICAgJ3t7aW1nNX19JywKICAgICAgJ3t7aW1nNn19JywKICAgICAgJ3t7aW1nN319JywKICAgICAgJ3t7aW1nOH19JywKICAgICAgJ3t7aW1nOX19JywKICAgICAgJ3t7aW1nMX19JywKICAgICAgJ3t7aW1nMn19JywKICAgICAgJ3t7aW1nM319JywKICAgICAgJ3t7aW1nNH19JywKICAgICAgJ3t7aW1nNX19JywKICAgICAgJ3t7aW1nNn19JywKICAgICAgJ3t7aW1nN319JywKICAgICAgJ3t7aW1nOH19JywKICAgICAgJ3t7aW1nOX19JwogICAgXS5maWx0ZXIoZnVuY3Rpb24odSl7IHJldHVybiB1ICYmIHUuaW5kZXhPZignaHR0cCcpID09PSAwOyB9KTsKCiAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMCkgaW1hZ2VzID0gWydodHRwczovL3BsYWNlaG9sZC5jby8yMDB4MTEwLzExMS8zMzM/dGV4dD1Qcm9kdXRvJ107CgogICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW2hyZWYqPSJmb250YXdlc29tZSJdJykpIHsKICAgICAgdmFyIGZhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpOwogICAgICBmYS5yZWwgPSAnc3R5bGVzaGVldCc7CiAgICAgIGZhLmhyZWYgPSAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzYuNC4wL2Nzcy9hbGwubWluLmNzcyc7CiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZmEpOwogICAgfQoKICAgIGZ1bmN0aW9uIGJ1aWxkQ29sKGFycikgewogICAgICBpZiAoIWFyci5sZW5ndGgpIHJldHVybiAnJzsKICAgICAgdmFyIGR1cCA9IGFyci5jb25jYXQoYXJyKTsKICAgICAgcmV0dXJuIGR1cC5tYXAoZnVuY3Rpb24odSl7IHJldHVybiAnPGRpdiBjbGFzcz0idDMtaXRlbSI+PGltZyBzcmM9IicgKyB1ICsgJyIgbG9hZGluZz0ibGF6eSI+PC9kaXY+JzsgfSkuam9pbignJyk7CiAgICB9CgogICAgZnVuY3Rpb24gYnVpbGRNb2JpbGVSb3coYXJyKSB7CiAgICAgIGlmICghYXJyLmxlbmd0aCkgcmV0dXJuICcnOwogICAgICB2YXIgZHVwID0gYXJyLmNvbmNhdChhcnIpOwogICAgICByZXR1cm4gZHVwLm1hcChmdW5jdGlvbih1KXsgcmV0dXJuICc8ZGl2IGNsYXNzPSJ0My1tcS1pdGVtIj48aW1nIHNyYz0iJyArIHUgKyAnIiBsb2FkaW5nPSJsYXp5Ij48L2Rpdj4nOyB9KS5qb2luKCcnKTsKICAgIH0KCiAgICB2YXIgdGhpcmQgPSBNYXRoLmNlaWwoaW1hZ2VzLmxlbmd0aCAvIDMpIHx8IDE7CiAgICB2YXIgYzEgPSBidWlsZENvbChpbWFnZXMuc2xpY2UoMCwgdGhpcmQpKTsKICAgIHZhciBjMiA9IGJ1aWxkQ29sKGltYWdlcy5zbGljZSh0aGlyZCwgdGhpcmQgKiAyKSk7CiAgICB2YXIgYzMgPSBidWlsZENvbChpbWFnZXMuc2xpY2UodGhpcmQgKiAyKSk7CgogICAgdmFyIGhhbGYgPSBNYXRoLmNlaWwoaW1hZ2VzLmxlbmd0aCAvIDIpIHx8IDE7CiAgICB2YXIgbTEgPSBidWlsZE1vYmlsZVJvdyhpbWFnZXMuc2xpY2UoMCwgaGFsZikpOwogICAgdmFyIG0yID0gYnVpbGRNb2JpbGVSb3coaW1hZ2VzLnNsaWNlKGhhbGYpKTsKCiAgICB2YXIgdGl0dWxvICAgID0gJ3t7dGl0dWxvfX0nOwogICAgdmFyIHRpdHVsb1N1YiA9ICd7e3RpdHVsb0Rlc3RhcXVlfX0nOwogICAgdmFyIGRlc2NyaWNhbyA9ICd7e2Rlc2NyaWNhb319JzsKICAgIHZhciBidG5UZXh0byAgPSAne3tidG5UZXh0b319JzsKICAgIHZhciBidG5MaW5rICAgPSAne3tidG5MaW5rfX0nOwogICAgdmFyIGJ0bkljb25lICA9ICd7e2J0bkljb25lfX0nOwoKICAgIHZhciBoZXJvSFRNTCA9CiAgICAgICc8ZGl2IGlkPSJ0ZW1hLWdlcmFkby10MyI+JwogICAgICArICc8ZGl2IGNsYXNzPSJ0My1oZXJvIj4nCiAgICAgICAgKyAnPGRpdiBjbGFzcz0idDMtbGVmdCI+JwogICAgICAgICAgKyAnPGgxPicgKyB0aXR1bG8gKyAnIDxzcGFuPicgKyB0aXR1bG9TdWIgKyAnPC9zcGFuPiE8L2gxPicKICAgICAgICAgICsgJzxwPicgKyBkZXNjcmljYW8gKyAnPC9wPicKICAgICAgICAgICsgJzxhIGhyZWY9IicgKyBidG5MaW5rICsgJyIgY2xhc3M9InQzLWJ0biI+JwogICAgICAgICAgICArICc8aSBjbGFzcz0iJyArIGJ0bkljb25lICsgJyI+PC9pPiAnICsgYnRuVGV4dG8KICAgICAgICAgICsgJzwvYT4nCiAgICAgICAgKyAnPC9kaXY+JwogICAgICAgICsgJzxkaXYgY2xhc3M9InQzLXJpZ2h0Ij4nCiAgICAgICAgICArICc8ZGl2IGNsYXNzPSJ0My1jb2wiPjxkaXYgY2xhc3M9InQzLWlubmVyIHZjLXNsb3ciPicgKyBjMSArICc8L2Rpdj48L2Rpdj4nCiAgICAgICAgICArICc8ZGl2IGNsYXNzPSJ0My1jb2wiPjxkaXYgY2xhc3M9InQzLWlubmVyIHZjLW1lZCI+JyAgKyBjMiArICc8L2Rpdj48L2Rpdj4nCiAgICAgICAgICArICc8ZGl2IGNsYXNzPSJ0My1jb2wiPjxkaXYgY2xhc3M9InQzLWlubmVyIHZjLWZhc3QiPicgKyBjMyArICc8L2Rpdj48L2Rpdj4nCiAgICAgICAgKyAnPC9kaXY+JwogICAgICAgICsgJzxkaXYgY2xhc3M9InQzLW1vYmlsZS1tYXJxdWVlIj4nCiAgICAgICAgICArICc8ZGl2IGNsYXNzPSJ0My1tcS1yb3ciPjxkaXYgY2xhc3M9InQzLW1xLWlubmVyIG1xLXJvdy1yaWdodCI+JyArIG0xICsgJzwvZGl2PjwvZGl2PicKICAgICAgICAgICsgJzxkaXYgY2xhc3M9InQzLW1xLXJvdyI+PGRpdiBjbGFzcz0idDMtbXEtaW5uZXIgbXEtcm93LWxlZnQiPicgICsgbTIgKyAnPC9kaXY+PC9kaXY+JwogICAgICAgICsgJzwvZGl2PicKICAgICAgKyAnPC9kaXY+JwogICAgKyAnPC9kaXY+JzsKCiAgICB2YXIgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7CiAgICBpZiAoIW5hdikgewogICAgICB2YXIgcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9InNlYXJjaCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbcGxhY2Vob2xkZXIqPSJwcm9kdXRvIiBpXScpOwogICAgICBpZiAocykgbmF2ID0gcy5jbG9zZXN0KCdkaXZbY2xhc3MqPSJoZWFkZXIiXScpIHx8IHMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7CiAgICB9CiAgICBpZiAobmF2KSB7IG5hdi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgaGVyb0hUTUwpOyB9CiAgICBlbHNlIHsKICAgICAgdmFyIGZiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjLWJjZTYxMjAyLTAuZXF6UXN4JykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpIHx8IGRvY3VtZW50LmJvZHk7CiAgICAgIGZiLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGhlcm9IVE1MKTsKICAgIH0KICB9CgogIGZ1bmN0aW9uIG9nR2VyZW5jaWFyKCkgewogICAgdmFyIGlzSG9tZSA9ICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJyB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvaW5kZXguaHRtbCcpOwogICAgdmFyIHRlbWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtYS1nZXJhZG8tdDMnKTsKICAgIGlmIChpc0hvbWUpIHsgaWYgKCF0ZW1hKSBvZ0luamV0YXJUMygpOyBlbHNlIHRlbWEuc3R5bGUuZGlzcGxheSA9ICcnOyB9CiAgICBlbHNlIHsgaWYgKHRlbWEpIHRlbWEuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfQogIH0KCiAgc2V0SW50ZXJ2YWwob2dHZXJlbmNpYXIsIDUwMCk7CiAgb2dHZXJlbmNpYXIoKTsKfSkoKTs=';

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

  var corD    = v.corDestaque   || '#0000ff';
  var corT    = v.corTexto      || '#ffffff';
  var corTS   = v.corTextoSec   || '#a0a0a0';
  var corFB   = v.corFundoBtn   || '#1a1a1f';
  var corBB   = v.corBordaBtn   || '#333333';
  var titulo  = v.titulo        || 'Bem Vindo(a)';
  var tSub    = v.tituloDestaque|| 'Minha Loja';
  var desc    = v.descricao     || 'Sua loja digital de confianca.';
  var btnT    = v.btnTexto      || 'Suporte';
  var btnL    = v.btnLink       || '#';
  var altG    = v.alturaGrid    || '450px';
  var altI    = v.alturaImagem  || '110px';
  var radius  = v.radiusCard    || '12px';
  var padH    = v.paddingHero   || '50px 20px';
  var tamT    = v.tamanhoTitulo || '3.5rem';
  var vS      = v.velDevagar    || '40';
  var vM      = v.velMedio      || '30';
  var vF      = v.velRapido     || '25';

  // Pega imagens preenchidas
  var imgs = [];
  for (var i = 1; i <= 9; i++) {
    var url = v['img' + i];
    if (url && url.indexOf('http') === 0) imgs.push(url);
  }
  if (imgs.length === 0) {
    for (var j = 0; j < 9; j++) imgs.push('https://placehold.co/200x110/111/333?text=Img+' + (j+1));
  }

  function buildCol(arr) {
    var dup = arr.concat(arr);
    return dup.map(function(u){ return '<div style="border-radius:' + radius + ';overflow:hidden;border:1px solid rgba(255,255,255,.05);background:#111;flex-shrink:0;"><img src="' + u + '" style="width:100%;height:' + altI + ';object-fit:cover;display:block;opacity:.9;"></div>'; }).join('');
  }

  var third = Math.ceil(imgs.length / 3) || 1;
  var c1 = buildCol(imgs.slice(0, third));
  var c2 = buildCol(imgs.slice(third, third * 2));
  var c3 = buildCol(imgs.slice(third * 2));

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<link href="https://fonts.googleapis.com/css2?family=' + encodeURIComponent(v.fontFamilia || 'Poppins') + ':wght@400;600;700&display=swap" rel="stylesheet">'
    + '<style>'
    + '*{box-sizing:border-box;margin:0;padding:0;}'
    + 'body{background:#0a0a0a;min-height:520px;}'
    + '.hero{display:flex;align-items:center;justify-content:space-between;gap:40px;padding:' + padH + ';font-family:"' + (v.fontFamilia||'Poppins') + '",sans-serif;width:100%;max-width:' + (v.maxWidth||'1300px') + ';margin:0 auto;}'
    + '.left{flex:1;max-width:500px;}'
    + 'h1{font-size:' + tamT + ';font-weight:700;color:' + corT + ';line-height:1.1;margin-bottom:20px;letter-spacing:-1px;}'
    + 'h1 span{color:' + corD + ';}'
    + 'p{font-size:1rem;color:' + corTS + ';margin-bottom:30px;line-height:1.6;}'
    + '.btn{display:inline-flex;align-items:center;gap:8px;padding:' + (v.paddingBtn||'14px 32px') + ';background:' + corFB + ';color:' + corT + ';border:1px solid ' + corBB + ';border-radius:' + (v.radiusBtn||'12px') + ';text-decoration:none;font-weight:600;font-size:.95rem;}'
    + '.right{flex:1.2;height:' + altG + ';overflow:hidden;display:flex;gap:15px;justify-content:center;mask-image:linear-gradient(to bottom,transparent,black 15%,black 85%,transparent);-webkit-mask-image:linear-gradient(to bottom,transparent,black 15%,black 85%,transparent);}'
    + '.col{display:flex;flex-direction:column;gap:15px;width:30%;}'
    + '.inner{display:flex;flex-direction:column;gap:15px;}'
    + '@keyframes sU{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}'
    + '@keyframes sD{0%{transform:translateY(-50%)}100%{transform:translateY(0)}}'
    + '.s1{animation:sU ' + vS + 's linear infinite}'
    + '.s2{animation:sD ' + vM + 's linear infinite}'
    + '.s3{animation:sU ' + vF + 's linear infinite}'
    + '</style></head><body>'
    + '<div class="hero">'
      + '<div class="left">'
        + '<h1>' + titulo + ' <span>' + tSub + '</span>!</h1>'
        + '<p>' + desc + '</p>'
        + '<a class="btn" href="' + btnL + '">💬 ' + btnT + '</a>'
      + '</div>'
      + '<div class="right">'
        + '<div class="col"><div class="inner s1">' + c1 + '</div></div>'
        + '<div class="col"><div class="inner s2">' + c2 + '</div></div>'
        + '<div class="col"><div class="inner s3">' + c3 + '</div></div>'
      + '</div>'
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