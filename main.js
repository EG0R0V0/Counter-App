let buttton = document.querySelector('.plus_btn');
let button_reset = document.querySelector('.reset_btn');
let counterText = document.querySelector('.counter');
let counter = 0;

buttton.addEventListener('click', function(){
    counter = counter + 1;

    counterText.innerText = counter;
})

button_reset.addEventListener('click', function(){
    counterText.innerText = 0;
})

//DOM - Document Object Model
