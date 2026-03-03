document.addEventListener('DOMContentLoaded', ()=>{
  const splash = document.getElementById('splash');
  const mainView = document.getElementById('main-view');
  const splashCta = document.getElementById('splash-cta');

  // Hide the splash and reveal main content when user clicks anywhere on the splash
  if(splash && splashCta){
    // Prefer an explicit button to advance: single click reliably moves on.
    splashCta.addEventListener('click', (e)=>{
      console.log('splash-cta clicked');
      e.stopPropagation();
      splash.setAttribute('aria-hidden','true');
      splash.classList.add('hidden');
      if(mainView){
        mainView.classList.remove('hidden');
      }
      // focus the first actionable control
      const focusTarget = document.getElementById('cta-link') || document.getElementById('cta-btn') || document.getElementById('maybe-btn');
      if(focusTarget) focusTarget.focus();
    });
  }
  const ctaLink = document.getElementById('cta-link');
  const maybe = document.getElementById('maybe-btn');
  const modal = document.getElementById('confirm-modal');
  const modalSend = document.getElementById('modal-send');
  const modalCancel = document.getElementById('modal-cancel');

  function showModal(){
    modal.setAttribute('aria-hidden','false');
  }
  function hideModal(){
    modal.setAttribute('aria-hidden','true');
  }

  // Show confirmation modal when user clicks the GitHub link
  if(ctaLink){
    ctaLink.addEventListener('click',(e)=>{
      e.preventDefault();
      showModal();
      modalSend.focus();
    });
  }

  if(modalCancel){
    modalCancel.addEventListener('click', ()=>{
      hideModal();
      if(ctaLink) ctaLink.focus();
    });
  }

  if(modalSend){
    modalSend.addEventListener('click', ()=>{
      hideModal();
      // navigate to the repository URL (only GitHub link for this project)
      if(ctaLink && ctaLink.href){
        window.location.href = ctaLink.href;
      }
    });
  }

  // Play a small pop animation for Maybe
  if(maybe){
    maybe.addEventListener('click', ()=>{
      maybe.classList.add('pop');
      setTimeout(()=>maybe.classList.remove('pop'),600);
      setTimeout(()=>alert('No worries — take your time!'),620);
    });
  }

  // close modal with Escape
  document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false'){
      hideModal();
      if(ctaLink) ctaLink.focus();
    }
  });
  
  // Triple-click detection (anywhere on the page) — only active after splash hidden
  let clickCount = 0;
  let clickTimer = null;
  const secret = document.getElementById('secret-overlay');
  const secretClose = document.getElementById('secret-close');

  function showSecret(){
    if(!secret) return;
    secret.setAttribute('aria-hidden','false');
    secretClose.focus();
  }
  function hideSecret(){
    if(!secret) return;
    secret.setAttribute('aria-hidden','true');
  }


  // (splash dismissal handled by the splash element click listener above)

    // (triple-click secret removed) — simplified event handling
});
