import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Camera,
  Gift,
  Trophy,
  Users,
  Smartphone,
  Recycle,
  Star,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentReward, setCurrentReward] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const rewards = [
    "Airtime",
    "Data Bundles",
    "School Supplies",
    "Cash Rewards",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReward((prev) => (prev + 1) % rewards.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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

  const floatingAnimation: any = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-green-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Recycle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                EcoPoints
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {["Features", "How it Works", "Rewards", "Community"].map(
                (item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                    whileHover={{ y: -2 }}
                  >
                    {item}
                  </motion.a>
                )
              )}
              <motion.button
                onClick={handleNavigate}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-lg z-40 md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {["Features", "How it Works", "Rewards", "Community"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="block text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
              <button
                onClick={handleNavigate}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-medium"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Now Live in Nigeria! 🇳🇬
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Fight Plastic,{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Earn Rewards
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 mb-8 max-w-2xl"
              >
                Turn your environmental impact into real rewards. Snap photos of
                collected plastic waste, report illegal dumps, and earn points
                for{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentReward}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-green-600 font-semibold"
                  >
                    {rewards[currentReward]}
                  </motion.span>
                </AnimatePresence>
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={handleNavigate}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Get Started Now
                </motion.button>
                <motion.button
                  className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Watch Demo
                  <ChevronRight className="w-5 h-5 ml-2" />
                </motion.button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start space-x-6 mt-8 text-sm text-gray-500"
              >
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>4.8/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-green-500 mr-1" />
                  <span>10K+ Users</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div animate={floatingAnimation} className="relative z-10">
                <div className="w-80 h-96 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-[3rem] p-6 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] h-full p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                        <span className="font-bold text-gray-800">
                          EcoPoints
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">
                          2,450
                        </div>
                        <div className="text-xs text-gray-500">Points</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 mb-4">
                      <div className="flex items-center space-x-3">
                        <Camera className="w-8 h-8 text-green-600" />
                        <div>
                          <div className="font-semibold text-gray-800">
                            Upload Photo
                          </div>
                          <div className="text-xs text-gray-500">
                            +50 points
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-blue-50 rounded-xl p-3 text-center">
                        <Gift className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                        <div className="text-xs font-medium">Airtime</div>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-3 text-center">
                        <Trophy className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                        <div className="text-xs font-medium">Rank #12</div>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="text-xs text-gray-500 mb-2">
                        Recent Activity
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-xs">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Plastic bottles collected</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>Illegal dump reported</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Recycle className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Gift className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple. Rewarding. Impactful.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of Nigerians making a difference while earning real
              rewards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "Snap & Submit",
                description:
                  "Take photos of collected plastic waste or report illegal dumps with just a few taps",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Trophy,
                title: "Earn Points",
                description:
                  "Every action earns you EcoPoints that add up to real, valuable rewards",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Gift,
                title: "Redeem Rewards",
                description:
                  "Exchange points for airtime, data bundles, school supplies, and more",
                color: "from-green-500 to-emerald-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "50K+", label: "Plastic Items Collected" },
              { number: "₦2M+", label: "Rewards Distributed" },
              { number: "500+", label: "Communities Impacted" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-white"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the movement. Start earning rewards while protecting our
              environment.
            </p>
            <motion.button
              onClick={handleNavigate}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Smartphone className="w-6 h-6 mr-3" />
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <Recycle className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold">EcoPoints</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering Nigerians to fight plastic pollution while earning real
            rewards.
          </p>
          <div className="text-sm text-gray-500">
            © 2025 EcoPoints. Made with 💚 for a cleaner Nigeria.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
