import "reflect-metadata";
import express from "express";
import UserController from "./controller/UserController"
import {validate} from "./validator";
import userValidations from "./validator/user"
import serverless from "serverless-http"

export const app = express();

app.use(express.json())

app.get("/users", validate([userValidations.read]), UserController.find);
app.post("/users", validate([userValidations.create]), UserController.create);
app.patch("/users", validate([userValidations.update]), UserController.update);
app.delete("/users", validate([userValidations.delete]), UserController.delete);

app.listen(3000, () => {
    return console.log("Server is running..")
})

export const handler = (event, context) => {
    return serverless(app)(event, context);
};
