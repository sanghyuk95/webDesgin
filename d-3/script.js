window.onload = function () {
  const slideWrap = document.querySelector(".slidewrap");
  const slide = document.querySelectorAll(".slide-item");
  slide[0].style.opacity = 1;

  let now = 0;
  setInterval(() => {
    let next = (now + 1) % slide.length;
    slide[now].style.opacity = 0;
    slide[next].style.opacity = 1;
    now=next
  }, 3000);
};
