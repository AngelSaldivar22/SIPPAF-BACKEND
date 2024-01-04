import { Module } from "@nestjs/common";
import { UsuarioController } from "src/controllers/usuario.controller";
import { UsuarioService } from "src/services/usuario.service";
import { TypeOrmModule} from "@nestjs/typeorm";
import { Usuario } from "src/model/usuario.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    controllers: [UsuarioController],
    providers: [UsuarioService]
})
export class UsuarioModule {}