import { Module } from '@nestjs/common';
import { AppController } from './core/controller/app.controller';
import { AppService } from './core/service/app.service';

@Module({
	imports: [],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
