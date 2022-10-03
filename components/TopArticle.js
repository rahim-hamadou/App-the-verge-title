import styles from "../styles/Toparticle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { addBookmark, removeBookmark } from "../reducers/bookmarks";

function TopArticle(props) {
	const dispatch = useDispatch();

	const handleBookmarkClick = () => {
		if (props.isBookmarked) {
			dispatch(removeBookmark(props));
		} else {
			dispatch(addBookmark(props));
		}
	};

	let iconStyle = {};
	if (props.isBookmarked) {
		iconStyle = { color: "#e9be59", cursor: "pointer" };
	}
	return (
		<div className={styles.topContainer}>
			<img src={props.urlToImage} className={styles.image} alt={props.title} />
			<div className={styles.topText}>
				<h2 className={styles.topTitle}>{props.title}</h2>
				<FontAwesomeIcon
					onClick={() => handleBookmarkClick()}
					icon={faBookmark}
					className={styles.bookmarkIcon}
					style={iconStyle}
				/>
				<h4>{props.author}</h4>
				<p>{props.description}</p>
			</div>
		</div>
	);
}

export default TopArticle;
