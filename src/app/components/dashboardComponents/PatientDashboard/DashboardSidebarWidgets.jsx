import Image from "next/image";
import { FaChevronRight, FaHeart } from "react-icons/fa";

export default function DashboardSidebarWidgets() {
  return (
    <div className="bg-white border rounded-3xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold uppercase flex items-center gap-2">
          <FaHeart className="text-red-500" />
          Favorite Clinicians
        </h2>

        <button className="text-sky-600 font-semibold">
          Manage
        </button>
      </div>

      <div className="space-y-4">
        <div className="border rounded-2xl p-4 flex items-center justify-between">
          <div className="flex gap-3">
            <Image
              src="https://i.ibb.co.com/My1srpNw/Dr-Benjamin-Lewis.png"
              alt="doctor"
              width={50}
              height={50}
              className="rounded-xl"
            />

            <div>
              <h3 className="font-semibold">
                Dr. Adrian Vance, MD
              </h3>

              <p className="text-sm text-sky-600">
                Cardiology
              </p>

              <p className="text-xs text-gray-400">
                Metropolitan Heart & Vascular Institute
              </p>
            </div>
          </div>

          <FaChevronRight className="text-gray-400" />
        </div>

        <div className="border rounded-2xl p-4 flex items-center justify-between">
          <div className="flex gap-3">
            <Image
              src="https://i.ibb.co.com/DHgxN0Ym/Dr-Daniel-Harris.png"
              alt="doctor"
              width={50}
              height={50}
              className="rounded-xl"
            />

            <div>
              <h3 className="font-semibold">
                Dr. Marcus Brody, DDS
              </h3>

              <p className="text-sm text-sky-600">
                Dentistry
              </p>

              <p className="text-xs text-gray-400">
                Stanford Advanced Dental Care
              </p>
            </div>
          </div>

          <FaChevronRight className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}