import express from "express";
import photoRouter from "./routes/photos.js";

const createApp = () => {
	const app = express();

	app.use(express.json());
	app.use(photoRouter);

	return app;
};

export default createApp;
