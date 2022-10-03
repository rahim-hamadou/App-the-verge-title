import { useEffect, useState } from "react";
import Head from "next/head";
import Article from "./Article";
import TopArticle from "./TopArticle";
import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";

function Home() {
	// on definie un arr contenant les bookmarks du store
	const bookmarks = useSelector((state) => state.bookmarks.value);
	const [articlesData, setArticlesData] = useState([]);
	const [topArticle, setTopArticle] = useState({});

	useEffect(() => {
		fetch("https://news-app-backend-green.vercel.app/articles")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setTopArticle(data.articles[0]);
				// on affiche les els du data avec l'index de boucle superieur a 0 donc le deuxieme el
				setArticlesData(data.articles.filter((data, i) => i > 0));
			});
	}, []);

	const articles = articlesData.map((data, i) => {
		// on defini si l'el est deja save dans bookmark
		const isBookmarked = bookmarks.some((bookmarks) => bookmarks.title === data.title);

		// a chaque tour de boucle du l"arr on rempli les champs attendu dans articles.js avec els data recu de [articleData]"
		return <Article key={i} {...data} isBookmarked={isBookmarked} />;
	});

	let topArticleCard;
	if (bookmarks.some((bookmarks) => bookmarks.title === topArticle.title)) {
		topArticleCard = <TopArticle {...topArticle} isBookmarked />;
	} else {
		topArticleCard = <TopArticle {...topArticle} isBookmarked={false} />;
	}

	return (
		<div>
			<Head>
				<title>Morning News - Home</title>
			</Head>

			{topArticleCard}

			<div className={styles.articlesContainer}>{articles}</div>
		</div>
	);
}

export default Home;
