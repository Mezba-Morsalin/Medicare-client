import { FaStar } from "react-icons/fa";

export default function DashboardFeedback() {
  return (
    <div className="bg-white border rounded-3xl p-6">
      <h2 className="font-bold uppercase text-sm mb-6 flex items-center gap-2">
        <FaStar className="text-yellow-500" />
        Recent Patient Feedback Testimonials
      </h2>

      <div className="border rounded-2xl p-4">
        <h3 className="font-semibold">
          Alice Miller
        </h3>

        <p className="text-sm text-gray-500 mt-2 italic">
          Dr. Vance is incredible! His explanation of my
          dynamic heart health was extremely easy to follow.
        </p>
      </div>
    </div>
  );
}