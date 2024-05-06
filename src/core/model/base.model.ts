import { Prop, Schema } from '@nestjs/mongoose';

export abstract class Base {
	constructor(id: number) {
		this.id = id;
	}
	@Prop([Number])
	id: number;
}
