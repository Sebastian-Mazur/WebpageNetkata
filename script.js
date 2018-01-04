var buttonPrev = document.getElementById('prev');
var buttonNext = document.getElementById('next');

var numberSlide = 1;
slide(numberSlide);

function plusSlides() {
    slide(numberSlide += 1);
};

function minusSlides() {
    slide(numberSlide -= 1);
};


buttonPrev.addEventListener('click', minusSlides);
buttonNext.addEventListener('click', plusSlides);


function slide(nr) {
    var i;
    var content = document.getElementsByClassName('content');    

    if (nr > content.length) { numberSlide = 1 }
    if (nr < 1) { numberSlide = content.length };
    for (i = 0; i < content.length; i++) {
        content[i].style.display = 'none';
    }

    content[numberSlide - 1].style.display = 'block';    
};
