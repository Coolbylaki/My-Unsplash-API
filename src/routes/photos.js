import express from "express";
import PhotoController from "../controllers/photo.js";

const router = express.Router();

router.get("/photos", async (req, res) => {
	try {
		const photos = await PhotoController.findAll();

		if (photos.length > 0) {
			return res.send(photos);
		} else {
			res.status(404).json({ error: "No photos found." });
		}
	} catch (error) {
		res.status(500).json({ error: "An error occurred while fetching photos." });
	}
});

router.post("/photos", async (req, res) => {
	const { url, label } = req.body;

	if (!url || !label) {
		return res.status(400).json({ error: "Both 'url' and 'label' are required." });
	}

	try {
		const photo = await PhotoController.insertPhoto(url, label);
		res.status(201).json({ message: "Photo inserted successfully." });
		return photo;
	} catch (error) {
		res.status(500).json({ error: "An error occurred while inserting the photo." });
	}
});

router.delete("/photos/:id", async (req, res) => {
	const { id } = req.params;

	console.log(id);

	try {
		const deletedPhoto = await PhotoController.deletePhoto(id);

		if (deletedPhoto) {
			return res.json({ message: "Photo deleted successfully" });
		} else {
			res.status(404).json({ error: "Photo not found." });
		}
	} catch (error) {
		res.status(500).json({ error: "An error occurred while deleting the photo." });
	}
});

export default router;
