import { Button } from "@heroui/react";
import Image from "next/image";
import {
  FiShield,
  FiCalendar,
  FiHeart,
} from "react-icons/fi";
import bannerImg from "../../../../public/assets/banner.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 text-sm font-semibold">
    <FiShield />
    TRUSTED DIGITAL HEALTHCARE PLATFORM
  </div>

  <h1 className="mt-8 text-3xl leading-10 md:leading-18 md:text-4xl lg:text-6xl font-extrabold text-slate-900">
    Modern Healthcare Connected Through <span className="text-sky-600"> Trusted Care </span> Built for Everyone.
  </h1>

  <p className="mt-8 text-lg text-slate-500 leading-9 max-w-2xl">
    Seamlessly connect with verified healthcare professionals,
    schedule appointments, manage medical records, and access
    quality care through a secure and centralized healthcare
    management platform.
  </p>

  <div className="mt-10 flex flex-wrap gap-4">
    <Link href={'/find-doctor'}
    >
     <Button className="bg-sky-600 text-white rounded-xl py-2 px-8 flex items-center gap-2.5 hover:bg-sky-700 transition"> <FiCalendar />
      Find a Doctor</Button>
    </Link>

    <Link href={'/about'}>
    <Button

      className="rounded-xl bg-transparent px-6 border border-sky-600 text-sky-600"
    >
      Learn More
    </Button>
    </Link>
  </div>
</div>

          {/* Right */}
          <div className="relative">
            <div className="overflow-hidden rounded-[32px] shadow-xl">
              <Image
                src={bannerImg}
                alt="Healthcare"
                width={800}
                height={600}
                className="w-full h-[520px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute left-6 bottom-6 bg-white rounded-3xl shadow-lg px-5 py-4 flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-sky-500 flex items-center justify-center">
                <FiHeart className="text-white text-2xl" />
              </div>

              <div>
                <h4 className="font-bold text-slate-900">
                  24/7 Digital ER
                </h4>

                <p className="text-sm text-slate-500">
                  Emergency roster online
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}