"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox,
  Checkbox,
  TimeField,
} from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiImage } from "react-icons/fi";

const DoctorProfileForm = () => {
  const [logo, setLogo] = useState(null);
const [loading, setLoading] = useState(false);
  const router = useRouter()
     const { data: session } = authClient.useSession();
      const user = session?.user ?? null;

   const handleSubmit = async (e) => {
    const {data : tokenData} = await authClient.token()
    setLoading(true);
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let logoUrl = "";

try {
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
} catch (err) {
  toast.error("Image upload failed");
  setLoading(false);
  return;
}

    const doctorData = {
doctorId: user?.id,
    email: user?.email,

    name: formData.get("name"),
    image: logoUrl,
    specialization: formData.get("specialization"),

    experience: Number(formData.get("experience")),
    fee: Number(formData.get("fee")),

    degrees: formData.get("degrees"),
    hospital: formData.get("hospital"),

    description: formData.get("description"),

    languages: formData.getAll("languages"),

    practiceDays: formData.getAll("practiceDays"),

    availableSlots: formData.getAll("availableSlots"),

    status: "Pending",


    }

     try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctors`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization : `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(doctorData),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong!");
    }

    toast.success("Doctor verification request submitted successfully!");

    e.target.reset();

    router.push("/dashboard/doctor");
  } catch (error) {
    console.error(error);

    toast.error(error.message || "Failed to submit verification request.");
  }
  finally {
  setLoading(false);
}
};

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Doctor Verification Application
          </h2>

          <p className="text-slate-500 mt-2">
            Submit your professional information for verification and
            appointment eligibility.
          </p>
        </div>

        <Form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Basic Information */}

          <div className="grid md:grid-cols-2 gap-5">
            <TextField>
              <Label>Doctor Full Name</Label>
              <Input
                name="name"
                placeholder="Dr. Michael Carter"
              />
            </TextField>

            <div className="space-y-2 w-full">
              <Label className="text-sm font-medium">
                Upload Photo
              </Label>
            
              <div className="relative">
                <FiImage className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
            
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                  className="w-full rounded-xl border border-default-200 bg-default-100
                  pl-11 pr-4 py-2 text-sm
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
            
              {logo && (
                <div className="flex justify-center mt-3">
                  <Image
                    src={URL.createObjectURL(logo)}
                    alt="Preview"
                    className="rounded-full object-cover border-2 border-sky-500"
                    width={40}
                    height={40}
                  />
                </div>
              )}
            
              <p className="text-xs text-slate-500">
                Accepted formats: JPG, PNG, WEBP • Maximum size: 1 MB
              </p>
            </div>
          </div>

          {/* Specialization */}

          <Select
            name="specialization"
            placeholder="Select Specialization"
          >
            <Label>Medical Specialization</Label>

            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>

            <Select.Popover>
              <ListBox>
                <ListBox.Item id="cardiology">
                  Cardiology
                </ListBox.Item>

                <ListBox.Item id="neurology">
                  Neurology
                </ListBox.Item>

                <ListBox.Item id="dentistry">
                  Dentistry
                </ListBox.Item>

                <ListBox.Item id="pediatrics">
                  Pediatrics
                </ListBox.Item>

                <ListBox.Item id="dermatology">
                  Dermatology
                </ListBox.Item>

                <ListBox.Item id="orthopedics">
                  Orthopedics
                </ListBox.Item>

                <ListBox.Item id="gynecology">
                  Gynecology
                </ListBox.Item>

                <ListBox.Item id="ent-specialist">ENT Specialist</ListBox.Item>

                <ListBox.Item id="ophthalmology">
                  Ophthalmology
                </ListBox.Item>

                <ListBox.Item id="psychiatry">
                  Psychiatry
                </ListBox.Item>

                <ListBox.Item id="urology">
                  Urology
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          {/* Professional Details */}

          <div className="grid md:grid-cols-2 gap-5">
            <TextField>
              <Label>Years of Experience</Label>
              <Input
                name="experience"
                type="number"
                placeholder="11"
              />
            </TextField>

            <TextField>
              <Label>Consultation Fee ($)</Label>
              <Input
                name="fee"
                type="number"
                placeholder="120"
              />
            </TextField>

          </div>

          <TextField>
            <Label>Academic Qualification</Label>
            <Input
              name="degrees"
              placeholder="Stanford School of Medicine"
            />
          </TextField>

          <TextField>
            <Label>Hospital / Clinic Name</Label>
            <Input
              name="hospital"
              placeholder="Skin Health Institute"
            />
          </TextField>

          {/* Languages */}

          <div>
            <Label className="mb-4 block">
              Languages Spoken
            </Label>

            <div className="flex flex-wrap gap-5">
              <div className="flex items-center gap-2">
                <Checkbox id="english" name="languages" value="English">
                  <Checkbox.Content>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                  </Checkbox.Content>
                </Checkbox>

                <Label htmlFor="english" name="languages" value="English">
                  English
                </Label>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="bengali" name="languages" value="Bengali">
                  <Checkbox.Content>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                  </Checkbox.Content>
                </Checkbox>

                <Label htmlFor="bengali">
                  Bengali
                </Label>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="hindi" name="languages" value="hindi">
                  <Checkbox.Content>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                  </Checkbox.Content>
                </Checkbox>

                <Label htmlFor="hindi"name="languages" value="Hindi">
                  Hindi
                </Label>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="arabic" name="languages" value="arabic">
                  <Checkbox.Content>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                  </Checkbox.Content>
                </Checkbox>

                <Label htmlFor="arabic" name="languages" value="Arabic">
                  Arabic
                </Label>
              </div>
            </div>
          </div>

          {/* Practice Days */}

          <div>
            <Label className="mb-4 block">
              Available Practice Days
            </Label>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <div
                  key={day}
                  className="flex items-center gap-2"
                >
                  <Checkbox  name="practiceDays" value={day}>
                    <Checkbox.Content>
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                    </Checkbox.Content>
                  </Checkbox>

                  <Label htmlFor={day}>
                    {day}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Appointment Slots */}

          <div className="grid md:grid-cols-4 gap-5">
             <TextField>
    <Label>Time Slot 1</Label>
    <Input type="time" name="availableSlots" />
  </TextField>

  <TextField>
    <Label>Time Slot 2</Label>
    <Input type="time" name="availableSlots" />
  </TextField>

  <TextField>
    <Label>Time Slot 3</Label>
    <Input type="time" name="availableSlots" />
  </TextField>

  <TextField>
    <Label>Time Slot 4</Label>
    <Input type="time" name="availableSlots" />
  </TextField>
          </div>

          {/* Biography */}

          <TextField>
            <Label>Professional Biography</Label>

            <TextArea
              name="description"
              placeholder="Describe your experience, expertise, treatment areas, and professional background..."
              className="h-40"
            />
          </TextField>

          {/* Terms */}

          <div className="flex items-start gap-3">
            <Checkbox id="terms">
              <Checkbox.Content>
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
              </Checkbox.Content>
            </Checkbox>

            <Label htmlFor="terms">
              I confirm that all submitted information and
              credentials are authentic and may be verified
              by the platform administration.
            </Label>
          </div>

          <div className="pt-4">
            <Button
  type="submit"
  isDisabled={loading}
  className="bg-sky-600 text-white px-10"
>
  {loading ? "Submitting..." : "Submit Verification Request"}
</Button>
          </div>
        </Form>
      </div>
      <Toaster/>
    </div>
  );
};

export default DoctorProfileForm;