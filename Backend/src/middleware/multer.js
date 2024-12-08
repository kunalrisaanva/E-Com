// import multer from "multer";

// const storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,"./public/temp");
//     },
//     filename:function(req,file,cb){
//         cb( null,file.originalname )
//     },
// });

// export const upload = multer({storage:storage});
// import path from 'path';
// import fs from 'fs/promises';
// import multer from "multer"

// Configure Multer storage
// const storage = multer.diskStorage({

//     destination: async (req, file, cb) => {
//       const uploadDir = path.resolve('uploads');
//       await fs.mkdir(uploadDir, { recursive: true }); // Ensure uploads directory exists
//       cb(null, uploadDir);
//     },
//     filename: (req, file, cb) => {
//       const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
//       cb(null, `${uniqueSuffix}-${file.originalname}`);
//     },
//   });

//   const upload = multer({
//     storage,
//     limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
//     fileFilter: (req, file, cb) => {
//       const validMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
//       if (validMimeTypes.includes(file.mimetype)) {
//         cb(null, true);
//       } else {
//         cb(new Error('Invalid file type. Only images are allowed.'));
//       }
//     },
//   });

// export { upload }

import multer from "fastify-multer";
import path from "path";

// Configure disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "uploads")); // Directory to save the file
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique file name
  },
});

const upload = multer({ storage });

export { upload };
