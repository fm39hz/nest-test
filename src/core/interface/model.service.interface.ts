import { ModelBase } from 'src/model/base';

export interface IModelService {
	get(): ModelBase[];
	getById(id: number): ModelBase;
	post(id: number, model: ModelBase): ModelBase;
	delete(id: number): ModelBase;
}
