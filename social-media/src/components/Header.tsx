"use client";

import React, { useState, useEffect } from "react";
import { FiBell, FiSearch, FiClock, FiPauseCircle } from "react-icons/fi";
import Link from "next/link";

export function Header() {
  const [screenTimeLeft, setScreenTimeLeft] = useState(3600);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timer =
      !isPaused &&
      setInterval(() => {
        setScreenTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPaused]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const getTimeColor = () => {
    if (screenTimeLeft < 600) return "text-red-500";
    if (screenTimeLeft < 1800) return "text-yellow-500";
    return "text-green-500";
  };

  return (
    <header className="py-4 px-6 border-b border-gray-100 bg-white sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
            <FiClock className={getTimeColor()} />
            <div className="flex flex-col">
              <span className={`text-sm font-medium ${getTimeColor()}`}>
                {formatTime(screenTimeLeft)}
              </span>
              <span className="text-xs text-gray-500">Screen time left</span>
            </div>
          </div>

          <Link href="/notifications">
            <button className="relative">
              <FiBell className="text-gray-600" size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </button>
          </Link>

          <Link href="/profile">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white text-sm font-bold">
              TP
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
