"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiEdit2,
  FiSettings,
  FiAward,
  FiCalendar,
  FiMapPin,
  FiLink,
  FiThumbsUp,
  FiMessageSquare,
  FiShare2,
} from "react-icons/fi";
import Link from "next/link";
import { Header } from "@/components/Header";

export default function ProfilePage() {
  return (
    <div className="space-y-8 px-4">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
      >
        <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-20">
            <div className="h-32 w-32 rounded-full border-4 border-white bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white text-3xl font-bold">
              TP
            </div>
            <div className="flex-1 pt-3">
              <h1 className="text-2xl font-bold text-gray-800">Tejas Panja</h1>
              <p className="text-gray-600">G O A T | Developer | A person </p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex items-center text-sm font-medium">
                <FiEdit2 className="mr-2" /> Edit Profile
              </button>
              <button className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg">
                <FiSettings />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-6 border-t border-gray-100 pt-6">
            <div className="flex items-center text-gray-600">
              <FiMapPin className="mr-2 text-gray-400" /> Washington, USA
            </div>
            <div className="flex items-center text-gray-600">
              <FiCalendar className="mr-2 text-gray-400" /> Joined August 2026
            </div>
            <div className="flex items-center text-gray-600">
              <FiLink className="mr-2 text-gray-400" />{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                tejaspanja.dev
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-800">69</div>
              <div className="text-xs text-gray-500">Day Streak</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-800">128</div>
              <div className="text-xs text-gray-500">Connections</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-800">85%</div>
              <div className="text-xs text-gray-500">Wellbeing Score</div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Achievements
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              {
                name: "Early Bird",
                description: "Consistent morning activity for 14 days",
                icon: FiAward,
                color: "from-amber-400 to-yellow-500",
              },
              {
                name: "Social Detox Pro",
                description: "Reduced social media usage by 50%",
                icon: FiAward,
                color: "from-indigo-400 to-blue-500",
              },
              {
                name: "Connection Guru",
                description: "Maintained 5 meaningful conversations",
                icon: FiAward,
                color: "from-green-400 to-emerald-500",
              },
              {
                name: "Fitness Master",
                description: "Logged 20 workouts this month",
                icon: FiAward,
                color: "from-rose-400 to-red-500",
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-50 p-3 rounded-lg gap-3 min-w-[250px]"
              >
                <div
                  className={`h-12 w-12 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white`}
                >
                  <achievement.icon size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">
                    {achievement.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Recent Activity
          </h2>
        </div>

        <div className="space-y-6">
          {[
            {
              activity: "Completed a 20-minute mindfulness session",
              time: "2 hours ago",
              content:
                "Just finished my daily meditation. Feeling centered and ready for the day! #mindfulness #wellness",
              likes: 24,
              comments: 5,
            },
            {
              activity: "Reached 60-day digital wellbeing streak",
              time: "2 days ago",
              content:
                "Two months of balanced digital habits! I've been limiting my social media to 30 minutes per day and focusing on real connections instead.",
              likes: 56,
              comments: 12,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
            >
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mr-3">
                    TP
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">
                      {item.activity}
                    </h3>
                    <p className="text-xs text-gray-500">{item.time}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{item.content}</p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <button className="flex items-center text-gray-600 hover:text-indigo-600">
                    <FiThumbsUp className="mr-1.5" /> {item.likes}
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-indigo-600">
                    <FiMessageSquare className="mr-1.5" /> {item.comments}
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-indigo-600">
                    <FiShare2 className="mr-1.5" /> Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
