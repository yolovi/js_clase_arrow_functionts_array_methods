//ARROW FUNCTIONS

//CALLBACKS:
// setTimeout( () => console.log("¡Listo!") , 3000 );

// declarando función B → callback

// function test2() {
//     console.log("Función test2 ejecutada.");
//   }

//   // declarando función A +  callback

//   function test1(callback) {
//     callback(); // función test2
//   }

//   // llamando a función A →  pasando por params función B 

//   test1(test2);

// // función principal ( acepta un callback)
// function hacerTarea(tarea, callback) {
//     console.log("Estoy haciendo: " + tarea);
//     callback()
//   }

//   // función callback → la función que se pasa por params
//   function avisar() {
//     console.log("Terminé la tarea");
//   }

//   // Uso
//   hacerTarea("la comida", avisar);

//USOS DEL CALLBACK:

// asincronía
// setTimeout(  () => console.log("¡Listo!") , 1000 );



// evento
// document.getElementById("miBoton").addEventListener("click", function() {
//   alert("¡Botón clickeado!"); // Este es el callback
// });




// iteración
// const numeros = [1, 2, 3];
// const dobles = numeros.map(function(num) { // Callback
//   return num * 2;
// });

// console.log(dobles)

const myArray = [1, 2, 3, 4]


const myArrayDuplicate = myArray.map((value) => {
    return value * 2
})

const myArrayDuplicate2 = myArray.map(value => { return value * 2 })
const myArrayDuplicate3 = myArray.map(value => value * 2)

// console.log(myArray)
// console.log(myArrayDuplicate)
// console.log(myArrayDuplicate2)


// const songs = [
//     { name: "Curl of the Burl", artist: "Mastodon" },
//     { name: "Oblivion", artist: "Mastodon" },
//     { name: "Flying Whales", artist: "Gojira" },
//     { name: "Euralio y sus cabras", artist: "Euralio"},
//   ];
  
//   const allSongNames = []
  
//   for (const song of songs) {
//       allSongNames.push(song.name)
//   }
// //   console.log(allSongNames)
  
// // Sintaxis:  array.map( function(currentValue, index, arr) , thisValue)

//   const allSongNames2 = songs.map(cancion => {
//       return cancion.name
//   })

// //   const allSongNames2 = songs.map(song => song.name)
  
//   console.log(allSongNames2)


// const users= [
//     { name: "Ana", age: 25 },
//     { name: "Carlos", age: 30 },
//   ];
  
//   const names = users.map(users => users.name.toUpperCase()).filter(name => name.startsWith("A"));
  
//   console.log(names); //[“ANA”]
  
  //FOREACH

//   const fruits= ["manzana","pera", "fresa"]

// for (let i = 0; i < fruits.length; i++) {
//  console.log(fruits[i]);
// }

// fruits.forEach(fruit => {
//  console.log(fruit)
// });

// const numeros = [1,2,3,4,5,6,7,8,9,10]

// const numerosFiltrados = numeros.filter(numero => numero >= 5)

// console.log(numerosFiltrados);

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// let result =[]
// for (const word of words) {
//     if(word.length > 6){
//         result.push(word)
//     }
// }

// console.log(result);

// const result2 = words.filter(word => word.length > 6);
// console.log(result2)

//REDUCE

//for
const numbers = [10, 5, 7, "hola", "2", 2];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);


//reduce
const suma = numbers.reduce((a,b)=> a + b)
console.log(suma);
