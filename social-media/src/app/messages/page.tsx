"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSearch,
  FiSend,
  FiMoreVertical,
  FiUser,
  FiUserPlus,
} from "react-icons/fi";

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(0);

  const contacts = [
    {
      name: "Alexander Helfman",
      avatar: "AH",
      lastMessage: "wanna go boxing tmrw for fun? Not as a catharsis tho frfr",
      time: "10:22 AM",
      unread: 0,
      online: true,
    },
    {
      name: "Zeeshan Shaik",
      avatar: "ZS",
      lastMessage: "I sent you the music track CHECK IT OUT",
      time: "Yesterday",
      unread: 2,
      online: false,
    },
    {
      name: "Joseph Wang",
      avatar: "JW",
      lastMessage: "stop ghosting me :(",
      time: "Wed",
      unread: 1029,
      online: true,
    },
  ];

  const messages = [
    {
      id: 1,
      from: "them",
      text: "wsg gang how's life",
      time: "10:15 AM",
    },
    {
      id: 2,
      from: "me",
      text: "im chilling. ever since i downloaded Innermind my life has been so much better.",
      time: "10:18 AM",
    },
    {
      id: 3,
      from: "them",
      text: "ikr Innermind is the goat app",
      time: "10:20 AM",
    },
    {
      id: 4,
      from: "them",
      text: "wanna go boxing tmrw for fun? Not as a catharsis tho frfr",
      time: "10:22 AM",
    },
  ];

  return (
    <div className="h-[calc(100vh-128px)] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="flex h-full">
        <div className="w-80 border-r border-gray-100 flex flex-col">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Messages
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                className={`p-4 border-b border-gray-100 cursor-pointer ${
                  activeChat === index ? "bg-indigo-50" : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveChat(index)}
                whileHover={{
                  backgroundColor:
                    activeChat === index ? "" : "rgb(249, 250, 251)",
                }}
              >
                <div className="flex items-center">
                  <div className="relative">
                    <div
                      className={`h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white`}
                    >
                      {contact.avatar}
                    </div>
                    {contact.online && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full ring-2 ring-white"></span>
                    )}
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium text-gray-800">
                        {contact.name}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {contact.time}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <p
                        className="text-sm text-gray-600 truncate"
                        style={{ maxWidth: "160px" }}
                      >
                        {contact.lastMessage}
                      </p>
                      {contact.unread > 0 && (
                        <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">
                          {contact.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-100">
            <button className="flex items-center justify-center w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity">
              <FiUserPlus className="mr-2" /> New Conversation
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <div className="flex items-center">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                  {contacts[activeChat].avatar}
                </div>
                {contacts[activeChat].online && (
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full ring-2 ring-white"></span>
                )}
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-800">
                  {contacts[activeChat].name}
                </h3>
                <p className="text-xs text-gray-500">
                  {contacts[activeChat].online
                    ? "Online"
                    : "Last seen recently"}
                </p>
              </div>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <FiMoreVertical />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.from === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl py-2 px-4 ${
                    message.from === "me"
                      ? "bg-indigo-600 text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  <p>{message.text}</p>
                  <p
                    className={`text-xs mt-1 text-right ${
                      message.from === "me"
                        ? "text-indigo-100"
                        : "text-gray-500"
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 py-2 px-4 bg-gray-50 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-r-lg hover:bg-indigo-700">
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
