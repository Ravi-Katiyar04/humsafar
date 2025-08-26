"use client";
import FAQSection from "@/components/FAQSection";
import MoreTrainInformation from "@/components/MoreTrainInformation";
import PlatformLocator from "@/components/PlatformLocator";

import {plateformLocatorPageFaq} from '@/data.js';
import { useState } from "react";

export default function PlatformLocatorPage() {

    const [faqs, setFaqs] = useState(plateformLocatorPageFaq);


    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <PlatformLocator />


            {/* Breadcrumbs */}
            <div className="max-w-11/12 mx-auto px-4 mt-4 text-sm text-gray-500">
                <span className="text-blue-700">Home</span> &nbsp;»&nbsp;
                <span className="text-gray-700 font-medium ">Platform Locator</span>
            </div>

            {/* Content Section */}
            <div className="max-w-11/12 mx-auto px-4 py-8 text-gray-800">
                <h2 className="text-2xl font-bold mb-4">Train Platform Locator</h2>
                <p className="mb-4">
                    Platform locator enables rail passengers to check in advance the platform on which their train is scheduled to arrive.
                    Train stations can be huge and confusing, with multiple levels and platforms, making it difficult for passengers to navigate
                    and find their way around. Each train arrives at a specific platform. A train platform locator can provide passengers with
                    the necessary information to quickly locate their platform and ensure that they board their train on time.
                </p>
                <p className="mb-4">
                    ixigo’s Platform Locator feature is easy to use and tells you the train platform number at every station along the way.
                    You just need to enter the train name or number and hit the “Search” button. This can be done even before you arrive at the railway station.
                </p>
                <p className="mb-4">
                    Train travel can be unpredictable, so ixigo’s goal is to provide you with all the details you need to make informed decisions
                    about your journey. You can be confident that you are receiving the most accurate information available with our train platform finder.
                </p>
                <p className="mb-4">
                    Our <span className="text-blue-700 cursor-pointer font-semibold">Live Running Status</span> feature also allows you to perform a train platform number check. It provides real-time updates on the train’s exact location along with the platform number at each station throughout the journey.
                </p>
                <p className="mb-4">
                    An IRCTC platform number enquiry can also be made at railway station counters. Alternatively, you can check it beside the train timetable on the display screens at the station, but not all stations have them. Using this online feature, on the other hand, can help you save time and you can head straight to the platform where the train will be arriving.
                </p>
                <p>
                    Please keep in mind that platform numbers are subject to change at any time without notice. The revisions may not be updated immediately.
                </p>
            </div>

            <section className="max-w-11/12 mx-auto px-4 mb-8">
                <MoreTrainInformation/>

                <FAQSection faqData={faqs} />
            </section>

        </div>
    );
}
