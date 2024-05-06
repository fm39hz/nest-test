import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './products.model';
import { ProductController as ProductsController } from './products.controller';
import { ProductService as ProductsService } from './products.service';

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://localhost:27016/products'),
		MongooseModule.forFeature([
			{ name: Product.name, schema: ProductSchema },
		]),
	],
	controllers: [ProductsController],
	providers: [ProductsService],
})
export class ProductModule {}
