function hobbiesList(hobbyOne, hobbyTwo, hobbyThree){
    this.hobbyOne = hobbyOne;
    this.hobbyTwo = hobbyTwo;
    this.hobbyThree = hobbyThree;
}

const hobbyList = new hobbiesList("lettura", "ciclismo", "cucina")
console.log(hobbyList);

//export della funzione
module.exports = hobbiesList;