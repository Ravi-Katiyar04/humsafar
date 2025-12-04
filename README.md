# HumSafar - IRCTC Train Booking Platform

A modern, user-friendly Next.js application for booking IRCTC train tickets, checking PNR status, live train running status, seat availability, and more.

## 🚀 Features

### Core Functionality
- **IRCTC Train Booking**: Search and book train tickets with multiple classes and quotas
- **PNR Status Enquiry**: Real-time PNR status tracking with detailed passenger information
- **Live Train Running Status**: Track train location and delays in real-time
- **Seat Availability**: Check seat availability across different classes and dates
- **Tatkal Reservation**: Book last-minute Tatkal tickets
- **Platform Locator**: Find train platforms at stations

### Advanced Features
- **Vande Bharat Express**: Dedicated section for semi-high-speed trains
- **Travel Guarantee**: Confirmed tickets or 3X refund guarantee
- **Fare Calendar**: Compare fares across different dates
- **Train Fare Information**: Detailed fare breakdowns and calculations
- **Cancellation Charges**: View IRCTC cancellation policies
- **Train Search**: Search by train number, name, or station
- **User Bookings**: View and manage previous bookings
- **Responsive Design**: Mobile-optimized interface

## 🛠️ Tech Stack

- **Frontend**: React, Next.js 14, Tailwind CSS
- **Backend**: Node.js, Next.js API Routes
- **Database**: MongoDB
- **Payment Gateway**: Razorpay
- **Authentication**: Custom session-based auth
- **UI Components**: FontAwesome Icons, React Toastify
- **Utilities**: Axios, Date-fns, jsPDF, html2canvas

## 📁 Project Structure

```
humsafar/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.js            # Home page
│   │   ├── layout.js          # Root layout
│   │   ├── api/               # API routes
│   │   ├── search/            # Train search results
│   │   ├── booking/           # Booking pages
│   │   ├── payment/           # Payment page
│   │   ├── ticket/            # Ticket display
│   │   ├── pnr-status-enquiry/# PNR status pages
│   │   ├── running-status/    # Train running status
│   │   ├── seat-availability/ # Seat availability
│   │   ├── tatkal-reservation/# Tatkal booking
│   │   ├── vande-bharat/      # Vande Bharat trains
│   │   └── user/              # User profile
│   ├── components/            # React components
│   ├── models/                # MongoDB schemas
│   ├── lib/                   # Utility functions
│   ├── utils/                 # Helpers and middleware
│   └── data.js                # FAQ and static data
├── public/                    # Static assets
├── package.json
└── README.md
```
---

## 🔑 Key Components

### 📄 Pages  
| Page | Path | Description |
|------|------|-------------|
| **Home** | `/` | Main booking interface |
| **Search Results** | `/search/[src]/[dstn]/[date]/[trainNo]/[class]/[quota]` | Train search results |
| **Payment** | `/payment` | Razorpay payment integration |
| **Ticket** | `/ticket/[ticketId]` | Electronic Reservation Slip (ERS) |
| **PNR Status** | `/pnr-status-enquiry` | PNR enquiry page |
| **Running Status** | `/running-status` | Live train tracking |
| **User Profile** | `/user/profile` | User booking history & preferences |

---

## 🧩 Components  
| Component | Description |
|-----------|-------------|
| **Booking.jsx** | Main search form |
| **TrainFilters.jsx** | Filter trains by class, quota, time |
| **TrainDetailsCard.jsx** | Displays detailed train information |
| **JourneyCard.jsx** | Journey summary view |
| **FareSummary.jsx** | Fare breakdown component |
| **AddTraveller.jsx** | Add passenger details |
| **PNRDetailsCard.jsx** | PNR information UI |

---

## 🗄️ Database Models (MongoDB)

### 👤 **User**
- Email, password, profile info  
- Authentication tokens  

### 🧾 **TempBooking**
- Temporary booking (30-min TTL)  
- Passenger list  
- Train + fare info  
- Payment status tracking  

