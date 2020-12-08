import { useDataLayer } from "../components/StateProvider";

const NewsArticles = () => {
  const {
    state: { articles },
  } = useDataLayer();

  return (
    <div className="news-articles">
      <h2>Latest Articles</h2>

      {articles && (
        <div className="grid">
          {articles.map((article) => (
            <div key={article.short_url} className="article">
              <img
                src={article.multimedia[3].url}
                alt={article.multimedia[3].caption}
              />
              <div className="info">
                <h4>
                  {article.title.substring(0, 50)}
                  ...
                </h4>
                <p>{article.published_date}</p>
                <button>View Article</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsArticles;
