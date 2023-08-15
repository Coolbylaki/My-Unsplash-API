import pool from "../pool.js";

class PasswordController {
	// Return password
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
