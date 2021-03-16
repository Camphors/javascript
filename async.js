async function fn() {
	return new Promise((resolve, reject) => {
		reject('error')
	})
}

const result = fn();
result.then(res => {
	console.log(res)
}, err => {
	console.warn(err)
})
// console.log(fn())

// await返回的是promise成功的值
const p = new Promise((resolve, reject) => {
	// resolve('成功')
	reject('失败')
})

async function getData() {
	try
	{
		let result = await p;
		console.log(result)
	}
	catch(err) {
		console.log(err)
	}
}

getData();


const fs = require('fs')

function readDiedaiqi() {
	console.log()
	return new Promise((resolve, reject) => {
		fs.readFile('./迭代器.js', (err, data) => {
			// 失败
			if (err) {
				console.log(err);
				reject(err);
			}
			// 成功
			resolve('成功')
		})
	})
}

function readShengchengqi() {
	return new Promise((resolve, reject) => {
		fs.readFile('./生成器.js', (err, data) => {
			// 失败
			if (err) {
				reject(err);
			}
			// 成功
			resolve('成功')
		})
	})
}


// 生成async函数
async function main() {
	// 获取迭代器
	let diedaiqi = await readDiedaiqi()；
	let shengchengqi = await readShengchengqi();
	console.log(diedaiqi.toString())
	console.log(shengchengqi.toString())
}

main()