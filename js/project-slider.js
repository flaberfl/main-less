const featuresList = document.querySelector(".slider"); // класс дополняющий swiper-container
let featuresSlider;

// Превращет список преимуществ в слайдер в зависимости от размера экрана

const toggleSlider = () => {
  if (window.innerWidth < 575 && featuresList.dataset.mobile === "false") {
    featuresSlider = new Swiper(featuresList, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoHeight: true,

      pagination: {
        el: ".pagination", // класс дополняющий swiper-pagination
      },
    });

    featuresList.dataset.mobile = "true";
  } else if (window.innerWidth >= 575 && featuresList.dataset.mobile === "true") {
    featuresList.dataset.mobile = "false";

    featuresSlider.destroy();
  }
};

toggleSlider();

window.addEventListener("resize", () => {
  toggleSlider();
});
