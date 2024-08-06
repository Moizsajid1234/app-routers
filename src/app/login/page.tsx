"use client";

import AuthForm from "@/components/authform";
import Link from "next/link";

export default function Login() {
  const login = (email: string, password: string) => {
    console.log(`This is login func ${email} ${password}`);
  };
  return (
    <>
      <AuthForm btnLabel={"Login"} btnFunc={login} />
      <p>
        You don't have account? <Link href={"./signup"}>Sigup here.</Link>
      </p>
    </>
  );
}
