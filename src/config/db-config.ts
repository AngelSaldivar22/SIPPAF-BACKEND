import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DBEnum } from "src/ultils/enums/db-enum";

export const config: TypeOrmModuleOptions = {
    type: DBEnum.TYPE,
    host: DBEnum.HOST,
    port: Number(DBEnum.PORT),
    username: DBEnum.USERNAME,
    password: DBEnum.PASSWORD,
    database: DBEnum.DATABASE,
    synchronize: true,
    entities: [__dirname + '/../**/*.entity.js'],
    schema: DBEnum.SCHEMA
}