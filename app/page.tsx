"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  MessageCircle,
  FileText,
  Clock,
  MapPin,
  Home,
  Zap,
  CheckCircle,
  Heart,
  Activity,
  Brain,
  Pill,
  Hospital,
  User,
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Smartphone
} from "lucide-react";

export default function SwasthyaSathiLanding() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-950 dark:via-emerald-900 dark:to-slate-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="space-y-8 z-10"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block"
                >
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900 dark:to-teal-900 border border-emerald-200 dark:border-emerald-700 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-500 animate-pulse" />
                    <span className="text-emerald-700 dark:text-emerald-300 text-sm font-semibold">Healthcare Revolution</span>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="text-6xl md:text-7xl font-black leading-tight text-slate-900 dark:text-white"
                >
                  Your Health,
                  <br />
                  <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-inter max-w-lg"
                >
                  SwasthyaSathi is your intelligent health companion. Get instant AI-powered diagnosis, connect with verified doctors, and take control of your wellness journey — all completely free.
                </motion.p>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-8 py-6"
              >
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-emerald-600">24/7</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Always Available</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-teal-600">100%</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Completely Free</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-cyan-600">AI</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Powered Diagnosis</p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.button
                  onClick={() => window.location.href = '/dashboard'}
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 text-lg"
                >
                  Start Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-emerald-400 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all text-lg"
                >
                  Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 10 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hidden md:flex items-center justify-center relative"
            >
              <div className="relative w-full">
                <motion.div
                  animate={{
                    y: [0, -25, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 rounded-3xl p-1 shadow-2xl"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                          <Stethoscope className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white text-sm">Dr. AI</p>
                          <p className="text-xs text-emerald-600 dark:text-emerald-400">Online Now</p>
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                    </div>

                    <div className="space-y-3">
                      <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl p-4">
                        <p className="text-sm text-slate-700 dark:text-slate-300 font-inter">
                          Hello! Tell me about your symptoms today.
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl p-4 max-w-xs">
                          <p className="text-sm font-inter">
                            I've been having a headache for 2 days
                          </p>
                        </div>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl p-4">
                        <p className="text-sm text-slate-700 dark:text-slate-300 font-inter">
                          I'll analyze this and match you with specialists...
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-2 h-2 bg-emerald-500 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-teal-500 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-cyan-500 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-inter">
              Your journey to better health in 5 simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                icon: MessageCircle,
                title: "Describe",
                desc: "Share your symptoms",
                step: "01",
                delay: 0,
              },
              {
                icon: Brain,
                title: "Analyze",
                desc: "AI processes your data",
                step: "02",
                delay: 0.1,
              },
              {
                icon: TrendingUp,
                title: "Diagnose",
                desc: "Get smart insights",
                step: "03",
                delay: 0.2,
              },
              {
                icon: Stethoscope,
                title: "Connect",
                desc: "Meet with specialists",
                step: "04",
                delay: 0.3,
              },
              {
                icon: FileText,
                title: "Report",
                desc: "Get your health plan",
                step: "05",
                delay: 0.4,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group relative"
              >
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border-2 border-emerald-100 dark:border-emerald-900 h-full flex flex-col items-center text-center space-y-4 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all shadow-lg hover:shadow-xl">
                  <motion.span className="text-6xl font-black text-emerald-200 dark:text-emerald-800">
                    {item.step}
                  </motion.span>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-inter">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-emerald-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-inter">
              Everything you need for complete health management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Real-Time Monitoring",
                desc: "Track your health metrics 24/7 with instant AI analysis",
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: Brain,
                title: "Smart AI Diagnosis",
                desc: "Advanced machine learning predicts conditions early",
                color: "from-teal-500 to-cyan-500",
              },
              {
                icon: Hospital,
                title: "Hospital Integration",
                desc: "Critical cases auto-sent to nearest medical center",
                color: "from-cyan-500 to-emerald-500",
              },
              {
                icon: Pill,
                title: "Medicine Delivery",
                desc: "Prescribed medicines delivered straight to your home",
                color: "from-emerald-500 to-cyan-500",
              },
              {
                icon: MapPin,
                title: "Store Locator",
                desc: "Find nearest pharmacies and medical shops instantly",
                color: "from-teal-500 to-emerald-500",
              },
              {
                icon: Shield,
                title: "Data Security",
                desc: "Your medical data encrypted with highest standards",
                color: "from-cyan-500 to-teal-500",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -8 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity blur`} />
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 border-2 border-slate-100 dark:border-slate-700 h-full flex flex-col items-start space-y-6 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all shadow-lg hover:shadow-xl">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 font-inter leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                  Why Choose
                  <br />
                  <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    SwasthyaSathi?
                  </span>
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: "Completely FREE - No hidden charges" },
                  { icon: Heart, text: "Trusted by thousands of users" },
                  { icon: Zap, text: "Instant AI-powered diagnosis" },
                  { icon: Clock, text: "24/7 availability for emergencies" },
                  { icon: Smartphone, text: "Works on any device, anywhere" },
                  { icon: Star, text: "Doctor-verified AI recommendations" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-slate-700 dark:text-slate-300 font-inter font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div

                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-1 shadow-2xl"
              >
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-emerald-600">HEALTH SCORE</p>
                      <p className="text-3xl font-black text-emerald-600">92</p>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full"
                      />
                    </div>
                  </div>

                  <div className="border-t border-slate-200 dark:border-slate-700 pt-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 dark:text-slate-400 font-inter">Heart Rate</span>
                      <span className="text-2xl font-bold text-emerald-600">72 BPM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 dark:text-slate-400 font-inter">Blood Pressure</span>
                      <span className="text-2xl font-bold text-emerald-600">120/80</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 dark:text-slate-400 font-inter">Oxygen Level</span>
                      <span className="text-2xl font-bold text-emerald-600">98%</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                  >
                    View Full Report
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-12 md:p-16 text-white shadow-2xl"
          >
            <h2 className="text-5xl md:text-6xl font-black">
              Your Health Journey Starts Today
            </h2>
            <p className="text-lg opacity-95 max-w-2xl mx-auto font-inter">
              Join thousands of people taking control of their health. Get instant AI diagnosis, expert recommendations, and 24/7 support — completely free.
            </p>
            <motion.button
              onClick={() => window.location.href = '/dashboard'}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-white text-emerald-600 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all inline-block text-lg"
            >
              Start Free Consultation Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src="/logo1.png"
                  alt="Website Logo"
                  className="h-auto w-60 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-slate-600 dark:text-slate-400 font-inter">
            <p>© 2025 SwasthyaSathi. Revolutionizing healthcare with AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => (window.location.href = "/")}
          className="flex items-center gap-3 cursor-pointer bg-transparent border-none p-0 focus:outline-none"
          aria-label="Go to homepage"
        >
          <img
            src="/logo1.png"
            alt="Website Logo"
            className="h-auto w-60 object-contain"
          />
        </button>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Login
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}