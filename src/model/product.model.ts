import { BaseModel } from './base.model';

export class ProductModel extends BaseModel {
	name: string;
	constructor(id: number, name: string) {
		super(id);
		this.name = name;
	}
}
