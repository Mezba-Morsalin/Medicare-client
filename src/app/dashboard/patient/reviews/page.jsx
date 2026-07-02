import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaRegStar } from 'react-icons/fa6';
import ReviewForm from './ReviewForm';
import EditReview from './EditReview';
import DeleteReview from './DeleteReview';

const page = async () => {
    const session = await auth.api.getSession({
                     headers: await headers(),
                   });
                 
                   const user = session?.user;

                   const tokenData = await auth.api.getToken({
        headers: await headers(),
      });

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/all/doctors`,{
        cache : "no-store",
         headers : {
                authorization: `Bearer ${tokenData.token}`,
      }
    });
    const data = await res.json()
    const doctors = data.data

    const reviewRes = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reviews?patientId=${user.id}`,
  {
    cache: "no-store",
     headers : {
                authorization: `Bearer ${tokenData.token}`,
      }
  }
);

const reviewData = await reviewRes.json();

const reviews = reviewData.data;
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
                                Health Identity
                              </p>
                        
                              <p
  className={`font-bold ${
    user.status === "Active"
      ? "text-green-600"
      : user.status === "Suspended"
      ? "text-red-600"
      : "text-amber-600"
  }`}
>
  {user.status}
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
                        <div className="grid lg:grid-cols-3 gap-6">
  {/* Left Side */}
  <div className="lg:col-span-2">
    {reviews.length === 0 ? (
      <div className="bg-white border border-slate-200 rounded-3xl p-10">
        <div className="flex flex-col items-center justify-center text-center py-12">
          <div className="w-24 h-24 rounded-full bg-yellow-50 border border-yellow-100 flex items-center justify-center">
            <FaRegStar className="text-5xl text-yellow-500" />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-slate-900">
            No Reviews Found
          </h2>

          <p className="mt-3 max-w-xl text-slate-500 leading-7">
            No reviews available yet. Once you complete an appointment, you
            will be able to rate your doctor and share your experience. All of
            your submitted reviews will be displayed here for future reference.
          </p>

          <Link href="/dashboard/patient">
            <Button className="mt-8 bg-sky-600 rounded-xl text-white px-6">
              <FaArrowLeft />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    ) : (
      <>
        <h2 className="text-sm font-bold uppercase tracking-widest mb-4">
          Submitted Testimonials & Feedback ({reviews.length})
        </h2>

        <div className="space-y-5">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white border rounded-3xl p-6 shadow-sm"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <Image
                    src={review.doctorImage}
                    alt={review.doctorName}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full border object-cover"
                  />

                  <div>
                    <h3 className="text-xl font-bold text-slate-800">
                      {review.doctorName}
                    </h3>

                    <p className="uppercase text-sky-600 text-sm font-medium">
                      {review.specialization}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-yellow-500 text-xl">
                    {"⭐".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>

                  <p className="text-xs text-slate-400 mt-1">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Review */}
              <div className="mt-6 bg-slate-50 rounded-2xl p-5 italic text-slate-500">
                {review.comment}
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-5">
                <EditReview doctors = {doctors} review = {review}/>

                <DeleteReview doctors = {doctors} review = {review}/>
              </div>
            </div>
          ))}
        </div>
      </>
    )}
  </div>

  {/* Right Side - Always Visible */}
  <div className="lg:col-span-1">
    <ReviewForm doctors={doctors} user={user} />
  </div>
</div>
        </div>
    );
};

export default page;