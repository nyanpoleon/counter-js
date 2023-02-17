let number = 0

document.getElementById("num").innerText = number

function increase() {
    number++;
    console.log(number);
    document.getElementById("num").textContent = number;
}

function reset() {
    number = 0
    document.getElementById("num").innerText = number
}

function decrease() {
    number--;
    console.log(number);
    document.getElementById("num").textContent = number;
}
    
document.getElementById("decrease").addEventListener("click", decrease);
document.getElementById("increase").addEventListener("click", increase);
