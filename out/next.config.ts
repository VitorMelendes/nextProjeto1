import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },

  // 🔥 ADICIONE ISSO
  allowedDevOrigins: ["192.168.56.1"],
};

export default nextConfig;