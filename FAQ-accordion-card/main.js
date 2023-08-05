const details = document.querySelectorAll("details");

details.forEach((targetDetail) => {
    
  targetDetail.addEventListener("click", () => {
    targetDetail.querySelector('summary h5').style.fontWeight = '700';
    targetDetail.querySelector('summary img').classList.add('active-icon-arrow')
    const lastClickedDetail = document.getElementById('opened-detail');
    if (lastClickedDetail && lastClickedDetail !== targetDetail) {
      lastClickedDetail.querySelector('summary h5').style.fontWeight = '400';
      lastClickedDetail.querySelector('summary img').classList.remove('active-icon-arrow');
    }
    lastClickedDetail?.removeAttribute('id');
    targetDetail.setAttribute('id', 'opened-detail');
    
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
      if (detail.hasAttribute('open')) {
        detail.removeAttribute('id')
        detail.querySelector('summary h5').style.fontWeight = '400';
        detail.querySelector('summary img').classList.remove('active-icon-arrow');
      }
    });
  });
});