import { NotImplementedException } from '@nestjs/common';
import { IModelService } from '../interface/model.service.interface';
import { ProductModel } from 'src/model/product.model';

export class ProductService implements IModelService {
	getAll(): ProductModel[] {
		throw new NotImplementedException();
	}
	getById(id: number): ProductModel {
		throw new NotImplementedException();
	}
	post(id: number, model: ProductModel): ProductModel {
		throw new NotImplementedException();
	}
	delete(id: number): ProductModel {
		throw new NotImplementedException();
	}
}
