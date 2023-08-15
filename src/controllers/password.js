import pool from "../pool.js";

class PasswordController {
	static async getPassword() {
		pool.connect();

		const { rows } = await pool.query(`
      SELECT *
      FROM passwords;
    `);

		pool.close();
		return rows[0];
	}
}

export default PasswordController;
