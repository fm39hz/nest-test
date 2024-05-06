import { Module } from '@nestjs/common';
import { AppController } from './core/controller/app.controller';
import { AppService } from './core/service/app.service';
import { ProductModule } from './modules/products/products.module';

@Module({
	imports: [ProductModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
