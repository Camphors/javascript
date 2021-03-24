// 与原型式继承比较接近
function createAnother(original){ 
 let clone = Object.create(original); // 通过调用函数创建一个新对象
 clone.sayHi = function() { // 以某种方式增强这个对象
 console.log("hi"); 
 }; 
 return clone; // 返回这个对象
} 
let person = { 
 name: "Nicholas", 
 friends: ["Shelby", "Court", "Van"] 
}; 
let anotherPerson = createAnother(person); 
anotherPerson.sayHi(); // "hi"

// 通过寄生式继承给对象添加函数会导致函数难以重用，与构造函数模式类似