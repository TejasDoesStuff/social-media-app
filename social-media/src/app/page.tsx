"use client";

import { useState, useEffect } from "react";
import {
  FiCamera,
  FiArrowRight,
  FiZap,
  FiAward,
  FiUsers,
  FiThumbsUp,
  FiMessageSquare,
  FiShare2,
  FiPlus,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [activityProgress, setActivityProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activityProgress < 100) {
        setActivityProgress((prev) => Math.min(prev + 10, 100));
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [activityProgress]);

  return (
    <div className="space-y-8 px-4">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold text-gray-800">
              Daily Activity Check
            </h2>
            <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1.5 rounded-full font-medium">
              Required to unlock app
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl aspect-video relative flex items-center justify-center">
              <FiCamera className="w-12 h-12 text-indigo-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-lg flex items-center shadow-md"
                >
                  <FiCamera className="mr-2" /> Start Activity Check
                </motion.button>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Complete 2 minutes of movement
              </h3>
              <p className="text-gray-600 mb-5">
                Stand up and get moving! Our activity detection will verify your
                movement to unlock 30 minutes of app usage.
              </p>

              <div className="space-y-2 mb-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-indigo-600 font-medium">
                    {activityProgress}%
                  </span>
                </div>
                <div className="bg-gray-100 w-full h-3 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${activityProgress}%` }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full"
                  ></motion.div>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-3 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                Camera processing happens locally - your privacy is protected
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 p-6"
      >
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white">
            TP
          </div>
          <div className="bg-gray-50 rounded-full flex-1 px-4 py-2 text-gray-500 cursor-pointer hover:bg-gray-100 transition-colors">
            Say something!
          </div>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-2.5 rounded-full hover:opacity-90 transition-opacity">
            <FiPlus />
          </button>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Connect Meaningfully
          </h2>
          <Link
            href="/communities"
            className="text-sm text-indigo-600 flex items-center hover:underline"
          >
            Find more peers <FiArrowRight className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Zeeshan Shaik",
              title: "The Goat",
              streak: "808 days streak",
              bio: "I'm trying to use social media less and make more music 🔥",
              tags: ["Music", "Kanye West"],
            },
            {
              name: "Alexander Helfman",
              title: "The Box Man",
              streak: "69 days streak",
              bio: "Lookin for friends to go boxing with me! Please speed I need this 🙏",
              tags: ["Boxing", "Exercise", "IShowSpeed"],
            },
            {
              name: "Joseph Wang",
              title: "Tech Balance Advocate",
              streak: "420 days streak",
              bio: "help im addicted 🗿 the reels are getting me. Innermind has been helping tho!",
              tags: ["Productivity", "Work-Life Balance", "Delta Force"],
            },
          ].map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-medium">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{person.name}</h3>
                  <div className="flex items-center text-xs">
                    <span className="text-gray-500">{person.title}</span>
                    <span className="mx-2">•</span>
                    <span className="text-indigo-600 font-medium flex items-center">
                      <FiZap className="mr-1" /> {person.streak}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">{person.bio}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {person.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 py-2 rounded-lg text-sm font-medium transition-colors">
                Connect
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            Community Feed
          </h2>
          <div className="flex space-x-2">
            <button className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
              Recent
            </button>
            <button className="text-gray-500 px-3 py-1 rounded-full text-sm hover:bg-gray-100">
              Popular
            </button>
          </div>
        </div>

        {[
          {
            author: "Zeeshan Shaik",
            time: "2 hours ago",
            content:
              "Yooo i just made a SICK beat and it goes so hard. Also, ever since using Innermind, I've been on social media less.",
            likes: 24,
            comments: 8,
            tags: ["IAmAProducer", "GuysTrustImGonnaBeFamous", "IAMKANYE"],
          },
          {
            author: "Alexander Helfman",
            time: "4 hours ago",
            content:
              "Does anyone know where I can find a good gym with some boxing stuff? I need to lock in and train up",
            likes: 15,
            comments: 12,
            tags: ["Gym", "FitnessInfluencer", "BoxingMan"],
          },
        ].map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-medium">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{post.author}</h3>
                  <p className="text-xs text-gray-500">{post.time}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">•••</button>
            </div>

            <p className="text-gray-800 mb-4">{post.content}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs text-indigo-600 hover:underline cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex space-x-4">
                <button className="text-gray-500 hover:text-indigo-600 flex items-center gap-1 text-sm">
                  <FiThumbsUp /> <span>{post.likes}</span>
                </button>
                <button className="text-gray-500 hover:text-indigo-600 flex items-center gap-1 text-sm">
                  <FiMessageSquare /> <span>{post.comments}</span>
                </button>
              </div>
              <button className="text-gray-500 hover:text-indigo-600">
                <FiShare2 />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 p-6 mb-8"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Your Digital Wellbeing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-5 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-700">Screen Time</h3>
              <FiZap className="text-indigo-500" />
            </div>
            <p className="text-2xl font-semibold text-gray-900">2h 45m</p>
            <p className="text-xs text-green-600 mt-1">-15% from yesterday</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-700">Mindful Minutes</h3>
              <FiAward className="text-purple-500" />
            </div>
            <p className="text-2xl font-semibold text-gray-900">35 mins</p>
            <p className="text-xs text-green-600 mt-1">+10% from yesterday</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-700">Active Community</h3>
              <FiUsers className="text-amber-500" />
            </div>
            <p className="text-2xl font-semibold text-gray-900">15 peers</p>
            <p className="text-xs text-indigo-600 mt-1">3 new this week</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
