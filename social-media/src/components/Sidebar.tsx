"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  FiHome, 
  FiActivity, 
  FiMessageCircle, 
  FiUser,
  FiBell,
  FiBook
} from "react-icons/fi";

const navItems = [
  { name: "Home", href: "/", icon: FiHome },
  { name: "Activity", href: "/activity", icon: FiActivity },
  { name: "Scroll", href: "/scroll", icon: FiBook },
  { name: "Messages", href: "/messages", icon: FiMessageCircle },
  { name: "Notifications", href: "/notifications", icon: FiBell },
  { name: "Profile", href: "/profile", icon: FiUser },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-full py-8 flex flex-col bg-white border-r border-gray-100">
      <div className="px-6 mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          Inner<span className="text-black">mind</span>
        </h1>
      </div>

      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className={`flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-colors relative ${
                    isActive 
                      ? "text-indigo-600 bg-indigo-50" 
                      : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="mr-3 flex-shrink-0" />
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg border-2 border-indigo-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-6 mt-auto">
        <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
          <h4 className="text-sm font-medium text-gray-800 mb-2">
            Daily Challenge
          </h4>
          <p className="text-xs text-gray-600 mb-3">
            Take a 10-minute walk without your phone
          </p>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs py-2 px-3 rounded-md transition-colors">
            Complete Challenge
          </button>
        </div>
      </div>
    </div>
  );
}
