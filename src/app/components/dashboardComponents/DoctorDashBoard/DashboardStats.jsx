import {
  FaUsers,
  FaCalendarCheck,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    title: "Unique Clients",
    value: "1 Medical Records",
    icon: FaUsers,
    color: "text-blue-500",
  },
  {
    title: "Roster Pending",
    value: "0 Inquiries",
    icon: FaCalendarCheck,
    color: "text-green-500",
  },
  {
    title: "Average Testimonials",
    value: "5.0 Rating",
    icon: FaStar,
    color: "text-purple-500",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white border rounded-3xl p-5 flex items-center gap-4"
          >
            <div className={`text-2xl ${item.color}`}>
              <Icon />
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">
                {item.title}
              </p>

              <h3 className="font-bold text-lg">
                {item.value}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}