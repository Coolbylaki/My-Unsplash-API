import createApp from "./src/app.js";
const port = 3030;

createApp().listen(port, () => {
	console.log(`Listening on http://localhost:${port}/photos`);
});
