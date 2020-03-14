// NEED TO MAKE a function that gets rid of preloader

window.addEventListener('load', function(){
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');

});

const texts = ['Welcome', 'to our todoLIST APP', 'Click on organise', 'to get STARTED'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
         count++;
         index = 0;
    }
    setTimeout(type, 400);
}());
