import { auth } from '@/lib/auth';
import { Button, Chip, Table } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { format } from "date-fns";


const page = async () => {
    const session = await auth.api.getSession({
                 headers: await headers(),
               });
             
               const user = session?.user;
               const patientRes = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments?patientId=${user.id}`,
  {
    cache: "no-store",
  }
);

if (!patientRes.ok) {
  throw new Error("Failed to fetch payments");
}

const payments = await patientRes.json();

console.log("Payments:", payments);
    return (
        <div className='space-y-8'>
            <div className="bg-white border rounded-3xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Left */}
              <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-widest text-sky-600 font-bold">
                  Patient Administrative Portal
                </p>
            
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 leading-tight">
                  Welcome back, {user?.name}
                </h1>
            
                <p className="text-sm sm:text-base text-gray-500 mt-2 break-all md:break-normal">
                  Identity: {user?.id} <br className="md:hidden" />
                  <span className="hidden md:inline"> • </span>
                  Role: {user?.role}
                </p>
              </div>
            
              {/* Right */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4">
                <div className="text-center sm:text-right">
                  <p className="text-xs uppercase text-gray-400 font-semibold">
                    Health Identity Verified
                  </p>
            
                  <p className="text-lg font-bold text-green-600">
                    HIPAA Secured
                  </p>
                </div>
            
                <Image
                  src={user?.image}
                  alt={user?.name}
                  width={70}
                  height={70}
                  className="rounded-2xl border object-cover"
                />
              </div>
            </div>
            {payments.length === 0 ? <div className="bg-white border border-slate-200 rounded-3xl p-12 flex flex-col items-center justify-center text-center">
      <div className="h-20 w-20 rounded-full bg-green-50 flex items-center justify-center">
        <FaMoneyCheckAlt className="text-4xl text-green-600" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-900">
        No Payment History Found
      </h2>

      <p className="mt-3 max-w-md text-slate-500 leading-relaxed">
        You have not completed any consultation payments yet.
        Once an appointment payment is successfully processed,
        your transaction history will appear here.
      </p>

      <Link
        href="/find-doctor"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700"
      >
        Find a Doctor
      </Link>
    </div>
:
<div>
  <Table className="rounded-3xl border border-slate-200 bg-white shadow-sm">
  <Table.ScrollContainer>
    <Table.Content
      aria-label="Payment History"
      className="min-w-[1050px]"
    >
      <Table.Header>
        <Table.Column isRowHeader>TRANSACTION DATE</Table.Column>
        <Table.Column>PHYSICIAN CONSULTANT</Table.Column>
        <Table.Column>TRANSACTION ID</Table.Column>
        <Table.Column>AMOUNT</Table.Column>
        <Table.Column>PAYMENT STATUS</Table.Column>
        
      </Table.Header>

      <Table.Body>
        {payments.map((payment) => (
          <Table.Row key={payment._id}>
            <Table.Cell>
              <div className="text-sm font-medium text-slate-700">
                {payment.createdAt
                  ? format(new Date(payment.createdAt), "MMM dd, yyyy")
                  : "N/A"}
              </div>
            </Table.Cell>

            <Table.Cell>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800">
                  Dr. {payment.doctorName}
                </h3>

                <p className="text-sm text-slate-500">
                  Specialist Consultation
                </p>
              </div>
            </Table.Cell>

            <Table.Cell>
              <span className="font-mono text-xs text-slate-500">
                {payment.paymentIntentId}
              </span>
            </Table.Cell>

            <Table.Cell>
              <span className="text-xl font-bold text-slate-900">
                ${payment.amount}
              </span>
            </Table.Cell>

            <Table.Cell>
              <Chip
                size="sm"
                variant="flat"
                className={`font-semibold ${
                  payment.paymentStatus === "Paid"
                    ? "bg-green-100 text-green-700"
                    : payment.paymentStatus === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {payment.paymentStatus}
              </Chip>
            </Table.Cell>

            
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Content>
  </Table.ScrollContainer>
</Table>
</div>}
        </div>
  );

};

export default page;