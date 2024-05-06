import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Base as Base } from '../../core/model/base.model';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product extends Base {
	constructor(id: number, name: string) {
		super(id);
		this.name = name;
	}
	@Prop([String])
	name: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
