//@ts-nocheck
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Wifi,
  Banknote,
  BookOpen,
  Award,
  ArrowLeft,
  Gift,
  Star,
  Check,
  X,
  Smartphone,
  Globe,
  Wallet,
  GraduationCap,
  Trophy,
  Coins,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const RedeemRewards = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showRedeemDialog, setShowRedeemDialog] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  const [userPoints] = useState(2850);
  const [isRedeeming, setIsRedeeming] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const categories = [
    { id: "all", label: "All Rewards", icon: Gift },
    { id: "airtime", label: "Airtime", icon: Phone },
    { id: "data", label: "Data", icon: Wifi },
    { id: "cash", label: "Cash", icon: Banknote },
    { id: "supplies", label: "School Supplies", icon: BookOpen },
    { id: "badges", label: "Badges", icon: Award },
  ];

  const rewards = [
    // Airtime Bundles
    {
      id: 1,
      category: "airtime",
      title: "₦100 Airtime",
      description: "MTN, Airtel, Glo, 9mobile",
      points: 250,
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      popular: false,
    },
    {
      id: 2,
      category: "airtime",
      title: "₦200 Airtime",
      description: "All networks supported",
      points: 450,
      icon: Phone,
      color: "from-blue-500 to-cyan-500",
      popular: true,
    },
    {
      id: 3,
      category: "airtime",
      title: "₦500 Airtime",
      description: "Premium airtime bundle",
      points: 1000,
      icon: Phone,
      color: "from-blue-500 to-cyan-500",
      popular: false,
    },

    // Data Bundles
    {
      id: 4,
      category: "data",
      title: "1GB Data",
      description: "30-day validity",
      points: 400,
      icon: Wifi,
      color: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      id: 5,
      category: "data",
      title: "2GB Data",
      description: "30-day validity",
      points: 750,
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      popular: false,
    },
    {
      id: 6,
      category: "data",
      title: "5GB Data",
      description: "30-day validity",
      points: 1800,
      icon: Wifi,
      color: "from-purple-500 to-pink-500",
      popular: false,
    },

    // Cash
    {
      id: 7,
      category: "cash",
      title: "₦500 Cash",
      description: "Bank transfer",
      points: 1200,
      icon: Banknote,
      color: "from-green-500 to-emerald-500",
      popular: true,
    },
    {
      id: 8,
      category: "cash",
      title: "₦1000 Cash",
      description: "Bank transfer",
      points: 2200,
      icon: Wallet,
      color: "from-green-500 to-emerald-500",
      popular: false,
    },
    {
      id: 9,
      category: "cash",
      title: "₦2000 Cash",
      description: "Bank transfer",
      points: 4200,
      icon: Banknote,
      color: "from-green-500 to-emerald-500",
      popular: false,
    },

    // School Supplies
    {
      id: 10,
      category: "supplies",
      title: "Exercise Books (5 pieces)",
      description: "Quality notebooks",
      points: 800,
      icon: BookOpen,
      color: "from-orange-500 to-red-500",
      popular: false,
    },
    {
      id: 11,
      category: "supplies",
      title: "School Bag",
      description: "Durable backpack",
      points: 2500,
      icon: GraduationCap,
      color: "from-orange-500 to-red-500",
      popular: true,
    },
    {
      id: 12,
      category: "supplies",
      title: "Stationery Set",
      description: "Pens, pencils, ruler, eraser",
      points: 600,
      icon: BookOpen,
      color: "from-orange-500 to-red-500",
      popular: false,
    },

    // Badges
    {
      id: 13,
      category: "badges",
      title: "Eco Warrior Badge",
      description: "Show your commitment",
      points: 100,
      icon: Award,
      color: "from-yellow-500 to-amber-500",
      popular: false,
    },
    {
      id: 14,
      category: "badges",
      title: "Green Champion",
      description: "Environmental hero status",
      points: 500,
      icon: Trophy,
      color: "from-yellow-500 to-amber-500",
      popular: true,
    },
    {
      id: 15,
      category: "badges",
      title: "Recycling Master",
      description: "Ultimate recycler badge",
      points: 1500,
      icon: Award,
      color: "from-yellow-500 to-amber-500",
      popular: false,
    },
  ];

  const filteredRewards =
    selectedCategory === "all"
      ? rewards
      : rewards.filter((reward) => reward.category === selectedCategory);

  const handleRedeem = (reward) => {
    setSelectedReward(reward);
    setShowRedeemDialog(true);
  };

  const confirmRedeem = async () => {
    setIsRedeeming(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsRedeeming(false);
    setShowRedeemDialog(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
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
  const goBack = () => {
    navigate("/dashboard");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={goBack}
              className="cursor-pointer p-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Redeem Rewards
              </h1>
              <p className="text-gray-600">
                Turn your eco-points into amazing rewards
              </p>
            </div>
          </div>

          <motion.div
            className="bg-white rounded-2xl p-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2">
              <Coins className="w-6 h-6 text-yellow-500" />
              <div>
                <p className="text-sm text-gray-600">Your Points</p>
                <p className="text-2xl font-bold text-green-600">
                  {userPoints.toLocaleString()}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex overflow-x-auto space-x-4 mb-8 pb-2"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium whitespace-nowrap transition-all ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Rewards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredRewards.map((reward) => (
            <motion.div
              key={reward.id}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/20 relative overflow-hidden"
              whileHover={{
                y: -5,
                shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              {reward.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}

              <div
                className={`w-16 h-16 bg-gradient-to-r ${reward.color} rounded-2xl flex items-center justify-center mb-4`}
              >
                <reward.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {reward.title}
              </h3>
              <p className="text-gray-600 mb-4">{reward.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-lg font-bold text-green-600">
                    {reward.points.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">points</span>
                </div>

                <motion.button
                  onClick={() => handleRedeem(reward)}
                  disabled={userPoints < reward.points}
                  className={`px-6 py-2 rounded-xl font-semibold transition-all ${
                    userPoints >= reward.points
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                  whileHover={
                    userPoints >= reward.points ? { scale: 1.05 } : {}
                  }
                  whileTap={userPoints >= reward.points ? { scale: 0.95 } : {}}
                >
                  {userPoints >= reward.points ? "Redeem" : "Need More"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Redeem Confirmation Dialog */}
        <AnimatePresence>
          {showRedeemDialog && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
              >
                <div className="text-center mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${selectedReward?.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    {selectedReward && (
                      <selectedReward.icon className="w-10 h-10 text-white" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Confirm Redemption
                  </h3>
                  <p className="text-gray-600">
                    Are you sure you want to redeem this reward?
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Reward:</span>
                    <span>{selectedReward?.title}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Cost:</span>
                    <span className="text-green-600 font-bold">
                      {selectedReward?.points.toLocaleString()} points
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Remaining:</span>
                    <span className="text-blue-600 font-bold">
                      {(
                        userPoints - (selectedReward?.points || 0)
                      ).toLocaleString()}{" "}
                      points
                    </span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setShowRedeemDialog(false)}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-2xl font-semibold hover:bg-gray-300 transition-all"
                    disabled={isRedeeming}
                  >
                    Cancel
                  </button>
                  <motion.button
                    onClick={confirmRedeem}
                    disabled={isRedeeming}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isRedeeming ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      "Confirm"
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl shadow-2xl z-50"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Reward Redeemed!</p>
                  <p className="text-sm opacity-90">
                    Check your account for delivery details
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RedeemRewards;
