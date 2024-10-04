alert("arraya.js");

function sumOfMultiples(a, l) {
    return l.reduce((sum, x) => {
        return sum + (a.some(num => x % num === 0) ? x : 0);
    }, 0);
}

function calculateArraySum() {
    const multiples = [1, 2]; // Array of multiples
    const list = [1, 2, 3, 4, 6, 7, 8, 9]; // List of integers
    const sum1 = sumOfMultiples(multiples, list); // Calculate the sum
    alert(sum1); 
}


calculateArraySum();
