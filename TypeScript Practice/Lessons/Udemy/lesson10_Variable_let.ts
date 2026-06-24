function variable_let1()
{
    let x:string='20'
    if(x==='20')
    {
        let y:number=20
        
        console.log("condition execute: " +x)
        x='20'
        
    }

    console.log("outside condition: " +x)
    //console.log(y)
}

variable_let1()