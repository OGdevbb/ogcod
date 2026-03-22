// =============================================================
//  OG! — banner-hero.js
// =============================================================

const COMPONENT = {
  title:       'Banner Hero Carrossel',
  description: 'Banner com carrossel de imagens de fundo, overlay gradiente, badge, titulo em 2 partes, subtitulo e botao de acao. Inserido apos o header.',
  tags:        ['Banner', 'Carrossel', 'Hero', 'CSS', 'JS', 'Gratis'],

  fields: [
    // Imagens (ate 5)
    { id: 'img1Url',    label: 'Imagem 1 — URL',      type: 'text', placeholder: 'https://...', default: 'https://i.imgur.com/P60MQG9.png', required: true  },
    { id: 'img1Posicao',label: 'Imagem 1 — Posicao',  type: 'text', placeholder: 'Ex: center 35%', default: 'center 35%', required: false },
    { id: 'img2Url',    label: 'Imagem 2 — URL',      type: 'text', placeholder: 'https://...', default: 'https://i.imgur.com/RLrglEr.png', required: false },
    { id: 'img2Posicao',label: 'Imagem 2 — Posicao',  type: 'text', placeholder: 'Ex: center 35%', default: 'center 35%', required: false },
    { id: 'img3Url',    label: 'Imagem 3 — URL',      type: 'text', placeholder: 'https://...', default: 'https://i.imgur.com/18KruTe.png', required: false },
    { id: 'img3Posicao',label: 'Imagem 3 — Posicao',  type: 'text', placeholder: 'Ex: center 35%', default: 'center 35%', required: false },
    { id: 'img4Url',    label: 'Imagem 4 — URL (opcional)', type: 'text', default: '', required: false },
    { id: 'img4Posicao',label: 'Imagem 4 — Posicao',  type: 'text', default: 'center center', required: false },
    { id: 'img5Url',    label: 'Imagem 5 — URL (opcional)', type: 'text', default: '', required: false },
    { id: 'img5Posicao',label: 'Imagem 5 — Posicao',  type: 'text', default: 'center center', required: false },

    // Texto
    { id: 'textoBadge',   label: 'Texto do Badge',         type: 'text', placeholder: 'Ex: OFERTA ESPECIAL', default: 'OFERTA ESPECIAL',              required: true  },
    { id: 'tituloParte1', label: 'Titulo — Parte 1',        type: 'text', placeholder: 'Ex: NOVAS AVENTURAS', default: 'NOVAS AVENTURAS',              required: true  },
    { id: 'tituloParte2', label: 'Titulo — Parte 2 (cor destaque)', type: 'text', placeholder: 'Ex: EM DESTAQUE', default: 'EM DESTAQUE',              required: false },
    { id: 'subtitulo',    label: 'Subtitulo',               type: 'text', placeholder: 'Texto descritivo...', default: 'Produtos digitais com entrega rapida, suporte e seguranca na compra.', required: false },
    { id: 'textoBotao',   label: 'Texto do Botao',          type: 'text', placeholder: 'Ex: Conferir',        default: 'Conferir',                     required: true  },
    { id: 'btnLink',      label: 'Link do Botao',           type: 'text', placeholder: 'Ex: / ou https://...', default: '/',                           required: true  },

    // Timing
    { id: 'intervalo', label: 'Intervalo entre slides (ms)', type: 'text', placeholder: 'Ex: 5000', default: '5000', required: true },

    // Dimensoes
    { id: 'alturaMin', label: 'Altura minima (padrao)',    type: 'text', placeholder: 'Ex: 360px', default: '360px', required: true  },
    { id: 'alturaMax', label: 'Altura (telas > 1400px)',   type: 'text', placeholder: 'Ex: 400px', default: '400px', required: false },
    { id: 'alturaMd',  label: 'Altura (telas < 900px)',    type: 'text', placeholder: 'Ex: 300px', default: '300px', required: false },
    { id: 'alturaSm',  label: 'Altura (telas < 600px)',    type: 'text', placeholder: 'Ex: 240px', default: '240px', required: false },
    { id: 'maxWidth',  label: 'Largura maxima do banner',  type: 'text', placeholder: 'Ex: 1280px', default: '1280px', required: true },
    { id: 'margin',    label: 'Margem do banner',          type: 'text', placeholder: 'Ex: 22px auto', default: '22px auto', required: true },
    { id: 'borderRadius',  label: 'Border Radius',         type: 'text', placeholder: 'Ex: 18px', default: '18px', required: true  },
    { id: 'paddingInner',  label: 'Padding do conteudo',   type: 'text', placeholder: 'Ex: 28px 32px', default: '28px 32px', required: false },

    // Overlay
    { id: 'gradienteOverlay', label: 'Gradiente do overlay',
      type: 'text',
      placeholder: 'Ex: linear-gradient(90deg, rgba(0,0,0,.82) 0%, rgba(0,0,0,.12) 100%)',
      default: 'linear-gradient(90deg,rgba(0,0,0,.82) 0%,rgba(0,0,0,.60) 35%,rgba(0,0,0,.30) 65%,rgba(0,0,0,.12) 100%)',
      required: false },

    // Cores
    { id: 'corFundo',      label: 'Cor de fundo do banner',  type: 'color', default: '#0b0b0b' },
    { id: 'corBorda',      label: 'Cor da borda (rgba)',      type: 'text',  placeholder: 'rgba(255,255,255,.10)', default: 'rgba(255,255,255,.10)', required: false },
    { id: 'corPrincipal',  label: 'Cor principal (botao/badge bg)', type: 'color', default: '#9ca3af' },
    { id: 'corClaro',      label: 'Cor clara (hover/destaque)',     type: 'color', default: '#d1d5db' },
    { id: 'corTitulo',     label: 'Cor do titulo',            type: 'color', default: '#ffffff' },
    { id: 'corSubtitulo',  label: 'Cor do subtitulo (rgba)',  type: 'text',  placeholder: 'rgba(255,255,255,.85)', default: 'rgba(255,255,255,.85)', required: false },
    { id: 'corBadgeTexto', label: 'Cor do texto do badge',   type: 'color', default: '#0b0b0b' },
    { id: 'corBtnTexto',   label: 'Cor do texto do botao',   type: 'color', default: '#0b0b0b' },
    { id: 'sombra',        label: 'Sombra do banner',         type: 'text',  placeholder: '0 18px 55px rgba(0,0,0,.45)', default: '0 18px 55px rgba(0,0,0,.45)', required: false },
    { id: 'sombraBotao',   label: 'Sombra do botao',          type: 'text',  placeholder: '0 0 18px rgba(156,163,175,.35)', default: '0 0 18px rgba(156,163,175,.35)', required: false },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = 'OnJvb3QgewogIC0tb2ctYmFubmVyLWNpbnphOiB7e2NvclByaW5jaXBhbH19OwogIC0tb2ctYmFubmVyLWNpbnphLWNsYXJvOiB7e2NvckNsYXJvfX07CiAgLS1vZy1iYW5uZXItYm9yZGVyOiB7e2NvckJvcmRhfX07Cn0KLm9nLWJhbm5lci13cmFwIHsKICB3aWR0aDogMTAwJTsKICBtYXgtd2lkdGg6IHt7bWF4V2lkdGh9fTsKICBtYXJnaW46IHt7bWFyZ2lufX07CiAgcGFkZGluZzogMCAxNnB4Owp9Ci5vZy1iYW5uZXIgewogIHBvc2l0aW9uOiByZWxhdGl2ZTsKICBib3JkZXItcmFkaXVzOiB7e2JvcmRlclJhZGl1c319OwogIG92ZXJmbG93OiBoaWRkZW47CiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tb2ctYmFubmVyLWJvcmRlcik7CiAgYmFja2dyb3VuZDoge3tjb3JGdW5kb319OwogIGJveC1zaGFkb3c6IHt7c29tYnJhfX07CiAgbWluLWhlaWdodDoge3thbHR1cmFNaW59fTsKfQpAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7IC5vZy1iYW5uZXIgeyBtaW4taGVpZ2h0OiB7e2FsdHVyYU1heH19OyB9IH0KQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSAgeyAub2ctYmFubmVyIHsgbWluLWhlaWdodDoge3thbHR1cmFNZH19OyB9IH0KQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSAgeyAub2ctYmFubmVyIHsgbWluLWhlaWdodDoge3thbHR1cmFTbX19OyB9IH0KLm9nLWJhbm5lci1zbGlkZXMgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAwOyB9Ci5vZy1iYW5uZXItc2xpZGUgewogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICBpbnNldDogMDsKICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOwogIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7CiAgb3BhY2l0eTogMDsKICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuMXMgZWFzZTsKICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpOwp9Ci5vZy1iYW5uZXItc2xpZGUub2ctYWN0aXZlIHsgb3BhY2l0eTogMTsgfQoub2ctYmFubmVyOjphZnRlciB7CiAgY29udGVudDogIiI7CiAgcG9zaXRpb246IGFic29sdXRlOwogIGluc2V0OiAwOwogIGJhY2tncm91bmQ6IHt7Z3JhZGllbnRlT3ZlcmxheX19OwogIHotaW5kZXg6IDE7Cn0KLm9nLWJhbm5lci1pbm5lciB7CiAgcG9zaXRpb246IGFic29sdXRlOwogIGxlZnQ6IDA7IHRvcDogMDsKICB6LWluZGV4OiAyOwogIHBhZGRpbmc6IHt7cGFkZGluZ0lubmVyfX07CiAgcG9pbnRlci1ldmVudHM6IG5vbmU7Cn0KQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7IC5vZy1iYW5uZXItaW5uZXIgeyBwYWRkaW5nOiAxOHB4OyB9IH0KLm9nLWJhbm5lci1sZWZ0IHsKICBtYXgtd2lkdGg6IDU2MHB4OwogIGRpc3BsYXk6IGZsZXg7CiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICBnYXA6IDEwcHg7CiAgcG9pbnRlci1ldmVudHM6IGF1dG87Cn0KLm9nLWJhbm5lci1iYWRnZSB7CiAgd2lkdGg6IGZpdC1jb250ZW50OwogIHBhZGRpbmc6IDhweCAxNHB4OwogIGJvcmRlci1yYWRpdXM6IDk5OXB4OwogIGZvbnQtd2VpZ2h0OiA4MDA7CiAgbGV0dGVyLXNwYWNpbmc6IC4wOGVtOwogIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7CiAgZm9udC1zaXplOiAxMnB4OwogIGNvbG9yOiB7e2NvckJhZGdlVGV4dG99fTsKICBiYWNrZ3JvdW5kOiB2YXIoLS1vZy1iYW5uZXItY2luemEtY2xhcm8pOwp9Ci5vZy1iYW5uZXItdGl0bGUgewogIG1hcmdpbjogMDsKICBmb250LXNpemU6IGNsYW1wKDI2cHgsIDN2dywgNDRweCk7CiAgZm9udC13ZWlnaHQ6IDkwMDsKICBsaW5lLWhlaWdodDogMS4wNTsKICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOwogIGNvbG9yOiB7e2NvclRpdHVsb319Owp9Ci5vZy1iYW5uZXItdGl0bGUgc3BhbiB7IGNvbG9yOiB2YXIoLS1vZy1iYW5uZXItY2luemEtY2xhcm8pOyB9Ci5vZy1iYW5uZXItc3ViIHsKICBtYXJnaW46IDA7CiAgY29sb3I6IHt7Y29yU3VidGl0dWxvfX07CiAgZm9udC1zaXplOiAxNC41cHg7CiAgbWF4LXdpZHRoOiA1MjBweDsKfQoub2ctYmFubmVyLWFjdGlvbnMgeyBtYXJnaW4tdG9wOiA2cHg7IH0KLm9nLWJhbm5lci1idG4gewogIGRpc3BsYXk6IGlubGluZS1mbGV4OwogIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgcGFkZGluZzogMTJweCAyMHB4OwogIGJvcmRlci1yYWRpdXM6IDE0cHg7CiAgZm9udC13ZWlnaHQ6IDkwMDsKICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOwogIGxldHRlci1zcGFjaW5nOiAuMDZlbTsKICBmb250LXNpemU6IDEyLjVweDsKICB0ZXh0LWRlY29yYXRpb246IG5vbmU7CiAgYmFja2dyb3VuZDogdmFyKC0tb2ctYmFubmVyLWNpbnphKTsKICBjb2xvcjoge3tjb3JCdG5UZXh0b319OwogIGJveC1zaGFkb3c6IHt7c29tYnJhQm90YW99fTsKICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjI1cyBlYXNlLCBib3gtc2hhZG93IC4yNXMgZWFzZSwgYmFja2dyb3VuZCAuMjVzIGVhc2U7Cn0KLm9nLWJhbm5lci1idG46aG92ZXIgewogIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KSBzY2FsZSgxLjA0KTsKICBiYWNrZ3JvdW5kOiB2YXIoLS1vZy1iYW5uZXItY2luemEtY2xhcm8pOwp9';
const BASE_JS_B64   = 'KGZ1bmN0aW9uICgpIHsKICB2YXIgT0dfV1JBUF9JRCA9ICdvZy1iYW5uZXItY2Fyb3VzZWwnOwogIHZhciBPR19JTUFHRVMgPSBbCiAgICAvKiBJRjppbWcxVXJsICoveyB1cmw6ICd7e2ltZzFVcmx9fScsIHBvc2l0aW9uOiAne3tpbWcxUG9zaWNhb319JyB9LC8qIEVORElGICovCiAgICAvKiBJRjppbWcyVXJsICoveyB1cmw6ICd7e2ltZzJVcmx9fScsIHBvc2l0aW9uOiAne3tpbWcyUG9zaWNhb319JyB9LC8qIEVORElGICovCiAgICAvKiBJRjppbWczVXJsICoveyB1cmw6ICd7e2ltZzNVcmx9fScsIHBvc2l0aW9uOiAne3tpbWczUG9zaWNhb319JyB9LC8qIEVORElGICovCiAgICAvKiBJRjppbWc0VXJsICoveyB1cmw6ICd7e2ltZzRVcmx9fScsIHBvc2l0aW9uOiAne3tpbWc0UG9zaWNhb319JyB9LC8qIEVORElGICovCiAgICAvKiBJRjppbWc1VXJsICoveyB1cmw6ICd7e2ltZzVVcmx9fScsIHBvc2l0aW9uOiAne3tpbWc1UG9zaWNhb319JyB9LC8qIEVORElGICovCiAgXS5maWx0ZXIoQm9vbGVhbik7CgogIHZhciBPR19CVE5fTElOSyA9ICd7e2J0bkxpbmt9fSc7CiAgdmFyIE9HX0lOVEVSVkFMID0ge3tpbnRlcnZhbG99fTsKCiAgZnVuY3Rpb24gb2dSZWFkeShmbikgewogICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykgewogICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4sIHsgb25jZTogdHJ1ZSB9KTsKICAgIH0gZWxzZSBmbigpOwogIH0KCiAgZnVuY3Rpb24gb2dGaW5kSGVhZGVyKCkgewogICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpCiAgICAgIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpCiAgICAgIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKQogICAgICB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJykKICAgICAgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpOwogIH0KCiAgZnVuY3Rpb24gb2dQcmVsb2FkKGltZ3MpIHsKICAgIGltZ3MuZm9yRWFjaChmdW5jdGlvbihvYmopIHsKICAgICAgdmFyIGkgPSBuZXcgSW1hZ2UoKTsKICAgICAgaS5zcmMgPSBvYmoudXJsOwogICAgfSk7CiAgfQoKICBmdW5jdGlvbiBvZ0luaXQoKSB7CiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoT0dfV1JBUF9JRCkpIHJldHVybjsKICAgIGlmICghT0dfSU1BR0VTLmxlbmd0aCkgcmV0dXJuOwoKICAgIG9nUHJlbG9hZChPR19JTUFHRVMpOwoKICAgIHZhciBvZ0NTUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7CiAgICBvZ0NTUy5pZCA9ICdvZy1iYW5uZXItc3R5bGUnOwogICAgb2dDU1MudGV4dENvbnRlbnQgPQogICAgICAnOnJvb3R7LS1vZy1iYW5uZXItY2luemE6e3tjb3JQcmluY2lwYWx9fTstLW9nLWJhbm5lci1jaW56YS1jbGFybzp7e2NvckNsYXJvfX07LS1vZy1iYW5uZXItYm9yZGVyOnt7Y29yQm9yZGF9fTt9JwogICAgICArICcub2ctYmFubmVyLXdyYXB7d2lkdGg6MTAwJTttYXgtd2lkdGg6e3ttYXhXaWR0aH19O21hcmdpbjp7e21hcmdpbn19O3BhZGRpbmc6MCAxNnB4O30nCiAgICAgICsgJy5vZy1iYW5uZXJ7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czp7e2JvcmRlclJhZGl1c319O292ZXJmbG93OmhpZGRlbjtib3JkZXI6MXB4IHNvbGlkIHZhcigtLW9nLWJhbm5lci1ib3JkZXIpO2JhY2tncm91bmQ6e3tjb3JGdW5kb319O2JveC1zaGFkb3c6e3tzb21icmF9fTttaW4taGVpZ2h0Ont7YWx0dXJhTWlufX07fScKICAgICAgKyAnQG1lZGlhKG1pbi13aWR0aDoxNDAwcHgpey5vZy1iYW5uZXJ7bWluLWhlaWdodDp7e2FsdHVyYU1heH19O319JwogICAgICArICdAbWVkaWEobWF4LXdpZHRoOjkwMHB4KXsub2ctYmFubmVye21pbi1oZWlnaHQ6e3thbHR1cmFNZH19O319JwogICAgICArICdAbWVkaWEobWF4LXdpZHRoOjYwMHB4KXsub2ctYmFubmVye21pbi1oZWlnaHQ6e3thbHR1cmFTbX19O319JwogICAgICArICcub2ctYmFubmVyLXNsaWRlc3twb3NpdGlvbjphYnNvbHV0ZTtpbnNldDowO30nCiAgICAgICsgJy5vZy1iYW5uZXItc2xpZGV7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQ6MDtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgMS4xcyBlYXNlO3RyYW5zZm9ybTpzY2FsZSgxLjAzKTt9JwogICAgICArICcub2ctYmFubmVyLXNsaWRlLm9nLWFjdGl2ZXtvcGFjaXR5OjE7fScKICAgICAgKyAnLm9nLWJhbm5lcjo6YWZ0ZXJ7Y29udGVudDoiIjtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldDowO2JhY2tncm91bmQ6e3tncmFkaWVudGVPdmVybGF5fX07ei1pbmRleDoxO30nCiAgICAgICsgJy5vZy1iYW5uZXItaW5uZXJ7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3otaW5kZXg6MjtwYWRkaW5nOnt7cGFkZGluZ0lubmVyfX07cG9pbnRlci1ldmVudHM6bm9uZTt9JwogICAgICArICdAbWVkaWEobWF4LXdpZHRoOjYwMHB4KXsub2ctYmFubmVyLWlubmVye3BhZGRpbmc6MThweDt9fScKICAgICAgKyAnLm9nLWJhbm5lci1sZWZ0e21heC13aWR0aDo1NjBweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDoxMHB4O3BvaW50ZXItZXZlbnRzOmF1dG87fScKICAgICAgKyAnLm9nLWJhbm5lci1iYWRnZXt3aWR0aDpmaXQtY29udGVudDtwYWRkaW5nOjhweCAxNHB4O2JvcmRlci1yYWRpdXM6OTk5cHg7Zm9udC13ZWlnaHQ6ODAwO2xldHRlci1zcGFjaW5nOi4wOGVtO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtmb250LXNpemU6MTJweDtjb2xvcjp7e2NvckJhZGdlVGV4dG99fTtiYWNrZ3JvdW5kOnZhcigtLW9nLWJhbm5lci1jaW56YS1jbGFybyk7fScKICAgICAgKyAnLm9nLWJhbm5lci10aXRsZXttYXJnaW46MDtmb250LXNpemU6Y2xhbXAoMjZweCwzdncsNDRweCk7Zm9udC13ZWlnaHQ6OTAwO2xpbmUtaGVpZ2h0OjEuMDU7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2NvbG9yOnt7Y29yVGl0dWxvfX07fScKICAgICAgKyAnLm9nLWJhbm5lci10aXRsZSBzcGFue2NvbG9yOnZhcigtLW9nLWJhbm5lci1jaW56YS1jbGFybyk7fScKICAgICAgKyAnLm9nLWJhbm5lci1zdWJ7bWFyZ2luOjA7Y29sb3I6e3tjb3JTdWJ0aXR1bG99fTtmb250LXNpemU6MTQuNXB4O21heC13aWR0aDo1MjBweDt9JwogICAgICArICcub2ctYmFubmVyLWFjdGlvbnN7bWFyZ2luLXRvcDo2cHg7fScKICAgICAgKyAnLm9nLWJhbm5lci1idG57ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOjEycHggMjBweDtib3JkZXItcmFkaXVzOjE0cHg7Zm9udC13ZWlnaHQ6OTAwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzouMDZlbTtmb250LXNpemU6MTIuNXB4O3RleHQtZGVjb3JhdGlvbjpub25lO2JhY2tncm91bmQ6dmFyKC0tb2ctYmFubmVyLWNpbnphKTtjb2xvcjp7e2NvckJ0blRleHRvfX07Ym94LXNoYWRvdzp7e3NvbWJyYUJvdGFvfX07dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjI1cyBlYXNlLGJveC1zaGFkb3cgLjI1cyBlYXNlLGJhY2tncm91bmQgLjI1cyBlYXNlO30nCiAgICAgICsgJy5vZy1iYW5uZXItYnRuOmhvdmVye3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xcHgpIHNjYWxlKDEuMDQpO2JhY2tncm91bmQ6dmFyKC0tb2ctYmFubmVyLWNpbnphLWNsYXJvKTt9JzsKICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQob2dDU1MpOwoKICAgIHZhciB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgICB3cmFwLmNsYXNzTmFtZSA9ICdvZy1iYW5uZXItd3JhcCc7CiAgICB3cmFwLmlkID0gT0dfV1JBUF9JRDsKCiAgICB2YXIgc2xpZGVzSFRNTCA9IE9HX0lNQUdFUy5tYXAoZnVuY3Rpb24oaW1nLCBpKSB7CiAgICAgIHJldHVybiAnPGRpdiBjbGFzcz0ib2ctYmFubmVyLXNsaWRlJyArIChpID09PSAwID8gJyBvZy1hY3RpdmUnIDogJycpICsgJyInCiAgICAgICAgKyAnIHN0eWxlPSJiYWNrZ3JvdW5kLWltYWdlOnVybChcJycgKyBpbWcudXJsICsgJ1wnKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOicgKyBpbWcucG9zaXRpb24gKyAnOyI+PC9kaXY+JzsKICAgIH0pLmpvaW4oJycpOwoKICAgIHdyYXAuaW5uZXJIVE1MID0KICAgICAgJzxkaXYgY2xhc3M9Im9nLWJhbm5lciI+JwogICAgICAgICsgJzxkaXYgY2xhc3M9Im9nLWJhbm5lci1zbGlkZXMiPicgKyBzbGlkZXNIVE1MICsgJzwvZGl2PicKICAgICAgICArICc8ZGl2IGNsYXNzPSJvZy1iYW5uZXItaW5uZXIiPicKICAgICAgICAgICsgJzxkaXYgY2xhc3M9Im9nLWJhbm5lci1sZWZ0Ij4nCiAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9Im9nLWJhbm5lci1iYWRnZSI+e3t0ZXh0b0JhZGdlfX08L2Rpdj4nCiAgICAgICAgICAgICsgJzxoMiBjbGFzcz0ib2ctYmFubmVyLXRpdGxlIj57e3RpdHVsb1BhcnRlMX19IDxzcGFuPnt7dGl0dWxvUGFydGUyfX08L3NwYW4+PC9oMj4nCiAgICAgICAgICAgICsgJzxwIGNsYXNzPSJvZy1iYW5uZXItc3ViIj57e3N1YnRpdHVsb319PC9wPicKICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz0ib2ctYmFubmVyLWFjdGlvbnMiPicKICAgICAgICAgICAgICArICc8YSBocmVmPSInICsgT0dfQlROX0xJTksgKyAnIiBjbGFzcz0ib2ctYmFubmVyLWJ0biI+e3t0ZXh0b0JvdGFvfX08L2E+JwogICAgICAgICAgICArICc8L2Rpdj4nCiAgICAgICAgICArICc8L2Rpdj4nCiAgICAgICAgKyAnPC9kaXY+JwogICAgICArICc8L2Rpdj4nOwoKICAgIHZhciBoZWFkZXIgPSBvZ0ZpbmRIZWFkZXIoKTsKICAgIGlmIChoZWFkZXIgJiYgaGVhZGVyLnBhcmVudE5vZGUpIHsKICAgICAgaGVhZGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXAsIGhlYWRlci5uZXh0U2libGluZyk7CiAgICB9IGVsc2UgewogICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdyYXApOwogICAgfQoKICAgIHZhciBzbGlkZXMgPSB3cmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5vZy1iYW5uZXItc2xpZGUnKTsKICAgIHZhciBvZ0luZGV4ID0gMDsKICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkgewogICAgICBzbGlkZXNbb2dJbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnb2ctYWN0aXZlJyk7CiAgICAgIG9nSW5kZXggPSAob2dJbmRleCArIDEpICUgc2xpZGVzLmxlbmd0aDsKICAgICAgc2xpZGVzW29nSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ29nLWFjdGl2ZScpOwogICAgfSwgT0dfSU5URVJWQUwpOwogIH0KCiAgb2dSZWFkeShvZ0luaXQpOwp9KSgpOw==';

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

  var img1      = v.img1Url     || '';
  var img1pos   = v.img1Posicao || 'center 35%';
  var corFundo  = v.corFundo    || '#0b0b0b';
  var corBorda  = v.corBorda    || 'rgba(255,255,255,.10)';
  var corPrinc  = v.corPrincipal|| '#9ca3af';
  var corClaro  = v.corClaro    || '#d1d5db';
  var corTit    = v.corTitulo   || '#ffffff';
  var corSub    = v.corSubtitulo|| 'rgba(255,255,255,.85)';
  var corBadgeTx= v.corBadgeTexto || '#0b0b0b';
  var corBtnTx  = v.corBtnTexto || '#0b0b0b';
  var overlay   = v.gradienteOverlay || 'linear-gradient(90deg,rgba(0,0,0,.82) 0%,rgba(0,0,0,.12) 100%)';
  var badge     = v.textoBadge  || 'OFERTA ESPECIAL';
  var tit1      = v.tituloParte1|| 'NOVAS AVENTURAS';
  var tit2      = v.tituloParte2|| 'EM DESTAQUE';
  var sub       = v.subtitulo   || 'Produtos digitais com entrega rapida e seguranca.';
  var btnTxt    = v.textoBotao  || 'Conferir';
  var radius    = v.borderRadius|| '18px';
  var altura    = v.alturaMin   || '360px';
  var padding   = v.paddingInner|| '28px 32px';
  var sombra    = v.sombra      || '0 18px 55px rgba(0,0,0,.45)';
  var sombraBtn = v.sombraBotao || '0 0 18px rgba(156,163,175,.35)';

  var bgStyle = img1
    ? 'background-image:url(' + JSON.stringify(img1) + ');background-position:' + img1pos + ';background-size:cover;'
    : 'background:' + corFundo + ';';

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>*{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,sans-serif;} body{background:#111;padding:16px;}'
    + '.banner{position:relative;border-radius:' + radius + ';overflow:hidden;border:1px solid ' + corBorda + ';background:' + corFundo + ';box-shadow:' + sombra + ';min-height:' + altura + ';}'
    + '.bg{position:absolute;inset:0;' + bgStyle + 'background-size:cover;}'
    + '.ov{position:absolute;inset:0;background:' + overlay + ';z-index:1;}'
    + '.inner{position:absolute;left:0;top:0;z-index:2;padding:' + padding + ';display:flex;flex-direction:column;gap:10px;max-width:560px;}'
    + '.badge{width:fit-content;padding:7px 13px;border-radius:999px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;font-size:11px;color:' + corBadgeTx + ';background:' + corClaro + ';}'
    + '.title{font-size:clamp(22px,3vw,40px);font-weight:900;line-height:1.05;text-transform:uppercase;color:' + corTit + ';}'
    + '.title span{color:' + corClaro + ';}'
    + '.sub{color:' + corSub + ';font-size:14px;max-width:500px;}'
    + '.btn{display:inline-flex;padding:11px 18px;border-radius:12px;font-weight:900;text-transform:uppercase;letter-spacing:.06em;font-size:12px;text-decoration:none;background:' + corPrinc + ';color:' + corBtnTx + ';box-shadow:' + sombraBtn + ';}'
    + '</style></head><body>'
    + '<div class="banner">'
      + '<div class="bg"></div>'
      + '<div class="ov"></div>'
      + '<div class="inner">'
        + '<div class="badge">' + badge + '</div>'
        + '<h2 class="title">' + tit1 + ' <span>' + tit2 + '</span></h2>'
        + '<p class="sub">' + sub + '</p>'
        + '<a class="btn">' + btnTxt + '</a>'
      + '</div>'
    + '</div>'
    + '</body></html>';

  var old = box.querySelector('iframe');
  if (old) old.remove();
  var iframe = document.createElement('iframe');
  iframe.style.cssText = 'width:100%;height:460px;border:none;display:block;border-radius:14px;';
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