import { TestModel } from './TestModel';

export class Product extends TestModel {
	age: number;
	name: string;
	constructor(id: number, name: string, age: number) {
		super(id);
		this.age = age;
		this.name = name;
	}
}
