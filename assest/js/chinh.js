//--------------------------------------------------------REFERENCES-----------------------------------//

let userlink = document.getElementById('userlink');
let signoutlink = document.getElementById('signoutlink')
let header = document.getElementById('hh')
var currentUser = null

//--------------------------------------------------------FUNCTIONS-----------------------------------------//

function getUsername() {
    let keepLoggedIn = localStorage.getItem("keepLoggedIn");

    if (keepLoggedIn == 'yes') {
        currentUser = JSON.parse(localStorage.getItem('user'));
    }
    else {
        currentUser = JSON.parse(sessionStorage.getItem('user'));
    }
}


function Signout() {
    sessionStorage.removeItem('user')
    localStorage.removeItem('user')
    window.location = "home.html";
}

//------------------------------------Windowns loads------------------------------------

window.onload = function () {
    getUsername()
    if (currentUser == null) {
        userlink.innerText = "Create New Account"
        userlink.classList.replace("nav-link", "btn")
        userlink.classList.add("btn-primary")
        userlink.href = "web_Sign.html";

        Signout.innerText = "Login"
        signoutlink.classList.replace("nav-link", "btn")
        signoutlink.classList.add("btn-success")
        signoutlink.href = "web_login.html"
    }

    else {
        userlink.innerText = currentUser.getUsername
        header.innerText = "welcome" + currentUser.fullname
        userlink.classList.replace("btn", "nav-link")
        userlink.classList.add("btn-primary")
        userlink.href = "#";

        Signout.innerText = "Sign Out"
        signoutlink.classList.replace("btn", "nav-link")
        signoutlink.classList.add("btn-success")
        signoutlink.href = "javascript:Sigout()"
    }
}

//-------------------------------------------NODE_1-------------------------------------------------------------//
const background = document.querySelector(".node_1")
const box = document.querySelector(".boxs")
const box1 = document.querySelector(".boxs1")
const hinh_tron = document.querySelector("circles")
const hinh_tron1 = document.querySelector("circles1")
const under = document.querySelector(".unders")
const under1 = document.querySelector(".unders1")
const above = document.querySelector(".aboves")
const above1 = document.querySelector(".aboves1")


const small_round = document.querySelector(".small_rounds")
const small_round1 = document.querySelector(".small_rounds1")
const container = document.querySelector(".containers")
const container1 = document.querySelector(".containers1")
const percent = document.querySelector(".percents")
const percent1 = document.querySelector(".percents1")

percent.innerHTML = "0" + '&#176' + 'C';
percent1.innerHTML = "0" + '&#176' + 'C';
function updateSlider() {
    // tọa độ của tâm O
    var x_mind = box.getBoundingClientRect().left + box.getBoundingClientRect().height / 2;
    var y_mind = box.getBoundingClientRect().top + box.getBoundingClientRect().height / 2;

    // tọa độ x , y so với tâm O 
    var x = event.clientX - x_mind;
    var y = event.clientY - y_mind;

    // angle tính bằng độ
    var rad = Math.atan(y / x) * 180 / Math.PI;
    // điều khiệm hàm arctan
    if (x > 0) {
        rad = rad;
    } else if (x < 0 && y >= 0) {
        rad = rad + 180;
    } else if (x < 0 && y < 0) {
        rad = rad - 180;
    } else if (x == 0 && y > 0) {
        rad = 90;
    } else if (x == 0 && y > 0) {
        rad = -90;
    } else {
    }
    if (rad < 0) { rad = rad + 360; }
    rad = rad - 180;

    if (rad < 0) { rad = rad + 360; }
    var ratio = (rad * 100 / 360).toFixed();
    percent.innerHTML = ratio + '&#176' + 'C';
    container.style.setProperty("transform", `rotate(${rad}deg) translate(${0}px)`);
    above.style.setProperty("stroke-dashoffset", `${910 - (rad * 910 / 360)}`);
    console.log("NHiệt độ: " + percent.innerHTML);

}
// -----Slider 

function updateSlider1() {
    // tọa độ của tâm O
    var x_mind = box1.getBoundingClientRect().left + box1.getBoundingClientRect().height / 2;
    var y_mind = box1.getBoundingClientRect().top + box1.getBoundingClientRect().height / 2;

    // tọa độ x , y so với tâm O 
    var x = event.clientX - x_mind;
    var y = event.clientY - y_mind;

    // angle tính bằng độ
    var rad1 = Math.atan(y / x) * 180 / Math.PI;
    // điều khiệm hàm arctan
    if (x > 0) {
        rad1 = rad1;
    } else if (x < 0 && y >= 0) {
        rad1 = rad1 + 180;
    } else if (x < 0 && y < 0) {
        rad1 = rad1 - 180;
    } else if (x == 0 && y > 0) {
        rad1 = 90;
    } else if (x == 0 && y > 0) {
        rad1 = -90;
    } else {
    }
    if (rad1 < 0) { rad1 = rad1 + 360; }
    rad1 = rad1 - 180;

    if (rad1 < 0) { rad1 = rad1 + 360; }
    var ratio1 = (rad1 * 100 / 360).toFixed();
    
    percent1.innerHTML = ratio1 + '&#176' + 'C';
    container1.style.setProperty("transform", `rotate(${rad1}deg) translate(${0}px)`);
    above1.style.setProperty("stroke-dashoffset", `${910 - (rad1 * 910 / 360)}`);
    console.log("do am " + percent1.innerHTML);
    

}

small_round.addEventListener("mousedown", () => {
    window.addEventListener("mousemove", updateSlider);
});
small_round1.addEventListener("mousedown", () => {
    window.addEventListener("mousemove", updateSlider1);
});
window.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", updateSlider);
    window.removeEventListener("mousemove", updateSlider1); 
});



light_dark.addEventListener("click", () => {
    background.classList.toggle("box-run");
});

//------------------------------------------------------NODE 3-------------------------------------------------------

var btnOn = document.getElementById("btnOnId_01");
var btnOff = document.getElementById("btnOffId_01");

btnOn.onclick = function () {
    document.getElementById("den").src = "https://tse1.mm.bing.net/th?id=OIP.LtSyXsUEGjVdu946EIquYwHaHY&pid=Api&P=0"
    document.getElementById("nhietdo").innerHTML = "ON";
}

btnOff.onclick = function () {
    document.getElementById("den").src = "https://img-cache.coccoc.com/image2?i=4&l=56/842072757"
    document.getElementById("nhietdo").innerHTML = "OFF";
}