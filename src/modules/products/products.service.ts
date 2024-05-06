import { Injectable } from '@nestjs/common';
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
	async create(model: Product): Promise<Product> {
		return await new this.productModel(model).save();
	}
	async getAll(): Promise<Product[]> {
		return await this.productModel.find().exec();
	}
	async getById(id: string): Promise<Product> {
		return await this.productModel.findById(id).exec();
	}
	async post(id: string, model: Product): Promise<Product> {
		return await this.productModel.findByIdAndUpdate(id, model);
	}
	async delete(id: string): Promise<Product> {
		return await this.productModel.findByIdAndDelete(id).exec();
	}
}
