alert("arraya.js");

function calculateArraySum(a, b, list) {
    let total = 0;
    list.forEach((item) => {
        if (item % a === 0 || item % b === 0) {
            total += item;
        }
    });
    alert(total);
}
calculateArraySum(2, 3, [1, 2, 3, 4, 6, 7, 8, 9]);
