// 综合了原型链和盗用构造函数
// 使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实现实例

// 组合继承其实也存在效率问题。最主要的效率问题就是父类构造函数始终会被调用两次：一次是在创建子类原型时调用，另一次是在子类构造函数中调用。
function SuperType(name) {
	this.name = name;
	this.colors = ['red','green', 'blue']
}

SuperType.prototype.sayName = function () {
	console.log(this.name)
}

function SubType(name, age){
	// 继承属性
	SuperType.call(this, name); // 第二次调用SuperType
	this.age = age;
}

// 继承方法
SubType.prototype = new SuperType(); // 第一次调用SuperType
SubType.prototype.sayAge = function() {
	console.log(this.age)
}

let instance = new SubType('Tom', 18);
instance.colors.push('purple');
console.log(instance.colors) // ['red','green', 'blue', 'purple']
instance.sayName(); // 'Tom'
instance.sayAge() // 18

let instanceOne = new SubType('Jerry', 15);
console.log(instanceOne.colors) // ['red','green', 'blue']
instanceOne.sayName(); // 'jerry'
instanceOne.sayAge() // 15
