import { BaseModel } from 'src/model/base.model';

export interface IModelService {
	getAll(): BaseModel[];
	getById(id: number): BaseModel;
	post(id: number, model: BaseModel): BaseModel;
	delete(id: number): BaseModel;
}
