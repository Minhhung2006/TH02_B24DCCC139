import React, { useEffect, useState } from "react";
import axios from "axios";

interface Article {
  id: number;
  title: string;
  summary: string;
  url: string;
  image_url: string;
  published_at: string;
}

const News: React.FC = () => {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    axios.get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then((res) => setNews(res.data.results));
  }, []);

  return (
    <div className="p-4">
      <h2>📰 Tin tức vũ trụ</h2>
      {news.map((n) => (
        <div key={n.id} style={{ borderBottom: "1px solid #ccc", marginBottom: 10 }}>
          <img src={n.image_url} alt={n.title} width={200} />
          <h3>{n.title}</h3>
          <p>{n.summary}</p>
          <p><a href={n.url} target="_blank" rel="noreferrer">Xem chi tiết</a></p>
          <small>Ngày đăng: {new Date(n.published_at).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  );
};

export default News;
