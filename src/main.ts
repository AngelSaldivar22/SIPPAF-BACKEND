import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { MainEnum } from './ultils/enums/microservice-enum';
import { HttpExceptionFilter } from './ultils/http-excepción.filter';

async function bootstrap() {  
  const app = await NestFactory.create(AppModule);
  if (process.env.CORS === 'true') {
    app.enableCors();
  } else {
    const optionCors = {
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
      credentials: true,
    }
    console.log("ENTRASTE");
    
    app.enableCors(optionCors);
  }
  app.setGlobalPrefix(MainEnum.CATALOGOS_PATH);
  const config = new DocumentBuilder()
    .setTitle(MainEnum.TITULO)
    .setDescription(MainEnum.DESCRIPCION)
    .setVersion(MainEnum.VERSION)
    .addTag(MainEnum.TAG)
    .build();
  app.useGlobalFilters(new HttpExceptionFilter());
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  

  await app.listen(process.env.SIDEP_PORT || 3000);
}
bootstrap();
