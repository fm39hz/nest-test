import { Base } from '../model/base.model';

export interface IModelService {
	getAll(): Promise<Base[]>;
	getById(id: string): Promise<Base>;
	create(model: Base): Promise<Base>;
	post(id: string, model: Base): Promise<Base>;
	delete(id: string): Promise<Base>;
}
