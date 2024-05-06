import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './core/controller/app.controller';
import { AppService } from './core/service/app.service';
import { ProductModule } from './modules/products/products.module';

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://localhost:27016/test'),
		ProductModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
