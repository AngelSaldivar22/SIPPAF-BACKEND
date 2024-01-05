import { Module } from "@nestjs/common";
import { ArchivoController } from "src/archivos/controllers/archivos.controller";
import { ArchivoService } from "src/archivos/services/archivo.service";
import { TypeOrmModule} from "@nestjs/typeorm";
import { Archivo } from "../model/archivo.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Archivo])],
    controllers: [ArchivoController],
    providers: [ArchivoService]
})
export class ArchivoModule {}