import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url(),
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_GITHUB_URL: z.string().url(),
    NEXT_PUBLIC_GA_ID: z.string().optional(),
    // Added ImageKit base URL here
    NEXT_PUBLIC_IMAGEKIT_BASE_URL: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    // Mapped the environment variable here
    NEXT_PUBLIC_IMAGEKIT_BASE_URL: process.env.NEXT_PUBLIC_IMAGEKIT_BASE_URL,
  }
});
