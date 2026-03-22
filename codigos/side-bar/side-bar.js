// =============================================================
//  OG! — sidebar-menu.js
// =============================================================

const COMPONENT = {
    title: 'Sidebar / Drawer Menu',
    description: 'Menu lateral deslizante com botão hambúrguer no header, overlay, seções customizáveis, avatar do usuário e até 4 seções com 3 itens cada.',
    tags: ['Menu', 'Sidebar', 'Drawer', 'Hambúrguer', 'Navegação', 'JS', 'Grátis'],

    fields: [
        // Usuário
        { id: 'nomeUsuario', label: 'Nome do Usuário', type: 'text', placeholder: 'Ex: Visitante', default: 'Visitante', required: true },
        { id: 'avatarEmoji', label: 'Emoji do Avatar', type: 'text', placeholder: 'Ex: 👤', default: '👤', required: false },
        { id: 'labelAcao', label: 'Texto do link ação', type: 'text', placeholder: 'Ex: Fazer login', default: 'Fazer login', required: false },
        { id: 'linkAcao', label: 'Link da ação', type: 'text', placeholder: 'Ex: /login', default: '/login', required: false },

        // Seção 1
        { id: 'sec1Titulo', label: 'Seção 1 — Título', type: 'text', placeholder: 'Ex: MAIN', default: 'MAIN', required: false },
        { id: 'sec1Item1Label', label: 'Seção 1 · Item 1 — Nome', type: 'text', placeholder: 'Ex: Início', default: 'Início', required: false },
        { id: 'sec1Item1Icone', label: 'Seção 1 · Item 1 — Ícone', type: 'text', placeholder: 'Ex: 🏠', default: '🏠', required: false },
        { id: 'sec1Item1Link', label: 'Seção 1 · Item 1 — Link', type: 'text', placeholder: 'Ex: /', default: '/', required: false },
        { id: 'sec1Item2Label', label: 'Seção 1 · Item 2 — Nome', type: 'text', placeholder: 'Ex: Produtos', default: '', required: false },
        { id: 'sec1Item2Icone', label: 'Seção 1 · Item 2 — Ícone', type: 'text', placeholder: 'Ex: 🛒', default: '', required: false },
        { id: 'sec1Item2Link', label: 'Seção 1 · Item 2 — Link', type: 'text', placeholder: 'https://...', default: '', required: false },
        { id: 'sec1Item3Label', label: 'Seção 1 · Item 3 — Nome', type: 'text', placeholder: 'Ex: Blog', default: '', required: false },
        { id: 'sec1Item3Icone', label: 'Seção 1 · Item 3 — Ícone', type: 'text', placeholder: 'Ex: 📝', default: '', required: false },
        { id: 'sec1Item3Link', label: 'Seção 1 · Item 3 — Link', type: 'text', placeholder: 'https://...', default: '', required: false },

        // Seção 2
        { id: 'sec2Titulo', label: 'Seção 2 — Título', type: 'text', placeholder: 'Ex: PRODUTOS', default: 'PRODUTOS', required: false },
        { id: 'sec2Item1Label', label: 'Seção 2 · Item 1 — Nome', type: 'text', placeholder: 'Ex: Discord', default: 'Discord', required: false },
        { id: 'sec2Item1Icone', label: 'Seção 2 · Item 1 — Ícone', type: 'text', placeholder: 'Ex: 💬', default: '💬', required: false },
        { id: 'sec2Item1Link', label: 'Seção 2 · Item 1 — Link', type: 'text', placeholder: 'https://...', default: 'https://discord.gg', required: false },
        { id: 'sec2Item2Label', label: 'Seção 2 · Item 2 — Nome', type: 'text', placeholder: 'Ex: Jogos', default: 'Jogos', required: false },
        { id: 'sec2Item2Icone', label: 'Seção 2 · Item 2 — Ícone', type: 'text', placeholder: 'Ex: 🎮', default: '🎮', required: false },
        { id: 'sec2Item2Link', label: 'Seção 2 · Item 2 — Link', type: 'text', placeholder: 'https://...', default: '/produtos', required: false },
        { id: 'sec2Item3Label', label: 'Seção 2 · Item 3 — Nome', type: 'text', placeholder: 'Ex: Ofertas', default: '', required: false },
        { id: 'sec2Item3Icone', label: 'Seção 2 · Item 3 — Ícone', type: 'text', placeholder: 'Ex: 🔥', default: '', required: false },
        { id: 'sec2Item3Link', label: 'Seção 2 · Item 3 — Link', type: 'text', placeholder: 'https://...', default: '', required: false },

        // Seção 3
        { id: 'sec3Titulo', label: 'Seção 3 — Título', type: 'text', placeholder: 'Ex: CONTA', default: 'CONTA', required: false },
        { id: 'sec3Item1Label', label: 'Seção 3 · Item 1 — Nome', type: 'text', placeholder: 'Ex: Carrinho', default: 'Carrinho', required: false },
        { id: 'sec3Item1Icone', label: 'Seção 3 · Item 1 — Ícone', type: 'text', placeholder: 'Ex: 🛒', default: '🛒', required: false },
        { id: 'sec3Item1Link', label: 'Seção 3 · Item 1 — Link', type: 'text', placeholder: 'https://...', default: '/cart', required: false },
        { id: 'sec3Item2Label', label: 'Seção 3 · Item 2 — Nome', type: 'text', placeholder: 'Ex: Entrar', default: 'Entrar', required: false },
        { id: 'sec3Item2Icone', label: 'Seção 3 · Item 2 — Ícone', type: 'text', placeholder: 'Ex: ➡️', default: '➡️', required: false },
        { id: 'sec3Item2Link', label: 'Seção 3 · Item 2 — Link', type: 'text', placeholder: 'https://...', default: '/login', required: false },
        { id: 'sec3Item3Label', label: 'Seção 3 · Item 3 — Nome', type: 'text', placeholder: 'Ex: Perfil', default: '', required: false },
        { id: 'sec3Item3Icone', label: 'Seção 3 · Item 3 — Ícone', type: 'text', placeholder: 'Ex: 👤', default: '', required: false },
        { id: 'sec3Item3Link', label: 'Seção 3 · Item 3 — Link', type: 'text', placeholder: 'https://...', default: '', required: false },

        // Seção 4
        { id: 'sec4Titulo', label: 'Seção 4 — Título', type: 'text', placeholder: 'Ex: AJUDA', default: 'AJUDA', required: false },
        { id: 'sec4Item1Label', label: 'Seção 4 · Item 1 — Nome', type: 'text', placeholder: 'Ex: Suporte', default: 'Suporte', required: false },
        { id: 'sec4Item1Icone', label: 'Seção 4 · Item 1 — Ícone', type: 'text', placeholder: 'Ex: 🎧', default: '🎧', required: false },
        { id: 'sec4Item1Link', label: 'Seção 4 · Item 1 — Link', type: 'text', placeholder: 'https://...', default: '/support', required: false },
        { id: 'sec4Item2Label', label: 'Seção 4 · Item 2 — Nome', type: 'text', placeholder: 'Ex: FAQ', default: '', required: false },
        { id: 'sec4Item2Icone', label: 'Seção 4 · Item 2 — Ícone', type: 'text', placeholder: 'Ex: ❓', default: '', required: false },
        { id: 'sec4Item2Link', label: 'Seção 4 · Item 2 — Link', type: 'text', placeholder: 'https://...', default: '', required: false },

        // Cores
        { id: 'corFundo', label: 'Cor de Fundo (rgba)', type: 'text', placeholder: 'Ex: rgba(12,12,12,.88)', default: 'rgba(12,12,12,.88)', required: false },
        { id: 'corBorda', label: 'Cor da Borda', type: 'text', placeholder: 'Ex: rgba(255,255,255,.10)', default: 'rgba(255,255,255,.10)', required: false },
        { id: 'corTexto', label: 'Cor do Texto', type: 'text', placeholder: 'Ex: rgba(255,255,255,.92)', default: 'rgba(255,255,255,.92)', required: false },
        { id: 'corMuted', label: 'Cor do Texto Secundário', type: 'text', placeholder: 'Ex: rgba(255,255,255,.62)', default: 'rgba(255,255,255,.62)', required: false },
        { id: 'corAccent', label: 'Cor de Destaque', type: 'color', default: '#7c3aed' },
        { id: 'corAccent2', label: 'Cor de Destaque 2', type: 'color', default: '#a78bfa' },
        { id: 'corBtnHover', label: 'Cor hover do hambúrguer', type: 'color', default: '#7c3aed' },
    ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64 = '';
const BASE_JS_B64 = 'KGZ1bmN0aW9uICgpIHsKICBjb25zdCBST09UX0lEID0gJ2h4LWRyYXdlci1tZW51JzsKCiAgY29uc3QgTUVOVSA9IFsKICAgIC8qIElGOnNlYzFUaXR1bG8gKi97IHNlY3Rpb246ICd7e3NlYzFUaXR1bG99fScsIGl0ZW1zOiBbCiAgICAgIC8qIElGOnNlYzFJdGVtMUxhYmVsICoveyBsYWJlbDogJ3t7c2VjMUl0ZW0xTGFiZWx9fScsIGljb246ICd7e3NlYzFJdGVtMUljb25lfX0nLCBocmVmOiAne3tzZWMxSXRlbTFMaW5rfX0nIH0sLyogRU5ESUYgKi8KICAgICAgLyogSUY6c2VjMUl0ZW0yTGFiZWwgKi97IGxhYmVsOiAne3tzZWMxSXRlbTJMYWJlbH19JywgaWNvbjogJ3t7c2VjMUl0ZW0ySWNvbmV9fScsIGhyZWY6ICd7e3NlYzFJdGVtMkxpbmt9fScgfSwvKiBFTkRJRiAqLwogICAgICAvKiBJRjpzZWMxSXRlbTNMYWJlbCAqL3sgbGFiZWw6ICd7e3NlYzFJdGVtM0xhYmVsfX0nLCBpY29uOiAne3tzZWMxSXRlbTNJY29uZX19JywgaHJlZjogJ3t7c2VjMUl0ZW0zTGlua319JyB9LC8qIEVORElGICovCiAgICBdLmZpbHRlcihCb29sZWFuKSB9LC8qIEVORElGICovCiAgICAvKiBJRjpzZWMyVGl0dWxvICoveyBzZWN0aW9uOiAne3tzZWMyVGl0dWxvfX0nLCBpdGVtczogWwogICAgICAvKiBJRjpzZWMySXRlbTFMYWJlbCAqL3sgbGFiZWw6ICd7e3NlYzJJdGVtMUxhYmVsfX0nLCBpY29uOiAne3tzZWMySXRlbTFJY29uZX19JywgaHJlZjogJ3t7c2VjMkl0ZW0xTGlua319JyB9LC8qIEVORElGICovCiAgICAgIC8qIElGOnNlYzJJdGVtMkxhYmVsICoveyBsYWJlbDogJ3t7c2VjMkl0ZW0yTGFiZWx9fScsIGljb246ICd7e3NlYzJJdGVtMkljb25lfX0nLCBocmVmOiAne3tzZWMySXRlbTJMaW5rfX0nIH0sLyogRU5ESUYgKi8KICAgICAgLyogSUY6c2VjMkl0ZW0zTGFiZWwgKi97IGxhYmVsOiAne3tzZWMySXRlbTNMYWJlbH19JywgaWNvbjogJ3t7c2VjMkl0ZW0zSWNvbmV9fScsIGhyZWY6ICd7e3NlYzJJdGVtM0xpbmt9fScgfSwvKiBFTkRJRiAqLwogICAgXS5maWx0ZXIoQm9vbGVhbikgfSwvKiBFTkRJRiAqLwogICAgLyogSUY6c2VjM1RpdHVsbyAqL3sgc2VjdGlvbjogJ3t7c2VjM1RpdHVsb319JywgaXRlbXM6IFsKICAgICAgLyogSUY6c2VjM0l0ZW0xTGFiZWwgKi97IGxhYmVsOiAne3tzZWMzSXRlbTFMYWJlbH19JywgaWNvbjogJ3t7c2VjM0l0ZW0xSWNvbmV9fScsIGhyZWY6ICd7e3NlYzNJdGVtMUxpbmt9fScgfSwvKiBFTkRJRiAqLwogICAgICAvKiBJRjpzZWMzSXRlbTJMYWJlbCAqL3sgbGFiZWw6ICd7e3NlYzNJdGVtMkxhYmVsfX0nLCBpY29uOiAne3tzZWMzSXRlbTJJY29uZX19JywgaHJlZjogJ3t7c2VjM0l0ZW0yTGlua319JyB9LC8qIEVORElGICovCiAgICAgIC8qIElGOnNlYzNJdGVtM0xhYmVsICoveyBsYWJlbDogJ3t7c2VjM0l0ZW0zTGFiZWx9fScsIGljb246ICd7e3NlYzNJdGVtM0ljb25lfX0nLCBocmVmOiAne3tzZWMzSXRlbTNMaW5rfX0nIH0sLyogRU5ESUYgKi8KICAgIF0uZmlsdGVyKEJvb2xlYW4pIH0sLyogRU5ESUYgKi8KICAgIC8qIElGOnNlYzRUaXR1bG8gKi97IHNlY3Rpb246ICd7e3NlYzRUaXR1bG99fScsIGl0ZW1zOiBbCiAgICAgIC8qIElGOnNlYzRJdGVtMUxhYmVsICoveyBsYWJlbDogJ3t7c2VjNEl0ZW0xTGFiZWx9fScsIGljb246ICd7e3NlYzRJdGVtMUljb25lfX0nLCBocmVmOiAne3tzZWM0SXRlbTFMaW5rfX0nIH0sLyogRU5ESUYgKi8KICAgICAgLyogSUY6c2VjNEl0ZW0yTGFiZWwgKi97IGxhYmVsOiAne3tzZWM0SXRlbTJMYWJlbH19JywgaWNvbjogJ3t7c2VjNEl0ZW0ySWNvbmV9fScsIGhyZWY6ICd7e3NlYzRJdGVtMkxpbmt9fScgfSwvKiBFTkRJRiAqLwogICAgXS5maWx0ZXIoQm9vbGVhbikgfSwvKiBFTkRJRiAqLwogIF0uZmlsdGVyKGZ1bmN0aW9uKGcpeyByZXR1cm4gZyAmJiBnLml0ZW1zICYmIGcuaXRlbXMubGVuZ3RoID4gMDsgfSk7CgogIGNvbnN0IFVTRVIgPSB7IG5hbWU6ICd7e25vbWVVc3VhcmlvfX0nLCBhY3Rpb25MYWJlbDogJ3t7bGFiZWxBY2FvfX0nLCBhY3Rpb25IcmVmOiAne3tsaW5rQWNhb319JywgYXZhdGFyOiAne3thdmF0YXJFbW9qaX19JyB9OwoKICBjb25zdCBDU1NfVkFSUyA9IHsKICAgIGJnOiAgICAgICAne3tjb3JGdW5kb319JywKICAgIGJvcmRlcjogICAne3tjb3JCb3JkYX19JywKICAgIHRleHQ6ICAgICAne3tjb3JUZXh0b319JywKICAgIG11dGVkOiAgICAne3tjb3JNdXRlZH19JywKICAgIGFjY2VudDogICAne3tjb3JBY2NlbnR9fScsCiAgICBhY2NlbnQyOiAgJ3t7Y29yQWNjZW50Mn19JywKICAgIGJ0bkhvdmVyOiAne3tjb3JCdG5Ib3Zlcn19JywKICB9OwoKICBmdW5jdGlvbiByZWFkeShmbikgewogICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuLCB7IG9uY2U6IHRydWUgfSk7CiAgICBlbHNlIGZuKCk7CiAgfQoKICBmdW5jdGlvbiBlc2MocykgewogICAgcmV0dXJuIFN0cmluZyhzKS5yZXBsYWNlKC9bJjw+IiddL2csIGZ1bmN0aW9uKG0pIHsKICAgICAgcmV0dXJuIHsgJyYnOicmYW1wOycsJzwnOicmbHQ7JywnPic6JyZndDsnLCciJzonJnF1b3Q7JywiJyI6JyYjMDM5OycgfVttXTsKICAgIH0pOwogIH0KCiAgZnVuY3Rpb24gbG9ja1Njcm9sbChsb2NrKSB7CiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gbG9jayA/ICdoaWRkZW4nIDogJyc7CiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBsb2NrID8gJ2hpZGRlbicgOiAnJzsKICB9CgogIGZ1bmN0aW9uIHBsYWNlQnV0dG9uSW5IZWFkZXIoYnRuKSB7CiAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7CiAgICBpZiAoIWhlYWRlcikgcmV0dXJuIGZhbHNlOwogICAgdmFyIGZpcnN0RGl2ID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpOwogICAgaWYgKCFmaXJzdERpdikgcmV0dXJuIGZhbHNlOwogICAgaWYgKGJ0bi5wYXJlbnRFbGVtZW50ICE9PSBmaXJzdERpdikgZmlyc3REaXYuaW5zZXJ0QmVmb3JlKGJ0biwgZmlyc3REaXYuZmlyc3RDaGlsZCk7CiAgICByZXR1cm4gdHJ1ZTsKICB9CgogIGZ1bmN0aW9uIGluamVjdENTUygpIHsKICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHgtc3R5bGVzJykpIHJldHVybjsKICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7CiAgICBzdHlsZS5pZCA9ICdoeC1zdHlsZXMnOwogICAgc3R5bGUudGV4dENvbnRlbnQgPQogICAgICAnOnJvb3R7LS1oeC1iZzonICsgQ1NTX1ZBUlMuYmcgKyAnOy0taHgtYm9yZGVyOicgKyBDU1NfVkFSUy5ib3JkZXIgKyAnOy0taHgtdGV4dDonICsgQ1NTX1ZBUlMudGV4dCArICc7LS1oeC1tdXRlZDonICsgQ1NTX1ZBUlMubXV0ZWQgKyAnOy0taHgtYWNjZW50OicgKyBDU1NfVkFSUy5hY2NlbnQgKyAnOy0taHgtYWNjZW50LTI6JyArIENTU19WQVJTLmFjY2VudDIgKyAnO30nICsKICAgICAgJyNoeC1kcmF3ZXItbWVudXtwb3NpdGlvbjpmaXhlZDtpbnNldDowO3otaW5kZXg6MjE0NzQ4MzAwMDtwb2ludGVyLWV2ZW50czpub25lO30nICsKICAgICAgJy5oeC1vcGVuICNoeC1kcmF3ZXItbWVudXtwb2ludGVyLWV2ZW50czphdXRvO30nICsKICAgICAgJy5oeC1vdmVybGF5e3Bvc2l0aW9uOmZpeGVkO2luc2V0OjA7ei1pbmRleDoyMTQ3NDgzMDA0O2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNjUpO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246b3BhY2l0eSAuMjJzIGVhc2U7fScgKwogICAgICAnLmh4LW9wZW4gLmh4LW92ZXJsYXl7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmF1dG87fScgKwogICAgICAnLmh4LWRyYXdlcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7ei1pbmRleDoyMTQ3NDgzMDA1O2hlaWdodDoxMDB2aDt3aWR0aDptaW4oMzYwcHgsOTJ2dyk7YmFja2dyb3VuZDp2YXIoLS1oeC1iZyk7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCB2YXIoLS1oeC1ib3JkZXIpO2JhY2tkcm9wLWZpbHRlcjpibHVyKDE0cHgpIHNhdHVyYXRlKDE2MCUpOy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOmJsdXIoMTRweCkgc2F0dXJhdGUoMTYwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTExMCUpO3RyYW5zaXRpb246dHJhbnNmb3JtIC4yNHMgZWFzZTtvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwb2ludGVyLWV2ZW50czphdXRvO30nICsKICAgICAgJy5oeC1vcGVuIC5oeC1kcmF3ZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7fScgKwogICAgICAnLmh4LXRvcHtwYWRkaW5nOjE4cHggMTZweCAxNHB4IDE2cHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMDgpO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Z2FwOjEycHg7fScgKwogICAgICAnLmh4LWNsb3Nle3dpZHRoOjM4cHg7aGVpZ2h0OjM4cHg7Ym9yZGVyLXJhZGl1czoxMnB4O2JvcmRlcjoxcHggc29saWQgJyArIENTU19WQVJTLmFjY2VudDIucmVwbGFjZSgnKScsICcsLjI1KScpLnJlcGxhY2UoJ3JnYicsICdyZ2JhJykgKyAnO2JhY2tncm91bmQ6JyArIENTU19WQVJTLmFjY2VudCArICczMDtjb2xvcjp2YXIoLS1oeC10ZXh0KTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjE4cyBlYXNlLGJhY2tncm91bmQgLjE4cyBlYXNlO2ZsZXg6MCAwIGF1dG87Zm9udC1zaXplOjE2cHg7fScgKwogICAgICAnLmh4LWNsb3NlOmhvdmVye3RyYW5zZm9ybTpzY2FsZSgxLjAzKTtiYWNrZ3JvdW5kOicgKyBDU1NfVkFSUy5hY2NlbnQgKyAnNDU7fScgKwogICAgICAnLmh4LXVzZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MTJweDttaW4td2lkdGg6MDt9JyArCiAgICAgICcuaHgtYXZhdGFye3dpZHRoOjQ4cHg7aGVpZ2h0OjQ4cHg7Ym9yZGVyLXJhZGl1czo5OTlweDtiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDMwJSwnICsgQ1NTX1ZBUlMuYWNjZW50MiArICc3NSwnICsgQ1NTX1ZBUlMuYWNjZW50ICsgJzM1KTtib3JkZXI6MXB4IHNvbGlkICcgKyBDU1NfVkFSUy5hY2NlbnQyICsgJzI4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmb250LXNpemU6MjJweDtmbGV4OjAgMCBhdXRvO30nICsKICAgICAgJy5oeC11c2VyaW5mb3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2xpbmUtaGVpZ2h0OjEuMTt9JyArCiAgICAgICcuaHgtdXNlcmluZm8gYntjb2xvcjp2YXIoLS1oeC10ZXh0KTtmb250LXNpemU6MTZweDt3aGl0ZS1zcGFjZTpub3dyYXc7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7bWF4LXdpZHRoOjIzMHB4O2ZvbnQtd2VpZ2h0OjkwMDt9JyArCiAgICAgICcuaHgtdXNlcmluZm8gYXtjb2xvcjp2YXIoLS1oeC1hY2NlbnQtMik7Zm9udC13ZWlnaHQ6ODAwO2ZvbnQtc2l6ZToxM3B4O3RleHQtZGVjb3JhdGlvbjpub25lO3dpZHRoOmZpdC1jb250ZW50O21hcmdpbi10b3A6NHB4O30nICsKICAgICAgJy5oeC11c2VyaW5mbyBhOmhvdmVye3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7fScgKwogICAgICAnLmh4LWJvZHl7cGFkZGluZzoxMnB4IDEycHggMThweCAxMnB4O292ZXJmbG93OmF1dG87ZmxleDoxO30nICsKICAgICAgJy5oeC1zZWN0aW9ue21hcmdpbi10b3A6MTBweDt9JyArCiAgICAgICcuaHgtc2VjdGlvbi10aXRsZXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMHB4O2NvbG9yOnZhcigtLWh4LWFjY2VudC0yKTtmb250LXdlaWdodDo5MDA7bGV0dGVyLXNwYWNpbmc6LjE4ZW07dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmc6MTZweCAxNHB4IDEwcHggMTRweDt9JyArCiAgICAgICcuaHgtc2VjdGlvbi10aXRsZTo6YmVmb3Jle2NvbnRlbnQ6IiI7aGVpZ2h0OjNweDt3aWR0aDoyOHB4O2JvcmRlci1yYWRpdXM6OTk5cHg7YmFja2dyb3VuZDonICsgQ1NTX1ZBUlMuYWNjZW50MiArICc0NTt9JyArCiAgICAgICcuaHgtaXRlbXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxNHB4O3BhZGRpbmc6MTRweCAxNHB4O2JvcmRlci1yYWRpdXM6MTRweDtjb2xvcjp2YXIoLS1oeC10ZXh0KTt0ZXh0LWRlY29yYXRpb246bm9uZTt0cmFuc2l0aW9uOmJhY2tncm91bmQgLjE4cyBlYXNlO30nICsKICAgICAgJy5oeC1pdGVtOmhvdmVye2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMDUpO30nICsKICAgICAgJy5oeC1pY297d2lkdGg6MzhweDtoZWlnaHQ6MzhweDtib3JkZXItcmFkaXVzOjEycHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjkpO2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMDUpO2JvcmRlcjoxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMDgpO2ZsZXg6MCAwIGF1dG87Zm9udC1zaXplOjE4cHg7fScgKwogICAgICAnLmh4LWxhYmVse2ZvbnQtd2VpZ2h0OjkwMDtmb250LXNpemU6MTZweDt9JyArCiAgICAgICcuaHgtYnRue2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47d2lkdGg6MjRweDtoZWlnaHQ6MThweDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JvcmRlcjpub25lO2N1cnNvcjpwb2ludGVyO3BhZGRpbmc6MDttYXJnaW4tcmlnaHQ6MTZweDt6LWluZGV4OjIxNDc0ODMwMDY7cG9pbnRlci1ldmVudHM6YXV0bzt9JyArCiAgICAgICcuaHgtYnRuIHNwYW57ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDoyLjVweDtiYWNrZ3JvdW5kOiNmZmZmZmY7Ym9yZGVyLXJhZGl1czo0cHg7dHJhbnNpdGlvbjphbGwgLjNzIGVhc2U7fScgKwogICAgICAnLmh4LWJ0bjpob3ZlciBzcGFue2JhY2tncm91bmQ6JyArIENTU19WQVJTLmFjY2VudCArICc7fScgKwogICAgICAnLmh4LW9wZW4gLmh4LWJ0biBzcGFuOm50aC1jaGlsZCgxKXt0cmFuc2Zvcm06dHJhbnNsYXRlWSg3Ljc1cHgpIHJvdGF0ZSg0NWRlZyk7fScgKwogICAgICAnLmh4LW9wZW4gLmh4LWJ0biBzcGFuOm50aC1jaGlsZCgyKXtvcGFjaXR5OjA7fScgKwogICAgICAnLmh4LW9wZW4gLmh4LWJ0biBzcGFuOm50aC1jaGlsZCgzKXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNy43NXB4KSByb3RhdGUoLTQ1ZGVnKTt9JzsKICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpOwogIH0KCiAgZnVuY3Rpb24gbW91bnQoKSB7CiAgICB2YXIgb2xkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUk9PVF9JRCk7CiAgICBpZiAob2xkKSBvbGQucmVtb3ZlKCk7CgogICAgaW5qZWN0Q1NTKCk7CgogICAgdmFyIHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICAgIHJvb3QuaWQgPSBST09UX0lEOwoKICAgIHZhciBtZW51SFRNTCA9IE1FTlUubWFwKGZ1bmN0aW9uKGdyb3VwKSB7CiAgICAgIHZhciBpc01haW4gPSBncm91cC5zZWN0aW9uID09PSAnTUFJTicgfHwgTUVOVS5pbmRleE9mKGdyb3VwKSA9PT0gMCAmJiAhZ3JvdXAuc2VjdGlvbjsKICAgICAgdmFyIHRpdGxlSFRNTCA9ICghaXNNYWluICYmIGdyb3VwLnNlY3Rpb24pID8gJzxkaXYgY2xhc3M9Imh4LXNlY3Rpb24tdGl0bGUiPicgKyBlc2MoZ3JvdXAuc2VjdGlvbikgKyAnPC9kaXY+JyA6ICcnOwogICAgICB2YXIgaXRlbXNIVE1MID0gZ3JvdXAuaXRlbXMubWFwKGZ1bmN0aW9uKGl0KSB7CiAgICAgICAgcmV0dXJuICc8YSBjbGFzcz0iaHgtaXRlbSIgaHJlZj0iJyArIGVzYyhpdC5ocmVmKSArICciPjxkaXYgY2xhc3M9Imh4LWljbyI+JyArIGVzYyhpdC5pY29uKSArICc8L2Rpdj48ZGl2IGNsYXNzPSJoeC1sYWJlbCI+JyArIGVzYyhpdC5sYWJlbCkgKyAnPC9kaXY+PC9hPic7CiAgICAgIH0pLmpvaW4oJycpOwogICAgICByZXR1cm4gJzxkaXYgY2xhc3M9Imh4LXNlY3Rpb24iPicgKyB0aXRsZUhUTUwgKyBpdGVtc0hUTUwgKyAnPC9kaXY+JzsKICAgIH0pLmpvaW4oJycpOwoKICAgIHJvb3QuaW5uZXJIVE1MID0KICAgICAgJzxkaXYgY2xhc3M9Imh4LW92ZXJsYXkiIGRhdGEtaHg9Im92ZXJsYXkiPjwvZGl2PicgKwogICAgICAnPGJ1dHRvbiBjbGFzcz0iaHgtYnRuIiB0eXBlPSJidXR0b24iIGFyaWEtbGFiZWw9Ik1lbnUiIGRhdGEtaHg9ImJ0biI+PHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9idXR0b24+JyArCiAgICAgICc8YXNpZGUgY2xhc3M9Imh4LWRyYXdlciIgYXJpYS1sYWJlbD0iTWVudSBsYXRlcmFsIj4nICsKICAgICAgICAnPGRpdiBjbGFzcz0iaHgtdG9wIj4nICsKICAgICAgICAgICc8ZGl2IGNsYXNzPSJoeC11c2VyIj4nICsKICAgICAgICAgICAgJzxkaXYgY2xhc3M9Imh4LWF2YXRhciI+JyArIGVzYyhVU0VSLmF2YXRhcikgKyAnPC9kaXY+JyArCiAgICAgICAgICAgICc8ZGl2IGNsYXNzPSJoeC11c2VyaW5mbyI+PGI+JyArIGVzYyhVU0VSLm5hbWUpICsgJzwvYj48YSBocmVmPSInICsgZXNjKFVTRVIuYWN0aW9uSHJlZikgKyAnIj4nICsgZXNjKFVTRVIuYWN0aW9uTGFiZWwpICsgJzwvYT48L2Rpdj4nICsKICAgICAgICAgICc8L2Rpdj4nICsKICAgICAgICAgICc8YnV0dG9uIGNsYXNzPSJoeC1jbG9zZSIgdHlwZT0iYnV0dG9uIiBhcmlhLWxhYmVsPSJGZWNoYXIiIGRhdGEtaHg9ImNsb3NlIj7inJU8L2J1dHRvbj4nICsKICAgICAgICAnPC9kaXY+JyArCiAgICAgICAgJzxkaXYgY2xhc3M9Imh4LWJvZHkiPicgKyBtZW51SFRNTCArICc8L2Rpdj4nICsKICAgICAgJzwvYXNpZGU+JzsKCiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpOwoKICAgIHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OwogICAgdmFyIGJ0biA9IHJvb3QucXVlcnlTZWxlY3RvcignW2RhdGEtaHg9ImJ0biJdJyk7CiAgICB2YXIgb3ZlcmxheSA9IHJvb3QucXVlcnlTZWxlY3RvcignW2RhdGEtaHg9Im92ZXJsYXkiXScpOwogICAgdmFyIGNsb3NlQnRuID0gcm9vdC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1oeD0iY2xvc2UiXScpOwoKICAgIHZhciBwbGFjZWQgPSBwbGFjZUJ1dHRvbkluSGVhZGVyKGJ0bik7CiAgICBpZiAoIXBsYWNlZCkgewogICAgICB2YXIgb2JzID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKHBsYWNlQnV0dG9uSW5IZWFkZXIoYnRuKSkgb2JzLmRpc2Nvbm5lY3QoKTsKICAgICAgfSk7CiAgICAgIG9icy5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7CiAgICB9CgogICAgZnVuY3Rpb24gb3BlbigpICB7IGh0bWwuY2xhc3NMaXN0LmFkZCgnaHgtb3BlbicpOyAgICBsb2NrU2Nyb2xsKHRydWUpOyAgfQogICAgZnVuY3Rpb24gY2xvc2UoKSB7IGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnaHgtb3BlbicpOyBsb2NrU2Nyb2xsKGZhbHNlKTsgfQogICAgZnVuY3Rpb24gdG9nZ2xlKCl7IGh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoeC1vcGVuJykgPyBjbG9zZSgpIDogb3BlbigpOyB9CgogICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlKTsKICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7CiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTsKICAgIHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7IGlmIChlLnRhcmdldC5jbG9zZXN0KCcuaHgtaXRlbScpKSBjbG9zZSgpOyB9KTsKICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7IGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIGNsb3NlKCk7IH0pOwogIH0KCiAgcmVhZHkobW91bnQpOwp9KSgpOw==';

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

    var corAccent = v.corAccent || '#7c3aed';
    var corAccent2 = v.corAccent2 || '#a78bfa';
    var corFundo = v.corFundo || 'rgba(12,12,12,.95)';
    var corBorda = v.corBorda || 'rgba(255,255,255,.10)';
    var corTexto = v.corTexto || 'rgba(255,255,255,.92)';
    var corMuted = v.corMuted || 'rgba(255,255,255,.55)';
    var nome = v.nomeUsuario || 'Visitante';
    var avatar = v.avatarEmoji || '👤';
    var labelAcao = v.labelAcao || 'Fazer login';

    // Build sections
    var secoes = [];
    for (var s = 1; s <= 4; s++) {
        var titulo = v['sec' + s + 'Titulo'];
        if (!titulo) continue;
        var itens = [];
        for (var i = 1; i <= 3; i++) {
            var lbl = v['sec' + s + 'Item' + i + 'Label'];
            var ico = v['sec' + s + 'Item' + i + 'Icone'] || '•';
            if (lbl) itens.push({ label: lbl, icon: ico });
        }
        if (itens.length) secoes.push({ titulo: titulo, itens: itens, isFirst: s === 1 });
    }

    var secoesHTML = secoes.map(function (sec) {
        var titleHTML = sec.isFirst ? '' : '<div style="display:flex;align-items:center;gap:8px;color:' + corAccent2 + ';font-weight:900;font-size:11px;letter-spacing:.16em;text-transform:uppercase;padding:14px 12px 8px 12px;">'
            + '<div style="height:3px;width:22px;border-radius:99px;background:' + corAccent2 + '50;"></div>' + sec.titulo + '</div>';
        var itensHTML = sec.itens.map(function (it) {
            return '<div style="display:flex;align-items:center;gap:12px;padding:11px 12px;border-radius:12px;">'
                + '<div style="width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);flex:0 0 auto;">' + it.icon + '</div>'
                + '<div style="font-weight:700;font-size:14px;color:' + corTexto + ';">' + it.label + '</div>'
                + '</div>';
        }).join('');
        return '<div style="margin-top:8px;">' + titleHTML + itensHTML + '</div>';
    }).join('');

    var doc =
        '<!DOCTYPE html><html><head><meta charset="UTF-8">'
        + '<style>*{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,sans-serif;} body{background:#1a1a2e;display:flex;align-items:stretch;height:520px;overflow:hidden;}</style>'
        + '</head><body>'
        // Sidebar
        + '<div style="width:280px;height:520px;background:' + corFundo + ';border-right:1px solid ' + corBorda + ';display:flex;flex-direction:column;flex:0 0 auto;">'
        // Top / user
        + '<div style="padding:16px 14px 12px 14px;border-bottom:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:space-between;gap:10px;">'
        + '<div style="display:flex;align-items:center;gap:10px;min-width:0;">'
        + '<div style="width:42px;height:42px;border-radius:999px;background:radial-gradient(circle at 30% 30%,' + corAccent2 + '80,' + corAccent + '40);border:1px solid ' + corAccent2 + '30;display:flex;align-items:center;justify-content:center;font-size:20px;flex:0 0 auto;">' + avatar + '</div>'
        + '<div><div style="color:' + corTexto + ';font-size:14px;font-weight:700;">' + nome + '</div>'
        + '<div style="color:' + corAccent2 + ';font-size:12px;font-weight:600;margin-top:3px;">' + labelAcao + '</div></div>'
        + '</div>'
        + '<div style="width:32px;height:32px;border-radius:10px;border:1px solid ' + corAccent2 + '30;background:' + corAccent + '25;display:flex;align-items:center;justify-content:center;color:' + corTexto + ';font-size:13px;">✕</div>'
        + '</div>'
        // Body
        + '<div style="padding:10px;overflow:auto;flex:1;">' + secoesHTML + '</div>'
        + '</div>'
        // Content area
        + '<div style="flex:1;display:flex;align-items:center;justify-content:center;color:' + corMuted + ';font-size:.9rem;flex-direction:column;gap:16px;">'
        + '<div style="width:36px;height:3px;border-radius:2px;background:rgba(255,255,255,.1);"></div>'
        + '<div style="width:24px;height:3px;border-radius:2px;background:rgba(255,255,255,.05);"></div>'
        + '<div style="width:30px;height:3px;border-radius:2px;background:rgba(255,255,255,.08);"></div>'
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