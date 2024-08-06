"use client";

import AuthForm from "@/components/authform";
import Link from "next/link";

export default function Signup() {
  const signup = (email: string, password: string) => {
    console.log(`This is signup func ${email} ${password}`);
  };
  return (
    <>
      <AuthForm btnLabel={"Signup"} btnFunc={signup} />
      <p>
        Already have an acoount? <Link href={"./login"}>Login here.</Link>
      </p>
    </>
  );
}
