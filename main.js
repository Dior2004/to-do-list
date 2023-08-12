// doms

let circle = document.querySelector(".circle");
let del = document.querySelector("#delete");
let inp = document.querySelector(".search input");
let taskUl = document.querySelector("#task_ul");

circle.addEventListener("click", darkMode);

del.addEventListener("click", clearInputValue);

// Dark Mode

function darkMode() {
  circle.classList.toggle("dark_mode");
  if (circle.classList.contains("dark_mode")) {
    document.body.style = "background: #333";
    moon.style =
      "transform: rotate(720deg); opacity: 0;  position: absolute; transition: 0.7s;";
    sun.style =
      "transform: rotate(-180deg); opacity: 1;  position: absolute; transition: 0.7s";
    document.documentElement.style.setProperty("--shadow-color", "#171717");
    document.documentElement.style.setProperty("--input-color", "#36ff1b");
  } else {
    document.body.style = "background: #fff";
    moon.style = "opacity: 1; position: absolute; transition: 0.7s;";
    sun.style = "opacity: 0; position: absolute; transition: 0.7s";
    document.documentElement.style.setProperty("--shadow-color", "#cbcbcba5");
    document.documentElement.style.setProperty("--input-color", "#14b314f5");
  }
}

//  Clearing info in input

function clearInputValue() {
  inp.value = "";
}

// List below

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (inp.value.length > 0 && inp.value.trim()) {
    // list

    let list = document.createElement("li");
    list.className = "task_li";
    taskUl.appendChild(list);

    let writtenTask = document.createElement("p");
    writtenTask.className = "written_task";
    list.appendChild(writtenTask);
    writtenTask.innerText = inp.value;

    // wrapper

    let wrap = document.createElement("div");
    wrap.className = "wrap";
    list.appendChild(wrap);

    // time

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let time = document.createElement("span");
    time.className = "time_span";
    if (hours < 10) {
      time.innerText = `0${hours} : ${minutes}`;
    } else if (minutes < 10) {
      time.innerText = `${hours} : 0${minutes}`;
    } else {
      time.innerText = `${hours} : ${minutes}`;
    }

    // Turnary Operator

    // time.innerText

    wrap.appendChild(time);

    // Done

    let doneIcon = document.createElement("i");
    doneIcon.className = "fa-regular fa-circle-check";
    wrap.appendChild(doneIcon);
    doneIcon.addEventListener("click", () => {
      writtenTask.classList.toggle("eleminating");
      doneIcon.classList.toggle("after");
    });

    // Del

    let delIcon = document.createElement("i");
    delIcon.className = "fa-regular fa-circle-xmark";
    wrap.appendChild(delIcon);
    delIcon.addEventListener("click", () => {
      list.style = "display: none";
    });

    inp.value = "";
  }
});

// Delete all

let delAll = document.querySelector(".delete");
let warning = document.querySelector(".delete_warning");
let allData = document.querySelector("#all");

delAll.addEventListener("click", () => {
  allData.style = "display: none";
  warning.style = "display: flex";

  no.addEventListener("click", () => {
    allData.style = "display: block";
    warning.style = "display: none";
  });

  yes.addEventListener("click", () => {
    document.location.reload(true);
  });
});
