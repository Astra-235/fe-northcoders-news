import { getArticles } from "./api.js";
import { useState, useEffect } from "react";
import { Article } from "./Article";
import { Link } from "react-router-dom";
import { getFullArticle } from "./api";

const Articles = ({ setCurrentArticle }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);



  const selectArticle = (article) => {
    getFullArticle(article.article_id)
    .then(({articles : fullArticle}) => {
        setCurrentArticle(fullArticle)

    });


  }

  return (
    <div className="articles">
      <ul className="articles-list">
        {articles.map((article) => {
          return (
            <li
              key={article.article_id}
              value={article.article_id}
              onClick={(e) => {
                selectArticle(article);
              }}
            >
              <Link to="./article">
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
