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

 // Creating input element function
 function input(el,className, className1, inputType, inputValue){
    let input = document.createElement(el)
    input.classList.add(className)
    input.classList.add(className1)
    input.type = inputType
    input.value = inputValue
    return input;
 }

 // Creating icon element function
 function icon(el,className1, className2) {
    let icon = document.createElement(el)
    icon.classList.add(className1)
    icon.classList.add(className2)
    return icon
 }

 
navContainer.addEventListener('click', (e) => {

    //Active tab functionality
        tabLink.forEach((tab) => {
            if(e.target === tab){
                e.target.classList.add('active')
            } else {
                tab.classList.remove('active');
            }

    })

    // Inserting new HTML element based on a specific tab clicked
    if (e.target === tabLink[1]){
        //get access to the container
        let container = document.querySelector('.container')

        container.innerHTML = ""; //clear or empty the container
        //create a new div element
        const stopWatch = document.createElement("div");
        stopWatch.classList.add('stopWatchContainer')

        stopWatch.innerHTML = `
                <h3 class="hour">0</h3>
                <h3 class="minute">0</h3>
                <h3 class="second">0</h3>
        `;
        container.appendChild(stopWatch);

    }else if (e.target === tabLink[2]){
          //get access to the container
          let container = document.querySelector('.container')

          container.innerHTML = ""; //clear or empty the container
          //create a new div element
          const stopWatch = document.createElement("div");
          stopWatch.classList.add('stopWatchContainer')
  
          stopWatch.innerHTML = `
                  <h3 class="hour">0</h3>
                  <h3 class="minute">0</h3>
                  <h3 class="second">0</h3>
          `;
          container.appendChild(stopWatch);
    }
    else {
          //get access to the container
        let container = document.querySelector('.container')

        container.innerHTML = ""; //clear or empty the container
        //create a new div element
        const timerContainer = document.createElement("div");
        timerContainer.classList.add('timerContainer')
        
        // Creating the timers div
        let timers = document.createElement('div')
        timers.classList.add('timers')
        // Creating the input field for hour, minute and second
        const hourInput = input('input','hour','styleValue','text','0')
        const minuteInput = input('input','minute','styleValue','text','0')
        const secondInput = input('input','second', 'styleValue','text','0')
        timers.appendChild(hourInput)
        timers.appendChild(minuteInput)
        timers.appendChild(secondInput)
        timerContainer.appendChild(timers)

        // Creating icons div
        let controllersIcon = document.createElement('div')
        controllersIcon.classList.add('icons')

        const playIcon = icon('i', 'fa-solid' ,'fa-play')
        const pauseIcon = icon('i', 'fa-solid' ,'fa-pause')
        const resetIcon = icon('i', 'fa-solid' ,'fa-rotate-right')
        controllersIcon.appendChild(playIcon)
        controllersIcon.appendChild(pauseIcon)
        controllersIcon.appendChild(resetIcon)

        container.appendChild(timerContainer);
        timerContainer.appendChild(timers);
        timerContainer.appendChild(controllersIcon);


        play.addEventListener('click', countDown);
        reset.addEventListener('click', resetTimer);
        pause.addEventListener('click', pauseTimer);
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
    

// Things to tackle for the day
// Create new html element the proper way
//Figure out how to access or mentain functionlity when new html element are inserted
// Read about DOMContentLoader to see whether it can help with the functionality issue.
// Add styling to unstyled html element
