import { Module } from "@nestjs/common";
import { BitacoraController } from "src/bitacoras/controllers/bitacora.controller";
import { BitacoraService } from "src/bitacoras/services/bitacora.service";
import { TypeOrmModule} from "@nestjs/typeorm";
import { Bitacora } from "../model/bitacora.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Bitacora])],
    controllers: [BitacoraController],
    providers: [BitacoraService]
})
export class BitacoraModule {}