//Variable 
const studioName = 'Brightlabs';
let totalProjectCount = 0;

//moving forward with backtick
let myContent = `sharp with a dynamic edge 
                  djdakkkkdaklkldalkl
                  nadkajdlkldsklkl
                  jdkjkjskjkkjkjsfkj`;


console.log(myContent);


//move with string literals
const app = "my doodle art is amazing";

console.log(app);


//datatypes
let x = 5;
let y = "fruit";

console.log(x);
console.log(y);

//arrays
const fruits = ["banana","gauva"];
console.log(fruits);


//objects
const car = {
brand: "tesla",
  color: "blue",
  name:"c6",
  speed: "340mph",
};

console.log(car);

//classes
class Car {
constructor(brand, color, name, year) {
this.name= name;
  this.brand = brand;
  this.color = color;
  this.year = year;
}
}

const car1 = new Car("Toyota", "Corolla", "lexus", 2022);

console.log(car1);
