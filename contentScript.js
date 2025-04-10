let hour =  document.querySelector('.hour')
let minute =  document.querySelector('.minute')
let second =  document.querySelector('.second')
const play = document.querySelector('.fa-play')
const pause = document.querySelector('.fa-pause')
const reset = document.querySelector('.fa-rotate-right')
const audio = new Audio('audio/bedside-clock-alarm-95792.mp3')
    
let timer;
    
    function countDown(){
        let hours = hour.value
        let minutes = minute.value 
        let seconds = second.value 
        timer =  setInterval(() => {
            if (hours > 99 || minutes > 59 || seconds > 59) {
                hours = 0;
                hour.value = hours;
                minutes = 0;
                minute.value = minutes;
                seconds = 0
                second.value = seconds
                clearInterval(timer);
                return
            }

            if(hours > 0 && minutes == 0 && seconds == 0 ){
                seconds = 60;
                minutes = 59;
                hours--
                hour.value = hours;
            } 
            
            if (hours == 0 && minutes > 0 && seconds == 0){
                seconds = 60;
                minutes--
                minute.value = minutes
            }
            
            if (hours == 0 && minutes == 0 && seconds == 0){
                audio.loop = true;
                audio.play();
                clearInterval(timer);
                return
            }
            
            minute.value = minutes
            seconds--
            second.value = seconds;
        }, 1000)
        
    }
    
    
    function resetTimer(){
        hour.value = '0'
        minute.value = '0'
        second.value = '0'
        audio.pause()
        clearInterval(timer)
        return
    }

    function pauseTimer(){
        clearInterval(timer)
    }
 const tabLink = document.querySelectorAll('.tabLinks');

 const navContainer = document.querySelector('.bottomNav');


 //figure out how this function and solve the bug.
navContainer.addEventListener('click', (e) => {
    tabLink.forEach((tab) => {

        if(e.target.classList.contains('tabLinks')){
            tab.classList.add('active')
        }
    })
    if(e.classList.contains('active')){
        e.classList.remove('active');
    }
})

play.addEventListener('click', countDown);
reset.addEventListener('click', resetTimer);
pause.addEventListener('click', pauseTimer);




