import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/question/1",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
