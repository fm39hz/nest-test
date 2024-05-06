import { Prop } from '@nestjs/mongoose';

export abstract class Base {
	constructor(id: string) {
		this.id = id;
	}
	@Prop([String])
	id: string;
}
