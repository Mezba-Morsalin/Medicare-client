"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa6";

const PrescriptionForm = () => {
  const router = useRouter()
  const { data: session } = authClient.useSession();
    const doctor = session?.user ?? null;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const prescription = {
      doctorId : doctor?.id,
      doctorName : doctor?.name,
      patientName: formData.get("patientName"),
      diagnosis: formData.get("diagnosis"),
      symptoms: formData.get("symptoms"),
      medicine1: formData.get("medicine1"),
      dosage1: formData.get("dosage1"),
      frequency1: formData.get("frequency1"),
      duration1: formData.get("duration1"),
      medicine2: formData.get("medicine2"),
      dosage2: formData.get("dosage2"),
      frequency2: formData.get("frequency2"),
      duration2: formData.get("duration2"),
      advice: formData.get("advice"),
      followUp: formData.get("followUp"),
    };

    console.log(prescription);
    try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prescriptions`,
      {
        method: "POST",
        cache : "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prescription),
      }
    );

    const data = await res.json();

    if (data.success) {
      toast.success("Prescription created successfully");

      e.target.reset();

      setTimeout(() => {
        router.push("/dashboard/doctor/prescriptions");
        router.refresh();
      }, 1000);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};


  return (
    <div className="max-w-6xl mx-auto">
        <div className="mb-5">
            <Link href={'/dashboard/doctor/prescriptions'}><Button className="bg-white text-sky-600 shadow"><FaArrowLeft/> Back</Button></Link>
        </div>
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Create Prescription
          </h2>

          <p className="text-slate-500 mt-2">
            Create and issue a prescription for your patient.
          </p>
        </div>

        <Form
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Patient */}

          <div className="grid md:grid-cols-2 gap-5">
            <TextField>
              <Label>Patient Name</Label>
              <Input
                name="patientName"
                placeholder="John Doe"
              />
            </TextField>

            <TextField>
              <Label>Diagnosis</Label>
              <Input
                name="diagnosis"
                placeholder="Seasonal Allergy"
              />
            </TextField>
          </div>

          <TextField>
            <Label>Symptoms</Label>

            <TextArea
              name="symptoms"
              placeholder="Fever, headache, sore throat..."
              className="h-28"
            />
          </TextField>

          {/* Medicine 1 */}

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Medicine #1
            </h3>

            <div className="grid md:grid-cols-4 gap-5">
              <TextField>
                <Label>Medicine</Label>
                <Input
                  name="medicine1"
                  placeholder="Napa"
                />
              </TextField>

              <TextField>
                <Label>Dosage</Label>
                <Input
                  name="dosage1"
                  placeholder="500mg"
                />
              </TextField>

              <TextField>
                <Label>Frequency</Label>
                <Input
                  name="frequency1"
                  placeholder="3 times/day"
                />
              </TextField>

              <TextField>
                <Label>Duration</Label>
                <Input
                  name="duration1"
                  placeholder="5 Days"
                />
              </TextField>
            </div>
          </div>

          {/* Medicine 2 */}

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Medicine #2
            </h3>

            <div className="grid md:grid-cols-4 gap-5">
              <TextField>
                <Label>Medicine</Label>
                <Input
                  name="medicine2"
                  placeholder="Ace"
                />
              </TextField>

              <TextField>
                <Label>Dosage</Label>
                <Input
                  name="dosage2"
                  placeholder="1 Tablet"
                />
              </TextField>

              <TextField>
                <Label>Frequency</Label>
                <Input
                  name="frequency2"
                  placeholder="After Meal"
                />
              </TextField>

              <TextField>
                <Label>Duration</Label>
                <Input
                  name="duration2"
                  placeholder="7 Days"
                />
              </TextField>
            </div>
          </div>

          {/* Advice */}

          <TextField>
            <Label>Doctor Advice</Label>

            <TextArea
              name="advice"
              className="h-32"
              placeholder="Drink plenty of water, take enough rest, avoid cold drinks..."
            />
          </TextField>

          <TextField>
            <Label>Follow-up Date</Label>

            <Input
              type="date"
              name="followUp"
            />
          </TextField>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-sky-600 text-white px-10"
            >
              Save Prescription
            </Button>
          </div>
        </Form>
      </div>
      <Toaster/>
    </div>
  );
};

export default PrescriptionForm;