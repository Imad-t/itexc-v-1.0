import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { join }from "path";

export const typeOrmModuleAsyncConfig : TypeOrmModuleAsyncOptions= {
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory: (configService:ConfigService) => ({
        type: 'postgres',
        url: configService.get('databaseUrl'),
        entities: [join(__dirname, '..', 'src', '**', 'entities', '*.entity{.ts,.js}')],
        synchronize: true,
        logging: true,
        ssl: true,
        extra: {
            ssl: {
                rejectUnauthorized: false,
            },
        },
    }),

    //#region Local Options
    /*
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres1',
        password: 'postgres1',
        database: 'postgres2',
        entities: [path.join(__dirname, '..', 'src', '**', 'entities', '*.entity{.ts,.js}')],
        synchronize: true,
        logging: true,
    */
    //#endregion Local Options
}
