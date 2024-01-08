import { Module } from "@nestjs/common";
import { TipoDocumentoController } from "src/tipo-documento/controllers/tipo-documento.controller";
import { TipoDocumentoService } from "src/tipo-documento/services/tipo-documento.service";
import { TypeOrmModule} from "@nestjs/typeorm";
import { TipoDocumento } from "../model/tipo-documento.entity";

@Module({
    imports: [TypeOrmModule.forFeature([TipoDocumento])],
    controllers: [TipoDocumentoController],
    providers: [TipoDocumentoService]
})
export class TipoDocumentoModule {}