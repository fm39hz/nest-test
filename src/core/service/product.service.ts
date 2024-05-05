import { NotImplementedException } from '@nestjs/common';
import { IModelService } from '../interface/model.service.interface';
import { ModelProduct } from 'src/model/product';

export class ProductService implements IModelService {
	getAll(): ModelProduct[] {
		throw new NotImplementedException();
	}
	getById(id: number): ModelProduct {
		throw new NotImplementedException();
	}
	post(id: number, model: ModelProduct): ModelProduct {
		throw new NotImplementedException();
	}
	delete(id: number): ModelProduct {
		throw new NotImplementedException();
	}
}
