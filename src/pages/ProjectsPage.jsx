import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaUsers, FaCalendar, FaChartLine } from 'react-icons/fa';

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
  >
    <div className="h-48 relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 left-4">
        <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-gray-900">
          {project.category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <FaUsers className="text-orange-500" />
          <span className="text-sm text-gray-500">{project.team} Members</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaCalendar className="text-orange-500" />
          <span className="text-sm text-gray-500">{project.duration}</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Progress</span>
          <span className="font-medium">{project.progress}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-500"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Infrastructure', 'Technology', 'Education', 'Healthcare'];

  const projects = [
    {
      id: 1,
      title: "Community Sports Center",
      description: "A state-of-the-art sports facility designed to serve local athletes and promote community engagement.",
      category: "Infrastructure",
      image: "/infra2.jpg",
      team: 12,
      duration: "18 months",
      progress: 75
    },
    {
      id: 2,
      title: "Smart Traffic Management",
      description: "Implementation of AI-powered traffic management system to reduce congestion and improve safety.",
      category: "Technology",
      image: "/tech2.jpg",
      team: 8,
      duration: "12 months",
      progress: 60
    },
    {
      id: 3,
      title: "Public Library Renovation",
      description: "Modernization of city's main public library with digital resources and learning spaces.",
      category: "Education",
      image: "/education.jpeg",
      team: 6,
      duration: "8 months",
      progress: 90
    }
  ];

  const filteredProjects = projects.filter(project =>
    activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Our Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our innovative initiatives and development projects that are shaping the future of our city
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: FaBuilding, label: 'Total Projects', value: '24+' },
            { icon: FaUsers, label: 'Team Members', value: '150+' },
            { icon: FaCalendar, label: 'Years Active', value: '5+' },
            { icon: FaChartLine, label: 'Success Rate', value: '95%' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <stat.icon className="text-3xl text-orange-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeFilter === filter
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-600">No projects found in this category</h3>
            <p className="text-gray-500 mt-2">Please check back later or try a different category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage; 