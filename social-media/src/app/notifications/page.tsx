"use client";

import { motion } from "framer-motion";
import {
  FiUser,
  FiMessageCircle,
  FiHeart,
  FiClock,
  FiAward,
} from "react-icons/fi";

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "connection",
      user: "Alexander Helfman",
      message: "accepted your connection request",
      time: "2 minutes ago",
      read: false,
      icon: FiUser,
      color: "bg-blue-500",
    },
    {
      id: 2,
      type: "message",
      user: "Joseph Wang",
      message: "sent you a new message",
      time: "45 minutes ago",
      read: false,
      icon: FiMessageCircle,
      color: "bg-indigo-500",
    },
    {
      id: 3,
      type: "reaction",
      user: "Zeeshan Shaik",
      message: "liked your recent activity update",
      time: "2 hours ago",
      read: true,
      icon: FiHeart,
      color: "bg-pink-500",
    },
    {
      id: 4,
      type: "achievement",
      user: null,
      message: 'You earned the "7-Day Streak" achievement!',
      time: "1 day ago",
      read: true,
      icon: FiAward,
      color: "bg-amber-500",
    },
    {
      id: 5,
      type: "reminder",
      user: null,
      message: "Time for your daily activity check",
      time: "1 day ago",
      read: true,
      icon: FiClock,
      color: "bg-green-500",
    },
  ];

  return (
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 mb-6"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold text-gray-800">
                Notifications
              </h1>
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                Mark all as read
              </button>
            </div>

            <div className="space-y-1">
              {notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`p-4 rounded-lg ${
                    notification.read ? "bg-white" : "bg-indigo-50"
                  } hover:bg-gray-50 transition-colors`}
                >
                  <div className="flex items-center">
                    <div
                      className={`h-10 w-10 rounded-full ${notification.color} flex items-center justify-center text-white mr-4 flex-shrink-0`}
                    >
                      <notification.icon className="h-5 w-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-gray-800">
                            {notification.user && (
                              <span className="font-medium">
                                {notification.user}{" "}
                              </span>
                            )}
                            {notification.message}
                          </p>
                          <span className="text-xs text-gray-500">
                            {notification.time}
                          </span>
                        </div>
                        {!notification.read && (
                          <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <button className="text-indigo-600 font-medium text-sm hover:text-indigo-800">
            Load more notifications
          </button>
        </div>
      </div>
  );
}
