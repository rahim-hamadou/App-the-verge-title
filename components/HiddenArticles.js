import { useDispatch, useSelector } from "react-redux";
import { addHiddenArticle, removeHiddenArticle } from "../reducers/hiddenArticles";

import Head from "next/head";
import styles from "../styles/Bookmarks.module.css";
import Article from "./Article";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faXmark, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function HiddenArticle() {
	const dispatch = useDispatch();
	// const bookmarks = useSelector((state) => state.bookmarks.value);
	const hiddenArticle = useSelector((state) => state.hiddenArticle.value);

	let articles = <p>No article</p>;
	if (hiddenArticle.length > 0) {
		articles = hiddenArticle.map((data, i) => {
			return <Article key={i} {...data} />;
		});
	}

	const handleEmptyHide = () => {
		dispatch(removeHiddenArticle());
		// console.log(hiddenArticle);
	};
	let iconStyleH = {};
	iconStyleH = { color: "#8c6879" };
	return (
		<div>
			<Head>
				<title>Morning News - Hidden Articles</title>
			</Head>
			<div className={styles.container}>
				<div className={styles.hiddenThing}>
					<h2 className={styles.title}>Hidden Articles</h2>

					<FontAwesomeIcon
						onClick={() => handleEmptyHide()}
						icon={faEyeSlash}
						style={iconStyleH}
						className={styles.bookmarkIcon}
					/>
				</div>

				<div className={styles.articlesContainer}>{articles}</div>
			</div>
		</div>
	);
}

export default HiddenArticle;
