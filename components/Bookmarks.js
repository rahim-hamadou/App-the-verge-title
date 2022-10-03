import Head from "next/head";
import styles from "../styles/Bookmarks.module.css";
import Article from "./Article";
import { useSelector } from "react-redux";

function Bookmarks() {
	const bookmarks = useSelector((state) => state.bookmarks.value);

	// on definit la valeur par defaut de articles
	let articles = <p>No bookmark</p>;

	// on definit articles si les bookmarks
	if (bookmarks.length) {
		articles = bookmarks.map((data, i) => {
			return <Article key={i} {...data} isBookmarked />;
		});
	}
	return (
		<div>
			<Head>
				<title>Morning News - Bookmarks</title>
			</Head>
			<div className={styles.container}>
				<h2>Bookmarks</h2>
				<div className={styles.articleFav}>{articles}</div>
			</div>
		</div>
	);
}

export default Bookmarks;
