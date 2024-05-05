import { NotImplementedException } from '@nestjs/common';
import { IModelService } from '../interface/model.service.interface';
import { ModelBase } from 'src/model/base';

export class ProductService implements IModelService {
	getAll(): ModelBase[] {
		throw new NotImplementedException();
	}
	getById(id: number): ModelBase {
		throw new NotImplementedException();
	}
	post(id: number, model: ModelBase): ModelBase {
		throw new NotImplementedException();
	}
	delete(id: number): ModelBase {
		throw new NotImplementedException();
	}
}
