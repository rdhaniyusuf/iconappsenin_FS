'use client'

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isAuthenticated } from "@/utils/Auth";
import Loading from "@/components/Loading";
import Alert from "@/components/Alert";
import HeaderComp from "@/components/Header";
import SidebarComp from "@/components/Sidebar";
import { HeroUIProvider } from '@heroui/react'

export function AppProviders({ children }: { children: React.ReactNode }) {

  const router = useRouter();
  const pathname = usePathname(); // Get current route
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setLoading(true); // Reset loading state on route change

    const checkAuth = () => {
      if (!isAuthenticated() && pathname !== "/auth/login") {
        setShowAlert(true);
      } else {
        setShowAlert(false);
      }
      setLoading(false);
    };

    const timer = setTimeout(checkAuth, 1000); // Reduced delay for better UX

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run when the route changes

  return (
    <HeroUIProvider>
      {loading && (
        <div className="w-full top-0 left-0 absolute min-h-screen backdrop-blur-sm z-10">
          <div className="flex flex-col items-center min-h-screen justify-center">
            <div className="mb-6">
              <Loading />
            </div>
          </div>
        </div>
      )}
      {!loading && showAlert && pathname !== "/auth/login" && (
        <div className="w-full top-0 left-0 absolute min-h-screen backdrop-blur-sm z-10">
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
          {pathname !== "/auth/login" && <SidebarComp />}
          <div className="flex-1">
            {pathname !== "/auth/login" && <HeaderComp />}
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
