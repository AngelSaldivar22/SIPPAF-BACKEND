import { Module } from "@nestjs/common";
import { UsuarioController } from "../controllers/atenciones.controller";
import { UsuarioService } from "../services/atenciones.service";
import { TypeOrmModule} from "@nestjs/typeorm";
import { Usuario } from "src/model/usuario.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    controllers: [UsuarioController],
    providers: [UsuarioService]
})
export class AtencionesModule {}