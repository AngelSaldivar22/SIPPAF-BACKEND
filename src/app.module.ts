import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/db-config'
import { UsuarioModule } from './repositories/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
