const modalBtn = document.querySelectorAll('[data-modal]'); /* Выбираем все кнопки с атрибутом data-modal */
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');

modalBtn.forEach(item => {
  /* Проходимся по всем кнопкам*/
  item.addEventListener('click', event => {
    /* Повесили обработчик событий click на кнопки с этим атрибутом  */
    let $this = event.currentTarget;
    let modalId = $this.getAttribute('data-modal');
    let modal = document.getElementById(modalId);
    let modalContent = modal.querySelector('.modal__content');

    modalContent.addEventListener('click', event => { // На modal__content обр. click не действует
      event.stopPropagation();
    })

    modal.classList.add('show');
    body.classList.add('no-scroll');

    setTimeout(() => {
      modalContent.style.transform = 'none';
      modalContent.style.opacity = '1';

    }, 1);

  })
});

modalClose.forEach(item => {
  item.addEventListener('click', event => {
    let currentModal = event.currentTarget.closest('.modal');
   
    closeModal(currentModal);
  });
});


modal.forEach(item => {
  item.addEventListener('click', event => {
    let currentModal = event.currentTarget;

    closeModal(currentModal);
  });
});

function closeModal(currentModal) {
  let modalContent = currentModal.querySelector('.modal__content'); // Удалим transform none
  modalContent.removeAttribute('style');
  

  setTimeout(() => {
    currentModal.classList.remove('show');
    body.classList.remove('no-scroll');
  }, 250);
}


// /* ------ ДЛЯ ЗАКРЫТИЯ МОДАЛЬНОГО ОКНА --------- */
// /* При нажатии на кнопку нам нужно найти родителя с классом MODAL и убрать
//  у него класс SHOW *  /