let count = 0;

let number = 83;
for(let i = 2;i <= number/2;i++)
{
    if(number % i == 0)
        count++;
}

if(count > 0){
    console.log("number "+number+" is not a prime number.");
}
else
{
    console.log("number " + number + " is a prime number");
}