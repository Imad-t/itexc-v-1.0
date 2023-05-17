import { Injectable } from '@nestjs/common'
import { Repository, DataSource } from 'typeorm'
import { FileEntity } from '../entities/file.entity'
import { removeFile } from '../helpers/file-storage'

@Injectable()
export class FileRepository extends Repository<FileEntity> {
  constructor(private dataSource: DataSource) {
    super(FileEntity, dataSource.createEntityManager())
  }
  async removeFile(id: number, url: string): Promise<FileEntity> {
    try {
      const file = await this.remove(
        await this.findOne(
            { 
                where: { id: id, url: url },
            }
        ))
        removeFile(file)
        return file
    } catch (error) {
      console.log(error)
    }
  }
}
