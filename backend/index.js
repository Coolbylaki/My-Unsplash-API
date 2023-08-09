import createApp from "./src/app.js";
import "dotenv/config";

createApp().listen(process.env.PORT, () => {
	console.log(`Listening on http://localhost:${process.env.PORT}/photos`);
});
