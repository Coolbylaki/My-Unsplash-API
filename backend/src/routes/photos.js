import express from "express";
import PhotoController from "../controllers/photo.js";

const router = express.Router();

router.get("/photos", async (req, res) => {
	const photos = await PhotoController.findAll();

	if (photos) {
		return res.send(photos);
	}

	res.sendStatus(404);
});

router.post("/photos", async (req, res) => {});

router.delete("/photos/:id", async (req, res) => {});

export default router;
