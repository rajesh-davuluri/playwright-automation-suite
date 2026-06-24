//Conditional Statement

var hour = 6
if(hour>=6 && hour<12)
{
    console.log('Good Morning')
}
else if  (hour>=12 && hour <18)
{
    console.log('Good Afternoon')

}else
{
    console.log('Good Evening')
}

var isUSCitigen = true
var is18yearsold = true
if (isUSCitigen && is18yearsold)
{
    console.log(`Customer is eligible for Driver License`)
}else
{
    console.log("Customer is not eligible")
}