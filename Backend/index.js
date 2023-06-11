const App = require("./server");
const connectWithDb = require("./config/db");
const cloudinary = require("cloudinary");
//db
connectWithDb();

//cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 8000;
App.listen(process.env.PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
