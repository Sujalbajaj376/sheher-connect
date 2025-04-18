// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaNewspaper, FaUsers, FaCity } from 'react-icons/fa';
import { fetchCityNews } from '../utils/api';

const NewsCard = ({ news }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
  >
    <div className="h-48 relative overflow-hidden">
      <img
        src={news.urlToImage || '/images/news-placeholder.jpg'}
        alt={news.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 line-clamp-2">{news.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{news.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{new Date(news.publishedAt).toLocaleDateString()}</span>
        <Link
          to={news.url}
          target="_blank"
          className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-2"
        >
          Read More
          <FaArrowRight />
        </Link>
      </div>
    </div>
  </motion.div>
);

const HomePage = () => {
  const [news, setNews] = useState([]);
  const city = 'Jaipur';

  useEffect(() => {
    const getNews = async () => {
      try {
        const articles = await fetchCityNews(city);
        setNews(articles.slice(0, 3)); // Only show latest 3 news items
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    getNews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-4"
            >
              Welcome to {city}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              Stay updated with the latest news and developments in your city
            </motion.p>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest News</h2>
          <Link
            to="/news"
            className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-2"
          >
            View All News
            <FaArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <NewsCard key={index} news={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
