window.onload = function () {
  //슬라이드
  const slide = document.querySelector(".slide"); //전체 이미지
  const slideImg = document.querySelectorAll(".slide-img"); //각각의 이미지

  const sliderClone = slide.firstElementChild.cloneNode(true); //첫번째 이미지를 저장
  slide.appendChild(sliderClone);

  let currentIndex = 0; //현재 이미지 설정

  setInterval(() => {
    //3초에 한번씩 실행
    currentIndex++; //현재 이미지 1씩 증가
    slide.style.transition = "all 0.6s"; //애니메이션 추가
    slide.style.marginTop = -currentIndex * 300 + "px"; //이미지 이동

    if (currentIndex == slideImg.length) {
      //마지막 이미지
      setTimeout(() => {
        slide.style.transition = "0s"; //애니메이션 정지
        slide.style.marginTop = "0"; //이미지 위치 초기화
        currentIndex = 0; //현재 이미지 초기화
      }, 700);
    }
  }, 3000);

  // 컨텐츠
  const contentBtn = document.querySelectorAll(".content-title > p");
  const content = document.querySelectorAll(".content-detail > div");

  contentBtn.forEach((item) => {
    item.addEventListener("click", () => {
      contentBtn.forEach((e) => {
        e.classList.toggle("active", !e.classList.contains("active"));
      });
      content.forEach((a) => {
        a.classList.toggle("active", !a.classList.contains("active"));
      });
    });
  });

  // 팝업
  const popUp = document.querySelector(".popup");
  const popUpBtn = document.querySelector(".aa");
  const popUpClose = document.querySelector(".popup-close");
  popUpBtn.addEventListener("click", () => {
    popUp.style.display = "block";
  });
  popUpClose.addEventListener("click", () => {
    popUp.style.display = "none";
  });
};
