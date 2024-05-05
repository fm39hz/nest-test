import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { ProductModel } from 'src/model/product.model';

@Controller('/Product')
export class ProductController {
	constructor(private readonly appService: ProductService) {}

	@Get()
	getAll(): ProductModel[] {
		return this.appService.getAll();
	}
}
