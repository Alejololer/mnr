import express from 'express';
import os from 'node:os';
import config from './config';

const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/",(req, res) => {
    res.render("index", {
        initialContent: "Loading...",
    });
});

server.listen(config.PORT, config.HOST, () =>{
    console.info(`Server is running on ${config.SERVER_URL}`,
        "Free Mem: ", os.freemem() /1024 /1024, "MB",
    );
});