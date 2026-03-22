// =============================================================
//  OG! — banner-hero2.js
// =============================================================

const COMPONENT = {
  title:       'Banner Hero com Carrossel',
  description: 'Hero dividido em 2 colunas: texto + botoes a esquerda, carrossel de imagens com setas, progress bar e swipe mobile a direita. Inserido via seletor CSS.',
  tags:        ['Banner', 'Hero', 'Carrossel', 'WhatsApp', 'CSS', 'JS', 'Gratis'],

  fields: [
    // Slides (ate 5)
    { id: 'slide1Src',  label: 'Slide 1 — URL da Imagem', type: 'text', placeholder: 'https://...', default: 'https://via.placeholder.com/600x350/D674F1/0D0E11?text=Slide+1', required: true  },
    { id: 'slide1Link', label: 'Slide 1 — Link ao clicar', type: 'text', placeholder: 'Ex: /produto', default: '#', required: false },
    { id: 'slide2Src',  label: 'Slide 2 — URL da Imagem', type: 'text', placeholder: 'https://...', default: 'https://via.placeholder.com/600x350/8A2BE2/FFFFFF?text=Slide+2', required: false },
    { id: 'slide2Link', label: 'Slide 2 — Link', type: 'text', default: '#', required: false },
    { id: 'slide3Src',  label: 'Slide 3 — URL da Imagem', type: 'text', placeholder: 'https://...', default: 'https://via.placeholder.com/600x350/4682B4/FFFFFF?text=Slide+3', required: false },
    { id: 'slide3Link', label: 'Slide 3 — Link', type: 'text', default: '#', required: false },
    { id: 'slide4Src',  label: 'Slide 4 — URL (opcional)', type: 'text', default: '', required: false },
    { id: 'slide4Link', label: 'Slide 4 — Link', type: 'text', default: '#', required: false },
    { id: 'slide5Src',  label: 'Slide 5 — URL (opcional)', type: 'text', default: '', required: false },
    { id: 'slide5Link', label: 'Slide 5 — Link', type: 'text', default: '#', required: false },

    // Texto
    { id: 'textoBadge', label: 'Texto do badge',    type: 'text', placeholder: 'Ex: Destaques', default: 'Destaques', required: true  },
    { id: 'titulo',     label: 'Titulo principal',  type: 'text', placeholder: 'Ex: Sua Experiencia Gamer', default: 'Sua Experiencia Gamer Elevada', required: true  },
    { id: 'descricao',  label: 'Descricao',         type: 'text', placeholder: 'Ex: Produtos com...', default: 'Seu fornecedor de confianca com os melhores precos, qualidade premium e suporte humanizado.', required: false },

    // Botoes
    { id: 'textoBtn1', label: 'Botao 1 — Texto', type: 'text', placeholder: 'Ex: Explorar Catalogo', default: 'Explorar Catalogo', required: true  },
    { id: 'btn1Link',  label: 'Botao 1 — Link (# = scroll ate produtos)', type: 'text', placeholder: '# ou https://...', default: '#', required: false },
    { id: 'textoBtn2', label: 'Botao 2 — Texto', type: 'text', placeholder: 'Ex: Grupo WhatsApp', default: 'Grupo WhatsApp', required: false },
    { id: 'btn2Link',  label: 'Botao 2 — Link WhatsApp', type: 'text', placeholder: 'https://wa.me/55...', default: 'https://api.whatsapp.com/send?phone=5511999999999', required: false },

    // Seletor de insercao
    { id: 'seletorInsercao', label: 'Seletor CSS de insercao (elemento pai)', type: 'text', placeholder: 'Ex: .sc-bce61202-0.eqzQsx', default: '.sc-bce61202-0.eqzQsx', required: true },

    // Timing
    { id: 'slideDuration', label: 'Duracao de cada slide (ms)', type: 'text', placeholder: 'Ex: 5000', default: '5000', required: true },

    // Layout
    { id: 'padding',      label: 'Padding do hero',       type: 'text', placeholder: 'Ex: 50px', default: '50px',   required: true  },
    { id: 'margin',       label: 'Margin do hero',        type: 'text', placeholder: 'Ex: 20px 0', default: '20px 0', required: true  },
    { id: 'borderRadius', label: 'Border Radius',         type: 'text', placeholder: 'Ex: 12px', default: '12px',   required: true  },
    { id: 'alturaMin',    label: 'Altura minima',         type: 'text', placeholder: 'Ex: 400px', default: '400px', required: true  },
    { id: 'tamanhoTitulo',label: 'Tamanho do titulo',     type: 'text', placeholder: 'Ex: 3.2rem', default: '3.2rem', required: true },

    // Cores
    { id: 'corFundo',       label: 'Cor de fundo',          type: 'color', default: '#0d0e11' },
    { id: 'corBadge',       label: 'Cor do badge',          type: 'color', default: '#d674f1' },
    { id: 'corBadgeTexto',  label: 'Cor do texto do badge', type: 'color', default: '#ffffff' },
    { id: 'corTitulo',      label: 'Cor do titulo',         type: 'color', default: '#f5f5f5' },
    { id: 'corDescricao',   label: 'Cor da descricao',      type: 'color', default: '#8c8c8c' },
    { id: 'corBtn1',        label: 'Cor do Botao 1',        type: 'color', default: '#f5f5f5' },
    { id: 'corBtn1Texto',   label: 'Cor do texto Botao 1',  type: 'color', default: '#0d0e11' },
    { id: 'corBtn2',        label: 'Cor do Botao 2',        type: 'color', default: '#1c1c1c' },
    { id: 'corBtn2Texto',   label: 'Cor do texto Botao 2',  type: 'color', default: '#f5f5f5' },
    { id: 'corBtn2Borda',   label: 'Cor da borda Botao 2',  type: 'color', default: '#1B1B20' },
    { id: 'corBtn2Hover',   label: 'Cor hover Botao 2',     type: 'color', default: '#2a2a2a' },
    { id: 'corProgressBar', label: 'Cor da progress bar',   type: 'color', default: '#ffffff' },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = 'Lm9nLWhlcm8gewogIHBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogIHBhZGRpbmc6IHt7cGFkZGluZ319OyBiYWNrZ3JvdW5kOiB7e2NvckZ1bmRvfX07IGJvcmRlci1yYWRpdXM6IHt7Ym9yZGVyUmFkaXVzfX07CiAgb3ZlcmZsb3c6IGhpZGRlbjsgbWFyZ2luOiB7e21hcmdpbn19OyBtaW4taGVpZ2h0OiB7e2FsdHVyYU1pbn19Owp9Ci5vZy1oZXJvLWJhZGdlIHsKICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMjBweDsgbGVmdDogMjBweDsgYmFja2dyb3VuZC1jb2xvcjoge3tjb3JCYWRnZX19OwogIGNvbG9yOiB7e2NvckJhZGdlVGV4dG99fTsgcGFkZGluZzogNXB4IDE1cHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7CiAgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogYm9sZDsgei1pbmRleDogMjsKfQoub2ctaGVyby1sZWZ0IHsgZmxleDogMTsgbWF4LXdpZHRoOiA0NTBweDsgei1pbmRleDogMjsgcGFkZGluZy1yaWdodDogMzBweDsgfQoub2ctaGVyby1sZWZ0IGgxIHsKICBmb250LXNpemU6IHt7dGFtYW5ob1RpdHVsb319OyBjb2xvcjoge3tjb3JUaXR1bG99fSAhaW1wb3J0YW50OyBmb250LXdlaWdodDogYm9sZDsKICBtYXJnaW4tYm90dG9tOiAyMHB4OyBsaW5lLWhlaWdodDogMS4xOwp9Ci5vZy1oZXJvLWxlZnQgcCB7CiAgZm9udC1zaXplOiAxcmVtOyBjb2xvcjoge3tjb3JEZXNjcmljYW99fSAhaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOiAzMHB4OyBsaW5lLWhlaWdodDogMS42Owp9Ci5vZy1oZXJvLWJ1dHRvbnMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGdhcDogMTVweDsgfQoub2ctaGVyby1idXR0b25zIGJ1dHRvbiB7CiAgcGFkZGluZzogMTJweCAyNHB4OyBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDhweDsgZm9udC1zaXplOiAxcmVtOwogIGZvbnQtd2VpZ2h0OiA2MDA7IGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsKICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiA4cHg7Cn0KLm9nLWJ0bi1wcmltYXJ5IHsgYmFja2dyb3VuZC1jb2xvcjoge3tjb3JCdG4xfX07IGNvbG9yOiB7e2NvckJ0bjFUZXh0b319ICFpbXBvcnRhbnQ7IH0KLm9nLWJ0bi1wcmltYXJ5OmhvdmVyIHsgb3BhY2l0eTogMC44NTsgfQoub2ctYnRuLXNlY29uZGFyeSB7IGJhY2tncm91bmQtY29sb3I6IHt7Y29yQnRuMn19OyBjb2xvcjoge3tjb3JCdG4yVGV4dG99fSAhaW1wb3J0YW50OyBib3JkZXI6IDFweCBzb2xpZCB7e2NvckJ0bjJCb3JkYX19OyB9Ci5vZy1idG4tc2Vjb25kYXJ5OmhvdmVyIHsgYmFja2dyb3VuZC1jb2xvcjoge3tjb3JCdG4ySG92ZXJ9fTsgfQoub2ctd2hhdHNhcHAtaWNvbiB7CiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4OwogIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iJTIzRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PHBhdGggZD0iTTEyOCwyNEExMDQsMTA0LDAsMCwwLDM2LjE4LDE3Ni44OEwyNC44MywyMTAuOTNhMTYsMTYsMCwwLDAsMjAuMjQsMjAuMjRsMzQuMDUtMTEuMzVBMTA0LDEwNCwwLDEsMCwxMjgsMjRabTAsMTkyYTg4LDg4LDAsMCwxLTQ0LjM2LTEyLjcxYTgsOCwwLDAsMC01Ljg3LS41M2wtMjUuNTQsOC41MUw2MC44LDE4NS43M2E4LDgsMCwwLDAtLjUzLTUuODdBODgsODgsMCwxLDEsMTI4LDIxNlptNTYtODguNjdjLTEuODUtMy42OC04LjQtOC0xMS43Mi05LjI4cy01Ljg1LTEuMy04LjMzLjgyLTMuODcsNC44Ni01Ljg0LDYuODMtMy45NSwyLjE4LTcuMywwUzE0MCwxMjAuMywxMzEuNDUsMTEyLjVjLTcuMjUtNi41LTEyLTE0LjQ3LTEwLjUtMTcuNDVzMi4zMy00LjUsNC4zLTYuNDdzMy4xOC0zLjI4LDQuNzgtNS40N1MxMzIuODUsNzkuNSwxMzIsNzhzLTUuODUtNy04LTkuNjItNC4yOC0yLjI4LTYuNDgtMi4zMy00LjYzLS4wNS03LDMuMTUtOC41OCwxMC4yLTExLjE1LDE0LjhjLTMuMTgsNS43LTYsMTEuNjItNS4xOCwxOC40OHM2LDEzLDguNjMsMTUuNjJjNi4yMyw2LjIzLDE2LjcsMjEuMywzMi42NywyOS42NywxOC41LDkuNiwyNy41LDEwLjIsMzMuNSw4LjEzLDMuMzMtMS4xMyw5LjYyLTUuNDcsMTEuNTctOS44czItOC4xMy43LTEwLjc3UzE4NS44NSwxMzEsMTg0LDEyNy4zM1oiPjwvcGF0aD48L3N2Zz4nKTsKICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsKfQoub2ctaGVyby1pbWFnZSB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZmxleDogMTsgbWF4LXdpZHRoOiA1MCU7IGRpc3BsYXk6IGJsb2NrOyB9Ci5vZy1oZXJvLWltYWdlIGEgeyBkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IHJlbGF0aXZlOyBib3JkZXItcmFkaXVzOiAxMnB4OyBvdmVyZmxvdzogaGlkZGVuOyB9Ci5vZy1oZXJvLWltYWdlIGltZyB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IGRpc3BsYXk6IGJsb2NrOyBib3JkZXItcmFkaXVzOiAxMnB4OyBtYXgtaGVpZ2h0OiAzNTBweDsgb2JqZWN0LWZpdDogY292ZXI7IH0KLm9nLXByb2dyZXNzLWNvbnRhaW5lciB7CiAgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDEwcHg7IGxlZnQ6IDUlOyB3aWR0aDogOTAlOyBoZWlnaHQ6IDRweDsKICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7IGJvcmRlci1yYWRpdXM6IDJweDsgei1pbmRleDogMzsKfQoub2ctcHJvZ3Jlc3MtYmFyIHsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMCU7IGJhY2tncm91bmQtY29sb3I6IHt7Y29yUHJvZ3Jlc3NCYXJ9fTsgYm9yZGVyLXJhZGl1czogMnB4OyB9Ci5vZy1oZXJvLWltYWdlIC5vZy1hcnJvdyB7CiAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4OwogIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTsgYm9yZGVyLXJhZGl1czogNTAlOyBjdXJzb3I6IHBvaW50ZXI7IHotaW5kZXg6IDM7CiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgcGFkZGluZzogOHB4OyBib3gtc2l6aW5nOiBib3JkZXItYm94OwogIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOwp9Ci5vZy1oZXJvLWltYWdlIC5vZy1hcnJvdyBzdmcgeyB3aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4OyBmaWxsOiB3aGl0ZTsgfQoub2ctaGVyby1pbWFnZSAub2ctYXJyb3c6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7IH0KLm9nLWhlcm8taW1hZ2UgLm9nLWFycm93Lm9nLWxlZnQgeyBsZWZ0OiAxMHB4OyB9Ci5vZy1oZXJvLWltYWdlIC5vZy1hcnJvdy5vZy1yaWdodCB7IHJpZ2h0OiAxMHB4OyB9Ci5vZy1tb2JpbGUtY29udGFpbmVyIHsgZGlzcGxheTogbm9uZTsgd2lkdGg6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsgfQoub2ctbW9iaWxlLXRyYWNrIHsgZGlzcGxheTogZmxleDsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTsgfQoub2ctbW9iaWxlLXNsaWRlIHsgbWluLXdpZHRoOiAxMDAlOyBwb3NpdGlvbjogcmVsYXRpdmU7IH0KLm9nLW1vYmlsZS1zbGlkZSBpbWcgeyB3aWR0aDogMTAwJTsgZGlzcGxheTogYmxvY2s7IGJvcmRlci1yYWRpdXM6IDEycHg7IH0KLm9nLW1vYmlsZS1kb3RzIHsKICBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMTBweDsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7CiAgZGlzcGxheTogZmxleDsgZ2FwOiA4cHg7IHotaW5kZXg6IDQ7Cn0KLm9nLW1vYmlsZS1kb3QgewogIHdpZHRoOiA4cHg7IGhlaWdodDogOHB4OyBib3JkZXItcmFkaXVzOiA1MCU7CiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpOyB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyBjdXJzb3I6IHBvaW50ZXI7Cn0KLm9nLW1vYmlsZS1kb3Qub2ctZG90LWFjdGl2ZSB7IGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH0KQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7CiAgLm9nLWhlcm8geyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBwYWRkaW5nOiAyMHB4OyB9CiAgLm9nLWhlcm8tbGVmdCB7IG1heC13aWR0aDogMTAwJTsgcGFkZGluZy1yaWdodDogMDsgdGV4dC1hbGlnbjogY2VudGVyOyBvcmRlcjogMjsgfQogIC5vZy1oZXJvLWxlZnQgaDEgeyBmb250LXNpemU6IDIuNXJlbTsgfQogIC5vZy1oZXJvLWxlZnQgcCB7IGZvbnQtc2l6ZTogMC45cmVtOyB9CiAgLm9nLWhlcm8tYnV0dG9ucyB7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9CiAgLm9nLWhlcm8taW1hZ2UgeyBkaXNwbGF5OiBub25lOyB9CiAgLm9nLW1vYmlsZS1jb250YWluZXIgeyBkaXNwbGF5OiBibG9jazsgb3JkZXI6IDE7IG1hcmdpbi1ib3R0b206IDIwcHg7IG1heC13aWR0aDogMTAwJTsgfQp9';
const BASE_JS_B64   = 'KGZ1bmN0aW9uKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgaWYgKHdpbmRvdy5vZ0hlcm9JbmplY3RlZCkgcmV0dXJuOwogIHdpbmRvdy5vZ0hlcm9JbmplY3RlZCA9IHRydWU7CgogIHZhciBvZ0Jhbm5lcnMgPSBbCiAgICAvKiBJRjpzbGlkZTFTcmMgKi97IGhyZWY6ICd7e3NsaWRlMUxpbmt9fScsIHNyYzogJ3t7c2xpZGUxU3JjfX0nIH0sLyogRU5ESUYgKi8KICAgIC8qIElGOnNsaWRlMlNyYyAqL3sgaHJlZjogJ3t7c2xpZGUyTGlua319Jywgc3JjOiAne3tzbGlkZTJTcmN9fScgfSwvKiBFTkRJRiAqLwogICAgLyogSUY6c2xpZGUzU3JjICoveyBocmVmOiAne3tzbGlkZTNMaW5rfX0nLCBzcmM6ICd7e3NsaWRlM1NyY319JyB9LC8qIEVORElGICovCiAgICAvKiBJRjpzbGlkZTRTcmMgKi97IGhyZWY6ICd7e3NsaWRlNExpbmt9fScsIHNyYzogJ3t7c2xpZGU0U3JjfX0nIH0sLyogRU5ESUYgKi8KICAgIC8qIElGOnNsaWRlNVNyYyAqL3sgaHJlZjogJ3t7c2xpZGU1TGlua319Jywgc3JjOiAne3tzbGlkZTVTcmN9fScgfSwvKiBFTkRJRiAqLwogIF0uZmlsdGVyKGZ1bmN0aW9uKGIpeyByZXR1cm4gYi5zcmMgJiYgYi5zcmMudHJpbSgpOyB9KTsKCiAgaWYgKCFvZ0Jhbm5lcnMubGVuZ3RoKSByZXR1cm47CgogIHZhciBvZ1NsaWRlRHVyYXRpb24gPSB7e3NsaWRlRHVyYXRpb259fTsKICB2YXIgb2dCdG4xTGluayAgICAgID0gJ3t7YnRuMUxpbmt9fSc7CiAgdmFyIG9nQnRuMkxpbmsgICAgICA9ICd7e2J0bjJMaW5rfX0nOwogIHZhciBvZ1NlbGV0b3JJbnNlcmNhbyA9ICd7e3NlbGV0b3JJbnNlcmNhb319JzsKCiAgdmFyIG9nU2xpZGVzRGVza3RvcCA9IG9nQmFubmVycy5tYXAoZnVuY3Rpb24oYiwgaSkgewogICAgcmV0dXJuICc8ZGl2IGNsYXNzPSJvZy1tb2JpbGUtc2xpZGUiPjxhIGhyZWY9IicgKyBiLmhyZWYgKyAnIiB0YXJnZXQ9Il9ibGFuayI+PGltZyBzcmM9IicgKyBiLnNyYyArICciIGFsdD0iU2xpZGUgJyArIChpKzEpICsgJyI+PC9hPjwvZGl2Pic7CiAgfSkuam9pbignJyk7CgogIHZhciBvZ0RvdHMgPSBvZ0Jhbm5lcnMubWFwKGZ1bmN0aW9uKF8sIGkpIHsKICAgIHJldHVybiAnPGRpdiBjbGFzcz0ib2ctbW9iaWxlLWRvdCcgKyAoaSA9PT0gMCA/ICcgb2ctZG90LWFjdGl2ZScgOiAnJykgKyAnIiBkYXRhLWluZGV4PSInICsgaSArICciPjwvZGl2Pic7CiAgfSkuam9pbignJyk7CgogIHZhciBvZ0hUTUwgPQogICAgJzxkaXYgY2xhc3M9Im9nLWhlcm8iPicKICAgICsgJzxzcGFuIGNsYXNzPSJvZy1oZXJvLWJhZGdlIj57e3RleHRvQmFkZ2V9fTwvc3Bhbj4nCiAgICArICc8ZGl2IGNsYXNzPSJvZy1oZXJvLWxlZnQiPicKICAgICAgKyAnPGgxPnt7dGl0dWxvfX08L2gxPicKICAgICAgKyAnPHA+e3tkZXNjcmljYW99fTwvcD4nCiAgICAgICsgJzxkaXYgY2xhc3M9Im9nLWhlcm8tYnV0dG9ucyI+JwogICAgICAgICsgJzxidXR0b24gaWQ9Im9nLWhlcm8tYnRuMSIgY2xhc3M9Im9nLWJ0bi1wcmltYXJ5Ij57e3RleHRvQnRuMX19PC9idXR0b24+JwogICAgICAgICsgJzxidXR0b24gaWQ9Im9nLWhlcm8tYnRuMiIgY2xhc3M9Im9nLWJ0bi1zZWNvbmRhcnkiPjxzcGFuIGNsYXNzPSJvZy13aGF0c2FwcC1pY29uIj48L3NwYW4+e3t0ZXh0b0J0bjJ9fTwvYnV0dG9uPicKICAgICAgKyAnPC9kaXY+JwogICAgKyAnPC9kaXY+JwogICAgKyAnPGRpdiBjbGFzcz0ib2ctaGVyby1pbWFnZSI+JwogICAgICArICc8YSBocmVmPSInICsgb2dCYW5uZXJzWzBdLmhyZWYgKyAnIiB0YXJnZXQ9Il9ibGFuayIgaWQ9Im9nLWhlcm8tbGluayI+JwogICAgICAgICsgJzxpbWcgc3JjPSInICsgb2dCYW5uZXJzWzBdLnNyYyArICciIGFsdD0iQmFubmVyIiBpZD0ib2ctaGVyby1pbWciPicKICAgICAgKyAnPC9hPicKICAgICAgKyAnPGRpdiBjbGFzcz0ib2ctcHJvZ3Jlc3MtY29udGFpbmVyIj48ZGl2IGNsYXNzPSJvZy1wcm9ncmVzcy1iYXIiPjwvZGl2PjwvZGl2PicKICAgICAgKyAnPGRpdiBjbGFzcz0ib2ctYXJyb3cgb2ctbGVmdCI+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyeiI+PC9wYXRoPjwvc3ZnPjwvZGl2PicKICAgICAgKyAnPGRpdiBjbGFzcz0ib2ctYXJyb3cgb2ctcmlnaHQiPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMCAxOGw2LTYtNi02LTEuNDEgMS40MUwxMy4xNyAxMnoiPjwvcGF0aD48L3N2Zz48L2Rpdj4nCiAgICArICc8L2Rpdj4nCiAgICArICc8ZGl2IGNsYXNzPSJvZy1tb2JpbGUtY29udGFpbmVyIj4nCiAgICAgICsgJzxkaXYgY2xhc3M9Im9nLW1vYmlsZS10cmFjayIgaWQ9Im9nLW1vYmlsZS10cmFjayI+JyArIG9nU2xpZGVzRGVza3RvcCArICc8L2Rpdj4nCiAgICAgICsgJzxkaXYgY2xhc3M9Im9nLW1vYmlsZS1kb3RzIiBpZD0ib2ctbW9iaWxlLWRvdHMiPicgKyBvZ0RvdHMgKyAnPC9kaXY+JwogICAgKyAnPC9kaXY+JwogICAgKyAnPC9kaXY+JzsKCiAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob2dTZWxldG9ySW5zZXJjYW8pOwogIGlmICghdGFyZ2V0IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vZy1oZXJvJykpIHJldHVybjsKICB0YXJnZXQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgb2dIVE1MKTsKCiAgdmFyIGhlcm8gICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub2ctaGVybycpOwogIHZhciBkZXNrTGluayAgID0gaGVyby5xdWVyeVNlbGVjdG9yKCcjb2ctaGVyby1saW5rJyk7CiAgdmFyIGRlc2tJbWcgICAgPSBoZXJvLnF1ZXJ5U2VsZWN0b3IoJyNvZy1oZXJvLWltZycpOwogIHZhciBwcm9ncmVzcyAgID0gaGVyby5xdWVyeVNlbGVjdG9yKCcub2ctcHJvZ3Jlc3MtYmFyJyk7CiAgdmFyIGFycm93TCAgICAgPSBoZXJvLnF1ZXJ5U2VsZWN0b3IoJy5vZy1hcnJvdy5vZy1sZWZ0Jyk7CiAgdmFyIGFycm93UiAgICAgPSBoZXJvLnF1ZXJ5U2VsZWN0b3IoJy5vZy1hcnJvdy5vZy1yaWdodCcpOwogIHZhciBtVHJhY2sgICAgID0gaGVyby5xdWVyeVNlbGVjdG9yKCcjb2ctbW9iaWxlLXRyYWNrJyk7CiAgdmFyIGRvdHNFbCAgICAgPSBoZXJvLnF1ZXJ5U2VsZWN0b3IoJyNvZy1tb2JpbGUtZG90cycpOwogIHZhciBkb3RzICAgICAgID0gZG90c0VsID8gZG90c0VsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5vZy1tb2JpbGUtZG90JykgOiBbXTsKICB2YXIgYnRuMSAgICAgICA9IGhlcm8ucXVlcnlTZWxlY3RvcignI29nLWhlcm8tYnRuMScpOwogIHZhciBidG4yICAgICAgID0gaGVyby5xdWVyeVNlbGVjdG9yKCcjb2ctaGVyby1idG4yJyk7CiAgdmFyIG9nQ3VycmVudCAgPSAwOwogIHZhciBvZ1RpbWVyOwoKICBmdW5jdGlvbiBvZ1VwZGF0ZVByb2dyZXNzKCkgewogICAgaWYgKCFwcm9ncmVzcykgcmV0dXJuOwogICAgcHJvZ3Jlc3Muc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJzsKICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gJzAlJzsKICAgIHByb2dyZXNzLm9mZnNldEhlaWdodDsKICAgIHByb2dyZXNzLnN0eWxlLnRyYW5zaXRpb24gPSAnd2lkdGggJyArIChvZ1NsaWRlRHVyYXRpb24gLyAxMDAwKSArICdzIGxpbmVhcic7CiAgICBwcm9ncmVzcy5zdHlsZS53aWR0aCA9ICcxMDAlJzsKICB9CgogIGZ1bmN0aW9uIG9nVXBkYXRlRG90cyhpZHgpIHsKICAgIGRvdHMuZm9yRWFjaChmdW5jdGlvbihkLCBpKXsgZC5jbGFzc0xpc3QudG9nZ2xlKCdvZy1kb3QtYWN0aXZlJywgaSA9PT0gaWR4KTsgfSk7CiAgfQoKICBmdW5jdGlvbiBvZ1Nob3dTbGlkZShpZHgpIHsKICAgIGlmIChpZHggPCAwIHx8IGlkeCA+PSBvZ0Jhbm5lcnMubGVuZ3RoKSByZXR1cm47CiAgICBvZ0N1cnJlbnQgPSBpZHg7CiAgICBpZiAoZGVza0xpbmspIGRlc2tMaW5rLmhyZWYgPSBvZ0Jhbm5lcnNbaWR4XS5ocmVmOwogICAgaWYgKGRlc2tJbWcpICBkZXNrSW1nLnNyYyAgPSBvZ0Jhbm5lcnNbaWR4XS5zcmM7CiAgICBpZiAobVRyYWNrKSAgIG1UcmFjay5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtJyArIChpZHggKiAxMDApICsgJyUpJzsKICAgIG9nVXBkYXRlRG90cyhpZHgpOwogICAgb2dVcGRhdGVQcm9ncmVzcygpOwogIH0KCiAgZnVuY3Rpb24gb2dOZXh0KCkgeyBvZ1Nob3dTbGlkZSgob2dDdXJyZW50ICsgMSkgJSBvZ0Jhbm5lcnMubGVuZ3RoKTsgfQogIGZ1bmN0aW9uIG9nUHJldigpIHsgb2dTaG93U2xpZGUoKG9nQ3VycmVudCAtIDEgKyBvZ0Jhbm5lcnMubGVuZ3RoKSAlIG9nQmFubmVycy5sZW5ndGgpOyB9CgogIGZ1bmN0aW9uIG9nUmVzZXQoKSB7CiAgICBjbGVhckludGVydmFsKG9nVGltZXIpOwogICAgaWYgKG9nQmFubmVycy5sZW5ndGggPiAxKSBvZ1RpbWVyID0gc2V0SW50ZXJ2YWwob2dOZXh0LCBvZ1NsaWRlRHVyYXRpb24pOwogIH0KCiAgaWYgKGFycm93UikgYXJyb3dSLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXsgb2dOZXh0KCk7IG9nUmVzZXQoKTsgfSk7CiAgaWYgKGFycm93TCkgYXJyb3dMLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXsgb2dQcmV2KCk7IG9nUmVzZXQoKTsgfSk7CgogIGlmIChtVHJhY2spIHsKICAgIHZhciBvZ1RvdWNoWCA9IDA7CiAgICBtVHJhY2suYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpeyBvZ1RvdWNoWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDsgfSwgeyBwYXNzaXZlOiB0cnVlIH0pOwogICAgbVRyYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oZSkgewogICAgICB2YXIgZHggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblggLSBvZ1RvdWNoWDsKICAgICAgaWYgKGR4IDwgLTUwKSB7IG9nTmV4dCgpOyBvZ1Jlc2V0KCk7IH0KICAgICAgaWYgKGR4ID4gNTApICB7IG9nUHJldigpOyBvZ1Jlc2V0KCk7IH0KICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KTsKICB9CgogIGRvdHMuZm9yRWFjaChmdW5jdGlvbihkKSB7CiAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkgewogICAgICB2YXIgaWR4ID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pbmRleCwgMTApOwogICAgICBpZiAoIWlzTmFOKGlkeCkpIHsgb2dTaG93U2xpZGUoaWR4KTsgb2dSZXNldCgpOyB9CiAgICB9KTsKICB9KTsKCiAgaWYgKGJ0bjEpIGJ0bjEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHsKICAgIGlmIChvZ0J0bjFMaW5rICYmIG9nQnRuMUxpbmsgIT09ICcjJykgewogICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG9nQnRuMUxpbms7CiAgICB9IGVsc2UgewogICAgICB2YXIgcHJvZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy01ZGZlMzA4MC0wLCAjQ09NUE9ORU5UX1BST0RVQ1RTX0NBUkRTLCAuc2MtYmZhM2E3YTctMiwgLnNjLWJmYTNhN2E3LTMnKTsKICAgICAgaWYgKHByb2QpIHByb2Quc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnIH0pOwogICAgfQogIH0pOwoKICBpZiAoYnRuMikgYnRuMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkgewogICAgd2luZG93Lm9wZW4ob2dCdG4yTGluayB8fCAnaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9U0VVTlVNRVJPQVFVSScsICdfYmxhbmsnKTsKICB9KTsKCiAgb2dTaG93U2xpZGUoMCk7CiAgaWYgKG9nQmFubmVycy5sZW5ndGggPiAxKSB7CiAgICBvZ1RpbWVyID0gc2V0SW50ZXJ2YWwob2dOZXh0LCBvZ1NsaWRlRHVyYXRpb24pOwogIH0gZWxzZSB7CiAgICBpZiAoYXJyb3dMKSBhcnJvd0wuc3R5bGUuZGlzcGxheSA9ICdub25lJzsKICAgIGlmIChhcnJvd1IpIGFycm93Ui5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOwogICAgaWYgKGRvdHNFbCkgZG90c0VsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7CiAgICBpZiAocHJvZ3Jlc3MgJiYgcHJvZ3Jlc3MucGFyZW50RWxlbWVudCkgcHJvZ3Jlc3MucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOwogIH0KfSkoKTs=';

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

  var img1      = v.slide1Src    || 'https://via.placeholder.com/600x350/D674F1/0D0E11?text=Slide+1';
  var corFundo  = v.corFundo     || '#0d0e11';
  var corBadge  = v.corBadge     || '#d674f1';
  var corBadgeTx= v.corBadgeTexto|| '#ffffff';
  var corTit    = v.corTitulo    || '#f5f5f5';
  var corDesc   = v.corDescricao || '#8c8c8c';
  var corB1     = v.corBtn1      || '#f5f5f5';
  var corB1Tx   = v.corBtn1Texto || '#0d0e11';
  var corB2     = v.corBtn2      || '#1c1c1c';
  var corB2Tx   = v.corBtn2Texto || '#f5f5f5';
  var corProg   = v.corProgressBar || '#ffffff';
  var badge     = v.textoBadge   || 'Destaques';
  var titulo    = v.titulo       || 'Sua Experiencia Gamer Elevada';
  var desc      = v.descricao    || 'Fornecedor de confianca com os melhores precos.';
  var btn1Txt   = v.textoBtn1    || 'Explorar Catalogo';
  var btn2Txt   = v.textoBtn2    || 'Grupo WhatsApp';
  var radius    = v.borderRadius || '12px';
  var padding   = v.padding      || '40px';
  var altMin    = v.alturaMin    || '400px';
  var tamTit    = v.tamanhoTitulo|| '2.8rem';

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>*{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,sans-serif;} body{background:#111;padding:16px;}'
    + '.hero{position:relative;display:flex;align-items:center;justify-content:space-between;'
      + 'padding:' + padding + ';background:' + corFundo + ';border-radius:' + radius + ';overflow:hidden;min-height:' + altMin + ';gap:20px;}'
    + '.badge{position:absolute;top:16px;left:16px;background:' + corBadge + ';color:' + corBadgeTx + ';padding:4px 14px;border-radius:20px;font-size:11px;font-weight:bold;}'
    + '.left{flex:1;max-width:45%;display:flex;flex-direction:column;gap:12px;z-index:2;}'
    + 'h1{font-size:' + tamTit + ';color:' + corTit + ';font-weight:bold;line-height:1.1;}'
    + 'p{font-size:.9rem;color:' + corDesc + ';line-height:1.6;}'
    + '.btns{display:flex;gap:12px;flex-wrap:wrap;}'
    + '.b1{padding:10px 20px;border:none;border-radius:8px;font-weight:600;cursor:pointer;background:' + corB1 + ';color:' + corB1Tx + ';font-size:.9rem;}'
    + '.b2{padding:10px 20px;border:none;border-radius:8px;font-weight:600;cursor:pointer;background:' + corB2 + ';color:' + corB2Tx + ';font-size:.9rem;display:flex;align-items:center;gap:6px;}'
    + '.right{flex:1;max-width:50%;position:relative;border-radius:10px;overflow:hidden;}'
    + '.right img{width:100%;max-height:300px;object-fit:cover;display:block;border-radius:10px;}'
    + '.prog-wrap{position:absolute;bottom:8px;left:5%;width:90%;height:4px;background:rgba(255,255,255,.3);border-radius:2px;}'
    + '.prog{height:100%;width:60%;background:' + corProg + ';border-radius:2px;}'
    + '.arr{position:absolute;top:50%;transform:translateY(-50%);width:36px;height:36px;background:rgba(0,0,0,.5);border-radius:50%;display:flex;align-items:center;justify-content:center;}'
    + '.arr-l{left:8px;} .arr-r{right:8px;}'
    + '.arr svg{width:14px;height:14px;fill:white;}'
    + '</style></head><body>'
    + '<div class="hero">'
      + '<span class="badge">' + badge + '</span>'
      + '<div class="left">'
        + '<h1>' + titulo + '</h1>'
        + '<p>' + desc + '</p>'
        + '<div class="btns">'
          + '<button class="b1">' + btn1Txt + '</button>'
          + '<button class="b2">&#128712; ' + btn2Txt + '</button>'
        + '</div>'
      + '</div>'
      + '<div class="right">'
        + '<img src="' + img1 + '">'
        + '<div class="prog-wrap"><div class="prog"></div></div>'
        + '<div class="arr arr-l"><svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg></div>'
        + '<div class="arr arr-r"><svg viewBox="0 0 24 24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg></div>'
      + '</div>'
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