import React from 'react';

const VandeBharatRunningStatus = () => {
    const VandebhartTrains= [
        { number: '22962' },
        { number: '20172' },
        { number: '20901' },
        { number: '20902' },
        { number: '22477' },
        { number: '22961' },
        { number: '22440' },
        { number: '20834' },
        { number: '22415' },
    ];
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Vande Bharat Express Trains Running Status</h2>
            <div className="grid grid-cols-3 gap-2 p-2 rounded-md text-center text-blue-700 text-sm font-medium">
                {VandebhartTrains.map((train, index) => (
                    <div key={index} className="border p-4 rounded-md bg-white hover:bg-blue-100 transition cursor-pointer">
                        <span className="block">{train.number} Running Status</span>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <button className="px-6 py-2 border cursor-pointer text-blue-700 font-semibold bg-white hover:bg-blue-100 rounded-md transition">Load More</button>
            </div>
        </section>
    );
};

export default VandeBharatRunningStatus;
