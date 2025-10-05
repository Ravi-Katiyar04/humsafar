"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function FAQSection({faqData}) {
  const [openIndex, setOpenIndex] = useState(null);

  // console.log(faqData);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions (FAQs)</h2>
      <div className="space-y-4">
        {faqData?.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="flex justify-between items-center w-full p-4 text-left font-semibold text-gray-800 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className='text-xl'>{openIndex === index ? '-' : '+'}</span>
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
