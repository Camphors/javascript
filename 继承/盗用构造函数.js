// 为了解决原型包含引用值到值的继承问题
// 思路：在子类构造函数中调用父类构造函数，可以使用call()和apply()
function SuperType(name) {
	this.colors = ['red', ' green', 'blue'];
	this.name = name
}

function SubType() {
	// 继承SuperType,并传递参数
	SuperType.call(this, 'Tom');
	this.age = 18
}

let instance = new SubType()
instance.colors.push('purple');
console.log(instance.colors) // ['red', ' green', 'blue', 'purple']
console.log(instance)

let instanceOne = new SubType()
console.log(instanceOne.colors) // ['red', ' green', 'blue']



// 1.传递参数，如上所示


// 缺点：必须在构造函数中定义方法，因此函数不能重用。此外，子类也不能访问父类原型上定义的方法，因此所有类型只能使用构造函数模式。


// apply()和call()的区别
//apply(context, [arg1, arg2])
//和call(context, arg1, arg2)