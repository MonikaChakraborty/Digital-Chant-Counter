const ganeshayaDisplay = document.getElementById('ganeshayaDisplay');
const ganeshayaIncrementBtn = document.getElementById('ganeshayaIncrementBtn');
const ganeshayaDecrementBtn = document.getElementById('ganeshayaDecrementBtn');


const shivayaDisplay = document.getElementById('shivayaDisplay');
const shivayaIncrementBtn = document.getElementById('shivayaIncrementBtn');
const shivayaDecrementBtn = document.getElementById('shivayaDecrementBtn');



const vasudevayaDisplay = document.getElementById('vasudevayaDisplay');
const vasudevayaIncrementBtn = document.getElementById('vasudevayaIncrementBtn');
const vasudevayaDecrementBtn = document.getElementById('vasudevayaDecrementBtn');


const resetBtn = document.getElementById('resetBtn');

let ganeshayaInitialValue = 0;
let shivayaInitialValue = 0;
let vasudevayaInitialValue = 0;


// Ganeshaya Chant

ganeshayaIncrementBtn.addEventListener('click', function(){
    if(ganeshayaInitialValue === 108){
        return alert("Ganeshaya Chant Complete. Please fill another one");
    }

    ganeshayaInitialValue++;
    ganeshayaDisplay.innerText = ganeshayaInitialValue;
})

ganeshayaDecrementBtn.addEventListener('click', function(){
    if(ganeshayaInitialValue === 0){
        return alert ('You can not add negative value');
    }

    ganeshayaInitialValue--;
    ganeshayaDisplay.innerText = ganeshayaInitialValue;
})


// Shivaya Chant

shivayaIncrementBtn.addEventListener('click', function(){
    if(shivayaInitialValue === 108){
        return alert("Shivaya Chant Complete. Please fill another one");
    }

    shivayaInitialValue++;
    shivayaDisplay.innerText = shivayaInitialValue;
})

shivayaDecrementBtn.addEventListener('click', function(){
    if(shivayaInitialValue === 0){
        return alert ('You can not add negative value');
    }
    shivayaInitialValue--;
    shivayaDisplay.innerText = shivayaInitialValue;
})


// Vasudevaya Chant

vasudevayaIncrementBtn.addEventListener('click', function(){
    if(vasudevayaInitialValue === 108){
        return alert("Vasudevaya Chant Complete. Please fill another one");
    }

    vasudevayaInitialValue++;
    vasudevayaDisplay.innerText = vasudevayaInitialValue;
})

vasudevayaDecrementBtn.addEventListener('click', function(){
    if(vasudevayaInitialValue === 0){
        return alert ('You can not add negative value');
    }

    vasudevayaInitialValue--;
    vasudevayaDisplay.innerText = vasudevayaInitialValue;
})


resetBtn.addEventListener('click', function(){
    ganeshayaDisplay.innerText = 0;
    shivayaDisplay.innerText = 0;
    vasudevayaDisplay.innerText = 0;

    ganeshayaInitialValue = 0;
    shivayaInitialValue = 0;
    vasudevayaInitialValue = 0;
})