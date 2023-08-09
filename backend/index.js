import createApp from "./src/app.js";
import pool from "./src/pool.js";
import "dotenv/config";

const port = 3030;

pool
	.connect({
		connectionString: process.env.POSTGRES_URL + "?sslmode=require",
	})
	.then(
		createApp().listen(port, () => {
			console.log(`Listening on http://localhost:${port}/photos`);
		})
	)
	.catch((err) => {
		console.log(err.message);
	});
