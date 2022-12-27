const startBtn = document.getElementById("startButton");
const countdown = document.getElementById("countdown");
const shortBreak = document.querySelector(".shortBreak");
const longBreak = document.querySelector(".longBreak");
const remove = document.querySelector(".fa-minus");
const li = document.querySelector("li");
const pomo = document.querySelector(".pomo");

li.addEventListener("click", () => {
  li.remove();
});

shortBreak.addEventListener("click", () => {
  countdown.innerText = "05:00";
});

longBreak.addEventListener("click", () => {
  countdown.innerText = "15:00";
});

pomo.addEventListener("click", () => {
  countdown.innerText = "25:00";
});

startBtn.addEventListener("click", () => {
  if (countdown.innerText == "25:00") {
    pomodoroLength = 25;
    pomodoro();
    startBtn.innerText = "Reset";
  } else if (countdown.innerText == "05:00") {
    pomodoroLength = 5;
    pomodoro();
    startBtn.innerText = "Reset";
  } else if (countdown.innerText == "15:00") {
    pomodoroLength = 15;
    pomodoro();
    startBtn.innerText = "Reset";
  } else if ((startBtn.innerText = "Reset")) {
    window.location.reload();
  }
});

// else{

//         window.location.reload()
// }

function pomodoro() {
  // Convert the pomodoro length from minutes to milliseconds
  const pomodoroLengthMs = pomodoroLength * 60 * 1000;

  // Set the end time for the pomodoro
  const endTime = Date.now() + pomodoroLengthMs;

  // Update the countdown every second
  const interval = setInterval(function () {
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

// To-Do List Part

const addButton = document.querySelector(".fa-plus");
addButton.addEventListener("click", addToDo);

function addToDo() {
  const input = document.querySelector(".form-control").value;
  const li = document.createElement("li");
  li.className = "d-flex";
  const i = document.createElement("i");
  i.className = "fa-solid fa-minus text-danger";

  li.innerHTML = input;
  document.querySelector("ul").appendChild(li);
  li.appendChild(i);
  // Local Storage
  let toDos;
  if (localStorage.getItem("toDos")) {
    const toDosString = localStorage.getItem("toDos");
    toDos = JSON.parse(toDosString);
  } else {
    toDos = [];
  }
  toDos.push(input);
  localStorage.setItem("toDos", JSON.stringify(toDos));

  i.addEventListener("click", () => {
    li.remove();
  });
}

function displayToDos() {
  // Get the to-do items from local storage
  let toDos = [];
  const toDosInStorage = localStorage.getItem("toDos");
  if (toDosInStorage) {
    // If there are to-do items in storage, parse them from the string representation
    toDos = JSON.parse(toDosInStorage);
  }

  // Iterate through the to-do items and display them on the page
  for (const toDo of toDos) {
    // Create a new list item element
    const li = document.createElement("li");

    // Set the inner HTML of the list item to be the to-do item text
    li.innerHTML = toDo;

    // Append the list item to the unordered list
    document.querySelector("ul").appendChild(li);
  }
}

window.onload = displayToDos;

// clear everything
document.querySelector(".clear").addEventListener("click", () => {
  localStorage.clear();
  document.querySelector("ul").innerHTML = "";
});

const github = document.querySelector(".fa-github");
const dark = document.querySelector(".dark-mode");

function loadPage() {
  document.body.style.background = "white";
}
loadPage();

dark.addEventListener("click", () => {
  if (document.body.style.background == "white") {
    document.body.style.background = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
});
