'use client';
import React from "react";
import { loginUser } from "@/utils/Auth";
import { usePathname, useRouter } from "next/navigation";
import AuthFormComp from "@/components/AuthForm";
import { isAuthenticated } from "@/utils/Auth";
import Loading from "@/components/Loading";
import Alert from "@/components/Alert";
// import { Image } from "@heroui/react";
export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const pathname = usePathname(); // Get current route

  const handleSubmit = async (username: string, password: string) => {
    const success = await loginUser(username, password);

    if (success) {
      router.push("/");
      console.log('Welcome', username)
    } else {
      console.log('Authentication failed');
    }
  };

  React.useEffect(() => {
    setLoading(true);
    const checkAuth = () => {
      if (isAuthenticated() && pathname === "/auth/login") {
        console.log(isAuthenticated())
        setShowAlert(true);
        // router.push("/");
      }
      setLoading(false);
    }
    const timer = setTimeout(checkAuth, 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="w-full top-0 left-0 absolute min-h-screen backdrop-blur-sm z-10">
          <div className="flex flex-col items-center min-h-screen justify-center">
            <div className="mb-6">
              <Loading />
            </div>
          </div>
        </div>
      )}

      {!loading && showAlert && (
        <div className="w-full top-0 left-0 absolute min-h-screen backdrop-blur-sm z-10">
          <div className="flex flex-col items-center min-h-screen justify-center">
            <Alert
              colorA="success"
              contentA="You has login."
              titleA="Access Granted"
              buttonTextA="Back to Home"
              hrefA="/"
            />
          </div>
        </div>
      )
      }
      {!loading && !showAlert && (
        loginForm(handleSubmit)
        )}
    </>
  )
}

const loginForm = (handleSubmit: any) => {
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
  )
}
