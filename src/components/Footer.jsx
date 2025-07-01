'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();
  const [open, setOpen] = useState({});

  const sections = {
    Features: [
      { label: 'Live Train Status', path: '/live-status' },
      { label: 'PNR Status', path: '/pnr-status' },
      { label: 'Train Time Table', path: '/timetable' },
      { label: 'Seat Availability', path: '/seat-availability' },
      { label: 'Train between Stations', path: '/between-stations' },
      { label: 'Arrival Departure', path: '/arrival-departure' },
      { label: 'Travel Advisory', path: '/advisory' },
    ],
    'Book with Us': [
      { label: 'Bus Tickets', path: '/bus-tickets' },
      { label: 'Train Tickets', path: '/train-tickets' },
      { label: 'Food on Train', path: 'https://www.ecatering.irctc.co.in' },
    ],
    Info: [
      { label: 'About Us', path: '/about' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'FAQs', path: '/faqs' },
      { label: 'Partners', path: '/partners' },
      { label: 'Advertise With Us', path: '/advertise' },
      { label: 'Work With Us', path: '/careers' },
      { label: 'Media', path: '/media' },
    ],
    'Our Family': [
      { label: 'IntrCity Smart Bus', path: '/intrcity-bus' },
    ],
  };

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const navigate = (path) => router.push(path);

  return (
    <footer className="bg-blue-50 border-t border-gray-300 px-6 py-10 text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-6">
        {Object.entries(sections).map(([section, items]) => (
          <div key={section}>
            <div
              className="flex justify-between items-center md:block cursor-pointer"
              onClick={() => toggle(section)}
            >
              <h3 className="font-semibold mb-3">{section}</h3>
              {open[section] ? (
                <span className="md:hidden">
                  <i className="fas fa-chevron-up" />
                </span>
              ) : (
                <span className="md:hidden">
                  <i className="fas fa-chevron-down" />
                </span>
              )}


            </div>

            <ul
              className={`space-y-2 md:block ${open[section] ? 'block' : 'hidden'
                }`}
            >
              {items.map((item, i) => (
                <li
                  key={i}
                  onClick={() => navigate(item.path)}
                  className="cursor-pointer text-sm hover:underline"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Right Section - Company Info */}
        <div>
          <div className="flex items-center mb-6 text-xl font-semibold">
            <img src="/assets/logo.svg" alt="humsafar" />
          </div>
          <p className="text-sm text-gray-600">
            HumSafar is a one-stop solution for travel discovery. Smart Bus booking, Train services & more.
          </p>
          <div className="text-sm my-4">
            <p className="font-semibold">Stelling Technologies Private Limited</p>
            <p>CIN: U72200UP2011PTC087404</p>
          </div>
          <div className="text-sm mb-4">
            <p className="font-semibold">Registered Office:</p>
            <p>
              Amco Tower, Plot No A - 5, 6 & 7, Sector 9,<br />
              Gautam Buddha Nagar, Noida, UP, India, 201301
            </p>
          </div>

          <div className="flex gap-4 text-xl text-gray-600 mt-2">
            <i className="fab fa-facebook-f hover:text-blue-600 cursor-pointer" />
            <i className="fas fa-times hover:text-red-600 cursor-pointer" />
            <i className="fab fa-instagram hover:text-pink-600 cursor-pointer" />
            <i className="fab fa-linkedin-in hover:text-blue-700 cursor-pointer" />
            <i className="fab fa-youtube hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

