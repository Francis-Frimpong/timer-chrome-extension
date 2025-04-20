let hour =  document.querySelector('.hour')
let minute =  document.querySelector('.minute')
let second =  document.querySelector('.second')
const play = document.querySelector('.fa-play')
const pause = document.querySelector('.fa-pause')
const reset = document.querySelector('.fa-rotate-right')
const audio = new Audio('audio/bedside-clock-alarm-95792.mp3')
    
let timer;
    
    function countDown(){
        play.classList.add('disabled');
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

            if (seconds == 0){
                seconds = 60
                second.value = seconds;
                minutes--
            }
            --seconds
            second.value = seconds
            minute.value = minutes
        }, 1000)
        
    }
    
    
    function resetTimer(){
        play.classList.remove('disabled');
        hour.value = '0'
        minute.value = '0'
        second.value = '0'
        audio.pause()
        clearInterval(timer)
        return
    }

    function pauseTimer(){
        play.classList.remove('disabled');
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
    input.setAttribute("value", inputValue);
    return input;
 }

 // Creating icon element function
 function icon(el,className1, className2) {
    let icon = document.createElement(el)
    icon.classList.add(className1)
    icon.classList.add(className2)
    return icon
 }




const watchHour = document.querySelector('.hour')
const watchMinute = document.querySelector('.minute')
const watchSecond= document.querySelector('.second')



let hourCount = 0;
let minuteCount = 0;
let secondCount = 0

let stopWatch;

function watch(){

    watchHour.textContent =  hourCount;
    watchMinute.textContent = minuteCount;
    watchSecond.textContent = secondCount;

    stopWatch = setInterval(() => {
        if (secondCount === 60){
            minuteCount++
            secondCount = 0;
        }

        if (minuteCount === 60){
            hourCount++
            minuteCount = 0;
        }
        watchHour.textContent = hourCount;
        watchMinute.textContent = minuteCount;
        watchSecond.textContent = ++secondCount
    }, 1000)

    console.log('watch');
}

function watchReset(){
    hourCount = 0;
    watchHour.textContent = hourCount;
    minuteCount = 0;
    watchMinute.textContent = minuteCount;
    secondCount = 0;
    watchSecond.textContent = secondCount;
    clearInterval(stopWatch)
    return
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

        let hour = document.createElement('h3')
        hour.classList.add('hour')
        hour.textContent = '0';
        let minute = document.createElement('h3')
        minute.classList.add('minute')
        minute.textContent = '0';
        let second = document.createElement('h3')
        second.classList.add('second')
        second.textContent = '0';

        //Creating Controllers
        const controls = document.createElement('div');
        controls.classList.add('icons')
        const playIcon = icon('i', 'fa-solid' ,'fa-play');
        const resetIcon = icon('i', 'fa-solid' ,'fa-rotate-right')

        //Adding eventListeners to controllers
        playIcon.addEventListener('click', watch);
        resetIcon.addEventListener('click', watchReset);

        stopWatch.appendChild(hour)
        stopWatch.appendChild(minute)
        stopWatch.appendChild(second)

        controls.appendChild(playIcon);
        controls.appendChild(resetIcon);

        container.appendChild(stopWatch);
        container.appendChild(controls)



        // Stopwatch functionality after html element is dynamically injected with JS
        let hourCount = 0;
        let minuteCount = 0;
        let secondCount = 0

        let stopWatchCounter;

        //Play
        function watch(){
            playIcon.classList.add('disabled')
            hour.textContent =  hourCount;
            minute.textContent = minuteCount;
            second.textContent = secondCount;

            stopWatchCounter = setInterval(() => {
                if (secondCount === 59){
                    minuteCount++
                    secondCount = 0;
                }

                if (minuteCount === 60){
                    hourCount++
                    minuteCount = 0;
                }
                hour.textContent = hourCount;
                minute.textContent = minuteCount;
                second.textContent = ++secondCount
            }, 1000)

            console.log('watch');
        }

        //reset
        function watchReset(){
            playIcon.classList.remove('disabled')
            hourCount = 0;
            hour.textContent = hourCount;
            minuteCount = 0;
            minute.textContent = minuteCount;
            secondCount = 0;
            second.textContent = secondCount;
            clearInterval(stopWatchCounter)
            return
        }
       
    }else if (e.target === tabLink[2]){
          //get access to the container
          let container = document.querySelector('.container')

          container.innerHTML = ""; //clear or empty the container
          //create a new div element
          const alarm = document.createElement("div");
          alarm.classList.add('clock')

          const digitalWatch= document.createElement("div");
          digitalWatch.classList.add('digiClock')

          

        alarm.appendChild(digitalWatch)
          container.appendChild(alarm);

          let timeCont = document.querySelector('.clock')
          let digiClock = document.querySelector('.digiClock')
            const clock = setInterval(() => {
                const time = new Date();
                let hr = time.getHours();
                let min = time.getMinutes();
                let sec = time.getSeconds();
                let timeOfday;

                if(hr > 12){
                    hr - 12;
                }

                if (hr < 12){
                    timeOfday = "am";
                } else {
                    timeOfday = "pm";
                }

                digiClock.innerHTML =`
                    <h2>${hr} : </h2> <h2> ${min} </h2>  <h2>: ${sec}</h2> <h4>${timeOfday}</h4>
                
                `;
            }, 1000)

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

        //Creating the control icons
        const playIcon = icon('i', 'fa-solid' ,'fa-play');
        const pauseIcon = icon('i', 'fa-solid' ,'fa-pause')
        const resetIcon = icon('i', 'fa-solid' ,'fa-rotate-right')

        // adding eventListeners to the icons
        playIcon.addEventListener('click', countDown);
        pauseIcon.addEventListener('click', pauseTimer);
        resetIcon.addEventListener('click', resetTimer);

        controllersIcon.appendChild(playIcon)
        controllersIcon.appendChild(pauseIcon)
        controllersIcon.appendChild(resetIcon)

        container.appendChild(timerContainer);
        timerContainer.appendChild(timers);
        timerContainer.appendChild(controllersIcon);



        let timer;
    
        function countDown(){
            playIcon.classList.add('disabled');
            let hours = hourInput.value
            let minutes = minuteInput.value 
            let seconds = secondInput.value 
            
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
                    hourInput.value = hours;
                } 
                
                if (hours == 0 && minutes > 0 && seconds == 0){
                    seconds = 60;
                    minutes--
                    minuteInput.value = minutes
                }
                
                if (hours == 0 && minutes == 0 && seconds == 0){
                    audio.loop = true;
                    audio.play();
                    clearInterval(timer);
                    return
                }

                if (seconds == 0){
                    seconds = 60
                    secondInput.value = seconds;
                    minutes--
                }
                
                --seconds
                secondInput.value = seconds;
                minuteInput.value = minutes
            }, 1000)
            
        }
        
        
        function resetTimer(){
            playIcon.classList.remove('disabled');
            hourInput.value = '0'
            minuteInput.value = '0'
            secondInput.value = '0'
            audio.pause()
            clearInterval(timer)
            return
        }

        function pauseTimer(){
            playIcon.classList.remove('disabled');
            clearInterval(timer)
        }



            
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
    
//Things to do tomorrow
// Figure out the am and pm functionality
// Figure out how to set and compere time
//style it properly the digital clock properly
