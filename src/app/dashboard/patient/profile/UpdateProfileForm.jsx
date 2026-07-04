"use client";

import { Button, Form, Input, Label } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiImage } from "react-icons/fi";

export default function UpdateProfileForm({ user, token }) {
    console.log("update", user);
  const router = useRouter();

  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    let logoUrl = user?.image || "";

    try {
      // Upload Image (Optional)
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
          setLoading(false);
          return;
        }

        logoUrl = imageResult.data.display_url;
      }

      const updateData = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        image: logoUrl,
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${user._id}`,
        {
          method: "PATCH",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updateData),
        }
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        toast.error(data.message || "Update failed");
        setLoading(false);
        return;
      }

      toast.success("Profile updated successfully");

      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Update Profile</h2>

        <p className="text-slate-500 mt-2">
          Keep your personal information up to date.
        </p>
      </div>

      <Form onSubmit={handleSubmit} className="w-full">
        <div className="w-full space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <Label>Full Name</Label>

              <Input
                name="name"
                defaultValue={user?.name || ""}
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <Label>Email Address</Label>

              <Input
                defaultValue={user?.email || ""}
                readOnly
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <Label>Phone Number</Label>

              <Input
                name="phone"
                defaultValue={user?.phone || ""}
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-2">
              <Label>Gender</Label>

              <Input
                value={
                  user?.gender
                    ? user.gender.charAt(0).toUpperCase() +
                      user.gender.slice(1)
                    : ""
                }
                readOnly
              />
            </div>

            {/* Image */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <Label>Profile Image</Label>

              <div className="relative">
                <FiImage className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />

                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                  className="w-full rounded-xl border border-default-200 bg-default-100
                  pl-11 pr-4 py-4 text-sm
                  file:border-0 file:bg-transparent
                  file:text-sm file:font-medium
                  file:text-zinc-700
                  cursor-pointer"
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
                src={
                  logo
                    ? URL.createObjectURL(logo)
                    : user?.image
                }
                alt="Profile Preview"
                width={100}
                height={100}
                className="mt-4 rounded-full border-2 border-sky-500 object-cover"
              />
            </div>

            {/* Role */}
            <div className="flex flex-col gap-2">
              <Label>Role</Label>

              <Input
                defaultValue={user?.role || ""}
                readOnly
              />
            </div>

            {/* Status */}
            <div className="flex flex-col gap-2">
              <Label>Status</Label>

              <Input
                defaultValue={user?.status || ""}
                readOnly
              />
            </div>

            {/* Plan */}
            <div className="flex flex-col gap-2">
              <Label>Current Plan</Label>

              <Input
                defaultValue={user?.plan || ""}
                readOnly
              />
            </div>

            {/* Created */}
            <div className="flex flex-col gap-2">
              <Label>Registration Date</Label>

              <Input
                defaultValue={
                  user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : ""
                }
                readOnly
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="px-10 bg-sky-600"
              isLoading={loading}
            >
              Update Profile
            </Button>
          </div>
        </div>
      </Form>

      <Toaster />
    </div>
  );
}