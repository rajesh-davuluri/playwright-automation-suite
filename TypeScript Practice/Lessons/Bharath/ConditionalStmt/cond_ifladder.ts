//Write a typescript program find grade based on marks?
//[500 to 600 > A]
//[400 to 500 > B]
//[300 to 400 > c]


let a:number = 150

if (a>500 && a <=600)
{
    console.log("A grade. score is:", a)
}
else if (a>400 && a<=500)
{
    console.log("B grade. score is:", a)
}
else if (a>300 && a<=400)
{
    console.log("C grade. score is:", a)
}
else if (a>200 && a<=300)
{
    console.log("D grade. score is:", a)
}
else if (a>0 && a<=200)
{
    console.log("Failed")
}
else 
{
    console.log('Invalid')
}