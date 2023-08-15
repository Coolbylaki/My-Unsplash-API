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
			VALUES ($1, $2)
			RETURNING *;
    `,
			[url, label]
		);

		pool.close();
		return rows[0];
	}

	static async deletePhoto(id) {
		pool.connect();

		const { rows } = await pool.query(
			`
      DELETE FROM photos
			WHERE id = $1
			RETURNING *;
    `,
			[id]
		);

		pool.close();
		return rows[0];
	}
}

export default PhotoController;
