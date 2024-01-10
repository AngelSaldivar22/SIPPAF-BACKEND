import { Module } from "@nestjs/common";
import { TypeOrmModule} from "@nestjs/typeorm";
import { EtapaController } from "src/etapa/controllers/etapa.controller";
import { EtapaService } from "src/etapa/services/etapa.service";
import { Etapa } from "../model/etapa.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Etapa])],
    controllers: [EtapaController],
    providers: [EtapaService]
})
export class EtapaModule {}