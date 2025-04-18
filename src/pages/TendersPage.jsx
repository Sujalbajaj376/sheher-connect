import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaFilter, FaDownload, FaCalendar, FaBuilding } from 'react-icons/fa';

const TenderCard = ({ tender }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-white rounded-xl shadow-lg overflow-hidden mb-4"
    >
      <motion.button
        layout="position"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50"
      >
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-orange-100 rounded-lg">
            <FaBuilding className="text-orange-500 text-xl" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg">{tender.title}</h3>
            <p className="text-gray-500 text-sm">{tender.department}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="text-gray-400" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 border-t">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Start Date</p>
                  <p className="font-medium">{tender.startDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">End Date</p>
                  <p className="font-medium">{tender.endDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Budget</p>
                  <p className="font-medium">₹{tender.budget}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-sm ${
                    tender.status === 'Active' 
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {tender.status}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{tender.description}</p>
              
              <div className="flex justify-between items-center">
                <button className="flex items-center space-x-2 text-orange-500 hover:text-orange-600">
                  <FaDownload />
                  <span>Download Details</span>
                </button>
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TendersPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Active', 'Closed', 'Infrastructure', 'Technology'];

  const tenders = [
    {
      id: 1,
      title: "Smart Traffic Management System",
      department: "Jaipur Smart City Limited",
      description: "Implementation of AI-based traffic management system across major intersections in Jaipur.",
      startDate: "Apr 15, 2024",
      endDate: "May 15, 2024",
      budget: "2,50,00,000",
      status: "Active"
    },
    {
      id: 2,
      title: "Public Parks Renovation",
      department: "Jaipur Development Authority",
      description: "Comprehensive renovation and modernization of 5 major public parks in the city.",
      startDate: "Apr 10, 2024",
      endDate: "Apr 25, 2024",
      budget: "75,00,000",
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold gradient-text">Active Tenders</h1>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaFilter className="text-gray-500" />
            <span>Filter</span>
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex overflow-x-auto scrollbar-hide gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                activeFilter === filter
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Tenders List */}
        <div>
          {tenders.map((tender) => (
            <TenderCard key={tender.id} tender={tender} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TendersPage; 