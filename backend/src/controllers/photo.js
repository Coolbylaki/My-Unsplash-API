import pool from "../pool.js";

class PhotoController {
	static async findAll() {
		pool.connect();

		const { rows } = await pool.query(`
      SELECT *
      FROM photos;
    `);

		pool.close();
		return rows;
	}

	static async insertPhoto(url, label) {
		pool.connect();

		const { rows } = await pool.query(
			`
      INSERT INTO photos (url, label)
			VALUES ($1, $2);
    `,
			[url, label]
		);

		pool.close();
		return rows[0];
	}
}

export default PhotoController;