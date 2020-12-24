const colorChanger = () => {
    const allButtons = document.querySelectorAll('.button');
    const body = document.querySelector('body');
    allButtons.forEach(button => button.addEventListener('click', () => body.style.backgroundColor = button.id));
};

colorChanger ();
