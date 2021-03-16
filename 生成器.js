// 函数名称前面加一个星号（*）表示它是一个生成器
// 生成器函数声明


//  箭头函数不能用来定义生成器函数
function* genneratorFn() {}

// 生成器函数表达式
let generatorFn = function*() {}

// 作为对象字面量方法的生成器函数
let foo = {
	*generatorFn() {}
}

// 作为类实例方法的生成器函数
class Foo {
	* generatorFn() {}
}

 // 作为类静态方法的生成器函数
class Bar {
	static * generatorFn() {}
}