"use client";

import { Button, Form, Input, Label, TextArea } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiImage } from "react-icons/fi";

export default function DoctorProfile({ doctor, token }) {
  const router = useRouter()
  const [logo, setLogo] = useState(null);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  let imageUrl = doctor?.image;

  try {
    // Upload new image if selected
    if (logo) {
      const imageData = new FormData();
      imageData.append("image", logo);

      const imageRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: imageData,
        }
      );

      const imageResult = await imageRes.json();

      if (!imageResult.success) {
        toast.error("Image upload failed");
        return;
      }

      imageUrl = imageResult.data.display_url;
    }

    const updateData = {
      name: formData.get("name"),
      hospital: formData.get("hospital"),
      specialization: formData.get("specialization"),
      experience: Number(formData.get("experience")),
      fee: Number(formData.get("fee")),
      degrees: formData.get("degrees"),
      description: formData.get("description"),
      image: imageUrl,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctors/${doctor._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateData),
      }
    );

    const data = await res.json();

    if (data.success) {
      toast.success("Profile updated successfully");

      // Refresh page data
      router.refresh()
    } else {
      toast.error(data.message || "Update failed");
    }
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong");
  }
};
  return (
   <div className="bg-white border rounded-3xl shadow-sm p-8">
  <div className="mb-8">
    <h2 className="text-3xl font-bold">
      Professional Information
    </h2>

    <p className="text-slate-500 mt-2">
      Your professional profile information.
    </p>
  </div>

  <Form onSubmit={handleSubmit}>
  <div className="space-y-8">

    {/* Basic Info */}
    <div>
      <h3 className="text-lg font-semibold mb-5">
        Basic Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  <div className="flex flex-col gap-2">
    <Label>Doctor Name</Label>
    <Input
      name="name"
      defaultValue={doctor?.name ?? ""}
    />
  </div>

  <div className="flex flex-col gap-2">
    <Label>Specialization</Label>
    <Input
      name="specialization"
      defaultValue={doctor?.specialization ?? ""}
    />
  </div>

  <div className="flex flex-col gap-2">
    <Label>Hospital</Label>
    <Input
      name="hospital"
      defaultValue={doctor?.hospital ?? ""}
    />
  </div>

  <div className="flex flex-col gap-2">
    <Label>Degree</Label>
    <Input
      name="degrees"
      defaultValue={doctor?.degrees ?? ""}
    />
  </div>

</div>
    </div>

    {/* Experience */}
    <div>
      <h3 className="text-lg font-semibold mb-5">
        Experience & Fees
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  <div className="flex flex-col gap-2">
    <Label>Experience</Label>
    <Input
      name="experience"
      type="number"
      defaultValue={doctor?.experience ?? 0}
    />
  </div>

  <div className="flex flex-col gap-2">
    <Label>Consultation Fee ($)</Label>
    <Input
      name="fee"
      type="number"
      defaultValue={doctor?.fee ?? 0}
    />
  </div>

</div>
    </div>

    {/* Availability */}
    <div>
      <h3 className="text-lg font-semibold mb-5">
        Availability
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Input
          label="Languages"
          value={doctor?.languages?.join(", ") ?? ""}
          readOnly
        />

        <Input
          label="Practice Days"
          value={doctor?.practiceDays?.join(", ") ?? ""}
          readOnly
        />

        <Input
          label="Available Time Slots"
          value={doctor?.availableSlots?.join(", ") ?? ""}
          readOnly
        />

      </div>
    </div>

    {/* Profile Image */}
    <div>
      <h3 className="text-lg font-semibold mb-5">
        Profile Image
      </h3>

      <div className="flex flex-col gap-3">

        <Label>Upload New Image</Label>

        <div className="relative">
          <FiImage className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />

          <input
            type="file"
            accept=".jpg,.jpeg,.png,.webp"
            className="w-full rounded-xl border border-default-200 bg-default-100 pl-11 pr-4 py-4 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-700 cursor-pointer"
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (!file) return;

              if (file.size > 1024 * 1024) {
                toast.error("Maximum image size is 1 MB");
                e.target.value = "";
                return;
              }

              setLogo(file);
            }}
          />
        </div>

        <Image
          src={logo ? URL.createObjectURL(logo) : doctor?.image}
          alt="Profile Preview"
          width={120}
          height={120}
          className="rounded-full border-2 border-sky-500 object-cover"
        />

      </div>
    </div>

    {/* Biography */}
    <div>
      <h3 className="text-lg font-semibold mb-5">
        Biography
      </h3>

      <TextArea
      className="w-full"
        label="Professional Biography"
        name="description"
        defaultValue={doctor?.description ?? ""}
        rows={6}
      />
    </div>

    <div className="flex justify-end">
      <Button
        type="submit"
        className="px-8 rounded-xl bg-sky-600"
      >
        Update Profile
      </Button>
    </div>

  </div>
</Form>
  <Toaster/>
</div>
  );
}