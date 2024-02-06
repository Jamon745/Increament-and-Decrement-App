
let myTextbox = document.querySelector('#myTextbox');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const reset = document.querySelector('#reset');

let my_number = 0;

plus.addEventListener("click", ()=> {
    let my_number = myTextbox.value;

    my_number ++;
    myTextbox.value = my_number;

});

minus.addEventListener('click', function(){
    let my_number = myTextbox.value;
    
    my_number --;
    myTextbox.value = my_number;
});

reset.addEventListener('click', function() {
    my_number = 0;
    myTextbox.value = my_number;
})

