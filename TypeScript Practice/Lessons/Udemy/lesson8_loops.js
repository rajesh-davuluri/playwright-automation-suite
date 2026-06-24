//For Loop

//for(i=0; i<5; i++)
//{
  //  console.log('Hello' + i)
//}
var cars = ["Subaru", "Honda", "Toyota"]
for(let car of cars)
{
    //console.log(car)
    if(car=="Honda")
        break
}
cars.forEach(car=>{console.log(car)})
