'use client';

import axios from 'axios';
import { set } from 'mongoose';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ProfilePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        try {
            await axios.post('/api/logout');
            router.push('/');
            setTimeout(() => window.location.reload(), 600);
            setLoading(false);
        } catch (error) {
            console.error('Logout failed:', error);
            alert('Logout failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="max-w-md w-full space-y-6 bg-white shadow-lg rounded-xl p-8">
                <div className="flex flex-col items-center text-center space-y-3">
                    <i className="fa fa-user-circle text-6xl text-blue-600" aria-hidden="true" />
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Ravi Katiyar</h2>
                        <p className="text-gray-500 text-sm">ravi@example.com</p>
                    </div>
                </div>

                <div className="space-y-4 text-gray-700 text-sm">
                    <div className="flex items-center gap-3">
                        <i className="fa fa-phone text-blue-600" />
                        <span>+91 9876543210</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <i className="fa fa-map-marker-alt text-blue-600" />
                        <span>Lucknow, India</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <i className="fa fa-user text-blue-600" />
                        <span>ixigoer since 2023</span>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    disabled={loading}
                    className="w-full bg-red-600 cursor-pointer hover:bg-red-700 text-white py-2 rounded-md transition font-medium flex items-center justify-center gap-2"
                >
                    <i className="fa fa-sign-out-alt" />
                    {loading ? 'Logging out...' : 'Logout'}
                </button>
            </div>
        </div>
    );
}
