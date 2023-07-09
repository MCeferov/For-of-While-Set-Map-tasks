"use strict";


// for (let i = 0; i < 50 ; i++) {
//     if ( i % 2 === 0 ) {
//         console.log(i)}
// }

// for (let i = 0; i < 50; i+=2) {
//     if ( i % 2 === 0 ) {
//         console.log(i)
//     }
// }

// let i = 0

// while ( i < 10) {
//     console.log(i)

//     i++
// }


// let i = 0 

// while ( i < 50 ) {
//     if ( i % 2 === 0 ) {
//         console.log(i)

     
//     }
//     i++
// }


// const cars = [
//     "Toyota" ,
//     "Kia",
//     "Honda",
//     "Ford",
//     "Lamborghini",
//     "Audi",
//     "Mercedes",
//     "Bmw",
//     "Nissan",
//     "Tesla",
// ]

// !let i = 0

// ! while ( i < cars.length ) {
//     console.log( cars[i] )

//     i++
// }

// for (const car of cars){
//     console.log(car)
// }


// const car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2021,
//     color: "Silver",
//     mileage: 5000,
//     fuelType: "Gasoline",
//     transmission: "Automatic",
//     engineSize: 2.5,
//     numOfDoors: 4,
//     isElectric: false
//   };
  

  // console.log(car)

//   console.log(Object.keys(car))
//   console.log(Object.values(car))
//   console.log(Object.entries(car))

// for (const key in car){
//     console.log(` ${key} : ${car[key]}`)
// }


// let i = 0
// while (i<50){
// if(i % 2 ==0){

// console.log(i)

// }
// i++}

// !const winners = [
//     "Germany",
//     "Spain",
//     "Italy",
//     "Brazil",
//     "France",
//     "Brazil",
//     "Germany",
//     "Italy",
//     "Brazil",
//     "France",
//   ];

//  const countries = new Set(winners)

//     console.log(countries)

// console.log(countries.has("Argentina"))

//     if(!countries.has("Argentina")){
//         countries.add("Argentina")
//     }

//     console.log(countries)

//     countries.delete("Germany")
//     console.log(countries)


//    const  countr = [...countries]

//    console.log(countr)

// const worldWarEvents = new Map([
//     [1939, "German invasion of Poland"],
//     [1940, "German invasion of France"],
//     [1941, "Attack on Pearl Harbor"],
//     [1942, "Battle of Stalingrad"],
//     [1943, "Battle of Kursk"],
//     [1944, "D-Day invasion"],
//     [1945, "Atomic bombings of Hiroshima and Nagasaki"],
//   ]);

//   for ( const [year , happened] of worldWarEvents) {
// console.log(`${happened} happened in ${year}`)
// }



// const getEventByYear = (year) => {
// worldWarEvents.has(year) 
// if(worldWarEvents.has(year) )
// {
//     console.log(worldWarEvents.get(year));
// } else {console.log("There is no event")}
// }
// getEventByYear(1941);

// worldWarEvents.clear();

// console.log(worldWarEvents)


// let myArray = [1, 2, 3];
// myArray[myArray.length] = 4;
// console.log(myArray);

