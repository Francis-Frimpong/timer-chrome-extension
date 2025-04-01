let hour =  document.querySelector('.hour')
let munite =  document.querySelector('.minute')
let second =  document.querySelector('.second')
const play = document.querySelector('.fa-play')


play.addEventListener('click', () => {

    setInterval(() => {
        if(second.value === "0"){
            second.value ="59";
            munite.value--
        }
      
        second.value--

    }, 1000)
})



// if(second.value === "0" && munite.value === "0"){
//     clearInterval()
//     second.value === "0";
//     munite.value === "0";
// }