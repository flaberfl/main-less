const burger = document.getElementById('burger');
const nav = document.getElementById('navbar');
const body = document.body;

// Когда кликаем на бургер-проверяем, есть ли у body класс show-sidebar, если класс есть - мы вызываем
// closeSidebar (убирается show-sidebar у body и убирается маска, которая была создана ),
// а если show-sidebar нету у body то showSidebar(создаем маску, добавляем ее в page и выдаем body - show-sidebar )


burger.addEventListener('click', event => {
  if (body.classList.contains('show-sidebar')) {
    closeSidebar();
  } else {
    showSidebar();
  }
});

// Для того, чтобы при клике по менюхе-был переход по сслыке и меню закрылось ))
nav.addEventListener('click', event => {
  closeSidebar();
})

function showSidebar() {
  let mask = document.createElement('div');

  mask.classList.add('overlay');
  mask.addEventListener('click', closeSidebar);
  body.appendChild(mask);

  body.classList.add('show-sidebar');

}

function closeSidebar() {
  body.classList.remove('show-sidebar');
  document.querySelector('.overlay').remove();
}





// document.querySelector('.burger').addEventListener('click', function () {

//   document.querySelector('.burger span').classList.toggle('active');
//   document.querySelector('.navbar').classList.toggle('active');
//   document.body.classList.toggle('overlay');
// })


// const menu = document.querySelector('.navbar'),
//     menuItems = document.querySelectorAll('.navbar__link'),
//     hamburger = document.querySelector('.burger');
// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active')
//     menu.classList.toggle('active')
// });
// menuItems.forEach(link => {
//     link.addEventListener('click', () => {
//         hamburger.classList.toggle('active')
//         menu.classList.toggle('active')
//     })
// });

// const nav = document.querySelector('.header__inner');
// window.addEventListener('scroll', function () {
//     if (this.scrollY > 40) {
//         nav.classList.add('sticky');
//     } else {
//         nav.classList.remove('sticky');
//     }
// });