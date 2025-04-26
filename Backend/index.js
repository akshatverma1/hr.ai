const express = require('express');
const multer = require('multer');
const pdf = require('pdf-parse');
const cors = require('cors');
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');
const path = require("path");

// Enable CORS
app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyDwp56xlfDqoRMm6Cs9GSp9hjvq7UyKn-w");

// Configure Multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'), false);
    }
  }
});

let ress = [];

app.get("/",(req,res)=>{
  res.send("Backend is working");
})

// PDF Processing Endpoint
app.post('/upload', upload.array('pdfs'), async (req, res) => {
  let {enter} = await req.body;
  console.log(enter);
  try {
    const results = await Promise.all(
      req.files.map(async (file) => {
        const data = await pdf(file.buffer);
        return {
          fileName: file.originalname,
          content: data.text
        };
      }) 
    );
    
    // console.log(results);
    

    //Api Fetch Section 
    results.forEach((element)=>{
      console.log(element.fileName);
      async function run() {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        // const prompt = "Does this image look like,give anwer in more than 200 words";
        // const prompt = "In this content they carry the word (skill) then return the only YES otherwise return NO and answer in one word. without any space";
        // const prompt = "If the content carry the any (Person name , email, phone number) return the (Person name , email, phone number)  if they do not any then return NO"
        const aiprompt = "Check if the skill 'java' is mentioned in the resume. If it is, return the candidate's name. If not, return 'No skills are found in this Resume.'"
        const cont = element.content;
        const result = await model.generateContent([aiprompt,cont]);
        // console.log("answer"+" "+"="+" "+result.response.text());
        ress.push(result.response.text());
        // res.redirect("http://localhost:5173/");
        // setTimeout(()=>{
        //     // res.redirect("https://www.aitextify.space/show");
        // },2000);
    }
    run();
    })

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/getResult",(req,res)=>{
    
    setTimeout(()=>{
        console.log(ress);
        res.json(ress);
    },1000) 
})
app.get("/delete",(req,res)=>{
  ress= [];
})

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});