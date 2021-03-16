// 工厂模式
function CreatePerson(name, age, sex) {
	let p = new Object();
	p.name = name;
	p.age = age;
	p.sex = sex
	return p
}

let person1 = new CreatePerson('Tom', 18, 'male');


// 构造函数模式
// 1、没有显示的创建对象
// 2、属性和方法直接赋值给了this
// 3、没有return


// 1、在内存中创建一个新对象
// 2、这个新对象内部的【【Prototype】】特性被赋值为构造函数的prototype属性
// 3、构造函数内部的this被赋值为这个新对象（即this指向新对象）
// 4、执行构造函数内部的代码（给新对象添加属性）
// 5、如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。
function Person(name, age, sex) {
// let Person = function(name, age, sex) {
	// this.name = 'Tom';
	// this.age = '18';
	// this.sex = 'male';
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.doThing = function() {
		consle.log('sale')
	}
}


let p1 = new Person('Jerry', 10, 'male')
// let p2 = new Person;
console.log(p1 instanceof Object) // true
console.log(p1 instanceof Person) // true


// 任何函数只要使用 new 操作符调用就是构造函数，而不使用 new 操作符调用的函数就是普通函数。


// 原型模式
function Person() {}
Person.prototype.name = 'Tom';
Person.prototype.age = 18;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function() {
	console.log(this.name)
}

let p3 = new Person();
p3.name;

console.log(p3.prototype.constructor === Person) // true


// hasOwnProperty()方法用于确定某个属性是在实例上还是在原型对象上。这个方法继承自Object的，会在属性存在与调用它的对象实例上时返回true
let p4 = new Person()
console.log(p4.name); // Tom  来自原型
console.log(p4.hasOwnProperty('name')); // false

p4.name = 'Greg';
console.log(p4.name); // Tom  来自实例
console.log(p4.hasOwnProperty('name')) // true

delete p4.name

console.log(p4.name); // Tom  来自原型
console.log(p4.hasOwnProperty('name')); // false

// 原型和in操作符
// 有两种方式使用 in 操作符：单独使用和在 for-in 循环中使用。在单独使用时，in 操作符会在可以通过对象访问指定属性时返回 true，无论该属性是在实例上还是在原型上

// 如果要确定某个属性是否存在与原型上，可以同时使用hasOwnProperty和in
function hasPrototypeProperty(object, name) {
	return !object.hasOwnProperty(name) && (name in object)
} 

// 列出所有实例属性都可以使用getOwnPropertyNames()