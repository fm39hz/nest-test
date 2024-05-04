import { Injectable } from '@nestjs/common';
import { TestModel } from 'src/models/TestModel';

@Injectable()
export class ModelService {
	getModel(): TestModel {
		return new TestModel(1);
	}
}
