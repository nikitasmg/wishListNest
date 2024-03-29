import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from "@nestjs/config";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService)
  app.enableCors()
  const port = process.env.PORT || 3001
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
}
bootstrap();