### 🎟️ **Ticket**
- Confirmed ticket information  
- Passenger list  
- Journey details  
- Fare details  

### 🚉 **Train**
- Train master data  
- Routes & schedules  
- Classes & quotas  

---

## 🔌 API Endpoints

### 🧑‍💻 **Authentication**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/signup` | User registration |
| POST | `/api/login` | User login |
| POST | `/api/logout` | Logout user |

---

### 🚆 **Train Data**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/searchTrainQuery` | Search trains |
| GET | `/api/liveStatusAndDetails` | Live train status |
| GET | `/api/pnrStatus` | PNR enquiry |
| GET | `/api/checkSeatAvailability` | Seat availability |
| GET | `/api/searchStation` | Station autocomplete search |

---

### 🧾 **Booking**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/booking/createBooking` | Create booking |
| GET | `/api/booking/user` | Get user bookings |
| PUT | `/api/booking/updateBooking` | Update booking |

---

### 💳 **Payment (Razorpay)**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/payment/order` | Create Razorpay order |
| POST | `/api/payment/verify` | Verify payment |

---

### 🎟️ **Ticket**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tickets/[ticketId]` | Get ticket details |
| POST | `/api/tickets/download` | Download ticket as PDF |

---

## 📌 Features  
- 🔍 Train search by station, date, quota, class  
- 👤 User authentication & profile  
- 🧳 Traveller management  
- 🎟️ Real IRCTC-style ticket (ERS) generation  
- 📡 Live train running status  
- 🔢 PNR enquiry & detailed view  
- 💳 Online payment via Razorpay  
- 📄 Ticket PDF download  
- ⏳ 30-minute temporary booking hold  
- 📚 Booking history  


## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- MongoDB
- Razorpay account

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd humsafar
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create `.env.local`:
```env
MONGODB_URI=mongodb://localhost:27017/humsafar
NEXT_PUBLIC_RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Run development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📦 Build & Deploy

### Build for production
```bash
npm run build
npm run start
```

### 🚀 Deploy on Render

Render is one of the best free platforms for deploying full-stack Next.js applications, especially when your project includes server components, API routes, or integrations like MongoDB and Razorpay.

#### 🔧 Steps to Deploy on Render

1. Push your project to GitHub.
2. Go to **https://render.com** and create an account.
3. Click **New → Web Service**.
4. Connect your GitHub repository.
5. Select your Next.js project.
6. Use the following settings:

**Environment:**  
- Runtime: `Node`  
- Build Command: `npm install && npm run build`  
- Start Command: `npm run start`  
- Root Directory: *(leave empty unless your app is inside a folder)*  

**Environment Variables:**  
Add all required env variables (`NEXT_PUBLIC_`, `MONGODB_URI`, `RAZORPAY_KEY`, etc.).

7. Click **Deploy** — Render will automatically build and host your Next.js app.

#### 📘 Documentation

For more details, refer to the official Render deployment guides:  
- https://render.com/docs/deploy-nextjs
- https://render.com/docs/web-services

Render automatically handles:  
- Global CDN  
- Free SSL  
- Automatic Git auto-deploys  
- Background build logs  
- Server-side rendering support  

---


## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - interactive Next.js tutorial
- [Next.js GitHub](https://github.com/vercel/next.js) - feedback and contributions welcome

## 📝 Key Components

- **Booking**: Main search and booking interface
- **TrainFilters**: Filter trains by class, quota, departure time
- **TrainDetailsCard**: Detailed train information
- **FareSummary**: Fare breakdown and charges
- **AddTraveller**: Passenger details form
- **PNRDetailsCard**: PNR status and journey info

## 🔐 Security

- Session-based authentication
- Password hashing
- Protected API routes
- Input validation
- CORS configuration

## 🎨 Styling

- **Tailwind CSS** for responsive design
- Mobile-first approach
- Smooth transitions and animations

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 🙏 Acknowledgments

- Rapis Api for train data APIs
- Razorpay for payment processing
- Next.js and React communities

---

**HumSafar** - Your trusted IRCTC booking partner! 🚂✨