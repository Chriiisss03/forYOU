document.addEventListener('DOMContentLoaded', ()=>{
  const ctaBtn = document.getElementById('cta-btn');
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

  // Show local modal when user clicks Yes — no external navigation
  ctaBtn.addEventListener('click', ()=>{
    showModal();
    modalSend.focus();
  });

  modalCancel.addEventListener('click', ()=>{
    hideModal();
    ctaBtn.focus();
  });

  modalSend.addEventListener('click', ()=>{
    hideModal();
    // show a small toast message confirming the send
    let toast = document.querySelector('.toast');
    if(!toast){
      toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = 'Message sent — thank you 💌';
      document.body.appendChild(toast);
    }
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'),2200);
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
      ctaBtn.focus();
    }
  });
});
