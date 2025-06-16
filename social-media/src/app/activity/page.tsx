"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiCalendar, 
  FiClock, 
  FiZap, 
  FiAward, 
  FiSmartphone, 
  FiActivity,
  FiBarChart2,
  FiFilter,
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

export default function ActivityPage() {
  const [dateRange, setDateRange] = useState("week");
  const [currentWeek, setCurrentWeek] = useState(0);

  const screenTimeData = [
    { day: "Mon", hours: 3.2 },
    { day: "Tue", hours: 2.8 },
    { day: "Wed", hours: 3.5 },
    { day: "Thu", hours: 2.5 },
    { day: "Fri", hours: 4.1 },
    { day: "Sat", hours: 5.2 },
    { day: "Sun", hours: 3.9 },
  ];

  const mindfulMinutesData = [
    { day: "Mon", minutes: 25 },
    { day: "Tue", minutes: 30 },
    { day: "Wed", minutes: 20 },
    { day: "Thu", minutes: 35 },
    { day: "Fri", minutes: 40 },
    { day: "Sat", minutes: 50 },
    { day: "Sun", minutes: 45 },
  ];

  const appUsageData = [
    { name: "Social", value: 40 },
    { name: "Productivity", value: 25 },
    { name: "Entertainment", value: 20 },
    { name: "Other", value: 15 },
  ];

  const COLORS = ["#6366f1", "#8b5cf6", "#ec4899", "#94a3b8"];

  const activityStreakData = [
    { day: "Mon", completed: 3 },
    { day: "Tue", completed: 5 },
    { day: "Wed", completed: 2 },
    { day: "Thu", completed: 4 },
    { day: "Fri", completed: 3 },
    { day: "Sat", completed: 1 },
    { day: "Sun", completed: 2 },
  ];

  return (
    <div className="space-y-8 px-4 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Activity & Stats
          </h1>
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button 
              onClick={() => setDateRange("week")}
              className={`px-3 py-1.5 rounded-md text-sm ${dateRange === "week" 
                ? "bg-white text-indigo-600 shadow-sm" 
                : "text-gray-600"}`}
            >
              Week
            </button>
            <button 
              onClick={() => setDateRange("month")}
              className={`px-3 py-1.5 rounded-md text-sm ${dateRange === "month" 
                ? "bg-white text-indigo-600 shadow-sm" 
                : "text-gray-600"}`}
            >
              Month
            </button>
            <button 
              onClick={() => setDateRange("year")}
              className={`px-3 py-1.5 rounded-md text-sm ${dateRange === "year" 
                ? "bg-white text-indigo-600 shadow-sm" 
                : "text-gray-600"}`}
            >
              Year
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <FiCalendar className="text-indigo-600" />
            <span className="font-medium text-gray-700">
              {dateRange === "week" && "May 1 - May 7, 2023"}
              {dateRange === "month" && "May 2023"}
              {dateRange === "year" && "2023"}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setCurrentWeek(currentWeek - 1)}
              className="p-1.5 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <FiChevronLeft className="text-gray-700" />
            </button>
            <button 
              onClick={() => setCurrentWeek(currentWeek + 1)}
              className="p-1.5 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <FiChevronRight className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm text-gray-700">Daily Average</h3>
              <FiClock className="text-indigo-500" />
            </div>
            <p className="text-2xl font-semibold text-gray-900">3.6 hrs</p>
            <p className="text-xs text-green-600 mt-1">-8% from last week</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm text-gray-700">Mindfulness</h3>
              <FiAward className="text-purple-500" />
            </div>
            <p className="text-2xl font-semibold text-gray-900">35 mins/day</p>
            <p className="text-xs text-green-600 mt-1">+12% from last week</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm text-gray-700">App Opens</h3>
              <FiSmartphone className="text-amber-500" />
            </div>
            <p className="text-2xl font-semibold text-gray-900">24 times/day</p>
            <p className="text-xs text-red-600 mt-1">+5% from last week</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm text-gray-700">Activity Completed</h3>
              <FiActivity className="text-emerald-500" />
            </div>
            <p className="text-2xl font-semibold text-gray-900">86%</p>
            <p className="text-xs text-green-600 mt-1">+4% from last week</p>
          </div>
        </div>

        {/* Screen Time Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-lg font-medium text-gray-800 mb-4">Screen Time</h2>
          <div className="bg-white rounded-xl border border-gray-100 p-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={screenTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="day" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '8px', 
                    border: 'none', 
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)' 
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="hours" 
                  stroke="#6366f1" 
                  strokeWidth={2.5} 
                  dot={{ r: 4, fill: "#6366f1" }} 
                  activeDot={{ r: 6, fill: "#6366f1" }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Mindful Minutes Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-lg font-medium text-gray-800 mb-4">Mindful Minutes</h2>
          <div className="bg-white rounded-xl border border-gray-100 p-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mindfulMinutesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="day" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '8px', 
                    border: 'none', 
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)' 
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="minutes" 
                  stroke="#8b5cf6" 
                  fill="url(#colorMinutes)" 
                  strokeWidth={2} 
                />
                <defs>
                  <linearGradient id="colorMinutes" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* App Usage and Activity Stats Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-lg font-medium text-gray-800 mb-4">App Usage Breakdown</h2>
            <div className="bg-white rounded-xl border border-gray-100 p-4 h-72 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={appUsageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {appUsageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value} mins`, 'Time']}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)' 
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-lg font-medium text-gray-800 mb-4">Daily Activity Completions</h2>
            <div className="bg-white rounded-xl border border-gray-100 p-4 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityStreakData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="day" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)' 
                    }} 
                  />
                  <Bar dataKey="completed" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}