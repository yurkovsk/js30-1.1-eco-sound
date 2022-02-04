const button = document.querySelector('.button')

button.addEventListener('click', () => {
    button.classList.toggle('pause')
})

const audio = document.querySelector('.audio')
button.addEventListener('click', pauseAudio)
let isPlay = true;
function pauseAudio (){
    if(isPlay === false){
        isPlay = true
        audio.pause()
    }
    else {isPlay = false
    audio.currentTime = 0
    audio.play()}
}

function playAudio() {
    isPlay = false
    audio.currentTime = 0;
    audio.play();
}



const main = document.querySelector('.main')
const list = document.querySelector('.list')
const solovey = document.querySelector('.solovey')
const drozd = document.querySelector('.drozd')
const zarynka = document.querySelector('.zarynka')
const javoronok = document.querySelector('.javoronok')
const slavka = document.querySelector('.slavka')
const forest = document.querySelector('.forest')

solovey.addEventListener('click', () =>{
    solovey.classList.add('active')
    main.style.backgroundImage = "url('./assets/img/solovey.jpg')"
    audio.src = "./assets/audio/solovey.mp3"
    drozd.classList.remove('active')
    zarynka.classList.remove('active') 
    javoronok.classList.remove('active')
    slavka.classList.remove('active')
    forest.classList.remove('active')
    button.classList.add('pause')
    playAudio ();      
})

drozd.addEventListener('click', () =>{
    drozd.classList.add('active')
    main.style.backgroundImage = "url('./assets/img/drozd.jpg')"
    audio.src = "./assets/audio/drozd.mp3"
    solovey.classList.remove('active')
    zarynka.classList.remove('active')
    javoronok.classList.remove('active')
    slavka.classList.remove('active')
    forest.classList.remove('active')
    button.classList.add('pause')
    playAudio ();       
})

zarynka.addEventListener('click', () =>{
    zarynka.classList.add('active')
    main.style.backgroundImage = "url('./assets/img/zarynka.jpg')"
    audio.src = "./assets/audio/zarynka.mp3"
    solovey.classList.remove('active')
    drozd.classList.remove('active')
    javoronok.classList.remove('active')
    slavka.classList.remove('active')
    forest.classList.remove('active') 
    button.classList.add('pause')
    playAudio ();  
})

javoronok.addEventListener('click', () =>{
    javoronok.classList.add('active')
    main.style.backgroundImage = "url('./assets/img/javoronok.jpg')"
    audio.src = "./assets/audio/javoronok.mp3"
    solovey.classList.remove('active')
    drozd.classList.remove('active')
    zarynka.classList.remove('active')
    slavka.classList.remove('active')
    forest.classList.remove('active')
    button.classList.add('pause')
    playAudio ();   
})

slavka.addEventListener('click', () =>{
    slavka.classList.add('active')
    main.style.backgroundImage = "url('./assets/img/slavka.jpg')"
    audio.src = "./assets/audio/slavka.mp3"
    solovey.classList.remove('active')
    drozd.classList.remove('active')
    zarynka.classList.remove('active')
    forest.classList.remove('active')
    javoronok.classList.remove('active') 
    button.classList.add('pause')
    playAudio (); 
})

forest.addEventListener('click', () =>{
    forest.classList.add('active')
    main.style.backgroundImage = "url('./assets/img/forest.jpg')"
    audio.src = "./assets/audio/forest.mp3"
    solovey.classList.remove('active')
    drozd.classList.remove('active')
    zarynka.classList.remove('active')
    slavka.classList.remove('active')
    javoronok.classList.remove('active') 
    button.classList.add('pause')
    playAudio ();
})
