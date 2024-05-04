import { Controller, Get } from '@nestjs/common';
import { TestModel } from 'src/models/TestModel';
import { ModelService } from './model.service';

@Controller('/CRUD')
export class CRUDController {
	constructor(private readonly modelService: ModelService) {}

	@Get()
	getModel(): TestModel {
		return this.modelService.getModel();
	}
}
