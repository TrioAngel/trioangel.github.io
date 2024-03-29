// slide part

let imgs = [
    "url('imgs/1.png')",
    "url('imgs/2.png')",
    "url('imgs/3.png')",
    "url('imgs/4.png')",
    "url('imgs/5.png')",
    "url('imgs/6.png')",
    "url('imgs/7.png')",
    "url('imgs/8.png')"
];

let counter = 1;

setInterval(() => {
    if (counter == 8) {
        counter = 0
    }
    document.getElementById('backSlide').style.backgroundImage = imgs[counter];

    counter++;
}, 8000);



// navbar

$(function(){
    $(document).scroll(function(){
        $('#showNav').toggleClass('displayNone', $(this).scrollTop() < 820)
    })
})

//ask a question

$('#firstBtn, #secondBtn').on('click', function () {
    $('#secondBtn').toggle();
    $('.secondNav').toggle();
    $('#firstBtn').toggle();
})


//modal

// $('#openModal, #closeModal').click(function () {
//     $('#modal-all').toggle();
// })

let openModal = document.querySelector('#openModal');
let closeModal = document.querySelector('#closeModal');
let modalAll = document.querySelector('#modal-all');

openModal.addEventListener('click', openModal = () => {
    modalAll.style.display = 'block'
});

closeModal.addEventListener('click', closeModal = () => {
    modalAll.style.display = 'none'
});

window.addEventListener('click', clickOutside = (event) => {
    if(event.target == modalAll){
        modalAll.style.display = 'none'
    }
})