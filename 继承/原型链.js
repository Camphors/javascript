// 构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型有一个属性指回构造函数，而实例有一个内部指针指向原型。

function SuperType() {
	this.property = '11'
}

SuperType.prototype.getSuperValue = function () {
	return this.property
}


function SubType() {
	this.subProperty = false;
	this.property = '22'
}

// 继承
SubType.prototype = new SuperType();

// SubType.prototype.getSuperValue = function () {
// 	return this.property;
// }

let instance = new SubType()
console.log(instance.getSuperValue()) // 22

// 在读取实例上的属性时，首先会在实例上搜索这个属性，如果没有找到，则会继续搜索实例的原型


//1、默认原型
// 任何函数的默认原型都是一个Object的实例，这也是为什么自定义类型能够继承包括toString()、valueOf()在内的所有默认方法的原因。


//2、原型与继承关系
// 原型与实例的关系可以用过两种方式来确定。
//Ⅰ、使用instanceOf操作符，如果一个实例的原型链中出现过相应的构造函数，则instanceOf返回true

console.log(instance instanceof Object) // true
console.log(instance instanceof SuperType) // true
console.log(instance instanceof SubType) // true

// Ⅱ、使用isPrototypeof(),只要原型链中包含这个原型，这个方法就返回true
console.log(Object.prototype.isPrototypeOf(instance)) // true
console.log(SuperType.prototype.isPrototypeOf(instance)) // true
console.log(SubType.prototype.isPrototypeOf(instance)) // true


// 以对象字面量方式创建原型方法会破坏之前的原型链，因为这相当于重写了原型链
function Parent() {
    this.name ='parent',
}

Parent.prototype.getParentName = function() {
	return this.name
}

function Child(){
    this.childName ='child'
}

// 继承
Child.prototype = new Parent()

// 以下代码会导致上一行代码失效
Child.prototype = {
    getChildName(){ 
    	return this.childName
    }
}

let child = new Child()
console.log(child.getParentName())

// 原型链的问题
// 1、原型中包含的引用值会在所有实例间共享

function Animal() {
    this.type = ['fish', 'bird']
}

function Pet() {
}

Pet.prototype = new Animal()
let pet = new Pet();

pet.type.push('duck')

console.log(pet.type) // ['fish', 'bird', 'duck']

let petOne = new Pet()

console.log(petOne.type) // ['fish', 'bird', 'duck']

//2、子类型在实例化时不能给父类型的构造函数传参

