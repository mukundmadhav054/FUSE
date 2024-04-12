const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

// Importing the database connection
const connectDB = require("./config/db");

// Importing all the routes here
const userRouter = require("./routes/userRouter");
const contentRouter = require("./routes/contentRouter");

// Using the routes
app.get("/", (req, res) => {
  res.json({
    "Project Name": "FUSE",
    message: "Welcome to FUSE API",
    description:
      "FUSE is a free learning educational platform for students where user can learn and practice Data Structures and Algorithms, Frontend, Backend, Designing, and many more.",
    contact: {
      "email addresses": [
        "mukundmadhav054@gmail.com",
        "addarshkumar2005@gmail.com",
        "sg707012@gmail.com",
      ],
      github: ["mukundmadhav054", "AddarshKumar123", "HiMashuguptA"],
    },
  });
});

app.use("/", userRouter);
app.use("/", contentRouter);

// Function to start and close the server
const startServer = async () => {
  try {
    db = await connectDB();
    process.on("SIGINT", async () => {
      console.log("Received SIGINT. Server shutting down gracefully...");
      await db.close();
      process.exit(0);
    });
  } catch (error) {
    console.log("Failed to start server:", error.message);
    process.exit(1);
  }
};

// Connecting to the database
startServer();

// Listening to the server at PORT
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
