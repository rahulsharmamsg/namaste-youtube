import multer from "multer";

const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/profile')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileName = file.originalname;
        cb(null, uniqueSuffix + fileName)
    }
})
const upload = multer({ storage: Storage })
export default upload;