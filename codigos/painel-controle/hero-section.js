// =============================================================
//  OG! — painel-controle.js
// =============================================================

const COMPONENT = {
  title:       'Painel de Controle',
  description: 'Hero com logo animado, tagline, descrição, dois botões, stats e grade de 4 cards com links. Inserido automaticamente abaixo do header da loja.',
  tags:        ['Hero', 'Painel', 'Cards', 'Animação', 'JS', 'Grátis'],

  fields: [
    // Identidade
    { id: 'nomeLoja',  label: 'Nome da Loja',    type: 'text',  placeholder: 'Ex: Allan Proxy',                  default: 'Minha Loja',                           required: true  },
    { id: 'logoEmoji', label: 'Emoji do Logo',   type: 'text',  placeholder: 'Ex: ⚡',                           default: '⚡',                                    required: false },
    { id: 'tagline',   label: 'Tagline',          type: 'text',  placeholder: 'Ex: O maior fornecedor...',        default: 'O maior fornecedor do mercado.',        required: false },
    { id: 'descricao', label: 'Descrição (aceita <em>texto</em>)', type: 'text', placeholder: 'Ex: Somos pioneiros...', default: 'Somos pioneiros no mercado! Temos os <em>melhores produtos</em> — qualidade e suporte garantidos!', required: false },

    // Botões
    { id: 'btn1Texto', label: 'Botão 1 — Texto',  type: 'text', placeholder: 'Ex: Suporte WhatsApp', default: 'Suporte no WhatsApp', required: false },
    { id: 'btn1Link',  label: 'Botão 1 — Link',   type: 'text', placeholder: 'https://wa.me/...',    default: '',                    required: false },
    { id: 'btn1Icone', label: 'Botão 1 — Ícone (HTML/emoji)', type: 'text', placeholder: 'Ex: 💬', default: '💬', required: false },
    { id: 'btn2Texto', label: 'Botão 2 — Texto',  type: 'text', placeholder: 'Ex: Ver Produtos',     default: 'Ver Produtos',        required: false },
    { id: 'btn2Link',  label: 'Botão 2 — Link',   type: 'text', placeholder: 'https://...',           default: '',                    required: false },
    { id: 'btn2Icone', label: 'Botão 2 — Ícone (HTML/emoji)', type: 'text', placeholder: 'Ex: 🛒', default: '🛒', required: false },

    // Stats
    { id: 'stat1Valor', label: 'Stat 1 — Valor', type: 'text', placeholder: 'Ex: +5000', default: '+5000', required: false },
    { id: 'stat1Label', label: 'Stat 1 — Label', type: 'text', placeholder: 'Ex: Pedidos Entregues', default: 'Pedidos Entregues', required: false },
    { id: 'stat2Valor', label: 'Stat 2 — Valor', type: 'text', placeholder: 'Ex: 98,6%', default: '98,6%', required: false },
    { id: 'stat2Label', label: 'Stat 2 — Label', type: 'text', placeholder: 'Ex: Satisfação', default: 'Satisfação', required: false },
    { id: 'stat3Valor', label: 'Stat 3 — Valor', type: 'text', placeholder: 'Ex: 24/7', default: '24/7', required: false },
    { id: 'stat3Label', label: 'Stat 3 — Label', type: 'text', placeholder: 'Ex: Suporte Rápido', default: 'Suporte Rápido', required: false },

    // Cards
    { id: 'card1Titulo', label: 'Card 1 — Título',     type: 'text', placeholder: 'Ex: Ver Produtos',     default: 'Ver Produtos',        required: false },
    { id: 'card1Desc',   label: 'Card 1 — Descrição',  type: 'text', placeholder: 'Ex: Explore...',       default: 'Explore nosso catálogo.', required: false },
    { id: 'card1Link',   label: 'Card 1 — Link',       type: 'text', placeholder: 'https://...',           default: '#',                   required: false },
    { id: 'card1Icone',  label: 'Card 1 — Ícone (SVG)', type: 'text', placeholder: 'Cole o SVG aqui',    default: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 21a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z" stroke="#a855f7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>', required: false },

    { id: 'card2Titulo', label: 'Card 2 — Título',     type: 'text', placeholder: 'Ex: Meus Pedidos',     default: 'Meus Pedidos',        required: false },
    { id: 'card2Desc',   label: 'Card 2 — Descrição',  type: 'text', placeholder: 'Ex: Acompanhe...',     default: 'Acompanhe seus pedidos.', required: false },
    { id: 'card2Link',   label: 'Card 2 — Link',       type: 'text', placeholder: 'https://...',           default: '#',                   required: false },
    { id: 'card2Icone',  label: 'Card 2 — Ícone (SVG)', type: 'text', placeholder: 'Cole o SVG aqui',    default: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#a855f7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="20" cy="21" r="1.5"/><path d="M1 1h4l2.68 13.39A2 2 0 009.6 16h9.8a2 2 0 001.96-1.61L23 6H6"/></svg>', required: false },

    { id: 'card3Titulo', label: 'Card 3 — Título',     type: 'text', placeholder: 'Ex: Suporte',          default: 'Suporte',             required: false },
    { id: 'card3Desc',   label: 'Card 3 — Descrição',  type: 'text', placeholder: 'Ex: Fale conosco...', default: 'Fale conosco agora.',  required: false },
    { id: 'card3Link',   label: 'Card 3 — Link',       type: 'text', placeholder: 'https://...',           default: '#',                   required: false },
    { id: 'card3Icone',  label: 'Card 3 — Ícone (SVG)', type: 'text', placeholder: 'Cole o SVG aqui',    default: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a855f7"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>', required: false },

    { id: 'card4Titulo', label: 'Card 4 — Título',     type: 'text', placeholder: 'Ex: Afiliados',        default: 'Seja Afiliado!',      required: false },
    { id: 'card4Desc',   label: 'Card 4 — Descrição',  type: 'text', placeholder: 'Ex: Ganhe comissões...', default: 'Ganhe comissões por cada venda!', required: false },
    { id: 'card4Link',   label: 'Card 4 — Link',       type: 'text', placeholder: 'https://...',           default: '#',                   required: false },
    { id: 'card4Icone',  label: 'Card 4 — Ícone (SVG)', type: 'text', placeholder: 'Cole o SVG aqui',    default: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a855f7"><path d="M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91C3 15.24 6.21 19.39 10.5 21c.65-.23 1.27-.52 1.85-.86A6.979 6.979 0 0017 11z" opacity=".7"/><path d="M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm1.41 5.59L16.5 16.5l.71-.71 1.2 1.21 2.38-2.38.71.71-3.09 3.06z"/></svg>', required: false },

    // Cores
    { id: 'corPrincipal',      label: 'Cor Principal',           type: 'color', default: '#a855f7' },
    { id: 'corPrincipalEscuro',label: 'Cor Principal (escura)',  type: 'color', default: '#7c3aed' },
    { id: 'corLogoTexto',      label: 'Cor do Logo (texto)',     type: 'color', default: '#c084fc' },
    { id: 'corBordaBtn',       label: 'Cor da Borda do Btn 2',  type: 'color', default: '#8b2be2' },
    { id: 'corTexto',          label: 'Cor do Texto',            type: 'color', default: '#e2d9f3' },
    { id: 'corMuted',          label: 'Cor do Texto Secundário', type: 'color', default: '#9b8ec4' },
    { id: 'corDescricao',      label: 'Cor da Descrição',        type: 'color', default: '#b8aad4' },
    { id: 'corCardFundo',      label: 'Cor de Fundo dos Cards',  type: 'color', default: '#111120' },
    { id: 'corCardBorda',      label: 'Cor da Borda dos Cards',  type: 'color', default: '#1e1e38' },
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = '';
const BASE_JS_B64   = 'Ly8gUGFpbmVsIGRlIENvbnRyb2xlIOKAlCBnZXJhZG8gcG9yIE9HIQooZnVuY3Rpb24oKSB7CiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcC1yb290JykpIHJldHVybjsKCiAgLy8g4pSA4pSAIERBRE9TIOKUgOKUgAogIHZhciBBUF9DQVJEUyA9IFsKICAgIC8qIElGOmNhcmQxVGl0dWxvICoveyB0aXRsZTogJ3t7Y2FyZDFUaXR1bG99fScsIGRlc2M6ICd7e2NhcmQxRGVzY319JywgbGluazogJ3t7Y2FyZDFMaW5rfX0nLCBpY29uOiAne3tjYXJkMUljb25lfX0nIH0sLyogRU5ESUYgKi8KICAgIC8qIElGOmNhcmQyVGl0dWxvICoveyB0aXRsZTogJ3t7Y2FyZDJUaXR1bG99fScsIGRlc2M6ICd7e2NhcmQyRGVzY319JywgbGluazogJ3t7Y2FyZDJMaW5rfX0nLCBpY29uOiAne3tjYXJkMkljb25lfX0nIH0sLyogRU5ESUYgKi8KICAgIC8qIElGOmNhcmQzVGl0dWxvICoveyB0aXRsZTogJ3t7Y2FyZDNUaXR1bG99fScsIGRlc2M6ICd7e2NhcmQzRGVzY319JywgbGluazogJ3t7Y2FyZDNMaW5rfX0nLCBpY29uOiAne3tjYXJkM0ljb25lfX0nIH0sLyogRU5ESUYgKi8KICAgIC8qIElGOmNhcmQ0VGl0dWxvICoveyB0aXRsZTogJ3t7Y2FyZDRUaXR1bG99fScsIGRlc2M6ICd7e2NhcmQ0RGVzY319JywgbGluazogJ3t7Y2FyZDRMaW5rfX0nLCBpY29uOiAne3tjYXJkNEljb25lfX0nIH0sLyogRU5ESUYgKi8KICBdLmZpbHRlcihCb29sZWFuKTsKCiAgdmFyIEFQX1NUQVRTID0gWwogICAgLyogSUY6c3RhdDFWYWxvciAqL3sgdmFsdWU6ICd7e3N0YXQxVmFsb3J9fScsIGxhYmVsOiAne3tzdGF0MUxhYmVsfX0nIH0sLyogRU5ESUYgKi8KICAgIC8qIElGOnN0YXQyVmFsb3IgKi97IHZhbHVlOiAne3tzdGF0MlZhbG9yfX0nLCBsYWJlbDogJ3t7c3RhdDJMYWJlbH19JyB9LC8qIEVORElGICovCiAgICAvKiBJRjpzdGF0M1ZhbG9yICoveyB2YWx1ZTogJ3t7c3RhdDNWYWxvcn19JywgbGFiZWw6ICd7e3N0YXQzTGFiZWx9fScgfSwvKiBFTkRJRiAqLwogIF0uZmlsdGVyKEJvb2xlYW4pOwoKICAvLyDilIDilIAgQ1NTIOKUgOKUgAogIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwLXN0eWxlcycpKSB7CiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpOwogICAgc3R5bGUuaWQgPSAnYXAtc3R5bGVzJzsKICAgIHN0eWxlLnRleHRDb250ZW50ID0gWwogICAgICAnI2FwLXJvb3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luOjA7cGFkZGluZzowO30nLAogICAgICAnI2FwLXJvb3R7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtmb250LWZhbWlseToiUmFqZGhhbmkiLHNhbnMtc2VyaWY7Y29sb3I6e3tjb3JUZXh0b319O3BhZGRpbmc6NjBweCAzMnB4O3dpZHRoOjEwMCU7fScsCiAgICAgICcjYXAtcm9vdCAuYXAtaW5uZXJ7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxO21heC13aWR0aDoxMTYwcHg7bWFyZ2luOjAgYXV0bztkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciA0ODBweDtnYXA6MzJweCA0OHB4O2FsaWduLWl0ZW1zOnN0YXJ0O30nLAogICAgICAnI2FwLXJvb3QgLmFwLWxlZnR7Z3JpZC1jb2x1bW46MTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDoyOHB4O30nLAogICAgICAnI2FwLXJvb3QgLmFwLWxvZ28td3JhcHtkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MTBweDt3aWR0aDpmaXQtY29udGVudDtjdXJzb3I6ZGVmYXVsdDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMjVzIGVhc2U7fScsCiAgICAgICcjYXAtcm9vdCAuYXAtbG9nby13cmFwOmhvdmVye3RyYW5zZm9ybTpzY2FsZSgxLjA2KTt9JywKICAgICAgJyNhcC1yb290IC5hcC1sb2dvLWJvbHR7Zm9udC1zaXplOjMuMnJlbTtjb2xvcjp7e2NvclByaW5jaXBhbH19O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZpbHRlcjpkcm9wLXNoYWRvdygwIDAgM3B4IHt7Y29yUHJpbmNpcGFsfX02MCk7fScsCiAgICAgICcjYXAtcm9vdCAuYXAtbG9nby10ZXh0e2ZvbnQtZmFtaWx5OiJPcmJpdHJvbiIsc2Fucy1zZXJpZjtmb250LXNpemU6My4ycmVtO2ZvbnQtd2VpZ2h0OjkwMDtjb2xvcjp7e2NvckxvZ29UZXh0b319Oy13ZWJraXQtdGV4dC1maWxsLWNvbG9yOnt7Y29yTG9nb1RleHRvfX07dGV4dC1zaGFkb3c6MCAwIDRweCB7e2NvckxvZ29UZXh0b319ODAsMCAwIDEwcHgge3tjb3JQcmluY2lwYWx9fTUwLDAgMCAxOHB4IHt7Y29yUHJpbmNpcGFsRXNjdXJvfX00MDthbmltYXRpb246YXAtbmVvbi1mbGlja2VyIDRzIGVhc2UtaW4tb3V0IGluZmluaXRlO30nLAogICAgICAnQGtleWZyYW1lcyBhcC1uZW9uLWZsaWNrZXJ7MCUsMTAwJXt0ZXh0LXNoYWRvdzowIDAgNHB4IHt7Y29yTG9nb1RleHRvfX04MCwwIDAgMTBweCB7e2NvclByaW5jaXBhbH19NTAsMCAwIDE4cHgge3tjb3JQcmluY2lwYWxFc2N1cm99fTQwO301MCV7dGV4dC1zaGFkb3c6MCAwIDZweCB7e2NvckxvZ29UZXh0b319OTAsMCAwIDE0cHgge3tjb3JQcmluY2lwYWx9fTYwLDAgMCAyNHB4IHt7Y29yUHJpbmNpcGFsRXNjdXJvfX01MDt9ODUle3RleHQtc2hhZG93OjAgMCAycHgge3tjb3JQcmluY2lwYWx9fTQwLDAgMCA2cHgge3tjb3JQcmluY2lwYWxFc2N1cm99fTMwO319JywKICAgICAgJyNhcC1yb290IC5hcC10YWdsaW5le2ZvbnQtc2l6ZToxLjI1cmVtO2NvbG9yOnt7Y29yTXV0ZWR9fTtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LjA0ZW07b3BhY2l0eTowO2FuaW1hdGlvbjphcC1mYWRlVXAgLjdzIC4zcyBlYXNlIGZvcndhcmRzO30nLAogICAgICAnI2FwLXJvb3QgLmFwLWRlc2NyaXB0aW9ue2ZvbnQtc2l6ZToxLjA1cmVtO2xpbmUtaGVpZ2h0OjEuNzU7Y29sb3I6e3tjb3JEZXNjcmljYW99fTttYXgtd2lkdGg6NTIwcHg7b3BhY2l0eTowO2FuaW1hdGlvbjphcC1mYWRlVXAgLjdzIC41cyBlYXNlIGZvcndhcmRzO30nLAogICAgICAnI2FwLXJvb3QgLmFwLWRlc2NyaXB0aW9uIGVte2NvbG9yOnt7Y29yTG9nb1RleHRvfX07Zm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6NjAwO30nLAogICAgICAnI2FwLXJvb3QgLmFwLWJ1dHRvbnN7ZGlzcGxheTpmbGV4O2dhcDoxNnB4O2ZsZXgtd3JhcDp3cmFwO29wYWNpdHk6MDthbmltYXRpb246YXAtZmFkZVVwIC43cyAuN3MgZWFzZSBmb3J3YXJkczt9JywKICAgICAgJyNhcC1yb290IC5hcC1idG57ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjEwcHg7cGFkZGluZzoxNHB4IDI2cHg7Ym9yZGVyLXJhZGl1czoxMnB4O2ZvbnQtZmFtaWx5OiJSYWpkaGFuaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MXJlbTtmb250LXdlaWdodDo3MDA7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyxib3gtc2hhZG93IC4zcztsZXR0ZXItc3BhY2luZzouMDVlbTt0ZXh0LWRlY29yYXRpb246bm9uZTt9JywKICAgICAgJyNhcC1yb290IC5hcC1idG46OmFmdGVye2NvbnRlbnQ6IiI7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQ6MDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsI2ZmZmZmZjIwLHRyYW5zcGFyZW50KTtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IC4zczt9JywKICAgICAgJyNhcC1yb290IC5hcC1idG46aG92ZXI6OmFmdGVye29wYWNpdHk6MTt9JywKICAgICAgJyNhcC1yb290IC5hcC1idG46aG92ZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTNweCk7fScsCiAgICAgICcjYXAtcm9vdCAuYXAtYnRuOmFjdGl2ZXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9JywKICAgICAgJyNhcC1yb290IC5hcC1idG4tcHJpbWFyeXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcse3tjb3JQcmluY2lwYWxFc2N1cm99fSx7e2NvclByaW5jaXBhbH19KTtjb2xvcjojZmZmO2JveC1zaGFkb3c6MCA0cHggMjBweCB7e2NvclByaW5jaXBhbEVzY3Vyb319NjA7fScsCiAgICAgICcjYXAtcm9vdCAuYXAtYnRuLXByaW1hcnk6aG92ZXJ7Ym94LXNoYWRvdzowIDhweCAzMnB4IHt7Y29yUHJpbmNpcGFsfX04MDt9JywKICAgICAgJyNhcC1yb290IC5hcC1idG4tc2Vjb25kYXJ5e2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6e3tjb3JQcmluY2lwYWx9fTtib3JkZXI6MnB4IHNvbGlkIHt7Y29yQm9yZGFCdG59fTt9JywKICAgICAgJyNhcC1yb290IC5hcC1idG4tc2Vjb25kYXJ5OmhvdmVye2JveC1zaGFkb3c6MCAwIDAgNHB4IHt7Y29yUHJpbmNpcGFsRXNjdXJvfX0zMDtib3JkZXItY29sb3I6e3tjb3JMb2dvVGV4dG99fTt9JywKICAgICAgJyNhcC1yb290IC5hcC1zdGF0c3tkaXNwbGF5OmZsZXg7Z2FwOjQwcHg7cGFkZGluZy10b3A6OHB4O29wYWNpdHk6MDthbmltYXRpb246YXAtZmFkZVVwIC43cyAuOXMgZWFzZSBmb3J3YXJkczt9JywKICAgICAgJyNhcC1yb290IC5hcC1zdGF0LXZhbHVle2ZvbnQtZmFtaWx5OiJPcmJpdHJvbiIsc2Fucy1zZXJpZjtmb250LXNpemU6MS44cmVtO2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjp7e2NvclByaW5jaXBhbH19O3RleHQtc2hhZG93OjAgMCAyMHB4IHt7Y29yUHJpbmNpcGFsfX04MDt9JywKICAgICAgJyNhcC1yb290IC5hcC1zdGF0LWxhYmVse2ZvbnQtc2l6ZTouNzVyZW07Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOnt7Y29yTXV0ZWR9fTtsZXR0ZXItc3BhY2luZzouMTJlbTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bWFyZ2luLXRvcDoycHg7fScsCiAgICAgICcjYXAtcm9vdCAuYXAtY2FyZHMtZ3JpZHtncmlkLWNvbHVtbjoyO2dyaWQtcm93OjEvNDtkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnI7Z2FwOjE2cHg7b3BhY2l0eTowO2FuaW1hdGlvbjphcC1mYWRlSW4gLjhzIC40cyBlYXNlIGZvcndhcmRzO30nLAogICAgICAnI2FwLXJvb3QgLmFwLWNhcmR7YmFja2dyb3VuZDp7e2NvckNhcmRGdW5kb319O2JvcmRlcjoxcHggc29saWQge3tjb3JDYXJkQm9yZGF9fTtib3JkZXItcmFkaXVzOjIwcHg7cGFkZGluZzozMnB4IDIwcHggMjhweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MTRweDtjdXJzb3I6cG9pbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzIGN1YmljLWJlemllciguMzQsMS41NiwuNjQsMSksYm9yZGVyLWNvbG9yIC4zcyxib3gtc2hhZG93IC4zczt0ZXh0LWRlY29yYXRpb246bm9uZTt9JywKICAgICAgJyNhcC1yb290IC5hcC1jYXJkOjpiZWZvcmV7Y29udGVudDoiIjtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldDowO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZyx7e2NvclByaW5jaXBhbEVzY3Vyb319MTAsdHJhbnNwYXJlbnQpO29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgLjRzO30nLAogICAgICAnI2FwLXJvb3QgLmFwLWNhcmQ6aG92ZXI6OmJlZm9yZXtvcGFjaXR5OjE7fScsCiAgICAgICcjYXAtcm9vdCAuYXAtY2FyZDpob3Zlcnt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNnB4KSBzY2FsZSgxLjAyKTtib3JkZXItY29sb3I6e3tjb3JCb3JkYUJ0bn19O2JveC1zaGFkb3c6MCAxMnB4IDQwcHgge3tjb3JQcmluY2lwYWxFc2N1cm99fTMwLDAgMCAwIDFweCB7e2NvclByaW5jaXBhbEVzY3Vyb319NDA7fScsCiAgICAgICcjYXAtcm9vdCAuYXAtY2FyZC1pY29ue3dpZHRoOjU2cHg7aGVpZ2h0OjU2cHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO30nLAogICAgICAnI2FwLXJvb3QgLmFwLWNhcmQtaWNvbiBzdmd7d2lkdGg6MzZweDtoZWlnaHQ6MzZweDthbmltYXRpb246YXAtaWNvbi1wdWxzZSAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtmaWx0ZXI6ZHJvcC1zaGFkb3coMCAwIDhweCB7e2NvclByaW5jaXBhbH19ODApO30nLAogICAgICAnI2FwLXJvb3QgLmFwLWNhcmQ6bnRoLWNoaWxkKDEpIC5hcC1jYXJkLWljb24gc3Zne2FuaW1hdGlvbi1kZWxheTowczt9JywKICAgICAgJyNhcC1yb290IC5hcC1jYXJkOm50aC1jaGlsZCgyKSAuYXAtY2FyZC1pY29uIHN2Z3thbmltYXRpb24tZGVsYXk6LjVzO30nLAogICAgICAnI2FwLXJvb3QgLmFwLWNhcmQ6bnRoLWNoaWxkKDMpIC5hcC1jYXJkLWljb24gc3Zne2FuaW1hdGlvbi1kZWxheToxczt9JywKICAgICAgJyNhcC1yb290IC5hcC1jYXJkOm50aC1jaGlsZCg0KSAuYXAtY2FyZC1pY29uIHN2Z3thbmltYXRpb24tZGVsYXk6MS41czt9JywKICAgICAgJyNhcC1yb290IC5hcC1jYXJkOmhvdmVyIC5hcC1jYXJkLWljb24gc3Zne2FuaW1hdGlvbjphcC1pY29uLXNwaW4gLjZzIGN1YmljLWJlemllciguMzQsMS41NiwuNjQsMSkgZm9yd2FyZHM7fScsCiAgICAgICcjYXAtcm9vdCAuYXAtY2FyZC1pY29uOjphZnRlcntjb250ZW50OiIiO3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjA7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyOjEuNXB4IHNvbGlkIHt7Y29yUHJpbmNpcGFsRXNjdXJvfX01MDthbmltYXRpb246YXAtb3JiaXQgNHMgbGluZWFyIGluZmluaXRlO29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzO30nLAogICAgICAnI2FwLXJvb3QgLmFwLWNhcmQ6aG92ZXIgLmFwLWNhcmQtaWNvbjo6YWZ0ZXJ7b3BhY2l0eToxO30nLAogICAgICAnI2FwLXJvb3QgLmFwLWNhcmQtdGl0bGV7Zm9udC1mYW1pbHk6Ik9yYml0cm9uIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZTouOTVyZW07Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXI7fScsCiAgICAgICcjYXAtcm9vdCAuYXAtY2FyZC1kZXNje2ZvbnQtc2l6ZTouODVyZW07Y29sb3I6e3tjb3JNdXRlZH19O3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjEuNDt9JywKICAgICAgJ0BrZXlmcmFtZXMgYXAtaWNvbi1wdWxzZXswJSwxMDAle3RyYW5zZm9ybTpzY2FsZSgxKTtmaWx0ZXI6ZHJvcC1zaGFkb3coMCAwIDhweCB7e2NvclByaW5jaXBhbH19ODApO301MCV7dHJhbnNmb3JtOnNjYWxlKDEuMTIpO2ZpbHRlcjpkcm9wLXNoYWRvdygwIDAgMThweCB7e2NvckxvZ29UZXh0b319Y2MpO319JywKICAgICAgJ0BrZXlmcmFtZXMgYXAtaWNvbi1zcGluezAle3RyYW5zZm9ybTpzY2FsZSgxKSByb3RhdGUoMGRlZyk7fTQwJXt0cmFuc2Zvcm06c2NhbGUoMS4zKSByb3RhdGUoLTE1ZGVnKTt9NzAle3RyYW5zZm9ybTpzY2FsZSguOSkgcm90YXRlKDEwZGVnKTt9MTAwJXt0cmFuc2Zvcm06c2NhbGUoMS4xKSByb3RhdGUoMGRlZyk7fX0nLAogICAgICAnQGtleWZyYW1lcyBhcC1vcmJpdHt0b3t0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7fX0nLAogICAgICAnQGtleWZyYW1lcyBhcC1yaXBwbGV7dG97dHJhbnNmb3JtOnNjYWxlKDUwKTtvcGFjaXR5OjA7fX0nLAogICAgICAnQGtleWZyYW1lcyBhcC1mYWRlVXB7ZnJvbXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjBweCk7fXRve29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9fScsCiAgICAgICdAa2V5ZnJhbWVzIGFwLWZhZGVJbntmcm9te29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUoLjk2KTt9dG97b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZSgxKTt9fScsCiAgICAgICdAbWVkaWEobWF4LXdpZHRoOjg2MHB4KXsjYXAtcm9vdCAuYXAtaW5uZXJ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjt9I2FwLXJvb3QgLmFwLWNhcmRzLWdyaWR7Z3JpZC1jb2x1bW46MTtncmlkLXJvdzphdXRvO319JwogICAgXS5qb2luKCcnKTsKICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpOwogIH0KCiAgLy8g4pSA4pSAIEZPTlRFUyDilIDilIAKICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbaHJlZio9Ik9yYml0cm9uIl0nKSkgewogICAgdmFyIGZvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7CiAgICBmb250LnJlbCA9ICdzdHlsZXNoZWV0JzsKICAgIGZvbnQuaHJlZiA9ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9yYml0cm9uOndnaHRANzAwOzkwMCZmYW1pbHk9UmFqZGhhbmk6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcCc7CiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZvbnQpOwogIH0KCiAgLy8g4pSA4pSAIEJVSUxEIOKUgOKUgAogIGZ1bmN0aW9uIGJ1aWxkQ2FyZChkYXRhKSB7CiAgICB2YXIgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTsKICAgIGNhcmQuaHJlZiA9IGRhdGEubGluazsKICAgIGNhcmQudGFyZ2V0ID0gJ19ibGFuayc7CiAgICBjYXJkLmNsYXNzTmFtZSA9ICdhcC1jYXJkJzsKICAgIGNhcmQuaW5uZXJIVE1MID0KICAgICAgJzxkaXYgY2xhc3M9ImFwLWNhcmQtaWNvbiI+JyArIGRhdGEuaWNvbiArICc8L2Rpdj4nICsKICAgICAgJzxkaXYgY2xhc3M9ImFwLWNhcmQtdGl0bGUiPicgKyBkYXRhLnRpdGxlICsgJzwvZGl2PicgKwogICAgICAnPGRpdiBjbGFzcz0iYXAtY2FyZC1kZXNjIj4nICArIGRhdGEuZGVzYyAgKyAnPC9kaXY+JzsKICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7CiAgICAgIHZhciByID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpOwogICAgICB2YXIgcmVjdCA9IGNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7CiAgICAgIHIuc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOnt7Y29yUHJpbmNpcGFsfX0zMDtwb2ludGVyLWV2ZW50czpub25lO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7bGVmdDonICsgKGUuY2xpZW50WCAtIHJlY3QubGVmdCAtIDUpICsgJ3B4O3RvcDonICsgKGUuY2xpZW50WSAtIHJlY3QudG9wIC0gNSkgKyAncHg7YW5pbWF0aW9uOmFwLXJpcHBsZSAwLjZzIGVhc2UgZm9yd2FyZHM7JzsKICAgICAgY2FyZC5hcHBlbmRDaGlsZChyKTsKICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgci5yZW1vdmUoKTsgfSwgNzAwKTsKICAgIH0pOwogICAgcmV0dXJuIGNhcmQ7CiAgfQoKICB2YXIgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogIHJvb3QuaWQgPSAnYXAtcm9vdCc7CgogIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogIGlubmVyLmNsYXNzTmFtZSA9ICdhcC1pbm5lcic7CgogIC8vIExlZnQgY29sdW1uCiAgdmFyIGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICBsZWZ0LmNsYXNzTmFtZSA9ICdhcC1sZWZ0JzsKCiAgLy8gTG9nbwogIHZhciBsb2dvV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogIGxvZ29XcmFwLmNsYXNzTmFtZSA9ICdhcC1sb2dvLXdyYXAnOwogIGxvZ29XcmFwLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz0iYXAtbG9nby1ib2x0Ij57e2xvZ29FbW9qaX19PC9zcGFuPjxzcGFuIGNsYXNzPSJhcC1sb2dvLXRleHQiPnt7bm9tZUxvamF9fTwvc3Bhbj4nOwogIGxlZnQuYXBwZW5kQ2hpbGQobG9nb1dyYXApOwoKICAvLyBUYWdsaW5lCiAgdmFyIHRhZ2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7CiAgdGFnbGluZS5jbGFzc05hbWUgPSAnYXAtdGFnbGluZSc7CiAgdGFnbGluZS50ZXh0Q29udGVudCA9ICd7e3RhZ2xpbmV9fSc7CiAgbGVmdC5hcHBlbmRDaGlsZCh0YWdsaW5lKTsKCiAgLy8gRGVzY3JpcHRpb24KICB2YXIgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsKICBkZXNjLmNsYXNzTmFtZSA9ICdhcC1kZXNjcmlwdGlvbic7CiAgZGVzYy5pbm5lckhUTUwgPSAne3tkZXNjcmljYW99fSc7CiAgbGVmdC5hcHBlbmRDaGlsZChkZXNjKTsKCiAgLy8gQnV0dG9ucwogIHZhciBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgYnRucy5jbGFzc05hbWUgPSAnYXAtYnV0dG9ucyc7CgogIC8qIElGOmJ0bjFMaW5rICovCiAgdmFyIGIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpOwogIGIxLmhyZWYgPSAne3tidG4xTGlua319JzsgYjEudGFyZ2V0ID0gJ19ibGFuayc7CiAgYjEuY2xhc3NOYW1lID0gJ2FwLWJ0biBhcC1idG4tcHJpbWFyeSc7CiAgYjEuaW5uZXJIVE1MID0gJ3t7YnRuMUljb25lfX17e2J0bjFUZXh0b319JzsKICBidG5zLmFwcGVuZENoaWxkKGIxKTsKICAvKiBFTkRJRiAqLwoKICAvKiBJRjpidG4yTGluayAqLwogIHZhciBiMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTsKICBiMi5ocmVmID0gJ3t7YnRuMkxpbmt9fSc7IGIyLnRhcmdldCA9ICdfYmxhbmsnOwogIGIyLmNsYXNzTmFtZSA9ICdhcC1idG4gYXAtYnRuLXNlY29uZGFyeSc7CiAgYjIuaW5uZXJIVE1MID0gJ3t7YnRuMkljb25lfX17e2J0bjJUZXh0b319JzsKICBidG5zLmFwcGVuZENoaWxkKGIyKTsKICAvKiBFTkRJRiAqLwoKICBsZWZ0LmFwcGVuZENoaWxkKGJ0bnMpOwoKICAvLyBTdGF0cwogIGlmIChBUF9TVEFUUy5sZW5ndGgpIHsKICAgIHZhciBzdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgc3RhdHMuY2xhc3NOYW1lID0gJ2FwLXN0YXRzJzsKICAgIEFQX1NUQVRTLmZvckVhY2goZnVuY3Rpb24ocykgewogICAgICB2YXIgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgICBpdGVtLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPSJhcC1zdGF0LXZhbHVlIj4nICsgcy52YWx1ZSArICc8L2Rpdj48ZGl2IGNsYXNzPSJhcC1zdGF0LWxhYmVsIj4nICsgcy5sYWJlbCArICc8L2Rpdj4nOwogICAgICBzdGF0cy5hcHBlbmRDaGlsZChpdGVtKTsKICAgIH0pOwogICAgbGVmdC5hcHBlbmRDaGlsZChzdGF0cyk7CiAgfQoKICBpbm5lci5hcHBlbmRDaGlsZChsZWZ0KTsKCiAgLy8gQ2FyZHMgZ3JpZAogIHZhciBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgZ3JpZC5jbGFzc05hbWUgPSAnYXAtY2FyZHMtZ3JpZCc7CiAgQVBfQ0FSRFMuZm9yRWFjaChmdW5jdGlvbihjKSB7IGdyaWQuYXBwZW5kQ2hpbGQoYnVpbGRDYXJkKGMpKTsgfSk7CiAgaW5uZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7CgogIHJvb3QuYXBwZW5kQ2hpbGQoaW5uZXIpOwoKICAvLyBJbnNlcnQgYWZ0ZXIgaGVhZGVyCiAgdmFyIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpIHx8CiAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpICAgIHx8CiAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcyo9ImhlYWRlciJdJykgfHwKICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkKj0iaGVhZGVyIl0nKTsKICBpZiAoaGVhZGVyICYmIGhlYWRlci5wYXJlbnROb2RlKSB7CiAgICBoZWFkZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocm9vdCwgaGVhZGVyLm5leHRTaWJsaW5nKTsKICB9IGVsc2UgewogICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUocm9vdCwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTsKICB9Cn0pKCk7';

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

  var corP  = v.corPrincipal       || '#3b82f6';
  var corPE = v.corPrincipalEscuro || '#1d4ed8';
  var corL  = v.corLogoTexto       || '#60a5fa';
  var corT  = v.corTexto           || '#e2e8f0';
  var corM  = v.corMuted           || '#94a3b8';
  var corD  = v.corDescricao       || '#cbd5e1';
  var corCF = v.corCardFundo       || 'rgba(15,23,42,0.7)';
  var corCB = v.corCardBorda       || 'rgba(59,130,246,0.25)';
  var corBB = v.corBordaBtn        || '#3b82f6';

  var nome    = v.nomeLoja  || 'Minha Loja';
  var emoji   = v.logoEmoji || '⚡';
  var tagline = v.tagline   || 'Sua loja digital de confiança!';
  var desc    = v.descricao || 'Preços acessíveis, entrega rápida e total segurança!';
  var btn1T   = v.btn1Texto || 'Suporte';
  var btn1I   = v.btn1Icone || '💬';
  var btn2T   = v.btn2Texto || 'Comunidade';
  var btn2I   = v.btn2Icone || '👥';

  var cards = [];
  for (var i = 1; i <= 4; i++) {
    var t = v['card' + i + 'Titulo'];
    cards.push({
      title: t || 'Card ' + i,
      desc:  v['card' + i + 'Desc'] || ''
    });
  }

  var stats = [];
  for (var j = 1; j <= 3; j++) {
    var sv = v['stat' + j + 'Valor'];
    if (sv) stats.push({ value: sv, label: v['stat' + j + 'Label'] || '' });
  }

  // SVGs simples para os 4 cards (carrinho, headset, sacola, aperto de mão)
  var svgs = [
    '<svg viewBox="0 0 24 24" fill="currentColor" style="width:36px;height:36px;color:' + corP + ';"><path d="M7 4H3v2h2.2l1.8 7.2A2 2 0 0 0 9 15h8a2 2 0 0 0 1.94-1.5L20.7 7H8.1l-.4-1.6A2 2 0 0 0 7 4zm2 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 0a2 2 0 1 0 .001 4A2 2 0 0 0 17 17z"/></svg>',
    '<svg viewBox="0 0 24 24" fill="currentColor" style="width:36px;height:36px;color:' + corP + ';"><path d="M20 10.5A8.5 8.5 0 0 0 3.5 10.5v.5H2v2h1v.5a2.5 2.5 0 0 0 5 0V11h-1.5v-.5a5.5 5.5 0 0 1 11 0V11H16v2.5a2.5 2.5 0 0 0 5 0V13h1v-2h-2v-.5z"/></svg>',
    '<svg viewBox="0 0 24 24" fill="currentColor" style="width:36px;height:36px;color:' + corP + ';"><path d="M19 6H17.9A6 6 0 0 0 6.1 6H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-7-2a4 4 0 0 1 3.9 2H8.1A4 4 0 0 1 12 4zm0 12l-5-5 1.4-1.4L12 13.2l6.6-6.6L20 8z"/></svg>',
    '<svg viewBox="0 0 24 24" fill="currentColor" style="width:36px;height:36px;color:' + corP + ';"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>'
  ];

  var cardsHTML = cards.map(function(c, idx) {
    return '<div style="'
      + 'background:' + corCF + ';'
      + 'border:1px solid ' + corCB + ';'
      + 'border-radius:20px;'
      + 'padding:32px 16px 24px;'
      + 'display:flex;flex-direction:column;align-items:center;gap:14px;text-align:center;'
      + 'backdrop-filter:blur(12px);'
      + 'box-shadow:0 4px 24px rgba(0,0,0,0.3);'
      + '">'
      + '<div style="filter:drop-shadow(0 0 8px ' + corP + '80);">' + svgs[idx] + '</div>'
      + '<div style="font-family:Orbitron,sans-serif;font-size:.85rem;font-weight:700;color:#fff;">' + c.title + '</div>'
      + '<div style="font-size:.78rem;color:' + corM + ';line-height:1.4;">' + c.desc + '</div>'
      + '</div>';
  }).join('');

  var statsHTML = stats.map(function(s) {
    return '<div>'
      + '<div style="font-family:Orbitron,sans-serif;font-size:1.5rem;font-weight:700;color:' + corP + ';text-shadow:0 0 16px ' + corP + '80;">' + s.value + '</div>'
      + '<div style="font-size:.68rem;color:' + corM + ';text-transform:uppercase;letter-spacing:.12em;margin-top:2px;">' + s.label + '</div>'
      + '</div>';
  }).join('');

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;600&display=swap" rel="stylesheet">'
    + '<style>'
    + '*{box-sizing:border-box;margin:0;padding:0;}'
    + 'body{'
      + 'background:linear-gradient(135deg,#020817 0%,#0f172a 50%,#020817 100%);'
      + 'font-family:Rajdhani,sans-serif;color:' + corT + ';'
      + 'min-height:520px;padding:36px 32px;'
    + '}'
    + '.wrap{display:grid;grid-template-columns:1fr 380px;gap:32px 48px;max-width:960px;margin:0 auto;align-items:start;}'
    + '.left{display:flex;flex-direction:column;gap:22px;}'
    + '.logo{display:inline-flex;align-items:center;gap:10px;}'
    + '.logo-emoji{font-size:2.8rem;color:' + corP + ';filter:drop-shadow(0 0 6px ' + corP + ');}'
    + '.logo-text{font-family:Orbitron,sans-serif;font-size:2.4rem;font-weight:900;color:' + corL + ';text-shadow:0 0 8px ' + corL + '80,0 0 20px ' + corP + '50;}'
    + '.tagline{font-size:1.05rem;color:' + corM + ';}'
    + '.desc{font-size:.95rem;line-height:1.7;color:' + corD + ';max-width:500px;}'
    + '.btns{display:flex;gap:14px;flex-wrap:wrap;}'
    + '.btn1{display:inline-flex;align-items:center;gap:8px;padding:13px 24px;border-radius:12px;background:linear-gradient(135deg,' + corPE + ',' + corP + ');color:#fff;font-family:Rajdhani,sans-serif;font-size:.95rem;font-weight:700;border:none;cursor:pointer;box-shadow:0 4px 18px ' + corPE + '60;}'
    + '.btn2{display:inline-flex;align-items:center;gap:8px;padding:13px 24px;border-radius:12px;background:transparent;color:' + corP + ';font-family:Rajdhani,sans-serif;font-size:.95rem;font-weight:700;border:2px solid ' + corBB + ';cursor:pointer;}'
    + '.stats{display:flex;gap:36px;padding-top:4px;}'
    + '.cards{display:grid;grid-template-columns:1fr 1fr;gap:14px;}'
    + '</style>'
    + '</head><body>'
    + '<div class="wrap">'
      + '<div class="left">'
        + '<div class="logo"><span class="logo-emoji">' + emoji + '</span><span class="logo-text">' + nome + '</span></div>'
        + '<p class="tagline">' + tagline + '</p>'
        + '<p class="desc">' + desc + '</p>'
        + '<div class="btns">'
          + '<button class="btn1">' + btn1I + ' ' + btn1T + '</button>'
          + '<button class="btn2">' + btn2I + ' ' + btn2T + '</button>'
        + '</div>'
        + (stats.length ? '<div class="stats">' + statsHTML + '</div>' : '')
      + '</div>'
      + '<div class="cards">' + cardsHTML + '</div>'
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