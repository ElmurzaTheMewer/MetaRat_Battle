const counter = document.getElementById("counter");
const rat = document.getElementById("rat");
let count = 0;
rat.onclick = function(){
    count ++;
    counter.textContent = count;
}