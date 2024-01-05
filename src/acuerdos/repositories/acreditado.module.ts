import { Module } from "@nestjs/common";
import { AcreditadoController } from "../controllers/acreditado.controller";
import { AcreditadoService } from "../services/acreditado.service";
import { TypeOrmModule} from "@nestjs/typeorm";
import { Acreditado } from "../model/acreditado.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Acreditado])],
    controllers: [AcreditadoController],
    providers: [AcreditadoService]
})
export class AcreditadoModule {}