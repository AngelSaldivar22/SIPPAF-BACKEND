import { Module } from "@nestjs/common";
import { AtencionesController } from "../controllers/atenciones.controller";
import { AtencionesService  } from "../services/atenciones.service";
import { TypeOrmModule} from "@nestjs/typeorm";
import { Atenciones } from "../model/atenciones.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Atenciones])],
    controllers: [AtencionesController],
    providers: [AtencionesService]
})
export class AtencionesModule {}