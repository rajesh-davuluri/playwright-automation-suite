//Optional Fields

let stdetails= (stname: string, stnumb:number, stemail?:string, stphone?:string ) =>
{
    console.log('Student name is:', stname);
    console.log('Student number is:', stnumb);
    if(typeof stemail ==='string')
    {
        console.log('Student Email is: ', stemail)
    }
    if (typeof stphone ==='string')
    {
        console.log('Student Phone number is: ', stphone)
    }

}

stdetails('rajesh', 3333,'tes@test.com', '334322')
stdetails('rajesh', 3333)