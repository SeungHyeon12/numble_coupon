import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';
import { initializeTransactionalContext } from 'typeorm-transactional';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:5000',
        package: 'coupon',
        protoPath: join(__dirname, 'coupon.proto'),
      },
    },
  );
  app.useGlobalPipes(new ValidationPipe());
  initializeTransactionalContext();

  await app.listen();
}
bootstrap();
