//if familySize is four or less and the planned distance to drive is less than 200 miles, the function should return "Tesla"
//if familySize is four or less and the planned distance to drive is 200 or more, the function should return "Toyota Camry"
//if familySize is more than four, the function should return "Minivan"

function recommendedCar(familysize:number, distancenumber:number)
{
    let fs:number = familysize;
    let dn:number = distancenumber;

    if (fs<=4 && dn <200)
    {
        let car:string = "Tesla"
        return car
    }
    else if (fs<=4 && dn>=200)
        {
            return "Toyota Camry"
            
        }
       else if (fs>4) 
       {
            let car: string = "Minivan"
            return car
       }

}

let car = recommendedCar(2, 200)
console.log(car)


