document.addEventListener('DOMContentLoaded', ()=>{
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

  modalCancel.addEventListener('click', ()=>{
    hideModal();
    ctaBtn.focus();
  });

  modalSend.addEventListener('click', ()=>{
    hideModal();
    // navigate to the repository URL (only GitHub link for this project)
    if(ctaLink && ctaLink.href){
      window.location.href = ctaLink.href;
    }
  });

  // Play a small pop animation for Maybe
  maybe.addEventListener('click', ()=>{
    maybe.classList.add('pop');
    setTimeout(()=>maybe.classList.remove('pop'),600);
    setTimeout(()=>alert('No worries — take your time!'),620);
  });

  // close modal with Escape
  document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false'){
      hideModal();
      if(ctaLink) ctaLink.focus();
    }
  });
  
  // Triple-click detection (anywhere on the page)
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

  document.addEventListener('click',(e)=>{
    // ignore clicks on modal buttons to avoid accidental reveal
    const tag = e.target.tagName.toLowerCase();
    if(tag === 'button' || tag === 'a') return;
    clickCount++;
    clearTimeout(clickTimer);
    clickTimer = setTimeout(()=>{ clickCount = 0; }, 700);
    if(clickCount >= 3){
      clickCount = 0;
      showSecret();
    }
  });

  // close secret
  if(secretClose){
    secretClose.addEventListener('click', ()=>{
      hideSecret();
    });
  }
  // close secret with Escape
  document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape' && secret && secret.getAttribute('aria-hidden') === 'false'){
      hideSecret();
    }
  });
});
