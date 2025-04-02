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
        if(hour > "0" && minute.value === "0" && second.value === "0"){
            second.value ="59";
            minute.value = "59";
            minute.value--
            hour.value--;
        } 

        
      
        // if(hour.value === "0" && minute.value === "0" && second.value === "0"){
        //     clearInterval(timer)
        // }
        second.value--;
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


