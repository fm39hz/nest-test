import { Injectable, NotImplementedException } from '@nestjs/common';
import { IModelService } from '../../core/interface/model.service.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './products.model';

@Injectable()
export class ProductService implements IModelService {
	constructor(
		@InjectModel(Product.name)
		private productModel: Model<Product>,
	) {}
	async getAll(): Promise<Product[]> {
		return await this.productModel.find().exec();
	}
	async getById(id: number): Promise<Product> {
		return await this.productModel.findById(id).exec();
	}
	async post(id: number, model: Product): Promise<Product> {
		throw new NotImplementedException();
	}
	async delete(id: number): Promise<Product> {
		throw new NotImplementedException();
	}
}
