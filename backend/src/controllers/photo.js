import pool from "../pool.js";

class PhotoController {
	static async findAll() {
		const { rows } = await pool.query(`
      SELECT *
      FROM photos
    `);

		return rows;
	}
}

export default PhotoController;
