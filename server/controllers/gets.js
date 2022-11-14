import Recipes from "../models/Recipes.js";

export const getdbname = async (req, res) => {
    try {
        let counter = await Recipes.estimatedDocumentCount(function (
            err,
            count
        ) {
            if (err) {
                console.log(err);
            } else {
                console.log("Estimated Count :", count);
            }
        }).clone();

        // res.send("you got number of documents ");
        res.json({ counter });
        console.log(counter);
        // if (counter <= 782) {
        //     res.send("not populated", counter);
        // } else {
        //     res.send("populated");
        // }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getPosts = async (req, res) => {
    try {
        res.send("yooo");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
