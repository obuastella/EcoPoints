import { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Recycle,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

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

  const floatingElements = [
    { icon: Recycle, color: "from-green-400 to-emerald-400", delay: 0 },
    { icon: Leaf, color: "from-emerald-400 to-teal-400", delay: 1 },
    { icon: Recycle, color: "from-teal-400 to-cyan-400", delay: 2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute w-20 h-20 bg-gradient-to-r ${element.color} rounded-full opacity-10 blur-xl`}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
          style={{
            left: `${20 + index * 30}%`,
            top: `${10 + index * 20}%`,
          }}
        />
      ))}

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4 shadow-lg"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <Recycle className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
            EcoPoints
          </h1>
          <p className="text-gray-600">Welcome back, eco-warrior!</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
        >
          <div className="space-y-6">
            {/* Email/Phone Input */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="email"
                placeholder="Email or Phone Number"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                required
              />
            </motion.div>

            {/* Password Input */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-end">
              <button
                type="button"
                className="text-green-600 hover:text-green-700 font-medium text-sm"
              >
                Forgot Password?
              </button>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                <>
                  <button className="cursor-pointer">Sign in</button>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
            <div className="w-full flex justify-end items-center">
              <Link
                to="/login"
                className="w-full text-end mt-2 text-xs text-gray-500 me-auto"
              >
                <span>Don't have an account ? </span>
                <span className="hover:underline">Sign Up</span>
              </Link>
            </div>
          </div>

          {/* Terms and Privacy */}

          <motion.p
            variants={itemVariants}
            className=" text-xs text-gray-500 text-center mt-6"
          >
            By creating an account, you agree to our{" "}
            <button className="text-green-600 hover:text-green-700 font-medium">
              Terms of Service
            </button>{" "}
            and{" "}
            <button className="text-green-600 hover:text-green-700 font-medium">
              Privacy Policy
            </button>
          </motion.p>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-8 text-sm text-gray-600"
        >
          <p>Join 10,000+ Nigerians earning rewards for environmental action</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
