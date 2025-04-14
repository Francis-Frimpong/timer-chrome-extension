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
 
navContainer.addEventListener('click', (e) => {

    //Active tab functionality
        tabLink.forEach((tab) => {
            if(e.target === tab){
                e.target.classList.add('active')
            } else {
                tab.classList.remove('active');
            }

    })

    if (e.target === tabLink[1]){
        const stopWatch = document.createElement("div");
        stopWatch.classList.add('stopWatchContainer')

        stopWatch.innerHTML = `
                <h3 class="hour">0</h3>
                <h3 class="minute">0</h3>
                <h3 class="second">0</h3>
        `;
        document.querySelector('.container').appendChild(stopWatch);

    }else if (e.target === tabLink[2]){
        console.log('tab 2');
    }
    else {
        console.log('default tab');
    }

    
})

play.addEventListener('click', countDown);
reset.addEventListener('click', resetTimer);
pause.addEventListener('click', pauseTimer);


// const listA = [1,2,3]
// const listB = ['A','B','C']
// listB.forEach((letter, index) => {
//     console.log(`${letter}:${listA[index]}`);

// })
    


