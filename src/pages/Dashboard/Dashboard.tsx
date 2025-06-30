import { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  AlertTriangle,
  Gift,
  Trophy,
  Leaf,
  Recycle,
  Star,
  TrendingUp,
  ChevronRight,
  Users,
  Target,
  Calendar,
  Medal,
  Zap,
  Bell,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user] = useState({
    name: "Stella Olatunji",
    points: 2850,
    rank: 15,
    level: "Eco Warrior",
  });

  const [recentActivities] = useState([
    {
      id: 1,
      type: "cleanup",
      description: "Beach cleanup uploaded",
      points: 150,
      time: "2 hours ago",
      icon: Upload,
    },
    {
      id: 2,
      type: "report",
      description: "Illegal dump reported",
      points: 50,
      time: "1 day ago",
      icon: AlertTriangle,
    },
    {
      id: 3,
      type: "challenge",
      description: "Weekly challenge completed",
      points: 200,
      time: "3 days ago",
      icon: Target,
    },
    {
      id: 4,
      type: "reward",
      description: "Gift card redeemed",
      points: -500,
      time: "1 week ago",
      icon: Gift,
    },
  ]);

  const [leaderboard] = useState([
    { rank: 1, name: "Folake Adeyemi", points: 4250, avatar: "👩🏾" },
    { rank: 2, name: "Chidi Okafor", points: 3890, avatar: "👨🏾" },
    { rank: 3, name: "Amina Hassan", points: 3650, avatar: "👩🏾‍🦱" },
    { rank: 4, name: "You", points: 2850, avatar: "👨🏾", isUser: true },
  ]);

  const [currentChallenges] = useState([
    {
      id: 1,
      title: "Plant 5 Trees",
      progress: 60,
      reward: 300,
      deadline: "5 days left",
      icon: Leaf,
    },
    {
      id: 2,
      title: "Clean 3 Streets",
      progress: 33,
      reward: 200,
      deadline: "12 days left",
      icon: Recycle,
    },
    {
      id: 3,
      title: "Report 10 Issues",
      progress: 80,
      reward: 150,
      deadline: "3 days left",
      icon: AlertTriangle,
    },
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
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

  const quickLinks = [
    {
      title: "Upload Cleanup",
      path: "/upload",
      icon: Upload,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      title: "Report Illegal Dump",
      path: "/upload",
      icon: AlertTriangle,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      title: "View Rewards",
      path: "/upload",
      icon: Gift,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
  ];

  const floatingElements = [
    { icon: Recycle, color: "from-green-400 to-emerald-400", delay: 0 },
    { icon: Leaf, color: "from-emerald-400 to-teal-400", delay: 1 },
    { icon: Star, color: "from-teal-400 to-cyan-400", delay: 2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute w-16 h-16 bg-gradient-to-r ${element.color} rounded-full opacity-5 blur-xl`}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
          style={{
            left: `${10 + index * 35}%`,
            top: `${5 + index * 25}%`,
          }}
        />
      ))}

      <div className="relative z-10 p-4 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto space-y-6"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Welcome back, {user.name.split(" ")[0]}! 👋
              </h1>
              <p className="text-gray-600">Ready to make a difference today?</p>
            </div>
            <motion.div className="relative" whileHover={{ scale: 1.05 }}>
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </motion.div>
          </motion.div>

          {/* Points Balance Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-6 text-white shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">
                  Your EcoPoints Balance
                </p>
                <motion.h2
                  className="text-4xl font-bold mt-1"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  {user.points.toLocaleString()}
                </motion.h2>
                <div className="flex items-center mt-2 space-x-4">
                  <div className="flex items-center">
                    <Trophy className="w-4 h-4 mr-1" />
                    <span className="text-sm">Rank #{user.rank}</span>
                  </div>
                  <div className="flex items-center">
                    <Medal className="w-4 h-4 mr-1" />
                    <span className="text-sm">{user.level}</span>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="bg-white/20 p-4 rounded-full"
              >
                <Zap className="w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                className={`${link.bgColor} rounded-2xl p-6 cursor-pointer border border-white/50 backdrop-blur-sm`}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={link.path}
                  className="flex items-center justify-between"
                >
                  <div>
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-xl flex items-center justify-center mb-3`}
                    >
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800">
                      {link.title}
                    </h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activities */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/20"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Recent Activities
                </h3>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <motion.div
                    key={activity.id}
                    className="flex items-center space-x-4 p-3 rounded-xl bg-gray-50"
                    whileHover={{ x: 5 }}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.type === "cleanup"
                          ? "bg-green-100"
                          : activity.type === "report"
                            ? "bg-orange-100"
                            : activity.type === "challenge"
                              ? "bg-blue-100"
                              : "bg-purple-100"
                      }`}
                    >
                      <activity.icon
                        className={`w-5 h-5 ${
                          activity.type === "cleanup"
                            ? "text-green-600"
                            : activity.type === "report"
                              ? "text-orange-600"
                              : activity.type === "challenge"
                                ? "text-blue-600"
                                : "text-purple-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">
                        {activity.description}
                      </p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                    <div
                      className={`font-bold ${activity.points > 0 ? "text-green-600" : "text-red-600"}`}
                    >
                      {activity.points > 0 ? "+" : ""}
                      {activity.points}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Leaderboard Preview */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/20"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Leaderboard</h3>
                <Users className="w-5 h-5 text-green-500" />
              </div>
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <motion.div
                    key={user.rank}
                    className={`flex items-center space-x-4 p-3 rounded-xl ${
                      user.isUser
                        ? "bg-green-50 border border-green-200"
                        : "bg-gray-50"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          user.rank === 1
                            ? "bg-yellow-100 text-yellow-600"
                            : user.rank === 2
                              ? "bg-gray-100 text-gray-600"
                              : user.rank === 3
                                ? "bg-orange-100 text-orange-600"
                                : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {user.rank}
                      </div>
                      <span className="text-2xl">{user.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-medium ${user.isUser ? "text-green-800" : "text-gray-800"}`}
                      >
                        {user.name}
                      </p>
                    </div>
                    <div className="font-bold text-green-600">
                      {user.points.toLocaleString()}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Current Challenges */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/20"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">
                Current Challenges
              </h3>
              <Target className="w-5 h-5 text-green-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentChallenges.map((challenge) => (
                <motion.div
                  key={challenge.id}
                  className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl border border-gray-200"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <challenge.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {challenge.deadline}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {challenge.title}
                  </h4>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{challenge.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${challenge.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Reward</span>
                    <span className="font-bold text-green-600">
                      +{challenge.reward}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Footer */}
          <motion.div
            variants={itemVariants}
            className="text-center text-sm text-gray-600 bg-white/50 backdrop-blur-sm rounded-2xl p-4"
          >
            <p>You've contributed to 15 cleanup activities this month! 🌱</p>
            <p className="mt-1">
              Together, our community has prevented 2.5 tons of waste from
              polluting Nigeria's environment.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
