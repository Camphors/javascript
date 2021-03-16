// 接收可迭代对象的原生语言特性包括：
// for-of 循环
// 数组解构
// 扩展操作符
// Array.from()
// 创建集合
// 创建映射
// Promise.all() 接收由期约组成的可迭代对象
// Promise.race() 接收由期约组成的可迭代对象
// yield *操作符，在生成器中使用

// 可迭代对象
// let arr = ['foo', 'bar'];

// // 迭代器工厂函数
// console.log(arr[Symbol.iterator])  // f values() { [native code] }

// // 迭代器
// let ite = arr[Symbol.iterator]();
// console.log(ite) // ArrayIterator{}

// console.log(ite.next()); // {done: false, value: 'foo'}

// // 如果可迭代对象在迭代期间被修改了，那么迭代器也会反映相应的变化
// arr.splice(1, 0, 'baz')
// console.log(ite.next()); // {done: false, value: 'bar'}
// console.log(ite.next()); // {done: true, value: undefined}

// console.log(ite.next())

// // 这个类实现了可迭代接口（Iterable）
// // 调用默认的迭代器工厂函数会返回
// // 一个实现迭代器接口（Iterator）的迭代器对象
// class Foo {
//  	[Symbol.iterator]() {
//  	return {
//  		next() {
//  			return { done: false, value: 'foo' };
//  			}
//  		}
//  	}
// }
// let f = new Foo();
// // 打印出实现了迭代器接口的对象
// console.log(f[Symbol.iterator]()); // { next: f() {} }
// // Array 类型实现了可迭代接口（Iterable）
// // 调用 Array 类型的默认迭代器工厂函数
// // 会创建一个 ArrayIterator 的实例
// let a = new Array();
// // 打印出 ArrayIterator 的实例
// console.log(a[Symbol.iterator]()); // Array Iterator {}

// class Counter {
// 	constructor(limit) {
// 		this.count = 1;
// 		this.limit = limit
// 	}

// 	next() {
// 		if (this.count <= this.limit) {
// 			return { done: false, value: this.count++ };
// 		} else {
// 			return { done: true, value: undefined };
// 		}
// 	}

// 	[Symbol.iterator]() {
// 		return this
// 	}
// }

// let counter = new Counter(3);

// for(let i of counter) {
// 	console.log(i)
// }

// class classRoom {
// 	place = 'a';
// 	classMate = [
// 		'mary',
// 		'tom',
// 		'jerry',
// 		'tony'
// 	];
// 	[Symbol.iterator]() {
// 		const _this = this;
// 		let index = 0;
// 		return {
// 			next() {
// 				if (index < _this.classMate.length) {
// 					index++;
// 					return { value:_this.classMate[index], done: false }
// 				} else {
// 					return { value: undefined, done: true }
// 				}
// 			}
// 		}
// 	}
// }

// for(let cm in classRoom) {
// 	console.log(cm)
// }

function getUser() {
  setTimeout(() => {
    let user = {
      name: 'admin',
      role: 'manager'
    };
    data.next(user);
  }, 1000);
}

function getRole(user) {
  const roleList = [
    {
      role: 'manager',
      operation: 'all'
    }
  ];
  setTimeout(() => {
    let operation = roleList.find((x) => x.role === user.role)[0].operation;
    data.next(operation);
  }, 1000);
}

function getData(operation) {
  const dataList = [
    {
      oper: 'all',
      data: [
        {
          name: 'lisa',
          age: 18,
          address: 'Aust'
        }
      ]
    }
  ];
  setTimeout(() => {
    let data = dataList.find((x) => x.oper === operation)[0].data;
    data.next(data);
  }, 1000);
}

export function* getDataByUserRole() {
  let user = yield getUser();
  console.log(user);
  let operation = yield getRole();
  console.log(operation);
  let data = yield getData();
  console.log(data);
}

let data = getDataByUserRole();
data.next();
