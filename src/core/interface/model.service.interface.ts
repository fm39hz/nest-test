import { Base } from '../model/base.model';

export interface IModelService {
	getAll(): Promise<Base[]>;
	getById(id: number): Promise<Base>;
	post(id: number, model: Base): Promise<Base>;
	delete(id: number): Promise<Base>;
}
