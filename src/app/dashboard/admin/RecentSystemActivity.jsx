"use client";

import { Badge, Table } from "@heroui/react";

const RecentSystemActivity = ({ payments }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
      <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900 mb-6">
        Recent System Activity Ledgers
      </h2>

      <Table>
  <Table.ScrollContainer>
    <Table.Content
      aria-label="Recent System Activity"
      className="min-w-[1000px]"
    >
      <Table.Header>
        <Table.Column isRowHeader>DATE</Table.Column>
        <Table.Column>PATIENT</Table.Column>
        <Table.Column>DOCTOR</Table.Column>
        <Table.Column>DESCRIPTION</Table.Column>
        <Table.Column>STATUS</Table.Column>
        <Table.Column>AMOUNT</Table.Column>
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

            <Table.Cell>
              <Badge color="success" variant="flat">
                {payment.paymentStatus}
              </Badge>
            </Table.Cell>

            <Table.Cell className="font-bold text-emerald-600">
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