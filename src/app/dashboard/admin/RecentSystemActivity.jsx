"use client";

import { Badge, Button, Chip, Table } from "@heroui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const RecentSystemActivity = ({ payments }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-8 md:mb-0 ">
        <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900 mb-6">
        Recent System Activity Ledgers
      </h2>
      <Link href="/dashboard/admin/payments"><Button className="bg-sky-600 text-white rounded-xl flex items-center gap-2 hover:bg-sky-700 transition duration-300">See All Payment Management <FaArrowRight/></Button></Link>
      </div>

      <Table>
  <Table.ScrollContainer>
    <Table.Content
      aria-label="Recent System Activity"
      className="min-w-full"
    >
      <Table.Header>
        <Table.Column isRowHeader>DATE</Table.Column>
        <Table.Column>PATIENT</Table.Column>
        <Table.Column>DOCTOR</Table.Column>
        <Table.Column>DESCRIPTION</Table.Column>
        <Table.Column className="text-center">
          STATUS
        </Table.Column>
        <Table.Column className="text-right">
          AMOUNT
        </Table.Column>
      </Table.Header>

      <Table.Body>
        {payments?.slice(0, 3).map((payment) => (
          <Table.Row key={payment._id}>
            <Table.Cell>
              {new Date(payment.appointmentDate).toLocaleDateString()}
            </Table.Cell>

            <Table.Cell>{payment.patientName}</Table.Cell>

            <Table.Cell>{payment.doctorName}</Table.Cell>

            <Table.Cell>
              Consultation booking fee cleared
            </Table.Cell>

            <Table.Cell className="text-center">
              <Chip
                color={
                  payment.paymentStatus?.toLowerCase() === "paid"
                    ? "success"
                    : payment.paymentStatus?.toLowerCase() === "pending"
                    ? "warning"
                    : "danger"
                }
                variant="soft"
                radius="full"
                className="capitalize"
              >
                {payment.paymentStatus}
              </Chip>
            </Table.Cell>

            <Table.Cell className="text-right font-semibold text-emerald-600">
              ${payment.amount}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Content>
  </Table.ScrollContainer>
</Table>
    </div>
  );
};

export default RecentSystemActivity;