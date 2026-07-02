import { auth } from "@/lib/auth";
import Testimonials from "./Tesimonials";
import { headers } from "next/headers";

const Reviews = async () => {
  const tokenData = await auth.api.getToken({
                         headers: await headers(),
                       });
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/all/reviews`,
    {
      cache: "no-store",
      headers : {
           authorization: `Bearer ${tokenData.token}`,
      }
    }
  );

  const result = await res.json();

  console.log(result);

  return <Testimonials reviews={result.data} />;
};

export default Reviews;