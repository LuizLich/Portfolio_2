// Accordion do FAQ
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// PONTO DE INTEGRAÇÃO — PLANO PROFISSIONAL
// Espaço reservado para disparar eventos de conversão (ex.: fbq('track','Lead'))
// sempre que a aluna clicar em um botão de WhatsApp. Exemplo:
//
// document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
//   link.addEventListener('click', () => {
//     if (typeof fbq === 'function') fbq('track', 'Lead');
//     if (typeof gtag === 'function') gtag('event', 'generate_lead');
//   });
// });
