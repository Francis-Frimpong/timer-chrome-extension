let hour =  document.querySelector('.hour')
let minute =  document.querySelector('.minute')
let second =  document.querySelector('.second')
const play = document.querySelector('.fa-play')
const reset = document.querySelector('.fa-rotate-right')



function stopTimer(){
    clearInterval(timer)
}


//continue to debug timer function tomorrow
function timer(){
   let timer =  setInterval(() => {

    let hours = Number(hour.value)
    let minutes = Number(minute.value)
    let seconds = Number(second.value)
        if(hours > 0 && minutes !== 0 && seconds === 0){
            second.value ="59";
            minute.value = String(minutes - 1)
        } 
        else if(hours > 0 && minutes === 0 && seconds === 0){
            second.value ="59";
            minute.value = "59"
            minute.value = String(minutes - 1);
            hour.value = String(hours - 1);
        } 
        else if(hour === 0 ){
            second.value ="59";
            minute.value = "59";

        }
        else if(minute === 0){
            second.value = "59";
        }
        else if (hours === 0 && minutes === 0 && seconds === 0){
            clearInterval(timer)
        }
        else{
            second.value = String(seconds - 1);
        }

    }, 1000)
}

function resetTimer(){
    hour.value = '0'
    munite.value = '0'
    second.value = '0'
    clearInterval(timer)
}



play.addEventListener('click', timer)
reset.addEventListener('click', resetTimer)


