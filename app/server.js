import express from "express";
//import appInsights from "applicationinsights";

const app = express();

//appInsights.setup("0dccd139-e558-41b0-838c-fd892a3b0b16");
//appInsights.start();

app.get("/api", (req, res) => {
    res.send({ message: "I am a server route and can also be hot reloaded!" });
});

export default app;