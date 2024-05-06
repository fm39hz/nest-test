import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './products.service';
import { Product } from './products.model';

@Controller('/products')
export class ProductController {
	constructor(private readonly service: ProductService) {}

	@Get()
	async getAll(): Promise<Product[]> {
		return await this.service.getAll();
	}
	@Get(':id')
	async getById(@Param('id') id: number): Promise<Product> {
		return await this.service.getById(id);
	}
	@Post(':id')
	post(@Param('id') id: number, @Body() product: Product): Product {
		return this.post(id, product);
	}
	@Delete(':id')
	async delete(@Param('id') id: number): Promise<Product> {
		return this.service.delete(id);
	}
}
