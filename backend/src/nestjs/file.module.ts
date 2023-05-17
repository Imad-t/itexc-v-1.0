import { Module } from '@nestjs/common';
import { FileRepository } from './repositories/file.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';

@Module({
    imports:[TypeOrmModule.forFeature([FileEntity])],
    controllers:[],
    providers:[FileRepository],
    exports:[FileRepository]
})
export class FileModule {}
