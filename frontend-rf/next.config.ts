import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */

  image:{
    remotePatterns:[
      {
        hostname: "cdn.myanimelist.net"
      }
    ]
  }
};

export default nextConfig;
