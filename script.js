'use stric'

// slider navigation Prev

let nav = document.getElementsByClassName('nav');

let navArray = Array.from(nav);

function changeIdPrev(){
	for(let i = 0; i < 6; i++){
		if(navArray[i].id == 'nav-active'){
			navArray[i].removeAttribute('id');
			i -= 1;
			if( i < 0){
				i = 5;
			}
			navArray[i].setAttribute('id', 'nav-active');
		}	
		
	}
}

// Prev slide

let slide = document.getElementsByClassName('slide');
let slideA = Array.from(slide);

function prevSlide(){
	for (let i = 0; i < 6; i++){
		if(slideA[i].id == 'active'){
			slideA[i].removeAttribute('id');		
			i -= 1;
			if( i < 0){
				i = 5;
			}
			slideA[i].setAttribute('id', 'active');
		}
	}
	for(let i = 0; i < 6; i++){
	if(slideA[i].id == 'active'){
		slideA[i].children[0].classList.add('active');
		slideA[i].children[1].classList.add('active');
		slideA[i].children[2].classList.add('active');

		slideA[i].children[0].classList.remove('expectation');
		slideA[i].children[1].classList.remove('expectation');
		slideA[i].children[2].classList.remove('expectation');
	} else {
		slideA[i].children[0].classList.remove('active');
		slideA[i].children[1].classList.remove('active');
		slideA[i].children[2].classList.remove('active');

		slideA[i].children[0].classList.add('expectation');
		slideA[i].children[1].classList.add('expectation');
		slideA[i].children[2].classList.add('expectation');
	}
}
}
// button Prev

let btnPrev = document.getElementById('btn-prev');
let btnPrevStar = document.getElementsByClassName('btn-prev');
let btnPrevArrow = document.getElementById('arrow-left');

function btnPrevStBack(){
	btnPrev.style.backgroundColor = 'black';
	btnPrevArrow.style.backgroundColor = 'orange';

	for(let i = 0; i < 5; i++){
		btnPrevStar[i].style.backgroundColor = 'orange';
	}
}
function btnPrevSt(){
	btnPrev.style.backgroundColor = 'orange';
	btnPrevArrow.style.backgroundColor = 'black';

	for(let i = 0; i < 5; i++){
		btnPrevStar[i].style.backgroundColor = 'black';
	}
	setTimeout(btnPrevStBack, 200);
	changeIdPrev();
	prevSlide();
}
btnPrev.addEventListener('click', btnPrevSt);


// slider navigation Next

function changeIdNext(){
	for(let i = 0; i < 6; i++){
		if(navArray[i].id == 'nav-active'){
			navArray[i].removeAttribute('id');
			i += 1;
			if( i == 6){
				i = 0;
			}
			navArray[i].setAttribute('id', 'nav-active');
		}	
	}
}

// Next slide

function nextSlide(){
	for (let i = 0; i < 6; i++){
		if(slideA[i].id == 'active'){
			slideA[i].removeAttribute('id');
			i += 1;
			if( i == 6){
				i = 0;
			}
			slideA[i].setAttribute('id', 'active');
		}
	}
	for(let i = 0; i < 6; i++){
	if(slideA[i].id == 'active'){
		slideA[i].children[0].classList.add('active');
		slideA[i].children[1].classList.add('active');
		slideA[i].children[2].classList.add('active');

		slideA[i].children[0].classList.remove('expectation');
		slideA[i].children[1].classList.remove('expectation');
		slideA[i].children[2].classList.remove('expectation');
	} else {
		slideA[i].children[0].classList.remove('active');
		slideA[i].children[1].classList.remove('active');
		slideA[i].children[2].classList.remove('active');

		slideA[i].children[0].classList.add('expectation');
		slideA[i].children[1].classList.add('expectation');
		slideA[i].children[2].classList.add('expectation');
	}
}
}

// button Next

let btnNext = document.getElementById('btn-next-border');
let btnNextBackground = document.getElementById('btn-next');
let btnNextStar = document.getElementsByClassName('btn-next');
let btnNextArrow = document.getElementById('arrow-right');

function btnNextStBack(){
	btnNextBackground.style.backgroundColor = 'orange';
	btnNextBackground.style.borderColor = 'orange';
	btnNextArrow.style.backgroundColor = 'black';
	
	for(let i = 0; i < 5; i++){
		btnNextStar[i].style.backgroundColor = 'black';
	}
}
function btnNextSt(){
	btnNextBackground.style.backgroundColor = 'black';
	btnNextBackground.style.borderColor = 'black';
	btnNextArrow.style.backgroundColor = 'orange';
	
	for(let i = 0; i < 5; i++){
		btnNextStar[i].style.backgroundColor = 'orange';
	}
	setTimeout(btnNextStBack, 200);
	changeIdNext();
	nextSlide();
}

for(let i = 0; i < 6; i++){
	if(slideA[i].id == 'active'){
		slideA[i].children[0].classList.add('active');
		slideA[i].children[1].classList.add('active');
		slideA[i].children[2].classList.add('active');

		slideA[i].children[0].classList.remove('expectation');
		slideA[i].children[1].classList.remove('expectation');
		slideA[i].children[2].classList.remove('expectation');
	} else {
		slideA[i].children[0].classList.remove('active');
		slideA[i].children[1].classList.remove('active');
		slideA[i].children[2].classList.remove('active');

		slideA[i].children[0].classList.add('expectation');
		slideA[i].children[1].classList.add('expectation');
		slideA[i].children[2].classList.add('expectation');
	}
}

btnNext.addEventListener('click', btnNextSt);