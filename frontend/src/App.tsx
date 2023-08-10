import AddPhoto from "./components/AddPhoto";
import Filter from "./components/Filter";

import styles from "./App.module.css";

function App() {
	return (
		<nav className={styles.nav}>
			<Filter />
			<AddPhoto />
		</nav>
	);
}

export default App;
