import React from 'react';
import './news.css';
import newImage from '../../Assets/newImage.jpg';
import newsImage2 from '../../Assets/newsImage2.jpg';
import newsImage3 from '../../Assets/newsImage3.jpg';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Top 10 Beach Destinations for 2025',
      description: 'Explore the best beaches around the world for a perfect vacation in 2025.',
      image: newImage,
      link: '/news/top-10-beaches',
    },
    {
      id: 2,
      title: 'Solo Travel: Tips for a Safe and Fun Experience',
      description: 'Going solo? Here are some tips to make your solo trip both safe and memorable.',
      image: newsImage2,
      link: '/news/solo-travel-tips',
    },
    {
      id: 3,
      title: 'Family-Friendly Travel Destinations This Summer',
      description: 'Looking for a family-friendly destination? Check out these amazing summer spots.',
      image: newsImage3,
      link: '/news/family-friendly-travel',
    },
  ];

  return (
    <div className="news">
      <div className="newsHeader">
        <h1 className="newsTitle">Travel News</h1>
        <p className="newsSubtitle">Stay updated with the latest travel news, tips, and promotions.</p>
      </div>

      <div className="newsGrid">
        {newsArticles.map((article) => (
          <div className="newsCard" key={article.id}>
            <img src={article.image} alt={article.title} className="newsImage" />
            <div className="newsContent">
              <h3 className="newsTitle">{article.title}</h3>
              <p className="newsDescription">{article.description}</p>
              <a href={article.link} className="readMoreBtn">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
