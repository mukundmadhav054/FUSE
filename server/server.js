const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.json({
        "Project Name": "FUSE",
        "message": "Welcome to FUSE API",
        "description": "FUSE is a free learning educational platform for students where user can learn and practice Data Structures and Algorithms, Frontend, Backend, Designing, and many more.",
        "contact": {
            "email addresses": ["mukundmadhav054@gmail.com", "addarshkumar2005@gmail.com","sg707012@gmail.com"],
            "github": ["mukundmadhav054","AddarshKumar123","HiMashuguptA"]
        }
    });
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})