import { ModelBase } from './base';

export class ModelProduct extends ModelBase {
	name: string;
	constructor(id: number, name: string) {
		super(id);
		this.name = name;
	}
}
