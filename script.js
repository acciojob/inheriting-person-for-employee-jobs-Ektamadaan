class Person{
	constructor(name , age){
		this._name = name ;
		this._age = age ;
	}
	get name(){
		return this._name ;
	}
	get age(){
		return this._age ;
	}
	greet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
	}
}
class Employee extends Person{
	constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }
	jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
