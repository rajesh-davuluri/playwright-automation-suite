//Write a typescript program find grade based on marks?
//[500 to 600 > A]
//[400 to 500 > B]
//[300 to 400 > c]


let a:number = 549

if (a>500 && a <=600)
{
    if (a>=550)
    {
        console.log('A+ grade. score is:', a)
    }
    else
    {
        console.log("A grade. score is:", a)
    }    
}
else if (a>400 && a<=500)
{
    if (a>=450)
    {
        console.log('B+ grade. score is: ', a)
    }
    else
    {
        console.log("B grade. score is:", a)
    }    
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