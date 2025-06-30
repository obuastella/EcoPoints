//@ts-nocheck
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Medal,
  Award,
  Users,
  User,
  School,
  Calendar,
  TrendingUp,
  Crown,
  Star,
  ArrowLeft,
  Filter,
  MapPin,
  Recycle,
  Leaf,
  Target,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Leaderboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("individuals");
  const [timeFilter, setTimeFilter] = useState("monthly");
  const [currentUser] = useState({
    id: 1,
    name: "You",
    points: 2850,
    rank: 47,
    avatar: "👤",
  });

  const tabs = [
    { id: "individuals", label: "Top Individuals", icon: User },
    { id: "schools", label: "Top Schools", icon: School },
    { id: "groups", label: "Top Groups", icon: Users },
  ];

  const timeFilters = [
    { id: "weekly", label: "This Week" },
    { id: "monthly", label: "This Month" },
    { id: "alltime", label: "All Time" },
  ];

  const individualsData = [
    {
      id: 1,
      name: "Adebayo Ogundimu",
      points: 8450,
      avatar: "👨‍🎓",
      location: "Lagos, Nigeria",
      streak: 45,
      badges: ["🏆", "🌟", "♻️"],
      weeklyGrowth: 12.5,
    },
    {
      id: 2,
      name: "Fatima Abdullahi",
      points: 7890,
      avatar: "👩‍🎓",
      location: "Kano, Nigeria",
      streak: 38,
      badges: ["🥇", "🌱", "💚"],
      weeklyGrowth: 8.3,
    },
    {
      id: 3,
      name: "Chioma Okafor",
      points: 7320,
      avatar: "👩‍💼",
      location: "Abuja, Nigeria",
      streak: 52,
      badges: ["🎯", "🌿", "⭐"],
      weeklyGrowth: 15.2,
    },
    {
      id: 4,
      name: "Ibrahim Musa",
      points: 6785,
      avatar: "👨‍💼",
      location: "Kaduna, Nigeria",
      streak: 29,
      badges: ["🏅", "🌍", "💎"],
      weeklyGrowth: 6.7,
    },
    {
      id: 5,
      name: "Blessing Okoro",
      points: 6234,
      avatar: "👩‍🔬",
      location: "Port Harcourt, Nigeria",
      streak: 41,
      badges: ["🎖️", "🌳", "✨"],
      weeklyGrowth: 9.8,
    },
  ];

  const schoolsData = [
    {
      id: 1,
      name: "University of Lagos",
      points: 45890,
      avatar: "🏫",
      location: "Lagos State",
      members: 1250,
      badges: ["🏆", "🎓", "🌟"],
      weeklyGrowth: 18.5,
    },
    {
      id: 2,
      name: "Ahmadu Bello University",
      points: 42340,
      avatar: "🎓",
      location: "Kaduna State",
      members: 1180,
      badges: ["🥇", "📚", "💚"],
      weeklyGrowth: 14.2,
    },
    {
      id: 3,
      name: "University of Ibadan",
      points: 38750,
      avatar: "🏛️",
      location: "Oyo State",
      members: 980,
      badges: ["🥈", "📖", "🌱"],
      weeklyGrowth: 11.8,
    },
    {
      id: 4,
      name: "Covenant University",
      points: 35420,
      avatar: "⛪",
      location: "Ogun State",
      members: 890,
      badges: ["🥉", "💡", "🌿"],
      weeklyGrowth: 16.3,
    },
    {
      id: 5,
      name: "Federal University of Technology Akure",
      points: 32180,
      avatar: "🔧",
      location: "Ondo State",
      members: 750,
      badges: ["🎯", "⚙️", "🌍"],
      weeklyGrowth: 13.7,
    },
  ];

  const groupsData = [
    {
      id: 1,
      name: "Green Warriors Lagos",
      points: 28950,
      avatar: "🌱",
      location: "Lagos State",
      members: 245,
      badges: ["🏆", "♻️", "🌟"],
      weeklyGrowth: 22.4,
    },
    {
      id: 2,
      name: "Eco Champions Abuja",
      points: 26780,
      avatar: "🌿",
      location: "FCT Abuja",
      members: 198,
      badges: ["🥇", "🌍", "💚"],
      weeklyGrowth: 19.6,
    },
    {
      id: 3,
      name: "Recycling Heroes PH",
      points: 24560,
      avatar: "♻️",
      location: "Rivers State",
      members: 167,
      badges: ["🥈", "🔄", "🌱"],
      weeklyGrowth: 17.8,
    },
    {
      id: 4,
      name: "Climate Action Kano",
      points: 22340,
      avatar: "🌡️",
      location: "Kano State",
      members: 203,
      badges: ["🥉", "🌡️", "🌿"],
      weeklyGrowth: 15.2,
    },
    {
      id: 5,
      name: "Sustainable Living Ibadan",
      points: 20890,
      avatar: "🏠",
      location: "Oyo State",
      members: 134,
      badges: ["🎯", "🏡", "🌍"],
      weeklyGrowth: 12.9,
    },
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case "schools":
        return schoolsData;
      case "groups":
        return groupsData;
      default:
        return individualsData;
    }
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className="w-8 h-8 text-yellow-500" />;
      case 2:
        return <Medal className="w-8 h-8 text-gray-400" />;
      case 3:
        return <Award className="w-8 h-8 text-amber-600" />;
      default:
        return (
          <span className="text-2xl font-bold text-gray-500">#{rank}</span>
        );
    }
  };

  const getRankColors = (rank) => {
    switch (rank) {
      case 1:
        return "from-yellow-400 to-amber-500";
      case 2:
        return "from-gray-300 to-gray-500";
      case 3:
        return "from-amber-500 to-orange-500";
      default:
        return "from-green-400 to-emerald-500";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const podiumVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (rank) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: rank * 0.2,
      },
    }),
  };
  const goBack = () => {
    navigate("/dashboard");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Development Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white rounded-2xl p-4 mb-6 shadow-lg border border-white/20"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ⚙️
              </motion.div>
            </div>
            <div>
              <p className="font-semibold text-lg">🚧 Page Under Development</p>
              <p className="text-sm opacity-90">
                This page is still in development, so features on this screen
                may not be working at the moment. Stay tuned for updates!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={goBack}
              className="p-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Leaderboard
              </h1>
              <p className="text-gray-600">
                See how you rank among eco-warriors
              </p>
            </div>
          </div>

          <motion.div
            className="bg-white rounded-2xl p-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <div>
                <p className="text-sm text-gray-600">Your Rank</p>
                <p className="text-2xl font-bold text-green-600">
                  #{currentUser.rank}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex overflow-x-auto space-x-4 mb-6"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Time Filters */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-4 mb-8"
        >
          <Filter className="w-5 h-5 text-gray-600" />
          <div className="flex space-x-2">
            {timeFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setTimeFilter(filter.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  timeFilter === filter.id
                    ? "bg-green-100 text-green-700"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                } shadow-sm`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Top 3 Podium */}
        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="flex justify-center items-end space-x-4 mb-8">
            {getCurrentData()
              .slice(0, 3)
              .map((item, index) => {
                const rank = index + 1;
                const heights = ["h-32", "h-40", "h-28"];
                return (
                  <motion.div
                    key={item.id}
                    custom={index}
                    variants={podiumVariants}
                    className={`bg-gradient-to-t ${getRankColors(rank)} rounded-t-3xl p-4 ${heights[index]} flex flex-col justify-end items-center text-white min-w-[120px] shadow-2xl`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-center mb-2">
                      <div className="text-3xl mb-1">{item.avatar}</div>
                      <div className="mb-2">{getRankIcon(rank)}</div>
                      <p className="font-bold text-sm">
                        {item.name.split(" ")[0]}
                      </p>
                      <p className="text-xs opacity-90">
                        {item.points.toLocaleString()}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </motion.div>

        {/* Leaderboard List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
        >
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <span>Rankings</span>
            </h3>
          </div>

          <div className="divide-y divide-gray-100">
            {getCurrentData().map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`p-6 hover:bg-gray-50 transition-all ${
                  item.id === currentUser.id
                    ? "bg-green-50 border-l-4 border-green-500"
                    : ""
                }`}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12">
                      {index < 3 ? (
                        getRankIcon(index + 1)
                      ) : (
                        <span className="text-xl font-bold text-gray-500">
                          #{index + 1}
                        </span>
                      )}
                    </div>

                    <div className="text-4xl">{item.avatar}</div>

                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">
                        {item.name}
                        {item.id === currentUser.id && (
                          <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                            You
                          </span>
                        )}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                        {activeTab !== "individuals" && (
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{item.members} members</span>
                          </div>
                        )}
                        {activeTab === "individuals" && (
                          <div className="flex items-center space-x-1">
                            <Target className="w-4 h-4" />
                            <span>{item.streak} day streak</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {item.points.toLocaleString()}
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {item.badges.map((badge, i) => (
                          <span key={i} className="text-lg">
                            {badge}
                          </span>
                        ))}
                      </div>
                      <div className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        +{item.weeklyGrowth}%
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Your Position (if not in top rankings) */}
        {currentUser.rank > 5 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-3xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold">#{currentUser.rank}</div>
                <div className="text-3xl">{currentUser.avatar}</div>
                <div>
                  <h4 className="font-bold text-lg">{currentUser.name}</h4>
                  <p className="opacity-90">Your current position</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">
                  {currentUser.points.toLocaleString()}
                </div>
                <p className="opacity-90">points</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg">
            <Recycle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">15,420</div>
            <div className="text-sm text-gray-600">Items Recycled</div>
          </div>
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg">
            <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">2,890</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg">
            <Trophy className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">₦450K</div>
            <div className="text-sm text-gray-600">Rewards Distributed</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Leaderboard;
