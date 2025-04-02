import { getArticles } from "./api.js";
import { useState, useEffect } from "react";
import { Article } from "./Article";
import { Link } from "react-router-dom";
import { getFullArticle } from "./api";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
    .then(({ articles }) => {
      setArticles(articles);
    });
  }, []);


  return (
    <div className="articles">
      <ul className="articles-list">
        {articles.map((article) => {
          return (
            <li>
              <Link to={`/view-article-${article.article_id}`}>
                <Article
                  article={article}
                  articleViewType="article-short-form"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { Articles };
