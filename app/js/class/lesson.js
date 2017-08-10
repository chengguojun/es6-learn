// {
// 	let regex=new  RegExp('xyz', 'i');
// 	let regex2=new  RegExp(/xyz/i);
// 	console.log(regex.test('xyz123'),regex2.test('xyz123'));

// }

{
	//数组扩展
	let arr = Array.of(1,2,2);
	console.log(arr);
}
{
	let p= document.querySelectorAll('strong');
	let pArr = Array.from(p);
	console.log(p);
	pArr.forEach(function(item){console.log(item.textContent);})
}