import { useDataLayer } from "../components/StateProvider";

const NewsArticles = () => {
  const {
    state: { articles, query },
  } = useDataLayer();

  return (
    <div className="news-articles">
      {!articles ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2>{query ? `You searched for ${query}` : "Latest Articles"} </h2>
          <div className="grid">
            {articles?.map((article) => (
              <div key={article.short_url} className="article">
                <img
                  src={article.multimedia[3].url}
                  alt={article.multimedia[3].caption}
                />
                <div className="info">
                  <h4>
                    {(article.title
                      ? article.title
                      : article.abstract
                    ).substring(0, 50)}
                    ...
                  </h4>
                  <p>
                    {article.published_date
                      ? article.published_date
                      : article.pub_date}
                  </p>
                  <button>View Article</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default NewsArticles;
