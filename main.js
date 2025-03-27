let buttton = document.querySelector('button');
let counterText = document.querySelector('.counter');
let counter = 0;

buttton.addEventListener('click', function(){
    counter = counter + 1;
    
    counterText.innerText = counter;
})

//DOM - Document Object Model
