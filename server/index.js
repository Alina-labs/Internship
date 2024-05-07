const express = require('express');
const app = express();
const cors = require("cors");
const connectdb = require("./db/config")
const authRoute = require("./router/Auth/authRouter")


PORT = 8000
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);



connectdb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`);
    });
})