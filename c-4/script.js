window.onload = function () {
  const slideWrap = document.querySelector(".slideWrap");
  const slideItem = document.querySelectorAll(".slide-item");
  const cloneNode = slideItem[0].cloneNode(true);
  slideWrap.appendChild(cloneNode);
  let now = 0;

  setInterval(() => {
    now++;
    slideWrap.style.transition = 'all 0.6s'
    slideWrap.style.marginTop = `${now * -350}px`;
    if (now === slideItem.length) {
      setTimeout(() => {
        now = 0;
        slideWrap.style.transition = '0s'
        slideWrap.style.marginTop = '0'
      }, 700);
    }
  }, 3000);
};
