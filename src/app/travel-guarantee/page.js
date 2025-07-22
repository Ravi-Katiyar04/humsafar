
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FAQSection from '@/components/FAQSection';
import ServiceTiles from '@/components/Services';

export default function TravelGuarantee() {
    return (
        <div className="bg-white min-h-screen text-[15px] text-gray-700">
            {/* Header */}
            <div className="bg-blue-700 py-4 px-4 sm:px-6 lg:px-8 text-white">
                <div className="max-w-6xl mx-auto text-sm space-x-1">
                    <span>Home</span> / <span>Trains</span> / <span className="font-bold">Travel Guarantee</span>
                </div>
            </div>

            {/* Main Card */}
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg mt-6 px-4 sm:px-6 lg:px-8 py-8 relative">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-full">
                        <div className="flex items-center mb-4 flex-wrap gap-2">
                            <Image src="/assets/guarantee.svg" alt="shield" width={60} height={60} className="w-16 sm:w-20 text-blue-700" />
                            <h1 className="text-3xl sm:text-4xl text-black font-bold">Travel Guarantee</h1>
                        </div>
                        <h2 className="text-2xl sm:text-3xl mb-4 font-bold text-black">Confirmed Tickets or 3X Refund*</h2>
                        <Link href="/" className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded">Book Now</Link>

                        <div className="mt-6">
                            <h3 className="text-lg text-black font-semibold mb-2">What is Travel Guarantee?</h3>
                            <p className="my-2">
                                HumSafar Travel Guarantee is a feature that ensures peace of mind when booking a waitlisted train ticket. Under this feature, you&apos;ll either get confirmed seats or a refund based on your selected travel mode *(3X for flight, 3X for bus, or 2X for train) if your booking remains waitlisted at the time of chart preparation.
                            </p>
                            <div className="my-8">
                                Under Travel Guarantee, you&apos;ll receive a refund as follows:
                                <ul className="list-disc pl-6 mt-2">
                                    <li>1X refund of the ticket fare to your original payment mode.</li>
                                    <li>The remaining refund will be credited as a &apos;Travel Guarantee Coupon&apos; based on the travel mode you&apos;ve selected at the time of claiming this coupon.</li>
                                </ul>
                            </div>
                            <p className="my-2">

                                It is also important to note that, the Travel Guarantee Coupon can only be used for a single booking, for the selected travel mode, and is valid for 7 days (from the date of chart preparation of the original train booking). When using the Travel Guarantee Coupon for your next booking, the new travel date should also be within this 7-day period.
                            </p>
                            <Link
                                href="https://www.youtube.com/watch?v=Q6sN5QBI2-g"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-700 cursor-pointer mt-4"
                            >
                                <i className="fas fa-play-circle mr-2 text-blue-700 text-sm"></i>
                                Watch this video to learn more about Travel Guarantee
                            </Link>

                            {/* Booking Guide */}
                            <div className="mt-10">
                                <h2 className="text-2xl text-black font-bold mb-4">How to book with Travel Guarantee?</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                    <Image src="/assets/book1.png" alt="step 1" width={260} height={260} className="rounded-md shadow w-full h-auto" />
                                    <Image src="/assets/book2.png" alt="step 2" width={260} height={260} className="rounded-md shadow w-full h-auto" />
                                    <Image src="/assets/book3.png" alt="step 3" width={260} height={260} className="rounded-md shadow w-full h-auto" />
                                    <Image src="/assets/book4.png" alt="step 4" width={260} height={260} className="rounded-md shadow w-full h-auto" />
                                </div>
                            </div>

                            {/* Refund Example */}
                            <div className="mt-10">
                                <h2 className="text-2xl text-black font-bold mb-4">How is the refund credited?</h2>
                                <p className="mb-4">
                                    When you opt for Travel Guarantee, you get a confirmed ticket or a refund based on the selected travel mode (3X of the ticket fare for flight, 3X for bus, or 2X for train), if your booking remains waitlisted at the time of chart preparation. This ensures guaranteed train tickets or a refund for unconfirmed bookings, providing you with the trip guarantee you need for a hassle-free journey.
                                </p>
                                <p className="mb-4">
                                    Here is an example to help you understand the refund process -
                                </p>
                                <p className="mb-4">
                                    If your ticket fare was ₹2000 and you have opted for Travel Guarantee, assuming you are eligible for a 3X refund of the ticket fare, you’ll receive a total refund of ₹6000.
                                </p>
                                <p className="mb-2">
                                    ₹6000 will be refunded as follows:
                                </p>
                                <div className="grid grid-cols-2 bg-gray-100 rounded-lg overflow-hidden">
                                    <div className="p-4 border-r border-gray-300">
                                        <h3 className="text-[16px] font-semibold">₹2000</h3>
                                        <p className="text-gray-600">Refunded to original payment mode</p>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-[16px] font-semibold">₹4000</h3>
                                        <p>Via Travel Guarantee Coupon</p>
                                    </div>
                                </div>
                                <p className="text-xs mt-3 text-gray-500">
                                    Here &apos;refund of the ticket fare&apos; refers to the amount that does not include ixigo service charges, convenience charge, payment gateway charges, discounts and Travel Guarantee charges. Also, the refund amount will depend on your selected travel mode at the time of claiming the coupon.
                                </p>
                                <div className="text-xs mt-4 text-gray-500">
                                    <p className='font-bold'>NOTE:</p>
                                    <ul className="list-disc pl-6 mt-2">
                                        <li>You will only be eligible for a refund under Travel Guarantee if your booking is not confirmed at the time of chart preparation, ensuring a reliable trip guarantee train ticket experience. Bookings under RAC (Reservation Against Cancellation) or partially confirmed status will not be eligible for this refund.</li>
                                        <li>Also, the Travel Guarantee Coupon can only be used for a single booking, for the selected travel mode, and is valid for 7 days (from the date of chart preparation of the original train booking). When using the Travel Guarantee Coupon for your next booking, the new travel date should also be within this 7-day period.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* FAQ */}
                            <FAQSection />

                            {/* Terms & Conditions */}
                            <div className="mt-16 mb-16 p-6 bg-gray-100 rounded-lg">
                                <h2 className="text-2xl text-black font-bold mb-4">Travel Guarantee Feature Terms and Conditions</h2>
                                <ul className="list-decimal pl-6 space-y-2 text-sm">
                                    <li>The Travel Guarantee feature is applicable only for selected trains and classes booked via ixigo.</li>
                                    <li>Travel Guarantee is a paid feature and an opt-in fee will be charged if selected.</li>
                                    <li>Terms and conditions are subject to change without prior notice.</li>
                                    <li>
                                        Under Travel Guarantee, you’ll receive a refund of the ticket fare (3X for flight, 3X for bus, or 2X for train) only if your booking remains fully waitlisted at the time of chart preparation.
                                    </li>
                                    <li>
                                        At the time of claiming the coupon, you will receive a refund of the ticket fare based on the selected travel mode. Total refund value: 3X for flight, 3X for bus, or 2X for train.
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>In the case of a 3X refund, 1X will be credited to the original payment mode, and 2X will be refunded as a Travel Guarantee Coupon.</li>
                                            <li>In the case of a 2X refund, 1X will be credited to the original payment mode, and 1X will be refunded as a Travel Guarantee Coupon.</li>
                                        </ul>
                                    </li>
                                    <li>The maximum permissible value for the Travel Guarantee Coupon is ₹6000.</li>
                                    <li>
                                        For example: If your ticket fare is ₹4000 and you are eligible for a 3X refund, then ₹4000 will be refunded to the original payment mode, and only ₹6000 will be given as a Travel Guarantee Coupon instead of ₹8000.
                                    </li>
                                    <li>
                                        You will not be eligible for a refund under Travel Guarantee (3X for flight, 3X for bus, or 2X for train) in the following cases:
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>RAC (Reservation Against Cancellation) bookings after chart preparation.</li>
                                            <li>Partially confirmed bookings: For example, if a booking (with multiple passengers) is not confirmed for some passengers, it will still not be eligible for a 3X refund.</li>
                                            <li>Cancellation after opting for the feature: If you cancel the ticket after opting for Travel Guarantee, you will not be eligible for a refund under this feature.</li>
                                            <li>Cancellation before chart preparation: If you cancel your waitlisted train ticket before chart preparation, you&apos;ll receive a refund as per the IRCTC cancellation policy.</li>
                                            <li>Confirmed ticket cancellation: If your ticket is confirmed but you cancel it before or after chart preparation, IRCTC cancellation rules will apply. Any applicable refund will be credited accordingly.</li>
                                            <li>Train cancellation by IRCTC: If the train is cancelled by IRCTC, a full refund of the ticket fare for your booking will be initiated automatically. In this case, Travel Guarantee charges will also be refunded.</li>
                                        </ul>
                                    </li>
                                    <li>Note: Here &apos;ticket fare&apos; is the booking amount that does not include ixigo service charges, convenience charge, payment gateway charges, discounts and Travel Guarantee charges, etc.</li>
                                    <li>If a waitlisted ticket is cancelled, you will receive a refund as per the IRCTC cancellation policy.</li>
                                    <li>Train chart preparation schedule is controlled by the Indian Railways. The chart is usually prepared 8 hours prior to the train’s departure time from the source station. For early morning trains, the chart is typically prepared on the previous night.</li>
                                    <li>ixigo will not be responsible for the availability of an alternative mode of travel, choice of travel date or fare difference, if the ticket is not confirmed after opting for Travel Guarantee.</li>
                                    <li>IRCTC convenience charges, ixigo service charges, payment gateway charges, offer discounts, etc. are non-refundable if you have opted for Travel Guarantee.</li>
                                    <li>All disputes arising out of or in connection to this feature are subject to the exclusive jurisdiction of the courts in Gurugram only.</li>
                                    <li>By opting for Travel Guarantee, it is assumed that the passenger has given ixigo the permission to use their name, image and any other details or information available on their social media profiles, in any manner, to promote the offer or ixigo brand name or services.</li>
                                    <li>ixigo shall not be liable for any indirect, punitive, special, incidental or consequential damages arising out of or in connection with the offer. Notwithstanding anything contrary contained hereunder, in no event the aggregate liability of ixigo under this offer shall exceed the amount of the coupon availed by the customer amount under this offer.</li>
                                    <li>
                                        For bookings made under Travel Guarantee:
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>Before 18th December 2024: A 2X refund will be applicable.</li>
                                            <li>Between 18th December 2024 and 9th January 2025: A 3X refund will be applicable.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        For bookings made under Travel Guarantee after 9th January 2025, the refund will depend on the selected travel mode at the time of claiming the coupon:
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>3X refund for flight</li>
                                            <li>3X refund for bus</li>
                                            <li>2X refund for train</li>
                                        </ul>
                                    </li>
                                    <li>The number of passengers in the alternate mode of travel must be equal to or less than the number of passengers in the original train booking where you had opted for Travel Guarantee. Passenger names must also be the same as in your original train booking.</li>
                                    <li>Any Assured Flex benefits such as booking modification or free cancellation cannot be clubbed with Travel Guarantee.</li>
                                    <li>Under Travel Guarantee, you can book a maximum of three tickets per month.</li>
                                    <li>
                                        Travel Guarantee charges will only be refunded in the following cases:
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>The new booking made with a Travel Guarantee Coupon remains waitlisted at the time of chart preparation.</li>
                                            <li>The train is cancelled by IRCTC, and you had opted for Travel Guarantee on this booking.</li>
                                            <li>The new booking made with the Travel Guarantee Coupon, where the bus is selected as your travel mode, is cancelled by the bus operator.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            {/* Coupon Terms */}
                            <div className="mt-10 p-6 bg-gray-100 rounded-lg">
                                <h2 className="text-2xl text-black font-bold mb-4">Travel Guarantee Coupon Terms and Conditions</h2>
                                <ul className="list-decimal pl-6 space-y-2 text-sm">
                                    <li>The Travel Guarantee Coupon can only be claimed once for the selected travel mode (train/bus/flight).</li>
                                    <li>It can only be claimed within 7 days (from the date of chart preparation). When using the Travel Guarantee Coupon for your next booking, your new travel date should also be within this 7-day period.</li>
                                    <li>The coupon will expire within 7 days once issued by ixigo. You’ll receive the instructions on how to claim the coupon via WhatsApp and email.</li>
                                    <li>In the case of a flight booking, the coupon can only be redeemed for a one-way domestic flight.</li>
                                    <li>The coupon code cannot be clubbed with any other offer and is non-transferable.</li>
                                    <li>The travel mode must be selected when claiming the coupon, and this mode cannot be changed afterwards.</li>
                                    <li>For train bookings, the coupon code discount will only be applicable on the ticket fare.</li>
                                    <li>For flight/bus bookings, the coupon code discount amount can be up to the ticket fare.</li>
                                    <li>While using the coupon, if the booking amount is higher than the coupon amount, then you need to pay the fare difference. If the booking amount is lower than the coupon amount, the balance amount will lapse and will not be refunded.</li>
                                    <li>The Travel Guarantee coupon cannot be exchanged, transferred to another account/used for bookings with another account or encashed.</li>
                                    <li>ixigo reserves the right to deny acceptance of any Travel Guarantee Coupon due to duplicity. ixigo shall not be held responsible in this regard.</li>
                                    <li>At the time of claiming the coupon, you will be eligible for a refund based on your selected travel mode. The total refund value under Travel Guarantee will be:
                                        <ul className="list-disc list-inside ml-6">
                                            <li>3X for flight</li>
                                            <li>3X for bus</li>
                                            <li>2X for train</li>
                                        </ul>
                                    </li>
                                    <li>The total refund breakup will be as follows:
                                        <ul className="list-disc list-inside ml-6">
                                            <li>For a 3X refund, 1X will be credited to the original payment mode, and 2X will be refunded as a Travel Guarantee Coupon.</li>
                                            <li>For a 2X refund, 1X will be credited to the original payment mode, and 1X will be refunded as a Travel Guarantee Coupon.</li>
                                        </ul>
                                    </li>
                                    <li>Once redeemed, the Travel Guarantee coupon is non-refundable. The coupon amount will not be refunded if the new booking (regardless of the selected travel mode e.g., bus, flight, or train) is cancelled by the user. Additionally, for train bookings, the coupon amount will not be refunded if the ticket remains waitlisted at the time of chart preparation or if a TDR is filed and approved by IRCTC.</li>
                                    <li>The number of passengers in the alternate mode of travel must be equal to or less than the number of passengers in the original train booking where you had opted for Travel Guarantee. Passenger names must also be the same as in your original train booking.</li>
                                    <li>Under Travel Guarantee, you are allowed to claim only up to three coupons per month.</li>
                                    <li>In the event of suspected fraudulent activity or misuse of Travel Guarantee, ixigo reserves the right, at its sole discretion, to reject any coupon claims without prior notice.</li>
                                    <li>If the service for the selected travel mode (e.g., bus, flight, or train) is suspended or cancelled, and you booked the ticket using the Travel Guarantee Coupon, the coupon will not be refunded and will lapse. Any amount paid above the value of the coupon will be refunded to your original payment method.</li>
                                </ul>
                                <p className="mt-4 text-gray-900">Additionally, the Travel Guarantee charges will be refunded for train or bus bookings made with the coupon if the train is cancelled by IRCTC or the bus is cancelled by the operator.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto my-4 px-4 sm:px-6 lg:px-8'>
                <ServiceTiles />
            </div>
        </div>
    );
}

