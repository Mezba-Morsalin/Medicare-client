"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Form, Label, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const UpdatePrescription = ({ prescription }) => {
    const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const { data: tokenData } = await authClient.token();
    const formData = new FormData(e.target);

    const updatedPrescription = {
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

    console.log(updatedPrescription);

    try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prescriptions/${prescription._id}`,
      {
        method: "PATCH",
        cache : "no-store",
        headers: {
          "Content-Type": "application/json",
          authorization : `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(updatedPrescription),
      }
    );

    const data = await res.json();

    if (data.success) {
      toast.success("Prescription updated successfully");

      router.refresh();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};


  return (
    <Modal>
      <Button className="bg-sky-600 text-white rounded-xl">
        Update
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="max-w-5xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Update Prescription</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Form onSubmit={handleSubmit} className="space-y-8">

                <div className="grid md:grid-cols-2 gap-5 w-full">
                  <div className="space-y-2">
                    <Label>Patient Name</Label>

                    <input
                      type="text"
                      name="patientName"
                      defaultValue={prescription.patientName}
                      className="w-full border rounded-xl px-4 py-3 outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Diagnosis</Label>

                    <input
                      type="text"
                      name="diagnosis"
                      defaultValue={prescription.diagnosis}
                      className="w-full border rounded-xl px-4 py-3 outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="space-y-2 w-full">
                  <Label>Symptoms</Label>

                  <textarea
                    name="symptoms"
                    defaultValue={prescription.symptoms}
                    rows={4}
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-sky-500"
                  />
                </div>

                <div className="w-full">
                  <h3 className="font-semibold text-lg mb-4">
                    Medicine #1
                  </h3>

                  <div className="grid md:grid-cols-4 gap-5">
                    <input
                      type="text"
                      name="medicine1"
                      defaultValue={prescription.medicine1}
                      placeholder="Medicine"
                      className="border rounded-xl px-4 py-3"
                    />

                    <input
                      type="text"
                      name="dosage1"
                      defaultValue={prescription.dosage1}
                      placeholder="Dosage"
                      className="border rounded-xl px-4 py-3"
                    />

                    <input
                      type="text"
                      name="frequency1"
                      defaultValue={prescription.frequency1}
                      placeholder="Frequency"
                      className="border rounded-xl px-4 py-3"
                    />

                    <input
                      type="text"
                      name="duration1"
                      defaultValue={prescription.duration1}
                      placeholder="Duration"
                      className="border rounded-xl px-4 py-3"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <h3 className="font-semibold text-lg mb-4">
                    Medicine #2
                  </h3>

                  <div className="grid md:grid-cols-4 gap-5">
                    <input
                      type="text"
                      name="medicine2"
                      defaultValue={prescription.medicine2}
                      placeholder="Medicine"
                      className="border rounded-xl px-4 py-3"
                    />

                    <input
                      type="text"
                      name="dosage2"
                      defaultValue={prescription.dosage2}
                      placeholder="Dosage"
                      className="border rounded-xl px-4 py-3"
                    />

                    <input
                      type="text"
                      name="frequency2"
                      defaultValue={prescription.frequency2}
                      placeholder="Frequency"
                      className="border rounded-xl px-4 py-3"
                    />

                    <input
                      type="text"
                      name="duration2"
                      defaultValue={prescription.duration2}
                      placeholder="Duration"
                      className="border rounded-xl px-4 py-3"
                    />
                  </div>
                </div>

                <div className="space-y-2 w-full">
                  <Label>Doctor Advice</Label>

                  <textarea
                    name="advice"
                    defaultValue={prescription.advice}
                    rows={4}
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-sky-500"
                  />
                </div>

                <div className="space-y-2 w-full">
                  <Label>Follow-up Date</Label>

                  <input
                    type="date"
                    name="followUp"
                    defaultValue={prescription.followUp}
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-sky-500"
                  />
                </div>

                <div className="flex justify-end w-full">
                  <Button
                    type="submit"
                    className="bg-sky-600 text-white rounded-xl px-8"
                  >
                    Update Prescription
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
      <Toaster/>
    </Modal>
  );
};

export default UpdatePrescription;