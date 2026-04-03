// =============================================================
//  OG! — vendas-fake.js
// =============================================================

const COMPONENT = {
  title:       'Notificacoes de Vendas Fake',
  description: 'Exibe notificacoes flutuantes com nomes e mensagens aleatorias simulando vendas em tempo real. Posicao, cores, tamanhos e timing totalmente customizaveis.',
  tags:        ['Vendas', 'Fake', 'Notificacao', 'Social Proof', 'JS', 'Gratis'],

  fields: [
    // Conteudo
    { id: 'nomes',     label: 'Nomes (separados por virgula)',     type: 'text', placeholder: 'Ex: Ana S., Carlos M., Pedro H.', default: 'Rhuan S.,Carlos M.,Ana C.,Pedro H.,Lucas T.,Julia R.,Marcos V.,Beatriz A.', required: true },
    { id: 'mensagens', label: 'Mensagens (separadas por virgula)', type: 'text', placeholder: 'Ex: acabou de comprar, se tornou cliente', default: 'se tornou cliente,acabou de comprar,finalizou uma compra,comprou agora,acabou de entrar', required: true },

    // Posicao
    { id: 'posicaoV',   label: 'Posicao Vertical (top ou bottom)',    type: 'text', placeholder: 'bottom ou top', default: 'bottom', required: true  },
    { id: 'distanciaV', label: 'Distancia Vertical',                  type: 'text', placeholder: 'Ex: 20px',      default: '20px',   required: true  },
    { id: 'posicaoH',   label: 'Posicao Horizontal (left ou right)',  type: 'text', placeholder: 'left ou right', default: 'left',   required: true  },
    { id: 'distanciaH', label: 'Distancia Horizontal',                type: 'text', placeholder: 'Ex: 20px',      default: '20px',   required: true  },

    // Timing
    { id: 'tempoVisivel', label: 'Tempo visivel (ms)',    type: 'text', placeholder: 'Ex: 3200', default: '3200', required: true },
    { id: 'intervalo',    label: 'Intervalo entre cada (ms)', type: 'text', placeholder: 'Ex: 6000', default: '6000', required: true },

    // Tamanho
    { id: 'larguraMin',   label: 'Largura minima',   type: 'text', placeholder: 'Ex: 320px', default: '320px', required: false },
    { id: 'larguraMax',   label: 'Largura maxima',   type: 'text', placeholder: 'Ex: 420px', default: '420px', required: false },
    { id: 'borderRadius', label: 'Border Radius',    type: 'text', placeholder: 'Ex: 22px',  default: '22px',  required: false },
    { id: 'gap',          label: 'Gap entre notifs', type: 'text', placeholder: 'Ex: 12px',  default: '12px',  required: false },
    { id: 'gapInterno',   label: 'Gap interno',      type: 'text', placeholder: 'Ex: 16px',  default: '16px',  required: false },
    { id: 'padding',      label: 'Padding interno',  type: 'text', placeholder: 'Ex: 18px 22px', default: '18px 22px', required: false },
    { id: 'blur',         label: 'Backdrop Blur',    type: 'text', placeholder: 'Ex: 10px',  default: '10px',  required: false },

    // Fundo
    { id: 'corFundo1',  label: 'Cor Fundo Superior (rgba)', type: 'text', placeholder: 'Ex: rgba(12,12,16,0.96)',  default: 'rgba(12,12,16,0.96)',  required: false },
    { id: 'corFundo2',  label: 'Cor Fundo Inferior (rgba)', type: 'text', placeholder: 'Ex: rgba(8,8,12,0.96)',   default: 'rgba(8,8,12,0.96)',    required: false },
    { id: 'corBorda',   label: 'Cor da Borda (rgba)',       type: 'text', placeholder: 'Ex: rgba(255,255,255,0.08)', default: 'rgba(255,255,255,0.08)', required: false },
    { id: 'corSombra',  label: 'Cor da Sombra (rgba)',      type: 'text', placeholder: 'Ex: rgba(0,0,0,0.45)',    default: 'rgba(0,0,0,0.45)',     required: false },
    { id: 'corGlow',    label: 'Cor do Glow (rgba)',        type: 'text', placeholder: 'Ex: rgba(65,84,255,0.12)', default: 'rgba(65,84,255,0.12)', required: false },

    // Icone
    { id: 'tamanhoIcone',    label: 'Tamanho do Icone',           type: 'text',  placeholder: 'Ex: 44px',              default: '44px',                  required: false },
    { id: 'radiusIcone',     label: 'Border Radius do Icone',     type: 'text',  placeholder: 'Ex: 14px',              default: '14px',                  required: false },
    { id: 'corFundoIcone1',  label: 'Cor Fundo Icone Superior',   type: 'text',  placeholder: 'Ex: rgba(30,255,220,0.18)', default: 'rgba(30,255,220,0.18)', required: false },
    { id: 'corFundoIcone2',  label: 'Cor Fundo Icone Inferior',   type: 'text',  placeholder: 'Ex: rgba(30,255,220,0.06)', default: 'rgba(30,255,220,0.06)', required: false },
    { id: 'corGlowIcone',    label: 'Cor Glow Icone (rgba)',      type: 'text',  placeholder: 'Ex: rgba(42,255,230,0.18)', default: 'rgba(42,255,230,0.18)', required: false },
    { id: 'corIcone',        label: 'Cor do SVG do Icone',        type: 'color', default: '#2ff7e3' },
    { id: 'corGlowIconeSvg', label: 'Cor Glow SVG (rgba)',        type: 'text',  placeholder: 'Ex: rgba(47,247,227,0.35)', default: 'rgba(47,247,227,0.35)', required: false },

    // Texto
    { id: 'tamanhoTexto', label: 'Tamanho do Texto', type: 'text',  placeholder: 'Ex: 17px', default: '17px',              required: false },
    { id: 'corNome',      label: 'Cor do Nome',      type: 'color', default: '#ffffff' },
    { id: 'corMensagem',  label: 'Cor da Mensagem',  type: 'text',  placeholder: 'Ex: rgba(255,255,255,0.78)', default: 'rgba(255,255,255,0.78)', required: false },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = 'IC8qIENTUyBQZXJzb25hbGl6YWRvIEVyZWVtYnkgLSBUZW1hIDMgKFZlcnRpY2FsIEdyaWQgJiBNb2JpbGUgTWFycXVlZSkgKi8KIDpyb290IHsKICAgICAtLXQzLWhpZ2hsaWdodDogIzAwMDBmZjsKICAgICAtLXQzLXRleHQtbWFpbjogI2ZmZmZmZjsKICAgICAtLXQzLXRleHQtc2VjOiAjYTBhMGEwOwogICAgIC0tdDMtYnRuLWJnOiAjMWExYTFmOwogICAgIC0tdDMtYnRuLWJvcmRlcjogIzMzMzMzMzsKIH0KCiAjdGVtYS1nZXJhZG8tdDMsCiAjdGVtYS1nZXJhZG8tdDMgKiB7CiAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsKIH0KCiAudDMtaGVybyB7CiAgICAgZGlzcGxheTogZmxleDsKICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsKICAgICBnYXA6IDQwcHg7CiAgICAgcGFkZGluZzogNTBweCAyMHB4OwogICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7CiAgICAgd2lkdGg6IDEwMCU7CiAgICAgbWF4LXdpZHRoOiAxMzAwcHg7CiAgICAgbWFyZ2luOiAwIGF1dG87CiB9CgogLyogRVNRVUVSREEgLSBURVhUTyAqLwogLnQzLWxlZnQgewogICAgIGZsZXg6IDE7CiAgICAgbWF4LXdpZHRoOiA1MDBweDsKICAgICB6LWluZGV4OiAyOwogfQoKIC50My1sZWZ0IGgxIHsKICAgICBmb250LXNpemU6IDMuNXJlbTsKICAgICBmb250LXdlaWdodDogNzAwOwogICAgIGNvbG9yOiB2YXIoLS10My10ZXh0LW1haW4pICFpbXBvcnRhbnQ7CiAgICAgbGluZS1oZWlnaHQ6IDEuMTsKICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OwogICAgIGxldHRlci1zcGFjaW5nOiAtMXB4OwogfQoKIC50My1sZWZ0IGgxIHNwYW4gewogICAgIGNvbG9yOiB2YXIoLS10My1oaWdobGlnaHQpICFpbXBvcnRhbnQ7CiB9CgogLnQzLWxlZnQgcCB7CiAgICAgZm9udC1zaXplOiAxLjA1cmVtOwogICAgIGNvbG9yOiB2YXIoLS10My10ZXh0LXNlYykgIWltcG9ydGFudDsKICAgICBtYXJnaW4tYm90dG9tOiAzNXB4OwogICAgIGxpbmUtaGVpZ2h0OiAxLjY7CiB9CgogLnQzLWJ0biB7CiAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7CiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICBnYXA6IDEwcHg7CiAgICAgcGFkZGluZzogMTRweCAzMnB4OwogICAgIGJhY2tncm91bmQ6IHZhcigtLXQzLWJ0bi1iZyk7CiAgICAgY29sb3I6IHZhcigtLXQzLXRleHQtbWFpbikgIWltcG9ydGFudDsKICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10My1idG4tYm9yZGVyKTsKICAgICBib3JkZXItcmFkaXVzOiAxMnB4OwogICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsKICAgICBmb250LXdlaWdodDogNjAwOwogICAgIGZvbnQtc2l6ZTogMXJlbTsKICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOwogfQoKIC50My1idG46aG92ZXIgewogICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdDMtaGlnaGxpZ2h0KTsKICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7CiAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQpOwogICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpOwogfQoKIC8qIERJUkVJVEEgLSBHUkFERSBWRVJUSUNBTCBTQ1JPTExJTkcgKFBDIC0gMyBDT0xVTkFTKSAqLwogLnQzLXJpZ2h0IHsKICAgICBmbGV4OiAxLjI7CiAgICAgaGVpZ2h0OiA0NTBweDsKICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgZ2FwOiAxNXB4OwogICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50LCBibGFjayAxNSUsIGJsYWNrIDg1JSwgdHJhbnNwYXJlbnQpOwogICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIGJsYWNrIDE1JSwgYmxhY2sgODUlLCB0cmFuc3BhcmVudCk7CiB9CgogLnQzLWNvbCB7CiAgICAgZGlzcGxheTogZmxleDsKICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgIGdhcDogMTVweDsKICAgICB3aWR0aDogMzAlOwogfQoKIC50My1pbm5lciB7CiAgICAgZGlzcGxheTogZmxleDsKICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgIGdhcDogMTVweDsKIH0KCiAudDMtaXRlbSB7CiAgICAgYm9yZGVyLXJhZGl1czogMTJweDsKICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7CiAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzOwogICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgICBmbGV4LXNocmluazogMDsKICAgICBiYWNrZ3JvdW5kOiAjMTExOwogfQoKIC50My1pdGVtIGltZyB7CiAgICAgd2lkdGg6IDEwMCU7CiAgICAgaGVpZ2h0OiAxMTBweDsKICAgICBvYmplY3QtZml0OiBjb3ZlcjsKICAgICBkaXNwbGF5OiBibG9jazsKICAgICBvcGFjaXR5OiAwLjk7CiAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzOwogfQoKIC50My1pdGVtOmhvdmVyIHsKICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOwogICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdDMtaGlnaGxpZ2h0KTsKICAgICB6LWluZGV4OiA1OwogICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC42KTsKIH0KCiAudDMtaXRlbTpob3ZlciBpbWcgewogICAgIG9wYWNpdHk6IDE7CiB9CgogLnQzLWl0ZW06OmFmdGVyIHsKICAgICBjb250ZW50OiAnJzsKICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgdG9wOiAwOwogICAgIGxlZnQ6IDA7CiAgICAgd2lkdGg6IDEwMCU7CiAgICAgaGVpZ2h0OiAxMDAlOwogICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNCkgMCUsIHRyYW5zcGFyZW50IDEwMCUpOwogICAgIHBvaW50ZXItZXZlbnRzOiBub25lOwogfQoKIC8qIEFOSU1BxIbigKHEhuKAokVTIFZFUlRJQ0FJUyAqLwogQGtleWZyYW1lcyBzY3JvbGxVcFQzIHsKICAgICAwJSB7CiAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsKICAgICB9CgogICAgIDEwMCUgewogICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7CiAgICAgfQogfQoKIEBrZXlmcmFtZXMgc2Nyb2xsRG93blQzIHsKICAgICAwJSB7CiAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsKICAgICB9CgogICAgIDEwMCUgewogICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7CiAgICAgfQogfQoKIC52Yy1zbG93IHsKICAgICBhbmltYXRpb246IHNjcm9sbFVwVDMgNDBzIGxpbmVhciBpbmZpbml0ZTsKIH0KCiAudmMtbWVkIHsKICAgICBhbmltYXRpb246IHNjcm9sbERvd25UMyAzMHMgbGluZWFyIGluZmluaXRlOwogfQoKIC52Yy1mYXN0IHsKICAgICBhbmltYXRpb246IHNjcm9sbFVwVDMgMjVzIGxpbmVhciBpbmZpbml0ZTsKIH0KCiAudDMtY29sOmhvdmVyIC50My1pbm5lciB7CiAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDsKIH0KCiAvKiBNT0JJTEUgLSAyIEZJTEVJUkFTIEhPUklaT05UQUlTICovCiAudDMtbW9iaWxlLW1hcnF1ZWUgewogICAgIGRpc3BsYXk6IG5vbmU7CiAgICAgd2lkdGg6IDEwMCU7CiAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50LCBibGFjayAxMCUsIGJsYWNrIDkwJSwgdHJhbnNwYXJlbnQpOwogICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCwgYmxhY2sgMTAlLCBibGFjayA5MCUsIHRyYW5zcGFyZW50KTsKICAgICBtYXJnaW4tdG9wOiAzMHB4OwogfQoKIC50My1tcS1yb3cgewogICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgZ2FwOiAxMnB4OwogICAgIHdpZHRoOiAxMDAlOwogICAgIG92ZXJmbG93OiBoaWRkZW47CiAgICAgbWFyZ2luLWJvdHRvbTogMTVweDsKIH0KCiAudDMtbXEtaW5uZXIgewogICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgZ2FwOiAxMnB4OwogICAgIHdpZHRoOiBtYXgtY29udGVudDsKIH0KCiBAa2V5ZnJhbWVzIHNjcm9sbE1vYmlsZVJpZ2h0VDMgewogICAgIDAlIHsKICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOwogICAgIH0KCiAgICAgMTAwJSB7CiAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsKICAgICB9CiB9CgogQGtleWZyYW1lcyBzY3JvbGxNb2JpbGVMZWZ0VDMgewogICAgIDAlIHsKICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOwogICAgIH0KCiAgICAgMTAwJSB7CiAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsKICAgICB9CiB9CgogLm1xLXJvdy1yaWdodCB7CiAgICAgYW5pbWF0aW9uOiBzY3JvbGxNb2JpbGVSaWdodFQzIDI1cyBsaW5lYXIgaW5maW5pdGU7CiB9CgogLm1xLXJvdy1sZWZ0IHsKICAgICBhbmltYXRpb246IHNjcm9sbE1vYmlsZUxlZnRUMyAyNXMgbGluZWFyIGluZmluaXRlOwogfQoKIC50My1tcS1pdGVtIHsKICAgICB3aWR0aDogMTUwcHg7CiAgICAgaGVpZ2h0OiA5MHB4OwogICAgIGZsZXgtc2hyaW5rOiAwOwogICAgIGJvcmRlci1yYWRpdXM6IDEycHg7CiAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpOwogICAgIGJhY2tncm91bmQ6ICMxMTE7CiB9CgogLnQzLW1xLWl0ZW0gaW1nIHsKICAgICB3aWR0aDogMTAwJTsKICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgb2JqZWN0LWZpdDogY292ZXI7CiB9CgogLyogUkVTUE9OU0lWSURBREUgKi8KIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkgewogICAgIC50My1oZXJvIHsKICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgICAgICBnYXA6IDIwcHg7CiAgICAgICAgIHBhZGRpbmc6IDQwcHggMTVweDsKICAgICB9CgogICAgIC50My1sZWZ0IHsKICAgICAgICAgbWF4LXdpZHRoOiAxMDAlOwogICAgIH0KCiAgICAgLnQzLWxlZnQgaDEgewogICAgICAgICBmb250LXNpemU6IDIuOHJlbTsKICAgICB9CgogICAgIC50My1yaWdodCB7CiAgICAgICAgIGRpc3BsYXk6IG5vbmU7CiAgICAgfQoKICAgICAvKiBPY3VsdGEgYXMgMyBjb2x1bmFzIGRlIFBDIG5vIENlbHVsYXIgKi8KICAgICAudDMtbW9iaWxlLW1hcnF1ZWUgewogICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICB9CgogICAgIC8qIEF0aXZhIGEgbGluaGEgZGVzbGl6YW50ZSAqLwogfQ==';
const BASE_JS_B64   = 'IC8qIFNjcmlwdCBwYXJhIElOSkVUQVIgbyBUZW1hIDMgKFZlcnRpY2FsIEdyaWQpIG5hIEVyZWVtYnkgKi8KKGZ1bmN0aW9uICgpIHsKICAndXNlIHN0cmljdCc7CgogIGZ1bmN0aW9uIGluamV0YXJUZW1hVHJlcygpIHsKICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtYS1nZXJhZG8tdDMnKSkgcmV0dXJuOwogICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gJy8nICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gJy9pbmRleC5odG1sJykgcmV0dXJuOwoKICAgIC8vIExpc3RhIGRlIEltYWdlbnMgY29uZmlndXJhZGFzIG5vIFBhaW5lbCBOb3h1cwogICAgY29uc3QgaW1hZ2VzID0gWwogICAgICAnaHR0cHM6Ly9jZG4uZXJlZW1ieS5jb20vYXR0YWNobWVudHMvMTc3MDYzOTkxMTI2Nzk5OTFpbWFnZW0ucG5nJywKICAgICAgJ2h0dHBzOi8vY2RuLmVyZWVtYnkuY29tL2F0dGFjaG1lbnRzLzE3NzA2Mzk5MDQ3ODIzNjM2aW1hZ2VtLnBuZycsCiAgICAgICdodHRwczovL2Nkbi5lcmVlbWJ5LmNvbS9hdHRhY2htZW50cy8xNzcwNjM5OTEzNzQ2MzE4MmltYWdlbS5wbmcnLAogICAgICAnaHR0cHM6Ly9jZG4uZXJlZW1ieS5jb20vYXR0YWNobWVudHMvMTc3MDYzOTkwMjQ1ODU0OTBpbWFnZW0ucG5nJywKICAgICAgJ2h0dHBzOi8vY2RuLmVyZWVtYnkuY29tL2F0dGFjaG1lbnRzLzE3NzA2Mzk5MDY5MTM1NjE2aW1hZ2VtLnBuZycsCiAgICAgICdodHRwczovL2Nkbi5lcmVlbWJ5LmNvbS9hdHRhY2htZW50cy8xNzcwNjM5OTA5MzE2ODU5OWltYWdlbS5wbmcnLAogICAgICAnaHR0cHM6Ly9jZG4uZXJlZW1ieS5jb20vYXR0YWNobWVudHMvMTc3MDYzOTg5OTc4OTMxNDVpbWFnZW0ucG5nJywKICAgICAgJ2h0dHBzOi8vY2RuLmVyZWVtYnkuY29tL2F0dGFjaG1lbnRzLzE3NzA2Mzk5MTEyNjc5OTkxaW1hZ2VtLnBuZycsCiAgICAgICdodHRwczovL2Nkbi5lcmVlbWJ5LmNvbS9hdHRhY2htZW50cy8xNzcwNjM5OTA0NzgyMzYzNmltYWdlbS5wbmcnLAogICAgICAnaHR0cHM6Ly9jZG4uZXJlZW1ieS5jb20vYXR0YWNobWVudHMvMTc3MDYzOTkxMzc0NjMxODJpbWFnZW0ucG5nJywKICAgICAgJ2h0dHBzOi8vY2RuLmVyZWVtYnkuY29tL2F0dGFjaG1lbnRzLzE3NzA2Mzk5MDI0NTg1NDkwaW1hZ2VtLnBuZycsCiAgICAgICdodHRwczovL2Nkbi5lcmVlbWJ5LmNvbS9hdHRhY2htZW50cy8xNzcwNjM5OTA2OTEzNTYxNmltYWdlbS5wbmcnLAogICAgICAnaHR0cHM6Ly9jZG4uZXJlZW1ieS5jb20vYXR0YWNobWVudHMvMTc3MDYzOTkwOTMxNjg1OTlpbWFnZW0ucG5nJywKICAgICAgJ2h0dHBzOi8vY2RuLmVyZWVtYnkuY29tL2F0dGFjaG1lbnRzLzE3NzA2Mzk4OTk3ODkzMTQ1aW1hZ2VtLnBuZycsCiAgICAgICdodHRwczovL2Nkbi5lcmVlbWJ5LmNvbS9hdHRhY2htZW50cy8xNzcwNjM5OTExMjY3OTk5MWltYWdlbS5wbmcnLAogICAgICAnaHR0cHM6Ly9jZG4uZXJlZW1ieS5jb20vYXR0YWNobWVudHMvMTc3MDYzOTkwNDc4MjM2MzZpbWFnZW0ucG5nJywKICAgICAgJ2h0dHBzOi8vY2RuLmVyZWVtYnkuY29tL2F0dGFjaG1lbnRzLzE3NzA2Mzk5MTM3NDYzMTgyaW1hZ2VtLnBuZycsCiAgICAgICdodHRwczovL2Nkbi5lcmVlbWJ5LmNvbS9hdHRhY2htZW50cy8xNzcwNjM5OTAyNDU4NTQ5MGltYWdlbS5wbmcnLAogICAgICAnaHR0cHM6Ly9jZG4uZXJlZW1ieS5jb20vYXR0YWNobWVudHMvMTc3MDYzOTkwNjkxMzU2MTZpbWFnZW0ucG5nJywKICAgICAgJ2h0dHBzOi8vY2RuLmVyZWVtYnkuY29tL2F0dGFjaG1lbnRzLzE3NzA2Mzk5MDkzMTY4NTk5aW1hZ2VtLnBuZycsCiAgICAgICdodHRwczovL2Nkbi5lcmVlbWJ5LmNvbS9hdHRhY2htZW50cy8xNzcwNjM5ODk5Nzg5MzE0NWltYWdlbS5wbmcnLAogICAgICAnaHR0cHM6Ly9jZG4uZXJlZW1ieS5jb20vYXR0YWNobWVudHMvMTc3MDYzOTkxMTI2Nzk5OTFpbWFnZW0ucG5nJywKICAgICAgJ2h0dHBzOi8vY2RuLmVyZWVtYnkuY29tL2F0dGFjaG1lbnRzLzE3NzA2Mzk5MDQ3ODIzNjM2aW1hZ2VtLnBuZycsCiAgICAgICdodHRwczovL2Nkbi5lcmVlbWJ5LmNvbS9hdHRhY2htZW50cy8xNzcwNjM5OTEzNzQ2MzE4MmltYWdlbS5wbmcnLAogICAgICAnaHR0cHM6Ly9jZG4uZXJlZW1ieS5jb20vYXR0YWNobWVudHMvMTc3MDYzOTkwMjQ1ODU0OTBpbWFnZW0ucG5nJywKICAgICAgJ2h0dHBzOi8vY2RuLmVyZWVtYnkuY29tL2F0dGFjaG1lbnRzLzE3NzA2Mzk5MDY5MTM1NjE2aW1hZ2VtLnBuZycsCiAgICAgICdodHRwczovL2Nkbi5lcmVlbWJ5LmNvbS9hdHRhY2htZW50cy8xNzcwNjM5OTA5MzE2ODU5OWltYWdlbS5wbmcnLAogICAgICAnaHR0cHM6Ly9jZG4uZXJlZW1ieS5jb20vYXR0YWNobWVudHMvMTc3MDYzOTg5OTc4OTMxNDVpbWFnZW0ucG5nJywKICAgICAgJ2h0dHBzOi8vY2RuLmVyZWVtYnkuY29tL2F0dGFjaG1lbnRzLzE3NzA2Mzk5MTEyNjc5OTkxaW1hZ2VtLnBuZycsCiAgICAgICdodHRwczovL2Nkbi5lcmVlbWJ5LmNvbS9hdHRhY2htZW50cy8xNzcwNjM5OTA0NzgyMzYzNmltYWdlbS5wbmcnLAogICAgICAnaHR0cHM6Ly9jZG4uZXJlZW1ieS5jb20vYXR0YWNobWVudHMvMTc3MDYzOTkxMzc0NjMxODJpbWFnZW0ucG5nJywKICAgICAgJ2h0dHBzOi8vY2RuLmVyZWVtYnkuY29tL2F0dGFjaG1lbnRzLzE3NzA2Mzk5MDI0NTg1NDkwaW1hZ2VtLnBuZycsCiAgICAgICdodHRwczovL2Nkbi5lcmVlbWJ5LmNvbS9hdHRhY2htZW50cy8xNzcwNjM5OTA2OTEzNTYxNmltYWdlbS5wbmcnLAogICAgICAnaHR0cHM6Ly9jZG4uZXJlZW1ieS5jb20vYXR0YWNobWVudHMvMTc3MDYzOTkwOTMxNjg1OTlpbWFnZW0ucG5nJywKICAgICAgJ2h0dHBzOi8vY2RuLmVyZWVtYnkuY29tL2F0dGFjaG1lbnRzLzE3NzA2Mzk4OTk3ODkzMTQ1aW1hZ2VtLnBuZycKICAgIF07CgogICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW2hyZWYqPSJmb250YXdlc29tZSJdJykpIHsKICAgICAgY29uc3QgZmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7IGZhLnJlbCA9ICdzdHlsZXNoZWV0JzsKICAgICAgZmEuaHJlZiA9ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNi40LjAvY3NzL2FsbC5taW4uY3NzJzsKICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChmYSk7CiAgICB9CgogICAgLy8gRnVuY29lcyBwYXJhIGNyaWFyIG8gSFRNTCBkYXMgY29sdW5hcyAoUEMpIGUgZmlsZWlyYXMgKE1vYmlsZSkKICAgIGZ1bmN0aW9uIGJ1aWxkQ29sSHRtbChhcnIpIHsKICAgICAgaWYgKGFyci5sZW5ndGggPT09IDApIHJldHVybiAnJzsKICAgICAgbGV0IGh0bWwgPSAnJzsKICAgICAgY29uc3QgZHVwID0gWy4uLmFyciwgLi4uYXJyXTsgLy8gRHVwbGljYSBwYXJhIG8gbG9vcCBpbmZpbml0byBmdW5jaW9uYXIgcGVyZmVpdGFtZW50ZQogICAgICBkdXAuZm9yRWFjaCh1cmwgPT4geyBodG1sICs9ICc8ZGl2IGNsYXNzPSJ0My1pdGVtIj48aW1nIHNyYz0iJyArIHVybCArICciPjwvZGl2Pic7IH0pOwogICAgICByZXR1cm4gaHRtbDsKICAgIH0KCiAgICBjb25zdCB0aGlyZCA9IE1hdGguY2VpbChpbWFnZXMubGVuZ3RoIC8gMykgfHwgMTsKICAgIGNvbnN0IGMxID0gYnVpbGRDb2xIdG1sKGltYWdlcy5zbGljZSgwLCB0aGlyZCkpOwogICAgY29uc3QgYzIgPSBidWlsZENvbEh0bWwoaW1hZ2VzLnNsaWNlKHRoaXJkLCB0aGlyZCAqIDIpKTsKICAgIGNvbnN0IGMzID0gYnVpbGRDb2xIdG1sKGltYWdlcy5zbGljZSh0aGlyZCAqIDIpKTsKCiAgICAvLyBNb2JpbGU6IDIgRmlsZWlyYXMKICAgIGNvbnN0IGhhbGZNb2JpbGUgPSBNYXRoLmNlaWwoaW1hZ2VzLmxlbmd0aCAvIDIpIHx8IDE7CiAgICBmdW5jdGlvbiBidWlsZE1vYmlsZVJvd0h0bWwoYXJyKSB7CiAgICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSByZXR1cm4gJyc7CiAgICAgIGxldCBodG1sID0gJyc7CiAgICAgIGNvbnN0IGR1cCA9IFsuLi5hcnIsIC4uLmFycl07CiAgICAgIGR1cC5mb3JFYWNoKHVybCA9PiB7IGh0bWwgKz0gJzxkaXYgY2xhc3M9InQzLW1xLWl0ZW0iPjxpbWcgc3JjPSInICsgdXJsICsgJyI+PC9kaXY+JzsgfSk7CiAgICAgIHJldHVybiBodG1sOwogICAgfQogICAgY29uc3QgbTEgPSBidWlsZE1vYmlsZVJvd0h0bWwoaW1hZ2VzLnNsaWNlKDAsIGhhbGZNb2JpbGUpKTsKICAgIGNvbnN0IG0yID0gYnVpbGRNb2JpbGVSb3dIdG1sKGltYWdlcy5zbGljZShoYWxmTW9iaWxlKSk7CgogICAgY29uc3QgaGVyb0hUTUwgPSBgCiAgICAgICAgPGRpdiBpZD0idGVtYS1nZXJhZG8tdDMiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJ0My1oZXJvIj4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InQzLWxlZnQiPgogICAgICAgICAgICAgICAgICAgIDxoMT5CZW0gVmluZG8oYSkgPHNwYW4+THVjcm8gUsOhcGlkbzwvc3Bhbj4hPC9oMT4KICAgICAgICAgICAgICAgICAgICA8cD5BIEx1Y3JvIHLDoXBpZG8gw6kgc3VhIGxvamEgZGUgY29uZmlhbsOnYSBlbSBzZXJ2acOnb3MgZGlnaXRhaXMuIFByZcOnb3MgYWNlc3PDrXZlaXMsIGVudHJlZ2EgcsOhcGlkYSBlIHN1cG9ydGUgc2VtcHJlIGRpc3BvbsOtdmVsLiBFeHBsb3JlIGUgYXByb3ZlaXRlITwvcD4KICAgICAgICAgICAgICAgICAgICA8YSBocmVmPSJodHRwczovL3dhLm1lLzU1ODM5OTM1MjY4MzkiIGNsYXNzPSJ0My1idG4iPgogICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz0iZmEtcmVndWxhciBmYS1jb21tZW50Ij48L2k+IFN1cG9ydGUKICAgICAgICAgICAgICAgICAgICA8L2E+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InQzLXJpZ2h0Ij4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJ0My1jb2wiPjxkaXYgY2xhc3M9InQzLWlubmVyIHZjLXNsb3ciPiR7YzF9PC9kaXY+PC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0idDMtY29sIj48ZGl2IGNsYXNzPSJ0My1pbm5lciB2Yy1tZWQiPiR7YzJ9PC9kaXY+PC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0idDMtY29sIj48ZGl2IGNsYXNzPSJ0My1pbm5lciB2Yy1mYXN0Ij4ke2MzfTwvZGl2PjwvZGl2PgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJ0My1tb2JpbGUtbWFycXVlZSI+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0idDMtbXEtcm93Ij48ZGl2IGNsYXNzPSJ0My1tcS1pbm5lciBtcS1yb3ctcmlnaHQiPiR7bTF9PC9kaXY+PC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0idDMtbXEtcm93Ij48ZGl2IGNsYXNzPSJ0My1tcS1pbm5lciBtcS1yb3ctbGVmdCI+JHttMn08L2Rpdj48L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj5gOwoKICAgIC8vIEluamV0b3IgSW50ZWxpZ2VudGUgKEFiYWl4byBkYSBCYXJyYSBkZSBOYXZlZ2HDp8OjbykKICAgIGxldCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTsKICAgIGlmICghbmF2QmFyKSB7CiAgICAgIGxldCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPSJzZWFyY2giXScpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3BsYWNlaG9sZGVyKj0icHJvZHV0byIgaV0nKTsKICAgICAgaWYgKHNlYXJjaCkgbmF2QmFyID0gc2VhcmNoLmNsb3Nlc3QoJ2RpdltjbGFzcyo9ImhlYWRlciJdJykgfHwgc2VhcmNoLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50OwogICAgfQoKICAgIGlmIChuYXZCYXIpIHsgbmF2QmFyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBoZXJvSFRNTCk7IH0KICAgIGVsc2UgewogICAgICBjb25zdCBmYWxsYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy1iY2U2MTIwMi0wLmVxelFzeCcpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKSB8fCBkb2N1bWVudC5ib2R5OwogICAgICBmYWxsYmFjay5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBoZXJvSFRNTCk7CiAgICB9CiAgfQoKICAvLyBSYWRhciBkZSB2aXNpYmlsaWRhZGUgKFNvbWUgcXVhbmRvIGVudHJhIGVtIHVtIHByb2R1dG8pCiAgZnVuY3Rpb24gZ2VyZW5jaWFyVmlzaWJpbGlkYWRlKCkgewogICAgY29uc3QgaXNIb21lID0gKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy8nIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9pbmRleC5odG1sJyk7CiAgICBsZXQgdGVtYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1hLWdlcmFkby10MycpOwogICAgaWYgKGlzSG9tZSkgeyBpZiAoIXRlbWEpIGluamV0YXJUZW1hVHJlcygpOyBlbHNlIHRlbWEuc3R5bGUuZGlzcGxheSA9ICcnOyB9CiAgICBlbHNlIHsgaWYgKHRlbWEpIHRlbWEuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfQogIH0KCiAgc2V0SW50ZXJ2YWwoZ2VyZW5jaWFyVmlzaWJpbGlkYWRlLCA1MDApOwogIGdlcmVuY2lhclZpc2liaWxpZGFkZSgpOwp9KSgpOw==';

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

  // Converte campos de texto CSV em arrays JS
  function toArray(str) {
    return str.split(',').map(function(s){ return s.trim(); }).filter(Boolean);
  }

  var nomes     = toArray(v.nomes     || 'Ana S.,Carlos M.,Pedro H.');
  var mensagens = toArray(v.mensagens || 'acabou de comprar,se tornou cliente');

  var posV    = v.posicaoV    || 'bottom';
  var distV   = v.distanciaV  || '20px';
  var posH    = v.posicaoH    || 'left';
  var distH   = v.distanciaH  || '20px';
  var gap     = v.gap         || '12px';
  var larMin  = v.larguraMin  || '320px';
  var larMax  = v.larguraMax  || '420px';
  var radius  = v.borderRadius|| '22px';
  var gapInt  = v.gapInterno  || '16px';
  var pad     = v.padding     || '18px 22px';
  var blur    = v.blur        || '10px';
  var corF1   = v.corFundo1   || 'rgba(12,12,16,0.96)';
  var corF2   = v.corFundo2   || 'rgba(8,8,12,0.96)';
  var corBord = v.corBorda    || 'rgba(255,255,255,0.08)';
  var corSomb = v.corSombra   || 'rgba(0,0,0,0.45)';
  var corGlow = v.corGlow     || 'rgba(65,84,255,0.12)';
  var tamIco  = v.tamanhoIcone|| '44px';
  var radIco  = v.radiusIcone || '14px';
  var corFI1  = v.corFundoIcone1 || 'rgba(30,255,220,0.18)';
  var corFI2  = v.corFundoIcone2 || 'rgba(30,255,220,0.06)';
  var corGI   = v.corGlowIcone   || 'rgba(42,255,230,0.18)';
  var corIco  = v.corIcone       || '#2ff7e3';
  var corGIS  = v.corGlowIconeSvg|| 'rgba(47,247,227,0.35)';
  var tamTxt  = v.tamanhoTexto   || '17px';
  var corNome = v.corNome        || '#ffffff';
  var corMsg  = v.corMensagem    || 'rgba(255,255,255,0.78)';

  // Gera 3 notificacoes de exemplo
  var notifs = '';
  for (var i = 0; i < 3; i++) {
    var nome = nomes[i % nomes.length];
    var msg  = mensagens[i % mensagens.length];
    notifs +=
      '<div class="pn" style="'
      + 'min-width:' + larMin + ';max-width:' + larMax + ';'
      + 'background:linear-gradient(180deg,' + corF1 + ',' + corF2 + ');'
      + 'border:1px solid ' + corBord + ';'
      + 'border-radius:' + radius + ';'
      + 'box-shadow:0 0 0 1px rgba(255,255,255,0.03) inset,0 10px 30px ' + corSomb + ',0 0 40px ' + corGlow + ';'
      + 'backdrop-filter:blur(' + blur + ');overflow:hidden;margin-bottom:' + gap + ';'
      + 'animation:pnIn 0.45s ease ' + (i * 0.15) + 's both;'
      + '">'
        + '<div style="display:flex;align-items:center;gap:' + gapInt + ';padding:' + pad + ';">'
          + '<div style="width:' + tamIco + ';height:' + tamIco + ';min-width:' + tamIco + ';border-radius:' + radIco + ';display:flex;align-items:center;justify-content:center;background:linear-gradient(180deg,' + corFI1 + ',' + corFI2 + ');box-shadow:0 0 20px ' + corGI + ';">'
            + '<svg viewBox="0 0 24 24" style="width:22px;height:22px;fill:' + corIco + ';filter:drop-shadow(0 0 8px ' + corGIS + ')"><path d="M7 4H3v2h2.2l1.8 7.2A2 2 0 0 0 9 15h8a2 2 0 0 0 1.94-1.5L20.7 7H8.1l-.4-1.6A2 2 0 0 0 7 4zm2 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 0a2 2 0 1 0 .001 4A2 2 0 0 0 17 17z"/></svg>'
          + '</div>'
          + '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:6px;font-family:Arial,sans-serif;font-size:' + tamTxt + ';line-height:1.35;">'
            + '<span style="font-weight:800;color:' + corNome + ';">' + nome + '</span>'
            + '<span style="font-weight:500;color:' + corMsg + ';">' + msg + '</span>'
          + '</div>'
        + '</div>'
      + '</div>';
  }

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>'
    + '*{box-sizing:border-box;margin:0;padding:0;}'
    + 'body{background:#0a0a10;min-height:480px;padding:20px;display:flex;flex-direction:column;justify-content:' + (posV === 'bottom' ? 'flex-end' : 'flex-start') + ';align-items:' + (posH === 'right' ? 'flex-end' : 'flex-start') + ';}'
    + '@keyframes pnIn{from{opacity:0;transform:translateX(-30px) scale(0.96)}to{opacity:1;transform:translateX(0) scale(1)}}'
    + '</style></head><body>'
    + '<div style="' + posV + ':' + distV + ';' + posH + ':' + distH + ';">'
    + notifs
    + '</div>'
    + '</body></html>';

  var old = box.querySelector('iframe');
  if (old) old.remove();
  var iframe = document.createElement('iframe');
  iframe.style.cssText = 'width:100%;height:480px;border:none;display:block;border-radius:14px;';
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