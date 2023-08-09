import createApp from "./src/app.js";
import pool from "./src/pool.js";
import "dotenv/config";

pool
	.connect({
		connectionString: process.env.POSTGRES_URL + "?sslmode=require",
	})
	.then(
		createApp().listen(process.env.PORT, () => {
			console.log(`Listening on http://localhost:${process.env.PORT}/photos`);
		})
	)
	.catch((err) => {
		console.log(err.message);
	});
