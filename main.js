const startBtn = document.getElementById('startButton')
const countdown = document.getElementById('countdown')
const shortBreak = document.querySelector('.shortBreak')
const longBreak = document.querySelector('.longBreak')

shortBreak.addEventListener('click', ()=> {
        countdown.innerText = '05:00';
})
      
longBreak.addEventListener('click', () => {
        countdown.innerText = '15:00';
})

startBtn.addEventListener('click', () => {
        if(countdown.innerText == '25:00'){
                pomodoroLength = 25;
                pomodoro()
                startBtn.innerText = 'Reset'
        }else if(countdown.innerText == '05:00') {
                pomodoroLength = 5;
                pomodoro()
                startBtn.innerText = 'Reset'
        }else if(countdown.innerText == '15:00'){
                pomodoroLength = 15;
                pomodoro()
                startBtn.innerText = 'Reset'
        }else if(startBtn.innerText = 'Reset'){
                window.location.reload()
        }
        
        
})

// else{

//         window.location.reload()
// }

function pomodoro(){
          // Convert the pomodoro length from minutes to milliseconds
          const pomodoroLengthMs = pomodoroLength * 60 * 1000;
      
          // Set the end time for the pomodoro
          const endTime = Date.now() + pomodoroLengthMs;
        
          // Update the countdown every second
          const interval = setInterval(function() {
            // Get the current time
            const now = new Date();
        
            // Get the distance between now and the end time
            const distance = endTime - now;
        
            // Calculate the minutes and seconds remaining
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            // If the countdown is finished, stop the interval and alert the user
            if (distance < 0) {
              clearInterval(interval);
              alert("Pomodoro timer finished!");
              return;
            }
        
            // Update the countdown element with the remaining time
            const countdown = document.getElementById("countdown");
            countdown.innerHTML = `${minutes}:${seconds}`;
          }, 1000);
}