const display = document.getElementById('screen');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === '=') {
            display.innerText = eval(display.innerText);
        } else if(button.id === 'AC') {
            display.innerText = '';
        } else if (button.id === '=' && typeof eval(display.innerText) === 'null') {
            display.innerText = 'error'
        } else {
            display.innerText += button.id;
        }
    });
})



