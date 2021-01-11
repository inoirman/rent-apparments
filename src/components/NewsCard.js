import { Link } from "react-router-dom";

const wordsCount = (text, count) => {
  return text.split(" ").slice(0, count).join(" ");
};

const NewsCard = ({ news }) => {
  return (
    <div className="col s12">
      <div className="row">
        <div className="col s3">
          <img src={news.photo} alt={news.title} />
        </div>
        <div className="col s9">
          <h3>{news.title}</h3>
          <p>{wordsCount(news.descr, 25)}...</p>
          <Link to={`/news/${news.id}`}>Read more ...</Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
