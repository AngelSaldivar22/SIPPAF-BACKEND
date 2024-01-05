import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/db-config'
import { AtencionesModule} from './atenciones/repositories/atenciones.module';
import { AcreditadoModule} from './acreditados/repositories/acreditado.module';
import { UsuarioModule } from './usuarios/repositories/usuario.module';
import { CoperModule } from './coper/repositories/coper.module';
import { AcuerdoModule } from './seguimiento/acuerdos/repositories/acuerdos.module';
import { HistorialModule } from './seguimiento/historial/repositories/acuerdos.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsuarioModule,
    AcreditadoModule,
    AtencionesModule,
    CoperModule,
    AcuerdoModule,
    HistorialModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
