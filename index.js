const toggleModal = () => {
    const modal = document.getElementById('modal');
    if (modal.classList.contains('modal--open')) {
        modal.classList.remove('modal--open');
    }
    else {
        modal.classList.add('modal--open');
    }
};

window.onload = function () {
    let openButton = document.getElementById('open');
    let closeButton = document.getElementById('close');
    closeButton.addEventListener('click', toggleModal);
    openButton.addEventListener('click', toggleModal);
}