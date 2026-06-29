import {
  FaUsers,
  FaCalendarCheck,
  FaStar,
} from "react-icons/fa";

export default function DashboardStats({
  totalPatients,
  totalAppointments,
  averageRating,
}) {
  const stats = [
    {
      title: "Unique Patients",
      value: `${totalPatients} Patients`,
      icon: FaUsers,
      color: "text-blue-500",
    },
    {
      title: "Appointments",
      value: `${totalAppointments} Bookings`,
      icon: FaCalendarCheck,
      color: "text-green-500",
    },
    {
      title: "Average Rating",
      value: `${averageRating} / 5`,
      icon: FaStar,
      color: "text-yellow-500",
    },
  ];

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