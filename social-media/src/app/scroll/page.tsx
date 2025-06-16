"use client";

import React, { useState } from "react";
import {
  FiLock,
  FiUnlock,
  FiBook,
  FiActivity,
  FiAward,
} from "react-icons/fi";
import Link from "next/link";

export default function ScrollPage() {
  const [unlockedContent, setUnlockedContent] = useState<number[]>([0]);
  const [activityProgress, setActivityProgress] = useState<number>(35);
  const [filter, setFilter] = useState<string>("all");

  const educationalContent = [
    {
      id: 0,
      title: "The Digital Detox Revolution",
      description: "Exclusive insights on how tech leaders maintain balance. Includes 5-minute daily practices you can start today.",
      preview: "Ever wonder how the CEOs of major tech companies limit their own screen time? This guide reveals their secret habits...",
      stepsRequired: 0,
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "10 min read",
      category: "Wellness",
      featured: true,
    },
    {
      id: 1,
      title: "Hack Your Happiness: The Dopamine Connection",
      description: "Learn how small changes to your digital habits can rewire your brain for more authentic joy and satisfaction.",
      preview: "The top 3 smartphone habits that are silently draining your happiness, and what to do instead...",
      stepsRequired: 2000,
      image: "https://images.unsplash.com/photo-1495216875107-c6c043eb703f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "15 min read",
      category: "Psychology",
      featured: false,
    },
    {
      id: 2,
      title: "Deep Work in a Distracted World",
      description: "Master the rare ability to focus without distraction and accomplish more in less time than others ever could.",
      preview: "What if you could get 3 hours of work done in just 1? The forgotten technique that Cal Newport and Bill Gates both use...",
      stepsRequired: 5000,
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "20 min read",
      category: "Productivity",
      featured: true,
    },
    {
      id: 3,
      title: "The Lost Art of Real Connection",
      description: "Rediscover how to build relationships that matter in a world of endless but shallow digital interactions.",
      preview: "The surprising research that shows why face-to-face conversations activate brain regions that digital chat never will...",
      stepsRequired: 10000,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "18 min read",
      category: "Relationships",
      featured: false,
    },
    {
      id: 4,
      title: "Mindfulness for the Digital Age",
      description: "Practice meditation techniques specifically designed to combat tech-induced anxiety and distraction.",
      preview: "This 5-minute practice has been shown to reduce tech anxiety by 60% in just two weeks of daily use...",
      stepsRequired: 7500,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "12 min read",
      category: "Wellness",
      featured: false,
    },
    {
      id: 5,
      title: "Digital Nutrition: Consuming Content That Matters",
      description: "Learn to curate your information diet for better mental health and deeper knowledge.",
      preview: "Information obesity is the new epidemic. Here's how to create a lean, nutritious mental diet instead...",
      stepsRequired: 15000,
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "25 min read",
      category: "Productivity",
      featured: true,
    }
  ];

  const categories = ["all", ...new Set(educationalContent.map(item => item.category.toLowerCase()))];

  const filteredContent = educationalContent.filter(item => {
    if (filter === "all") return true;
    return item.category.toLowerCase() === filter;
  });

  const unlockContent = (id: number) => {

    setUnlockedContent(prev => [...prev, id]);
  };

  const isContentUnlocked = (id: number) => unlockedContent.includes(id);

  const simulateActivity = () => {
    setActivityProgress(prev => Math.min(100, prev + 15));
    
    educationalContent.forEach(content => {
      if (!isContentUnlocked(content.id) && 
          content.stepsRequired <= activityProgress * 100) {
        unlockContent(content.id);
      }
    });
  };

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">The Scroll</h1>
          <p className="text-gray-600">Knowledge worth moving for. Unlock content by staying active.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm whitespace-nowrap text-gray-600">Filter by:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    filter === category
                      ? "bg-indigo-100 text-indigo-700"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <button 
            onClick={simulateActivity}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center text-sm font-medium ml-auto"
          >
            <FiActivity className="mr-2" /> Log Activity
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-medium text-gray-800">Activity Progress</h2>
            <span className="text-sm font-medium text-green-600">
              {Math.round(activityProgress * 100)} / 10,000 steps
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-green-500 h-2.5 rounded-full" 
              style={{ width: `${activityProgress}%` }}
            ></div>
          </div>
        </div>

        {filter === "all" && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <FiAward className="mr-2 text-amber-500" /> Featured Content
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {educationalContent.filter(item => item.featured).map((content) => (
                <div
                  key={content.id}
                  className={`rounded-xl overflow-hidden shadow-sm border border-gray-100 ${
                    !isContentUnlocked(content.id) ? "opacity-70" : ""
                  }`}
                >
                  <div 
                    className="h-40 bg-cover bg-center relative" 
                    style={{ backgroundImage: `url(${content.image})` }}
                  >
                    {!isContentUnlocked(content.id) && (
                      <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white p-4">
                          <FiLock size={24} className="mx-auto mb-2" />
                          <p className="text-sm">Unlock with {content.stepsRequired} steps</p>
                        </div>
                      </div>
                    )}
                    <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0 h-16 opacity-80"></div>
                    <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
                      {content.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-800">{content.title}</h3>
                      {isContentUnlocked(content.id) ? (
                        <FiUnlock className="text-green-500" />
                      ) : (
                        <FiLock className="text-gray-400" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{content.description}</p>
                    {isContentUnlocked(content.id) ? (
                      <div className="mt-3">
                        <p className="text-sm text-gray-500 italic mb-2">&ldquo;{content.preview}&rdquo;</p>
                        <div className="flex items-center justify-between">
                          <Link href={`/scroll/${content.id}`}>
                            <span className="inline-block px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium">
                              <FiBook className="inline mr-1" /> Read Full Article
                            </span>
                          </Link>
                          <span className="text-xs text-gray-400">{content.readTime}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-3 flex items-center text-gray-500">
                        <FiActivity className="mr-1.5" />
                        <span className="text-sm">Keep moving to unlock!</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* All Content */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {filter === "all" ? "All Content" : filter.charAt(0).toUpperCase() + filter.slice(1) + " Content"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredContent.map((content) => (
              <div
                key={content.id}
                className={`rounded-xl overflow-hidden shadow-sm border border-gray-100 ${
                  !isContentUnlocked(content.id) ? "opacity-70" : ""
                }`}
              >
                <div 
                  className="h-40 bg-cover bg-center relative" 
                  style={{ backgroundImage: `url(${content.image})` }}
                >
                  {!isContentUnlocked(content.id) && (
                    <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="text-center text-white p-4">
                        <FiLock size={24} className="mx-auto mb-2" />
                        <p className="text-sm">Unlock with {content.stepsRequired} steps</p>
                      </div>
                    </div>
                  )}
                  <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0 h-16 opacity-80"></div>
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
                    {content.category}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-800">{content.title}</h3>
                    {isContentUnlocked(content.id) ? (
                      <FiUnlock className="text-green-500" />
                    ) : (
                      <FiLock className="text-gray-400" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{content.description}</p>
                  {isContentUnlocked(content.id) ? (
                    <div className="mt-3">
                      <p className="text-sm text-gray-500 italic mb-2">&ldquo;{content.preview}&rdquo;</p>
                      <div className="flex items-center justify-between">
                        <Link href={`/scroll/${content.id}`}>
                          <span className="inline-block px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium">
                            <FiBook className="inline mr-1" /> Read Full Article
                          </span>
                        </Link>
                        <span className="text-xs text-gray-400">{content.readTime}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-3 flex items-center text-gray-500">
                      <FiActivity className="mr-1.5" />
                      <span className="text-sm">Keep moving to unlock!</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}