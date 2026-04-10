// =============================================================
//  OG! — popup-bemvindo.js
// =============================================================

const COMPONENT = {
  title:       'Fundo de Constelação com Partículas Interativas',
  description: 'Fundo animado com partículas conectadas que formam constelações, com interação ao mouse. Cores neon personalizáveis.',

  fields: [
  ],
};

const BASE_HTML_B64 = '';
const BASE_CSS_B64  = 'Lm9nLXBvcHVwLW92ZXJsYXkgewogIHBvc2l0aW9uOiBmaXhlZDsKICBpbnNldDogMDsKICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwge3tjb3JSYWRpYWxDZW50ZXJ9fSwge3tjb3JSYWRpYWxFZGdlfX0gNzAlKTsKICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoe3tibHVyfX0pOwogIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKHt7Ymx1cn19KTsKICBkaXNwbGF5OiBmbGV4OwogIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgcGFkZGluZzogMjBweDsKICB6LWluZGV4OiA5OTk5OTk7CiAgb3BhY2l0eTogMDsKICB2aXNpYmlsaXR5OiBoaWRkZW47CiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cyBlYXNlLCB2aXNpYmlsaXR5IDAuMzVzIGVhc2U7Cn0KLm9nLXBvcHVwLW92ZXJsYXkuYXRpdm8gewogIG9wYWNpdHk6IDE7CiAgdmlzaWJpbGl0eTogdmlzaWJsZTsKfQpib2R5Lm9nLXBvcHVwLWF0aXZvIHsKICBvdmVyZmxvdzogaGlkZGVuOwp9Ci5vZy1wb3B1cC1ib3ggewogIHBvc2l0aW9uOiByZWxhdGl2ZTsKICB3aWR0aDogMTAwJTsKICBtYXgtd2lkdGg6IHt7bGFyZ3VyYU1heGltYX19OwogIGJhY2tncm91bmQ6IHt7Y29yRnVuZG99fTsKICBib3JkZXI6IDJweCBzb2xpZCB7e2NvckJvcmRhfX07CiAgYm9yZGVyLXJhZGl1czoge3tib3JkZXJSYWRpdXN9fTsKICBwYWRkaW5nOiB7e3BhZGRpbmd9fTsKICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgYm94LXNoYWRvdzoKICAgIDAgMCAxMnB4IHt7Y29yR2xvdzF9fSwKICAgIDAgMCAzMHB4IHt7Y29yR2xvdzJ9fSwKICAgIGluc2V0IDAgMCAxOHB4IHt7Y29yR2xvd0luc2V0fX07CiAgY29sb3I6ICNmZmY7CiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7Cn0KLm9nLXBvcHVwLWZlY2hhciB7CiAgcG9zaXRpb246IGFic29sdXRlOwogIHRvcDogMTZweDsKICByaWdodDogMThweDsKICB3aWR0aDogMjhweDsKICBoZWlnaHQ6IDI4cHg7CiAgYm9yZGVyOiBub25lOwogIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OwogIGNvbG9yOiB7e2NvckJvdGFvRmVjaGFyfX07CiAgZm9udC1zaXplOiAzMnB4OwogIGxpbmUtaGVpZ2h0OiAyOHB4OwogIGN1cnNvcjogcG9pbnRlcjsKICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBvcGFjaXR5IDAuMnMgZWFzZTsKICB6LWluZGV4OiAzOwp9Ci5vZy1wb3B1cC1mZWNoYXI6aG92ZXIgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpOyBvcGFjaXR5OiAwLjg1OyB9Ci5vZy1wb3B1cC1sb2dvIHsKICB3aWR0aDoge3t0YW1hbmhvTG9nb319OwogIGhlaWdodDoge3t0YW1hbmhvTG9nb319OwogIG1hcmdpbjogMCBhdXRvIDIwcHg7CiAgYm9yZGVyLXJhZGl1czoge3tyYWRpdXNMb2dvfX07CiAgb2JqZWN0LWZpdDogY292ZXI7CiAgZGlzcGxheTogYmxvY2s7CiAgYm94LXNoYWRvdzogMCAwIDE0cHgge3tjb3JHbG93MX19LCAwIDAgMjRweCB7e2Nvckdsb3cyfX07Cn0KLm9nLXBvcHVwLXRpdHVsbyB7CiAgbWFyZ2luOiAwIDAgMTRweDsKICBmb250LXNpemU6IHt7dGFtYW5ob1RpdHVsb319OwogIGZvbnQtd2VpZ2h0OiA5MDA7CiAgbGV0dGVyLXNwYWNpbmc6IDFweDsKICBjb2xvcjoge3tjb3JUaXR1bG99fTsKICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOwogIHRleHQtc2hhZG93OiAwIDAgOHB4IHt7Y29yR2xvdzJ9fTsKfQoub2ctcG9wdXAtdGV4dG8gewogIG1hcmdpbjogMCBhdXRvIDE4cHg7CiAgbWF4LXdpZHRoOiAyOTBweDsKICBmb250LXNpemU6IHt7dGFtYW5ob1RleHRvfX07CiAgbGluZS1oZWlnaHQ6IDEuNTsKICBjb2xvcjoge3tjb3JUZXh0b319Owp9Ci5vZy1wb3B1cC1zdWJ0aXR1bG8gewogIG1hcmdpbjogMCAwIDE4cHg7CiAgZm9udC1zaXplOiAxNnB4OwogIGZvbnQtd2VpZ2h0OiA4MDA7CiAgY29sb3I6IHt7Y29yU3VidGl0dWxvfX07CiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsKICB0ZXh0LXNoYWRvdzogMCAwIDEwcHgge3tjb3JHbG93Mn19Owp9Ci5vZy1wb3B1cC1jdXBvbSB7CiAgZGlzcGxheTogaW5saW5lLWZsZXg7CiAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICBtaW4td2lkdGg6IDE3MHB4OwogIG1pbi1oZWlnaHQ6IDU0cHg7CiAgcGFkZGluZzogMTJweCAyOHB4OwogIGJvcmRlci1yYWRpdXM6IDE2cHg7CiAgYm9yZGVyOiBub25lOwogIG91dGxpbmU6IG5vbmU7CiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywge3tjb3JCb3RhbzF9fSAwJSwge3tjb3JCb3RhbzJ9fSAxMDAlKTsKICBjb2xvcjoge3tjb3JUZXh0b0JvdGFvfX07CiAgZm9udC1zaXplOiAxOXB4OwogIGZvbnQtd2VpZ2h0OiA5MDA7CiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsKICBsZXR0ZXItc3BhY2luZzogMC41cHg7CiAgYm94LXNoYWRvdzogMCAwIDE0cHgge3tjb3JHbG93MX19LCBpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4xOCk7CiAgY3Vyc29yOiBwb2ludGVyOwogIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlLCBvcGFjaXR5IDAuMnMgZWFzZTsKICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgei1pbmRleDogMjsKfQoub2ctcG9wdXAtY3Vwb206aG92ZXIgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpOyB9Ci5vZy1wb3B1cC1jdXBvbTphY3RpdmUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpOyB9Ci5vZy1wb3B1cC1tc2cgewogIG1hcmdpbi10b3A6IDE0cHg7CiAgZm9udC1zaXplOiAxNHB4OwogIGZvbnQtd2VpZ2h0OiA3MDA7CiAgY29sb3I6IHt7Y29yTXNnQ29waWFkb319OwogIG9wYWNpdHk6IDA7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7CiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7CiAgcG9pbnRlci1ldmVudHM6IG5vbmU7Cn0KLm9nLXBvcHVwLW1zZy5hdGl2byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfQpAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHsKICAub2ctcG9wdXAtYm94IHsKICAgIG1heC13aWR0aDogMzQwcHg7CiAgICBwYWRkaW5nOiAzMHB4IDIycHggMzJweDsKICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7CiAgfQogIC5vZy1wb3B1cC1sb2dvIHsgd2lkdGg6IDg0cHg7IGhlaWdodDogODRweDsgfQogIC5vZy1wb3B1cC10aXR1bG8geyBmb250LXNpemU6IDI0cHg7IH0KICAub2ctcG9wdXAtdGV4dG8geyBmb250LXNpemU6IDE0cHg7IH0KICAub2ctcG9wdXAtY3Vwb20geyBtaW4td2lkdGg6IDE1NXB4OyBtaW4taGVpZ2h0OiA1MHB4OyBmb250LXNpemU6IDE4cHg7IH0KfQ==';
const BASE_JS_B64   = 'KGZ1bmN0aW9uKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgaWYgKHdpbmRvdy5vZ1BvcHVwQmVtVmluZG9JbmljaWFkbykgcmV0dXJuOwogIHdpbmRvdy5vZ1BvcHVwQmVtVmluZG9JbmljaWFkbyA9IHRydWU7CgogIGZ1bmN0aW9uIG9nQ3JpYXJQb3B1cCgpIHsKICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub2ctcG9wdXAtb3ZlcmxheScpKSByZXR1cm47CgogICAgdmFyIGxvZ29VcmwgICAgID0gJ3t7bG9nb1VybH19JzsKICAgIHZhciBjdXBvbSAgICAgICA9ICd7e2NvZGlnb0N1cG9tfX0nOwogICAgdmFyIHRpdHVsbyAgICAgID0gJ3t7dGl0dWxvfX0nOwogICAgdmFyIHRleHRvICAgICAgID0gJ3t7dGV4dG99fSc7CiAgICB2YXIgbGFiZWxDdXBvbSAgPSAne3tsYWJlbEN1cG9tfX0nOwogICAgdmFyIG1zZ0NvcGlhZG8gID0gJ3t7bXNnQ29waWFkb319JzsKCiAgICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgb3ZlcmxheS5jbGFzc05hbWUgPSAnb2ctcG9wdXAtb3ZlcmxheSc7CgogICAgb3ZlcmxheS5pbm5lckhUTUwgPQogICAgICAnPGRpdiBjbGFzcz0ib2ctcG9wdXAtYm94Ij4nCiAgICAgICsgJzxidXR0b24gY2xhc3M9Im9nLXBvcHVwLWZlY2hhciIgYXJpYS1sYWJlbD0iRmVjaGFyIj4mdGltZXM7PC9idXR0b24+JwogICAgICArIChsb2dvVXJsID8gJzxpbWcgY2xhc3M9Im9nLXBvcHVwLWxvZ28iIHNyYz0iJyArIGxvZ29VcmwgKyAnIiBhbHQ9IkxvZ28iPicgOiAnJykKICAgICAgKyAnPGgyIGNsYXNzPSJvZy1wb3B1cC10aXR1bG8iPicgKyB0aXR1bG8gKyAnPC9oMj4nCiAgICAgICsgJzxwIGNsYXNzPSJvZy1wb3B1cC10ZXh0byI+JyArIHRleHRvICsgJzwvcD4nCiAgICAgICsgJzxkaXYgY2xhc3M9Im9nLXBvcHVwLXN1YnRpdHVsbyI+JyArIGxhYmVsQ3Vwb20gKyAnPC9kaXY+JwogICAgICArICc8YnV0dG9uIGNsYXNzPSJvZy1wb3B1cC1jdXBvbSIgdHlwZT0iYnV0dG9uIj4nICsgY3Vwb20gKyAnPC9idXR0b24+JwogICAgICArICc8ZGl2IGNsYXNzPSJvZy1wb3B1cC1tc2ciPicgKyBtc2dDb3BpYWRvICsgJzwvZGl2PicKICAgICAgKyAnPC9kaXY+JzsKCiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpOwogICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvZy1wb3B1cC1hdGl2bycpOwogICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhdGl2bycpOyB9LCA4MCk7CgogICAgdmFyIGJ0bkZlY2hhciA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignLm9nLXBvcHVwLWZlY2hhcicpOwogICAgdmFyIGJ0bkN1cG9tICA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignLm9nLXBvcHVwLWN1cG9tJyk7CiAgICB2YXIgbXNnICAgICAgID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcub2ctcG9wdXAtbXNnJyk7CgogICAgZnVuY3Rpb24gb2dNb3N0cmFyTXNnKCkgewogICAgICBtc2cuY2xhc3NMaXN0LmFkZCgnYXRpdm8nKTsKICAgICAgY2xlYXJUaW1lb3V0KHdpbmRvdy5vZ1BvcHVwTXNnVGltZXIpOwogICAgICB3aW5kb3cub2dQb3B1cE1zZ1RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHsgbXNnLmNsYXNzTGlzdC5yZW1vdmUoJ2F0aXZvJyk7IH0sIDIwMDApOwogICAgfQoKICAgIGZ1bmN0aW9uIG9nRmFsbGJhY2tDb3B5KHR4dCkgewogICAgICB2YXIgdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpOwogICAgICB0YS52YWx1ZSA9IHR4dDsKICAgICAgdGEuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTsKICAgICAgdGEuc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjpmaXhlZDtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTsnOwogICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhKTsKICAgICAgdGEuc2VsZWN0KCk7CiAgICAgIHRhLnNldFNlbGVjdGlvblJhbmdlKDAsIDk5OTk5KTsKICAgICAgdHJ5IHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTsgb2dNb3N0cmFyTXNnKCk7IH0gY2F0Y2goZSkge30KICAgICAgdGEucmVtb3ZlKCk7CiAgICB9CgogICAgZnVuY3Rpb24gb2dDb3BpYXIoKSB7CiAgICAgIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkICYmIHdpbmRvdy5pc1NlY3VyZUNvbnRleHQpIHsKICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjdXBvbSkudGhlbihvZ01vc3RyYXJNc2cpLmNhdGNoKGZ1bmN0aW9uKCkgeyBvZ0ZhbGxiYWNrQ29weShjdXBvbSk7IH0pOwogICAgICB9IGVsc2UgewogICAgICAgIG9nRmFsbGJhY2tDb3B5KGN1cG9tKTsKICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIG9nRmVjaGFyKCkgewogICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2F0aXZvJyk7CiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb2ctcG9wdXAtYXRpdm8nKTsKICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgb3ZlcmxheS5yZW1vdmUoKTsgfSwgMzUwKTsKICAgIH0KCiAgICBidG5GZWNoYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvZ0ZlY2hhcik7CiAgICBidG5DdXBvbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBlLnN0b3BQcm9wYWdhdGlvbigpOyBvZ0NvcGlhcigpOyB9KTsKICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7IGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkgb2dGZWNoYXIoKTsgfSk7CiAgfQoKICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7CiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgb2dDcmlhclBvcHVwKTsKICB9IGVsc2UgewogICAgb2dDcmlhclBvcHVwKCk7CiAgfQp9KSgpOw==';

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

  var corFundo       = v.corFundo         || '#050505';
  var corRadialC     = v.corRadialCenter  || 'rgba(255,0,0,0.08)';
  var corRadialE     = v.corRadialEdge    || 'rgba(0,0,0,0.96)';
  var corBorda       = v.corBorda         || '#ff1a1a';
  var corGlow1       = v.corGlow1         || 'rgba(255,0,0,0.65)';
  var corGlow2       = v.corGlow2         || 'rgba(255,0,0,0.25)';
  var corGlowI       = v.corGlowInset     || 'rgba(255,0,0,0.08)';
  var blur           = v.blur             || '4px';
  var radius         = v.borderRadius     || '28px';
  var largura        = v.larguraMaxima    || '370px';
  var padding        = v.padding          || '34px 28px 36px';
  var logoUrl        = v.logoUrl          || '';
  var tamLogo        = v.tamanhoLogo      || '92px';
  var radLogo        = v.radiusLogo       || '22px';
  var titulo         = v.titulo           || 'BEM-VINDO';
  var texto          = v.texto            || 'Seja bem-vindo!';
  var labelCupom     = v.labelCupom       || 'CUPOM DE DESCONTO';
  var cupom          = v.codigoCupom      || 'DESCONTO10';
  var msgCop         = v.msgCopiado       || 'Cupom copiado!';
  var corBtnClose    = v.corBotaoFechar   || '#ff2b2b';
  var corTit         = v.corTitulo        || '#ffffff';
  var corTxt         = v.corTexto         || 'rgba(255,255,255,0.82)';
  var corSub         = v.corSubtitulo     || '#ff2020';
  var tamTit         = v.tamanhoTitulo    || '27px';
  var tamTxt         = v.tamanhoTexto     || '15px';
  var corBtn1        = v.corBotao1        || '#ff2a2a';
  var corBtn2        = v.corBotao2        || '#ff0000';
  var corTxtBtn      = v.corTextoBotao    || '#ffffff';
  var corMsg         = v.corMsgCopiado    || '#27ff7a';

  var doc =
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>'
    + '*{box-sizing:border-box;margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;}'
    + 'body{background:radial-gradient(circle at center,' + corRadialC + ',' + corRadialE + ' 70%);'
      + 'backdrop-filter:blur(' + blur + ');min-height:480px;display:flex;align-items:center;justify-content:center;padding:20px;}'
    + '.box{position:relative;width:100%;max-width:' + largura + ';background:' + corFundo + ';'
      + 'border:2px solid ' + corBorda + ';border-radius:' + radius + ';padding:' + padding + ';text-align:center;'
      + 'box-shadow:0 0 12px ' + corGlow1 + ',0 0 30px ' + corGlow2 + ',inset 0 0 18px ' + corGlowI + ';color:#fff;}'
    + '.x{position:absolute;top:16px;right:18px;background:transparent;border:none;color:' + corBtnClose + ';font-size:32px;line-height:28px;cursor:pointer;}'
    + '.logo{width:' + tamLogo + ';height:' + tamLogo + ';margin:0 auto 20px;border-radius:' + radLogo + ';object-fit:cover;display:block;box-shadow:0 0 14px ' + corGlow1 + ';}'
    + 'h2{margin:0 0 14px;font-size:' + tamTit + ';font-weight:900;letter-spacing:1px;color:' + corTit + ';text-transform:uppercase;text-shadow:0 0 8px ' + corGlow2 + ';}'
    + 'p{margin:0 auto 18px;max-width:290px;font-size:' + tamTxt + ';line-height:1.5;color:' + corTxt + ';}'
    + '.sub{margin:0 0 18px;font-size:16px;font-weight:800;color:' + corSub + ';text-transform:uppercase;}'
    + '.btn{display:inline-flex;align-items:center;justify-content:center;min-width:170px;min-height:54px;padding:12px 28px;'
      + 'border-radius:16px;border:none;background:linear-gradient(180deg,' + corBtn1 + ',' + corBtn2 + ');'
      + 'color:' + corTxtBtn + ';font-size:19px;font-weight:900;text-transform:uppercase;letter-spacing:.5px;'
      + 'box-shadow:0 0 14px ' + corGlow1 + ';cursor:pointer;}'
    + '.msg{margin-top:14px;font-size:14px;font-weight:700;color:' + corMsg + ';opacity:0;}'
    + '</style></head><body>'
    + '<div class="box">'
      + '<button class="x">&times;</button>'
      + (logoUrl ? '<img class="logo" src="' + logoUrl + '" alt="Logo">' : '')
      + '<h2>' + titulo + '</h2>'
      + '<p>' + texto + '</p>'
      + '<div class="sub">' + labelCupom + '</div>'
      + '<button class="btn">' + cupom + '</button>'
      + '<div class="msg">' + msgCop + '</div>'
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