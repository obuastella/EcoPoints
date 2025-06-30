//@ts-nocheck
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  Camera,
  MapPin,
  AlertTriangle,
  ArrowLeft,
  FileImage,
  CheckCircle,
  Info,
  X,
  Leaf,
  Recycle,
  Star,
  Shield,
  Eye,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReportDump = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    photo: null,
    state: "",
    city: "",
    street: "",
    landmark: "",
    description: "",
    severity: "",
    anonymous: false,
  });

  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const nigerianStates = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  const severityLevels = [
    {
      value: "low",
      label: "Low Priority",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      value: "medium",
      label: "Medium Priority",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      value: "high",
      label: "High Priority",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      value: "urgent",
      label: "Urgent Action Needed",
      color: "text-red-700",
      bgColor: "bg-red-100",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        handleInputChange("photo", {
          file: file,
          preview: e.target.result,
          name: file.name,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        photo: null,
        state: "",
        city: "",
        street: "",
        landmark: "",
        description: "",
        severity: "",
        anonymous: false,
      });
    }, 3000);
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

  const floatingElements = [
    { icon: Recycle, color: "from-orange-400 to-red-400", delay: 0 },
    { icon: Leaf, color: "from-red-400 to-pink-400", delay: 1 },
    { icon: Star, color: "from-pink-400 to-purple-400", delay: 2 },
  ];

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 max-w-md w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Report Submitted! 🚨
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for reporting this illegal dumpsite. Our team will
            investigate and take appropriate action.
          </p>
          <div className="bg-orange-50 rounded-2xl p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-5 h-5 text-orange-600 mr-2" />
              <p className="text-orange-700 font-medium">Under Review</p>
            </div>
            <p className="text-sm text-orange-600">
              Points will be awarded after verification (usually within 48
              hours)
            </p>
          </div>
          <div className="flex items-center justify-center text-sm text-gray-500">
            <Shield className="w-4 h-4 mr-1" />
            <span>
              Report ID: #RD
              {Math.random().toString(36).substr(2, 6).toUpperCase()}
            </span>
          </div>
        </motion.div>
      </div>
    );
  }
  const goBack = () => {
    navigate("/dashboard");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
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
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-8"
          >
            <button
              onClick={goBack}
              className="cursor-pointer mr-4 p-2 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Report Illegal Dump
              </h1>
              <p className="text-gray-600">
                Help us keep Nigeria clean by reporting illegal dumpsites
              </p>
            </div>
          </motion.div>

          <div onSubmit={handleSubmit} className="space-y-8">
            {/* Photo Upload */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/20"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Camera className="w-6 h-6 mr-2 text-orange-600" />
                Photo Evidence
              </h2>
              <div
                className={`relative border-2 border-dashed rounded-2xl p-6 transition-all ${
                  dragActive
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-300 hover:border-orange-400"
                } ${formData.photo ? "bg-orange-50 border-orange-300" : "bg-gray-50"}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {formData.photo ? (
                  <div className="space-y-3">
                    <div className="relative">
                      <img
                        src={formData.photo.preview}
                        alt="Dump site evidence"
                        className="w-full h-48 object-cover rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={() => handleInputChange("photo", null)}
                        className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-orange-600 font-medium">
                      {formData.photo.name}
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        Drag and drop your photo here, or
                      </p>
                      <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors">
                        <Camera className="w-4 h-4 mr-2" />
                        Take Photo
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          capture="environment"
                          onChange={(e) => handleFileUpload(e.target.files[0])}
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      Clear photos help us verify faster
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Location Information */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/20"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-orange-600" />
                Dumpsite Location
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) =>
                        handleInputChange("state", e.target.value)
                      }
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select State</option>
                      {nigerianStates.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City/LGA *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) =>
                        handleInputChange("city", e.target.value)
                      }
                      placeholder="Enter city or local government area"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street/Area
                  </label>
                  <input
                    type="text"
                    value={formData.street}
                    onChange={(e) =>
                      handleInputChange("street", e.target.value)
                    }
                    placeholder="Street name or area description"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nearby Landmark
                  </label>
                  <input
                    type="text"
                    value={formData.landmark}
                    onChange={(e) =>
                      handleInputChange("landmark", e.target.value)
                    }
                    placeholder="e.g., Near Shoprite, Behind First Bank, etc."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </motion.div>

            {/* Severity & Description */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/20"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-orange-600" />
                Report Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Severity Level *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {severityLevels.map((level) => (
                      <label
                        key={level.value}
                        className={`relative flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                          formData.severity === level.value
                            ? `${level.bgColor} border-current ${level.color}`
                            : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                        }`}
                      >
                        <input
                          type="radio"
                          value={level.value}
                          checked={formData.severity === level.value}
                          onChange={(e) =>
                            handleInputChange("severity", e.target.value)
                          }
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 rounded-full border-2 mr-3 ${
                            formData.severity === level.value
                              ? `${level.color} border-current`
                              : "border-gray-300"
                          }`}
                        >
                          {formData.severity === level.value && (
                            <div
                              className={`w-2 h-2 rounded-full ${level.color.replace("text-", "bg-")} m-0.5`}
                            />
                          )}
                        </div>
                        <span
                          className={`font-medium ${
                            formData.severity === level.value
                              ? level.color
                              : "text-gray-700"
                          }`}
                        >
                          {level.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    placeholder="Describe the illegal dumpsite: size, types of waste, how long it's been there, any health/environmental concerns..."
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>
              </div>
            </motion.div>

            {/* Privacy & Submit */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Anonymous Option */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/20">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.anonymous}
                    onChange={(e) =>
                      handleInputChange("anonymous", e.target.checked)
                    }
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                      formData.anonymous
                        ? "bg-orange-500 border-orange-500 text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {formData.anonymous && <CheckCircle className="w-3 h-3" />}
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">
                      Submit anonymously
                    </span>
                    <p className="text-sm text-gray-600">
                      Your identity will be kept confidential
                    </p>
                  </div>
                  <Eye className="w-5 h-5 text-gray-400 ml-auto" />
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !formData.photo ||
                    !formData.state ||
                    !formData.city ||
                    !formData.description ||
                    !formData.severity
                  }
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  onClick={handleSubmit}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Submitting Report...</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-6 h-6" />
                      <span>Submit Report</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div className="text-sm text-blue-700">
                    <p className="font-medium mb-1">Verification Process</p>
                    <p>
                      Our team reviews all reports within 48 hours. Points are
                      awarded after successful verification and action taken.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                  <div className="text-sm text-green-700">
                    <p className="font-medium mb-1">Your Safety Matters</p>
                    <p>
                      Never enter dangerous areas. Take photos from a safe
                      distance and avoid confronting illegal dumpers.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReportDump;
