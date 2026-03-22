// =============================================================
//  OG! — hero-section.js
// =============================================================

const COMPONENT = {
    title: 'Hero Section (Menu Principal v2)',
    description: 'Seção hero completa com título animado, subtítulo, descrição, 2 botões, stats, 4 cards com FontAwesome e ícones flutuantes. Aparece apenas na rota /.',
    tags: ['Hero', 'Home', 'Cards', 'FontAwesome', 'Animação', 'JS', 'CSS', 'Grátis'],

    fields: [
        // Textos principais
        { id: 'nomeLoja', label: 'Nome da Loja', type: 'text', placeholder: 'Ex: Nexus Store', default: 'Nexus Store', required: true },
        { id: 'subtitulo', label: 'Subtítulo', type: 'text', placeholder: 'Ex: Sua loja digital!', default: 'Sua loja digital de confiança!', required: false },
        { id: 'descricao', label: 'Descrição', type: 'text', placeholder: 'Ex: Preços acessíveis...', default: 'Preços acessíveis, entrega rápida e total segurança! Explore uma seleção incrível de produtos!', required: false },

        // Seletor de inserção
        { id: 'seletorInsercao', label: 'Seletor CSS de inserção (após este elemento)', type: 'text', placeholder: 'Ex: .sc-d92c5a35-0', default: '.sc-d92c5a35-0', required: false },

        // Botões
        { id: 'btn1Texto', label: 'Botão 1 — Texto', type: 'text', placeholder: 'Ex: Suporte', default: 'Suporte', required: false },
        { id: 'btn1Link', label: 'Botão 1 — Link', type: 'text', placeholder: 'https://...', default: 'https://linkdasualoja.com', required: false },
        { id: 'btn1Icone', label: 'Botão 1 — Classe FA', type: 'text', placeholder: 'Ex: fas fa-message', default: 'fas fa-message', required: false },
        { id: 'btn2Texto', label: 'Botão 2 — Texto', type: 'text', placeholder: 'Ex: Comunidade', default: 'Comunidade', required: false },
        { id: 'btn2Link', label: 'Botão 2 — Link', type: 'text', placeholder: 'https://...', default: 'https://linkdasualoja.com', required: false },
        { id: 'btn2Icone', label: 'Botão 2 — Classe FA', type: 'text', placeholder: 'Ex: fa-solid fa-people-group', default: 'fa-solid fa-people-group', required: false },

        // Stats
        { id: 'stat1Numero', label: 'Stat 1 — Número', type: 'text', placeholder: 'Ex: +5000', default: '+5000', required: false },
        { id: 'stat1Label', label: 'Stat 1 — Label', type: 'text', placeholder: 'Ex: Pedidos', default: 'Pedidos Entregues', required: false },
        { id: 'stat2Numero', label: 'Stat 2 — Número', type: 'text', placeholder: 'Ex: 98,6%', default: '98,6%', required: false },
        { id: 'stat2Label', label: 'Stat 2 — Label', type: 'text', placeholder: 'Ex: Satisfação', default: 'Satisfação', required: false },
        { id: 'stat3Numero', label: 'Stat 3 — Número', type: 'text', placeholder: 'Ex: 24/7', default: 'Suporte', required: false },
        { id: 'stat3Label', label: 'Stat 3 — Label', type: 'text', placeholder: 'Ex: Suporte Rápido', default: 'Rápido e Eficiente', required: false },

        // Cards (4 no total)
        { id: 'card1Titulo', label: 'Card 1 — Título', type: 'text', placeholder: 'Ex: Ver Produtos', default: 'Ver Produtos', required: false },
        { id: 'card1Desc', label: 'Card 1 — Descrição', type: 'text', placeholder: 'Ex: Explore...', default: 'Explore nosso catálogo.', required: false },
        { id: 'card1Link', label: 'Card 1 — Link', type: 'text', placeholder: 'Ex: #products-section', default: '#products-section', required: false },
        { id: 'card1Icone', label: 'Card 1 — Classe FA', type: 'text', placeholder: 'Ex: fa-solid fa-box-open', default: 'fa-solid fa-box-open', required: false },

        { id: 'card2Titulo', label: 'Card 2 — Título', type: 'text', placeholder: 'Ex: Obter Suporte', default: 'Obter Suporte', required: false },
        { id: 'card2Desc', label: 'Card 2 — Descrição', type: 'text', placeholder: 'Ex: Fale conosco!', default: 'Fale conosco!', required: false },
        { id: 'card2Link', label: 'Card 2 — Link', type: 'text', placeholder: 'https://...', default: 'https://linkdasualoja.com', required: false },
        { id: 'card2Icone', label: 'Card 2 — Classe FA', type: 'text', placeholder: 'Ex: fa-solid fa-headset', default: 'fa-solid fa-headset', required: false },

        { id: 'card3Titulo', label: 'Card 3 — Título', type: 'text', placeholder: 'Ex: Meus Pedidos', default: 'Meus Pedidos', required: false },
        { id: 'card3Desc', label: 'Card 3 — Descrição', type: 'text', placeholder: 'Ex: Acompanhe...', default: 'Acompanhe seus pedidos.', required: false },
        { id: 'card3Link', label: 'Card 3 — Link', type: 'text', placeholder: 'Ex: /account/...', default: '/account/my_purchases', required: false },
        { id: 'card3Icone', label: 'Card 3 — Classe FA', type: 'text', placeholder: 'Ex: fa-solid fa-cart-shopping', default: 'fa-solid fa-cart-shopping', required: false },

        { id: 'card4Titulo', label: 'Card 4 — Título', type: 'text', placeholder: 'Ex: Seja Afiliado!', default: 'Seja um Afiliado!', required: false },
        { id: 'card4Desc', label: 'Card 4 — Descrição', type: 'text', placeholder: 'Ex: Ganhe comissões!', default: 'Ganhe comissões por cada venda!', required: false },
        { id: 'card4Link', label: 'Card 4 — Link', type: 'text', placeholder: 'Ex: /account/...', default: '/account/affiliate', required: false },
        { id: 'card4Icone', label: 'Card 4 — Classe FA', type: 'text', placeholder: 'Ex: fa-solid fa-handshake', default: 'fa-solid fa-handshake', required: false },

        // Cores
        { id: 'corTitulo', label: 'Cor do Título (gradiente)', type: 'color', default: '#6f00ff' },
        { id: 'corSubtitulo', label: 'Cor do Subtítulo', type: 'color', default: '#bab0c5' },
        { id: 'corDescricao', label: 'Cor da Descrição', type: 'color', default: '#9b90ae' },
        { id: 'corBtnPrimario1', label: 'Cor Botão 1 (início)', type: 'color', default: '#5900ff' },
        { id: 'corBtnPrimario2', label: 'Cor Botão 1 (fim)', type: 'color', default: '#9421f3' },
        { id: 'corBtnSecundario', label: 'Cor Botão 2', type: 'color', default: '#8400ff' },
        { id: 'corCardBorda', label: 'Cor da Borda dos Cards', type: 'color', default: '#9d00ff' },
        { id: 'corNeonBorda', label: 'Cor Neon (cards 1 e 4)', type: 'color', default: '#6405f8' },
        { id: 'corIconeCard', label: 'Cor dos Ícones dos Cards', type: 'color', default: '#8400ff' },
        { id: 'corDescricaoCard', label: 'Cor das Desc. dos Cards', type: 'color', default: '#c2b0c5' },
        { id: 'corStatNumero', label: 'Cor dos Números das Stats', type: 'color', default: '#7300ff' },
        { id: 'corStatLabel', label: 'Cor dos Labels das Stats', type: 'color', default: '#9e90ae' },
        { id: 'corStatHover', label: 'Cor hover das Stats (rgba)', type: 'text', placeholder: 'Ex: rgba(145,0,253,0.1)', default: 'rgba(145,0,253,0.1)', required: false },
        { id: 'corFloating', label: 'Cor dos ícones flutuantes (rgba)', type: 'text', placeholder: 'Ex: rgba(145,0,253,0.1)', default: 'rgba(145,0,253,0.1)', required: false },
    ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64 = 'Lmhlcm97bWluLWhlaWdodDoxMDB2aDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzoycmVtO3RleHQtYWxpZ246bGVmdDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCk7Y29sb3I6d2hpdGU7fS5oZXJvLWNvbnRhaW5lcnttYXgtd2lkdGg6MTIwMHB4O3dpZHRoOjEwMCU7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO2dhcDo0cmVtO2FsaWduLWl0ZW1zOmNlbnRlcjt9Lmhlcm8tY29udGVudHthbmltYXRpb246c2xpZGVJbkxlZnQgMXMgZWFzZS1vdXQ7fS5oZXJvLXRpdGxle2ZvbnQtZmFtaWx5OlZlcmRhbmEsc2Fucy1zZXJpZjtmb250LXNpemU6My41cmVtO2ZvbnQtd2VpZ2h0OjcwMDttYXJnaW4tYm90dG9tOjFyZW07YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoNWRlZyx7e2NvclRpdHVsb319LHt7Y29yVGl0dWxvfX0se3tjb3JUaXR1bG99fSk7LXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6dGV4dDstd2Via2l0LXRleHQtZmlsbC1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLWNsaXA6dGV4dDthbmltYXRpb246Z2xvdyAycyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjphbGwgMC4zcyBlYXNlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO30uaGVyby10aXRsZTpob3Zlcnt0cmFuc2Zvcm06c2NhbGUoMS4wNSk7fS5oZXJvLXN1YnRpdGxle2ZvbnQtc2l6ZToxLjNyZW07Y29sb3I6e3tjb3JTdWJ0aXR1bG99fTttYXJnaW4tYm90dG9tOjJyZW07bGluZS1oZWlnaHQ6MS42O2FuaW1hdGlvbjpmYWRlSW5VcCAxcyBlYXNlLW91dCAwLjNzIGJvdGg7fS5oZXJvLWRlc2NyaXB0aW9ue2ZvbnQtc2l6ZToxLjFyZW07Y29sb3I6e3tjb3JEZXNjcmljYW99fTttYXJnaW4tYm90dG9tOjNyZW07bGluZS1oZWlnaHQ6MS43O2FuaW1hdGlvbjpmYWRlSW5VcCAxcyBlYXNlLW91dCAwLjZzIGJvdGg7fS5oZXJvLWJ1dHRvbnN7ZGlzcGxheTpmbGV4O2dhcDoxLjVyZW07bWFyZ2luLWJvdHRvbTozcmVtO2FuaW1hdGlvbjpmYWRlSW5VcCAxcyBlYXNlLW91dCAwLjlzIGJvdGg7fS5idG57cGFkZGluZzoxcmVtIDJyZW07Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czo4cHg7Zm9udC1zaXplOjEuMXJlbTtmb250LXdlaWdodDo2MDA7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjphbGwgMC4zcyBlYXNlO3RleHQtZGVjb3JhdGlvbjpub25lO2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxcmVtO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjt9LmJ0bi1wcmltYXJ5e2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLHt7Y29yQnRuUHJpbWFyaW8xfX0se3tjb3JCdG5QcmltYXJpbzJ9fSk7Y29sb3I6d2hpdGU7Ym94LXNoYWRvdzowIDRweCAxNXB4IHt7Y29yQnRuUHJpbWFyaW8xfX01MDt9LmJ0bi1wcmltYXJ5OmhvdmVye3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0ycHgpIHNjYWxlKDEuMDUpO2JveC1zaGFkb3c6MCA4cHggMjVweCB7e2NvckJ0blByaW1hcmlvMX19NjU7fS5idG4tc2Vjb25kYXJ5e2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6e3tjb3JCdG5TZWN1bmRhcmlvfX07Ym9yZGVyOjJweCBzb2xpZCB7e2NvckJ0blNlY3VuZGFyaW99fTtib3gtc2hhZG93OjAgMCAyMHB4IHt7Y29yQnRuU2VjdW5kYXJpb319MzA7fS5idG4tc2Vjb25kYXJ5OmhvdmVye2JhY2tncm91bmQ6e3tjb3JCdG5TZWN1bmRhcmlvfX0xNTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMnB4KSBzY2FsZSgxLjA1KTt9Lmhlcm8tdmlzdWFse2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjthbmltYXRpb246c2xpZGVJblJpZ2h0IDFzIGVhc2Utb3V0O30uY2FyZHMtY29udGFpbmVye2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsMWZyKTtnYXA6MS41cmVtO21heC13aWR0aDo1MDBweDt9LmZlYXR1cmUtY2FyZHtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7YmFja2Ryb3AtZmlsdGVyOmJsdXIoMTBweCk7Ym9yZGVyLXJhZGl1czoxNnB4O3BhZGRpbmc6MnJlbTt0ZXh0LWFsaWduOmNlbnRlcjt0cmFuc2l0aW9uOmFsbCAwLjRzIGVhc2U7Ym9yZGVyOjFweCBzb2xpZCB7e2NvckNhcmRCb3JkYX19O3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjtjdXJzb3I6cG9pbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjppbmhlcml0O2hlaWdodDoyODBweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7fS5mZWF0dXJlLWNhcmQubmVvbntib3JkZXI6MXB4IHNvbGlkIHt7Y29yTmVvbkJvcmRhfX07Ym94LXNoYWRvdzowIDAgMjBweCB7e2Nvck5lb25Cb3JkYX19MjAsaW5zZXQgMCAwIDIwcHgge3tjb3JOZW9uQm9yZGF9fTA4O30uZmVhdHVyZS1jYXJkLm5lb246OmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6LTEwMCU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZyx0cmFuc3BhcmVudCx7e2Nvck5lb25Cb3JkYX19MTUsdHJhbnNwYXJlbnQpO3RyYW5zaXRpb246bGVmdCAwLjhzIGVhc2U7fS5mZWF0dXJlLWNhcmQubmVvbjpob3Zlcjo6YmVmb3Jle2xlZnQ6MTAwJTt9LmZlYXR1cmUtY2FyZDpob3Zlcnt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoMS4wMik7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO30uY2FyZC1pY29ue2ZvbnQtc2l6ZToyLjVyZW07bWFyZ2luLWJvdHRvbToxcmVtO2NvbG9yOnt7Y29ySWNvbmVDYXJkfX07YW5pbWF0aW9uOmZsb2F0IDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO30uY2FyZC10aXRsZXtmb250LXNpemU6MS4ycmVtO2ZvbnQtd2VpZ2h0OjYwMDttYXJnaW4tYm90dG9tOjAuNXJlbTtjb2xvcjojZmZmZmZmO30uY2FyZC1kZXNjcmlwdGlvbntmb250LXNpemU6MC45cmVtO2NvbG9yOnt7Y29yRGVzY3JpY2FvQ2FyZH19O2xpbmUtaGVpZ2h0OjEuNDt9Lmhlcm8tc3RhdHN7ZGlzcGxheTpmbGV4O2dhcDozcmVtO2FuaW1hdGlvbjpmYWRlSW5VcCAxcyBlYXNlLW91dCAxLjJzIGJvdGg7fS5zdGF0LWl0ZW17dGV4dC1hbGlnbjpjZW50ZXI7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjphbGwgMC4zcyBlYXNlO3BhZGRpbmc6MC41cmVtO2JvcmRlci1yYWRpdXM6OHB4O30uc3RhdC1pdGVtOmhvdmVye3RyYW5zZm9ybTpzY2FsZSgxLjEpO2JhY2tncm91bmQ6e3tjb3JTdGF0SG92ZXJ9fTt9LnN0YXQtbnVtYmVye2ZvbnQtc2l6ZToycmVtO2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjp7e2NvclN0YXROdW1lcm99fTtkaXNwbGF5OmJsb2NrO30uc3RhdC1sYWJlbHtmb250LXNpemU6MC45cmVtO2NvbG9yOnt7Y29yU3RhdExhYmVsfX07dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOjFweDt9LmZsb2F0aW5nLWVsZW1lbnRze3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZTtvdmVyZmxvdzpoaWRkZW47fS5mbG9hdGluZy1pY29ue3Bvc2l0aW9uOmFic29sdXRlO2NvbG9yOnt7Y29yRmxvYXRpbmd9fTthbmltYXRpb246ZmxvYXRSYW5kb20gOHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7fS5mbG9hdGluZy1pY29uOm50aC1jaGlsZCgxKXt0b3A6MjAlO2xlZnQ6MTAlO30uZmxvYXRpbmctaWNvbjpudGgtY2hpbGQoMil7dG9wOjYwJTtyaWdodDoxNSU7YW5pbWF0aW9uLWRlbGF5OjJzO30uZmxvYXRpbmctaWNvbjpudGgtY2hpbGQoMyl7Ym90dG9tOjMwJTtsZWZ0OjIwJTthbmltYXRpb24tZGVsYXk6NHM7fS5mbG9hdGluZy1pY29uOm50aC1jaGlsZCg0KXt0b3A6NDAlO3JpZ2h0OjMwJTthbmltYXRpb24tZGVsYXk6NnM7fUBrZXlmcmFtZXMgc2xpZGVJbkxlZnR7ZnJvbXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwcHgpfXRve29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKX19QGtleWZyYW1lcyBzbGlkZUluUmlnaHR7ZnJvbXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoNTBweCl9dG97b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfX1Aa2V5ZnJhbWVzIGZhZGVJblVwe2Zyb217b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDMwcHgpfXRve29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKX19QGtleWZyYW1lcyBnbG93e2Zyb217dGV4dC1zaGFkb3c6MCAwIDIwcHgge3tjb3JUaXR1bG99fTUwfXRve3RleHQtc2hhZG93OjAgMCAzMHB4IHt7Y29yVGl0dWxvfX04MH19QGtleWZyYW1lcyBmbG9hdHswJSwxMDAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApfTUwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCl9fUBrZXlmcmFtZXMgZmxvYXRSYW5kb217MCUsMTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGUoMCl9MjUle3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMHB4KSByb3RhdGUoNWRlZyl9NTAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGUoLTVkZWcpfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTVweCkgcm90YXRlKDNkZWcpfX1AbWVkaWEobWF4LXdpZHRoOjc2OHB4KXsuaGVyby1jb250YWluZXJ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtnYXA6M3JlbTt0ZXh0LWFsaWduOmNlbnRlcjt9Lmhlcm8tdGl0bGV7Zm9udC1zaXplOjIuNXJlbTt9Lmhlcm8tYnV0dG9uc3tmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO30uY2FyZHMtY29udGFpbmVye2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7bWF4LXdpZHRoOjMwMHB4O30uaGVyby1zdGF0c3tqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2dhcDoycmVtO319';
const BASE_JS_B64 = 'KGZ1bmN0aW9uICgpIHsKICAndXNlIHN0cmljdCc7CgogIHZhciBibG9ja2VkUGF0aHMgPSBbJy9wcm9kdWN0JywnL3BheW1lbnQnLCcvY29va2llcycsJy90ZXJtcycsJy9jYXRlZ29yeScsJy9jYXJ0JywnL2xvZ2luJywnL2FjY291bnQvYWZmaWxpYXRlJywnL2FjY291bnQvbXlfcHVyY2hhc2VzJ107CgogIGZ1bmN0aW9uIHJlbW92ZUhlcm8oKSB7CiAgICB2YXIgaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJyk7CiAgICBpZiAoaGVybykgaGVyby5yZW1vdmUoKTsKICB9CgogIGZ1bmN0aW9uIHdhaXRGb3JFbGVtZW50KHNlbGVjdG9yLCBjYWxsYmFjaywgaW50ZXJ2YWwsIHRpbWVvdXQpIHsKICAgIGludGVydmFsID0gaW50ZXJ2YWwgfHwgMTAwOyB0aW1lb3V0ID0gdGltZW91dCB8fCAxMDAwMDsKICAgIHZhciBzdGFydCA9IERhdGUubm93KCk7CiAgICBmdW5jdGlvbiBjaGVjaygpIHsKICAgICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7CiAgICAgIGlmIChlbCkgeyBjYWxsYmFjayhlbCk7IH0KICAgICAgZWxzZSBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0IDwgdGltZW91dCkgeyBzZXRUaW1lb3V0KGNoZWNrLCBpbnRlcnZhbCk7IH0KICAgIH0KICAgIGNoZWNrKCk7CiAgfQoKICBmdW5jdGlvbiBtayh0YWcsIGNsYXNzZXMsIHRleHQpIHsKICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTsKICAgIChjbGFzc2VzIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uKGMpeyBlbC5jbGFzc0xpc3QuYWRkKGMpOyB9KTsKICAgIGlmICh0ZXh0KSBlbC50ZXh0Q29udGVudCA9IHRleHQ7CiAgICByZXR1cm4gZWw7CiAgfQoKICBmdW5jdGlvbiBpbmplY3RDU1MoKSB7CiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29nLWhlcm8tY3NzJykpIHJldHVybjsKICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7CiAgICBzdHlsZS5pZCA9ICdvZy1oZXJvLWNzcyc7CiAgICBzdHlsZS50ZXh0Q29udGVudCA9ICd7e0NTU19QTEFDRUhPTERFUn19JzsKICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpOwogIH0KCiAgZnVuY3Rpb24gY3JlYXRlSGVybygpIHsKICAgIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lOwogICAgaWYgKGJsb2NrZWRQYXRocy5zb21lKGZ1bmN0aW9uKHApeyByZXR1cm4gcGF0aG5hbWUuc3RhcnRzV2l0aChwKTsgfSkpIHsgcmVtb3ZlSGVybygpOyByZXR1cm47IH0KICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpKSByZXR1cm47CgogICAgaW5qZWN0Q1NTKCk7CgogICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW2hyZWYqPSJmb250LWF3ZXNvbWUiXScpKSB7CiAgICAgIHZhciBmYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsKICAgICAgZmEucmVsID0gJ3N0eWxlc2hlZXQnOwogICAgICBmYS5ocmVmID0gJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS82LjQuMC9jc3MvYWxsLm1pbi5jc3MnOwogICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZhKTsKICAgIH0KCiAgICB2YXIgaGVybyA9IG1rKCdzZWN0aW9uJywgWydoZXJvJ10pOwogICAgdmFyIGZsb2F0aW5nID0gbWsoJ2RpdicsIFsnZmxvYXRpbmctZWxlbWVudHMnXSk7CiAgICBbJ2ZhcyBmYS1jb2RlJywnZmFzIGZhLXJvY2tldCcsJ2ZhcyBmYS1saWdodGJ1bGInLCdmYXMgZmEtc3RhciddLmZvckVhY2goZnVuY3Rpb24oaWNvbiwgaWR4KSB7CiAgICAgIHZhciBpID0gbWsoJ2knLCBbJ2Zsb2F0aW5nLWljb24nXS5jb25jYXQoaWNvbi5zcGxpdCgnICcpKSk7CiAgICAgIGkuc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSAoaWR4ICogMikgKyAncyc7CiAgICAgIGZsb2F0aW5nLmFwcGVuZENoaWxkKGkpOwogICAgfSk7CiAgICBoZXJvLmFwcGVuZENoaWxkKGZsb2F0aW5nKTsKCiAgICB2YXIgY29udGFpbmVyID0gbWsoJ2RpdicsIFsnaGVyby1jb250YWluZXInXSk7CiAgICB2YXIgY29udGVudCAgID0gbWsoJ2RpdicsIFsnaGVyby1jb250ZW50J10pOwoKICAgIHZhciB0aXRsZSA9IG1rKCdoMScsIFsnaGVyby10aXRsZSddKTsKICAgIHRpdGxlLmFwcGVuZENoaWxkKG1rKCdpJywgWydmYXMnLCdmYS1ib2x0J10pKTsKICAgIHRpdGxlLmFwcGVuZCgne3tub21lTG9qYX19Jyk7CiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTsKICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWsoJ3AnLCBbJ2hlcm8tc3VidGl0bGUnXSwgICAgJ3t7c3VidGl0dWxvfX0nKSk7CiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1rKCdwJywgWydoZXJvLWRlc2NyaXB0aW9uJ10sICd7e2Rlc2NyaWNhb319JykpOwoKICAgIHZhciBidXR0b25zID0gbWsoJ2RpdicsIFsnaGVyby1idXR0b25zJ10pOwogICAgLyogSUY6YnRuMUxpbmsgKi8KICAgIHZhciBiMSA9IG1rKCdhJywgWydidG4nLCdidG4tcHJpbWFyeSddKTsKICAgIGIxLmhyZWYgPSAne3tidG4xTGlua319JzsKICAgIGIxLmlubmVySFRNTCA9ICc8aSBjbGFzcz0ie3tidG4xSWNvbmV9fSI+PC9pPiB7e2J0bjFUZXh0b319JzsKICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoYjEpOwogICAgLyogRU5ESUYgKi8KICAgIC8qIElGOmJ0bjJMaW5rICovCiAgICB2YXIgYjIgPSBtaygnYScsIFsnYnRuJywnYnRuLXNlY29uZGFyeSddKTsKICAgIGIyLmhyZWYgPSAne3tidG4yTGlua319JzsKICAgIGIyLmlubmVySFRNTCA9ICc8aSBjbGFzcz0ie3tidG4ySWNvbmV9fSI+PC9pPiB7e2J0bjJUZXh0b319JzsKICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoYjIpOwogICAgLyogRU5ESUYgKi8KICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7CgogICAgdmFyIHN0YXRzRGF0YSA9IFsKICAgICAgLyogSUY6c3RhdDFOdW1lcm8gKi97IG51bWJlcjogJ3t7c3RhdDFOdW1lcm99fScsIGxhYmVsOiAne3tzdGF0MUxhYmVsfX0nIH0sLyogRU5ESUYgKi8KICAgICAgLyogSUY6c3RhdDJOdW1lcm8gKi97IG51bWJlcjogJ3t7c3RhdDJOdW1lcm99fScsIGxhYmVsOiAne3tzdGF0MkxhYmVsfX0nIH0sLyogRU5ESUYgKi8KICAgICAgLyogSUY6c3RhdDNOdW1lcm8gKi97IG51bWJlcjogJ3t7c3RhdDNOdW1lcm99fScsIGxhYmVsOiAne3tzdGF0M0xhYmVsfX0nIH0sLyogRU5ESUYgKi8KICAgIF0uZmlsdGVyKEJvb2xlYW4pOwogICAgaWYgKHN0YXRzRGF0YS5sZW5ndGgpIHsKICAgICAgdmFyIHN0YXRzID0gbWsoJ2RpdicsIFsnaGVyby1zdGF0cyddKTsKICAgICAgc3RhdHNEYXRhLmZvckVhY2goZnVuY3Rpb24ocykgewogICAgICAgIHZhciBpdGVtID0gbWsoJ2RpdicsIFsnc3RhdC1pdGVtJ10pOwogICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQobWsoJ3NwYW4nLCBbJ3N0YXQtbnVtYmVyJ10sIHMubnVtYmVyKSk7CiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChtaygnc3BhbicsIFsnc3RhdC1sYWJlbCddLCAgcy5sYWJlbCkpOwogICAgICAgIHN0YXRzLmFwcGVuZENoaWxkKGl0ZW0pOwogICAgICB9KTsKICAgICAgY29udGVudC5hcHBlbmRDaGlsZChzdGF0cyk7CiAgICB9CgogICAgdmFyIGNhcmRzRGF0YSA9IFsKICAgICAgLyogSUY6Y2FyZDFUaXR1bG8gKi97IGljb246ICd7e2NhcmQxSWNvbmV9fScsIHRpdGxlOiAne3tjYXJkMVRpdHVsb319JywgZGVzYzogJ3t7Y2FyZDFEZXNjfX0nLCBsaW5rOiAne3tjYXJkMUxpbmt9fScsIG5lb246IHRydWUgfSwvKiBFTkRJRiAqLwogICAgICAvKiBJRjpjYXJkMlRpdHVsbyAqL3sgaWNvbjogJ3t7Y2FyZDJJY29uZX19JywgdGl0bGU6ICd7e2NhcmQyVGl0dWxvfX0nLCBkZXNjOiAne3tjYXJkMkRlc2N9fScsIGxpbms6ICd7e2NhcmQyTGlua319JywgbmVvbjogZmFsc2UgfSwvKiBFTkRJRiAqLwogICAgICAvKiBJRjpjYXJkM1RpdHVsbyAqL3sgaWNvbjogJ3t7Y2FyZDNJY29uZX19JywgdGl0bGU6ICd7e2NhcmQzVGl0dWxvfX0nLCBkZXNjOiAne3tjYXJkM0Rlc2N9fScsIGxpbms6ICd7e2NhcmQzTGlua319JywgbmVvbjogZmFsc2UgfSwvKiBFTkRJRiAqLwogICAgICAvKiBJRjpjYXJkNFRpdHVsbyAqL3sgaWNvbjogJ3t7Y2FyZDRJY29uZX19JywgdGl0bGU6ICd7e2NhcmQ0VGl0dWxvfX0nLCBkZXNjOiAne3tjYXJkNERlc2N9fScsIGxpbms6ICd7e2NhcmQ0TGlua319JywgbmVvbjogdHJ1ZSB9LC8qIEVORElGICovCiAgICBdLmZpbHRlcihCb29sZWFuKTsKCiAgICB2YXIgdmlzdWFsID0gbWsoJ2RpdicsIFsnaGVyby12aXN1YWwnXSk7CiAgICB2YXIgY2FyZHMgID0gbWsoJ2RpdicsIFsnY2FyZHMtY29udGFpbmVyJ10pOwogICAgY2FyZHNEYXRhLmZvckVhY2goZnVuY3Rpb24oYykgewogICAgICB2YXIgY2FyZCA9IG1rKCdhJywgWydmZWF0dXJlLWNhcmQnXSk7CiAgICAgIGlmIChjLm5lb24pIGNhcmQuY2xhc3NMaXN0LmFkZCgnbmVvbicpOwogICAgICBjYXJkLmhyZWYgPSBjLmxpbms7CiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobWsoJ2knLCBjLmljb24uc3BsaXQoJyAnKS5jb25jYXQoWydjYXJkLWljb24nXSkpKTsKICAgICAgY2FyZC5hcHBlbmRDaGlsZChtaygnaDMnLCBbJ2NhcmQtdGl0bGUnXSwgYy50aXRsZSkpOwogICAgICBjYXJkLmFwcGVuZENoaWxkKG1rKCdwJywgIFsnY2FyZC1kZXNjcmlwdGlvbiddLCBjLmRlc2MpKTsKICAgICAgY2FyZHMuYXBwZW5kQ2hpbGQoY2FyZCk7CiAgICB9KTsKICAgIHZpc3VhbC5hcHBlbmRDaGlsZChjYXJkcyk7CgogICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpOwogICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHZpc3VhbCk7CiAgICBoZXJvLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7CgogICAgdmFyIGluc2VydFRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3t7c2VsZXRvckluc2VyY2FvfX0nKTsKICAgIGlmIChpbnNlcnRUYXJnZXQgJiYgaW5zZXJ0VGFyZ2V0LnBhcmVudE5vZGUpIHsKICAgICAgaW5zZXJ0VGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGhlcm8sIGluc2VydFRhcmdldC5uZXh0U2libGluZyk7CiAgICB9IGVsc2UgewogICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlcm8pOwogICAgfQoKICAgIHZhciBwcm9kU2VjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjLWJmYTNhN2E3LTInKTsKICAgIGlmIChwcm9kU2VjKSBwcm9kU2VjLmlkID0gJ3Byb2R1Y3RzLXNlY3Rpb24nOwogIH0KCiAgZnVuY3Rpb24gdXBkYXRlSGVybygpIHsKICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy8nKSB7CiAgICAgIHdhaXRGb3JFbGVtZW50KCd7e3NlbGV0b3JJbnNlcmNhb319JywgY3JlYXRlSGVybyk7CiAgICB9IGVsc2UgewogICAgICByZW1vdmVIZXJvKCk7CiAgICB9CiAgfQoKICB1cGRhdGVIZXJvKCk7CgogIHZhciBvcmlnUHVzaCA9IGhpc3RvcnkucHVzaFN0YXRlOwogIGhpc3RvcnkucHVzaFN0YXRlID0gZnVuY3Rpb24oKSB7IG9yaWdQdXNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IHNldFRpbWVvdXQodXBkYXRlSGVybywgNTApOyB9OwogIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZ1bmN0aW9uKCkgeyBzZXRUaW1lb3V0KHVwZGF0ZUhlcm8sIDUwKTsgfSk7CiAgdmFyIGxhc3RQYXRoID0gbG9jYXRpb24ucGF0aG5hbWU7CiAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7CiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgIT09IGxhc3RQYXRoKSB7IGxhc3RQYXRoID0gbG9jYXRpb24ucGF0aG5hbWU7IHVwZGF0ZUhlcm8oKTsgfQogIH0sIDUwMCk7Cn0pKCk7';

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

    var corTitulo = v.corTitulo || '#6f00ff';
    var corSub = v.corSubtitulo || '#bab0c5';
    var corDesc = v.corDescricao || '#9b90ae';
    var corP1 = v.corBtnPrimario1 || '#5900ff';
    var corP2 = v.corBtnPrimario2 || '#9421f3';
    var corS = v.corBtnSecundario || '#8400ff';
    var corCardB = v.corCardBorda || '#9d00ff';
    var corNeon = v.corNeonBorda || '#6405f8';
    var corIco = v.corIconeCard || '#8400ff';
    var corDCard = v.corDescricaoCard || '#c2b0c5';
    var corStatN = v.corStatNumero || '#7300ff';
    var corStatL = v.corStatLabel || '#9e90ae';

    var nome = v.nomeLoja || 'Nexus Store';
    var sub = v.subtitulo || 'Sua loja digital de confiança!';
    var desc = v.descricao || 'Preços acessíveis, entrega rápida e total segurança!';
    var btn1T = v.btn1Texto || 'Suporte';
    var btn2T = v.btn2Texto || 'Comunidade';

    var stats = [];
    for (var i = 1; i <= 3; i++) {
        var n = v['stat' + i + 'Numero'];
        if (n) stats.push({ n: n, l: v['stat' + i + 'Label'] || '' });
    }

    var cards = [];
    for (var j = 1; j <= 4; j++) {
        var t = v['card' + j + 'Titulo'];
        if (t) cards.push({ t: t, d: v['card' + j + 'Desc'] || '', neon: j === 1 || j === 4 });
    }

    var statsHTML = stats.map(function (s) {
        return '<div style="text-align:center;padding:.4rem .6rem;border-radius:8px;">'
            + '<div style="font-size:1.4rem;font-weight:700;color:' + corStatN + ';">' + s.n + '</div>'
            + '<div style="font-size:.7rem;color:' + corStatL + ';text-transform:uppercase;letter-spacing:1px;">' + s.l + '</div>'
            + '</div>';
    }).join('');

    var cardsHTML = cards.map(function (c) {
        var neonStyle = c.neon
            ? 'border:1px solid ' + corNeon + '50;box-shadow:0 0 14px ' + corNeon + '20,inset 0 0 14px ' + corNeon + '08;'
            : 'border:1px solid ' + corCardB + '20;';
        return '<div style="background:rgba(255,255,255,.05);backdrop-filter:blur(10px);border-radius:14px;padding:1.2rem;text-align:center;' + neonStyle + 'display:flex;flex-direction:column;align-items:center;gap:.5rem;height:130px;justify-content:center;">'
            + '<div style="font-size:1.6rem;color:' + corIco + ';">⚡</div>'
            + '<div style="font-size:.85rem;font-weight:600;color:#fff;">' + c.t + '</div>'
            + '<div style="font-size:.72rem;color:' + corDCard + ';">' + c.d + '</div>'
            + '</div>';
    }).join('');

    var doc =
        '<!DOCTYPE html><html><head><meta charset="UTF-8">'
        + '<style>*{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,sans-serif;} body{background:#0a0014;color:#fff;padding:24px;min-height:520px;}</style>'
        + '</head><body>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;max-width:900px;margin:0 auto;align-items:center;">'
        // Left
        + '<div style="display:flex;flex-direction:column;gap:1rem;">'
        + '<h1 style="font-size:2.2rem;font-weight:700;background:linear-gradient(5deg,' + corTitulo + ',' + corTitulo + ');-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">⚡ ' + nome + '</h1>'
        + '<p style="font-size:1rem;color:' + corSub + ';">' + sub + '</p>'
        + '<p style="font-size:.88rem;color:' + corDesc + ';line-height:1.6;">' + desc + '</p>'
        + '<div style="display:flex;gap:.8rem;flex-wrap:wrap;">'
        + '<span style="padding:.6rem 1.2rem;border-radius:8px;background:linear-gradient(45deg,' + corP1 + ',' + corP2 + ');color:#fff;font-size:.85rem;font-weight:600;">' + btn1T + '</span>'
        + '<span style="padding:.6rem 1.2rem;border-radius:8px;border:2px solid ' + corS + ';color:' + corS + ';font-size:.85rem;font-weight:600;">' + btn2T + '</span>'
        + '</div>'
        + (stats.length ? '<div style="display:flex;gap:1.5rem;">' + statsHTML + '</div>' : '')
        + '</div>'
        // Right — cards
        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:.8rem;">' + cardsHTML + '</div>'
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