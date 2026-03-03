document.addEventListener('DOMContentLoaded', ()=>{
  const splash = document.getElementById('splash');
  const mainView = document.getElementById('main-view');
  const splashCta = document.getElementById('splash-cta');
  const ctaLink = document.getElementById('cta-link');
  const modal = document.getElementById('confirm-modal');
  const modalSend = document.getElementById('modal-send');
  const modalCancel = document.getElementById('modal-cancel');
  const kissOverlay = document.getElementById('kiss-overlay');
  const kissCloseBtn = document.getElementById('kiss-close');

  function enterMainView(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (!splash || !mainView) return;
    splash.setAttribute('aria-hidden', 'true');
    splash.classList.add('hidden');
    mainView.classList.remove('hidden');
    if (ctaLink) ctaLink.focus();
  }

  if (splash && splashCta) {
    splashCta.addEventListener('click', enterMainView);
  }

  function showModal() {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'false');
  }

  function hideModal() {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
  }

  if (ctaLink) {
    ctaLink.addEventListener('click', (e) => {
      e.preventDefault();
      showModal();
      if (modalSend) modalSend.focus();
    });
  }

  if (modalCancel) {
    modalCancel.addEventListener('click', () => {
      hideModal();
      if (ctaLink) ctaLink.focus();
    });
  }

  if (modalSend) {
    modalSend.addEventListener('click', () => {
      hideModal();
      if (kissOverlay) {
        kissOverlay.setAttribute('aria-hidden', 'false');
        if (kissCloseBtn) kissCloseBtn.focus();
      }
    });
  }

  if (kissCloseBtn && kissOverlay) {
    kissCloseBtn.addEventListener('click', () => {
      kissOverlay.setAttribute('aria-hidden', 'true');
      if (ctaLink) ctaLink.focus();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;

    if (modal && modal.getAttribute('aria-hidden') === 'false') {
      hideModal();
      if (ctaLink) ctaLink.focus();
      return;
    }

    if (kissOverlay && kissOverlay.getAttribute('aria-hidden') === 'false') {
      kissOverlay.setAttribute('aria-hidden', 'true');
      if (ctaLink) ctaLink.focus();
    }
  });
});
