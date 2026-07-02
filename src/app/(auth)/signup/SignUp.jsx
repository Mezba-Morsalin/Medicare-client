"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  FieldError,
} from "@heroui/react";
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";

import {
  FiUser,
  FiMail,
  FiPhone,
  FiImage,
  FiLock,
} from "react-icons/fi";

export default function SignUpPage() {
  const [logo, setLogo] = useState(null);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
   const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
setLoading(true);
    setMessage("");
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

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

    console.log(user);
     const plan = user.role === "doctor" ? "doctor_free" : "patient_free"


    try {
      const {data, error } = await authClient.signUp.email({
        name: user.name,
  image: logoUrl,
  email: user.email,
  password: user.password,

  role: user.role,
  gender: user.gender,
  phone: user.phone,
  specialization: user.specialization,
  status: "Active",
        plan
      });

      if (error) {
        setIsSuccess(false);
        setMessage(error.message || "Failed to create account.");
        return;
      }

      if (data) {
        setIsSuccess(true);
      setMessage(
        "Your account has been created successfully."
      );

      e.target.reset();
      setTimeout(() => {
  router.push("/");
}, 2000);
      }
    } catch (err) {
      setIsSuccess(false);
      setMessage("Something went wrong. Please try again.");
    }
    finally {
    setLoading(false);
  }
  };
  const handleGoogleLogin = async () => {
   const user = await authClient.signIn.social({
    provider: "google",
    callbackURL : "/"
  });
  if(user) {
    toast.success("Sign Up Successfully With Your Google Account")
  }
}

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 ">
        {/* LEFT SIDE */}
        <div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 max-w-xl">
  Launch Your Digital <br /> Medicare <span className="text-sky-600">Connect</span> Account
</h1>

<p className="mt-8 text-lg text-slate-600 max-w-xl leading-relaxed">
  Create your MediCare Connect profile to schedule appointments,
  connect with verified doctors, access medical records, and manage
  your healthcare journey from a single secure platform.
</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
  Launch Your MediCare Account
</h1>

<p className="mt-2 text-sm text-slate-500">
  Set up your secure healthcare account and connect with trusted medical professionals in minutes.
</p>
          </div>

          <Form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            {/* Name */}
            <TextField
              isRequired
              name="name"
              className="w-full"
            >
              <Label>Full Legal Name *</Label>

              <div className="relative w-full">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" />

                <Input
                  className="w-full pl-10"
                  placeholder="e.g. Alice Miller"
                />
              </div>
            </TextField>

            {/* Email + Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <TextField
                isRequired
                name="email"
                className="w-full"
              >
                <Label>Email Coordinates *</Label>

                <div className="relative w-full">
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" />

                  <Input
                    type="email"
                    className="w-full pl-10"
                    placeholder="e.g. alice@gmail.com"
                  />
                </div>
              </TextField>

              <Select
                name="role"
                className="w-full"
                placeholder="Select role"
              >
                <Label>Account Role *</Label>

                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item
                      id="patient"
                      textValue="Patient"
                    >
                      Patient
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="doctor"
                      textValue="Doctor"
                    >
                      Doctor
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Phone + Gender */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <TextField
                name="phone"
                className="w-full"
              >
                <Label>Primary Voice Phone</Label>

                <div className="relative w-full">
                  <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" />

                  <Input
                    className="w-full pl-10"
                    placeholder="+1 555-019-2834"
                  />
                </div>
              </TextField>

              <Select
                name="gender"
                className="w-full"
                placeholder="Select gender"
              >
                <Label>Gender Identity</Label>

                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item
                      id="male"
                      textValue="Male"
                    >
                      Male
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="female"
                      textValue="Female"
                    >
                      Female
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="other"
                      textValue="Other"
                    >
                      Other
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
              <Select
  name="specialization"
  className="w-full"
  placeholder="Select Specialization (Doctors Only)"
>
  <Label>Medical Specialization</Label>

  <Select.Trigger>
    <Select.Value />
    <Select.Indicator />
  </Select.Trigger>

  <Select.Popover>
    <ListBox>
      <ListBox.Item id="cardiology">Cardiology</ListBox.Item>

      <ListBox.Item id="neurology">Neurology</ListBox.Item>

      <ListBox.Item id="dentistry">Dentistry</ListBox.Item>

      <ListBox.Item id="pediatrics">Pediatrics</ListBox.Item>

      <ListBox.Item id="dermatology">Dermatology</ListBox.Item>

      <ListBox.Item id="orthopedics">Orthopedics</ListBox.Item>

      <ListBox.Item id="gynecology">Gynecology</ListBox.Item>

      <ListBox.Item id="ophthalmology">Ophthalmology</ListBox.Item>

      <ListBox.Item id="psychiatry">Psychiatry</ListBox.Item>

      <ListBox.Item id="ent-specialist">ENT Specialist</ListBox.Item>

      <ListBox.Item id="oncology">Oncology</ListBox.Item>

      <ListBox.Item id="urology">Urology</ListBox.Item>

      <ListBox.Item id="endocrinology">Endocrinology</ListBox.Item>

      <ListBox.Item id="general-physician">
        General Physician
      </ListBox.Item>

      <ListBox.Item id="pulmonology">
        Pulmonology
      </ListBox.Item>

      <ListBox.Item id="gastroenterology">
        Gastroenterology
      </ListBox.Item>
    </ListBox>
  </Select.Popover>
</Select>

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

  {logo && (
    <div className="flex justify-center mt-3">
      <Image
        src={URL.createObjectURL(logo)}
        alt="Preview"
        className=" rounded-full object-cover border-2 border-sky-500"
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

            {/* Photo */}

            {/* Password */}
            <TextField
              isRequired
              name="password"
              className="w-full relative"
            >
              <Label>Account Password</Label>

              <div className="relative w-full">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" />

                <Input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10"
                  placeholder="Type Your Password"
                />
                 <span onClick={()=> setShowPassword(!showPassword)} className="absolute top-3 cursor-pointer right-5">
                      {
                          showPassword ? <FaEye/> : <FaEyeSlash/>
                      }
                    </span>
              </div>
            </TextField>
         {/* Success / Error Message */}
        {message && (
          <div
            className={`w-full rounded-xl px-4 py-3 text-sm font-medium ${
              isSuccess
                ? "bg-green-500/10 border border-green-500/20 text-green-400"
                : "bg-red-500/10 border border-red-500/20 text-red-400"
            }`}
          >
            {message}
          </div>
        )}

            <Button
              type="submit"
               isDisabled={loading}
              className="mt-2 h-12 w-full rounded-xl bg-sky-600 text-white font-semibold"
            >
              {loading ? (
    <span className="flex items-center gap-2">
      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      Creating Account...
    </span>
  ) : (
    <>
      Create Your Medicare Profile
    </>
  )}
              
            </Button>
          </Form>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex-1 border-t border-zinc-300"></div>

            <p className="text-sm text-zinc-500 font-medium">
              OR
            </p>

            <div className="flex-1 border-t border-zinc-300"></div>
          </div>

          <Button onClick={()=> handleGoogleLogin()}
            className="mt-6 w-full bg-white border border-zinc-300 text-zinc-700 rounded-xl hover:bg-gray-300 transition duration-300"
          >
            <FcGoogle size={22} />
            Sign Up With Google
          </Button>
          <div className='flex justify-center mt-5'>
                    <p className='text-slate-600'>Already have an account? <span className='text-sky-600 font-bold'><Link href={'/signin'}>Sign In</Link></span></p>
                  </div>
        </div>
      </div>
      <Toaster/>
    </div>
  );
}