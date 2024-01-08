import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/db-config'
import { UsuarioModule } from './repositories/usuario.module';
import { PropuestaModule } from './propuestas/repositories/propuesta.module';
import { BitacoraModule } from './bitacoras/repositories/bitacora.module'
import { ArchivoModule } from "src/archivos/repositories/archivos.module";
import { TipoDocumentoModule } from "src/tipo-documento/repositories/tipo-documento.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsuarioModule,
    PropuestaModule,
    BitacoraModule,
    ArchivoModule,
    TipoDocumentoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
