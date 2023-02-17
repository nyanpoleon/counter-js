let number = 0
document.getElementById("increase").addEventListener("click", function() {
    number++;
    console.log(number);
    document.getElementById("num").textContent = number;

    document.getElementById("reset").addEventListener("click", function() {
        number = 0;
        document.getElementById("num").textContent = number;
        });

});

document.getElementById("decrease").addEventListener("click", function() {
    number--;
    console.log(number);
    document.getElementById("num").textContent = number;
})