import Express from "express";
import mongoose from "mongoose";
import router from "./Routes/router.js";
const app = Express();

const CONNECTION_URL =
    "mongodb+srv://wizvision:zbDbaVF69EfPpLT@cluster0.w0kwl.mongodb.net/book?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

app.use(Express.json());

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    )
    .catch((error) => console.log(error.messege));

mongoose
    .connect(CONNECTION_URL)
    .then(() => console.log("Done"))
    .catch(() => console.log("failed"));

app.get("/", (req, res) => {
    res.send(`Icecream khabo`);
});
app.use("/api", router);
