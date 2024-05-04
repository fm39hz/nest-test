import { ModelBase } from './base';

export class ModelProduct extends ModelBase {
	age: number;
	name: string;
	constructor(id: number, name: string, age: number) {
		super(id);
		this.age = age;
		this.name = name;
	}
}
