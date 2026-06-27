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
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const DoctorProfileForm = () => {
  const router = useRouter()
     const { data: session } = authClient.useSession();
      const user = session?.user ?? null;

   const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const doctorData = {
doctorId: user?.id,
    email: user?.email,

    name: formData.get("name"),
    image: formData.get("image"),
    specialization: formData.get("specialization"),

    experience: Number(formData.get("experience")),
    fee: Number(formData.get("fee")),

    degrees: formData.get("degrees"),
    hospital: formData.get("hospital"),

    description: formData.get("description"),

    languages: formData.getAll("languages"),

    practiceDays: formData.getAll("practiceDays"),

    availableSlots: formData.getAll("availableSlots"),

    status: doctor ? doctor.status : "Pending",


    }

     try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctors`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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

            <TextField>
              <Label>Profile Image URL</Label>
              <Input
                name="image"
                placeholder="https://example.com/image.png"
              />
            </TextField>
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

                <Label htmlFor="english" name="languages" value="Bengali">
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
                <Checkbox id="hindi">
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
                <Checkbox id="arabic">
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
              className="bg-sky-600 text-white px-10"
            >
              Submit Verification Request
            </Button>
          </div>
        </Form>
      </div>
      <Toaster/>
    </div>
  );
};

export default DoctorProfileForm;