const btnModal = document.querySelector('.btn__modal');
const btnClose = document.querySelector('.btn__close');
const container = document.querySelector('.modal__overlay');

btnModal.addEventListener('click', function () {
    container.classList.add('modal__open');
});

btnClose.addEventListener('click', function () {
    container.classList.remove('modal__open');
});