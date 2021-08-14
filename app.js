var signUpBtn = document.querySelector(".sign-up-btn");
var goLoginBtn = document.querySelector("a");
var loginBtn = document.querySelector(".login-btn");
var loginSec = document.querySelector(".login");
var welcomeSec = document.querySelector(".welcome");
var signNameInput = document.querySelector(".sign-name");
var signUpInputs = document.querySelectorAll(".sign-up > input");
var logoutBtn = document.querySelector(".logout");
var txt = document.querySelector(".txt");
var description = document.querySelector(".description");

logoutBtn.addEventListener("click", () => {
  welcomeSec.classList.remove("active");
});

signUpBtn.addEventListener("click", () => {
  welcomeSec.classList.add("active");
  save(signUpInputs);
  var user = JSON.parse(localStorage.getItem(`data${n}`));

  txt.innerHTML = user[0];
  description.innerHTML = `Your mobile number is: ${user[1]}`;
});

goLoginBtn.addEventListener("click", () => {
  loginSec.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  welcomeSec.classList.add("active");
  save();
});

let n;

n =
  localStorage.getItem("index") === null
    ? (n = 0)
    : (n = localStorage.getItem("index"));

function save(inputs) {
  n++;
  var new_data;

  if (localStorage.getItem(`data${n}`) == null) {
    localStorage.setItem(`data${n}`, "[]");
  }

  inputs.forEach((e) => {
    new_data = e.value;
    console.log(new_data);

    var old_data = JSON.parse(localStorage.getItem(`data${n}`));
    old_data.push(new_data);
    localStorage.setItem(`data${n}`, JSON.stringify(old_data));
  });

  localStorage.setItem("index", n);
  console.log(localStorage.getItem("index"));
}

var currentData = JSON.parse(localStorage.getItem(`data${n}`));
addMore(currentData);
localStorage.setItem(`data${n}`, JSON.stringify(currentData));
function addMore(d) {
  var arr = ["chocolate", "sadgfh", "sdf"];
  d.push(arr);
}
for (let i = 0; i < localStorage.length; i++) {
  var allData = JSON.parse(localStorage.getItem(`data${i}`));
}

var object = new Object();

console.log(object);
