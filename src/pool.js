import pg from "pg";

class Pool {
	_pool = null;

	connect() {
		this._pool = new pg.Pool({
			connectionString: process.env.POSTGRES_URL + "?sslmode=require",
		});
	}

	close() {
		return this._pool.end();
	}

	query(sql, params) {
		return this._pool.query(sql, params);
	}
}

export default new Pool();
