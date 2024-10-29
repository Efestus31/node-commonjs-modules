function personInfo(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

const person = new personInfo("Biagio", "Antonelli");
console.log(person);

//export function
mudule.exports = personInfo;