import express from "express";
import photoRouter from "./routes/photos.js";

const createApp = () => {
	const app = express();

	app.use(express.json());
	app.use((req, res, next) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Methods", "GET,POST, DELETE");
		res.setHeader("Access-Control-Allow-Headers", "Content-Type");
		next();
	});

	app.use(photoRouter);

	return app;
};

export default createApp;
