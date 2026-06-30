"use client"
import { Button, Chip, Table } from '@heroui/react';

import React from 'react';


const PaymentTable = ({payments, totalPayments, totalRevenue}) => {

    return (
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-8 md:mb-0 ">
        <div className='space-y-2 mb-6'>
            <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900">
        Stripe Consultation Financial Ledgers
      </h2>
      <p className='text-slate-600'>Audit transaction hashes, process ledger summaries, and verify co-pay receipt states.</p>
        </div>
      <div className='bg-green-100 mb-6 text-center p-4 rounded-xl border border-green-500'>
        <p className='text-green-600'>STRIPE REVENUE</p>
        <h3 className='text-green-700 text-xl font-bold'>${totalRevenue}</h3>
      </div>
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
        {payments?.map((payment) => (
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

export default PaymentTable;