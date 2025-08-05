"use client"
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import FAQSection from '@/components/FAQSection';
import RailwayInfo from '@/components/RailwayInfo';
import TopTrainRoutes from '@/components/TopTrainRoutes';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

export default function RunningStatus() {

  const features = [
    {
      icon: 'fa-location-dot',
      title: 'Most Accurate and Live Train Running Status',
      description: 'Want to track online train status? ixigo provides the most accurate and real-time train status, offering passengers up-to-date information for a seamless travel experience.',
    },
    {
      icon: 'fa-bell',
      title: 'Get Instant Updates on Train Delays',
      description: 'Get instant updates on rescheduled, diverted, cancelled, or partially cancelled trains, along with real-time notifications on delays to ensure you’re always on time.',
    },
    {
      icon: 'fa-clock-rotate-left',
      title: 'Get Delay Prediction of Upcoming Stations',
      description: 'ixigo offers a unique feature that predicts delays at upcoming stations, helping passengers check their live train status accurately.',
    },
    {
      icon: 'fa-map-location-dot',
      title: 'Check Train Location without Internet',
      description: 'ixigo enables users to track train locations without an internet connection, ensuring uninterrupted access to real-time information.',
    },
    {
      icon: 'fa-train-subway',
      title: 'IRCTC Authorised Partner',
      description: 'Enjoy a fast and seamless train ticket booking experience with the official IRCTC partner.',
    },
  ];



  return (
    <div className="min-h-screen  bg-gray-100 text-gray-600  text-[14px] ">


      <Header currentPath="/running-status" />

      <div className="min-h-fit p-2 bg-cover bg-center flex flex-col items-center justify-start "
        style={{
          backgroundImage: "url('/assets/train.jpg')",
        }}>
        <p className=" my-4 text-blue-50  ">Home / Running Status</p>
        <section className="bg-white p-6 w-full max-w-7xl rounded-lg shadow-md mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Train Running Status</h1>

          <SearchBar />



          

          {/* {loading && <p className="text-center text-blue-600 mt-4">Loading train status...</p>}
          {error && <p className="text-center text-red-600 mt-4">{error}</p>} */}

        </section>

      </div>

      <main className='max-w-11/12 mx-auto  py-8 md:flex gap-10 '>

        <div className=' w-full md:w-4/5 min-h-screen' >
          <h1 className="text-xl font-bold mb-4 text-black">IRCTC Live Train Running Status</h1>
          <p className="mb-6 text-[14px] font-semibold">
            <span className='mb-4 block'>IRCTC Live Train Running Status is a system created by the Indian Railways that allows passengers to easily track their train&rsquo;s exact location. </span>

            <span className='mb-4 block'>To spot your train, you simply have to enter the five-digit train number or the name of the train in the &rsquo;Train Running Status&rsquo; form. Select the date of journey from the source railway station. This will display the arrival and departure time of your train for your boarding railway station. Get additional details on Indian railways trains like info on real-time delays, boarding platform number, and last-reported location.</span>
          </p>

          {/* <section className="my-8">
            {trainStatus && <TrainStatusDisplay status={trainStatus} />}
          </section> */}

          <h1 className="text-xl font-bold mb-4 text-black">Why Check Running Status Online with Humsafar?</h1>
          <div className='border-2 h-fit border-gray-300 rounded-4xl p-8 mb-6'>
            <ul className="divide-y divide-gray-300">
              {features.map((feature, idx) => (
                <li key={idx} className="py-4">
                  {/* Mobile View: Collapsible */}
                  <div className="sm:hidden">
                    <details className="group cursor-pointer">
                      <summary className="flex justify-between items-start">
                        <div className="flex items-start gap-3 text-left">
                          <i className={`fas ${feature.icon} text-blue-600 text-xl`} />
                          <h3 className="font-semibold text-md text-gray-900 group-open:text-blue-700">
                            {feature.title}
                          </h3>
                        </div>
                        <i className="fas fa-chevron-down text-gray-500 group-open:rotate-180 transition-transform mt-1" />
                      </summary>
                      <p className="text-gray-600 mt-2 ml-7">{feature.description}</p>
                    </details>
                  </div>

                  {/* Desktop View: Always Open */}
                  <div className="hidden sm:flex items-start gap-4">
                    <div className="text-blue-600 text-xl mt-1">
                      <i className={`fas ${feature.icon}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>


          </div>

          <section className="mb-8">
            <h1 className="text-xl font-bold mb-4 text-black">Where is My Train - Spot Your Train Online</h1>
            <p className="my-2" >If you ever find yourself asking, &quot;Where is my train?&quot;, ixigo has you covered. With its live train tracker, you can easily check the IRCTC train running status and locate your train.</p>

            <p className='my-2'>Below is the additional information, you get to know:</p>
            <ul className="list-disc ml-5 space-y-1 text-[14px]">
              <li>
                The total distance covered by the train and the remaining distance to the destination station (in km).
              </li>
              <li>
                Platform numbers for boarding at each station en route.
              </li>
              <li>
                Estimated arrival and departure times at all stations, along with any delays, enabling live train status tracking.
              </li>
              <li>
                The time difference between the scheduled and the actual arrival times at each station.
              </li>
              <li>
                The total number of scheduled halts, the distance between each halt, and the duration of each halt.
              </li>
              <li>
                A list of all intermediate stations between two locations when tracking the running status of your train.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-black">How to Check Train Running Status?</h2>
            <p className="mb-2 text-[14px]">You can track IRCTC live train status in the following ways:</p>

            <ul className="list-decimal ml-5 space-y-2 ">
              <li><span className='font-semibold my-2 text-black  text-[16px]'>Check Current Running Status of Train on the ixigo Website</span>
                <ol className="list-none pl-6 space-y-2">
                  <li>
                    <strong>Step 1:</strong> Visit the trains page of the ixigo website and select&quot;Running Status&quot;.
                  </li>
                  <li>
                    <strong>Step 2:</strong> Enter your five-digit train number or train name and click search.
                  </li>
                  <li>
                    <strong>Step 3:</strong> Your train live running status will be displayed immediately.
                  </li>
                </ol>
              </li>

              <li><span className='font-semibold my-2 text-black  text-[16px]'>Check Railway Running Status on the ixigo Mobile App</span>
                <ol className="list-none pl-6 space-y-2">
                  <li>
                    <strong>Step 1:</strong> Open the ixigo Trains app and tap on the ‘Running Status’ icon.
                  </li>
                  <li>
                    <strong>Step 2:</strong>   Enter your five-digit train number/name and proceed. You can also search using the origin and destination station names.
                  </li>
                  <li>
                    <strong>Step 3:</strong> Your train running status will appear on the screen.
                  </li>
                </ol>
              </li>

              <li><span className='font-semibold my-2 text-black  text-[16px]'>Check Train Running Status on the NTES (National Train Enquiry System)</span>
                <ol className="list-none pl-6 space-y-2">
                  <li>
                    <strong>Step 1:</strong> Go to the NTES website and click on the ‘Spot Your Train’ tab.
                  </li>
                  <li>
                    <strong>Step 2:</strong> Enter your five-digit train number/train name.
                  </li>
                  <li>
                    <strong>Step 3:</strong> Select the travel date from the source railway station.
                  </li>
                  <li>
                    <strong>Step 4:</strong> View the running status, arrival and departure times, boarding platform, and real-time delays.
                  </li>
                </ol>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h1 className="text-xl font-bold mb-4 text-black">What is NTES?</h1>
            <p className="my-2" >The <span className='font-semibold'>National Train Enquiry System (NTES)</span>, managed by the Indian Railways, helps travellers access real-time information about train schedules. It includes features such as Spot Your Train, Live Station, Train Schedule, and Trains B/W Stations. Know more <Link href="https://enquiry.indianrail.gov.in/mntes" target='_blank' className='text-blue-600 font-semibold'>here</Link>.</p>

            <p className='my-2'>The <span className="font-semibold">Live Train Tracker</span> is especially useful as it provides the real-time location of a train. Here are the different ways to use this system:</p>
            <ul className="list-decimal ml-5 space-y-1 text-[14px]">
              <li>
                Tap on the <span className="font-semibold">Live Station</span> tab to check all trains departing from or arriving at a station within the next 2–8 hours.
              </li>
              <li>
                Use the <span className="font-semibold">Train Schedule</span> tab to check the schedule of a specific train for a selected date.
              </li>
              <li>
                Tap on the <span className="font-semibold">Train B/W Stations</span> tab to find all operational trains between two stations. You can filter results by 25 train types.
              </li>
              <li>
                Tap on the <span className="font-semibold">More Info</span> tab to access the Station Timetable, Average Delays, and information about Heritage Trains.
              </li>
            </ul>
            <p className='my-2'>Next time you opt for <Link href="/" className='text-blue-600 font-semibold'>train ticket booking</Link> (or <Link href="/tatkal-reservation" className='text-blue-600 font-semibold'>tatkal ticket booking</Link>), use ixigo money to save on tickets. Once you have checked the current running status of your train, you can also make a <Link href="/pnr-status-enquiry" className='text-blue-600 font-semibold'>PNR status</Link> enquiry. On ixigo, you can also <Link href="/seat-availability" className='text-blue-600 font-semibold'>check seat availability</Link>  in your train.</p>
          </section>

          <FAQSection />
        </div>

        <div className='md:w-1/5 w-full flex flex-col mb-4 gap-8 min-h-screen' >
          <RailwayInfo />

          <TopTrainRoutes />
        </div>
      </main>


    </div>
  );
}
