const toggleModal = () => {
    const modal = document.getElementById('modal');
    if (modal.classList.contains('modal--open')) {
        modal.classList.remove('modal--open');
    }
    else {
        modal.classList.add('modal--open');
    }
};

const toggleQuestion = (event) => {
    const question = event.currentTarget;
    if (question.classList.contains('question--open')) {
        question.classList.remove('question--open');
    }
    else {
        question.classList.add('question--open');
    }
};

window.onload = function () {
    let openButton = document.getElementById('open');
    openButton.addEventListener('click', toggleModal);

    let closeButton = document.getElementById('close');
    closeButton.addEventListener('click', toggleModal);

    for (let i = 1; i <= 5; i++) {
        let question = document.getElementById(`question${i}`); 
        question.addEventListener('click', toggleQuestion);
    }
}