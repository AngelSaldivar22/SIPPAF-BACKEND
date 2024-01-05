import { Module } from "@nestjs/common";
import { AcuerdoController } from "../controllers/acuerdos.controller";
import { AcuerdoService } from "../services/acuerdos.service";
import { TypeOrmModule} from "@nestjs/typeorm";
import { Acuerdos } from "../model/acuerdos.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Acuerdos])],
    controllers: [AcuerdoController],
    providers: [AcuerdoService]
})
export class AcuerdoModule {}