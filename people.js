//import funzioni
const personInfo = require('./names.js');
const hobbyList = require('./hobbies.js');

// Chiami le funzioni e salvi i risultati
const persona = personInfo("Biagio", "Antonelli");
const listaHobby = hobbyList("lettura", "ciclismo", "cucina");

function personAndHobbies() {
    // Unisce gli oggetti usando lo spread operator
    return {...persona, ...listaHobby};
}

// Crea un nuovo oggetto che combina le informazioni
const mySelf = personAndHobbies();

// Stampa l'oggetto risultante
console.log(mySelf);
