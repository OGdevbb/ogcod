// =============================================================
//  OG! — banner-texto.js
// =============================================================


// ╔═════════════════════════════════════════════════════════╗
// ║  ✏️  CONFIGURAÇÃO — edite aqui para customizar          ║
// ╚═════════════════════════════════════════════════════════╝

const COMPONENT = {
    title: 'Cards de Produto — Premium',
    description: 'Estilo premium com efeito glassmorphism, brilho e gradiente. Personaliza cor, fonte, bordas e botão dos cards da loja.',
    tags: ['Card', 'Produto', 'CSS', 'JS', 'Grátis'],

    fields: [
        { id: 'corPrimaria', label: 'Cor Primária (Gradiente)', type: 'color', default: '#cc34eb' },
        { id: 'corSecundaria', label: 'Cor Secundária (Gradiente)', type: 'color', default: '#8c28ff' },
        { id: 'corFundo1', label: 'Cor de Fundo do Card (Clara)', type: 'text', default: 'rgba(14, 10, 22, 0.92)', placeholder: 'Ex: rgba(14, 10, 22, 0.92)' },
        { id: 'corFundo2', label: 'Cor de Fundo do Card (Escura)', type: 'text', default: 'rgba(9, 7, 14, 0.95)', placeholder: 'Ex: rgba(9, 7, 14, 0.95)' },
        { id: 'corTexto', label: 'Cor do Texto Principal', type: 'text', default: 'rgba(255,255,255,0.92)', placeholder: 'Ex: rgba(255,255,255,0.92)' },
        { id: 'corTextoSecundario', label: 'Cor do Texto Secundário', type: 'text', default: 'rgba(255,255,255,0.70)', placeholder: 'Ex: rgba(255,255,255,0.70)' },
        { id: 'fonte', label: 'Fonte', type: 'text', default: 'Inter', placeholder: 'Ex: Inter, Poppins, Roboto' },
        { id: 'bordaRadius', label: 'Borda do Card (border-radius)', type: 'text', default: '14px', placeholder: 'Ex: 14px' },
        { id: 'bordaBotao', label: 'Borda do Botão (border-radius)', type: 'text', default: '12px', placeholder: 'Ex: 12px' },
        { id: 'paddingBotao', label: 'Padding do Botão', type: 'text', default: '11px 22px', placeholder: 'Ex: 11px 22px' },
        { id: 'tamanhoBotao', label: 'Tamanho da Fonte do Botão', type: 'text', default: '12px', placeholder: 'Ex: 12px' },
        { id: 'tamanhoPrecoPrincipal', label: 'Tamanho do Preço Principal', type: 'text', default: '1.65rem', placeholder: 'Ex: 1.65rem' },
        { id: 'hoverElevacao', label: 'Elevação no Hover', type: 'text', default: '-4px', placeholder: 'Ex: -4px' },
    ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64 = '';
const BASE_JS_B64 = 'ZnVuY3Rpb24gaW5qZXRhckNzc1BlcnNvbmFsaXphZG8oKSB7CiAgY29uc3QgZXN0aWxvQW50aWdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldS1lc3RpbG8tcGVyc29uYWxpemFkbycpOwogIGlmIChlc3RpbG9BbnRpZ28pIGVzdGlsb0FudGlnby5yZW1vdmUoKTsKCiAgY29uc3QgZWxlbWVudG9TdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7CiAgZWxlbWVudG9TdHlsZS5pZCA9ICdtZXUtZXN0aWxvLXBlcnNvbmFsaXphZG8nOwoKICBjb25zdCBjc3NDb250ZW50ID0gYAogICAgOnJvb3QgewogICAgICAtLXByaW1hcnktcHVycGxlOiB7e2NvclByaW1hcmlhfX07CiAgICAgIC0tc2Vjb25kYXJ5LXB1cnBsZToge3tjb3JTZWN1bmRhcmlhfX07CiAgICAgIC0tZGVlcC1iZy0xOiB7e2NvckZ1bmRvMX19OwogICAgICAtLWRlZXAtYmctMjoge3tjb3JGdW5kbzJ9fTsKICAgICAgLS1nbGFzcy1iZzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKTsKICAgICAgLS1ib3JkZXItc3VidGxlOiByZ2JhKDIwNCwgNTIsIDIzNSwgMC4yMik7CiAgICAgIC0tdGV4dC1tYWluOiB7e2NvclRleHRvfX07CiAgICAgIC0tdGV4dC1zZWNvbmRhcnk6IHt7Y29yVGV4dG9TZWN1bmRhcmlvfX07CiAgICAgIC0tdHJhbnNpdGlvbi1zbW9vdGg6IGFsbCAyMjBtcyBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSk7CiAgICB9CgogICAgLnByb2R1Y3RfY2FyZCB7CiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50OwogICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7CiAgICAgIGZvbnQtZmFtaWx5OiAne3tmb250ZX19Jywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7CiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pICFpbXBvcnRhbnQ7CiAgICAgIGJvcmRlci1yYWRpdXM6IHt7Ym9yZGFSYWRpdXN9fSAhaW1wb3J0YW50OwogICAgICBiYWNrZ3JvdW5kOgogICAgICAgIHJhZGlhbC1ncmFkaWVudCgxMjAlIDE0MCUgYXQgMTAlIDAlLCByZ2JhKDIwNCwgNTIsIDIzNSwgMC4xOCkgMCUsIHRyYW5zcGFyZW50IDU1JSksCiAgICAgICAgcmFkaWFsLWdyYWRpZW50KDEyMCUgMTQwJSBhdCA5MCUgMCUsIHJnYmEoMTQwLCA0MCwgMjU1LCAwLjEyKSAwJSwgdHJhbnNwYXJlbnQgNTUlKSwKICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1kZWVwLWJnLTEpIDAlLCB2YXIoLS1kZWVwLWJnLTIpIDEwMCUpICFpbXBvcnRhbnQ7CiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjA0LCA1MiwgMjM1LCAwLjE4KSAhaW1wb3J0YW50OwogICAgICBib3gtc2hhZG93OgogICAgICAgIDAgMTBweCAyMnB4IHJnYmEoMCwwLDAsMC40MCksCiAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpLAogICAgICAgIDAgMCAwIDFweCByZ2JhKDIwNCwgNTIsIDIzNSwgMC4wOCkgIWltcG9ydGFudDsKICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE0cHgpICFpbXBvcnRhbnQ7CiAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE0cHgpICFpbXBvcnRhbnQ7CiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMjBtcyBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSksCiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3cgMjIwbXMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpLAogICAgICAgICAgICAgICAgICBib3JkZXItY29sb3IgMjIwbXMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpICFpbXBvcnRhbnQ7CiAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50OwogICAgfQoKICAgIC5wcm9kdWN0X2NhcmQgKiB7IGZvbnQtZmFtaWx5OiBpbmhlcml0ICFpbXBvcnRhbnQ7IH0KCiAgICAucHJvZHVjdF9jYXJkOjpiZWZvcmUgewogICAgICBjb250ZW50OiAiIiAhaW1wb3J0YW50OwogICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDsKICAgICAgdG9wOiAtNjAlICFpbXBvcnRhbnQ7CiAgICAgIGxlZnQ6IC02MCUgIWltcG9ydGFudDsKICAgICAgd2lkdGg6IDIyMCUgIWltcG9ydGFudDsKICAgICAgaGVpZ2h0OiAyMjAlICFpbXBvcnRhbnQ7CiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgKICAgICAgICAxMTVkZWcsCiAgICAgICAgcmdiYSgyNTUsMjU1LDI1NSwwLjAwKSAwJSwKICAgICAgICByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpIDIyJSwKICAgICAgICByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIDMwJSwKICAgICAgICByZ2JhKDI1NSwyNTUsMjU1LDAuMDApIDQ1JSwKICAgICAgICByZ2JhKDI1NSwyNTUsMjU1LDAuMDApIDEwMCUKICAgICAgKSAhaW1wb3J0YW50OwogICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE4JSkgdHJhbnNsYXRlWSgtOCUpIHJvdGF0ZSgwZGVnKSAhaW1wb3J0YW50OwogICAgICBvcGFjaXR5OiAwLjYwICFpbXBvcnRhbnQ7CiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7CiAgICAgIGZpbHRlcjogYmx1cigwLjJweCkgIWltcG9ydGFudDsKICAgIH0KCiAgICAucHJvZHVjdF9jYXJkOjphZnRlciB7CiAgICAgIGNvbnRlbnQ6ICIiICFpbXBvcnRhbnQ7CiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50OwogICAgICBpbnNldDogMCAhaW1wb3J0YW50OwogICAgICBib3JkZXItcmFkaXVzOiB7e2JvcmRhUmFkaXVzfX0gIWltcG9ydGFudDsKICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDsKICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCkgIWltcG9ydGFudDsKICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50OwogICAgfQoKICAgIC5wcm9kdWN0X2NhcmQ6aG92ZXIgewogICAgICBib3JkZXItY29sb3I6IHJnYmEoMjA0LCA1MiwgMjM1LCAwLjM0KSAhaW1wb3J0YW50OwogICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoe3tob3ZlckVsZXZhY2FvfX0pICFpbXBvcnRhbnQ7CiAgICAgIGJveC1zaGFkb3c6CiAgICAgICAgMCAxOHB4IDQwcHggcmdiYSgwLDAsMCwwLjQ2KSwKICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4wNyksCiAgICAgICAgMCAwIDAgMXB4IHJnYmEoMjA0LCA1MiwgMjM1LCAwLjEwKSwKICAgICAgICAwIDAgMjhweCByZ2JhKDIwNCwgNTIsIDIzNSwgMC4xMCkgIWltcG9ydGFudDsKICAgIH0KCiAgICAucHJvZHVjdF9jYXJkOmhvdmVyOjpiZWZvcmUgewogICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKSB0cmFuc2xhdGVZKDYlKSByb3RhdGUoMGRlZykgIWltcG9ydGFudDsKICAgICAgb3BhY2l0eTogMC43NSAhaW1wb3J0YW50OwogICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNjUwbXMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpLAogICAgICAgICAgICAgICAgICBvcGFjaXR5IDM1MG1zIGN1YmljLWJlemllcigwLjIsIDAuOCwgMC4yLCAxKSAhaW1wb3J0YW50OwogICAgfQoKICAgIC5wcm9kdWN0X2NhcmQgLnByb2R1Y3RfaW5mbyB7CiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDsKICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50OwogICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7CiAgICAgIGdhcDogNnB4ICFpbXBvcnRhbnQ7CiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7CiAgICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7CiAgICB9CgogICAgLnByb2R1Y3RfY2FyZCAucHJvZHVjdF9pbmZvIGRpdltjbGFzcyo9Ii0xMSJdIHsKICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41NSkgIWltcG9ydGFudDsKICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggIWltcG9ydGFudDsKICAgICAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDsKICAgICAgZm9udC13ZWlnaHQ6IDQ1MCAhaW1wb3J0YW50OwogICAgICBvcGFjaXR5OiAwLjkgIWltcG9ydGFudDsKICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7CiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDsKICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsKICAgIH0KCiAgICAucHJvZHVjdF9jYXJkIC5wcm9kdWN0X2luZm8gZGl2W2NsYXNzKj0iLTEyIl0gewogICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB7e2NvclByaW1hcmlhfX0sIHt7Y29yU2VjdW5kYXJpYX19KSAhaW1wb3J0YW50OwogICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjk2KSAhaW1wb3J0YW50OwogICAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDsKICAgICAgZm9udC1zaXplOiAwLjc1cmVtICFpbXBvcnRhbnQ7CiAgICAgIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDsKICAgICAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDsKICAgICAgbWFyZ2luLWxlZnQ6IDE0cHggIWltcG9ydGFudDsKICAgICAgYm94LXNoYWRvdzoKICAgICAgICAwIDEwcHggMjJweCByZ2JhKDAsMCwwLDAuMjUpLAogICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjE0KSAhaW1wb3J0YW50OwogICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDsKICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50OwogICAgICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50OwogICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMTApICFpbXBvcnRhbnQ7CiAgICB9CgogICAgLnByb2R1Y3RfY2FyZCAucHJvZHVjdF9pbmZvIGRpdltjbGFzcyo9Ii0xMiJdOjphZnRlciB7IGNvbnRlbnQ6ICIgT0ZGIjsgfQoKICAgIC5wcm9kdWN0X2NhcmQgLnByb2R1Y3RfaW5mbyBkaXZbY2xhc3MqPSItMjEiXSB7CiAgICAgIGZvbnQtc2l6ZToge3t0YW1hbmhvUHJlY29QcmluY2lwYWx9fSAhaW1wb3J0YW50OwogICAgICBmb250LXdlaWdodDogODUwICFpbXBvcnRhbnQ7CiAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOTYpICFpbXBvcnRhbnQ7CiAgICAgIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDsKICAgICAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7CiAgICAgIGxpbmUtaGVpZ2h0OiAxLjA4ICFpbXBvcnRhbnQ7CiAgICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwwLDAsMC4zNSkgIWltcG9ydGFudDsKICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsKICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4ICFpbXBvcnRhbnQ7CiAgICB9CgogICAgLnByb2R1Y3RfY2FyZCAucHJvZHVjdF9pbmZvID4gc3BhbltjbGFzcyo9Ii0xNyJdIHsKICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KSAhaW1wb3J0YW50OwogICAgICBmb250LXNpemU6IDAuODZyZW0gIWltcG9ydGFudDsKICAgICAgbWFyZ2luLXRvcDogMnB4ICFpbXBvcnRhbnQ7CiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7CiAgICB9CgogICAgLnByb2R1Y3RfY2FyZCBidXR0b24gewogICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB7e2NvclByaW1hcmlhfX0sIHt7Y29yU2VjdW5kYXJpYX19KSAhaW1wb3J0YW50OwogICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpICFpbXBvcnRhbnQ7CiAgICAgIGJvcmRlci1yYWRpdXM6IHt7Ym9yZGFCb3Rhb319ICFpbXBvcnRhbnQ7CiAgICAgIHBhZGRpbmc6IHt7cGFkZGluZ0JvdGFvfX0gIWltcG9ydGFudDsKICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45NikgIWltcG9ydGFudDsKICAgICAgZm9udC13ZWlnaHQ6IDc1MCAhaW1wb3J0YW50OwogICAgICBmb250LXNpemU6IHt7dGFtYW5ob0JvdGFvfX0gIWltcG9ydGFudDsKICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4ICFpbXBvcnRhbnQ7CiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDsKICAgICAgYm94LXNoYWRvdzoKICAgICAgICAwIDEycHggMjhweCByZ2JhKDAsMCwwLDAuMzApLAogICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjE0KSAhaW1wb3J0YW50OwogICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTgwbXMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpLAogICAgICAgICAgICAgICAgICBmaWx0ZXIgMTgwbXMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpLAogICAgICAgICAgICAgICAgICBib3gtc2hhZG93IDE4MG1zIGN1YmljLWJlemllcigwLjIsIDAuOCwgMC4yLCAxKSAhaW1wb3J0YW50OwogICAgICBtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7CiAgICB9CgogICAgLnByb2R1Y3RfY2FyZCBidXR0b246aG92ZXIsCiAgICAucHJvZHVjdF9jYXJkIGJ1dHRvbjphY3RpdmUgewogICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wNikgIWltcG9ydGFudDsKICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpICFpbXBvcnRhbnQ7CiAgICAgIGJveC1zaGFkb3c6CiAgICAgICAgMCAxNnB4IDM0cHggcmdiYSgwLDAsMCwwLjM0KSwKICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4xNikgIWltcG9ydGFudDsKICAgIH0KCiAgICAucHJvZHVjdF9jYXJkIC5zYy1kMjg2YzI3ZC0yMS5rQnN0QUwsCiAgICAucHJvZHVjdF9jYXJkIC5zYy1kMjg2YzI3ZC0xNy5nVnVqY0osCiAgICAucHJvZHVjdF9jYXJkIC5zYy1kMjg2YzI3ZC0yMi5nelRCQnksCiAgICAucHJvZHVjdF9jYXJkIC5zYy0yOTY0MTdkOC0wLmhWenZQRywKICAgIC5wcm9kdWN0X2NhcmQgLnNjLWQyODZjMjdkLTgua1lTRk5LLAogICAgLnByb2R1Y3RfY2FyZCAuc2MtMjg0YTFjZmMtMTcsCiAgICAucHJvZHVjdF9jYXJkIC5zYy0yODRhMWNmYy0yMiB7CiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7CiAgICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7CiAgICB9CgogICAgLnByb2R1Y3RfY2FyZCBpbWcgewogICAgICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsICFpbXBvcnRhbnQ7CiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDsKICAgIH0KCiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHsKICAgICAgLnByb2R1Y3RfY2FyZCBidXR0b24geyB3aWR0aDogMTAwJTsgfQogICAgfQoKICAgIEBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7CiAgICAgIC5wcm9kdWN0X2NhcmQsCiAgICAgIC5wcm9kdWN0X2NhcmQ6OmJlZm9yZSwKICAgICAgLnByb2R1Y3RfY2FyZCBidXR0b24geyB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7IH0KICAgICAgLnByb2R1Y3RfY2FyZDpob3ZlciB7IHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50OyB9CiAgICB9CiAgYDsKCiAgZWxlbWVudG9TdHlsZS50ZXh0Q29udGVudCA9IGNzc0NvbnRlbnQ7CiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbGVtZW50b1N0eWxlKTsKICBjb25zb2xlLmxvZygnQ2FyZCBwcmVtaXVtIGFwbGljYWRvIHBvciBPRyEnKTsKfQoKaW5qZXRhckNzc1BlcnNvbmFsaXphZG8oKTs=';


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
    var js = process(BASE_JS, v);
    var box = document.getElementById('previewBox');

    // Extrai o cssContent de dentro do JS decodificado para mostrar no preview
    // Como o JS injeta CSS via JS, construímos o CSS direto para o preview
    var c1 = v.corPrimaria || '#cc34eb';
    var c2 = v.corSecundaria || '#8c28ff';
    var bg1 = v.corFundo1 || 'rgba(14,10,22,0.92)';
    var bg2 = v.corFundo2 || 'rgba(9,7,14,0.95)';
    var ct = v.corTexto || 'rgba(255,255,255,0.92)';
    var cts = v.corTextoSecundario || 'rgba(255,255,255,0.70)';
    var br = v.bordaRadius || '14px';
    var bb = v.bordaBotao || '12px';
    var pb = v.paddingBotao || '11px 22px';
    var tb = v.tamanhoBotao || '12px';
    var tp = v.tamanhoPrecoPrincipal || '1.65rem';
    var he = v.hoverElevacao || '-4px';
    var fn = v.fonte || 'Inter';

    var previewCSS = '\n    body { background: #0d0b12; display:flex; align-items:center; justify-content:center; min-height:100vh; padding:24px; font-family:"' + fn + '",system-ui,sans-serif; }\n    .cards-wrap { display:flex; gap:20px; flex-wrap:wrap; justify-content:center; }\n    .product_card {\n      position:relative; overflow:hidden;\n      width:220px; border-radius:' + br + ';\n      background: radial-gradient(120% 140% at 10% 0%, rgba(204,52,235,0.18) 0%, transparent 55%), radial-gradient(120% 140% at 90% 0%, rgba(140,40,255,0.12) 0%, transparent 55%), linear-gradient(135deg, ' + bg1 + ' 0%, ' + bg2 + ' 100%);\n      border: 1px solid rgba(204,52,235,0.18);\n      box-shadow: 0 10px 22px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.06);\n      backdrop-filter:blur(14px);\n      transition: transform 220ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 220ms;\n      cursor:pointer; color:' + ct + ';\n    }\n    .product_card:hover { transform:translateY(' + he + '); border-color:rgba(204,52,235,0.34); box-shadow:0 18px 40px rgba(0,0,0,0.46),0 0 28px rgba(204,52,235,0.10); }\n    .product_card::before { content:""; position:absolute; top:-60%;left:-60%;width:220%;height:220%; background:linear-gradient(115deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.08) 22%,rgba(255,255,255,0.03) 30%,rgba(255,255,255,0) 45%); transform:translateX(-18%) translateY(-8%); opacity:0.6; pointer-events:none; }\n    .card-img { width:100%; height:140px; background:linear-gradient(135deg,rgba(204,52,235,0.3),rgba(140,40,255,0.2)); display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.3);font-size:2rem; }\n    .card-body { padding:16px; display:flex;flex-direction:column;align-items:center;gap:6px; }\n    .card-name { font-size:0.9rem; font-weight:600; color:' + ct + '; text-align:center; }\n    .card-old  { font-size:0.8rem; color:rgba(255,255,255,0.45); text-decoration:line-through; }\n    .card-badge{ background:linear-gradient(135deg,' + c1 + ',' + c2 + '); color:#fff; font-size:0.7rem; font-weight:800; padding:3px 8px; border-radius:6px; }\n    .card-price{ font-size:' + tp + '; font-weight:850; color:rgba(255,255,255,0.96); }\n    .card-pix  { font-size:0.78rem; color:' + cts + '; }\n    .card-btn  { background:linear-gradient(135deg,' + c1 + ',' + c2 + '); border:none;border-radius:' + bb + ';padding:' + pb + ';color:#fff;font-size:' + tb + ';font-weight:750;letter-spacing:1.2px;text-transform:uppercase;margin-top:8px;cursor:pointer;box-shadow:0 12px 28px rgba(0,0,0,0.30),inset 0 1px 0 rgba(255,255,255,0.14); transition:filter 180ms,transform 180ms; }\n    .card-btn:hover { filter:brightness(1.1); transform:translateY(-1px); }\n  ';

    var previewHTML = '\n    <div class="cards-wrap">\n      <div class="product_card">\n        <div class="card-img">🖼️</div>\n        <div class="card-body">\n          <div class="card-name">Produto Premium</div>\n          <div style="display:flex;align-items:center;gap:6px">\n            <div class="card-old">R$ 199,90</div>\n            <div class="card-badge">20% OFF</div>\n          </div>\n          <div class="card-price">R$ 159,90</div>\n          <div class="card-pix">no pix</div>\n          <button class="card-btn">Comprar</button>\n        </div>\n      </div>\n      <div class="product_card">\n        <div class="card-img">🖼️</div>\n        <div class="card-body">\n          <div class="card-name">Produto Exclusivo</div>\n          <div style="display:flex;align-items:center;gap:6px">\n            <div class="card-old">R$ 349,90</div>\n            <div class="card-badge">30% OFF</div>\n          </div>\n          <div class="card-price">R$ 244,90</div>\n          <div class="card-pix">no pix</div>\n          <button class="card-btn">Comprar</button>\n        </div>\n      </div>\n      <div class="product_card">\n        <div class="card-img">🖼️</div>\n        <div class="card-body">\n          <div class="card-name">Produto Especial</div>\n          <div style="display:flex;align-items:center;gap:6px">\n            <div class="card-old">R$ 89,90</div>\n            <div class="card-badge">10% OFF</div>\n          </div>\n          <div class="card-price">R$ 80,90</div>\n          <div class="card-pix">no pix</div>\n          <button class="card-btn">Comprar</button>\n        </div>\n      </div>\n    </div>\n  ';

    var doc = '<!DOCTYPE html><html><head><meta charset="UTF-8">'
        + '<link href="https://fonts.googleapis.com/css2?family=' + fn.replace(/ /g, '+') + ':wght@400;600;700;800&display=swap" rel="stylesheet">'
        + '<style>*{box-sizing:border-box;margin:0;padding:0;}' + previewCSS + '</style>'
        + '</head><body>' + previewHTML + '</body></html>';

    var old = box.querySelector('iframe');
    if (old) old.remove();

    var iframe = document.createElement('iframe');
    iframe.style.cssText = 'width:100%;height:480px;border:none;display:block;border-radius:14px;';
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