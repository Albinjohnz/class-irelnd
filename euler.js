/*Arrays:
a.
Create a function which takes parameters a,b,l
l is a list of integers
find the sum of all the multiples of a or b in l

b.
Create a function which takes parameters a,l
a is a list of two integers
l is a list of integers
find the sum of all the multiples of elements of a in l

c.
Create a function which takes parameters a,l
a is a list of integers
l is a list of integers
find the sum of all the multiples of elements of a in l
*/
alert("Load euler.js");
a=3;
b=5;
num=1000;
c=0;
d=0;
sum=0;
for(i=1;i<num;i++)
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
sum=c+d;
alert(sum);
function array(a,l)
{
const a=[1,2]
const l=[1,2,3,4,6,7,8,9]
const sum=sumOfMultiples(a,l)
}
alert(sum)
