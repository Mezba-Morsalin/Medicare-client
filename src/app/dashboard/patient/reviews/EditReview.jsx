"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Form,
  Modal,
  Surface,
  Select,
  Label,
  ListBox,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { FaStar } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const EditReview = ({ doctors, review }) => {
  const router = useRouter();

  const [rating, setRating] = useState(review.rating);

  const handleSubmit = async (e) => {
    e.preventDefault();
     e.stopPropagation();
    const { data: tokenData } = await authClient.token();

  const formData = new FormData(e.target);

  const updatedReview = {
    doctorId: review.doctorId,
    doctorName: review.doctorName,
    doctorImage: review.doctorImage,
    specialization: review.specialization,
    rating,
    comment: formData.get("review"),
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reviews/${review._id}`,
      {
        method: "PATCH",
        cache : "no-store",
        headers: {
          "Content-Type": "application/json",
          authorization : `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(updatedReview),
      }
    );

    const data = await res.json();

    if (data.success) {
      toast.success(data.message);

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
    <Modal>
      <Button className="px-5 py-2 rounded-xl bg-sky-50 text-sky-600 hover:bg-sky-100 font-semibold flex items-center gap-2">
        <FiEdit />
        Edit Review
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />

            <Modal.Body className="p-6">
              <Surface>
                <Form onSubmit={handleSubmit} className="space-y-5">

                  {/* Doctor */}
                  <div className="w-full">
                    <label className="text-xs uppercase font-semibold text-slate-500 mb-2 block">
                      Practitioner
                    </label>

                    <Select
                      name="doctorId"
                      defaultSelectedKeys={[review.doctorId]}
                      isDisabled
                    >
                      <Label>Select Practitioner</Label>

                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>

                      <Select.Popover>
                        <ListBox>
                          {doctors.map((doctor) => (
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
                  <div>
                    <label className="text-xs uppercase font-semibold text-slate-500 mb-2 block">
                      Rating
                    </label>

                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          onClick={() => setRating(star)}
                          className={`text-3xl cursor-pointer transition ${
                            star <= rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review */}
                  <div className="w-full">
                    <label className="text-xs uppercase font-semibold text-slate-500 mb-2 block">
                      Feedback
                    </label>

                    <textarea
                      name="review"
                      rows={5}
                      defaultValue={review.comment}
                      className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-sky-500 resize-none"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-3 w-full">
                    <Button
                      type="button"
                      slot="close"
                      className="bg-gray-100 text-gray-700 w-full"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      slot="close"
                      className="bg-sky-600 text-white w-full"
                    >
                      Update Review
                    </Button>
                  </div>

                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
      <Toaster/>
    </Modal>
  );
};

export default EditReview;