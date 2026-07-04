# 🏥 MediCare Connect

A full-stack healthcare appointment management platform where patients can easily find verified doctors, book appointments, receive prescriptions, make payments, and manage their healthcare journey online.

---

## 🌐 Live Website

🔗 Live Site: https://your-live-site.vercel.app

---

## 🚀 Features

### 👨‍⚕️ Patient Features

- User Authentication
- Search Doctors
- View Doctor Profiles
- Book Appointments
- Payment Integration
- View Payment History
- View Prescriptions
- Leave Doctor Reviews
- Update Profile

---

### 🩺 Doctor Features

- Doctor Registration
- Doctor Verification Status
- Dashboard Overview
- Manage Schedule
- View Appointments
- Create Prescriptions
- View Patient Reviews
- Update Professional Profile

---

### 👨‍💼 Admin Features

- Dashboard Overview
- Manage Users
- Suspend Users
- Delete Users
- Verify Doctors
- Reject Doctor Verification
- Manage Payments
- Analytics Dashboard

---

## 🛠️ Technologies Used

### Frontend

- Next.js 15
- React 19
- Tailwind CSS
- HeroUI
- React Icons
- React Hot Toast
- Better Auth
- React Spinners

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Database

- MongoDB Atlas

### Image Hosting

- ImgBB API

### Deployment

- Vercel (Client)
- Vercel / Render (Server)

---

## 📂 Project Structure

```
medicare-client/
│
├── app/
├── components/
├── lib/
├── public/
├── hooks/
└── ...

medicare-server/
│
├── routes/
├── middleware/
├── index.js
└── ...
```

---

## 🔐 Authentication

- Better Auth
- JWT Token
- Role Based Authorization

Roles:

- Patient
- Doctor
- Admin

---

## 📋 Main Modules

### Authentication

- Login
- Registration
- Google Login
- Logout

### Patient

- Appointment Booking
- Payment
- Reviews
- Prescription
- Profile Management

### Doctor

- Schedule Management
- Appointment Management
- Prescription Creation
- Profile Update

### Admin

- User Management
- Doctor Verification
- Payment Monitoring
- Analytics

---

## ⚙️ Environment Variables

### Client (.env.local)

```env
NEXT_PUBLIC_SERVER_URL=

NEXT_PUBLIC_IMGBB_API_KEY=

NEXT_PUBLIC_BETTER_AUTH_URL=
```

### Server (.env)

```env
PORT=

DB_USER=

DB_PASS=

JWT_SECRET=

BETTER_AUTH_SECRET=
```

---

## 💻 Installation

### Clone Repository

```bash
git clone https://github.com/Mezba-Morsalin/Medicare-client

git clone https://github.com/Mezba-Morsalin/Medicare-server
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

Client

```bash
npm run dev
```

Server

```bash
npm run start
```

---

## 📸 Screenshots

You can add screenshots here.

- Home Page
- Dashboard
- Appointment
- Doctor Profile
- Admin Dashboard

---

## 📦 Packages

### Frontend

- next
- react
- tailwindcss
- heroui
- react-hot-toast
- react-icons
- better-auth
- react-spinners

### Backend

- express
- mongodb
- cors
- dotenv
- jsonwebtoken

---

## 👨‍💻 Author

**Mezba Morsalin**

GitHub:
https://github.com/Mezba-Morsalin

LinkedIn:
https://www.linkedin.com/in/mezba-morsalin

---

## 📄 License

This project is developed for educational purposes.