'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function ProfileMenu({setShowProfileMenu}) {
    const router = useRouter();

    const menuItems = [
        {
            icon: 'fa-user',
            title: 'ixigoer',
            url: '/profile',
            subtitle: 'My Profile',
        },
        {
            icon: 'fa-suitcase',
            title: 'My Trips',
            url: '/trips',
            subtitle: 'View & manage bookings',
        },
        {
            icon: 'fa-user-friends',
            title: 'My Travellers',
            url: '/travellers',
            subtitle: 'View all saved travellers',
        },
    ];

    const handleLogout = async () => {
        try {
            await axios.post('/api/logout');
            router.push('/'); // Navigate to home
            setTimeout(() => window.location.reload(), 100);
        } catch (error) {
            console.error('Logout failed:', error);
            alert('Logout failed. Please try again.');
        }
    };


    return (
        <div className="w-72 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden text-gray-800">
            <div className="divide-y divide-gray-100">
                {menuItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-start gap-4 p-4 hover:bg-gray-200 transition-colors cursor-pointer"
                        onClick={() => {
                            router.push(item.url);
                            setShowProfileMenu(false);
                        }}
                    >
                        <i className={`fa ${item.icon} text-blue-600 text-lg mt-1`} />
                        <div>
                            <p className="text-sm font-medium">{item.title}</p>
                            <p className="text-sm text-gray-500">{item.subtitle}</p>
                        </div>
                    </div>
                ))}

                <div
                    onClick={handleLogout}
                    className="flex items-start gap-4 p-4 hover:bg-gray-200 text-red-600 font-medium cursor-pointer transition-colors"
                >
                    <i className="fa fa-arrow-right-from-bracket text-base" />
                    <span>Log out</span>
                </div>
            </div>
        </div>
    );
}



