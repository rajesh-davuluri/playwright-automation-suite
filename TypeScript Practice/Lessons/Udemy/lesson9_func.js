//Functions
//helloOne()
function helloOne()
{
    console.log("First function")
}
//helloOne()
//helloTwo()
var helloTwo = function(){
    console.log("Second function")
}
//helloTwo()

function helloThree(firstname, lastname)
{
    console.log("FirstName is " + firstname)
    console.log("Last Name is " +lastname)

}
//helloThree('rajesh', 'davuluri')

function multiply(number){
var result = number * 2
return result
}

var result = multiply(10)
//console.log(result)
//import function
import {printAge} from '../helpers/printHelper.js'
printAge(5)

//import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(10)
