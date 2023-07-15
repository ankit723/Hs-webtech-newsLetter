import dotenv from 'dotenv'
dotenv.config();
import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import multer from 'multer';
import fs from 'fs'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const UPLOADS_DIR = path.join(__dirname, 'uploads');

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

function establishMongooseConnection(dbName) {
    mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.gy84sde.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Connected to the mongodb of ${dbName}`)
    })
    .catch((error) => {
        console.log("Mongod connection error; ", error)
    })
}
establishMongooseConnection("BlogPost")



const newsSchema = new mongoose.Schema({
    admin: { type: String, default:"Ankit"},
    date:{type:Date, required:true },
    item:{type:String, required:true},
    image:{ data: Buffer, contentType: String },
    head:{type:String, required:true},
    para:{type:String, required:true},
    major:{type:Boolean, required:true},
});
const News = mongoose.model('News', newsSchema);



const lifestyleSchema = new mongoose.Schema({
    admin: { type: String, default:"Ankit"},
    date:{type:Date, required:true },
    item:{type:String, required:true},
    image: { data: Buffer, contentType: String },
    head:{type:String, required:true},
    para:{type:String, required:true},
    major:{type:Boolean, required:true},
});
const LifeStyle = mongoose.model('LifeStyle', lifestyleSchema);



const gadgetSchema = new mongoose.Schema({
    admin: { type: String, default:"Ankit"},
    date:{type:Date, required:true },
    item:{type:String, required:true},
    image: { data: Buffer, contentType: String },
    head:{type:String, required:true},
    para:{type:String, required:true},
    major:{type:Boolean, required:true},
});
const Gadget = mongoose.model('Gadget', gadgetSchema);



const fashionSchema = new mongoose.Schema({
    admin: { type: String, default:"Ankit"},
    date:{type:Date, required:true },
    item:{type:String, required:true},
    image: { data: Buffer, contentType: String },
    head:{type:String, required:true},
    para:{type:String, required:true},
    major:{type:Boolean, required:true},
});
const Fashion = mongoose.model('Fashion', fashionSchema);



const storage = multer.diskStorage({
    destination: 'uploads/', // Set the destination folder for uploaded files
    filename: (req, file, cb) => {
      // Generate a unique filename for the uploaded file
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
      cb(null, `${uniqueSuffix}-${file.originalname}`);
    },
});
const upload = multer({ storage });


app.post("/hello", upload.single('image'), async (req, res) => {
    const postImage = req.file; // Use req.file instead of req.image
    const { page, item, head, para, major } = req.body;
    const date=new Date()

    console.log(page, item, head, para, major);
  
    if(major){
        if (page === "news") {
            const newNews = new News({ item, head, para, major, date});
            newNews.image.data = fs.readFileSync(path.join(UPLOADS_DIR, req.file.filename))
            newNews.image.contentType = postImage.mimetype;
            await newNews.save();
            res.json({ message: 'File uploaded successfully' });
    
        } else if (page === "fashion") {
            const newFashion = new Fashion({ item, head, para, major, date});
            newFashion.image.data = postImage.buffer; // Use postImage.buffer instead of image.Buffer
            newFashion.image.contentType = postImage.mimetype;
            await newFashion.save();
            res.json({ message: 'File uploaded successfully' });
    
        } else if (page === "gadgets") {
            const newGadget = new Gadget({ item, head, para, major, date});
            newGadget.image.data = postImage.buffer; // Use postImage.buffer instead of image.Buffer
            newGadget.image.contentType = postImage.mimetype;
            await newGadget.save();
            res.json({ message: 'File uploaded successfully' });
    
        } else {
            const newLifeStyle = new LifeStyle({ item, head, para, major, date});
            newLifeStyle.image.data = postImage.buffer; // Use postImage.buffer instead of image.Buffer
            newLifeStyle.image.contentType = postImage.mimetype;
            await newLifeStyle.save();
            res.json({ message: 'File uploaded successfully' });
        }
    }else{
        if (page === "news") {
            const newNews = new News({ item, head, para, date});
            newNews.image.data = fs.readFileSync(path.join(UPLOADS_DIR, req.file.filename))
            newNews.image.contentType = postImage.mimetype;
            await newNews.save();
            res.json({ message: 'File uploaded successfully' });
    
        } else if (page === "fashion") {
            const newFashion = new Fashion({ item, head, para, date});
            newFashion.image.data = postImage.buffer; // Use postImage.buffer instead of image.Buffer
            newFashion.image.contentType = postImage.mimetype;
            await newFashion.save();
            res.json({ message: 'File uploaded successfully' });
    
        } else if (page === "gadgets") {
            const newGadget = new Gadget({ item, head, para, date});
            newGadget.image.data = postImage.buffer; // Use postImage.buffer instead of image.Buffer
            newGadget.image.contentType = postImage.mimetype;
            await newGadget.save();
            res.json({ message: 'File uploaded successfully' });
    
        } else {
            const newLifeStyle = new LifeStyle({ item, head, para, date});
            newLifeStyle.image.data = postImage.buffer; // Use postImage.buffer instead of image.Buffer
            newLifeStyle.image.contentType = postImage.mimetype;
            await newLifeStyle.save();
            res.json({ message: 'File uploaded successfully' });
        }
    }
});
  

app.listen(5000, () => {
    console.log("The App has started listen on port 5000")
})