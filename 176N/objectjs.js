//myob1 declaration and initialization
const myObj1={restaurantId:1,restaurantName:"chipotle",formattedAddress:"Morrisville, NC"}

//myobj2 declaration and initialization
const myObj2={type:"countryCode",value:"+91"}

//prints key and value pairs of object
function printKeyValue(input){
console.log("output:")
for(let i of Object.keys(input)){
console.log(i+":"+input[i])
}
}
printKeyValue(myObj1)
printKeyValue(myObj2)