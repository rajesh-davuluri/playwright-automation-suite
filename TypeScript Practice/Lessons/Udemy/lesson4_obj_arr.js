//Objects
var customer = {
firstname : 'Rajesh',
lastname : 'Davuluri',
family : ["Rohan", "Suchandra"]
}

console.log(customer)
console.log(customer.firstname +' '+ customer.lastname)
//customer.firstname = 'Suchandra'
console.log(`Customer first name is,  ${customer.firstname} ${customer.lastname}` )
//arrays

var cars = ["Subaru", "Honda", "Toyota"]
console.log(cars[1])
console.log(`I am ${customer.firstname}, ${customer.lastname}, My family contains ${customer.family[0]}, ${customer.family[1]} `)
