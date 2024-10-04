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
    c=0;
    d=0;
    for(i=1;i<n;i++)
        {
            if(i%a==0)
            {
                c=c+i;
            }
            if(i%b==0)
            {
                d=d+i;
            }
        }
        if (isNaN(a) || isNaN(b) || isNaN(n) || n <= 0) {
        alert("Please enter valid number.");
        return;
    }
    sum=c+d;
    alert(sum);
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