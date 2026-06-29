import {
  FaUserInjured,
  FaUserDoctor,
  FaCalendarCheck,
} from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";

const AdminStatCard = ({users, doctors, totalPayments, totalRevenue}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* Total Patients */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">
            <FaUserInjured className="text-3xl text-blue-600" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">
              Total Users
            </p>

            <h2 className="text-3xl font-bold mt-1">
              {users.length}
            </h2>

            <p className="text-slate-600 font-medium mt-1">
              Logged
            </p>
          </div>
        </div>
      </div>

      {/* Total Doctors */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-violet-50 flex items-center justify-center">
            <FaUserDoctor className="text-3xl text-violet-600" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">
              Total Doctors
            </p>

            <h2 className="text-3xl font-bold mt-1">
              {doctors.length}
            </h2>

            <p className="text-slate-600 font-medium mt-1">
              Doctors
            </p>
          </div>
        </div>
      </div>

      {/* Appointments */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center">
            <FaCalendarCheck className="text-3xl text-orange-500" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">
              Appointments
            </p>

            <h2 className="text-3xl font-bold mt-1">
              {totalPayments}
            </h2>

            <p className="text-slate-600 font-medium mt-1">
              Booked
            </p>
          </div>
        </div>
      </div>

      {/* Revenue */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center">
            <MdAttachMoney className="text-4xl text-emerald-600" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">
              Stripe Revenue
            </p>

            <h2 className="text-3xl font-bold mt-1 text-emerald-600">
              ${totalRevenue}
            </h2>

            <p className="text-slate-600 font-medium mt-1">
              Total Income
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStatCard;