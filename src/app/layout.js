import { Inter } from "next/font/google";
import "./globals.css";
import Chatbot from "./components/Chatbot";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "MediCare Connect ",
  description: "Hospital Appointment & Healthcare Management System"
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
      data-theme="light"
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Chatbot/>
      </body>
    </html>
  );
}