const  mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = require("./app")


mongoose.connect(process.env.SERVER).then(()=>{
 console.log("MongoDB Database Connacet");
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Presidency App Runing Prot ${port}`);
});