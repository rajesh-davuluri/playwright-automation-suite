//Inheritance

class car
{
    name:string;
    color:string;
    model:string;

    constructor(name:string, color:string, model:string)
    {
        this.name=name;
        this.color=color;
        this.model=model;
    }
    start():void{
        console.log('car is started..')
    }
    stop():void{
        console.log('car is stopped')
    }

}

class Honda extends car
{
    year:number;

    constructor(name:string, color:string, model:string, year:number)
    {
        super(name,color, model);
        this.year=year;
    }

    start():void{
        console.log('Honda car is started..')
    }
    cardetails()
    {
        console.log('car name ${this.name} and color ${this.color} and model is ${this.model} and year is ${this.year}')
    }
    stop():void{
        console.log('Honda car is Stopped..')
    }
}
 cardetail = new Honda()