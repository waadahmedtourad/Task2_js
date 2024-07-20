const input1 = document.querySelector('.input1'),
 input2 = document.querySelector('.input2'),
 body = document.querySelector('body');
 
function linearGradient() {
    body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
}

input1.addEventListener('input', linearGradient);
input2.addEventListener('input', linearGradient);


