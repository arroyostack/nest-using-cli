// NestFactory is a factory for creating Nest application instances.
import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';

// ValidationPipe is a pipe that can be used to validate input data.
import { ValidationPipe } from '@nestjs/common';

// It's an asynchronous function that sets up the NestJS application.
async function bootstrap() {
  // NestJS application instance with the MessagesModule.
  const app = await NestFactory.create( MessagesModule );

  //  This means all the input data will be validated.
  app.useGlobalPipes(
    new ValidationPipe()
  );

  await app.listen( 3000 );
}

bootstrap();