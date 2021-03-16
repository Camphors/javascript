// 创建一个临时构造函数，将传入的对象赋值给这个构造函数的原型，然后后返回这个临时类型的一个实例
function object(o) {
	function F() {};
	F.prototype = o;
	return new F();
}

let animal = {
	name: 'Tom',
	friends: ['Jerry', 'Mary', 'Erha']
}

let cat = object(animal);
cat.name = 'Tony';
cat.friends.push('Jim')
console.log(cat)
console.log(cat.friends) //  ['Jerry', 'Mary', 'Erha', 'Jim']

let dog = object(animal);
dog.name = '二哈';
dog.friends.push('金毛')
console.log(dog)
console.log(dog.friends) //  ['Jerry', 'Mary', 'Erha', 'Jim', '金毛']

// es5新增Object.create()方法将原型式继承的概念规范化了
//Object.create()与上面的object()方法效果相同

let bird = Object.create(animal);
bird.name = 'KiMi';
console.log(bird.friends) //  ['Jerry', 'Mary', 'Erha', 'Jim', '金毛']


// Object.create()的第二个参数与Object.defineProperties()的第二个参数一样：每个新增属性都通过各自的描述符来描述。以这种方式添加的属性会遮蔽原型对象上的同名属性。
let fish = Object.create(animal, {
	name: {
		value: 'Greg'
	}
})

console.log(fish.name)