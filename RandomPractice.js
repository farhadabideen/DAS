//Array
const myArr = [1, 2, 3, "FARHAD"];
myArr.pop();
myArr.push(4);
myArr.shift();
myArr.unshift(5);

//for (const item of myArr) {
//console.log(item);
//}


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
//console.log(fruit);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];

const children = arr1.concat(arr2, arr3);
//console.log(children);

//Object
const obj = {
  name: "farhad",
  "isName": true,
  saymyName: function() {
    console.log(this.name);
  }
}

//obj.saymyName();
//console.log(Object.keys(obj));
//console.log(Object.values(obj));
//console.log(Object.entries(obj));