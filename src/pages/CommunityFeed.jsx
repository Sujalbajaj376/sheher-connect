import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaComment, FaShare, FaEllipsisH, FaImage, FaMapMarkerAlt, FaSmile } from 'react-icons/fa';

const PostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden mb-6"
    >
      {/* Post Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{post.author.name}</h3>
            <p className="text-sm text-gray-500">{post.location}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <FaEllipsisH />
        </button>
      </div>

      {/* Post Image */}
      {post.image && (
        <div className="relative aspect-video">
          <img
            src={post.image}
            alt="Post"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Post Content */}
      <div className="p-4">
        <p className="text-gray-800 mb-4">{post.content}</p>
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-6">
            <motion.button
              whileTap={{ scale: 1.2 }}
              onClick={handleLike}
              className={`flex items-center space-x-2 ${isLiked ? 'text-red-500' : 'text-gray-500'}`}
            >
              <FaHeart />
              <span>{likes}</span>
            </motion.button>
            <button className="flex items-center space-x-2 text-gray-500">
              <FaComment />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500">
              <FaShare />
            </button>
          </div>
          <span className="text-sm text-gray-500">{post.time}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm text-orange-500 bg-orange-50 px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const CommunityFeed = () => {
  const posts = [
    {
      id: 1,
      author: {
        name: "Priya Sharma",
        avatar: "/images/avatars/1.jpg"
      },
      content: "Just witnessed the beautiful lighting ceremony at Hawa Mahal! Our city's heritage is truly magnificent. 🏰✨",
      image: "/images/posts/hawa-mahal.jpg",
      location: "Hawa Mahal, Jaipur",
      likes: 234,
      comments: 45,
      time: "2 hours ago",
      tags: ["Heritage", "JaipurDiaries", "Tourism"]
    },
    {
      id: 2,
      author: {
        name: "Rahul Verma",
        avatar: "/images/avatars/2.jpg"
      },
      content: "Great progress on the new metro line construction! This will make commuting so much easier for everyone. 🚇",
      image: "/images/posts/metro.jpg",
      location: "Civil Lines, Jaipur",
      likes: 156,
      comments: 28,
      time: "5 hours ago",
      tags: ["Infrastructure", "Development", "Transport"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Create Post Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          className="w-full bg-white rounded-xl shadow-lg p-4 mb-8 flex items-center space-x-4"
        >
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <FaImage className="text-gray-500" />
          </div>
          <span className="text-gray-500">Share something with your community...</span>
        </motion.button>

        {/* Posts Feed */}
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center text-white"
      >
        <FaImage className="text-xl" />
      </motion.button>
    </div>
  );
};

export default CommunityFeed; 