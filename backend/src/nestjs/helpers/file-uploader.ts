import { diskStorage } from "multer"
import { extname, basename } from "path"

export function storageOptions(destination: string): ReturnType<typeof diskStorage> {
  return diskStorage({
    destination,
    filename: (req, file, callback) => {
      const unique = new Date().getTime()
      const ext = extname(file.originalname)
      const base = basename(file.originalname, ext)
      const filename = `${base}-${unique}${ext}`.replace(/\s/g, '')
      callback(null, filename)
    },
  })
}