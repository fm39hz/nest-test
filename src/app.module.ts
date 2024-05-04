import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CRUDController } from './base/crud.controller';
import { ModelService } from './base/model.service';

@Module({
	imports: [],
	controllers: [AppController, CRUDController],
	providers: [AppService, ModelService],
})
export class AppModule {}
