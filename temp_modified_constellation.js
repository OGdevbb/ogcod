(function () {
  'use strict';

  if (document.getElementById('constellation-bg')) return;

  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  }

  /* CSS */
  const style = document.createElement('style');
  style.textContent = `
    #constellation-bg {
      position: fixed !important;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);

  /* Canvas */
  const canvas = document.createElement('canvas');
  canvas.id = 'constellation-bg';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const numParticles = {{numParticles}};
  const linkDistance = {{linkDistance}};
  const mouseRadius = {{mouseRadius}};

  const particleColor = '{{particleColor}}'; // cor das particulas
  const particleColorRgb = hexToRgb(particleColor);
  const lineColor = particleColorRgb
    ? `rgba(${particleColorRgb.r}, ${particleColorRgb.g}, ${particleColorRgb.b}, `
    : 'rgba(160, 32, 240, ';

  const particles = [];

  const mouse = {
    x: null,
    y: null
  };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.size = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // bounce
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

      // interação com mouse
      if (mouse.x !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius;
          this.x += (dx / dist) * force * 2;
          this.y += (dy / dist) * force * 2;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.fillStyle = particleColor;

      // glow
      ctx.shadowColor = particleColor;
      ctx.shadowBlur = 10;

      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    for (let i = 0; i < numParticles; i++) {
      for (let j = i + 1; j < numParticles; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < linkDistance) {
          let opacity = 1 - distance / linkDistance;

          // mais forte perto do mouse
          if (mouse.x !== null) {
            const mx = particles[i].x - mouse.x;
            const my = particles[i].y - mouse.y;
            const md = Math.sqrt(mx * mx + my * my);

            if (md < mouseRadius) {
              opacity += 0.5;
            }
          }

          ctx.strokeStyle = lineColor + opacity + ')';
          ctx.lineWidth = 1;

          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
})();