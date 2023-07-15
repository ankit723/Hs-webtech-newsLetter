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
// const UPLOADS_DIR = path.join(__dirname, 'uploads');

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

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



const newsSchema = new mongoose.Schema(
    {
        admin: {
            type: String,
            default: "Ankit"
        },
        date: {
            type: Date,
            required: true
        },
        item: {
            type: String,
            required: true
        },
        image: String,
        head: {
            type: String,
            required: true
        },
        para: {
            type: String,
            required: true
        },
        major: {
            type: Boolean,
            required: true
        },
    },
    { timestamps: true }
);
const News = mongoose.model('News', newsSchema);



const lifestyleSchema = new mongoose.Schema(
    {
        admin: {
            type: String,
            default: "Ankit"
        },
        date: {
            type: Date,
            required: true
        },
        item: {
            type: String,
            required: true
        },
        image: String,
        head: {
            type: String,
            required: true
        },
        para: {
            type: String,
            required: true
        },
        major: {
            type: Boolean,
            required: true
        },
    },
    { timestamps: true }
);
const LifeStyle = mongoose.model('LifeStyle', lifestyleSchema);



const gadgetSchema = new mongoose.Schema(
    {
        admin: {
            type: String,
            default: "Ankit"
        },
        date: {
            type: Date,
            required: true
        },
        item: {
            type: String,
            required: true
        },
        image: String,
        head: {
            type: String,
            required: true
        },
        para: {
            type: String,
            required: true
        },
        major: {
            type: Boolean,
            required: true
        },
    },
    { timestamps: true }
);
const Gadget = mongoose.model('Gadget', gadgetSchema);



const fashionSchema = new mongoose.Schema(
    {
        admin: {
            type: String,
            default: "Ankit"
        },
        date: {
            type: Date,
            required: true
        },
        item: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        head: {
            type: String,
            required: true
        },
        para: {
            type: String,
            required: true
        },
        major: {
            type: Boolean,
            required: true
        },
    }
);
const Fashion = mongoose.model('Fashion', fashionSchema);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    }, // Set the destination folder for uploaded files
    filename: (req, file, cb) => {
        // Generate a unique filename for the uploaded file
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
        cb(null, `${uniqueSuffix}-${file.originalname}`);
    },
});
const upload = multer({ storage });

app.post("/hello", upload.single('image'), async (req, res) => {
    try {
        const { page, item, head, para, major } = req.body;
        const postImage = req.file.filename;
        const date = new Date();
        if (page === "news") {
            const newNews = new News({
                item,
                head,
                image: postImage,
                para,
                major,
                date
            });
            await newNews.save();
            const post = await News.find();
            // console.log(post, { message: 'File uploaded successfully' });
            res.status(201).json(post);
        } else if (page === "fashion") {
            const newFashion = new Fashion({
                item,
                head,
                image: postImage,
                para,
                major,
                date
            });
            await newFashion.save();
            const post = await News.find();
            // console.log(post, { message: 'File uploaded successfully' });
            res.status(201).json(post);
        } else if (page === "gadgets") {
            const newGadget = new Gadget({
                item,
                head,
                image: postImage,
                para,
                major,
                date
            });
            await newGadget.save();
            const post = await News.find();
            // console.log(post, { message: 'File uploaded successfully' });
            res.status(201).json(post);

        } else {
            const newLifeStyle = new LifeStyle({
                item,
                head,
                image: postImage,
                para,
                major,
                date
            });
            await newLifeStyle.save();
            const post = await News.find();
            // console.log(post, { message: 'File uploaded successfully' });
            res.status(201).json(post);
        }
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
});

const getNews =  async ( req, res ) => {
    try {
        const newsP = await News.find();
        res.status(200).json(newsP);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getLifestyle = async ( req, res ) => {
    try {
        const lifestyleP = await LifeStyle.find();
        res.status(200).json(lifestyleP);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const getGadgets = async ( req, res ) => {
    try {
        const gadgetsP = await Gadget.find();
        res.status(200).json(gadgetsP);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const getFashion = async ( req, res ) => {
    try {
        const fashionP = await Fashion.find();
        res.status(200).json(fashionP);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

app.get("/newsP", getNews);
app.get("/lifestyleP", getLifestyle);
app.get("/gadgetsP", getGadgets);
app.get("/fashionP", getFashion);

app.listen(5000, () => {
    console.log("The App has started listen on port 5000")
})