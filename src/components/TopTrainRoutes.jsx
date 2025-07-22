import React from 'react';

const TopTrainRoutes = () => {

    const topRoutes = [
        { label: 'New Delhi to Ayodhya', href: '/train/new-delhi-ayodhya' },
        { label: 'Varanasi to Ayodhya', href: '/train/varanasi-ayodhya' },
        { label: 'Mumbai to Goa', href: '/train/mumbai-goa' },
        { label: 'Lucknow to Ayodhya', href: '/train/lucknow-ayodhya' },
        { label: 'New Delhi to Mumbai', href: '/train/new-delhi-mumbai' },
        { label: 'New Delhi to Goa', href: '/train/new-delhi-goa' },
        { label: 'New Delhi to Jammu', href: '/train/new-delhi-jammu' },
        { label: 'Pune to Mumbai', href: '/train/pune-mumbai' },
        { label: 'New Delhi to Haridwar', href: '/train/new-delhi-haridwar' },
        { label: 'New Delhi to Amritsar', href: '/train/new-delhi-amritsar' },
        { label: 'New Delhi to Agra', href: '/train/new-delhi-agra' },
        { label: 'Mumbai to New Delhi', href: '/train/mumbai-new-delhi' },
        { label: 'Mumbai to Pune', href: '/train/mumbai-pune' },
        { label: 'Ayodhya to Varanasi', href: '/train/ayodhya-varanasi' },
        { label: 'New Delhi to Ujjain', href: '/train/new-delhi-ujjain' },
        { label: 'Bengaluru to Ayodhya', href: '/train/bengaluru-ayodhya' },
        { label: 'New Delhi to Varanasi', href: '/train/new-delhi-varanasi' },
        { label: 'New Delhi to Chandigarh', href: '/train/new-delhi-chandigarh' },
        { label: 'New Delhi to Jaipur', href: '/train/new-delhi-jaipur' },
    ];
    return (
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 w-full mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Top Train Routes</h2>
            <ul className="space-y-4">
                {topRoutes.map((link, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                        <a href={link.href} className="text-blue-600 hover:underline text-sm font-medium">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TopTrainRoutes;
