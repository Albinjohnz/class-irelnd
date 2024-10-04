function sumOfMultiples(a, l) {
    return l.reduce((sum, x) => {
        return sum + (a.some(num => x % num === 0) ? x : 0);
    }, 0);
}
function array(a,l)
{
const a=[1,2]
const l=[1,2,3,4,6,7,8,9]
const sum1=sumOfMultiples(a,l)
}
alert(sum1)