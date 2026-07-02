"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Form, Label, ListBox, Select } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaStar } from "react-icons/fa";

const ReviewForm = ({ doctors, user }) => {
  const router = useRouter()
    const [rating, setRating] = useState(0);
    const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const { data: tokenData } = await authClient.token();

  const doctorId = formData.get("doctorId");

  const doctor = doctors.find((d) => d._id === doctorId);

  const review = {
    patientId: user.id,
    patientName: user.name,
    patientImage: user.image,

    doctorId,
    doctorName: doctor.name,
    specialization: doctor.specialization,
    doctorImage: doctor.image,

    rating,

    comment: formData.get("review"),
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reviews`,
      {
        method: "POST",
        cache : "no-store",
        headers: {
          "Content-Type": "application/json",
          authorization : `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(review),
      }
    );

    const data = await res.json();

    if (data.success) {
      toast.success(data.message);

      e.target.reset();

      setRating(0);

      setTimeout(() => {
        router.refresh();
      }, 1000);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error("Something went wrong!");
  }
};
  return (
    <div className="bg-white border rounded-3xl p-6 shadow-sm h-fit">
      <h2 className="text-lg font-bold uppercase">
        Submit Review
      </h2>

      <Form onSubmit={handleSubmit} className="mt-6 space-y-5">
        {/* Doctor */}
        <div className="w-full">
          <label className="text-xs uppercase font-semibold text-slate-500 mb-2 block">
            Select Practitioner
          </label>

           <Select
    name="doctorId"
    className="w-full"
    placeholder="Select a Doctor"
  >
    <Label>Select Practitioner</Label>

    <Select.Trigger>
      <Select.Value />
      <Select.Indicator />
    </Select.Trigger>

    <Select.Popover>
      <ListBox>
        {doctors?.map((doctor) => (
          <ListBox.Item
            key={doctor._id}
            id={doctor._id}
            textValue={doctor.name}
          >
            {doctor.name} ({doctor.specialization})

            <ListBox.ItemIndicator />
          </ListBox.Item>
        ))}
      </ListBox>
    </Select.Popover>
  </Select>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
  {[1, 2, 3, 4, 5].map((star) => (
    <FaStar
      key={star}
      onClick={() => setRating(star)}
      className={`text-3xl cursor-pointer transition ${
        star <= rating ? "text-yellow-400" : "text-gray-300"
      }`}
    />
  ))}
</div>

        {/* Review */}
        <div className="w-full">
          <label className="text-xs uppercase font-semibold text-slate-500 mb-2 block">
            Feedback Comments
          </label>

          <textarea
            name="review"
            rows={5}
            placeholder="Write your feedback..."
            className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-sky-500 resize-none"
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 w-full">
           <Button
    type="button"
    className="h-11 w-full rounded-xl border border-slate-300 bg-white text-slate-700 font-semibold hover:bg-slate-100 transition"
  >
    Cancel
  </Button>

  <Button
    type="submit"
    className="h-11 w-full rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
  >
    Submit Review
  </Button>
        </div>
      </Form>
      <Toaster/>
    </div>
  );
};

export default ReviewForm;