"use client";

import {
  Button,
  Form,
  TextField,
  Label,
  Input,
  TextArea,
  FieldError,
} from "@heroui/react";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiAlertTriangle,
} from "react-icons/fi";

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    console.log(data);
  };

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="uppercase tracking-widest text-sky-600 border border-sky-200 bg-sky-50 mx-auto p-3 w-70 rounded-full text-sm font-semibold">
  Contact & Support Center
</p>

<h1 className="text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
  We are Here to Assist You with Your Healthcare Needs
</h1>

<p className="mt-6 text-lg text-slate-500">
  Have questions about appointments, doctor verification, account access,
  payments, or healthcare services? Our support team is available to provide
  prompt assistance and guidance.
</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
  Contact Information
</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-sky-50 flex items-center justify-center">
                    <FiMapPin className="text-sky-600 text-xl" />
                  </div>

                  <div>
                   <h4 className="font-semibold text-slate-900">
  Corporate Office
</h4>

<p className="text-slate-500">
  MediCare Connect Headquarters, Healthcare Innovation Center
</p>

<p className="text-slate-500">
  Dhaka, Bangladesh
</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <FiPhone className="text-blue-600 text-xl" />
                  </div>

                  <div>
                   <h4 className="font-semibold text-slate-900">
  Customer Support Hotline
</h4>

<p className="text-slate-500">
  Available 24 Hours a Day, 7 Days a Week
</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-purple-50 flex items-center justify-center">
                    <FiMail className="text-purple-600 text-xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
  Support Email
</h4>

<p className="text-slate-500">
  support@medicareconnect.com
</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-red-600 font-bold mb-3 mt-5">
  <FiAlertTriangle />
  Important Notice
</div>

<p className="text-red-500 text-sm leading-relaxed">
  MediCare Connect is designed for appointment management and healthcare
  coordination. For medical emergencies, immediately contact your local
  emergency services or visit the nearest hospital emergency department.
</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
             <h3 className="text-2xl font-bold text-slate-900 mb-8">
  Send Us a Message
</h3>

              <Form
                onSubmit={onSubmit}
                className="w-full flex flex-col gap-5"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full">
                  <TextField
                    isRequired
                    name="name"
                    className="w-full"
                  >
                    <Label>Your Full Name *</Label>
                    <Input placeholder="e.g. Alice Miller" />
                    <FieldError />
                  </TextField>

                  <TextField
                    isRequired
                    name="email"
                    type="email"
                    className="w-full"
                    validate={(value) => {
                      if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          value
                        )
                      ) {
                        return "Please enter a valid email address";
                      }

                      return null;
                    }}
                  >
                    <Label>Your Email Address *</Label>
                    <Input placeholder="e.g. alice@gmail.com" />
                    <FieldError />
                  </TextField>
                </div>

                <TextField
                  name="subject"
                  className="w-full"
                >
                  <Label>Subject</Label>
                  <Input placeholder="Briefly describe your inquiry" />
                  <FieldError />
                </TextField>

                <TextField
                  isRequired
                  name="message"
                  className="w-full"
                >
                  <Label>How Can We Help You? *</Label>

                  <TextArea
                    placeholder="Provide details about your question, concern, or support request..."
                    className="min-h-36"
                  />

                  <FieldError />
                </TextField>

                <Button
                  type="submit"
                  className="bg-sky-600 hover:bg-sky-700 text-white px-8"
                  size="lg"
                >
                  Submit Support Request
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;