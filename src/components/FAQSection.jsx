"use client"
import { useState } from 'react';
import Link from 'next/link';

const faqData = [
  {
    question: "Q. How does running status work?",
    answer: "Train running status works by tracking the real-time location of the train using GPS or other railway systems. This data is then processed and made available to users."
  },
  {
    question: "Q. How do I know where is my train?",
    answer: "You can know your train's location by entering its train number or name in the search bar on this page or by using the official NTES website/app."
  },
  {
    question: "Q. How do I know where is my train now through SMS?",
    answer: "Indian Railways used to provide SMS-based train tracking services. You typically send an SMS to a specific number with your train number or PNR. Please check the official railway website for the latest SMS service details, as these might change."
  },
  {
    question: "Q. Which date should I select while checking the train live running status?",
    answer: "You should select the scheduled date of departure of the train from its originating station to get accurate live running status."
  },
  {
    question: "Q. How can I check if my train is rescheduled?",
    answer: (
      <span>
        Information about rescheduled, diverted, or cancelled trains is usually available on the
        <Link href="/train/reschedule">
          <a className="text-blue-600 hover:underline">official NTES website</a>
        </Link>
        , IRCTC website, and also on third-party apps like ixigo. Look for specific sections on 'Train Reschedule' or 'Diverted Trains'.
      </span>
    )
  },
  {
    question: "Q. What is the coach position of a train?",
    answer: "Coach position refers to the arrangement of coaches (S1, S2, B1, A1, etc.) from the engine. This information is often available on platforms and sometimes within the train running status details or PNR status details provided by IRCTC or NTES."
  },
  {
    question: "Q. How do I check the ETA of a train?",
    answer: "The Estimated Time of Arrival (ETA) for a train at upcoming stations is typically displayed along with its live running status. This prediction is based on the train's current location, speed, and scheduled halts."
  }
  // Add more FAQs as per your screenshot
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions (FAQs)</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="flex justify-between items-center w-full p-4 text-left font-semibold text-gray-800 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-700 border-t border-gray-200">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
