"use client";
import React, { useState } from "react";

const FaqSection = () => {
  const faqData = [
    {
      question: "What is Manage Wise and what does it offer?",
      answer:
        "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
    },
    {
      question: "What is Manage Wise and what does it offer?",
      answer:
        "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
    },
    {
      question: "What is Manage Wise and what does it offer?",
      answer:
        "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
    },
    {
      question: "What is Manage Wise and what does it offer?",
      answer:
        "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
    },
    {
      question: "What is Manage Wise and what does it offer?",
      answer:
        "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <ul>
        {faqData.map((item, index) => (
          <li key={index} className="mb-3 bg-cardbg_color p-6 rounded-2xl">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-[20px] font-semibold mb-2 text-text">
                {item.question}
              </h3>
              <span className="ml-2 text-[30px] text-secondary__color">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-gray-700 text-[16px]">{item.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqSection;
