/* ============================================================
   MASTER REVOLUTION · site institucional
   Sem dependência externa: só o navegador.
   ============================================================ */
(function(){
  'use strict';

  /* Número do WhatsApp da equipe (DDI+DDD+número, só dígitos).
     Enquanto estiver vazio, o botão flutuante leva ao formulário
     e o formulário envia por e-mail. Chegou o número, preenche
     aqui e tudo passa a abrir direto no WhatsApp. */
  const WHATSAPP = '';
  const EMAIL_EQUIPE = 'contato@escoladeplanejados.com.br';

  const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- ano do rodapé ---------- */
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---------- navbar + barra de progresso ---------- */
  const nav = document.getElementById('nav');
  const barra = document.getElementById('progressoBarra');
  function aoRolar(){
    nav.classList.toggle('rolou', window.scrollY > 24);
    if (barra){
      const total = document.documentElement.scrollHeight - innerHeight;
      barra.style.width = (total > 0 ? (window.scrollY / total) * 100 : 0) + '%';
    }
  }
  window.addEventListener('scroll', aoRolar, { passive:true });
  aoRolar();

  /* ---------- menu mobile ---------- */
  const burger = document.getElementById('navBurger');
  const links = document.getElementById('navLinks');
  if (burger && links){
    burger.addEventListener('click', () => {
      const aberto = links.classList.toggle('aberto');
      burger.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      burger.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('aberto');
      burger.setAttribute('aria-expanded','false');
    }));
  }

  /* ---------- reveals ao rolar ---------- */
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(e => {
      if (e.isIntersecting){ e.target.classList.add('viu'); observador.unobserve(e.target); }
    });
  }, { threshold:.16, rootMargin:'0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observador.observe(el));

  /* ---------- contadores: todo número entra em movimento ---------- */
  function animaContador(el){
    const alvo = parseInt(el.dataset.conta, 10);
    if (reduzMovimento){ el.textContent = alvo; return; }
    const inicio = performance.now();
    const dur = Math.min(2000, 900 + alvo * 8);   // números maiores contam por mais tempo
    function passo(t){
      const p = Math.min((t - inicio) / dur, 1);
      el.textContent = Math.round(alvo * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }
  const obsConta = new IntersectionObserver((es) => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      obsConta.unobserve(e.target);
      animaContador(e.target);
    });
  }, { threshold:.6 });
  document.querySelectorAll('[data-conta]').forEach(el => obsConta.observe(el));

  /* ---------- mockup: anel, barras e tilt de lente ---------- */
  const hero = document.querySelector('.hero');
  const anel = document.getElementById('mockAnel');
  const pct = document.getElementById('mockPct');
  const alvoPct = 68;                      // implantação exibida no mock
  const obsHero = new IntersectionObserver((es) => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      obsHero.disconnect();
      hero.classList.add('ligou');
      if (anel){
        const comp = 2 * Math.PI * 50;      // r=50 no viewBox
        anel.style.strokeDashoffset = comp * (1 - alvoPct / 100);
      }
      if (pct){
        if (reduzMovimento){ pct.textContent = alvoPct + '%'; return; }
        const inicio = performance.now(), dur = 1500;
        (function passo(t){
          const p = Math.min((t - inicio) / dur, 1);
          pct.textContent = Math.round(alvoPct * (1 - Math.pow(1 - p, 3))) + '%';
          if (p < 1) requestAnimationFrame(passo);
        })(performance.now());
      }
    });
  }, { threshold:.3 });
  if (hero) obsHero.observe(hero);

  // o mockup acompanha o mouse de leve, como uma câmera na mão
  const mock = document.querySelector('.hero-mock');
  if (mock && !reduzMovimento && matchMedia('(pointer:fine)').matches){
    const janela = mock.querySelector('.mock-janela');
    mock.addEventListener('pointermove', (ev) => {
      const r = mock.getBoundingClientRect();
      janela.style.setProperty('--tx', (((ev.clientX - r.left) / r.width) - .5) * 7);
      janela.style.setProperty('--ty', (((ev.clientY - r.top) / r.height) - .5) * -7);
    });
    mock.addEventListener('pointerleave', () => {
      janela.style.setProperty('--tx', 0);
      janela.style.setProperty('--ty', 0);
    });
  }

  /* ---------- orbes com paralaxe leve ---------- */
  if (!reduzMovimento){
    const o1 = document.querySelector('.o1'),
          o2 = document.querySelector('.o2'),
          o3 = document.querySelector('.o3');
    let alvo = 0, atual = 0, rodando = false;
    function quadro(){
      atual += (alvo - atual) * .06;
      if (o1) o1.style.transform = 'translateY(' + (atual * .12) + 'px)';
      if (o2) o2.style.transform = 'translateY(' + (atual * -.08) + 'px)';
      if (o3) o3.style.transform = 'translateY(' + (atual * .05) + 'px)';
      if (Math.abs(alvo - atual) > .5) requestAnimationFrame(quadro);
      else rodando = false;
    }
    window.addEventListener('scroll', () => {
      alvo = window.scrollY;
      if (!rodando){ rodando = true; requestAnimationFrame(quadro); }
    }, { passive:true });
  }

  /* ---------- galeria: lightbox ---------- */
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbLegenda = document.getElementById('lbLegenda');
  const lbContador = document.getElementById('lbContador');
  const itens = Array.prototype.slice.call(document.querySelectorAll('.g-item'));
  let lbIdx = -1, focoAntes = null;

  function abreFoto(i){
    lbIdx = (i + itens.length) % itens.length;
    const b = itens[lbIdx];
    // a versão ampliada vem em resolução maior que a miniatura
    lbImg.src = 'https://images.unsplash.com/' + b.dataset.foto + '?w=1800&q=82&auto=format';
    lbImg.alt = b.dataset.alt;
    lbLegenda.textContent = b.dataset.alt;
    lbContador.textContent = (lbIdx + 1) + ' / ' + itens.length;
  }
  function abreLightbox(i){
    focoAntes = document.activeElement;
    abreFoto(i);
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('lbFechar').focus();
  }
  function fechaLightbox(){
    lb.hidden = true;
    lbImg.src = '';
    document.body.style.overflow = '';
    if (focoAntes) focoAntes.focus();
  }
  itens.forEach((b, i) => b.addEventListener('click', () => abreLightbox(i)));
  if (lb){
    document.getElementById('lbFechar').addEventListener('click', fechaLightbox);
    document.getElementById('lbAnt').addEventListener('click', () => abreFoto(lbIdx - 1));
    document.getElementById('lbProx').addEventListener('click', () => abreFoto(lbIdx + 1));
    lb.addEventListener('click', (e) => { if (e.target === lb) fechaLightbox(); });
    document.addEventListener('keydown', (e) => {
      if (lb.hidden) return;
      if (e.key === 'Escape') fechaLightbox();
      else if (e.key === 'ArrowLeft') abreFoto(lbIdx - 1);
      else if (e.key === 'ArrowRight') abreFoto(lbIdx + 1);
    });
  }

  /* ---------- FAQ: abre um por vez ---------- */
  const faqs = document.querySelectorAll('.faq-lista details');
  faqs.forEach(d => d.addEventListener('toggle', () => {
    if (d.open) faqs.forEach(o => { if (o !== d) o.open = false; });
  }));

  /* ---------- WhatsApp flutuante ---------- */
  const zap = document.getElementById('zapBtn');
  if (zap && WHATSAPP){
    zap.href = 'https://wa.me/' + WHATSAPP + '?text=' +
      encodeURIComponent('Olá! Vim pelo site do Master Revolution e quero saber mais.');
    zap.target = '_blank';
    zap.rel = 'noopener';
  }

  /* ---------- formulário ---------- */
  const form = document.getElementById('formContato');
  const nota = document.getElementById('fNota');
  if (form) form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const nome = form.nome.value.trim(),
          zapNum = form.whatsapp.value.trim(),
          email = form.email.value.trim(),
          momento = form.momento.value,
          msg = form.mensagem.value.trim();

    nota.className = 'f-nota';
    if (!nome){ nota.classList.add('erro'); nota.textContent = 'Conta pra gente o seu nome.'; form.nome.focus(); return; }
    if (!zapNum){ nota.classList.add('erro'); nota.textContent = 'Precisamos do seu WhatsApp para retornar.'; form.whatsapp.focus(); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ nota.classList.add('erro'); nota.textContent = 'Confere o e-mail? Parece incompleto.'; form.email.focus(); return; }

    const corpo =
      'Olá! Vim pelo site do Master Revolution.\n\n' +
      'Nome: ' + nome + '\n' +
      'WhatsApp: ' + zapNum + '\n' +
      'E-mail: ' + email + '\n' +
      'Momento da loja: ' + momento +
      (msg ? '\n\nMensagem: ' + msg : '');

    if (WHATSAPP){
      window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(corpo), '_blank', 'noopener');
      nota.classList.add('ok');
      nota.textContent = 'Abrimos o WhatsApp com a sua mensagem pronta. É só enviar!';
    } else {
      window.location.href = 'mailto:' + EMAIL_EQUIPE +
        '?subject=' + encodeURIComponent('Contato pelo site · Master Revolution') +
        '&body=' + encodeURIComponent(corpo);
      nota.classList.add('ok');
      nota.textContent = 'Abrimos o seu e-mail com a mensagem pronta. É só enviar!';
    }
    form.reset();
  });
})();
