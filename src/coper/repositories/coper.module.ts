import { Module } from "@nestjs/common";
import { CoperController } from "../controllers/coper.controller";
import { CoperService } from "../services/coper.service";
import { TypeOrmModule} from "@nestjs/typeorm";
import { Coper } from "../model/coper.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Coper])],
    controllers: [CoperController],
    providers: [CoperService]
})
export class CoperModule {}