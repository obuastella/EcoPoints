import { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  Camera,
  MapPin,
  Trash2,
  ArrowLeft,
  FileImage,
  CheckCircle,
  AlertCircle,
  X,
  Leaf,
  Recycle,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const UploadCleanup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<any>({
    mainImage: null,
    beforeImage: null,
    afterImage: null,
    state: "",
    city: "",
    street: "",
    wasteType: "",
    description: "",
  });

  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const wasteTypes = [
    "Plastic Bottles",
    "Plastic Bags",
    "Food Containers",
    "Electronics",
    "Cans & Metal",
    "Glass Bottles",
    "Paper Waste",
    "Mixed Waste",
    "Other",
  ];

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

  const handleInputChange = (field: any, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (field: any, file: any) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        handleInputChange(field, {
          file: file,
          preview: e.target.result,
          name: file.name,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: any, field: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(field, e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: any) => {
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
        mainImage: null,
        beforeImage: null,
        afterImage: null,
        state: "",
        city: "",
        street: "",
        wasteType: "",
        description: "",
      });
    }, 2000);
  };

  const containerVariants: any = {
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
    { icon: Star, color: "from-teal-400 to-cyan-400", delay: 2 },
  ];

  const ImageUploadBox = ({ field, title, isOptional = false }: any) => (
    <motion.div variants={itemVariants} className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {title}{" "}
        {isOptional && <span className="text-gray-400">(Optional)</span>}
      </label>
      <div
        className={`relative border-2 border-dashed rounded-2xl p-6 transition-all ${
          dragActive
            ? "border-green-500 bg-green-50"
            : "border-gray-300 hover:border-green-400"
        } ${formData[field] ? "bg-green-50 border-green-300" : "bg-gray-50"}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={(e) => handleDrop(e, field)}
      >
        {formData[field] ? (
          <div className="space-y-3">
            <div className="relative">
              <img
                src={formData[field].preview}
                alt="Preview"
                className="w-full h-32 object-cover rounded-xl"
              />
              <button
                type="button"
                onClick={() => handleInputChange(field, null)}
                className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-green-600 font-medium">
              {formData[field].name}
            </p>
          </div>
        ) : (
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
            <div className="space-y-2">
              <p className="text-gray-600">Drag and drop your image here, or</p>
              <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
                <Camera className="w-4 h-4 mr-2" />
                Choose File
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e: any) =>
                    handleFileUpload(field, e.target.files[0])
                  }
                />
              </label>
            </div>
            <p className="text-xs text-gray-400 mt-2">PNG, JPG up to 10MB</p>
          </div>
        )}
      </div>
    </motion.div>
  );

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 max-w-md w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Cleanup Submitted! 🎉
          </h2>
          <p className="text-gray-600 mb-4">
            Thank you for making Nigeria cleaner! Your submission is being
            reviewed.
          </p>
          <div className="bg-green-50 rounded-2xl p-4 mb-6">
            <p className="text-green-700 font-medium">+150 EcoPoints Earned!</p>
            <p className="text-sm text-green-600">Keep up the great work!</p>
          </div>
        </motion.div>
      </div>
    );
  }

  const goBack = () => {
    navigate("/dashboard");
  };
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
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-8"
          >
            <button
              onClick={goBack}
              className="mr-4 p-2 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Upload Cleanup
              </h1>
              <p className="text-gray-600">
                Share your environmental impact and earn EcoPoints
              </p>
            </div>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Main Image Upload */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/20"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Camera className="w-6 h-6 mr-2 text-green-600" />
                Cleanup Evidence
              </h2>
              <ImageUploadBox field="mainImage" title="Main Cleanup Photo *" />
            </motion.div>

            {/* Before/After Images */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/20"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <FileImage className="w-6 h-6 mr-2 text-green-600" />
                Before & After (Optional)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ImageUploadBox
                  field="beforeImage"
                  title="Before Photo"
                  isOptional
                />
                <ImageUploadBox
                  field="afterImage"
                  title="After Photo"
                  isOptional
                />
              </div>
            </motion.div>

            {/* Location Information */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/20"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-green-600" />
                Location Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
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
                    City *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="Enter city"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street
                  </label>
                  <input
                    type="text"
                    value={formData.street}
                    onChange={(e) =>
                      handleInputChange("street", e.target.value)
                    }
                    placeholder="Enter street (optional)"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </motion.div>

            {/* Waste Type & Description */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/20"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Trash2 className="w-6 h-6 mr-2 text-green-600" />
                Waste Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Waste *
                  </label>
                  <select
                    value={formData.wasteType}
                    onChange={(e) =>
                      handleInputChange("wasteType", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select waste type</option>
                    {wasteTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    placeholder="Tell us more about your cleanup activity... (optional)"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <motion.button
                type="submit"
                disabled={
                  isSubmitting ||
                  !formData.mainImage ||
                  !formData.state ||
                  !formData.city ||
                  !formData.wasteType
                }
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
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
                    <span>Submitting Cleanup...</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-6 h-6" />
                    <span>Submit Cleanup</span>
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Info Card */}
            <motion.div
              variants={itemVariants}
              className="bg-blue-50 border border-blue-200 rounded-2xl p-4"
            >
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="text-sm text-blue-700">
                  <p className="font-medium mb-1">Earn up to 200 EcoPoints!</p>
                  <p>
                    Your cleanup submission will be reviewed within 24 hours.
                    Points are awarded based on impact and verification.
                  </p>
                </div>
              </div>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default UploadCleanup;
