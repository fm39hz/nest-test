import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { ModelProduct } from 'src/model/product';

@Controller('/Product')
export class ProductController {
	constructor(private readonly appService: ProductService) {}

	@Get()
	getAll(): ModelProduct[] {
		return this.appService.getAll();
	}
}
