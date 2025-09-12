import '../src/style.scss'
import '../src/modern-normalize.min.css'

let display = document.getElementsByClassName('calc__display');
display[0].value = '0';

let btn = document.querySelectorAll('.calc__operator')


btn.forEach(el => {
    function percent(base, perc) {  // ready function
        let newBase = eval(base);   //
        let result = newBase * (1 + parseFloat(perc) / 100);   //
        return Math.round(result * 100) / 100;   //
    }   //

    let value = el.innerHTML

    el.addEventListener('click', () => {
        if (!isNaN(value)) {
            if (display[0].value == '0') {
                display[0].value = value
            } else {
                display[0].value += value
            }

        } else if (value == 'AC') {
            display[0].value = '0'

        } else if (value == '=') {
            if (display[0].value.slice(-1) == '%') {
                let arr = display[0].value.match(/^(.*?)([-+]?\d+(\.\d+)?)%$/); //ready regular 
                display[0].value = percent(arr[1], arr[2])
            } else {
                display[0].value = eval(display[0].value)
            }

        } else if (isNaN(value)) {
            if (isNaN(display[0].value.slice(-1))) {
                display[0].value = display[0].value.slice(0, -1) + value
            } else {
                display[0].value += value
            }
        }
    })
})