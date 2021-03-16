// 寄生式组合继承通过盗用构造函数继承属性，但使用混合式原型链继承方法
function object(o) {
	function F() {};
	F.prototype = o;
	return new F();
}

function inheritPrototype(subType, superType) {
	let prototype = object(superType.prototype); // 创建对象
	prototype.constructor = subType; // 增强对象
	subType.prototype = prototype;
}

// 在上面函数内部。第一步是创建父类原型的一个副本。然后，给返回的prototype对象设置constructor属性，解决由于重写原型导致默认constructor丢失的问题，最后将新创建的对象赋值给子类型的原型
function SuperType (name) {
	this.name = name;
	this.colors = ['red', 'green', 'blue'];
}

SuperType.prototype.sayName = function () {
	console.log(this.name)
}

function SubType(name, age) {
	SuperType.call(this, name);
	this.age = age;
}

inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function() {
	console.log(this.age);
}

let instance = new SubType();
instance.colors.push('purple');
console.log(instance);

let instanceOne = new SubType();
instanceOne.colors.push('yellow');
console.log(instanceOne);