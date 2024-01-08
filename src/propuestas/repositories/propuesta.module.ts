import { Module } from "@nestjs/common";
import { PropuestaController } from "src/propuestas/controllers/propuesta.controller";
import { PropuestaService } from "src/propuestas/services/propuesta.service";
import { TypeOrmModule} from "@nestjs/typeorm";
import { Propuesta } from "../model/propuesta.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Propuesta])],
    controllers: [PropuestaController],
    providers: [PropuestaService]
})
export class PropuestaModule {}