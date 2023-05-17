import { diskStorage } from 'multer';
import { parse } from 'path'
import { FileEntity } from '../entities/file.entity';
import { FileModel } from '../models/file.model';
import { unlink } from 'fs'

export function storageOptions(dest : string = './uploads'){
    return {
        storage: diskStorage({
            destination: dest,
            filename: (req, file, cb) => {
              const filename: string = parse(file.originalname).name.replace(/\s/g, '') + new Date().getTime()
              const extension: string = parse(file.originalname).ext
              cb(null, `${filename}${extension}`)
            }
        })  
    }
}

export function removeFile(file : any | FileEntity | FileModel | Express.Multer.File){
    switch(<string>(typeof file)){
        case 'FileModel': case 'FileEntity':
            unlink(`${file.url}`, (err) => {
                if (err) throw (err);
                console.log(`${new Date()} - deleted ${file.url}.`)
            })
            break;
        case 'File':
            unlink(`${file.path}`, (err) => {
                if (err) throw (err);
                console.log(`${new Date()} - deleted ${file.path}.`)
            })
            break;
    }
}