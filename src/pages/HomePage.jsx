import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaNewspaper, FaUsers, FaCity } from 'react-icons/fa';

const NewsCard = ({ news }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden hover-card"
  >
    <div className="h-48 relative overflow-hidden">
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 left-4">
        <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-gray-900">
          {news.category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 hover:text-orange-500 transition-colors">
        {news.title}
      </h3>
      <p className="text-gray-600 mb-4">{news.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{news.date}</span>
        <motion.button
          whileHover={{ x: 5 }}
          className="text-orange-500 hover:text-orange-600"
        >
          <FaArrowRight />
        </motion.button>
      </div>
    </div>
  </motion.div>
);

const HomePage = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Community Center Opening in Raja Park",
      description: "A state-of-the-art facility designed to serve the local community with modern amenities.",
      category: "Infrastructure",
      image: "/infra.jpg",
      date: "April 18, 2024"
    },
    {
      id: 2,
      title: "Smart City Initiative Launches in Jaipur",
      description: "Implementation of smart technologies to enhance urban living and sustainability.",
      category: "Technology",
      image: "/tech.webp",
      date: "April 17, 2024"
    },
    {
      id: 3,
      title: "Heritage Conservation Project Begins",
      description: "Restoration work starts on historical monuments to preserve cultural heritage.",
      category: "Heritage",
      image: "/taj-mahal.jpg",
      date: "April 16, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[90vh] bg-gradient-to-r from-orange-500 to-pink-500"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Welcome to Sheher Connect
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl"
          >
            Your gateway to Jaipur's community updates, projects, and civic engagement
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300"
          >
            Explore Now
          </motion.button>
        </div>
      </motion.section>

      {/* Trending Tags */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto scrollbar-hide gap-4 pb-4">
            {['#SmartCity', '#CleanJaipur', '#Heritage', '#Tourism', '#Infrastructure'].map((tag) => (
              <motion.div
                key={tag}
                whileHover={{ scale: 1.05 }}
                className="bg-white px-6 py-2 rounded-full shadow-md cursor-pointer whitespace-nowrap"
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 gradient-text">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
            Why Choose Sheher Connect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaNewspaper className="text-4xl text-orange-500" />,
                title: "Latest Updates",
                description: "Stay informed with real-time city updates and news"
              },
              {
                icon: <FaUsers className="text-4xl text-orange-500" />,
                title: "Community Engagement",
                description: "Connect with your local community and participate in discussions"
              },
              {
                icon: <FaCity className="text-4xl text-orange-500" />,
                title: "City Projects",
                description: "Track ongoing and upcoming city development projects"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg text-center"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community and stay connected with your city's development
          </p>
          <Link
            to="/community"
            className="inline-block bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300"
          >
            Join Community
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 