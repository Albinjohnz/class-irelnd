alert("Euler1.js")
function GetValues() {
    const a = parseInt(document.getElementById("num1").value);
    const b = parseInt(document.getElementById("num2").value);
    const n = parseInt(document.getElementById("limit").value);
    document.getElementById("num1").style.display = "none";
    document.getElementById("num2").style.display = "none";
    document.getElementById("limit").style.display = "none";
    document.getElementById("sum").style.display = "none";
    document.getElementById("label1").style.display = "none";
    document.getElementById("label2").style.display = "none";
    document.getElementById("label3").style.display = "none";

    if (isNaN(a) || isNaN(b) || isNaN(n) || n <= 0) {
        alert("Please enter valid numbers and ensure the limit is positive.");
        return;
    }
}
function sum(a, b, n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    alert("Sum = " + sum);
}

function Show() {
    document.getElementById("num1").style.display = "block";
    document.getElementById("num2").style.display = "block";
    document.getElementById("limit").style.display = "block";
    document.getElementById("sum").style.display = "block";
    document.getElementById("label1").style.display = "block";
    document.getElementById("label2").style.display = "block";
    document.getElementById("label3").style.display = "block";
}