"use client";

import { Button, Chip, Table } from "@heroui/react";
import { useRouter } from "next/navigation";

import React from "react";
import toast, { Toaster } from "react-hot-toast";

const ManageDoctor = ({ doctors }) => {
    const router = useRouter();

const updateDoctorStatus = async (id, status) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctors/${id}`,
      {
        method: "PATCH",
        cache : "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      }
    );

    const data = await res.json();

    if (data.success) {
      toast.success(`Doctor ${status} Successfully`);
      router.refresh();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};
  return (
    <div className="bg-white shadow p-6 rounded-2xl">
      {/* Header */}
      <div className="space-y-2 mb-7">
        <h2 className="text-2xl font-bold">
          Doctor Management
        </h2>

        <p className="text-slate-600">
          Review doctor profiles, verify medical credentials, and manage
          doctor accounts.
        </p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content
            aria-label="Doctor Management"
            className="min-w-full"
          >
            <Table.Header>
              <Table.Column isRowHeader>
                Doctors
              </Table.Column>

              <Table.Column>
                Email
              </Table.Column>

              <Table.Column>
                Status
              </Table.Column>

              <Table.Column className="text-center">
                Action
              </Table.Column>
            </Table.Header>

            <Table.Body>
              {doctors?.map((doctor) => (
                <Table.Row key={doctor._id}>
                  <Table.Cell>
                    <span className="font-semibold">
                      {doctor.name}
                    </span>
                  </Table.Cell>

                  <Table.Cell>
                    {doctor.email}
                  </Table.Cell>


                  <Table.Cell>
                    <Chip
                      className={`capitalize font-semibold ${
                        doctor.status === "Verified"
                          ? "bg-green-100 text-green-700"
                          : doctor.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : doctor.status === "Rejected"
                          ? "bg-red-100 text-red-700"
                          : doctor.status === "Suspended"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {doctor.status}
                    </Chip>
                  </Table.Cell>

                  <Table.Cell>
  <div className="flex justify-center gap-2">

    {doctor.status !== "Verified" && (
      <Button
        onPress={() =>
          updateDoctorStatus(doctor._id, "Verified")
        }
        className="bg-emerald-600 text-white rounded-xl py-1 px-3"
      >
        Verify
      </Button>
    )}

    {doctor.status === "Verified" && (
      <Button
        onPress={() =>
          updateDoctorStatus(doctor._id, "Pending")
        }
        className="bg-amber-500 text-white rounded-xl py-1 px-3"
      >
        Unverify
      </Button>
    )}

    <Button
      onPress={() =>
        updateDoctorStatus(
          doctor._id,
          doctor.status === "Suspended"
            ? "Verified"
            : "Suspended"
        )
      }
      className={`rounded-xl py-1 px-3 text-white ${
        doctor.status === "Suspended"
          ? "bg-sky-600"
          : "bg-red-600"
      }`}
    >
      {doctor.status === "Suspended"
        ? "Activate"
        : "Suspend"}
    </Button>

  </div>
</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
      <Toaster/>
    </div>
  );
};

export default ManageDoctor;