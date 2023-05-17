import { FileModel } from "../models/file.model";

export class FileDataMapper {
  static fromExpressToDomain(file: Express.Multer.File): FileModel {
    return {
      name: file.filename,
      url: file.path,
      mimetype: file.mimetype,
      size: file.size,
    }
  }
}