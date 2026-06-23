import { FaStethoscope } from "react-icons/fa";

export default function DashboardHero() {
  return (
    <div className="rounded-3xl bg-sky-600 text-white p-8 flex justify-between items-start">
      <div>
        <div className="flex items-center gap-2 text-xs uppercase font-semibold opacity-90">
          <FaStethoscope />
          Licensed Clinical Practitioner
        </div>

        <h1 className="text-4xl font-bold mt-3">
          Greetings, Dr. Adrian Vance, MD!
        </h1>

        <p className="mt-4 text-white/90 max-w-2xl">
          Manage practice days, review scheduling requests,
          audit patient medical alerts, and publish active
          prescriptions.
        </p>
      </div>

      <div className="hidden md:block bg-sky-600 rounded-2xl px-5 py-4">
        <p className="text-xs font-semibold uppercase">
          Practice Branch
        </p>

        <p className="font-bold mt-1">
          Cardiology Suite
        </p>
      </div>
    </div>
  );
}