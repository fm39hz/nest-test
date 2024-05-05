import { Module } from '@nestjs/common';
import { AppController } from './core/controller/app.controller';
import { AppService } from './core/service/app.service';
import { ProductService } from './core/service/product.service';
import { ProductController } from './core/controller/product.controller';

@Module({
	imports: [],
	controllers: [AppController, ProductController],
	providers: [AppService, ProductService],
})
export class AppModule {}
