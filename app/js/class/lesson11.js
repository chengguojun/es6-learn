{
	//验证proxy和reflect
	function validator(target,validator){
		return new Proxy(target,{
			_validator:validator,
			set(target,key,value,proxy){
				if(target.hasOwnProperty(key)){
					let va =this._validator[key];
					if(!!va(value)){
						return Reflect.set(target,key,value,proxy);
					}else{
						throw new Error(`不能设置${key}到${value}`);
					}
				}else{
					throw  new Error(`${key}`不存在)
				}
			}
		});
	}

	 const personValidators={
	 	name(val){
	 		return typeof val==='string'
	 	},
	 	age(val){
	 		return typeof val ==='number'&& val>18;
	 	}
	 }
	 class Person{
	 	constructor(name,age){
	 		this.name=name;
	 		this.age=age;
	 		return validator(this,personValidators)

	 	}
	 }

	 const person = new Person('dddd',90);


}