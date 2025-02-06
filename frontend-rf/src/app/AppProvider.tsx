'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isAuthenticated } from "@/utils/Auth";
import Loading from "@/components/Loading";
import Alert from "@/components/Alert";
import HeaderComp from "@/components/Header";
import SidebarComp from "@/components/Sidebar";
import { HeroUIProvider } from '@heroui/react'

export function AppProviders({ children }: { children: React.ReactNode }) {

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAuthenticated()) {
        setShowAlert(true);
      } else {
        setLoading(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <HeroUIProvider>
      {loading && (
        <div className="w-full top-0 left-0 absolute min-h-screen backdrop-blur-sm z-10 /30">
          <div className="flex flex-col items-center min-h-screen justify-center">
            <div className="mb-6">
              <Loading />
            </div>
          </div>
        </div>
      )}
      {showAlert && (
        <div className="w-full top-0 left-0 absolute min-h-screen backdrop-blur-sm z-10 /30">
          <div className="flex flex-col items-center min-h-screen justify-center">
            <Alert
              colorA="danger"
              contentA="You need to log in to access this page."
              titleA="Access Denied"
              buttonTextA="Go to Login"
              hrefA="/auth/login"
            />
          </div>
        </div>
      )}
      {!loading && !showAlert && (
        <div className="min-h-screen z-0 flex">
          <SidebarComp />
          <div className="flex-1">
            <HeaderComp />
            <main className="p-6">
              {children}  
            </main>
          </div>
        </div>
      )}
    </HeroUIProvider>
  )
}

export default AppProviders;