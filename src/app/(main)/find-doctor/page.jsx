import FindDoctorClient from "./FindDoctorClient";


export const metadata = {
  title: "MediCare Connect - Find Doctor",
  description: "doctor",
};

const DoctorPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctors`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  const doctors = data.data;

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0 py-10">
      <div className="text-center mb-10">
        <p className="inline-block px-4 py-2 text-sm font-semibold uppercase tracking-wider bg-sky-50 text-sky-600 rounded-full border border-sky-200">
          Advanced Doctor Search
        </p>

        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">
          Find The <span className="text-sky-600">Right Specialist</span>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-slate-500">
          Search doctors by name or specialization and compare consultation
          fees, experience, and ratings to find the perfect healthcare
          professional.
        </p>
      </div>

      <FindDoctorClient doctors={doctors} />
    </div>
  );
};

export default DoctorPage;

