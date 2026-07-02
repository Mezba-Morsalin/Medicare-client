"use client";

import { authClient } from "@/lib/auth-client";
import { Table, Avatar, Chip } from "@heroui/react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

export default function DoctorAppointmentsTable({ appointments }) {
    const router = useRouter()
   const updateStatus = async (id, status) => {
    const {data : tokenData} = await authClient.token()
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/my/payments/${id}`,
      {
        method: "PATCH",
        cache : "no-store",
        headers: {
          "Content-Type": "application/json",
          authorization : `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify({
          appointmentStatus: status,
        }),
      }
    );

    const data = await res.json();

    if (data.success) {
      setTimeout(() => {
        router.refresh();
      }, 500); // 0.5 second delay
    }
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className="w-full overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
      <Table>
        <Table.ScrollContainer className="overflow-x-auto">
          <Table.Content
            aria-label="Doctor Appointments"
            className="min-w-[1200px]"
          >
            <Table.Header>
              <Table.Column isRowHeader>PATIENT</Table.Column>
              <Table.Column>EMAIL</Table.Column>
              <Table.Column>DATE</Table.Column>
              <Table.Column>TIME</Table.Column>
              <Table.Column>SYMPTOMS</Table.Column>
              <Table.Column>PAYMENT</Table.Column>
              <Table.Column>APPOINTMENT</Table.Column>
              <Table.Column>FEE</Table.Column>
              <Table.Column>ACTION</Table.Column>
            </Table.Header>

            <Table.Body emptyContent="No appointments found">
              {appointments.map((appointment) => (
                <Table.Row key={appointment._id}>
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={appointment.patientImage}
                        name={appointment.patientName}
                        className="shrink-0"
                      />

                      <div>
                        <h4 className="font-semibold text-slate-800">
                          {appointment.patientName}
                        </h4>

                        <p className="text-xs text-slate-500">
                          Patient
                        </p>
                      </div>
                    </div>
                  </Table.Cell>

                  <Table.Cell>
                    <span className="text-slate-600">
                      {appointment.patientEmail}
                    </span>
                  </Table.Cell>

                  <Table.Cell>
                    {format(
                      new Date(appointment.appointmentDate),
                      "dd MMM yyyy"
                    )}
                  </Table.Cell>

                  <Table.Cell>
                    {appointment.appointmentSlot}
                  </Table.Cell>

                  <Table.Cell>
                    <p className="max-w-[220px] line-clamp-2 text-slate-600">
                      {appointment.symptoms}
                    </p>
                  </Table.Cell>

                  <Table.Cell>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      {appointment.paymentStatus}
                    </span>
                  </Table.Cell>

                  <Table.Cell>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        appointment.appointmentStatus === "Approved"
                          ? "bg-green-100 text-green-700"
                          : appointment.appointmentStatus === "Rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {appointment.appointmentStatus}
                    </span>
                  </Table.Cell>

                  <Table.Cell>
                    <span className="font-bold text-sky-600">
                      ${appointment.amount}
                    </span>
                  </Table.Cell>
                  <Table.Cell>
  {appointment.appointmentStatus === "Pending" ? (
    <div className="flex gap-2">
      <button
        onClick={() =>
          updateStatus(appointment._id, "Approved")
        }
        className="rounded-lg bg-green-600 px-3 py-1 text-xs font-semibold text-white hover:bg-green-700"
      >
        Accept
      </button>

      <button
        onClick={() =>
          updateStatus(appointment._id, "Rejected")
        }
        className="rounded-lg bg-red-600 px-3 py-1 text-xs font-semibold text-white hover:bg-red-700"
      >
        Reject
      </button>
    </div>
  ) : (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        appointment.appointmentStatus === "Approved"
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {appointment.appointmentStatus}
    </span>
  )}
</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}