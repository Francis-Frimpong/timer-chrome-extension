let hour =  document.querySelector('.hour')
let minute =  document.querySelector('.minute')
let second =  document.querySelector('.second')
const play = document.querySelector('.fa-play')
const reset = document.querySelector('.fa-rotate-right')



function stopTimer(){
    clearInterval(timer)
}


//continue to debug timer function tomorrow
//if hour > 0 and minutes === 0 and seconds === 0
    //second.value = 59
    //minute.value = 59
    //minute.value - 1
    //hour.value - 1
//if hour === 0
    //hour.value = 0 
    //minute.value = 59
    //second.value = 59
    //minute.value - 1
//if minute === 0
    //minute.value = 0
    //second.value = 59
//if seconds === 0
    // cancel timer or countDown





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
            // second.value ="59";
            minute.value = "59"
            hour.value = String(hours - 1);
        } 
        else if(hours === 0 ){
            hour.value = String(hours = 0)
            // second.value ="59";
            minute.value = "59";

        }
        else if(minutes === 0){
            minute.value = String(minutes = 0)
            // second.value = "59";
        }
        // else if (seconds === 0){
        //     clearInterval(timer)
        // }
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


// if(hours > 0 && minutes !== 0 && seconds === 0){
//     second.value ="59";
//     minute.value = String(minutes - 1)
// } 
// else if(hours > 0 && minutes === 0 && seconds === 0){
//     second.value ="59";
//     minute.value = "59"
//     minute.value = String(minutes - 1);
//     hour.value = String(hours - 1);
// } 
// else if(hour === 0 ){
//     second.value ="59";
//     minute.value = "59";

// }
// else if(minute === 0){
//     second.value = "59";
// }
// else if (hours === 0 && minutes === 0 && seconds === 0){
//     clearInterval(timer)
// }
// else{
//     second.value = String(seconds - 1);
// }