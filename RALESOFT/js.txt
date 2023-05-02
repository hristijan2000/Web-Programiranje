'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//Konstanta za otvaranje na model
const openModel = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//Konstanta za isklucvanje na modelot 
const closeModel = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for(let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModel);

    btnCloseModal.addEventListener('click', closeModel);

    overlay.addEventListener('click', closeModel);

    document.addEventListener('keydown', function(e){
        
        //Funkcija za isklucvanje na modelot so Escape
        if(e.key === 'Escape' && !modal.classList.contains('hidden')){
           
                closeModel();

        }
    });

    
    