import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import Article from "./Article";
import TopArticle from "./TopArticle";
import styles from "../styles/Home.module.css";

function Home() {
	const bookmarks = useSelector((state) => state.bookmarks.value);
	const hiddenArticle = useSelector((state) => state.hiddenArticle.value);

	const [articlesData, setArticlesData] = useState([]);
	const [topArticle, setTopArticle] = useState({});

	useEffect(() => {
		fetch("http://localhost:3000/articles")
			.then((response) => response.json())
			.then((data) => {
				setTopArticle(data.articles[0]);
				setArticlesData(data.articles.filter((data, i) => i > 0));
			});
	}, []);

	//   const hiddenArticleList = [];
	// 	for (let i = 0; i < articlesData.length; i++) {
	// articlesData[i].title

	//   }

	const hiddenArticleList = articlesData.filter((data) => !hiddenArticle.includes(data.title));
	console.log(hiddenArticle);

	const articles = hiddenArticleList.map((data, i) => {
		const isBookmarked = bookmarks.some((bookmark) => bookmark.title === data.title);

		return <Article key={i} {...data} isBookmarked={isBookmarked} />;
	});

	let topArticles;
	if (bookmarks.some((bookmark) => bookmark.title === topArticle.title)) {
		topArticles = <TopArticle {...topArticle} isBookmarked={true} />;
	} else {
		topArticles = <TopArticle {...topArticle} isBookmarked={false} />;
	}

	return (
		<div>
			<Head>
				<title>Morning News - Home</title>
			</Head>
			{topArticles}
			<div className={styles.articlesContainer}>{articles}</div>
		</div>
	);
}

export default Home;
