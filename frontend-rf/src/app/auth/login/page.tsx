'use client';
import React from "react";
import { loginUser } from "@/utils/Auth";
import { useRouter } from "next/navigation";
import AuthFormComp from "@/components/AuthForm";
import { Image } from "@heroui/react";
export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (username: string, password: string) => {
    const success = await loginUser(username, password);

    if (success) {
      router.push("/");
      console.log('Welcome', username)
    } else {
      console.log('Authentication failed');
    }
  };

  return (
    <div className="grid 
    min-h-screen
    p-5
    xl:grid-flow-col
    xl:py-16
    xl:min-h-screen
    xl:grid-cols-8
">
      <div className="
    col-start-1
    xl:col-span-6
    xl:col-start-2
    xl:grid
    xl:grid-cols-2
    ">
        < div className="bg-gray-100 xl:w-full xl:block xl:p-3 rounded-xl">
          {/* <Image src="/assets/login-logo.png" alt="Logo"
            className='hidden xl:block'
          /> */}
        </div>

        <div className="grid grid-rows-6">
          <div className='flex flex-col xl:w-3/4 xl:justify-start xl:align-middle xl:p-3 xl:h-full gap-2 py-12 
            row-start-3
            row-span-3
        '>
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-sm">Welcome back MRP Team</p>
            <AuthFormComp onSubmit={handleSubmit} mode="login" />
          </div>
        </div>
      </div>
    </div>
  );
}

