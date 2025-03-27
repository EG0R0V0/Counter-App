let buttton_add = document.getElementById("addDay");
let button_reset = document.getElementById("resetDay");
let counterText = document.querySelector('[data-Find ="counterValue"]');
let counter = 0;

buttton_add.addEventListener('click', function(){
    counter = counter + 1;

    counterText.innerText = counter;
})

button_reset.addEventListener('click', function(){
    counter = 0;
    counterText.innerText = counter;
})

//DOM - Document Object Model
