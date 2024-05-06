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
	async getById(@Param('id') id: string): Promise<Product> {
		return await this.service.getById(id);
	}

	@Post()
	async create(@Body() product: Product): Promise<Product> {
		return await this.create(product);
	}
	@Post(':id')
	async post(
		@Param('id') id: number,
		@Body() product: Product,
	): Promise<Product> {
		return await this.post(id, product);
	}
	@Delete(':id')
	async delete(@Param('id') id: string): Promise<Product> {
		return await this.service.delete(id);
	}
}
